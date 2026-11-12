---
title: "API do Claude: Parâmetros, stop_reason e Custo"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["claude-api", "parametros", "custo", "prompt-caching", "ia-generativa"]
source_files:
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
related_pages:
  - ./ia-generativa.md
  - ./ia-generativa.md
  - ./melhores-praticas-claude-code.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
---

# API do Claude: Parâmetros, stop_reason e Custo

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> Fonte do material: curso de Andrew Brown para a certificação Claude Certified Developer Foundations (CCDV-F), 2026-11; fonte em inglês, síntese em português. Material de instrutor, parte opinião e parte fatos do exame.

## Definição

Resumo de parâmetros e comportamentos da API do Claude vistos no curso CCDV-F: amostragem, `stop_reason`, janela de contexto, custo (batch e prompt caching), saída estruturada e extended thinking.

## Compreensão Atual

### Parâmetros e Comportamento da API
- Amostragem: temperature, top_p, top_k (sem *seed* no Claude); não ajustar todos juntos.
- `stop_reason` descreve por que a geração parou (`end_turn`, `max_tokens`…) e **não é erro**; *context window exceeded* é diferente de `max_tokens` e exige compactar/podar histórico.
- Custo: batch (até 24 h, sem SLA) para trabalho não urgente; prompt caching com preços distintos de escrita (5 min × 1 h) e leitura; cálculo = tokens ÷ 1 milhão × preço por categoria. Saída estruturada (JSON schema/Pydantic) com retry. *Extended/adaptive thinking*: iteração interna antes de encerrar o turno.

## Fontes de Suporte

- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)

## Conceitos Relacionados

- [ia-generativa](./ia-generativa.md)
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)

## Questões Não Resolvidas

- Nenhuma registrada até agora para este tema.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
