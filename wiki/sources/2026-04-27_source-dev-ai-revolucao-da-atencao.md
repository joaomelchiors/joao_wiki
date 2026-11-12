---
title: "Dev AI — Aula 03: A Revolução da Atenção (Multi-Head Attention em detalhe)"
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ia-generativa", "transformer", "attention", "query-key-value", "softmax", "deep-learning"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-03-IntroducaoDesenvolvimentoIA-RevolucaoDaAtencao.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula 03: A Revolução da Atenção (Multi-Head Attention em detalhe)

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual sobre atenção, com cálculo ilustrativo; nenhuma execução.

## Resumo

Aula opcional de aprofundamento que detalha o funcionamento interno do mecanismo de **Multi-Head Attention** — o núcleo dos modelos Transformer. Explica as matrizes de projeção Q/K/V por head, o cálculo de scores de atenção (Q × Kᵀ → softmax), a concatenação de heads e a matriz de saída. Inclui visualização concreta dos pesos de atenção entre tokens (percentuais) e demonstra que a atenção não é simétrica (ordem importa). Reforça o insight de que o final do prompt é mais relevante e introduz o conceito de "engenharia de contexto" como fundamento para Skills, Rules e Spec Driven Development.

## Pontos-Chave

### Projeção Q/K/V por Head

- Cada head de atenção recebe a **matriz inteira** de embeddings (6×768).
- Projeta cada embedding em 3 vetores menores usando matrizes de peso fixas:
  - **W_Q** (768×64): gera vetor Query de 64 dimensões.
  - **W_K** (768×64): gera vetor Key de 64 dimensões.
  - **W_V** (768×64): gera vetor Value de 64 dimensões.
- Tamanho 64 = 768 ÷ 12 heads. Cada head trabalha com uma fatia da dimensionalidade total.
- As matrizes W_Q, W_K, W_V são **parâmetros fixos** do modelo (fruto do pré-treinamento).

### Semântica de Q/K/V

| Componente | Semântica | Analogia |
|---|---|---|
| **Query (Q)** | "O que estou buscando?" | A pergunta, a intenção |
| **Key (K)** | "O que tenho?" | O conteúdo, a identidade do token |
| **Value (V)** | "O que quero descobrir?" | A resposta, o valor a ser retornado |

### Cálculo de Atenção

1. Para cada par de tokens (i, j): calcular **Q_i × K_j** → score de atenção.
2. Cada token calcula score com **todos** os outros (inclusive consigo mesmo).
3. Aplicar **softmax** sobre os scores → normaliza para valores entre 0 e 1 (percentuais).
4. Resultado: **mapa de atenção** — percentual de atenção que cada token dá a cada outro.
5. Multiplicar pesos de atenção × **V** (values) → saída final do head.

### Visualização Concreta

Exemplo de mapa de atenção para token `chat`:

| Token | Atenção |
|---|---|
| `chat` (self) | 52% |
| `GPT` | 22% |
| `é` | 5% |
| `incri` | 8% |
| `vel` | 7% |
| `!` | 6% |

**Atenção não é simétrica**: `chat→GPT` = 22%, mas `GPT→chat` = 18%. A ordem dos tokens importa — a posição relativa afeta os scores.

### Concatenação e Saída

1. Cada head produz uma saída de dimensão 64 para cada token.
2. **Concatenação**: 12 heads × 64 = 768 → restaura a dimensão original.
3. Matriz de saída **W_O**: projeção final (768×768) → resultado da camada de attention.
4. Resultado: matriz do **mesmo tamanho** da entrada (6×768), mas com contexto inter-token embutido.

### Insights Práticos Reforçados

- **Final do prompt é mais importante**: confirmado com explicação mecânica — o último embedding é o mais usado para determinar o próximo token.
- **Relevância decrescente**: vai de trás para frente. Últimos tokens > primeiros tokens em influência estatística.
- **Engenharia de contexto**: mencionada como fundamento para Skills, Rules e Spec Driven Development. "Trazer contexto no momento certo" é fundamental.

## Afirmações/Observações Principais

- **"Cada head de atenção é uma perspectiva"**: pode capturar relações gramaticais, semânticas, de domínio — emergentes do treinamento, não programadas.
- **Analogia "cerveja e fralda"**: correlações inesperadas emergem dos dados (como no supermercado) — os heads de atenção capturam relações que humanos não necessariamente entendem.
- **"Aula opcional"**: o instrutor reconhece que é conteúdo avançado e sugere pular se o aluno for mais prático.
- **Parâmetros do modelo**: cada W_Q, W_K, W_V de cada head + W_O + matrizes de feed-forward = bilhões/trilhões de parâmetros.

## Notas de Evidência

- Visualização interativa (gerada pelo Claude) mostrando mapa de atenção entre tokens.
- Diagrama ao vivo detalhando o fluxo dentro de um único head de atenção.
- Números concretos: 768 dimensões, 12 heads, 64 por head, matrizes 768×64.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: resolve a questão pendente sobre detalhes matemáticos do Attention; complementa seção de Multi-Head Attention com fórmula Q×Kᵀ, projeção por head e concatenação.

## Questões Não Resolvidas

- Masking (causal mask) para impedir que tokens "olhem para frente" — mencionado implicitamente ("sempre olhar para trás, nunca para frente") mas não formalizado.
- Positional encoding — como o modelo sabe a posição dos tokens?
- Layer normalization e residual connections — não mencionados nesta aula.

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
