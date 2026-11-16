---
title: "Agentes de IA"
descricao: 'Definição de agente, loop iterativo, agente × workflow, sub agentes; estratégias sequencial × paralela × híbrida (tokens × tempo, arquivos por agente) e fluxo em 6 fases com HITL do Organizador de E-mails.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["agentes", "llm", "workflow", "sub-agentes", "paralelismo", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-07-ContextoRulesSkill-conceitoDeAgentes.md
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2026-11-12_transcricao-formacaoDEV-porcessamento-sequencial-paralelo.md
  - raw/sources/2026-11-12_transcricao-formacaoDEV-planejamento-organizando-email.md
  - raw/sources/2025-10-08_most-devs-don-t-understand-what-agents-are_en-corrigida_AtYtuVTZCQU.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-02-21_i-m-using-claude-worktree-for-everything-now_en-corrigida_yv8VZpov8bk.md
related_pages:
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ../sources/2026-02-21_source-matt-pocock-claude-worktree.md
  - ./ia-generativa.md
  - ./harness.md
  - ./spec-driven-development.md
  - ./seguranca-de-agentes.md
  - ./mcp.md
  - ../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../sources/2025-10-08_source-matt-pocock-agentes-workflows.md
  - ../entities/matt-pocock.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ./ralph-loop.md
---

# Agentes de IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> Fonte do material: curso de Andrew Brown para a certificação Claude Certified Developer Foundations (CCDV-F), 2026-11; fonte em inglês, síntese em português. Material de instrutor, parte opinião e parte fatos do exame.

## Definição

Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e usando ferramentas de forma autônoma e iterativa para atingir um objetivo. Reúne a definição da aula IA-07 e a distinção agente × workflow e sub agentes do curso CCDV-F.

## Compreensão Atual

### Agentes de IA (Aula IA-07)
> **"Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e utilizando ferramentas de forma autônoma e iterativa para atingir um objetivo."**

- **LLM = cérebro**: tomada de decisão, planejamento.
- **Agente = braços**: orquestrador de prompts que executa ações no mundo externo (arquivos, terminal, banco, APIs).
- **Loop iterativo**: agente executa → observa resultado → envia ao LLM → repete até objetivo atingido.
- **Anti-pattern**: fazer a aplicação tomar decisões com if/else (3000+ linhas) em vez de delegar ao LLM.

### Agente × Workflow
- **Agente**: o modelo decide o próximo passo num loop agêntico; funciona como uma **política dinâmica** (regra de decisão escolhida em tempo de execução a partir do contexto), não como uma máquina de estados fixa.
- **Workflow**: passos predeterminados (n8n, código comum) = máquina de estados. Bom para automação e garantias; **não** serve como loop agêntico externo.
- **Combinação**: um estado do workflow pode chamar um agente. Se o problema cabe em código determinístico, usar código.

**Segundo Matt Pocock** (vídeo de out/2025, fonte `explicacao`, uma só; [resumo](../sources/2025-10-08_source-matt-pocock-agentes-workflows.md)), que adota a definição do artigo "Building Effective Agents" da Anthropic, citado de segunda mão:

- **Critério**: a diferença central é **quem decide quando o programa para** — no agente, o LLM; no workflow, os passos predeterminados. Uma única chamada de LLM não é nem agente nem workflow ("é só uma chamada de API").
- **Espectro, não categorias**: três formas intermediárias — (a) agente com limite de **max steps** no código; (b) agente que chama workflows de dentro de tools (caminho inverso ao "estado do workflow chama agente" do CCDV-F); (c) workflow que contém loops (gerar e avaliar várias vezes). O teste que ele propõe: se o LLM pode quebrar o loop antes do fim, é agente.
- **Quando usar**: caminho incerto ou tarefa que precisa generalizar (ex.: assistentes de código) → agente; caminho conhecido ou "a mesma coisa mil vezes" → workflow, que pode ser otimizado e paralelizado.
- Converge com o CCDV-F (política dinâmica × máquina de estados) e com o loop da IA-07; nenhuma contradição entre as três fontes.

**Laço externo sobre o agente** (Matt Pocock, jan/2026, `demonstrado`, fonte única; [resumo](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md)): no [laço Ralph](./ralph-loop.md), um script bash reinvoca o agente pela CLI, com contexto limpo a cada iteração, um número máximo de iterações como trava e parada quando o agente emite um marcador de conclusão na saída. Segundo ele, um "for loop" assim é "vastamente superior" a enxames, malhas e orquestradores de agentes que tentou (opinião, sem comparação mostrada). *Interpretação do mantenedor, não dita por ele*: pelo critério "quem decide parar" do vídeo de out/2025, o arranjo corresponde à forma (a) — o LLM decide parar, e o código impõe o limite de passos.

