---
title: "TDD (Test-Driven Development) com IA"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["tdd", "testes", "feedback-loop", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
related_pages:
  - ./ia-generativa.md
  - ./ai-driven-development.md
  - ./harness.md
  - ./melhores-praticas-claude-code.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
---

# TDD (Test-Driven Development) com IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Ciclo red-green-refactor guiado por testes. Na palestra de Matt Pocock, TDD é essencial para IA porque os ciclos de feedback são o teto da qualidade do que o agente produz e porque dificulta a "trapaça" de testar o que já foi implementado.

## Compreensão Atual

### TDD (Test-Driven Development) como Essencial
**Por que TDD é crucial para IA**:
- Adiciona bons testes automaticamente
- Dificulta "trapaça" (IA tende a fazer implementação → testes que validam o feito)
- TDD inverte: instrumenta código antes de escrever → IA precisa fazer implementação real
- Ciclos de feedback são essenciais para IA não programar "às cegas"
- **"Qualidade dos ciclos de feedback = teto da qualidade da IA"**

**Ciclo Red-Green-Refactor**:
1. Escrever teste que falha (red)
2. Fazer implementação passar (green)
3. Refatorar

**Frontend**: muito difícil testar automaticamente com IA (multimodal; precisa olhos humanos). Solução: IA gera protótipos descartáveis para escolha humana.

## Fontes de Suporte

- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)

## Conceitos Relacionados

- [ai-driven-development](./ai-driven-development.md)
- [harness](./harness.md)
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)

## Questões Não Resolvidas

- Nenhuma registrada até agora para este tema.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
