---
title: "Dev AI — Aula 11: Exemplo Prático de Skill (Cursor)"
descricao: 'Aula IA-11 (Dev AI) — exemplo prático de criação de Skill no Cursor (`criar-entidade-completa`); formato de arquivo Markdown de Skill; ciclo por engenharia reversa de código existente; heurística de granularidade; fraqueza de Skills sem few-shot.'
type: source
status: active
created: 2026-05-04
updated: 2026-11-12
tags: ["skill", "rule", "cursor", "engenharia-de-contexto", "ai-driven-development", "few-shot"]
source_files:
  - raw/sources/2026-05-04_transcrição-IA-11-ContextoRulesSkill-exemploSkill.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../sources/2026-04-29_source-dev-ai-rule-skill.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../concepts/rules-e-skills.md
tipo_conteudo: demonstrado
captura: automatica
---

# Dev AI — Aula 11: Exemplo Prático de Skill (Cursor)

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): cria e executa uma Skill ao vivo no Cursor.

## Resumo

Aula prática do módulo "Agentes, Skills & Engenharia de Contexto" da formacao.dev. O instrutor demonstra ao vivo a criação de uma Skill no Cursor chamada `criar-entidade-completa`, executa a Skill num projeto vazio e observa o resultado. A aula foca em *como* criar uma Skill — não em construir um modelo de Skill ideal — e apresenta a diferença entre criar Skills do zero vs. por engenharia reversa de código existente.

## Pontos-Chave

- **Estrutura física de uma Skill no Cursor**: pasta `.cursor/skills/` com arquivos Markdown; cada arquivo é uma Skill com metadados (`nome`, `descrição`) e instruções de processo.
- **Ciclo de criação preferido**: partir de código já existente → pedir ao LLM (Claude Code) para fazer engenharia reversa e gerar a Skill → revisar e corrigir manualmente.
- **Criação do zero também é possível**: instrutor descreve o processo ao LLM que gera exemplos; menos eficaz que partir de código real.
- **Referência Rule→Skill no Cursor**: uma Skill pode (e deve) referenciar explicitamente Rules internas; no Cursor isso é parcialmente redundante porque o Cursor já lê as Rules separadamente, mas a referência explícita é válida e portável para outras ferramentas.
- **Heurística de granularidade**: Skills específicas são mais reutilizáveis; Skills que fazem tudo ao mesmo tempo (como a do exemplo) funcionam mas são de menor qualidade — o instrutor reconhece que a Skill demonstrada é intencionalmente simples.
- **Fraquezas de uma Skill sem exemplos few-shot**: a Skill `criar-entidade-completa` demonstrada não tinha exemplos de código → resultado funcional, mas menos preciso que uma Skill com few-shot.
- **Demonstração de execução**: ao usar `criar entidade completa para usuário com atributos id, nome, email, senha`, o Cursor seguiu a nomenclatura de arquivos, criou a hierarquia de pastas e até gerou um `BaseEntity` que não existia no projeto — respeitando as Rules associadas.

## Afirmações/Observações Principais

- **"Uma Skill bem feita gera um resultado muito diferente de simplesmente mandar qualquer IA gerar o projeto de qualquer jeito"** — a Skill impõe restrições de nomenclatura, estrutura e padrões; sem ela o modelo gera código genérico.
- **"A maioria das Skills que eu criei, eu criei em cima de exemplos de código que eu já tinha feito antes"** — engenharia reversa de código real é o método preferido; produz Skill com múltiplos exemplos few-shot ricos.
- **"Você consegue praticamente criar uma aplicação do zero em poucas horas usando Skills"** — hipótese sobre produtividade futura, apresentada como tendência emergente.
- Uma Skill que faz "tudo de uma vez" funciona para CRUDs simples, mas dificulta reutilização em contextos mais complexos — Spec Driven Development é mais adequado para composição.

## Notas de Evidência

- Demonstração ao vivo no Cursor com criação de pasta `.cursor/skills/skill.md`.
- Execução observada: controller, DTO, entidade, BaseEntity criados com nomenclaturas corretas conforme Rules.
- Instrutor usou Claude Code num chat separado para gerar o conteúdo inicial da Skill.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Rules e Skills](../concepts/rules-e-skills.md).

- **`concepts/ia-generativa.md`**: aprofunda a seção "Rule vs. Skill" com formato concreto de Skill no Cursor (arquivo Markdown com metadados + processo); resolve parcialmente a questão "Skill na prática"; resolve parcialmente "Referência Rule→Skill por ferramenta" (Cursor).
- Nenhuma contradição com fontes anteriores — reforça e concretiza a Aula IA-10.

## Questões Não Resolvidas

- Quais metadados são obrigatórios vs. opcionais num arquivo Markdown de Skill no Cursor?
- Como o Cursor injeta a Skill no contexto de uma requisição — automaticamente ou via `@skill`?
- Qual o número ideal de exemplos few-shot para uma Skill de criação de entidade?
- Estrutura de pasta para Skills complexas (com subpastas de referências) — mencionada mas não demonstrada.

## Páginas Relacionadas

- [IA Generativa — conceito](../concepts/ia-generativa.md)
- [Dev AI — Aula 10: Rule vs. Skill — Definições Canônicas](../sources/2026-04-29_source-dev-ai-rule-skill.md)
- [Dev AI — Aula 09: Engenharia de Contexto](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [formacao.dev](../entities/formacao-dev.md)