### Sub Agentes
- Ganhos: especialização, paralelismo, contexto enxuto por tarefa, **verificação independente** (agente revisor com nota + justificativa), ferramentas/permissões restritas e isolamento.
- Custos: dinheiro, latência, coordenação, erros de comunicação; evitar *tool stuffing* (cada ferramenta consome tokens em toda chamada).
- No Claude Code são arquivos `.md` com frontmatter ([Claude Code](../entities/claude-code.md)). Padrões vistos no curso: pesquisa com coordenador + particionamento + **loop de refinamento** (máx. 4 iterações).
- **Isolamento por worktree**: segundo Matt Pocock (fev/2026), desde o anúncio do suporte nativo a worktrees os subagentes do Claude Code podem rodar cada um na sua worktree e abrir PR de volta para main, orquestrados pelo agente principal, mas só se isso for pedido explicitamente. Fonte única, sobre o anúncio, sem demonstração ([claude --worktree](../sources/2026-02-21_source-matt-pocock-claude-worktree.md)).

### Estratégias de execução: sequencial × paralela (Organizador de E-mails, formacao.dev)
Fonte: [Estratégias de execução](../sources/2026-11-12_source-organizador-emails-sequencial-paralelo.md) (aula conceitual, legenda revisada).

- **Sequencial**: menos tokens (o raciocínio de uma etapa aproveita o contexto já construído), mais tempo. Indicada quando não há pressa (ex.: madrugada) ou há dependência entre etapas.
- **Paralela**: vários agentes sobre dados distintos → tempo cai muito; tokens sobem, pois cada agente refaz parte do raciocínio (contexto, MCPs, limitações).
- **Híbrida**: combinar as duas; mas o paralelismo precisa ser previsto desde o projeto — cada agente com **dados e arquivos próprios**, para um não sobrescrever o trabalho do outro.
- **Modelos por responsabilidade**: planejamento com modelo avançado (ex.: Opus), execução com modelo econômico — reforça, por fonte independente, a hierarquia registrada em [melhores-praticas-claude-code](./melhores-praticas-claude-code.md).

### Exemplo de arquitetura de fluxo com HITL (Organizador de E-mails)
Fonte: [Planejamento da solução](../sources/2026-11-12_source-organizador-emails-planejamento.md).

- Fluxo de organização do Gmail em 6 fases: coleta (via MCP, persistida em arquivos por grupos de 50 threads) → classificação por Skills (remetente, relevância 0–10, risco), que já registra a **ação planejada** por mensagem → revisão (agente confere o trabalho; pode ser outro agente) → **confirmação do usuário** (human-in-the-loop, opcional, antes de ações com consequência) → execução (só aplica o que foi decidido) → relatório final.
- Camadas **Fluxo → Skill → MCP**: o fluxo diz o quê, a Skill concentra o como (reutilizável), o MCP dá o acesso.
- Começar com **um agente** executando tudo (Full Agent) e paralelizar depois com instâncias do mesmo fluxo sobre grupos distintos.

## Fontes de Suporte

- [Dev AI — Aula 07: Conceito de Agentes](../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)
- [Organizador de E-mails — Estratégias de execução](../sources/2026-11-12_source-organizador-emails-sequencial-paralelo.md)
- [Organizador de E-mails — Planejamento da solução](../sources/2026-11-12_source-organizador-emails-planejamento.md)
- [Matt Pocock — Most devs don't understand what agents are](../sources/2025-10-08_source-matt-pocock-agentes-workflows.md): critério "quem decide parar" e espectro agente × workflow
- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): laço bash que reinvoca o agente, com trava de iterações e parada por marcador (jan/2026)
- [Matt Pocock — I'm using claude --worktree for everything now](../sources/2026-02-21_source-matt-pocock-claude-worktree.md): subagentes com worktree própria, segundo ele só sob pedido (fev/2026)

## Conceitos Relacionados

- [harness](./harness.md)
- [spec-driven-development](./spec-driven-development.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [mcp](./mcp.md)
- [verificacao-deterministica](./verificacao-deterministica.md): exemplo de cadeia de cinco agentes (specifier → coder → cleaner → hardener → QA), relato de Uncle Bob.

## Questões Não Resolvidas

- Como estruturar um sistema multi-agente na prática? Um exemplo relatado (uma fonte de opinião, sem dados) está em [Verificação determinística](./verificacao-deterministica.md); Matt Pocock é cético com enxames de agentes especializados.
- Qual o custo (latência, tokens) de loops iterativos com LLMs? A aula de estratégias dá a direção do trade-off (sequencial economiza tokens, paralelo economiza tempo), mas sem números.

## Notas de Atualização

- 2026-11-15: em "Sub Agentes", acrescentado o isolamento por worktree, atribuído a Matt Pocock (ingestão do vídeo de fev/2026).
- 2026-11-15: em "Agente × Workflow", acrescentados o critério "quem decide parar", o espectro (max steps, agente → workflow, workflow com loop) e a regra de uso, atribuídos a Matt Pocock (ingestão do vídeo de out/2025).
- 2026-11-15: adicionadas as estratégias de execução (sequencial × paralela × híbrida) e o exemplo de fluxo em 6 fases com HITL, do projeto Organizador de E-mails (ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
