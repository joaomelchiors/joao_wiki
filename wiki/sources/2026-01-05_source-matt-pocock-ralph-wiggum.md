---
title: "Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique"
descricao: 'Vídeo de Matt Pocock (16 min, jan/2026) — técnica Ralph Wiggum (Geoffrey Huntley): laço bash que roda o agente uma tarefa por iteração sobre um PRD em JSON com flag `passes` e um `progress.txt` anexado, commit por iteração, trava de iterações, feedback loops (tipos, testes, CI verde), versão AFK × interativa com demo; substitui o plano multifase dele. `demonstrado`; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "ralph-wiggum", "geoffrey-huntley", "claude-code", "afk", "hitl", "prd", "feedback-loops", "loop-de-agente"]
source_files:
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/ai-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/agentes-de-ia.md
  - ../concepts/harness.md
  - ../concepts/tdd.md
  - ../concepts/spec-driven-development.md
  - ../concepts/ralph-loop.md
  - ./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-09-17_source-matt-pocock-pragmatic-engineer.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 16:23 (jan/2026) em que Matt Pocock apresenta a técnica **Ralph Wiggum**, atribuída a Geoffrey Huntley: rodar um agente de código num **laço bash**, uma tarefa por iteração, até que uma lista de tarefas (PRD em JSON com flag `passes`) esteja completa. Ele explica linha a linha o `ralph.sh` do seu repositório (o *course video manager*), o prompt, o `progress.txt` como memória do sprint e a saída por um marcador "promise complete"; defende feedback loops fortes (tipos, testes, CI verde); e roda ao vivo a variante interativa (`ralph-once`, nome não confirmado), que implementa uma feature real do editor de vídeo. Ele contrapõe a técnica ao plano multifase que usava antes.

**Classificação**: `demonstrado` como tipo dominante: o script é mostrado e explicado, e uma iteração roda ao vivo com resultado verificado na interface. Há mistura com `explicacao` (analogia com sprint e kanban) e `opiniao` (técnica "vastamente superior", modelos Opus 4.5 e GPT 5.2 a tornam viável, planos multifase "onerosos"). O vínculo com o artigo da Anthropic é citação de segunda mão, não conferida no artigo. Captura automática corrigida; onze correções são só `Prováveis` e sete trechos ficaram em `Não resolvido` (ver "Questões Não Resolvidas").

## Pontos-Chave

