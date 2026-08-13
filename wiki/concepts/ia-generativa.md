---
title: "IA Generativa (Modelos baseados em Transformer)"
type: concept
status: active
created: 2026-04-27
updated: 2026-07-19
tags: ["ia-generativa", "transformer", "tokenização", "embeddings", "deep-learning", "llm", "ai-driven-development", "skills", "spec-driven-development", "harness", "mcp", "github-copilot"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-01-IntroducaoDesenvolvimentoIA-IaGenerativa01.md
  - raw/sources/2026-04-25_transcrição-IA-02-IntroducaoDesenvolvimentoIA-IaGenerativa02.md
  - raw/sources/2026-04-25_transcrição-IA-03-IntroducaoDesenvolvimentoIA-RevolucaoDaAtencao.md
  - raw/sources/2026-04-25_transcrição-IA-04-IntroducaoDesenvolvimentoIA-limitacoesDoModelo.md
  - raw/sources/2026-04-25_transcrição-IA-05-IntroducaoDesenvolvimentoIA-systemPrompt.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-04-27_transcrição-IA-08-ContextoRulesSkill-engenhariaDeContexto.md
  - raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md
  - raw/sources/2026-05-04_transcrição-IA-11-ContextoRulesSkill-exemploSkill.md
  - raw/sources/2026-05-04_transcrição-IA-12-ContextoRulesSkill-tiposDeSkill.md
  - raw/sources/2026-05-04_transcrição-IA-13-SkillModulos-IntroducaoEModulos.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-01-PastasDasSkills.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-02-SkillBasica copy.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-03-.SkillComCodigo.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-04-SkillNoCodex.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-05-EspecificacaoSimples.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-07-HarnessParte2.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
related_pages:
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-01.md
  - ../sources/2026-04-27_source-dev-ai-ia-generativa-02.md
  - ../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md
  - ../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md
  - ../sources/2026-04-27_source-dev-ai-system-prompt.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../sources/2026-04-29_source-dev-ai-rule-skill.md
  - ../sources/2026-05-04_source-dev-ai-exemplo-skill.md
  - ../sources/2026-05-04_source-dev-ai-tipos-de-skill.md
  - ../sources/2026-05-05_source-dev-ai-skill-modulos-intro.md
  - ../sources/2026-07-17_source-ferramentas-agenticas.md
  - ../sources/2026-07-17_source-ferramentas-agenticas-harness.md
  - ../sources/2026-05-07_source-palestra-github-copilot.md
  - ../entities/formacao-dev.md
  - ../entities/matt-pocock.md
  - ../entities/github-copilot.md
  - ../sources/2026-07-18_source-claude-code-melhores-praticas.md
---

# IA Generativa (Modelos baseados em Transformer)

## Definição

Modelos de IA generativa baseados na arquitetura Transformer são redes neurais que geram texto (e outros conteúdos) a partir de uma entrada (prompt). O nome "Transformer" vem do paper "Attention is All You Need" (2017). Exemplos comerciais: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google). O "GPT" significa **Generative Pre-trained Transformer**.

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

### Agentes de IA (Aula IA-07)

> **"Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e utilizando ferramentas de forma autônoma e iterativa para atingir um objetivo."**

- **LLM = cérebro**: tomada de decisão, planejamento.
- **Agente = braços**: orquestrador de prompts que executa ações no mundo externo (arquivos, terminal, banco, APIs).
- **Loop iterativo**: agente executa → observa resultado → envia ao LLM → repete até objetivo atingido.
- **Anti-pattern**: fazer a aplicação tomar decisões com if/else (3000+ linhas) em vez de delegar ao LLM.

### Engenharia de Prompt e Contexto (Aulas IA-08 e IA-09)

**Engenharia de contexto é mais importante que engenharia de prompt.** Skills, Rules e Spec Driven Development são formas de engenharia de contexto.

Estrutura **CORFT** para prompts:

```
[CONTEXTO]     → Quem você é, qual o projeto, qual stack
[OBJETIVO]     → O que precisa ser feito
[REGRAS]       → O que pode e não pode fazer
[FORMATO]      → Como a saída deve ser entregue
[TAREFA FINAL] → A instrução principal (sempre por último)
```

**Hierarquia prática**: Engenharia de Contexto (Skills/Rules/Spec) > Prompt Estruturado (CORFT) > Meta-Prompt (IA gerando prompts).

**Meta-prompt**: pedir para a IA gerar ou melhorar um prompt. Spec Driven Development é uma forma de meta-prompt ("prompt gerando prompt").

#### Context Rot (Apodrecimento do Contexto)

Quantas mais tokens são geradas numa única execução, mais o modelo tende a se desviar do objetivo inicial — o contexto original fica estatisticamente menos relevante à medida que a sequência cresce. Isso é chamado de **context rot**.

| Fator | Efeito |
|---|---|
| Tarefa curta (prompt simples) | Modelo mantém coerência com o objetivo |
| Tarefa longa (muitos tokens gerados) | Caminho diverge; alucinações e desvios aumentam |

**Consequência prática**: tarefas longas devem ser quebradas em tasks menores (Spec Driven Development) ou ter contexto injetado antes de cada ação (engenharia de contexto).

#### Rule vs. Skill

Dois instrumentos de engenharia de contexto com natures distintas (definições canônicas da Aula IA-10, refinadas via Claude Code e corrigidas pelo instrutor):

| Instrumento | Natureza | Foco | Exemplo |
|---|---|---|---|
| **Rule** (Regra) | *Declarativa* — convenção/restrição passiva | *O quê* deve ser respeitado | "Arquivos de entidade devem seguir este padrão de nomenclatura" |
| **Skill** (Habilidade) | *Ativa* — processo ordenado passo a passo | *Como* executar uma tarefa de ponta a ponta | "Para criar uma entidade: 1. faça X, 2. faça Y, 3. faça Z" |

