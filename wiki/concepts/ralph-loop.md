---
title: "Laço Ralph (Ralph Wiggum)"
descricao: 'Técnica Ralph Wiggum (atribuída a Geoffrey Huntley) como Matt Pocock a usa: laço bash que reinvoca o agente uma tarefa por vez até a lista acabar — versão de jan/2026 (PRD em JSON + progress.txt) × abr/2026 (issues locais, Sandcastle), AFK × interativo.'
type: concept
status: draft
created: 2026-11-15
updated: 2026-11-15
tags: ["ralph-wiggum", "loop-de-agente", "afk", "hitl", "matt-pocock", "geoffrey-huntley", "feedback-loops", "claude-code"]
source_files:
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
related_pages:
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ./ai-driven-development.md
  - ./engenharia-de-contexto.md
  - ./agentes-de-ia.md
  - ./harness.md
  - ./tdd.md
  - ./spec-driven-development.md
---

# Laço Ralph (Ralph Wiggum)

> **Evidência**: todas as fontes são de um único autor, Matt Pocock. O vídeo de jan/2026 é `demonstrado` (script explicado e uma iteração ao vivo); a palestra de abr/2026 e a entrevista de set/2026 são `opiniao`. A atribuição da técnica a Geoffrey Huntley é dita por Matt; a fonte primária de Huntley não foi lida. Por ser método de um autor, sem validação externa, a página fica `draft`.

## Definição

Técnica de rodar um agente de código num **laço externo** (um script bash), uma tarefa por iteração, até que uma lista de tarefas esteja completa. Cada iteração começa com contexto limpo; o estado entre iterações fica em arquivos e no git. O laço para quando o agente emite um marcador de conclusão ou quando se atinge o número máximo de iterações. Segundo Matt Pocock, a técnica é de Geoffrey Huntley e o nome vem do personagem Ralph Wiggum.

## Compreensão Atual

### Elementos comuns às versões registradas

- **Uma única tarefa por iteração** ("ONLY WORK ON A SINGLE TASK"), escolhida pelo agente por prioridade.
- **Feedback loops antes do commit**: type check e testes; um commit por iteração.
- **Marcador de saída**: o agente sinaliza que não há mais tarefas e o script encerra o laço.
- **AFK × humano no laço**: a versão AFK roda sem supervisão; uma variante de uma iteração roda de forma interativa.

### Versão de jan/2026 (demonstrada)

Fonte: [vídeo Ralph Wiggum](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md).

- `ralph.sh` (pasta `plans`): modo de erro ligado, número máximo de iterações como argumento obrigatório (trava, "backstop"), `for` que invoca o agente pela CLI. Segundo ele, serve qualquer agente com CLI (Claude Code, OpenCode, Codex); só o [Claude Code](../entities/claude-code.md) aparece na demo, e o comando exato não é lido.
- Entradas: `plans/prd.json` (user stories com passos de verificação e flag `passes`, PRD e lista de tarefas ao mesmo tempo) e `progress.txt` (memória do sprint, em que o agente só **anexa**; apagada ao fim do sprint).
- Prompt: escolher a feature de maior prioridade (não a primeira da lista), rodar os feedback loops, marcar `passes: true`, anexar ao `progress.txt`, comitar, trabalhar numa só feature e emitir "promise complete" quando o PRD acabar. A forma exata da tag não é lida no vídeo.
- Demo: o agente escolhe um item, cria um componente, passa typecheck e testes, marca `passes`, anexa uma nota e comita; Matt confere na interface.
- Segundo ele, tarefas pequenas e de tamanho parecido evitam que uma tarefa "engula" a janela de contexto (ver [Engenharia de Contexto](./engenharia-de-contexto.md)).
- Uma semana depois ([vídeo sobre front-end](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md)), ele recomenda plugar um navegador no laço em trabalho front-end ou full-stack: sem isso, o agente "voa às cegas". Opinião dele, sem medida do ganho.

### Versão de abr/2026 (descrita na palestra)

Fonte: [palestra Essential Skills](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md), `opiniao`; detalhes em [AI-Driven Development](./ai-driven-development.md), etapa 4.

- Entradas: issues locais concatenadas de `issues/*.md` e os últimos 5 commits, no lugar de PRD em JSON e `progress.txt`.
- Só tarefas AFK; ordem de prioridade explícita (bugfixes críticos > infraestrutura de dev > tracer bullets > polish > refactors); uso de `/tdd`.
- Marcador `<promise>NO MORE TASKS</promise>`; scripts `once.sh` e `afk.sh`.
- Paralelização com o Sandcastle (sandbox por issue, revisor, merger).

### Lugar na trajetória de Matt

- Em jan/2026 ele apresenta o laço como substituto do plano multifase que usava em out/2025 (opinião dele; evolução datada, não contradição). Ver [Matt Pocock](../entities/matt-pocock.md).
- Na [entrevista de set/2026](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md), ele aponta os "Ralph loops" como origem da ideia de dois documentos — destino (spec/PRD) e tickets, um por sessão — e, daí, das skills.

### Relação com outros conceitos

- [Agentes de IA](./agentes-de-ia.md) e [Harness](./harness.md): o laço fica **fora** do harness e reinvoca o agente; o loop agêntico continua dentro de cada iteração.
- [TDD](./tdd.md): feedback loops como condição para o laço AFK funcionar.
- [Spec-Driven Development](./spec-driven-development.md): o PRD em JSON com `passes` lembra a spec em checklist (interpretação do mantenedor).

## Debates

- **Laço simples × orquestração**: segundo Matt, o laço é "vastamente superior" a enxames, malhas e orquestradores de agentes que tentou, e ele rejeita 16 agentes em paralelo (conflitos de merge, dependências ocultas). Na palestra de abr/2026, porém, ele mesmo paraleliza com o Sandcastle. As posições são datadas; não há comparação medida em nenhuma fonte.
- **Por que agora**: segundo ele (jan/2026), a técnica só é viável com modelos de código muito bons (Opus 4.5, "GPT 5.2" como falado). Opinião datada.

## Fontes de Suporte

- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): versão de jan/2026, demonstrada.
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): navegador como feedback loop visual no laço AFK (opinião).
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): versão de abr/2026 com issues locais e Sandcastle.
- [Matt Pocock — Entrevista ao The Pragmatic Engineer](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md): Ralph como origem de destino + tickets e das skills.

## Entidades Relacionadas

- [Matt Pocock](../entities/matt-pocock.md): autor das três fontes.
- [Claude Code](../entities/claude-code.md): agente invocado pela CLI na demo.
- Geoffrey Huntley: criador da técnica segundo Matt; sem página própria (só citado de passagem).

## Questões Não Resolvidas

- Data de origem da técnica: o vídeo diz "14th of July" sem ano; há quem situe em maio de 2025. Fonte primária de Huntley não lida.
- O artigo *Effective harnesses for long-running agents* (Anthropic) recomenda mesmo `progress.txt` e PRD em JSON com `passes`, como Matt afirma? Não conferido.
- Como se compara o plugin oficial Ralph Wiggum para Claude Code (dez/2025, baseado em stop hooks, não verificado) ao laço bash?
- Como a técnica evoluiu entre jan/2026 e abr/2026? Candidato: ingerir `2026-03-03_the-7-phases-of-ai-driven-development`.

## Notas de Atualização

- 2026-11-15: página criada na ingestão do vídeo Ralph Wiggum (jan/2026), reunindo as versões de jan/2026 e abr/2026 e a menção da entrevista de set/2026. `draft`: método de um único autor.
