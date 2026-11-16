---
title: "Matt Pocock — Most devs don't understand how LLM tokens work"
descricao: 'Vídeo de Matt Pocock (11 min, set/2025) — token como moeda, encode/decode com `js-tiktoken` (`o200k_base`), contagens diferentes por provedor (demo AI SDK), treino do vocabulário (caractere → subpalavra), trade-off do tamanho do vocabulário, palavras raras. `demonstrado`; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "tokens", "tokenizacao", "llm", "custo", "typescript"]
source_files:
  - raw/sources/2025-09-19_most-devs-don-t-understand-how-llm-tokens-work_en-corrigida_nKSk_TiR8YA.md
related_pages:
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../concepts/ia-generativa.md
  - ../concepts/claude-api-parametros-e-custo.md
  - ../entities/matt-pocock.md
  - ./2026-04-27_source-dev-ai-ia-generativa-01.md
  - ./2026-04-27_source-dev-ai-limitacoes-do-modelo.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — Most devs don't understand how LLM tokens work

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 10:57 (set/2025) em que Matt Pocock explica tokens para quem usa LLMs sem conhecer os fundamentos — motivado, segundo ele, por um workshop na Polônia em que só cerca de um terço dos presentes sabia o que é um token. Cobre: token como "moeda" de cobrança; encode/decode com o tokenizador da OpenAI (`js-tiktoken`, codificação `o200k_base` do GPT-4o); por que provedores contam tokens diferentes para o mesmo texto; como vocabulários são treinados (tokenizador por caractere × por subpalavra, construídos ao vivo em TypeScript); o trade-off do tamanho do vocabulário; e palavras raras virando mais tokens.

**Classificação**: `demonstrado` — código TypeScript executado ao vivo (AI SDK chamando Anthropic e Google, `js-tiktoken`, dois tokenizadores de brinquedo). Mistura com `explicacao` (diagramas do pipeline) e `opiniao` (TypeScript × Python, linguagens comuns gastam menos tokens), que entram atribuídas. Captura automática; a explicação dos pares de caracteres do tokenizador de subpalavras ficou ilegível mesmo após a correção (ver "Questões Não Resolvidas").

## Pontos-Chave

1. **Token como moeda.** O custo de uma chamada soma tokens de entrada e de saída, cobrados a taxas diferentes. A conta exata dita no vídeo está ruidosa na legenda e não é reproduzida aqui.
2. **Mesmo prompt, contagens diferentes.** Demo com o AI SDK enviando "hello world": Claude 3.5 Haiku reportou 11 tokens de entrada e 20 de saída; Gemini 2.0 Flash-Lite, 4 de entrada e 11 de saída; o tokenizador da OpenAI (GPT-4o) conta 3. Ele trata o 11 da Anthropic como "bizarro" e não o explica.
3. **Vocabulário próprio por modelo.** Cada LLM tem um vocabulário de palavras, subpalavras e caracteres; cada item recebe um número, e esse número é o token. Encoding divide o texto nos **maiores** pedaços presentes no vocabulário e os troca pelos números.
4. **O modelo computa sobre números.** Pipeline: texto → pedaços → tokens (números) → processamento → tokens de saída → decode (busca dos pedaços e concatenação). Demonstração: ~2.300 caracteres viram menos de 500 tokens no `o200k_base`; "hello world" (12 caracteres) vira 3.
5. **Treino do tokenizador.** O vocabulário sai de um corpus — em geral, segundo ele, o mesmo usado para treinar o modelo. Tokenizador por caractere: tokens = caracteres (no exemplo "the cat sat on the mat", vocabulário de 10 tokens). Por subpalavra: agrupa pares frequentes e reduz o número de tokens do mesmo input (de 11 para 8 no exemplo). Tokenizadores reais agrupam "grupos de grupos". O dele é declaradamente *vibe coded*.
6. **Trade-off do tamanho do vocabulário.** Exemplo ilustrativo (não medido): "understanding" em ~5 tokens com vocabulário de 1 mil, 3 com 50 mil, 2 com 200 mil. Menos tokens = menos trabalho para o LLM; mas vocabulário maior exige modelo maior e mais memória, então não escala ao infinito.
7. **Palavras raras viram mais tokens.** "frabjous" (palavra inventada por Lewis Carroll) vira 4 tokens no `o200k_base`. Por extensão, idiomas e linguagens de programação pouco presentes no corpus custam mais tokens.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| "Tokens são a moeda dos LLMs"; você é cobrado por token | Enquadramento de custo; complementa a fórmula da [API do Claude](../concepts/claude-api-parametros-e-custo.md) (tokens ÷ 1 milhão × preço, do curso CCDV-F) |
| Contagens do demo (3 / 11 / 4 tokens de entrada para "hello world") | Números de um único experimento; **não generalizáveis**. Hipótese do mantenedor (não dita no vídeo): o 11 da Anthropic inclui overhead de formatação da mensagem |
| Toda a computação do LLM é feita sobre números, não sobre texto | Coerente com o pipeline da [IA-01](./2026-04-27_source-dev-ai-ia-generativa-01.md) |
| Vocabulário maior → menos tokens, mas modelo maior e mais memória | Resposta parcial, de uma fonte só, à questão "tamanho do vocabulário × performance" de [IA Generativa](../concepts/ia-generativa.md) |
| "É mais barato mandar 20 linhas de JavaScript do que 20 de Haskell" | Opinião plausível, **sem medição** no vídeo; ele a apresenta como vantagem das linguagens mais usadas "na era da IA" |
| "Classes TypeScript são boas" | Opinião dele, de passagem |
| "TypeScript é a linguagem para aplicações com IA; Python, para construir modelos" | Opinião dele; promete nunca mostrar Python no canal |
| Cita "GPT5, eu acho" como o modelo da tabela de preços | Hesitação do próprio autor; não usar como dado |

