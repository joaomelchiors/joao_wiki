---
title: "Arquitetura Limpa (Clean Architecture)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-20
tags: ["arquitetura-limpa", "camadas", "caso-de-uso", "adaptadores", "typescript"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-01-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-02-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-6-casoDeUso-parte1.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-7-casoDeUso-parte2.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-9-contexto.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
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

Mencionada pelo instrutor como equivalente à Arquitetura Limpa; será o padrão adotado no projeto. O capítulo 4 do livro DDD aborda CQRS e arquitetura hexagonal.

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

## Debates

- **Custo de separação das camadas**: o instrutor reconhece que ter camada de adaptadores separada é "burocrático", mas é um trade-off consciente em favor de organização.
- **Chamar caso de uso diretamente do front-end vs. via adaptador**: possível chamar diretamente (ex.: em um hook React), mas normalmente passa por uma camada de adaptadores para facilitar tradução de dados.
- **Banco de dados separado por contexto**: não obrigatório — é decisão de infraestrutura, não de domínio.
- **Acoplamento de libs simples no domínio**: usar uma lib simples (ex.: `uuid`) diretamente no domínio pode ser aceitável — o nível de acoplamento e o risco que a lib representa devem guiar a decisão; não é dogma absoluto.
- **Front-end com regras de negócio**: a divisão correta não é front vs. back, mas **regras vs. framework** — separar regras puras do framework (React, NestJS, Django) permite usá-las em qualquer camada.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md)

## Questões Não Resolvidas

- Como implementar a camada de adaptadores completa (controllers NestJS, presenters) para o módulo de autenticação?
- Como integrar Prisma de forma que não vaze para a camada de domínio?

## Notas de Atualização

- 2026-04-20: criada a partir da ingestão da série de transcrições da imersão DDD + Arquitetura Limpa.
- 2026-04-20: adicionadas explicação de Inversão vs. Injeção de Dependência, princípio D do SOLID e debate sobre acoplamento de libs simples no domínio — a partir da sessão Q&A 01.
