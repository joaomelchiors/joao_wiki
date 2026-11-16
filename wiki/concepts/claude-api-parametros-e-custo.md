---
title: "API do Claude: Parâmetros, stop_reason e Custo"
descricao: 'Parâmetros de amostragem, `stop_reason`, batch, prompt caching e contagem de tokens por provedor na API do Claude.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["claude-api", "parametros", "custo", "prompt-caching", "ia-generativa"]
source_files:
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2025-09-19_most-devs-don-t-understand-how-llm-tokens-work_en-corrigida_nKSk_TiR8YA.md
related_pages:
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ./ia-generativa.md
  - ./ia-generativa.md
  - ./melhores-praticas-claude-code.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../sources/2025-09-19_source-matt-pocock-tokens-llm.md
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

### Contagem de Tokens Depende do Tokenizador
- Entrada e saída são cobradas por token, a taxas diferentes; o número de tokens de um mesmo texto **varia por provedor**, porque cada modelo tem seu vocabulário. Demo de Matt Pocock (set/2025, uma execução): "hello world" deu 11 tokens de entrada no Claude 3.5 Haiku, 4 no Gemini 2.0 Flash-Lite e 3 no tokenizador do GPT-4o. A fonte não explica o 11; hipótese do mantenedor, não verificada: overhead de formatação da mensagem. Ver [resumo](../sources/2025-09-19_source-matt-pocock-tokens-llm.md) e [IA Generativa](./ia-generativa.md#encode-decode-e-vocabulário-matt-pocock-set2025).

## Fontes de Suporte

- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)
- [Matt Pocock — tokens](../sources/2025-09-19_source-matt-pocock-tokens-llm.md): token como moeda e contagem por provedor

## Conceitos Relacionados

- [ia-generativa](./ia-generativa.md)
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)

## Questões Não Resolvidas

- Por que a Anthropic contou 11 tokens de entrada para "hello world" no demo de Matt Pocock? Conferir com a contagem de tokens da API.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
- 2026-11-15: adicionada "Contagem de Tokens Depende do Tokenizador" — a partir do vídeo de Matt Pocock sobre tokens.
