---
title: "Engenharia de Contexto"
descricao: 'Engenharia de prompt (CORFT), meta-prompt, context rot, smart/dumb zone (~100k → ~150k tokens) e parte fixa × fases flexíveis da janela.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["engenharia-de-contexto", "prompt", "context-rot", "dumb-zone", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-08-ContextoRulesSkill-engenhariaDePrompt.md
  - raw/sources/2026-04-27_transcrição-IA-09-ContextoRulesSkill-engenhariaDeContexto.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
  - raw/sources/2025-10-22_most-devs-don-t-understand-how-context-windows-work_en-corrigida_-uW5-TaVXu4.md
  - raw/sources/2025-10-27_how-i-use-claude-code-for-real-engineering_en-corrigida_kZ-zzHVUrO4.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode_en-corrigida_WNx-s-RxVxk.md
  - raw/sources/2026-02-24_never-run-claude-init_en-corrigida_9tmsq-Gvx6g.md
related_pages:
  - ../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ../entities/claude-code.md
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ./ralph-loop.md
  - ../sources/2026-11-14_source-matt-pocock-skills-skill-md.md
  - ../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md
  - ./ia-generativa.md
  - ./rules-e-skills.md
  - ./spec-driven-development.md
  - ./harness.md
  - ./ai-driven-development.md
  - ./home-repo.md
  - ./verificacao-deterministica.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
---

# Engenharia de Contexto

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Engenharia de contexto é decidir o que o modelo vê antes de agir, e é considerada mais importante que a engenharia de prompt. Rules, Skills e Spec-Driven Development são formas dela. Esta página cobre prompt estruturado (CORFT), meta-prompt, **context rot** e a **smart/dumb zone**.

## Compreensão Atual

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

### Context Rot (Apodrecimento do Contexto)
Quantas mais tokens são geradas numa única execução, mais o modelo tende a se desviar do objetivo inicial — o contexto original fica estatisticamente menos relevante à medida que a sequência cresce. Isso é chamado de **context rot**.

| Fator | Efeito |
|---|---|
| Tarefa curta (prompt simples) | Modelo mantém coerência com o objetivo |
| Tarefa longa (muitos tokens gerados) | Caminho diverge; alucinações e desvios aumentam |

**Consequência prática**: tarefas longas devem ser quebradas em tasks menores (Spec Driven Development) ou ter contexto injetado antes de cada ação (engenharia de contexto).

### Smart Zone vs. Dumb Zone
*Heurística de Matt Pocock (palestra Essential Skills e shorts, fontes de tipo `opiniao`). Os números de tokens são regra prática dele, não medição. A ideia geral de degradação com contexto longo converge com o "context rot" das aulas acima.*

**Restrição arquitetural dos LLMs** (segundo Matt): ficam progressivamente "burros" à medida que tokens se acumulam.

| Zona | Tokens | Comportamento |
|---|---|---|
| **Smart zone** | Início da conversa, ~0-100k tokens (palestra de abril/2026) | LLM faz melhor trabalho; relações de atenção menos tensionadas |
| **Dumb zone** | ~100k+ tokens (palestra de abril/2026) | LLM fica progressivamente "burro"; toma decisões estúpidas |

**Antecedente (vídeo de out/2025)**: antes da formulação smart/dumb zone, Matt já dizia que mais contexto significa pior desempenho, em modelos pequenos e grandes, e já descrevia o **lost in the middle**: o início e o fim de uma conversa longa pesam mais que o meio. Ele atribui isso ao mecanismo de atenção, como propriedade emergente e não intencional, e compara com os vieses de primazia e de recência em humanos. O gráfico que mostra é, nas palavras dele, "muito pouco científico". Critério operacional da época: começar a se preocupar com ~50k tokens **livres** numa janela de 200k. `/clear` era o padrão, e `/compact` ficava para quando ele quisesse "preservar as vibes". Lost in the middle aparece em Matt antes da live com Bob (ago/2026, abaixo). Fonte única, de tipo `explicacao`, com afirmações atribuídas a ele, sem medição: [vídeo sobre janela de contexto](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md). *Interpretação do mantenedor*: ~50k livres em 200k correspondem a ~150k usados, número próximo dos ~150k que ele adotaria em 2026. Mas a métrica é outra (espaço livre × zona de qualidade), e isso não contradiz os ~100k de abr/2026.

