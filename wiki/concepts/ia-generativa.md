---
title: "IA Generativa (Modelos baseados em Transformer)"
descricao: 'IA Generativa (hub) — fundamentos da arquitetura Transformer (tokenização, embeddings, atenção, feed-forward, saída, temperatura, KV-cache), limitações e debates; lista os conceitos derivados; encode/decode e treino do vocabulário (Matt Pocock). Dividida em 2026-11-12.'
type: concept
status: active
created: 2026-04-27
updated: 2026-11-15
tags: ["ia-generativa", "transformer", "tokenização", "embeddings", "attention", "llm", "hub"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-01-IntroducaoDesenvolvimentoIA-IaGenerativa01.md
  - raw/sources/2026-04-25_transcrição-IA-02-IntroducaoDesenvolvimentoIA-IaGenerativa02.md
  - raw/sources/2026-04-25_transcrição-IA-03-IntroducaoDesenvolvimentoIA-RevolucaoDaAtencao.md
  - raw/sources/2026-04-25_transcrição-IA-04-IntroducaoDesenvolvimentoIA-limitacoesDoModelo.md
  - raw/sources/2025-09-19_most-devs-don-t-understand-how-llm-tokens-work_en-corrigida_nKSk_TiR8YA.md
related_pages:
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ./deep-learning.md
  - ./system-prompt-e-guardrails.md
  - ./agentes-de-ia.md
  - ./engenharia-de-contexto.md
  - ./rules-e-skills.md
  - ./tipos-de-skill.md
  - ./skills-na-pratica.md
  - ./spec-driven-development.md
  - ./harness.md
  - ./melhores-praticas-claude-code.md
  - ./mcp.md
  - ./ai-driven-development.md
  - ./tdd.md
  - ./seguranca-de-agentes.md
  - ./claude-api-parametros-e-custo.md
  - ./home-repo.md
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-01.md
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-02.md
  - ../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md
  - ../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md
  - ../sources/2025-09-19_source-matt-pocock-tokens-llm.md
  - ../entities/formacao-dev.md
---

# IA Generativa (Modelos baseados em Transformer)

> **Hub dividido em 2026-11-12.** Esta página mantém os fundamentos da arquitetura Transformer. Os demais temas (system prompt, agentes, engenharia de contexto, Skills, SDD, harness, MCP, AI-Driven Development etc.) foram movidos para páginas próprias, listadas em [Conceitos Derivados](#conceitos-derivados). O texto foi movido sem reescrita substancial.

## Definição
Modelos de IA generativa baseados na arquitetura Transformer são redes neurais que geram texto (e outros conteúdos) a partir de uma entrada (prompt). O nome "Transformer" vem do paper "Attention is All You Need" (2017). Exemplos comerciais: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google). O "GPT" significa **Generative Pre-trained Transformer**. Para o conceito de redes em camadas, pré-treinamento e parâmetros, ver [Deep Learning](./deep-learning.md).

## Compreensão Atual

### Pipeline de Processamento
O fluxo de entrada até a saída de um modelo baseado em Transformer segue as seguintes etapas:

```
Texto (prompt) → Tokenização → Embeddings → [Attention → Feed-Forward] × N → Camada de Saída → Próximo Token → (loop autorregressivo)
```

### Etapa 1: Tokenização
A entrada de texto é dividida em **tokens** — fragmentos intermediários entre letras individuais e palavras inteiras. Cada token tem um **ID numérico** dentro do vocabulário do modelo.

| Característica | Detalhe |
|---|---|
| Granularidade | Entre sílaba e palavra inteira |
| Vocabulário | Conjunto finito de tokens pré-definido; cada modelo tem o seu |
| ID | Número inteiro sequencial (ex.: `chat` → 9139, `GPT` → 10234) |
| Pré-processamento | Pode incluir lowercase, remoção de espaços duplos, etc. |

**Exemplo**: `"O ChatGPT é incrível!"` → `["chat", "GPT", " é", "incri", "vel", "!"]`

#### Encode, decode e vocabulário (Matt Pocock, set/2025)
Fonte: [vídeo sobre tokens](../sources/2025-09-19_source-matt-pocock-tokens-llm.md) — `demonstrado` (TypeScript ao vivo), legenda automática corrigida.

- **Encode**: o texto é dividido nos **maiores** pedaços existentes no vocabulário, e cada pedaço é trocado pelo seu número. **Decode** é o inverso: buscar os pedaços pelos números e concatená-los. Toda a computação do modelo ocorre sobre os números.
- **Cada provedor tem seu tokenizador**, logo o mesmo texto gera contagens diferentes. No demo, "hello world" deu 3 tokens no `o200k_base` (GPT-4o, via `js-tiktoken`), 4 de entrada no Gemini 2.0 Flash-Lite e 11 de entrada no Claude 3.5 Haiku — números de um único experimento, sem explicação para o 11.
- **Treino do vocabulário**: parte de um corpus (segundo ele, em geral o mesmo do treino do modelo). Um tokenizador por caractere tem tokens = caracteres; um por subpalavra agrupa pares frequentes e reduz a contagem; tokenizadores reais agrupam "grupos de grupos".
- **Tamanho do vocabulário é trade-off**: vocabulário maior → menos tokens por texto (exemplo ilustrativo: "understanding" em ~5, 3 ou 2 tokens com 1 mil, 50 mil e 200 mil itens), mas exige modelo maior e mais memória.
- **Palavras raras viram mais tokens** ("frabjous" → 4 no `o200k_base`); segundo Matt, o mesmo vale para idiomas e linguagens de programação pouco frequentes no corpus (JavaScript mais barato que Haskell — afirmação dele, sem medição).
- A limitação de contagem de letras (ver [Limitações Arquiteturais](#limitações-arquiteturais-aula-ia-04)) decorre disso: o modelo vê números de pedaços, não caracteres (ligação feita pelo mantenedor, não pela fonte).

### Etapa 2: Embeddings
Cada token é mapeado para um **vetor multidimensional** (embedding) que representa sua posição semântica. Tokens com significado semelhante ficam próximos no espaço de embeddings.

| Propriedade | Valor típico |
|---|---|
| Dimensões | 128, 768, 2048 ou 4096 (modelos maiores → mais dimensões) |
| Tipo de coordenada | Números reais (positivos e negativos, próximos de zero) |
| Origem | Pré-treinamento (leitura de grandes corpora de texto) |
| Unicidade | Cada token tem um embedding fixo no modelo pré-treinado |

**Analogia dimensional** (do instrutor):
- **1D**: distribuir palavras em uma linha — palavras relacionadas ficam próximas.
- **2D**: distribuir em um plano — coordenadas (x, y) para cada palavra.
- **3D**: distribuir em espaço tridimensional — (x, y, z).
- **nD**: modelos reais usam 768+ dimensões — impossível visualizar, mas o princípio é o mesmo.

### Resultado: Matriz de Entrada
Após tokenização + lookup de embeddings, o modelo opera sobre uma **matriz bidimensional**:

```
[nTokens × nDimensões]
```

Exemplo: entrada com 100 tokens em modelo com 768 dimensões → matriz 100×768.

### Continuidade Prompt-Resposta
Para o modelo, não existe separação rígida entre "entrada" (prompt) e "saída" (resposta). Tudo é uma sequência contínua de tokens — o modelo descobre os **próximos tokens** a partir dos anteriores.

### Etapa 3: Multi-Head Attention
Mecanismo central dos Transformers ("a grande revolução"). Relaciona todos os tokens entre si para construir contexto.

- **Heads**: múltiplos heads de atenção (ex.: 12), cada um com uma "perspectiva" diferente emergente do treinamento.
- **Matrizes Q/K/V**: cada head contém 3 matrizes de pesos — **Query** (o que busco?), **Key** (o que tenho?), **Value** (a resposta).
- **Resultado**: a matriz de saída tem o **mesmo tamanho** da entrada, mas com pesos alterados para refletir relações inter-token.
- Exemplo: `chat` e `GPT` terão correlação forte, mesmo sendo tokens separados.

Os pesos dessas matrizes são parâmetros do modelo aprendidos no pré-treinamento. Ninguém define explicitamente o que cada head captura — é emergente (pode ser gramática, semântica, domínio específico, etc.).

#### Projeção por Head (detalhado na Aula 03)
Cada head projeta os embeddings em espaços menores usando matrizes de peso fixas:

| Matriz | Dimensão | Função |
|---|---|---|
| W_Q | 768×64 | Gera vetor Query por token |
| W_K | 768×64 | Gera vetor Key por token |
| W_V | 768×64 | Gera vetor Value por token |

Tamanho 64 = 768 ÷ 12 heads. Cada head opera sobre uma fatia da dimensionalidade total.

#### Cálculo de Atenção
1. Para cada par de tokens (i, j): **Q_i × K_j** → score de atenção.
2. Cada token calcula score com **todos** os outros (inclusive consigo mesmo).
3. **Softmax** normaliza scores para valores entre 0 e 1 (percentuais de atenção).
4. Multiplicar pesos de atenção × **V** (values) → saída do head.

**Atenção não é simétrica**: `chat→GPT` = 22%, mas `GPT→chat` = 18%. A ordem dos tokens importa.

#### Concatenação e Saída
12 heads × 64 = 768 → concatenação restaura a dimensão original. Uma matriz de saída W_O (768×768) faz a projeção final.

### Etapa 4: Feed-Forward (FFN)
Após o attention, cada embedding passa individualmente por uma rede feed-forward (não olha outros tokens):

1. **Expansão linear**: 768 → 3072 (4× maior)
2. **Função de ativação**: suaviza os pesos
3. **Compressão linear**: 3072 → 768 — retorna ao tamanho original

Metáfora do instrutor: *"como uma esponja, trazendo inteligência da rede para dentro dos embeddings"*. Enquanto o attention relaciona tokens entre si, o FFN "absorve" conhecimento dos parâmetros da rede.

### Camadas Alternadas de Refinamento
Attention e Feed-Forward se alternam em sequência (tipicamente 12 camadas):

```
[Attention → Feed-Forward] × 12 camadas
```

Cada camada tem seus próprios pesos. Refinamento progressivo: mais contexto inter-token + mais inteligência da rede a cada camada.

### Camada de Saída (Logits + Softmax)
1. Pega o **último embedding** (última posição da sequência processada).
2. Multiplica com **matriz de vocabulário** (~128k tokens) → vetor de **logits**.
3. **Softmax**: normaliza logits em probabilidades.

**Insight prático**: o último embedding é o que confronta com o vocabulário. Por isso, **o final do prompt tem mais peso** na geração do próximo token — os últimos tokens são mais influentes.

### Temperatura
Parâmetro que controla a amostragem do próximo token a partir das probabilidades do softmax:

| Temperatura | Comportamento |
|---|---|
| Baixa (ex.: 0.1) | Rígido, determinístico — seleciona tokens de alta probabilidade |
| Alta (ex.: 1.0+) | Criativo, aleatório — permite tokens menos prováveis |

### Geração Autorregressiva e KV-Cache
O modelo gera **1 token por vez**:

1. Descobre o próximo token via logits + softmax + temperatura.
2. Adiciona o novo token à matriz de embeddings (ex.: 6→7 tokens).
3. Volta ao início do pipeline (attention → FFN → ... → saída).
4. **KV-Cache**: reutiliza Keys e Values dos tokens anteriores — apenas o novo embedding é recalculado.

O loop continua até o modelo gerar o token especial `end_of_sequence`.

### Limitações Arquiteturais (Aula IA-04)
A arquitetura baseada em tokens impõe limitações práticas:

| Tarefa | Dificuldade | Motivo |
|---|---|---|
| Contagem de letras | Alta | Modelo opera sobre tokens, não caracteres individuais |
| Anagramas / palíndromos | Alta | Exige decomposição no nível de caractere |
| Ocorrências de letras | Alta | Token pode conter múltiplas letras |

**Exemplo**: "Quantas letras tem inconstitucionalissimamente?" (27 letras) — Claude Sonnet respondeu 29 (corrigiu para 27 na mesma resposta); modelos locais erraram completamente.

**Chain-of-thought não resolve**: modelo de 17B tentou contar repetidamente, entrou em loop e consumiu 6800+ tokens antes de falhar.

### Ferramentas
- **LM Studio**: ferramenta para rodar modelos de IA localmente. Permite ver chain-of-thought explícito e estatísticas (tokens/s, tempo, tokens de entrada/saída). Útil para experimentação e comparação entre modelos. Também permite rodar modelos sem censura (sem guardrails).

## Debates

- **Conhecimento teórico vs. prático**: o instrutor reconhece que a maioria dos desenvolvedores quer pular direto para o uso prático, mas defende que entender o funcionamento interno dá insights sobre como usar os modelos de forma melhor.
- **Dimensionalidade e qualidade**: modelos com mais dimensões tendem a capturar relações semânticas mais sutis, mas o trade-off custo/performance não foi discutido em detalhe.
- **Custo computacional**: um parágrafo de entrada gerando uma página de saída consome ~100MB+ de memória e centenas de bilhões a trilhões de operações. Modelos grandes têm 13–30GB+ de parâmetros.
- **Crise energética**: o instrutor menciona a corrida por usinas nucleares como consequência do custo computacional massivo das IAs generativas.
- **AGI (Inteligência Geral Artificial)**: o instrutor não acredita que a arquitetura Transformer atual chegará à AGI — será necessário um novo breakthrough (como o Attention foi para LLMs). Porém, a tecnologia atual permite 10–15 anos de inovação em software.

## Conceitos Derivados

- [system-prompt-e-guardrails](./system-prompt-e-guardrails.md): System prompt, estrutura de mensagens e guardrails (IA-05).
- [agentes-de-ia](./agentes-de-ia.md): Definição de agente, agente × workflow e sub agentes.
- [engenharia-de-contexto](./engenharia-de-contexto.md): Engenharia de prompt (CORFT), context rot e smart/dumb zone.
- [rules-e-skills](./rules-e-skills.md): Rule × Skill, formato prático e ciclo de criação de Skills.
- [tipos-de-skill](./tipos-de-skill.md): Taxonomia de Skills e Skills do Capítulo 3.
- [skills-na-pratica](./skills-na-pratica.md): Pastas por ferramenta, instalação, plugins, Skill do zero e com código.
- [spec-driven-development](./spec-driven-development.md): SDD: engenharia de contexto em escala, prática e visão do curso.
- [harness](./harness.md): Harness: loop de execução, compressão de contexto, autonomia e isolamento.
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md): Melhores práticas operacionais do Claude Code (Anthropic).
- [mcp](./mcp.md): MCP: arquitetura, visão do curso, tools × resources × prompts e Skill × MCP.
- [ai-driven-development](./ai-driven-development.md): Práticas de Matt Pocock: HITL/AFK, fluxo Grill Me → PRD → AFK, módulos profundos, push × pull.
- [tdd](./tdd.md): TDD como teto de qualidade do feedback para IA.
- [seguranca-de-agentes](./seguranca-de-agentes.md): Prompt injection, jailbreak e higiene de sessão.
- [claude-api-parametros-e-custo](./claude-api-parametros-e-custo.md): Parâmetros, stop_reason, custo e caching na API do Claude.
- [deep-learning](./deep-learning.md): Redes em camadas, pré-treinamento e parâmetros.
- [home-repo](./home-repo.md): Repositório-casa para agentes em ambientes multi-repo.

Os conteúdos sobre **Modo Agente × Coding Agent** e **Copilot Instructions** foram para a entidade [GitHub Copilot](../entities/github-copilot.md).

## Fontes de Suporte

- [Dev AI — Aula 01: IA Generativa — Tokenização e Embeddings](../sources/2026-04-27_source-dev-ai-ia-generativa-01.md)
- [Dev AI — Aula 02: IA Generativa — Attention, Feed-Forward e Geração Autorregressiva](../sources/2026-04-27_source-dev-ai-ia-generativa-02.md)
- [Dev AI — Aula 03: A Revolução da Atenção](../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md)
- [Dev AI — Aula 04: Limitações dos Modelos](../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md)
- [Matt Pocock — Most devs don't understand how LLM tokens work](../sources/2025-09-19_source-matt-pocock-tokens-llm.md): encode/decode e treino do vocabulário, demonstrado em TypeScript

Fontes de outros temas estão listadas nas páginas derivadas.

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md): plataforma onde o curso "Dev AI" é ministrado
- [Matt Pocock](../entities/matt-pocock.md): especialista em TypeScript e AI-Driven Development; criador do Sand Castle e Skills para Claude Code
- [GitHub Copilot](../entities/github-copilot.md): assistente de IA da GitHub (Microsoft); plataforma com Code Completion, Modo Agente, Coding Agent, MCP, Instructions, Copilot Spaces e extensão de modernização
- [Claude Code](../entities/claude-code.md): ferramenta agêntica da Anthropic (harness); comandos, permissões, sub agentes, hooks, plugins e Agent SDK
- [Andrew Brown](../entities/andrew-brown.md): instrutor do curso de certificação CCDV-F

## Questões Não Resolvidas

- ~~Como funciona o mecanismo de **Attention** (Self-Attention, Multi-Head Attention)?~~ → **Resolvida nas Aulas IA-02 e IA-03**: visão geral + detalhamento com projeção Q/K/V por head, cálculo de scores, softmax e concatenação. Fórmula de scaling (÷√d) não mencionada explicitamente pelo instrutor.
- Qual o impacto da dimensionalidade dos embeddings na qualidade das respostas?
- Como os embeddings são atualizados durante fine-tuning vs. pré-treinamento original?
- Qual a relação entre tamanho do vocabulário (tokens) e performance do modelo? → **Parcialmente respondida** por Matt Pocock (set/2025): mais vocabulário = menos tokens, porém modelo maior e mais memória; sem números medidos.
- Qual o impacto real da temperatura nos diferentes tipos de tarefa (código vs. texto criativo)?
- Positional encoding — como o modelo sabe a posição dos tokens na sequência?
- Layer normalization e residual connections — não cobertos nas aulas.
- Como contornar limitações de contagem de caracteres na prática (ferramentas externas? código auxiliar?).

Questões de outros temas foram movidas para as páginas derivadas.

## Notas de Atualização

- 2026-04-27: criada a partir da ingestão da Aula IA-01 — pipeline de entrada (tokenização + embeddings), analogia dimensional, matriz de entrada.
- 2026-04-27: completado pipeline com Multi-Head Attention, Feed-Forward, camada de saída, geração autorregressiva e KV-cache; adicionados insights práticos (importância do final do prompt, temperatura) — a partir da Aula IA-02.
- 2026-04-27: detalhado mecanismo de Attention com projeção Q/K/V por head (768×64), cálculo de scores, softmax, concatenação de heads e W_O; questão sobre Attention marcada como resolvida — a partir da Aula IA-03.
- 2026-04-27: adicionada seção de limitações arquiteturais (contagem de caracteres, chain-of-thought em loop) e LM Studio como ferramenta — a partir da Aula IA-04.
- 2026-04-27: adicionada seção sobre System Prompt e Guardrails; debate sobre AGI — a partir da Aula IA-05.
- 2026-04-28: adicionado conceito de Agentes de IA (definição formal, loop iterativo, anti-pattern if/else) — a partir da Aula IA-07.
- 2026-04-28: adicionada seção sobre Engenharia de Prompt (estrutura CORFT, meta-prompt, engenharia de contexto como #1) — a partir da Aula IA-08.
- 2026-04-28: adicionada seção sobre AI-Driven Development (práticas de Matt Pocock): smart zone/dumb zone, HITL vs. AFK, fluxo completo (Grill Me → PRD → Tracer Bullets → Implementação AFK → QA), módulos profundos vs. rasos, TDD essencial, Push vs. Pull, Skills — a partir da palestra "Essential Skills for AI Coding".
- 2026-04-29: expandida seção de Engenharia de Contexto com context rot, distinção formal Rule vs. Skill, e Spec Driven Development como aplicação em escala (tasks + injeção de contexto por step) — a partir da Aula IA-09.
- 2026-04-29: atualizada seção Rule vs. Skill com definições canônicas (declarativa vs. ativa), técnica few-shot, relação Rule→Skill e independência de ferramenta; questão "Rule vs. Skill" marcada como resolvida — a partir da Aula IA-10.
- 2026-05-04: adicionado formato prático de Skill no Cursor (arquivo `.cursor/skills/*.md`, frontmatter, seções "Quando usar" + "Processo"), ciclo de criação por engenharia reversa, heurística de granularidade e fraqueza de Skills sem few-shot; questões "Skill na prática" e "Referência Rule→Skill por ferramenta (Cursor)" marcadas como parcialmente resolvidas — a partir da Aula IA-11.
- 2026-05-04: adicionada taxonomia de tipos de Skill (determinística, híbrida, aberta), conceito de Skill como contêiner de arquivos (scripts, assets, templates), encadeamento de Skills no Spec Driven Development; questão "Skills complexas" parcialmente resolvida — a partir da Aula IA-12.
- 2026-05-05: adicionadas Skills práticas do Capítulo 3 (criar projeto e criar módulo) e conceito de modularização como espectro gradual (1 → 2 → n módulos); princípio de não atrasar deploy por perfeccionismo — a partir da Aula IA-13.
- 2026-07-17: adicionada seção sobre infraestrutura prática de Skills (Ferramentas Agênticas, Aulas 01–06): pastas concretas por ferramenta (`.claude/skills/` vs `.agents/skills/`), estrutura mínima de Skill (skill.md + frontmatter name/description), gatilho implícito via description vs. chamada explícita, Skills determinísticas com scripts executáveis, analogia Skill = função/procedure, e Spec-Driven Development prático (pasta `specs/changes/`, checkboxes, paralelização, arquivamento); questão "Spec Driven Development na prática" parcialmente resolvida.
- 2026-07-18: adicionada seção sobre Harness (Aulas 06–07): definição formal (camada de software que envolve o LLM), anatomia (LLM, contexto, ferramentas, loop, compressão, memória), loop de execução detalhado com diagrama textual, compressão automática de contexto (`/context` no Claude Code), responsabilidades embutidas vs. responsabilidade do desenvolvedor (verificações em Skills e specs), analogia cavalo/arreios; questão "Harness" marcada como resolvida; nova questão aberta sobre MCP.
- 2026-07-18: adicionada seção sobre MCP e perspectiva corporativa (Palestra Microsoft/GitHub para Caixa): arquitetura MCP (host/client/server), dois tipos de servidor (local Playwright, remoto GitHub OAuth), Modo Agente vs. Coding Agent (comparativo tabular), Copilot Instructions como análogo corporativo de Rules + Skills, Copilot Spaces como contexto curado compartilhável; questão MCP marcada como parcialmente resolvida; novas questões sobre Spaces vs. Instructions, conflitos do Coding Agent, self-hosted runners; nova entidade GitHub Copilot criada.
- 2026-07-19: adicionada subseção "Melhores Práticas Operacionais do Claude Code" na seção de Harness (digest da documentação oficial Anthropic via vídeo de Augusto Galego): método de verificação no prompt, descrever estado desejado vs. passos, incrementos testáveis, hierarquia de modelos por tipo de tarefa (Opus=planejamento/Sonnet=implementação, confirmando HITL/AFK), checkpoints e `/rewind`, gerenciamento de sessões nomeadas persistentes, `/goal` para objetivos verificáveis, `.claude` do projeto versionado, `review.md` dedicado para code review, permissões granulares (flag `S`), sandbox para auto mode; nova fonte adicionada ao frontmatter.
- 2026-11-07: adicionada subseção "Usando e Instalando Skills Prontas" (chamada com `/`, instalação via Personalizar → Habilidades/Plugins, plugin = conector/MCP + Skills, contorno para Skill não recarregada, variabilidade de resultado) — a partir da aula "Usando Skills".
- 2026-11-12: ingestão da fila de novembro. Adicionadas subseções "Criando uma Skill do zero", "SDD na visão do curso Profissional AI", "MCP na visão do curso Profissional AI", "Skill × MCP × SDD: os três pilares" e "Docs, Home Repo e Retro"; atualizada a Smart/Dumb Zone (~100k → ~150k, evolução da posição); questão "Doc rot" parcialmente resolvida; novas questões (Codex e recarga, `SKILL.md`, critério Skill × MCP, segurança de MCPs). Tag `deep-learning` agora tem conceito próprio em [deep-learning.md](./deep-learning.md).
- 2026-11-06: adicionada, na subseção "Tipos de Skill", a correspondência entre a taxonomia da IA-12 e os "estilos de Skill" do curso Profissional AI — Agentes (critério por meio de execução; pré-requisito Python + Node.js) — a partir da aula "Estilos de Skill".
- 2026-11-05: adicionada seção "Arquitetura de Agentes e Certificação Claude (CCDV-F)" (agente × workflow, sub agentes, MCP resources, prompt injection, parâmetros de API, higiene de sessão, autonomia no Claude Code) e entidades Claude Code / Andrew Brown — a partir do curso CCDV-F (fonte em inglês). Questões novas: segurança do auto mode; verificação de comandos na documentação oficial.
- 2026-11-12: página dividida em conceitos menores (ver Conceitos Derivados); apenas a arquitetura Transformer permanece aqui. Questões e fontes foram redistribuídas.
- 2026-11-15: adicionada subseção "Encode, decode e vocabulário" (encode/decode, tokenizador por provedor, treino do vocabulário, trade-off do tamanho, palavras raras); questão sobre tamanho do vocabulário parcialmente respondida — a partir do vídeo de Matt Pocock sobre tokens (set/2025).