**Definição formal de Rule**:
> "Uma Rule é uma convenção ou restrição que o agente deve respeitar quando o contexto for relevante. O que define uma Rule não é a sua abrangência, mas sim que ela é declarativa e descreve restrições sem necessariamente definir como um determinado padrão é aplicado."

**Definição formal de Skill**:
> "Uma Skill tem capacidade de executar uma tarefa complexa de ponta a ponta, seguindo um processo definido e ordenado. Ela é ativa, descreve como fazer algo passo a passo. Internamente, uma Skill sabe quais são as Rules relevantes para aquela tarefa e as aplica automaticamente."

**Propriedades adicionais**:
- Rules são *contextuais*, não globais — uma regra de nomenclatura de entidades só se aplica quando se cria/modifica entidades.
- Skills *referenciam* Rules internamente — a Skill é o processo ativo que ativa Rules passivas no momento certo.
- Uma Skill é, na prática, um arquivo Markdown com descrição do processo + exemplos de código (**few-shot**).
- **Few-shot**: técnica de incluir exemplos de código dentro do prompt ou da Skill para guiar o modelo com padrões concretos.
- Ambos podem ser usados simultaneamente; a documentação deve ser amigável para humanos e para IA.

**Independência de ferramenta**: Rule e Skill são conceitos agnósticos. Cursor, Claude Code, Codex e Antigravity implementam os mesmos princípios com nomes ou mecanismos ligeiramente diferentes. O conceito importa mais que a ferramenta.

#### Formato Prático de uma Skill (Aula IA-11 — Cursor)

No Cursor, uma Skill é um arquivo Markdown salvo em `.cursor/skills/<nome-da-skill>.md`. Estrutura mínima observada na aula:

```markdown
---
nome: criar-entidade-completa
descricao: Cria a estrutura completa de entidade (Entity + DTO + Repository + Service + Controller)
---

# Criar Entidade Completa

## Quando usar
Quando o usuário pedir para criar uma nova entidade no sistema.

## Processo
Executar nessa ordem:
1. Criar classe entidade que estende BaseEntity (propriedades e tipagem, zero lógica)
2. Criar DTO com campos de entrada
3. Criar repositório com `findById` e `findAll`
4. Criar service com lógica de negócio
5. Criar controller com rotas HTTP
6. Aplicar todas as Rules de nomenclatura e estrutura
```

**Observações da demonstração**:
- Uma Skill **sem exemplos few-shot** funciona, mas produz resultado menos preciso — o instrutor admite que a Skill do exemplo é intencionalmente fraca.
- A Skill pode referenciar explicitamente uma Rule (`cursorRulesNomenclaturaEestrutura.md`); no Cursor isso é redundante (o Cursor já lê as Rules), mas a referência explícita é válida e portável para ferramentas que não têm separação automática Rule/Skill.
- Ao executar a Skill, o Cursor criou a hierarquia de pastas, seguiu as nomenclaturas definidas nas Rules e até gerou um `BaseEntity` ausente no projeto — porque a Skill referenciava um arquivo inexistente.

#### Ciclo de Criação de Skills

**Método preferido (engenharia reversa de código existente)**:
1. Ter exemplos reais de código já implementados no projeto.
2. Pedir ao LLM: *"Baseado nestes arquivos de entidade, faça engenharia reversa e gere uma Skill que captura a estrutura básica de uma entidade do meu projeto."*
3. O LLM gera uma Skill com vários exemplos few-shot ricos.
4. Usar a Skill para criar novas entidades mantendo consistência.

**Criação do zero** (alternativa): descrever o processo ao LLM e pedir exemplos; funciona, mas produz Skill com menos contexto.

**Heurística de granularidade**: Skills específicas são mais reutilizáveis. Skills que fazem "tudo de uma vez" funcionam para CRUDs simples, mas dificultam reutilização — Spec Driven Development é mais adequado para composição de Skills parciais em fluxos complexos.

#### Tipos de Skill (Aula IA-12)

As Skills são classificadas em três tipos conforme o grau de autonomia concedida ao agente:

| Tipo | Descrição | Quando usar |
|---|---|---|
| **Determinística** | Contém um script que o agente simplesmente executa (ex.: `run.js` via Node). Resultado fixo e previsível. | Automações repetíveis com resultado pré-definido (ex.: scaffold de projeto, copiar estrutura de arquivos, criar worktree Git) |
| **Híbrida** | Parte do processo é determinística (script); parte é delegada ao agente via instrução textual. | Criação de módulos onde a estrutura base é fixa, mas a integração com código existente requer raciocínio |
| **Aberta** | Processo 100% textual — o agente decide como executar cada passo. | Forma mais comum; adequada para Skills de código onde o contexto varia por projeto |

**Skills como contêiner de arquivos**: uma pasta de Skill pode conter múltiplos arquivos além do `skill.md`:
- Scripts (`run.js`, `createproject.js`) para execução determinística.
- Assets e configurações pré-definidas (ex.: `.prettierrc`, imagens padrão, Dockerfile).
- Projetos-template completos que o script copia para o destino.

**Exemplo real**: script `paralelo.js` dentro de uma Skill que cria git worktrees para que múltiplos agentes trabalhem em paralelo em branches isoladas — exemplo de Skill determinística/híbrida para infraestrutura de desenvolvimento.

**Encadeamento de Skills (Spec Driven Development)**: cada task no Spec Driven Development pode carregar uma Skill diferente, permitindo composição de comportamentos especializados:

```
Skill 1 + Task 1 → executar
Skill 2 + Task 2 → executar
...
Skill N + Task N → executar
```

#### Skills Práticas do Capítulo 3: Criar Projeto e Criar Módulo (Aula IA-13)

O Capítulo 3 da trilha Dev AI tem como objetivo construir duas Skills centrais reutilizáveis:

| Skill | Propósito | Tipo |
|---|---|---|
| **Criar projeto do zero** | Scaffold e configuração completa de novo projeto | Determinística + Híbrida |
| **Criar módulo** | Adicionar novo módulo a projeto existente, com integração contextual | Determinística + Híbrida |