**Datação do valor antigo (live de 2026-04-17)**: na live em que constrói um projeto do zero, Matt diz em resposta ao chat que "100 mil tokens ainda é a smart zone" e, no fecho, encerra a sessão porque "estamos quase entrando na dumb zone". Confirma que os ~100 mil eram o número dele em abr/2026 e mostra a heurística sendo usada como critério operacional de parada, não só enunciada. Fonte: [live](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md).

**Atualização (short de 2026-07-20)**: o próprio Matt Pocock passou a usar **~150 mil tokens** como regra prática e diz que há ~6 meses achava ~100 mil e que o valor continua subindo; varia por modelo e tarefa. A queda é gradual, e alucinações de fidelidade são um sinal de estar na dumb zone. Ao chegar lá: limpar, compactar, fazer *hand off* ou redesenhar o fluxo em tarefas pequenas em janelas novas. Evolução da posição, não contradição. Fonte: [shorts de Matt Pocock](../sources/2026-07-16_source-matt-pocock-shorts.md).

**Reforço (entrevista de set/2026)**: Matt repete os ~150 mil tokens como valor atual para modelos de fronteira, independentemente do tamanho da janela (ele credita a ideia de smart/dumb zone a Dex Horthy), e usa isso para fatiar trabalho grande em várias sessões (spec/destino + tickets; mapa no Wayfinder). Mesma fonte de opinião de um autor. Ver [entrevista](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md).

**Terceiro reforço (skills de Matt, lidas em nov/2026)**: a skill roteadora `ask-matt` fixa a smart zone em "~150k tokens em modelos de ponta" e a transforma em regra operacional: manter entrevista, spec e tickets em uma única janela, sem compactar nem limpar até os tickets saírem; cada implementação começa em janela limpa, a partir do ticket. Nas fronteiras entre fases, cinco opções **em ordem**: continuar (se a próxima fase precisa desta como fonte primária, ou se ainda há smart zone), limpar (contexto descartável), hand off (só para harness/diretório/colega novos), subagente (tarefa AFK) e compactar — o padrão, mas o último a considerar: todo movimento exceto continuar troca fonte primária (completa, ruidosa) por secundária (com perdas), e começar pelo `/compact` produz uma sessão "confiante e errada sobre uma decisão que o resumo achatou". Fonte: [SKILL.md e PHASE-BOUNDARIES.md do repositório de Matt](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md).

**Live com Uncle Bob (ago/2026)**: Matt reapresenta smart/dumb zone (de novo creditando Dex Horthy) e Bob traz o mecanismo **lost in the middle**: início e fim do contexto pesam mais que o meio, então regras longas colocadas no prompt "somem" e viram diretrizes. Conclusão dele: prompt inicial mínimo e verificação determinística depois (ver [Verificação determinística](./verificacao-deterministica.md)). Ambos também falam de **trajetória do contexto**: o que entra direciona tudo o que vem depois, e só limpar o contexto zera isso (exemplo do café contaminado por uma novela). Opinião e relato, não medição; a ideia converge com context rot, acima. Fonte: [live](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md).

**Analogia**: "Adicionar token é como adicionar time a uma liga de futebol — número de partidas escala quadraticamente" (relações de atenção entre cada par de tokens).

**Consequências práticas**:
- Dimensionar tarefas para permanecerem dentro da smart zone
- Evitar acúmulo infinito de contexto (compactação contínua)
- Preferir limpar contexto (voltar ao estado base) a compactar (histórico variável)
- **LLMs como "Memento"**: esquecem continuamente ao limpar; comportamento determinístico a cada reset

### Plano multifase externalizado (demonstrado, out/2025)

No vídeo [How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md), Matt Pocock trata uma feature que ele prevê maior que uma janela de contexto assim:

1. Ainda em plan mode, pede que o plano seja dividido em fases ("make the plan multi-phase"), uma por janela.
2. Confere `/context` entre as fases: cerca de 33k tokens usados antes de executar; a fase 1 acrescentou uns 3k.
3. Salva o plano, com os itens já marcados, numa GitHub issue (`gh issue create`).
4. Limpa o contexto. Sobram cerca de 16k tokens (arquivos de memória, ferramentas de sistema, system prompt) e nenhuma mensagem.
5. Retoma pedindo que o agente busque a issue e execute a fase seguinte.

O estado do trabalho fica **fora** da janela, e a limpeza não perde o plano. É uma alternativa a `/compact`, coerente com a preferência dele por `/clear` do [vídeo de out/2025](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md). Trecho `demonstrado`, de fonte única; os números foram lidos de passagem na tela e valem só como ordem de grandeza.

**Evolução (jan/2026)**: no [vídeo Ralph Wiggum](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md), o próprio autor chama o plano multifase de "o que eu fazia antes" e diz que o trocou pelo [laço Ralph](./ralph-loop.md): o estado passa a morar em um PRD em JSON com flag `passes`, num `progress.txt` só anexado e no histórico do git, com uma tarefa por janela e contexto limpo a cada iteração. A crítica (difícil encaixar tarefa nova, ordem definida de antemão, plano "oneroso") é opinião dele; é mudança de posição datada, não contradição entre fontes.

### Planejamento como carregamento de contexto (opinião, jan/2026)

No vídeo [I was an AI skeptic. Then I tried plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md), Matt Pocock justifica o plan mode pelo lado do contexto. Analogia dele: o agente é um colega que esquece tudo sobre o repositório a cada commit; planejar carrega a janela com a informação relevante e com os padrões que o código já usa. Sem isso, segundo ele, o agente erra por falta de informação ou adota padrões que o projeto não usa, e muitas falhas atribuídas às ferramentas viriam de não planejar.

Ele descreve também a divisão de trabalho com um **sub agente barato**: um sub agente (o Explore, no [Claude Code](../entities/claude-code.md)) dispara muitas leituras e devolve um resumo ao agente principal, mais caro. Segundo ele, esse sub agente "costuma usar" o Haiku 4.5; no trace narrado gastou ~40 mil tokens. Afirmações de uma fonte `opiniao`; o modelo usado pelo Explore **não foi verificado** em documentação.

### Poda de contexto por `resume` (demonstrada, abr/2026)

Na [live de abr/2026](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md), Matt usa duas vezes um movimento que **não** está entre os cinco das fronteiras de fase (continuar, limpar, hand off, subagente, compactar): depois de uma divagação longa — a escolha do nome do projeto —, ele sai da sessão, usa `resume` para voltar a um ponto anterior da **mesma** conversa e segue dali, "cortando aquele pedaço de contexto"; descreve o efeito como "é quase como se tivéssemos voltado no tempo". No outro uso, pressiona `Esc` duas vezes para desfazer e voltar a um turno anterior.

Diferença em relação aos outros movimentos: não há perda por resumo (não compacta) nem reinício (não limpa) — o que se descarta é **um ramo específico** da conversa, preservando o resto como fonte primária. É coerente com a preferência dele por limpar em vez de compactar, e com a objeção registrada de que começar pelo `/compact` produz uma sessão "confiante e errada". Técnica de um autor, demonstrada uma vez, sem medição.

Ele também usa o `resume` para outra finalidade: fazer uma sessão antiga responder a uma pergunta feita por **outra** sessão do Claude Code, porque a primeira conversa tinha ocorrido fora do repositório onde ele passou a trabalhar — contorno para a limitação de que referenciar outra sessão exige estar no mesmo diretório.

### Arquivo global fixo × fases flexíveis (opinião, fev/2026)

