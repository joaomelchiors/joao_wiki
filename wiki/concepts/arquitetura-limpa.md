---
title: "Arquitetura Limpa (Clean Architecture)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-27
tags: ["arquitetura-limpa", "camadas", "caso-de-uso", "adaptadores", "typescript"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-01-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-02-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-6-casoDeUso-parte1.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-7-casoDeUso-parte2.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-9-contexto.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-15-tratamento-de-erros.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-16-arquitetura-hexagonal.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-20-repositorio_usuario.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md
  - ./ddd.md
  - ./objeto-de-valor.md
  - ./agregado.md
---

# Arquitetura Limpa (Clean Architecture)

## Definição

Arquitetura em camadas concêntricas onde as dependências apontam sempre para o centro (domínio). A camada mais interna contém as regras de domínio (entidades e VOs); a seguinte contém os casos de uso; depois vêm os adaptadores; e a mais externa é a infraestrutura/interface (web, banco de dados, frameworks).

## Compreensão Atual

### Camadas (de dentro para fora)

| Camada | Conteúdo | Pode depender de |
|---|---|---|
| **Domínio (Model)** | Entidades, Objetos de Valor, Serviços de Domínio | Nada externo |
| **Casos de Uso (Application)** | Use Cases / Application Services | Domínio |
| **Adaptadores** | Controllers, Presenters, Gateways | Casos de uso |
| **Infraestrutura / Web** | Frameworks, banco de dados, UI | Adaptadores |

### Princípio Central

O módulo **core** (domínio + casos de uso) não deve conter nenhuma linha de framework, biblioteca de infraestrutura ou lógica de banco de dados. Ele deve ser puramente regras de negócio.

### Caso de Uso como Interface Genérica

```typescript
// Implementado na imersão (módulo shared)
interface UseCase<Input, Output> {
  execute(input: Input): Promise<Output>;
}
```

- Todo caso de uso recebe uma `Input` e retorna uma `Output` (pode ser Promise para assíncrono).
- Um mesmo caso de uso pode ser chamado tanto do front-end (ex.: validação local) quanto do back-end, desde que o ambiente disponha do que o UC precisa (ex.: acesso a banco de dados via inversão de dependência).

### Organização do Código por Módulos e Agregados

```
apps/
  backend/       ← NestJS
  frontend/      ← Next.js
packages/
  shared/        ← código compartilhado (VOs base, interfaces genéricas)
  auth/          ← módulo de autenticação
    src/
      user/      ← agregado
        model/   ← entidade + VOs
        usecase/ ← casos de uso
      group/
      profile/
      permission/
```

- Cada módulo é um projeto físico separado (package no monorepo), tornando explícitas as fronteiras.
- Dentro de cada módulo, a organização é por **agregado** (não por tipo de arquivo).

### Arquitetura Hexagonal / Portas e Adaptadores

O padrão Portas e Adaptadores (também chamado Arquitetura Hexagonal) é a implementação concreta da inversão de dependência. Foi implementado na aula 16:

- **Porta**: interface definida **dentro** do módulo core, na borda do módulo (pasta `provider/`). Representa o contrato que o mundo externo deve cumprir.
- **Adaptador**: implementação concreta da porta, que vive **fora** do core (no backend ou em outro pacote). Ex.: `PrismaUserRepository`, `InMemoryUserRepository`.
- **O hexágono**: o nome é apenas uma convenção visual do criador do padrão — não tem significado especial.

```
auth/src/user/
  model/              ← entidade + VOs
  usecase/            ← casos de uso
  provider/           ← interfaces (portas)
    usuario.repository.ts      ← porta de persistência
    usuario.queries.ts         ← porta de consultas (CQS)
    criptografia.provider.ts   ← porta de criptografia (hash + comparação)
```

**Regra**: o módulo core importa apenas a interface; nunca a implementação concreta. A injeção é feita externamente (pelo framework ou por composição manual).

#### Exemplo: `CriptografiaProvider` (Aula 18)

```typescript
// provider/criptografia.provider.ts (porta)
export default interface CriptografiaProvider {
  criptografar(senha: string): Promise<string>;
  comparar(senha: string, hash: string): Promise<boolean>;
}
```

- A implementação concreta (ex.: bcrypt) vive no backend.
- O Caso de Uso recebe ambos `UsuarioRepositorio` e `CriptografiaProvider` via construtor.
- Nos testes unitários, pode-se usar provedores fake.

#### Adaptadores Concretos Implementados (Aula 20)

Na Aula 20 foi implementada a camada de infraestrutura completa para o módulo de autenticação:

| Componente | Tipo | Localização | Descrição |
|---|---|---|---|
| `UsuarioPrisma` | Adaptador de repositório | `apps/backend/src/autenticacao/` | Implementa `UsuarioRepositorio`; usa composição com `PrismaService` |
| `AutenticacaoController` | Controller REST | `apps/backend/src/autenticacao/` | Rota `POST /auth/registrar`; traduz HTTP → UC |
| `PrismaService` | Serviço de banco | `apps/backend/src/database/` | Estende `PrismaClient`; exportado via `DatabaseModule` |

**Composição no adaptador**: `UsuarioPrisma` recebe `PrismaService` via injeção de dependência do NestJS (construtor), não por herança.

**Módulos NestJS como fronteiras**:
- `DatabaseModule` exporta `PrismaService` → outros módulos importam para acessar o banco.
- `AutenticacaoModule` importa `DatabaseModule` e declara controller + adaptador como providers.
- O sistema de imports/exports do NestJS oferece um paralelo natural com Bounded Contexts.

### Caso de Uso: 1 Arquivo por UC

O instrutor recomenda fortemente que cada caso de uso tenha seu próprio arquivo, em vez de um "service" monolítico com muitos métodos:

```
usecase/
  registrar-usuario.usecase.ts
  login-usuario.usecase.ts
  alterar-senha.usecase.ts
```

**Benefício**: ao abrir a pasta `usecase/`, todas as funcionalidades do sistema ficam explicitamente visíveis. Com 500 casos de uso, você sabe exatamente o que é suportado.

### Input do Caso de Uso: Primitivos vs. VOs

O input do UC pode ser definido de duas formas (esclarecido na Aula 19):

| Abordagem | Input do UC | Quem instancia os VOs |
|---|---|---|
| **Primitivos** | `{ nome: string, email: string, senha: string }` | O próprio UC |
| **Modelos** | `{ nome: PersonNameVO, email: EmailVO, senha: StrongPasswordVO }` | Camada de adaptadores (controller) |

Ambas são válidas. Com primitivos, o UC coordena toda a validação. Com modelos, a camada de adaptadores assume parte da responsabilidade de instanciação e o UC recebe dados já tipados.

### Inversão de Dependência vs. Injeção de Dependência

São conceitos relacionados, mas distintos (esclarecidos na sessão Q&A 01):

| Conceito | O que é |
|---|---|
| **Injeção de Dependência** | Passar uma dependência de fora para dentro (via construtor ou parâmetro), em vez de a classe buscalá-la. |
| **Inversão de Dependência** | Mudar a **direção** da dependência: a classe de negócio não depende da implementação concreta de infraestrutura, mas de uma **interface**. A implementação concreta é que dep end da interface. |

**Por quê importa**: sem inversão, o Caso de Uso depende do DAO → DAO depende do PostgreSQL → o domínio fica preso à infraestrutura e não pode ser testado de forma isolada. Com inversão, o Caso de Uso depende de uma interface `IUserRepository`; a implementação concreta (Prisma, em memória) é injetada de fora.

**Conexão com o SOLID**: é o princípio **D** (Dependency Inversion Principle) — descrito pelo instrutor como *“a alma da Arquitetura Limpa”*.

**Regra de dependência confirmada**: a seta de dependência sempre aponta de **fora para dentro**:

```
Infraestrutura → Adaptadores → Casos de Uso → Domínio
```

O Domínio não depende de absolutamente nenhuma camada externa.

### Classe Result na Camada Compartilhada

A classe `Result<T>` (implementada na aula 15) pertence ao módulo **shared** — é uma utilidade genérica de tratamento de erros, não específica de nenhum domínio. Ela é exportada via barrel export (`index.ts`) e pode ser usada por qualquer módulo.

**Atenção ao exportar classes em TypeScript**: usar `export type` (adequado para interfaces) em vez de `export` para classes causa `Cannot read property of undefined` em tempo de execução. Classes devem sempre usar `export` simples.

## Debates

- **Custo de separação das camadas**: o instrutor reconhece que ter camada de adaptadores separada é "burocrático", mas é um trade-off consciente em favor de organização.
- **Chamar caso de uso diretamente do front-end vs. via adaptador**: possível chamar diretamente (ex.: em um hook React), mas normalmente passa por uma camada de adaptadores para facilitar tradução de dados.
- **Banco de dados separado por contexto**: não obrigatório — é decisão de infraestrutura, não de domínio.
- **Acoplamento de libs simples no domínio**: usar uma lib simples (ex.: `uuid`) diretamente no domínio pode ser aceitável — o nível de acoplamento e o risco que a lib representa devem guiar a decisão; não é dogma absoluto. O VO `ID` usa `uuid` no core (confirmado na Aula 18).
- **Front-end com regras de negócio**: a divisão correta não é front vs. back, mas **regras vs. framework** — separar regras puras do framework (React, NestJS, Django) permite usá-las em qualquer camada.
- **Segurança de hash de senha**: mesmo retornando apenas o hash bcrypt (não a senha em texto), há risco de força bruta direcionada. Recomendações do instrutor: (1) armazenar credenciais em tabela separada (`usuario_credenciais`); (2) omitir a coluna de senha em todas as queries padrão do repositório; (3) entidade `User` deve ter método `semSenha()` que retorna clone sem dados sensíveis.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)
- [Aula 15 — Tratamento de Erros](../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md)
- [Aula 16 — Arquitetura Hexagonal](../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md)
- [Aula 18 — Caso de Uso 01](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md)
- [Aula 19 — Caso de Uso 02](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md)
- [Aula 20 — Repositório de Usuário](../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md)

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md)