1. **A promessa.** Acordar com o backlog trabalhado e código funcionando. Segundo ele, enxames, malhas e orquestradores de agentes tentam isso há tempos; a resposta seria "um for loop".
2. **Por que agora.** A técnica é de julho (o vídeo diz "14th of July", sem ano; ver Questões) e depende de um modelo de código muito bom. Segundo ele, Opus 4.5 e "GPT 5.2" tornam abordagens simples viáveis e recomendáveis.
3. **Sprint sem time box.** Para a IA, o sprint vira só uma lista de tarefas. Ele descarta duas alternativas: 16 agentes em paralelo (conflitos de merge, dependências ocultas) e um único agente para tudo (não cabe numa janela de contexto).
4. **O que ele fazia antes.** Plano multifase em Markdown criado em plan mode e executado fase a fase, limpando o contexto entre elas (o fluxo do [vídeo de out/2025](./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md)). Problema apontado por ele: é difícil encaixar tarefa nova no plano, e o humano precisa definir a ordem exata de antemão.
5. **Analogia do kanban.** Engenheiros reais pegam a próxima tarefa de maior prioridade no quadro, concluem e voltam. Projetar o sprint passa a ser descrever o estado final; acrescentar trabalho é acrescentar um item.
6. **Ralph é um laço bash.** O `ralph.sh` (na pasta `plans`) liga o modo de erro, exige o número máximo de iterações como argumento, roda um `for` com esse limite como trava ("backstop") e invoca o agente pela CLI. Segundo ele, serve qualquer agente invocável por CLI: Claude Code, OpenCode, Codex.
7. **Dois arquivos de entrada.** `plans/prd.json`: lista de *user stories* com passos de verificação e flag `passes`, ao mesmo tempo PRD e lista de tarefas; ele a itera com um LLM. `progress.txt`: log de texto livre em que o agente **anexa** aprendizados; é a memória do sprint, apagada ao fim dele.
8. **O prompt, passo a passo.** (a) Escolher a feature de maior prioridade, não necessariamente a primeira da lista (o agente tendia a pegar a primeira). (b) Rodar os feedback loops. (c) Atualizar o PRD (marcar `passes: true`). (d) **Anexar** ao `progress.txt` ("append", não "update", que reescreve o arquivo inteiro), como nota para "a próxima pessoa". (e) Commit da feature, incluindo PRD e progresso. (f) Trabalhar em **uma única feature**. (g) Se o PRD estiver completo, emitir "promise complete" (a forma exata da tag não é lida em voz alta; a palestra de abr/2026 usa `<promise>NO MORE TASKS</promise>`); o script detecta isso na saída e encerra o laço.
9. **Memória entre iterações.** Cada iteração gera um commit; o agente consulta o histórico do git e o `progress.txt` para saber o que já foi feito.
10. **Tamanho das tarefas.** Uma tarefa por vez evita que o agente "morda mais do que consegue mastigar" e caia na degradação com muitos tokens. As tarefas precisam ser pequenas e de tamanho parecido: uma tarefa enorme "engole" a janela. Segundo ele, é boa prática também para humanos.
11. **Feedback loops.** type check e testes via pnpm; a cada commit do Ralph, o CI tem de continuar verde. Risco descrito: o agente comita código ruim e, sem memória, não sabe de onde veio o erro. Tarefas pequenas deixam testes focados na *user story* e sobra de contexto para verificar. MCP do Playwright é útil, mas caro em contexto.
12. **AFK × humano no laço.** O `ralph.sh` é a versão AFK, assíncrona, para rodar de madrugada. A variante interativa roda o mesmo prompt uma vez num terminal interativo; ele a usa para features difíceis em que quer conduzir o agente e para aprender o que o Ralph faz.
13. **Demo.** Com Opus 4.5 (plano "Claude Max 5X", como falado), o agente escolhe entre vários itens do PRD, justifica a prioridade ("sem a exibição visual, os outros itens de beat não podem ser verificados"), cria um componente "beat indicator", roda typecheck e testes, marca `passes: true`, anexa ao `progress.txt` uma sugestão para o próximo item e comita. Ele confere na interface: "add beat" exibe os três pontos laranja.
14. **Mudança de papel.** Segundo ele, o Ralph tira o humano do papel de planejador "anal retentive" e o põe no de levantador de requisitos ou designer de produto: foco no **o quê** e no comportamento, não no **como**. Ao final, lê o código, testa e ajusta o PRD.
15. **Próximos investimentos dele.** Mais testes, de mais qualidade e não intermitentes; um servidor MCP que deixe o agente explorar a aplicação; e, acima de tudo, tipos fortes.
16. **Fecho.** "O branch dev é sempre mais maluco que o main": muito do que se experimenta agora vai mudar, e o entendimento comum que surgir continuará valendo. Traduzir desejos de pessoas em código não vai a lugar nenhum.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| Ralph é um laço bash que roda o agente, uma tarefa por iteração, até a lista acabar | Demonstrado (script explicado e iteração ao vivo). Atribuição a Geoffrey Huntley é dita por ele; o nome está verificado no cabeçalho da corrigida. Mais antiga descrição detalhada da técnica na wiki; a [palestra de abr/2026](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md) mostra a versão com `issues/*.md` |
| PRD em JSON com flag `passes` funciona como PRD e lista de tarefas | Demonstrado. O formato depois muda: issues locais em Markdown na palestra de abr/2026 |
| `progress.txt` como memória do sprint, com instrução "append", não "update" | Demonstrado; a diferença de comportamento entre os dois verbos é observação dele |
| Formato do PRD em JSON e `progress.txt` são recomendação da Anthropic (*Effective harnesses for long-running agents*) | Segunda mão: título conferido na correção, conteúdo **não** conferido no artigo. Não afirmar como fato sem ler o artigo |
| Segundo o artigo, o Claude tendia a marcar features como completas sem testar e melhorava ao ser instruído a usar automação de navegador | Citação de segunda mão, mesma ressalva |
| Uma única feature por iteração, tarefas pequenas e de tamanho parecido | Heurística dele, coerente com a degradação de desempenho com mais contexto do [vídeo de out/2025](./2025-10-22_source-matt-pocock-janela-de-contexto.md) |
| CI verde a cada commit; tipos e testes como feedback loop | Demonstrado na iteração (typecheck e testes passam antes do commit). "Types, types, types" é ênfase dele |
| Opus 4.5 e "GPT 5.2" tornam a técnica viável | Opinião datada (jan/2026); "GPT 5.2" está em `Não resolvido` (mantido como falado) |
| Ralph é "vastamente superior" a outros arranjos de orquestração que ele tentou | Opinião dele; nenhuma comparação mostrada |
| Planos multifase são onerosos; com o Ralph ele se sente mais produtivo mesmo na versão interativa | Opinião dele. É uma **mudança de posição** em relação ao vídeo de out/2025, em que o plano multifase era o método dele; não é contradição entre fontes, e sim evolução datada |
| Qualquer agente com CLI serve (Claude Code, OpenCode, Codex) | Afirmação dele; só o Claude Code aparece na demo |