Ambas demonstram na prática a combinação determinística + híbrida introduzida na Aula IA-12.

**Modularização como espectro gradual** (insight da Aula IA-13): modularização não é binária — é uma gradação progressiva conforme a maturidade do projeto e do desenvolvedor:

| Nível | Estrutura | Quando usar |
|---|---|---|
| 1 | Um único módulo | Projetos pequenos; iniciante no conceito |
| 2 | Dois módulos (ex.: `auth` + `app`) | Separação mínima de responsabilidades |
| 3+ | Múltiplos módulos com fronteiras claras | Equipes grandes; complexidade real de negócio |

**Princípio**: não atrasar o deploy por perfeccionismo estrutural. Levar a aplicação ao ar e refatorar progressivamente ("trocar a asa com o avião voando").

#### Spec Driven Development como Engenharia de Contexto em Escala

Quando uma tarefa é complexa demais para um único prompt (context rot), o **Spec Driven Development** divide a execução em múltiplas `tasks` menores, com injeção de contexto antes de cada uma:

```
[Task 1]  → [injetar Rule + Skill + Mentions] → executar
[Task 2]  → [injetar Rule + Skill + Mentions] → executar
[Task 3]  → [injetar Rule + Skill + Mentions] → executar
...
[Task N]  → [injetar Rule + Skill + Mentions] → executar
```

- **Mentions**: referências a arquivos relevantes que o modelo deve considerar naquela task específica.
- Cada task opera com contexto fresco + guard-rails específicos → menor desvio, resultado mais previsível.
- O resultado final ainda pode variar (processo estatístico), mas permanece dentro das restrições definidas.
- Ferramentas modernas de agentes adicionam verificação automática ao final de cada task e se autocorrigem se necessário.

#### Infraestrutura Prática de Skills por Ferramenta (Módulo Ferramentas Agênticas)

**Pastas de Skills** — onde as ferramentas procuram Skills no projeto:

| Ferramenta | Pasta |
|---|---|
| **Claude Code** | `.claude/skills/<nome-da-skill>/skill.md` |
| **Codex** | `.agents/skills/<nome-da-skill>/skill.md` |

> Nota: pastas com ponto (`.claude`, `.agents`) são ocultas no macOS/Linux; no Windows aparecem normalmente no VS Code. Para compartilhar Skills entre projetos, usar **git submodules**.

**Estrutura mínima de um arquivo `skill.md`**:

```markdown
---
name: nome-da-skill
description: Descrição detalhada usada como gatilho automático e resumo da Skill.
---

Corpo da Skill: instruções, exemplos few-shot, padrões a seguir, passos.
```

**Formas de acionar uma Skill**:

| Forma | Como funciona | Recomendação do instrutor |
|---|---|---|
| **Explícita** | `/nome-da-skill` no chat | Preferida — sem ambiguidade |
| **Implícita** | Palavras-chave da `description` são detectadas e a Skill é chamada automaticamente | Útil para disparo contextual; cuidado com falsos positivos |

A `description` serve tanto de resumo da Skill quanto de gatilho implícito. Se a description contém "estilo do Seu Lunga", qualquer mensagem com essa expressão pode acionar a Skill automaticamente.

**Skills com múltiplos arquivos (determinísticas)**:

Uma pasta de Skill pode conter qualquer arquivo além do `skill.md`. O instrutor demonstrou adicionar `index.js` para criar uma Skill que instrui o agente a executar o script e retornar o resultado:

```
.claude/skills/executar-codigo/
├── skill.md       ← ponto de entrada obrigatório
└── index.js       ← script executado pelo agente via Node.js
```

**Analogia central**: Skill = **função/procedure** na programação procedural. O maior divisor de águas não foi o OOP, mas a *procedure* — trecho de código reutilizável e acionável. Skills são o equivalente para LLMs.

**Comportamento no Codex**: idêntico ao Claude Code. Skills na pasta `.agents/skills/` têm o mesmo comportamento de frontmatter, gatilho e chamada explícita.

#### Spec-Driven Development na Prática (Especificação Simples — Aula 05)

**Estrutura de pasta recomendada**:

```
specs/
├── changes/
│   └── <nome-da-mudança>/
│       └── spec.md       ← arquivo de especificação ativo
└── archive/
    └── 2026-07-17_<nome-da-mudança>/
        └── spec.md       ← spec concluída (movida com data no nome)
```

**Estrutura de um arquivo `spec.md`**:

```markdown
# Nome da Mudança

## Orientações

Execute as tarefas abaixo em sequência.
Marque os passos concluídos.
Coloque uma evidência abaixo de cada passo com data e hora.

## Tarefas

- [ ] Tarefa 1: descrição detalhada / usar Skill X
- [ ] Tarefa 2: descrição detalhada / usar Skill Y
- [ ] Tarefa 3: descrição detalhada
```

**Como executar**: enviar o caminho relativo do `spec.md` para o agente. Ele lê e executa cada tarefa, marcando com `[x]` ao concluir.

**Modos de execução**:
- **Sequencial**: padrão; o agente executa tarefa por tarefa.
- **Paralelo**: adicionar orientação "execute os passos usando subagentes em paralelo".
- **Contexto independente por passo**: "execute de forma sequencial, utilizando subagentes, cada passo em um contexto independente" — cada step começa com contexto fresco.

**Evidências**: o instrutor confirma ter executado 10 especificações encadeadas, cada uma com 10–15 passos, sem falhas de rastreamento.

#### Harness: A Infraestrutura do Agente

**Harness** (arreios): camada de software que **envolve o LLM** e o transforma em um agente capaz de perceber o ambiente, tomar decisões e agir. O LLM sozinho é apenas um preditor de texto stateless; o harness é tudo ao redor que dá a ele "pernas, braços e olhos".