No vídeo [Never Run claude /init](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md), Matt Pocock divide o uso da janela em uma parte **fixa** — o system prompt, com ferramentas, MCP servers e todo o conteúdo do `CLAUDE.md`/`AGENTS.md`, presente desde o início de cada sessão — e fases **flexíveis**: exploração do código, implementação e testes (feedback loops e debug, que podem "inchar" quando algo dá errado). Segundo ele, cada token tirado da parte fixa sobra para o trabalho e reduz o custo, e deixá-la no mínimo é "o melhor resultado possível".

A consequência que ele tira, como opinião: o que o `/init` do [Claude Code](../entities/claude-code.md) põe no arquivo (comandos do `package.json`, stack, serviços, rotas) é descobrível no próprio código, que é a fonte de verdade, e vai apodrecer quando a implementação mudar; o melhor é confiar no passo de exploração embutido do agente, que monta o contexto *just in time* antes de implementar, e numa estrutura de pastas que mostre a arquitetura. Ele cita o artigo *Evaluating AGENTS.md* (arXiv 2602.11988), que **não foi lido pela wiki**. A tese de doc rot reaparece nos [shorts de jul/2026](../sources/2026-07-16_source-matt-pocock-shorts.md) ("delete (most of) your docs"); o orçamento de instruções que acompanha o argumento está em [Rules e Skills](./rules-e-skills.md).

## Fontes de Suporte

- [Dev AI — Aula 08: Engenharia de Prompt e Contexto](../sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md)
- [Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — Quatro shorts (docs, dumb zone, Pragmatic Programmer, retro skill)](../sources/2026-07-16_source-matt-pocock-shorts.md)
- [Matt Pocock — LIVE: construindo um projeto do zero](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md): datação dos ~100 mil tokens (abr/2026) e a poda de contexto por `resume`, demonstradas.
- [Matt Pocock — Most devs don't understand how context windows work](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md): antecedente de out/2025 (lost in the middle, ~50k livres em 200k, `/clear` × `/compact`).
- [Matt Pocock — How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): plano multifase salvo em GitHub issue para limpar a janela sem perder o estado (out/2025), demonstrado.
- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): substituição do plano multifase pelo laço Ralph (estado em PRD + `progress.txt` + git), jan/2026, demonstrado.
- [Matt Pocock — I was an AI skeptic. Then I tried plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md): planejamento como carregamento deliberado de contexto e sub agente barato que devolve resumo (jan/2026), `opiniao`.
- [Matt Pocock — Never Run claude /init](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md): parte fixa (system prompt, `CLAUDE.md`) × fases flexíveis da janela e exploração *just in time* em vez de documentação pré-carregada (fev/2026), `opiniao` com demo do `/init`.

## Conceitos Relacionados

- [rules-e-skills](./rules-e-skills.md)
- [spec-driven-development](./spec-driven-development.md)
- [harness](./harness.md)
- [ai-driven-development](./ai-driven-development.md)
- [home-repo](./home-repo.md)

## Questões Não Resolvidas

- **Otimização de contexto por task**: como combinar Mentions + Rules + Skills minimizando tokens sem perder contexto relevante?

## Notas de Atualização

- 2026-11-15: adicionada a seção "Arquivo global fixo × fases flexíveis", do vídeo de Matt contra o `/init` (ingestão).
- 2026-11-15: adicionada a seção "Planejamento como carregamento de contexto", do vídeo de Matt sobre plan mode (ingestão).

- 2026-11-15: adicionada a seção "Plano multifase externalizado", do vídeo de Matt sobre Claude Code em engenharia real (ingestão).
- 2026-11-15: adicionado o "Antecedente (vídeo de out/2025)" em Smart Zone vs. Dumb Zone, do vídeo de Matt sobre janela de contexto (ingestão).
- 2026-11-15: datados os ~100 mil tokens com a live de abr/2026 e adicionada a seção "Poda de contexto por `resume`" (ingestão).
- 2026-11-14: adicionado o terceiro reforço dos ~150k, vindo da skill `ask-matt` (revisão da ingestão).
- 2026-11-12: adicionados lost in the middle e trajetória do contexto, da live com Uncle Bob (ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