## Notas de Evidência

- Promessa, origem (Huntley, julho), modelos, analogia com sprint, rejeição de 16 agentes e de agente único: 0–10%.
- Plano multifase anterior e seus problemas, kanban, Ralph como laço, início da explicação do `ralph.sh`, `prd.json`, `progress.txt`, passos do prompt: 10–50%.
- Commit por iteração, tarefa única, tamanho das tarefas, marcador "promise complete", notificação por WhatsApp, feedback loops, artigo da Anthropic, Playwright MCP, AFK × humano no laço: 50–75%.
- Demo interativa, verificação na interface, comparação com plano multifase, papel de levantador de requisitos: 75–90%.
- Investimentos futuros (testes, MCP, tipos), propaganda do curso e fecho: 90–100%.

## Impacto na Wiki Existente

- **[AI-Driven Development](../concepts/ai-driven-development.md)**, seção "#### 4. Implementação AFK: Loop Automatizado": versão de jan/2026 do laço, anterior às issues locais e ao Sandcastle — PRD em JSON com `passes`, `progress.txt`, marcador "promise complete", escolha da maior prioridade, variante interativa. Reforça "ONLY WORK ON A SINGLE TASK" e a metáfora do turno da noite com uma demo.
- **[Matt Pocock](../entities/matt-pocock.md)**: nova entrada de jan/2026 na cronologia e seção própria. Registra a mudança de posição: o plano multifase de out/2025 passa a ser "o que eu fazia antes do Ralph".
- **[Engenharia de Contexto](../concepts/engenharia-de-contexto.md)**, seção "### Plano multifase externalizado (demonstrado, out/2025)": anotar que o próprio autor o substituiu pelo laço Ralph em jan/2026, com o estado em PRD + `progress.txt` + git.
- **[Agentes de IA](../concepts/agentes-de-ia.md)** e **[Harness](../concepts/harness.md)**: laço externo sobre o agente, com trava de iterações e condição de parada por marcador na saída; contraste com enxames e orquestradores (opinião dele).
- **[TDD](../concepts/tdd.md)**: feedback loops (tipos, testes, CI verde) como condição para o laço funcionar; fonte de jan/2026, anterior à posição matizada da entrevista.
- **[Spec-Driven Development](../concepts/spec-driven-development.md)**: o PRD em JSON com `passes` é uma lista de tarefas verificável parecida com a spec em checklist. Ligação do mantenedor; Matt não usa o termo.
- **[Claude Code](../entities/claude-code.md)**: invocado pela CLI dentro de um script bash (modo não interativo) e numa variante interativa.
- **[Laço Ralph](../concepts/ralph-loop.md)** (página criada nesta ingestão, `draft`): a técnica aparece na palestra de abr/2026, na entrevista de set/2026, aqui e num vídeo ainda não ingerido (`2026-03-03_the-7-phases-of-ai-driven-development`).
- Sem contradição com conclusões existentes; a diferença com o vídeo de out/2025 é evolução datada do mesmo autor.

