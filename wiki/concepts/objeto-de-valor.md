---
title: "Objeto de Valor (Value Object)"
type: concept
status: active
created: 2026-04-20
updated: 2026-11-12
tags: ["objeto-de-valor", "value-object", "ddd", "typescript", "validação", "imutabilidade"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-10-objetoDeValor.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-11-modelosImutaveis.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-01.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-02.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-13-exemplo-objetoDeValor-senha.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-15-tratamento-de-erros.md
  - raw/sources/2026-09-07_chat-DDD-Express-PortsAndAdapters.md
  - raw/sources/2026-08-03_transcrição-ModelagemDeDominio-48-ErrorDeValidacao.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md
  - ../sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md
  - ../sources/2026-08-03_source-modelagem-dominio-48-erro-validacao.md
  - ./ddd.md
  - ./agregado.md
---

# Objeto de Valor (Value Object)

## Definição

Um Objeto de Valor encapsula um valor e suas regras de validade, sem identidade própria (sem ID). É o **primeiro e mais importante local** para encapsular regras de negócio no DDD. Um VO instanciado é, por construção, válido.

## Compreensão Atual

### Vantagens

- **Validade garantida**: o construtor lança exceção se os dados são inválidos.
- **Comportamentos ricos**: métodos contextuais além do valor bruto (ex.: `nome.parcial30()`, `cpf.regiao()`).
- **Reutilização de regras**: a validação fica em um único lugar, usada por qualquer entidade que precise.

### Exemplos Implementados na Imersão

| VO | Regras principais | Usado em |
|---|---|---|
| `EmailVO` | Regex de e-mail válido | `User` (auth) |
| `PersonNameVO` | Min 3 chars, max 80; sem especiais; sobrenome obrigatório | `User` (auth) |
| `StrongPasswordVO` | Maiúscula + minúscula + especial + min 8 chars | Caso de uso de registro |
| `HashPasswordVO` | Valida formato bcrypt | `User` (auth) — armazena senha criptografada |
| `ID` | UUID v4 na imersão; UUID v7 no projeto Express (decisão de projeto, ver abaixo); gera automaticamente se não fornecido; `isValid()` usa `uuid.validate` | Todas as entidades (shared) |

**Nota**: `StrongPasswordVO` não é armazenado no modelo; é usado apenas no caso de uso para validar antes de criptografar. O modelo armazena `HashPasswordVO`.

**Nota**: `ID` possui método estático `createHash()` que gera um novo UUID. Segundo a conversa com LLM, a dependência de `uuid` pode ser substituída por `crypto.randomUUIDv7()` nativo do Node 24.16+ (não verificado na documentação do Node; ver seção UUID v7 abaixo). A lib é considerada "lib não ofensiva" — aceitável no core (vide debate em [arquitetura-limpa.md](./arquitetura-limpa.md)).

**Nota (Aula 19)**: a separação `StrongPasswordVO` (UC) vs. `HashPasswordVO` (entidade) é intencional. A entidade `User` "não sabe" como a hash foi gerada — pode vir de senha forte ou fraca. A validação da força fica no UC de registro; a entidade só garante que recebe um hash válido. Isso preserva a separação de responsabilidades.

### VOs como Parâmetro de Repositório

A interface do repositório pode usar VOs em vez de primitivos nos seus métodos. Exemplo: `buscarPorEmail(email: EmailVO)` em vez de `buscarPorEmail(email: string)`. Vantagem: garante que apenas valores já validados são enviados ao banco, eliminando uma camada de validação redundante.

### Padrão de Implementação (TypeScript)

```typescript
export class EmailVO {
  public readonly value: string;
  constructor(value: string) {
    if (!EmailVO.isValid(value)) throw new Error('Email.Invalid');
    this.value = value;
  }
  static isValid(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}
```

### Imutabilidade com Props e Clone

```typescript
interface UserProps { id: string; name: PersonNameVO; email: EmailVO; password: HashPasswordVO; }

class User {
  constructor(public readonly props: Readonly<UserProps>) {}
  clone(partial: Partial<UserProps>): User {
    return new User({ ...this.props, ...partial });
  }
}
```

### Erros como Códigos

Preferência por códigos (ex.: `'PersonName.TooShort'`) em vez de texto livre — facilita i18n e rastreabilidade.

### Padrão Result (implementação final — Aula 15)

Para coletar múltiplos erros sem lançar exceção imediatamente. A implementação foi completada na aula 15 com a API:

| Método | Tipo | Descrição |
|---|---|---|
| `Result.ok(instance?)` | estático | Cria resultado de sucesso |
| `Result.fail(errors)` | estático | Cria resultado de falha com lista de erros |
| `Result.trySync(fn)` | estático | Executa função síncrona, capturando exceções como falha |
| `Result.try(fn)` | estático | Versão assíncrona de `trySync` |
| `Result.combine(results)` | estático | Agrega tupla de Results; retorna falha se algum falhou, ok com instâncias tipadas se todos ok |
| `throwIfFailed()` | instância | Lança exceção (array de erros) se o resultado é falha |

**Padrão de uso com VOs em Entidade**:

```typescript
const possivelNome  = Result.trySync(() => new PersonNameVO(dados.nome));
const possivelEmail = Result.trySync(() => new EmailVO(dados.email));
const possivelSenha = Result.trySync(() => new HashPasswordVO(dados.senha));

const resultado = Result.combine([possivelNome, possivelEmail, possivelSenha]);
resultado.throwIfFailed(); // lança array com TODOS os erros se houver
```

Isso permite que o usuário veja todos os erros de validação de uma vez, e não apenas o primeiro.

> **Origem das três seções seguintes** (UUID v7, `generate()` × `tryCreate()`, critério para extrair `.value`): [conversa com LLM](../sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md) (`conversa-llm`). São **decisões do projeto DDD + Express** de João Marcos Melchiors. A imersão usa UUID v4 com a lib `uuid` ([Aula 18](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md)). A API `crypto.randomUUIDv7()` e a versão mínima do Node **não foram verificadas** em documentação oficial. Os benefícios do UUID v7 listados são conhecimento técnico corrente, mas nesta wiki vêm só da conversa.

### Evolução do VO ID: UUID v4 → UUID v7 (projeto Express)

O `IdVO` evoluiu de UUID v4 para UUID v7 com geração nativa via `crypto.randomUUIDv7()` (Node 24.16+):

**Benefícios do UUID v7**:
- **Localidade temporal**: os primeiros bytes contêm um timestamp, mantendo localidade em índices B-tree.
- **Ordenação cronológica**: IDs gerados mais tarde são lexicograficamente maiores.
- **Geração fora do banco**: identidade gerada no domínio (não depende de SERIAL/BIGSERIAL).
- **Unicidade global**: não precisa de coordenação entre instâncias.

### `IdVO.generate()` vs. `IdVO.tryCreate()`

Separação semântica de geração vs. reconstituição:

| Método | Propósito | Quando usar |
|---|---|---|
| `IdVO.generate()` | Cria novo UUID v7 | Criação de entidade nova (no UseCase) |
| `IdVO.tryCreate(value)` | Valida e reconstitui ID existente (via `Result`) | Restauração do banco, reconstrução de evento |

### Critério para Manter VO Dentro da Entidade vs. Extrair `.value`

- **VO com comportamento** (métodos além de `.value`): manter como VO na entidade. Ex.: `EmailVO` com `localPart`, `domain`, `hostAddress`.
- **VO sem comportamento** (apenas validador): extrair `.value` na entidade. Ex.: `IdVO` — a entidade armazena `id: IdVO` mas acessa `this.props.id.value` para operações. Não precisa guardar o involúcro completo se não há métodos de domínio a oferecer.
- **Regra prática**: "se o getter seria `get id() { return this.props.id.value; }`, o VO está servindo apenas como validador".

## Debates

- **Validar na construção vs. no uso**: instrutor prefere na construção; padrão `Result` permite adiar.
- **VOs aninhados**: é possível (ex.: `AddressVO` contendo `CepVO`).
- **Portabilidade entre linguagens**: VOs bem padronizados migram facilmente com auxílio de IA (Java, Python).
- **VOs vs. Zod no front-end**: instanciar o modelo rico (`new User(formData)`) diretamente no form valida os dados antes de chamar a API, sem duplicar regras de validação. O módulo compartilhado garante a mesma lógica em ambos os lados. Zod pode se tornar redundante quando os VOs estão bem definidos.

### Validator com Fluent API

É possível extrair as validações dos VOs para uma classe `Validator` reutilizável com métodos encadeados:

```typescript
// Conceito esboçado na sessão Q&A 01
const result = new Validator(value)
  .notNull()
  .notEmpty()
  .minLength(3)
  .maxLength(80)
  .validate();
```

Essa classe pode ser usada dentro de VOs para desacoplar as validações e reutilizá-las entre objetos distintos.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)
- [Aula 15 — Tratamento de Erros](../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md)
- [Aula 18 — Caso de Uso 01](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md)
- [Aula 19 — Caso de Uso 02](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md)
- [Conversa DDD + Express + Ports & Adapters](../sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md)

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md)

