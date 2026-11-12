---
title: "System Prompt e Guardrails"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["system-prompt", "guardrails", "ia-generativa", "seguranca"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-05-IntroducaoDesenvolvimentoIA-systemPrompt.md
related_pages:
  - ./ia-generativa.md
  - ./seguranca-de-agentes.md
  - ./engenharia-de-contexto.md
  - ./agentes-de-ia.md
  - ../sources/2026-04-27_source-dev-ai-system-prompt.md
---

# System Prompt e Guardrails

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Todo prompt do usuário é encapsulado por um **system prompt** definido pelo operador (formatação, regras de segurança, instruções de ferramentas e metadados). Os **guardrails** são as barreiras de segurança implementadas por ele. Visão da aula IA-05 do curso Dev AI.

## Compreensão Atual

### System Prompt e Guardrails (Aula IA-05)
Nenhum prompt do usuário é processado isoladamente. Todo prompt é encapsulado por um **system prompt** definido pelo operador:

```
[System Prompt] + [User Message] + [Assistant Response] + [User Message] + ...
```

| Componente do System Prompt | Descrição |
|---|---|
| Instruções de formatação | Como formatar respostas |
| Regras de segurança (guardrails) | Barreiras contra conteúdo perigoso |
| Instruções de ferramentas | Quando e como usar cada ferramenta disponível |
| Metadados de contexto | Localização do usuário, data/hora |

**Guardrails**: barreiras de segurança implementadas via system prompt. Modelos comerciais (Claude, ChatGPT) têm guardrails robustos; modelos locais sem censura não têm.

**"Honestidade consciente"**: Claude reconhece a existência do system prompt, descreve sua natureza geral, mas recusa reproduzi-lo literalmente.

## Fontes de Suporte

- [Dev AI — Aula 05: System Prompt e Guardrails](../sources/2026-04-27_source-dev-ai-system-prompt.md)

## Conceitos Relacionados

- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [agentes-de-ia](./agentes-de-ia.md)

## Questões Não Resolvidas

- Como escrever system prompts eficazes para aplicações customizadas?
- Como equilibrar guardrails (segurança) com utilidade (flexibilidade)?

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
