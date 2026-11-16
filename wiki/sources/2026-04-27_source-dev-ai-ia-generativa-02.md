---
title: "Dev AI — Aula 02: IA Generativa — Attention, Feed-Forward e Geração Autorregressiva"
descricao: 'Resumo da Aula IA-02 — Multi-Head Attention (Q/K/V); Feed-Forward (expansão/compressão); camada de saída (logits + softmax); temperatura; geração autorregressiva + KV-cache.'
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ia-generativa", "transformer", "attention", "feed-forward", "softmax", "temperatura", "kv-cache"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-02-IntroducaoDesenvolvimentoIA-IaGenerativa02.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../concepts/deep-learning.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula 02: IA Generativa — Attention, Feed-Forward e Geração Autorregressiva

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual sobre a arquitetura; nenhuma execução.

## Resumo

Continuação direta da Aula IA-01. Completa a visão geral do pipeline de modelos Transformer: após tokenização e embeddings (vistos na aula anterior), cobre **Multi-Head Attention** (relacionamento entre tokens), **Feed-Forward** (expansão/compressão para extrair inteligência da rede), **camadas alternadas de refinamento**, e a **camada de saída** (logits, softmax, amostragem com temperatura). Termina com a explicação do loop **autorregressivo** (gerar 1 token por vez + KV-cache). Insight prático central: *o final do prompt é mais importante que o início*.

## Pontos-Chave

### Multi-Head Attention

- Cada head de atenção é uma "perspectiva" diferente do treinamento — pode capturar relações gramaticais, semânticas ou de outra natureza (emergente, não programada).
- Cada head contém 3 matrizes de pesos: **Query** (o que estou buscando?), **Key** (o que tenho?), **Value** (a resposta).
- Pode haver 12 ou mais heads por camada.
- Todos os tokens (embeddings) são relacionados entre si: o resultado é uma matriz do **mesmo tamanho** da entrada, mas com pesos alterados para refletir contexto inter-token.
- Exemplo: `chat` e `GPT` terão correlação forte, mesmo sendo tokens separados.

### Feed-Forward (FFN)

- Após o attention, cada embedding passa por uma rede feed-forward individual (não olha outros tokens).
- **Expansão linear**: 768 → 3072 (4× maior) — abre espaço para "absorver inteligência da rede".
- **Função de ativação**: suaviza os pesos calculados.
- **Compressão linear**: 3072 → 768 — retorna ao tamanho original com pesos enriquecidos.
- Metáfora: "como uma esponja, trazendo inteligência para dentro dos embeddings".

### Camadas Alternadas de Refinamento

- Attention → Feed-Forward → Attention → Feed-Forward → ... (tipicamente 12 camadas).
- Cada camada tem seus próprios pesos (parâmetros do modelo).
- Refinamento progressivo: mais contexto entre tokens + mais inteligência da rede a cada camada.

### Camada de Saída

- Pega o **último embedding** (última posição da sequência processada) — por isso o final do prompt é mais influente.
- Multiplica com **matriz de vocabulário** (~128k tokens) → vetor de **logits** (128k posições).
- **Softmax**: normaliza logits em probabilidades (ex.: token A = 12%, token B = 0.8%, token C = 6%).
- **Temperatura**: parâmetro que controla a amostragem:
  - Temperatura alta → mais criativo/aleatório.
  - Temperatura baixa → mais rígido/determinístico.

### Geração Autorregressiva

- O modelo descobre **1 token por vez**.
- Após descobrir o próximo token, ele é adicionado à matriz de embeddings (ex.: 6→7 tokens).
- O processo volta ao início (attention → feed-forward → ... → saída).
- **KV-Cache**: os tokens anteriores já foram processados; apenas o novo embedding passa pelo cálculo completo. Keys e Values anteriores são reutilizados.
- O modelo **não distingue** entrada de saída — tudo é uma sequência contínua de tokens.

## Afirmações/Observações Principais

- **"O final do prompt é mais importante"**: o último embedding é o que confronta com o vocabulário para gerar o próximo token. Tokens no final da sequência têm mais influência no resultado.
- **"O modelo não enxerga entrada e saída — é uma continuidade"**: a aplicação de chat (ChatGPT) é que divide visualmente em prompt e resposta; internamente, é uma sequência contínua.
- **Custo computacional**: um parágrafo de entrada gerando uma página de saída consome ~100MB+ de memória e centenas de bilhões a trilhões de operações. Fora os 13–30GB+ de parâmetros do modelo.
- **"Trilhão de parâmetros"**: inclui as matrizes Q/K/V de cada head de atenção + matrizes de feed-forward + matriz de vocabulário.
- **Parâmetros são fruto do pré-treinamento**: todos os pesos internos (attention, FFN, vocabulário) foram aprendidos durante o treinamento prévio.

## Notas de Evidência

- Diagrama desenhado ao vivo cobrindo todo o pipeline: tokenização → embeddings → [attention → FFN] × N → saída → softmax → próximo token → loop.
- Números concretos: 768 dimensões, 12 heads, 128k vocabulário, 12 camadas, expansão 4× no FFN.
- Analogia com conversa humana: "o que eu falo agora tem mais relevância do que o que falei no começo" — paralelo direto com o modelo.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções de fundamentos citadas abaixo (Transformer, atenção, limitações) continuam em `ia-generativa.md`; ver também [Deep Learning (Aprendizado Profundo)](../concepts/deep-learning.md).

- **[ia-generativa.md](../concepts/ia-generativa.md)**: completa o pipeline com attention, feed-forward, camada de saída, geração autorregressiva e KV-cache. Adiciona insight prático sobre importância do final do prompt. Resolve parcialmente a questão sobre Attention.

## Questões Não Resolvidas

- Detalhes matemáticos da fórmula de Attention (Q·Kᵀ/√d, masking) — será coberto na aula seguinte.
- Como o fine-tuning altera os parâmetros pré-treinados?
- Qual o impacto real da temperatura nos diferentes tipos de tarefa (código vs. texto criativo)?

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