## Questões Não Resolvidas

- ~~Implementação completa do padrão `Result` com `combine`~~ → **Resolvida na Aula 15**: implementação final com `ok`, `fail`, `try`, `trySync`, `combine`, `combineAsync`, `throwIfFailed`.
- Como serializar/desserializar VOs de/para o banco via Prisma sem vazar para a camada de infraestrutura?
- Como estruturar o `Validator` com Fluent API de forma genérica e reaproveitável entre VOs?

### Classe ErroValidacao como Base do Pipeline de Validação

A série "Modelagem de Domínio" (formacao.dev, Aula 48) introduz a `ErroValidacao` como ponto de partida antes dos VOs. A lógica causal é:

> `ErroValidacao` → `Validação` → `VOs` → `Entidades`

A classe estende `Error` JS com três atributos `readonly`:

| Atributo | Tipo | Finalidade |
|---|---|---|
| `codigo` | `string` | Código simbólico do erro (ex.: `'email.invalido'`) — evita strings mágicas |
| `valor` | `any` | Valor que gerou o erro, para diagnóstico |
| `extras` | `object?` | Dados adicionais opcionais (ex.: `{ tamanhoMinimo: 3, tamanhoMaximo: 80 }`) |

**Métodos estáticos de fábrica:**

- `ErroValidacao.criar(codigo, valor)` — cria sem lançar (retorno `ErroValidacao`)
- `ErroValidacao.lancar(codigo, valor)` — cria e lança (retorno `never`)

