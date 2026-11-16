---
title: "Deep Learning (Aprendizado Profundo)"
descricao: '**(draft: definição sem fonte direta)** Deep Learning — redes de várias camadas, pré-treinamento, pesos/parâmetros e baixa interpretabilidade, montado a partir das aulas IA-01 a IA-03 (o termo não aparece literalmente nas fontes; definição formal é conhecimento geral, marcada como tal).'
type: concept
status: draft
created: 2026-11-11
updated: 2026-11-12
tags: ["deep-learning", "redes-neurais", "pré-treinamento", "parâmetros", "pesos", "transformer", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-01-IntroducaoDesenvolvimentoIA-IaGenerativa01.md
  - raw/sources/2026-04-25_transcrição-IA-02-IntroducaoDesenvolvimentoIA-IaGenerativa02.md
  - raw/sources/2026-04-25_transcrição-IA-03-IntroducaoDesenvolvimentoIA-RevolucaoDaAtencao.md
related_pages:
  - ./ia-generativa.md
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-01.md
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-02.md
  - ../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md
  - ../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md
---

# Deep Learning (Aprendizado Profundo)

> **Nota sobre a evidência**: nenhum material em `raw/` usa o termo "deep learning" ou "aprendizado profundo" (busca em português e inglês feita em 2026-11-11). O conceito foi montado a partir das descrições de **redes de várias camadas, pré-treinamento, pesos e parâmetros** nas aulas IA-01 a IA-03. Trechos marcados como *conhecimento geral* não vêm das fontes da wiki e não foram verificados nelas.

## Definição

*Conhecimento geral (não vem das fontes)*: deep learning é a família de técnicas de aprendizado de máquina que usa **redes neurais com muitas camadas** empilhadas. Os parâmetros (pesos) da rede são ajustados por treinamento a partir de dados, e não escritos à mão como regras.

Nesta wiki o conceito importa porque os modelos de [IA generativa](./ia-generativa.md) baseados em Transformer são redes desse tipo. As aulas tratam o Transformer como uma arquitetura de rede, mas não o enquadram explicitamente como deep learning.

## Compreensão Atual

O que as fontes dizem, e que corresponde à ideia de deep learning:

- **Rede em camadas**: o modelo processa a entrada passando por uma sequência de camadas, alternando *multi-head attention* e *feed-forward*; "pode ser, por exemplo, 12 camadas" (varia por modelo). Cada camada refina progressivamente a representação dos tokens até a camada de saída, que calcula **apenas o próximo token**. Ver [IA-02](../sources/2026-04-27_source-dev-ai-ia-generativa-02.md).
- **Parâmetros aprendidos**: cada camada tem suas próprias matrizes de pesos, "calculadas através de um treinamento". Tudo o que foi otimizado no pré-treinamento para gerar uma saída a partir de uma entrada são os **parâmetros do modelo**. É por isso que se fala em modelos com bilhões ou trilhões de parâmetros.
- **Pré-treinamento**: o "P" de GPT (*Generative Pre-trained Transformer*) indica que os parâmetros foram aprendidos antes do uso. Os **embeddings** (vetores, por exemplo de 768 dimensões no exemplo da aula) também resultam desse treinamento. Ver [IA-01](../sources/2026-04-27_source-dev-ai-ia-generativa-01.md).
- **Características que "emergem"**: o instrutor diz que o que cada *head* de atenção representa emergiu do treinamento e que "ninguém sabe" se são características gramaticais, semânticas ou outras. Na wiki isso fica como evidência de **baixa interpretabilidade** da rede. Ver [Revolução da Atenção](../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md).
- **Feed-forward como "memória da rede"**: na fase feed-forward o modelo expande e comprime a representação (matriz com tamanho 4× maior, função de ativação, compressão) para "extrair inteligência da rede" e do treinamento. Já a atenção relaciona os tokens entre si.

### Interpretação (não é afirmação direta das fontes)

- Essa descrição de camadas empilhadas com pesos aprendidos é consistente com a definição geral de deep learning, mas o instrutor não usa o termo.
- A natureza **aprendida e opaca** dos pesos ajuda a explicar por que o comportamento do modelo é probabilístico e por que alucina, o que a wiki trata em [IA Generativa](./ia-generativa.md) e em [Limitações do Modelo](../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md). A ligação causal não é afirmada explicitamente nas fontes lidas.

## Debates

- **Fronteira do termo**: as fontes falam de "redes baseadas em Transformers" e não distinguem IA, aprendizado de máquina e deep learning. A taxonomia IA ⊃ aprendizado de máquina ⊃ deep learning é conhecimento geral, não verificado nas fontes.
- **Interpretabilidade**: as fontes afirmam que não se sabe o que cada head representa. Não há discussão sobre métodos de interpretação.

## Fontes de Suporte

- [Aula IA-01: IA Generativa 01](../sources/2026-04-27_source-dev-ai-ia-generativa-01.md): tokens, embeddings como resultado do pré-treinamento.
- [Aula IA-02: IA Generativa 02](../sources/2026-04-27_source-dev-ai-ia-generativa-02.md): camadas, pesos, parâmetros, feed-forward, camada de saída.
- [Aula IA-03: Revolução da Atenção](../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md): heads de atenção, matrizes Q/K/V com pesos aprendidos.

## Entidades Relacionadas

- [Formação.dev](../entities/formacao-dev.md): origem das aulas que descrevem a arquitetura.

## Questões Não Resolvidas

- Como o treinamento ajusta os pesos (retropropagação, função de perda, dados)? As fontes não cobrem; o instrutor menciona apenas "emergem a partir do treinamento".
- A aula opcional prometida sobre as matrizes Q/K/V e a "fórmula matemática" pode trazer mais detalhes; não consta nas transcrições ingeridas até agora.
- Fontes externas fora de `raw/` poderiam fechar a definição formal; hoje ela é conhecimento geral.

## Notas de Atualização

- 2026-11-12: status passou a `draft` (higienização, etapa 3). A definição do termo é conhecimento geral, sem fonte direta na wiki; as aulas (`explicacao`) sustentam apenas a descrição da arquitetura.
- 2026-11-11: página criada a partir de busca em `raw/` (sem ocorrência literal do termo) e leitura de trechos das aulas IA-01 a IA-03. A tag `deep-learning` de [ia-generativa.md](./ia-generativa.md) não tinha conceito associado até agora.