**Analogia central**: cavalo + arreios. O arreio conduz o cavalo (LLM) pelo caminho correto; sem arreios, o cavalo vai em qualquer direção.

**Exemplos de harnesses**: Claude Code, Codex, Cursor, Antigravity, LangChain, AutoGPT, Claude Agent SDK.

##### Componentes do Harness

| Componente | Função |
|---|---|
| **LLM** (stateless) | Recebe contexto, decide próxima ação |
| **Contexto** | Prompt atual + histórico + memória + ferramentas disponíveis + Skills carregadas |
| **Ferramentas** | Sistema de arquivos (FS), terminal (Bash), APIs externas, MCP, Skills |
| **Loop de execução** | Ciclo: LLM decide → ferramenta executa → resultado vai pro contexto → LLM decide novamente |
| **Gestão de contexto** | Montagem, compressão (quando janela excede limite), injeção de system prompt |
| **Memória/Estado** | Histórico de sessão, arquivos de memória |

##### Loop de Execução

```
Prompt do usuário
     ↓
Montagem do Contexto:
  [prompt + histórico + memória + ferramentas disponíveis + Skills]
     ↓
LLM (stateless) → toma decisão:
  → "preciso ler a pasta X"
  → "preciso executar o arquivo Y"
  → "preciso chamar a Skill Z"
     ↓
Harness executa a ferramenta solicitada
     ↓
Resultado da ferramenta → volta para o contexto
     ↓
[LOOP: monta novo contexto → LLM → ação → resultado → ...]
     ↓
LLM decide: "já tenho tudo, posso dar resposta final"
     ↓
Resumo final para o usuário
```

**A ordem do contexto importa**: itens mais recentes (final do contexto) têm mais peso na tomada de decisão do LLM. Por isso carregar uma Skill no final de cada passo de uma spec aumenta sua relevância.

##### Compressão de Contexto

Quando o contexto excede a **janela de contexto** (limite de tokens do modelo), o harness realiza compressão automática:
- Remove informações não relevantes para os próximos passos
- Sumariza o conteúdo anterior (analogia: resumir reunião de 8h em meia hora)
- No Claude Code: `/context` mostra o percentual da janela já utilizado na sessão atual
- Subagentes: cada subagente tem uma janela de contexto independente (com algum compartilhamento da sessão)

##### Responsabilidades Embutidas vs. Responsabilidade do Desenvolvedor

**Embutidas na ferramenta** (já entregues pelo harness):
1. Loop de execução — recebe saída do modelo, executa ação, devolve resultado, chama o modelo novamente
2. Exposição de ferramentas — passa lista de ferramentas disponíveis para o LLM decidir
3. Gestão de contexto — monta prompt, injeta system prompt, comprime quando necessário
4. Permissões e confirmação — decide o que o agente executa autonomamente vs. o que pede confirmação
5. Roteamento — interpreta chamadas de ferramentas e direciona para o código correto
6. Memória e estado — mantém histórico, arquivos de memória, sessões

**Responsabilidade do desenvolvedor** — adicionar "sensores" via Skills e specs:
- Pedir cobertura de testes ≥ 90% ao criar uma classe (instrução na Skill)
- Adicionar passo de "execute os testes do projeto" após passos críticos nas specs
- Pedir testes de integração em pontos estratégicos da especificação
- Instruir o agente a abrir browser interno para validar UI (Claude Code tem browser embutido)
- Usar subagente diferente para criar testes (contexto limpo evita viés de confirmação)

**Distinção importante**: harness ≠ arquivo ou técnica. A técnica é **Skills + Spec-Driven Development**; o harness é a infraestrutura. As verificações inseridas nas Skills e specs **fortalecem o harness**.

#### Melhores Práticas Operacionais do Claude Code (Documentação Anthropic)

*(Fonte: vídeo de Augusto Galego, digest da documentação oficial Anthropic, 2026-07)*

A Anthropic documenta ~20 melhores práticas operacionais para o Claude Code. As mais relevantes para o trabalho com agentes:

**Práticas de prompt**:
- **Incluir método de verificação no prompt**: inserir instrução de autoverificação no próprio prompt — ex.: "ao terminar, rode os testes; compare screenshot com o original e liste as diferenças". A Anthropic chama isso de *ground truth* do resultado esperado.
- **Descrever estado desejado, não passos**: "diga o que você quer e deixe o Claude encontrar os arquivos" — descrever *resultado* supera prescrever *sequência de ações*. Para modelos mais pesados (Opus), focar em resultado, limitações e evidências é ainda mais eficaz.
- **Incrementos testáveis**: fazer reparações em pequenos incrementos; validar cada passo antes de avançar.
- **Interromper cedo**: ao detectar presunção errada ou caminho incorreto, redirecionar imediatamente — quanto antes, menos dano ao contexto.
- **Regras específicas, não vagas**: "utilize clean code" < "se acessar URL, use a classe `HttpClient` desta forma" — precisão supera generalidade nas Rules.

**Gestão de contexto e sessões**:
- **Contexto novo para tarefas não relacionadas**: usar `/clear` antes de iniciar tarefa sem relação com o histórico atual — evita poluição.
- **Menor diretório possível**: iniciar o Claude Code no diretório mais específico para a tarefa (ex.: `backend/` em vez da raiz do monorepo) — contexto menor, menos ruído.
- **Monitorar contexto com `/context`**: exibe percentual da janela ocupado e o conteúdo atual — permite identificar e remover informações irrelevantes antes que compressão automática degrade a qualidade.
- **Sessões nomeadas e persistentes**: usar `/rename` para nomear sessões antes de abandoná-las; `claude resume <nome>` para retomar com contexto completo. Sessões ficam salvas em `.claude/projects` por **30 dias** (configurável) — o contexto de decisões é um ativo preservável, não descartável.
- **Checkpoints e `/rewind`**: o Claude Code mantém histórico interno; o comando `/rewind` permite voltar a um ponto anterior na conversa — útil quando a segunda metade de uma sessão longa degringolou sem precisar reverter no Git.