**Catálogo centralizado**: os códigos ficam em `constantes/erros.ts` como objeto imutável (`const erros = { desconhecido: 'desconhecido', ... } as const`), exportado por padrão.

**Nota de design**: os atributos da `ErroValidacao` são primitivos intencionalmente — a classe será consumida fora do core (front-end, API), então manter simples é preferível a aplicar VOs ao erro. Isso está alinhado com a decisão de usar strings de código (documentada nesta página, seção "Erros como Códigos").

## Notas de Atualização

- 2026-04-20: criada a partir das aulas 10–13 da imersão DDD + Arquitetura Limpa.
- 2026-04-20: adicionadas estratégia de uso de VOs como substituto ao Zod no front-end e conceito de Validator com Fluent API — a partir da sessão Q&A 01.
- 2026-04-23: atualizada seção do padrão Result com implementação final (API completa); questão sobre `Result.combine` marcada como resolvida — a partir da Aula 15 (Tratamento de Erros).
- 2026-04-27: adicionado VO `ID` (UUID v4, geração automática, `createHash()`) à tabela de exemplos — a partir da Aula 18 (Caso de Uso 01).
- 2026-04-27: clarificada separação StrongPasswordVO (UC) vs. HashPasswordVO (entidade); adicionada seção VOs como parâmetro de repositório — a partir da Aula 19 (Caso de Uso 02).
- 2026-11-12: seções vindas da conversa com LLM marcadas como decisões de projeto; UUID v4 (imersão) e v7 (projeto) passaram a ser distinguidos na tabela; `crypto.randomUUIDv7()` marcado como não verificado (higienização, etapa 4).
- 2026-09-07: atualizado VO ID de UUID v4 para UUID v7 (Node nativo); adicionadas seções `IdVO.generate()` vs `IdVO.tryCreate()` e critério para manter VO dentro da entidade vs. extrair `.value` — a partir da Conversa DDD + Express + Ports & Adapters.
- 2026-11-04: adicionada seção "ErroValidacao como Base do Pipeline de Validação" com atributos, métodos de fábrica e catálogo de constantes — a partir da Aula 48 (Modelagem de Domínio, formacao.dev).