## Questões Não Resolvidas

- ~~Como implementar a camada de adaptadores completa (controllers NestJS, presenters) para o módulo de autenticação?~~ → **Resolvida na Aula 20**: controller `AutenticacaoController` com rota `POST /auth/registrar` implementado. Presenters/DTOs de resposta ainda não cobertos.
- ~~Como integrar Prisma de forma que não vaze para a camada de domínio?~~ → **Resolvida na Aula 20**: `PrismaService` vive no `DatabaseModule` (backend); o core importa apenas a interface `UsuarioRepositorio`.
- ~~Implementação concreta do adaptador `PrismaUserRepository`~~ → **Resolvida na Aula 20**: `UsuarioPrisma` implementa `UsuarioRepositorio` usando composição com `PrismaService`.
- Interface `usuario.queries.ts` mencionada mas não implementada — CQS prático ainda pendente.
- ~~Integração do `CriptografiaProvider` com NestJS (módulo de injeção de dependência do framework)~~ → Padrão de injeção demonstrado com `UsuarioPrisma`; implementação concreta do `CriptografiaProvider` (bcrypt) ainda não feita.
- Mapeamento Entidade ↔ modelo Prisma (conversão de VOs para tipos primitivos) — detalhes não mostrados.
- Presenters/DTOs de resposta HTTP — controller retorna string simples por enquanto.