## Questões Não Resolvidas

- **Não resolvido no bruto**: `it's gone for 2123 27` (números dos itens do PRD escolhidos); `it's currently skinned in V5`; `Ralph once.sh` (nome do arquivo, provável `ralph-once.sh`); `a Ralph human the loop version`; `this PR item` (provável "PRD item"); `I took a lot of inspiration for this article` (provável "from"); `GPT 5.2` e `Claude Max 5X`, mantidos como falados. Não citar esses trechos como fato.
- **Prováveis** (frágeis): `Jeffrey Hunt's` → Geoffrey Huntley's; `running clawed,` → running Claude; `canon board` → kanban board; `multihase`/`multifphase` → multi-phase; `LM`/`LMS` → LLM/LLMs; `backs stop` → backstop; `comes to the four` → comes to the fore; `ownorous` → onerous; `progress. TXT` → progress.txt; `Typescript` → TypeScript; `total TypeScript CLI` → Total TypeScript CLI.
- Data e ano do artigo de Huntley: o vídeo diz só "14th of July" (seria 2025); há quem situe a origem em maio de 2025. Não confirmado na fonte primária.
- O artigo *Effective harnesses for long-running agents* (Anthropic) recomenda de fato o `progress.txt` e o PRD em JSON com `passes`? Conferir antes de afirmar.
- A Anthropic lançou em dez/2025 um plugin oficial Ralph Wiggum para Claude Code, baseado em stop hooks, diferente do laço bash; o vídeo não menciona. Informação do relatório de correção, não verificada nesta rodada.
- O comando exato com que o `ralph.sh` invoca o Claude Code não é lido em voz alta; flags não conhecidas.
- Como a técnica evoluiu até a versão com issues locais, últimos 5 commits e Sandcastle (abr/2026)? O vídeo `2026-03-03_the-7-phases-of-ai-driven-development`, ainda não ingerido, pode cobrir o meio do caminho.

## Páginas Relacionadas

- [Laço Ralph](../concepts/ralph-loop.md): a técnica consolidada, com as versões de jan/2026 e abr/2026
- [Matt Pocock](../entities/matt-pocock.md): autor; método em jan/2026
- [AI-Driven Development](../concepts/ai-driven-development.md): implementação AFK, HITL × AFK
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): plano multifase que o Ralph substitui; tarefas do tamanho da janela
- [Agentes de IA](../concepts/agentes-de-ia.md) e [Harness](../concepts/harness.md): laço externo sobre o agente
- [TDD](../concepts/tdd.md): feedback loops como condição do laço
- [Spec-Driven Development](../concepts/spec-driven-development.md): lista de tarefas verificável
- [Claude Code](../entities/claude-code.md): agente usado na demo
- [How I use Claude Code for real engineering](./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): o método anterior (plano multifase + GitHub issue)
- [Janela de contexto](./2025-10-22_source-matt-pocock-janela-de-contexto.md): por que uma tarefa por janela
- [Palestra Essential Skills](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): versão posterior do laço com issues locais e Sandcastle
- [Entrevista ao The Pragmatic Engineer](./2026-09-17_source-matt-pocock-pragmatic-engineer.md): Ralph como origem da ideia de destino + tickets e das skills
