---
title: "Imersão DDD + Arquitetura Limpa — Aula 15: Tratamento de Erros"
type: source
status: active
created: 2026-04-23
updated: 2026-04-23
tags: ["result", "tratamento-de-erros", "validação", "typescript", "ddd"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-15-tratamento-de-erros.md
related_pages:
  - ../concepts/objeto-de-valor.md
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../entities/formacao-dev.md
  - ./2026-04-20_source-imersao-ddd-arq-limpa.md
---

# Imersão DDD + Arquitetura Limpa — Aula 15: Tratamento de Erros

## Resumo

Aula focada na implementação completa da classe `Result<T>`, que encapsula o resultado de operações permitindo coletar e agregar múltiplos erros em vez de lançar exceção no primeiro erro encontrado. O instrutor Leonardo parte do problema concreto de validação de um `User` (nome, e-mail, senha) e demonstra como `Result.combine` resolve a limitação de VOs que lançam exceção imediatamente.

## Pontos-Chave

- **Problema motivador**: quando VOs lançam exceção na construção, o sistema para no primeiro erro — o usuário não vê todos os erros de uma vez.
- **Solução**: a classe `Result<T>` permite "tentar" criar cada VO individualmente e depois combinar os resultados, acumulando erros.
- **Implementação final da classe `Result<T>`** com API completa: `ok`, `fail`, `try` (async), `trySync`, `throwIfFailed`, `combine`, `combineAsync`.
- **`Result.combine`** recebe uma tupla de `Result`s e retorna `Result.fail` com todos os erros concatenados se algum falhou, ou `Result.ok` com as instâncias tipadas se todos foram bem-sucedidos.
- **Bug de exportação TypeScript**: `export type` (usado para interfaces) não funciona para classes — é necessário `export` simples. Esse erro causou `Cannot read property of undefined` ao tentar usar `Result.try`.
- **Extensibilidade**: `Result.try` pode ser usado para chamadas de API, operações assíncronas e até padrões de retry.

## Afirmações/Observações Principais

- **"Você não é obrigado a parar no primeiro erro"**: o instrutor enfatiza que `Result.combine` permite que todas as validações executem antes de reportar falhas.
- **`Result.try` serve para qualquer coisa**: não é específico de VOs — pode encapsular chamadas de backend, operações de rede, ou qualquer coisa que possa falhar.
- **Erros como array de strings**: a classe armazena erros como `string[]`, permitindo agregar mensagens de VOs diferentes.
- **`RESULT_UNDEFINED`**: erro sentinel retornado quando o Result não tem instância nem erros explícitos — indica uso incorreto.
- **Padrão de validação de entidade**: criar cada VO com `Result.trySync`, depois `Result.combine([...])`, depois `throwIfFailed()` — encapsulando todo o fluxo sem perder erros.

## Notas de Evidência

- O código final da classe `Result<T>` é fornecido integralmente na transcrição, com ~90 linhas de TypeScript.
- A demonstração prática mostra 3 erros simultâneos retornados: `PersonName.SurnameMissing`, e-mail inválido e `HashPassword.Invalid`.
- O bug de `export type` vs `export` foi reproduzido e resolvido ao vivo.

## Impacto na Wiki Existente

- **[objeto-de-valor.md](../concepts/objeto-de-valor.md)**: a questão não resolvida "Implementação completa do padrão `Result` com `combine`" agora está **respondida** — a implementação final foi apresentada nesta aula.
- **[ddd.md](../concepts/ddd.md)**: o padrão Result se posiciona como ferramenta tática complementar; reforça o conceito de "validação sem exceção imediata".
- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: confirma que `Result` pertence à camada compartilhada (`shared`), não ao domínio específico.

## Questões Não Resolvidas

- O padrão de retry mencionado (`Result.try` com tentativas múltiplas e intervalo) não foi implementado — ficou como ideia.
- `ValidationException` customizada para encapsular a rede de erros não foi implementada nesta aula.

## Páginas Relacionadas

- [Objeto de Valor](../concepts/objeto-de-valor.md) — padrão Result é complemento direto dos VOs
- [DDD](../concepts/ddd.md) — Result como ferramenta tática auxiliar
- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — Result na camada compartilhada
- [Imersão DDD — Série de Transcrições](./2026-04-20_source-imersao-ddd-arq-limpa.md) — fonte base
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