## Notas de Evidência

- Workshop, token como moeda e conta de custo: 0–10%.
- Demo AI SDK (Anthropic × Google) e definição de vocabulário: 10–25%.
- `js-tiktoken`/`o200k_base`, pipeline encode → LLM → decode e início do treino do tokenizador: 25–50%.
- Tokenizador por caractere, tamanho do vocabulário e tokenizador por subpalavra: 50–75%.
- Grupos de grupos, "frabjous", idiomas e linguagens de programação: 75–90%.
- Recapitulação e opinião TypeScript × Python: 90–100%.

## Impacto na Wiki Existente

- **[IA Generativa](../concepts/ia-generativa.md)**: a seção de tokenização ganha encode/decode, vocabulário por provedor, treino do vocabulário a partir de corpus (caractere → subpalavra → grupos de grupos), trade-off do tamanho do vocabulário e palavras raras. Primeira fonte `demonstrado` sobre tokenização na wiki (as aulas IA-01 e IA-04 são `explicacao`). Sem contradição: a IA-02 cita vocabulário de ~128 mil, e aqui o `o200k_base` é outro tokenizador.
- **[API do Claude: parâmetros e custo](../concepts/claude-api-parametros-e-custo.md)**: acrescentado que a contagem de tokens depende do tokenizador do provedor, com o demo como ilustração.
- **[Matt Pocock](../entities/matt-pocock.md)**: fonte mais antiga dele na wiki (set/2025), anterior ao pivô para agentes que ele data em dez/2025; posições sobre TypeScript × Python registradas.
- **Relação com IA-04**: a limitação de contagem de letras ([IA-04](./2026-04-27_source-dev-ai-limitacoes-do-modelo.md)) é consequência direta do que este vídeo mostra (o modelo vê números de pedaços, não caracteres); Matt não faz essa ligação.

## Questões Não Resolvidas

- **Conta de custo**: a fórmula falada ("dividir por 1.000 e multiplicar por um centavo") está ruidosa na legenda e contém correções só prováveis (`a,000` → 1,000; `a scent` → a cent). Conferir no vídeo antes de citar.
- **Por que 11 tokens de entrada na Anthropic** para "hello world"? Não explicado na fonte.
- **Linguagens comuns gastam menos tokens**: medir (ex.: o mesmo algoritmo em JavaScript e Haskell no `o200k_base`).
- **Tokenizador de subpalavras**: a explicação dos pares de caracteres e a forma exata do input do exemplo ficaram em `Não resolvido` no cabeçalho da versão de referência; nada desta página se apoia nesses trechos.
- O vídeo não nomeia o algoritmo usado por tokenizadores reais (BPE é o nome usual por conhecimento geral, não verificado; o termo não aparece na fonte).

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — tokenização no pipeline Transformer
- [API do Claude: parâmetros e custo](../concepts/claude-api-parametros-e-custo.md) — cobrança por token
- [Matt Pocock](../entities/matt-pocock.md) — autor
- [Dev AI — IA-01](./2026-04-27_source-dev-ai-ia-generativa-01.md) — tokenização e embeddings, versão de aula
- [Dev AI — IA-04](./2026-04-27_source-dev-ai-limitacoes-do-modelo.md) — limitações de contagem de caracteres