**Hierarquia de modelos e objetivos**:
- **Modelos por tipo de tarefa**: Opus para planejamento/arquitetura/revisão (alta alavancagem); Sonnet para implementação rotineira. Workflow documentado: Opus planeja e divide em tarefas → Sonnet implementa cada tarefa em paralelo. Alinha com o padrão HITL/AFK de Matt Pocock, agora confirmado pela Anthropic.
- **`/goal` para objetivos verificáveis**: para tarefas grandes com estado final claro (ex.: "CI com zero erros e testes passando"), usar `/goal` para manter o agente trabalhando de forma autônoma até atingir o objetivo.

**Infraestrutura e segurança**:
- **`.claude` do projeto versionado**: commitar o diretório `.claude` do projeto (não o pessoal/global) garante que toda a equipe opera com as mesmas Rules, Skills e configurações.
- **`review.md` dedicado para code review**: arquivo `.claude/review.md` deve conter *apenas* informações pertinentes a code reviews; informações gerais do projeto pertencem ao `CLAUDE.md` — separação de responsabilidades no nível dos arquivos de configuração.
- **Sandbox para auto mode**: a Anthropic recomenda rodar o Claude Code em VM ou container ao operar sem interrupção (auto mode prolongado) para evitar hot loops destrutivos — confirma a responsabilidade do desenvolvedor no harness.
- **Ferramentas detectadas automaticamente**: não é necessário nomear ferramentas no prompt; basta descrever o objetivo ("teste o browser" → Claude Code infere Playwright).

### MCP (Model Context Protocol) e Perspectiva Corporativa

*(Fonte: Palestra Microsoft/GitHub para a Caixa Econômica Federal, 2026-05)*

#### MCP — Protocolo de Integração de Ferramentas

**MCP = "USB-C da IA"** — padrão aberto (2024, Anthropic) para integrar ferramentas externas a agentes de IA.

**Evolução histórica**: REST API (apps web, 2000s) → LSP — Language Server Protocol (IDEs, ferramentas de linguagem) → **MCP** (agentes de IA, 2024).

**Arquitetura em três camadas**:

| Camada | Descrição | Exemplos |
|---|---|---|
| **Hosts** | Ambientes de desenvolvimento onde o dev trabalha | VS Code, Visual Studio, IntelliJ |
| **Clients** | Agentes/apps que consomem o MCP para acessar ferramentas | Copilot Agent Mode, Coding Agent |
| **Servers** | Ferramentas e sistemas externos expostos via MCP | GitHub, Playwright, Azure, Jira, Slack |

**Interação**: sempre em **linguagem natural** — o agente detecta automaticamente qual ferramenta usar para atender o prompt. Não é REST manual (GET/POST).

**Dois tipos de servidor MCP**:
- **Local** (ex: Playwright): executa localmente, sem autenticação, abre browser via motor Chromium/Edge/Firefox
- **Remoto** (ex: GitHub): requer OAuth; as permissões do MCP = permissões do usuário autenticado

**Benefícios**: reduz alucinações (contexto mais preciso via dados externos em tempo real), permite compartilhar informações entre times (Jira, Zendesk, Azure), reduz tempo de integração (padrão universal).

**Configuração no VS Code**: arquivo `.vscode/mcp.json` lista os servidores MCP. Ferramentas expostas ficam visíveis na interface da extensão.

#### Modo Agente vs. Coding Agent: Dois Níveis de Autonomia

Uma distinção importante observada na perspectiva corporativa do GitHub Copilot:

| | **Modo Agente** (extensão) | **Coding Agent** (GitHub.com) |
|---|---|---|
| **Execução** | No IDE local do desenvolvedor | Ambiente efêmero no GitHub.com (GitHub Actions) |
| **Ambiente** | Ambiente real do dev | Isolado, criado e destruido por sessão |
| **Interação** | Interativa (IDE, tempo real) | Background / assíncrona (Mission Control) |
| **Paralelismo** | Uma tarefa por vez | N sessões em paralelo simultaneamente |
| **Output** | Edições locais | Pull Requests com resumo + screenshots |
| **Segurança** | Ambiente do dev | Code Scanning (CodeQL) integrado |

**Coding Agent** como "funcionário a mais": cada dev vira gerente de uma equipe de agentes especializados — agentes de teste, documentação, debugging, implementação, design rodando em paralelo.

**Mission Control**: painel no GitHub.com para monitorar, interagir e acompanhar múltiplas sessões do Coding Agent em paralelo.

#### Copilot Instructions como Análogo Corporativo de Rules + Skills

O GitHub Copilot (versão corporativa) usa **Instructions** como mecanismo equivalente às Rules e Skills do formacao.dev:

| Conceito formacao.dev | Equiv. Copilot/GitHub | Local | Escopo |
|---|---|---|---|
| Rule (`.claude/rules/`) | `copilot-instructions.md` | `.github/` | Repositório inteiro, sempre aplicado |
| Rule por contexto | `*.instructions.md` | `.github/instructions/` | Definido pelo campo `applyTo` (glob pattern) |
| Skill (`.agents/skills/`) | `*.md` em agents folder | `.github/agents/` | Agentes customizados usando Coding Agent como motor |

**Complementaridade**: instruction global + instruction específica por arquivo/diretório são **acumulativas** (não se excluem).

**Prática**: dizer o que **NÃO** fazer é tão ou mais importante do que dizer o que fazer nas Instructions.

**Copilot Spaces**: contexto especializado e curado compartilhável entre times (instruções + repositórios + arquivos + issues). Trazido para o IDE via MCP. Equivale funcionalmente a uma Skill de contexto de equipe.

### AI-Driven Development: Práticas de Engenharia (Matt Pocock)


**Tese central**: "Base de código ruim = agentes de IA ruins." Fundamentos clássicos de engenharia de software continuam essenciais na era da IA.

