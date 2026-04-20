---
title: "Objeto de Valor (Value Object)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-20
tags: ["objeto-de-valor", "value-object", "ddd", "typescript", "validação", "imutabilidade"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-10-objetoDeValor.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-11-modelosImutaveis.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-01.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-02.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-13-exemplo-objetoDeValor-senha.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
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

**Nota**: `StrongPasswordVO` não é armazenado no modelo; é usado apenas no caso de uso para validar antes de criptografar. O modelo armazena `HashPasswordVO`.

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

### Padrão Result (esboço)

Para coletar múltiplos erros sem lançar exceção imediatamente:

```typescript
class Result<T> {
  constructor(private value: T | null, private errors: string[] = []) {}
  get isOk() { return this.errors.length === 0; }
  static combine(results: Result<unknown>[]): Result<void> { /* agrega erros */ }
}
```

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

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md)

## Questões Não Resolvidas

- Implementação completa do padrão `Result` com `combine` (ficou como pendência do instrutor).
- Como serializar/desserializar VOs de/para o banco via Prisma sem vazar para a camada de infraestrutura?
- Como estruturar o `Validator` com Fluent API de forma genérica e reaproveitável entre VOs?

## Notas de Atualização

- 2026-04-20: criada a partir das aulas 10–13 da imersão DDD + Arquitetura Limpa.
- 2026-04-20: adicionadas estratégia de uso de VOs como substituto ao Zod no front-end e conceito de Validator com Fluent API — a partir da sessão Q&A 01.