## Notas de Atualização

- 2026-04-20: criada a partir da ingestão da série de transcrições da imersão DDD + Arquitetura Limpa.
- 2026-04-20: adicionadas explicação de Inversão vs. Injeção de Dependência, princípio D do SOLID e debate sobre acoplamento de libs simples no domínio — a partir da sessão Q&A 01.
- 2026-04-23: adicionadas seção sobre classe `Result` na camada compartilhada e nota sobre `export type` vs `export` — a partir da Aula 15 (Tratamento de Erros).
- 2026-04-23: expandida seção Portas e Adaptadores com implementação concreta (pasta `provider/`, porta vs. adaptador, diagrama de organização); adicionado padrão de 1 UC por arquivo; questão sobre Ports & Adapters marcada como parcialmente resolvida — a partir da Aula 16 (Arquitetura Hexagonal).
- 2026-04-27: adicionado `CriptografiaProvider` como segunda porta no diagrama; exemplo de interface com `criptografar`/`comparar`; debate de segurança de hash; questão do `PrismaUserRepository` atualizada — a partir da Aula 18 (Caso de Uso 01).
- 2026-04-27: adicionada seção sobre input do UC (primitivos vs. VOs); instanciação de modelos na camada de adaptadores como alternativa — a partir da Aula 19 (Caso de Uso 02).
- 2026-04-27: adicionada seção de adaptadores concretos (controller NestJS + `UsuarioPrisma` + `PrismaService`); questões do `PrismaUserRepository`, integração Prisma e controllers marcadas como resolvidas — a partir da Aula 20 (Repositório de Usuário).
