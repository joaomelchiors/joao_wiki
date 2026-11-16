---
title: "Dev AI — Aula 01: IA Generativa — Tokenização e Embeddings"
descricao: 'Resumo da Aula IA-01 — pipeline de modelos Transformer (tokenização, embeddings); matriz de entrada [nTokens × nDimensões]; analogia dimensional.'
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ia-generativa", "transformer", "tokenização", "embeddings", "deep-learning"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-01-IntroducaoDesenvolvimentoIA-IaGenerativa01.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../concepts/deep-learning.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula 01: IA Generativa — Tokenização e Embeddings

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual com desenho e analogias; nenhuma execução.

## Resumo

Primeira aula da trilha "Dev AI" da formacao.dev. Explica de ponta a ponta como funcionam modelos baseados em Transformer (como o ChatGPT) por baixo dos panos. Esta parte cobre as duas primeiras fases do pipeline: **tokenização** (quebrar texto em tokens com IDs numéricos) e **embeddings** (representar cada token como vetor multidimensional). A aula é declarada como a "mais complicada" do curso, com foco teórico — aulas subsequentes focam em uso prático (Skills, Stack Driven Development, Rules).

## Pontos-Chave

- **Pipeline de entrada de um modelo Transformer**: texto → tokenização → embeddings → (Attention → ...) → saída. Esta aula cobre as duas primeiras etapas.
- **Tokenização**: a entrada de texto é dividida em **tokens** — fragmentos que não são letras individuais, nem palavras inteiras, nem sílabas. São trechos intermediários que formam o vocabulário do modelo. Cada token tem um ID numérico (ex.: `chat` → 9139, `GPT` → 10234, `é` → 7422).
- **Vocabulário do modelo**: conjunto finito de todos os tokens disponíveis. Cada modelo tem seu próprio vocabulário pré-definido.
- **Embeddings**: vetores multidimensionais que representam a posição semântica de cada token. Tokens com significado semelhante ficam próximos no espaço de embeddings.
- **Dimensionalidade**: modelos usam espaços com 128, 768, 2048 ou 4096 dimensões. Cada coordenada do vetor é um número real. Modelos mais modernos tendem a ter mais dimensões.
- **Pré-treinamento (o "P" de GPT)**: os valores dos embeddings são fruto do treinamento prévio — o modelo aprendeu a distribuir tokens no espaço multidimensional lendo grandes quantidades de texto.
- **Matriz de entrada**: após tokenização e lookup de embeddings, temos uma **matriz [nTokens × nDimensões]**. Exemplo: 100 tokens × 768 dimensões = matriz 100×768.
- **Prompt como continuidade**: para o modelo, não existe separação rígida entre "entrada" e "saída" — ele trata tudo como uma sequência contínua de tokens e descobre os próximos tokens a partir dos anteriores.

## Afirmações/Observações Principais

- **"Para o ChatGPT não é entrada e saída — é uma coisa só"**: o modelo trata prompt + resposta como sequência contínua de tokens.
- **Analogia dimensional**: o instrutor desenha progressão de 1D → 2D → 3D para explicar intuitivamente como embeddings de alta dimensionalidade distribuem tokens no espaço semântico. Palavras relacionadas ficam próximas.
- **Aula "atipicamente longa"**: o instrutor reconhece que é a aula mais teórica e mais longa da trilha. As demais serão focadas em uso prático.
- **Trilha prática mencionada**: Skills, Stack Driven Development, Rules e padrões de projeto para desenvolvimento com IA — a serem cobertos nas aulas seguintes.

## Notas de Evidência

- Exemplos de tokenização: `"O ChatGPT é incrível!"` → `["chat", "GPT", " é", "incri", "vel", "!"]` com IDs numéricos.
- Aula transmitida ao vivo (interrupção para café registrada na transcrição).
- Aula dividida em partes — esta é a parte 1; Attention será na parte 2.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções de fundamentos citadas abaixo (Transformer, atenção, limitações) continuam em `ia-generativa.md`; ver também [Deep Learning (Aprendizado Profundo)](../concepts/deep-learning.md).

- **Nova página de conceito**: [ia-generativa.md](../concepts/ia-generativa.md) — cobre fundamentos de modelos baseados em Transformer.
- **[formacao-dev.md](../entities/formacao-dev.md)**: nova trilha "Dev AI" do mesmo instrutor e plataforma.
- **[overview.md](../overview.md)**: escopo da wiki expande para incluir IA Generativa e desenvolvimento orientado a IA.

## Questões Não Resolvidas

- Como funciona o mecanismo de Attention? (será coberto na aula seguinte)
- Qual a relação entre a dimensionalidade dos embeddings e a qualidade do modelo?
- Como os embeddings são atualizados durante fine-tuning vs. pré-treinamento?

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