#### Smart Zone vs. Dumb Zone

**Restrição arquitetural dos LLMs**: ficam progressivamente "burros" à medida que tokens se acumulam.

| Zona | Tokens | Comportamento |
|---|---|---|
| **Smart zone** | Início da conversa, ~0-100k tokens | LLM faz melhor trabalho; relações de atenção menos tensionadas |
| **Dumb zone** | ~100k+ tokens | LLM fica progressivamente "burro"; toma decisões estúpidas |

**Analogia**: "Adicionar token é como adicionar time a uma liga de futebol — número de partidas escala quadraticamente" (relações de atenção entre cada par de tokens).

**Consequências práticas**:
- Dimensionar tarefas para permanecerem dentro da smart zone
- Evitar acúmulo infinito de contexto (compactação contínua)
- Preferir limpar contexto (voltar ao estado base) a compactar (histórico variável)
- **LLMs como "Memento"**: esquecem continuamente ao limpar; comportamento determinístico a cada reset

#### HITL vs. AFK: Tipos de Tarefa

Separação clara entre tarefas que exigem humanos e tarefas automatizáveis:

| Tipo | Sigla | Descrição | Exemplos |
|---|---|---|---|
| **Human in the Loop** | HITL | Exige interação humana | Planejamento, decisões arquiteturais, design review, alinhamento, QA |
| **Away From Keyboard** | AFK | Pode ser automatizado sem humanos | Implementação pura, testes, refatorações, correções simples |

**Metáfora**: "Turno do dia" (humano planeja; enfileira trabalho) vs. "Turno da noite" (IA implementa AFK enquanto humano dorme).

**Princípio**: planejamento é **obrigatoriamente** HITL; implementação pode ser transformada em AFK.

#### Fluxo Completo de Desenvolvimento

```
Ideia → Grill Me (HITL, 1h) → PRD (HITL) → Issues/Kanban (HITL) → Implementação (AFK, paralela) → QA (HITL) → Review (HITL) → Merge
```

##### 1. Grill Me: Sessão de Interrogatório

**Objetivo**: alcançar **entendimento compartilhado** entre humano e agente (não apenas gerar artefato).

Prompt da habilidade:
```
Interview me relentlessly about every aspect of this plan until we reach a shared understanding. 
Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. 
For each question, provide your recommended answer. Ask the questions one at a time.
If a question can be answered by exploring the codebase, explore the codebase instead.
```

- IA faz 40-100 perguntas; humano responde uma por uma
- Sessão pode durar 1 hora
- Histórico da conversa funciona como ativo de design
- Previne desalinhamento (maior problema ao trabalhar com IA)

**Crítica ao "specs to code"**: Matt rejeita a ideia de ignorar o código e trabalhar apenas com especificações — "tentei, é uma porcaria, não funciona. Você precisa ter controle do código."

##### 2. PRD: Product Requirements Document

**Estrutura**:
- Problem Statement + Solution
- User Stories ("As an \<actor\>, I want \<feature\>, so that \<benefit\>")
- Implementation Decisions (módulos, interfaces, API contracts — sem caminhos de arquivo ou snippets)
- Testing Decisions (o que faz bom teste, quais módulos testar, prior art)
- Out of Scope (essencial para "definition of done")
- Future Notes

**Filosofia de Matt**: "Eu não leio o PRD depois de gerado" — confia na capacidade de sumarização do LLM; já alcançou alinhamento no Grill Me.

**Doc rot (apodrecimento)**: PRDs no repositório apodrecem conforme código muda; Matt tende a descartá-los após implementação.

##### 3. PRD → Issues: Tracer Bullets (Balas Traçantes)

**Problema**: IA adora programar **horizontalmente** (camada por camada — fase 1: banco, fase 2: API, fase 3: frontend) → feedback tardio; só testa integração na fase 3.

**Solução: Vertical Slices (Fatias Verticais)**:
- **Definição**: fatias finas de funcionalidade que cruzam **todas as camadas** end-to-end (schema + API + UI + testes)
- **Origem**: _O Programador Pragmático_ — balas traçantes (com fósforo) permitem ver onde se está atirando
- **Benefício**: IA obtém feedback de todo o fluxo na fase 1; valida abordagem cedo

**Regras**:
- Cada slice entrega caminho completo e estreito através de todas as camadas
- Slice completo é demoável ou verificável por conta própria
- Preferir muitas fatias finas a poucas grossas
- Issues podem ter relações de bloqueio ("blocked by") → permite paralelização

##### 4. Implementação AFK: Loop Automatizado

**Estrutura do agente AFK**:
- Recebe issues locais (de `issues/*.md`) + últimos 5 commits
- Trabalha apenas em tasks AFK (ignora HITL)
- Se todas completas: `<promise>NO MORE TASKS</promise>`

**Priorização**: bugfixes críticos > infraestrutura de dev (testes, tipos) > tracer bullets > polish > refactors

**Ciclo**: explorar repo → usar `/tdd` → rodar feedback loops (`test`, `typecheck`) → commit → mover issue para `done`

**Regra**: ONLY WORK ON A SINGLE TASK

**Paralelização (Sand Castle)**: planner escolhe múltiplas issues independentes → cada issue roda em sandbox isolada (git worktree em Docker) → implementadores trabalham em paralelo → revisor (Opus) revisa commits → merger mescla branches e resolve conflitos

##### 5. QA e Review

**QA manual essencial**: impõe "bom gosto" humano; previne código genérico/malfeito (_slop_).

**Função do QA**: criar mais issues para o Kanban enquanto agente implementa.

**Review automatizada**:
- Limpar contexto antes de revisar (review na smart zone, não na dumb zone)
- Usar modelo mais inteligente para revisão (Opus) que para implementação (Sonnet)

#### Arquitetura Testável: Módulos Profundos vs. Rasos

**Conceito de John Ousterhout** (_A Philosophy of Software Design_):

| Tipo | Características | Para IA |
|---|---|---|
| **Módulos Rasos** (ruins) | Muitos arquivos pequenos; dependências difusas; poucas exportações | Difícil navegar; difícil testar (onde desenhar limites?) |
| **Módulos Profundos** (bons) | Interface simples; muita funcionalidade interna | Fácil testar (um limite ao redor captura muita funcionalidade); fácil entender |

**Consequência**: "Sem ajuda, ou se você não vigiar a IA com cuidado, ela vai produzir uma base de código rasa."

**Como aprofundar**: usar habilidade `improve codebase architecture` — varredura procurando clusters de módulos para agrupar e testar como unidade.

**Mentalidade de "caixas cinzas"**: conhecer forma e comportamento do módulo; delegar implementação interna para IA.

#### TDD (Test-Driven Development) como Essencial

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

#### Push vs. Pull: Instruções para LLMs

**Push**: enviar instruções diretamente ao LLM (ex.: system prompt, padrões de código no contexto inicial).  
**Pull**: LLM busca informações quando necessário (ex.: Skills consultáveis).

**Uso prático**:
- **Implementador**: padrões disponíveis via Pull (Skills)
- **Revisor**: padrões enviados via Push (comparar código contra padrões)

#### Skills Essenciais

| Skill | Função | Tipo |
|---|---|---|
| **Grill Me** | Sessão de interrogatório (40-100 perguntas; 1h) | HITL |
| **Write PRD** | Geração de Product Requirements Document estruturado | HITL |
| **PRD to Issues** | Conversão de PRD em issues paralelizáveis com tracer bullets | HITL |
| **TDD** | Ciclo red-green-refactor guiado por testes | AFK |
| **Improve Codebase Architecture** | Varredura para aprofundar módulos | AFK |

## Debates

- **Conhecimento teórico vs. prático**: o instrutor reconhece que a maioria dos desenvolvedores quer pular direto para o uso prático, mas defende que entender o funcionamento interno dá insights sobre como usar os modelos de forma melhor.
- **Dimensionalidade e qualidade**: modelos com mais dimensões tendem a capturar relações semânticas mais sutis, mas o trade-off custo/performance não foi discutido em detalhe.
- **Custo computacional**: um parágrafo de entrada gerando uma página de saída consome ~100MB+ de memória e centenas de bilhões a trilhões de operações. Modelos grandes têm 13–30GB+ de parâmetros.
- **Crise energética**: o instrutor menciona a corrida por usinas nucleares como consequência do custo computacional massivo das IAs generativas.
- **AGI (Inteligência Geral Artificial)**: o instrutor não acredita que a arquitetura Transformer atual chegará à AGI — será necessário um novo breakthrough (como o Attention foi para LLMs). Porém, a tecnologia atual permite 10–15 anos de inovação em software.

## Fontes de Suporte

- [Dev AI — Aula 01: IA Generativa — Tokenização e Embeddings](../sources/2026-04-27_source-dev-ai-ia-generativa-01.md)
- [Dev AI — Aula 02: IA Generativa — Attention, Feed-Forward e Geração Autorregressiva](../sources/2026-04-27_source-dev-ai-ia-generativa-02.md)
- [Dev AI — Aula 03: A Revolução da Atenção](../sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md)
- [Dev AI — Aula 04: Limitações dos Modelos](../sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md)
- [Dev AI — Aula 05: System Prompt e Guardrails](../sources/2026-04-27_source-dev-ai-system-prompt.md)
- [Dev AI — Aula 07: Conceito de Agentes](../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md)
- [Dev AI — Aula 08: Engenharia de Prompt e Contexto](../sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md)
- [Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [Dev AI — Aula 10: Rule vs. Skill — Definições Canônicas](../sources/2026-04-29_source-dev-ai-rule-skill.md)
- [Dev AI — Aula 11: Exemplo Prático de Skill (Cursor)](../sources/2026-05-04_source-dev-ai-exemplo-skill.md)
- [Dev AI — Aula 12: Tipos de Skill](../sources/2026-05-04_source-dev-ai-tipos-de-skill.md)
- [Dev AI — Aula 13: Skill e Módulos — Introdução ao Capítulo](../sources/2026-05-05_source-dev-ai-skill-modulos-intro.md)
- [Dev AI — Ferramentas Agênticas (Aulas 01–07)](../sources/2026-07-17_source-ferramentas-agenticas.md)
- [Dev AI — Ferramentas Agênticas: Harness (Partes 1 e 2)](../sources/2026-07-17_source-ferramentas-agenticas-harness.md)
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática](../sources/2026-05-07_source-palestra-github-copilot.md)

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md): plataforma onde o curso "Dev AI" é ministrado
- [Matt Pocock](../entities/matt-pocock.md): especialista em TypeScript e AI-Driven Development; criador do Sand Castle e Skills para Claude Code
- [GitHub Copilot](../entities/github-copilot.md): assistente de IA da GitHub (Microsoft); plataforma com Code Completion, Modo Agente, Coding Agent, MCP, Instructions, Copilot Spaces e extensão de modernização

## Questões Não Resolvidas

- ~~Como funciona o mecanismo de **Attention** (Self-Attention, Multi-Head Attention)?~~ → **Resolvida nas Aulas IA-02 e IA-03**: visão geral + detalhamento com projeção Q/K/V por head, cálculo de scores, softmax e concatenação. Fórmula de scaling (÷√d) não mencionada explicitamente pelo instrutor.
- Qual o impacto da dimensionalidade dos embeddings na qualidade das respostas?
- Como os embeddings são atualizados durante fine-tuning vs. pré-treinamento original?
- Qual a relação entre tamanho do vocabulário (tokens) e performance do modelo?
- Qual o impacto real da temperatura nos diferentes tipos de tarefa (código vs. texto criativo)?
- Positional encoding — como o modelo sabe a posição dos tokens na sequência?
- Layer normalization e residual connections — não cobertos nas aulas.
- Como contornar limitações de contagem de caracteres na prática (ferramentas externas? código auxiliar?).
- Prompt injection e prompt insufficiency — mencionados mas não detalhados.
- Como escrever system prompts eficazes para aplicações customizadas?
- Como equilibrar guardrails (segurança) com utilidade (flexibilidade)?
- Como estruturar um sistema multi-agente na prática?
- Qual o custo (latência, tokens) de loops iterativos com LLMs?
- **Sand Castle**: como configurar e usar a biblioteca de Matt Pocock? Documentação disponível?
- **Skills**: onde obter as Skills mencionadas por Matt Pocock (Grill Me, PRD, TDD, improve architecture)? Repositório público?
- **Doc rot**: PRDs apodrecem — mas e decisões arquiteturais importantes? Como preservá-las?
- **Limite de paralelização**: há limite prático de quantos agentes simultâneos? Custo/latência?
- **Push vs. Pull**: como implementar sistema de Pull (Skills consultáveis) na prática? MCP? Arquivos `.md` no repo?
- ~~**Rule vs. Skill**: qual é a diferença formal com exemplos concretos?~~ → **Resolvida na Aula IA-10**: Rule = declarativa (convenção/restrição contextual passiva); Skill = ativa (processo passo a passo com few-shot); Skill pode referenciar Rules internamente.
- ~~**Skill na prática**: qual formato exato de Markdown? Quantos exemplos few-shot são suficientes?~~ → **Parcialmente resolvida na Aula IA-11**: Skill = arquivo `.cursor/skills/<nome>.md` com frontmatter (nome, descrição) + seções "Quando usar" e "Processo" ordenado. Skills sem few-shot funcionam mas são fracas; o ideal é partir de código existente via engenharia reversa para obter exemplos ricos.
- ~~**Referência Rule→Skill por ferramenta**: como uma Skill referencia uma Rule no Cursor vs. Claude Code vs. Codex?~~ → **Parcialmente resolvida na Aula IA-11 (Cursor)**: no Cursor, a Skill pode mencionar explicitamente o arquivo de Rule (ex.: `cursorRulesNomenclaturaEestrutura.md`); isso é redundante no Cursor (que já lê Rules automaticamente) mas portável para outras ferramentas. Comportamento no Claude Code e Codex ainda não documentado.
- ~~**Spec Driven Development na prática**: qual ferramenta, estrutura de arquivo e convenções são usadas?~~ → **Parcialmente resolvida no módulo Ferramentas Agênticas (Aula 05)**: pasta `specs/changes/<nome>/spec.md`, checkboxes de tarefa, orientações embutidas na spec, execução sequencial ou em paralelo com subagentes; specs concluídas movidas para `specs/archive/`. Limites de tasks antes do context rot: ainda não formalizados.
- **Otimização de contexto por task**: como combinar Mentions + Rules + Skills minimizando tokens sem perder contexto relevante?
- **Skill no Cursor**: quais metadados são obrigatórios vs. opcionais no frontmatter? Como o Cursor injeta a Skill no contexto — automaticamente ou via `@skill`?
- ~~**Skills complexas**: qual estrutura de pasta para Skills com subpastas de referências?~~ → **Parcialmente resolvida na Aula IA-12**: uma pasta de Skill pode conter múltiplos arquivos (scripts como `run.js`, assets, configurações, projetos-template). Skills que chamam outras Skills não foram formalizadas.
- **Skill determinística vs. híbrida**: quando exatamente preferir uma à outra? A linha divisória ainda é subjetiva.
- **Execução de scripts em Skills**: como o agente sabe quando executar um script vs. seguir instruções textuais? Há conflito possível entre os dois modos?
- **Versionamento de scripts em Skills**: como atualizar `run.js` sem quebrar Skills existentes que dependem dele?
- **Paralelização com git worktrees (Skill interna)**: detalhes de configuração do script `paralelo.js` mencionado pelo instrutor não foram documentados.
- ~~**Harness**: conceito mencionado como próximo tema após Spec-Driven Development, mas Aula 06 (Harness Parte 1) estava vazia — sem conteúdo disponível.~~ → **Resolvida nas Aulas 06 e 07**: harness = camada de software que envolve o LLM (ferramentas como Claude Code, Codex, Cursor são harnesses); loop de execução detalhado; compressão automática de contexto; responsabilidade do desenvolvedor via verificações em Skills e specs.
- ~~**MCP (Model Context Protocol)**: como integrar servidores MCP para estender capacidades de leitura de dados externos ao harness sem sobrecarregar o contexto?~~ → **Parcialmente resolvida na palestra Microsoft/GitHub**: MCP = padrão aberto arquitetura host/client/server; interação em linguagem natural; dois tipos (local: Playwright; remoto: GitHub/OAuth); configuração via `.vscode/mcp.json`. Pendênte: como os servidores MCP são governados em ambientes corporativos com restrições de firewall.
- **Copilot Spaces vs. Copilot Instructions**: qual a linha divisória entre o que deve estar em Instructions (sempre ativo) vs. em Spaces (contextó curado compartilhado)? Quando é melhor criar um Space vs. um instruction específico por diretório?
- **Coding Agent e conflitos de merge**: como o Coding Agent lida com conflitos quando múltiplas sessões paralelas tocam os mesmos arquivos?
- **Self-hosted runners + Coding Agent**: como o runner acessa o código se há restrições de firewall? (mencionado como novo recurso, mas não detalhado na palestra)
- **Recarregamento de Skills**: Claude Code apresentou instabilidade ao recarregar Skills após edição de arquivo (instrutor precisou fechar/abrir o app ou executar `/reload skills`). Comportamento esperado em produção não documentado.
- **Skills entre projetos**: como compartilhar Skills via git submodules — mencionado mas não demonstrado.
- **Conflitos em subagentes paralelos**: como evitar conflitos quando múltiplos subagentes escrevem nos mesmos arquivos em paralelo dentro de uma spec.

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
