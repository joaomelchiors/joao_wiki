---
title: "Matt Pocock — I was an AI skeptic. Then I tried plan mode"
descricao: 'Vídeo de Matt Pocock (12 min, jan/2026) defendendo o plan mode como etapa indispensável do laço planejar → executar → testar → commit: o que o modo bloqueia, por que ajuda o agente (contexto carregado, sub agente Explore com Haiku) e o desenvolvedor (requisitos claros, rubber duck), um trace real com perguntas e replanejamento, as três linhas de regra no CLAUDE.md e quando fazer à mão. `opiniao` com trace demonstrado; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "claude-code", "plan-mode", "planejamento", "sub-agente", "claude-md", "rules", "rubber-duck"]
source_files:
  - raw/sources/2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode_en-corrigida_WNx-s-RxVxk.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/ai-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/rules-e-skills.md
  - ../concepts/melhores-praticas-claude-code.md
  - ../concepts/spec-driven-development.md
  - ../concepts/agentes-de-ia.md
  - ../entities/uncle-bob.md
  - ./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ./2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ./2026-04-17_source-matt-pocock-live-projeto-do-zero.md
  - ./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./2026-08-05_source-claude-code-full-course-freecodecamp.md
tipo_conteudo: opiniao
captura: automatica
---

# Matt Pocock — I was an AI skeptic. Then I tried plan mode

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 12:20 (jan/2026) em que Matt Pocock conta que deixou de ser cético com IA ao usar o plan mode e argumenta que planejar antes de executar é indispensável. Explica o que o modo faz (desliga a escrita no sistema de arquivos e troca o system prompt), por que o planejamento ajuda o agente (carrega o contexto relevante) e o desenvolvedor (esclarece o que ele quer), percorre um trace real no seu *course video manager* e mostra as três linhas de regra para planos que mantém no `CLAUDE.md`. Fecha respondendo à objeção "eu faço mais rápido sozinho".

**Classificação**: `opiniao` dominante. É um vídeo de argumentação pessoal ("total AI skeptic" → "nunca voltei atrás"), com trechos de `explicacao` (o que o plan mode bloqueia) e um trace `demonstrado`, mas narrado depois do fato a partir de uma sessão gravada, não executado ao vivo. Captura automática corrigida: quatro correções são só `Prováveis` (entre elas a segunda menção a `CLAUDE.md` e o `agents.md` do fim) e duas passagens ficaram em `Não resolvido` (o nome do arquivo `api.reos.ad.ts` e o nome do modo depois do plan mode).

## Pontos-Chave

1. **O laço.** Todo código dele passa por: planejar em plan mode com a IA → a IA executa o plano → testar juntos (testes unitários, checagem de tipos ou QA manual) → commit → recomeçar. Pular o planejamento, segundo ele, "atrapalha muito" o que se consegue fazer.
2. **O que o agente faz e o que o plan mode bloqueia.** Ele lista quatro capacidades de um assistente de código: escrever no sistema de arquivos; ler arquivos, sites e documentação; rodar bash (ou PowerShell); chamar ferramentas de servidores MCP locais ou remotos. O plan mode desliga a escrita e usa outro system prompt, que manda criar um plano antes de mudar qualquer coisa; uma tentativa de escrita deve dar erro. Sem poder escrever, o agente explora o código e monta um plano detalhado. Entrada com `Shift+Tab` no Claude Code.
3. **Origem e difusão (afirmação dele).** Diz ter visto plan mode primeiro no Claude Code, "uns 9 meses atrás" (estimativa falada), e que Cursor e VS Code passaram a ter o mesmo.
4. **Por que ajuda o agente.** Analogia: um colega que esquece tudo sobre o repositório a cada commit. O plan mode carrega a janela com a informação relevante e com os padrões que o código já usa. Sem ele, o agente erra por falta de informação ou usa padrões que o projeto não usa; muitas falhas atribuídas às ferramentas viriam, segundo ele, de não planejar.
5. **Sub agente barato.** Segundo ele, o Claude Code costuma usar o Haiku 4.5 num sub agente para disparar muitas leituras e devolver um resumo ao agente principal, mais caro. Afirmação dele, não conferida em documentação.
6. **Por que ajuda o desenvolvedor.** Cita uma máxima que atribui a *The Pragmatic Programmer* ("ninguém nunca sabe o que quer"; citação de memória). Planejar é *rubber ducking* com a IA, iterativo: a IA propõe, ele corrige, e no fim os dois sabem o que fazer, e a execução fica quase no piloto automático. Sem isso, o desenvolvedor vira um "cliente exigente" que não explicou o que quer.
7. **Trace real.** No *course video manager*, um bug vindo de uma migração incompleta de `repos` para `repo versions`. Prompt ditado (recomenda Wispr Flow ou superwhisper). O sub agente Explore mapeou o schema e a criação de repositórios gastando ~40 mil tokens, em Haiku 4.5 e não em Opus 4.5. O agente principal investigou por conta própria, escreveu o plano num arquivo (ele tem "dezenas" desses arquivos) e perguntou se novos repositórios deveriam começar em `v1.0`; ele disse que sim. Aprovou, saiu do plan mode (o nome do modo seguinte está em `Não resolvido`) e o agente executou. Surgiu algo que nenhum dos dois tinha previsto (as seções ainda guardavam o ID do repositório); ele voltou ao plan mode, o agente atualizou o mesmo arquivo de plano, fez novas perguntas e executou.
8. **Plano como artefato compartilhado.** Diz ter visto gente colocar planos em GitHub issues para receber comentários, como um RFC, ou anexá-los a PRs para o revisor entender a intenção.
9. **As três linhas no `CLAUDE.md`.** Para não passar o dia lendo PRDs: "faça o plano extremamente conciso; sacrifique a gramática pela concisão" (segundo ele, leva planos de ~2.000 palavras a ~400) e "no fim de cada plano, dê uma lista de questões não resolvidas, se houver", que põe o agente num modo "exploratório, um pouco paranoico". Recomenda copiá-las.
10. **Concisão e *instruction budget*.** Não alonga as regras porque o arquivo entra em toda sessão: quanto menos instruções, mais "orçamento de instruções" sobra ao modelo. Ele mesmo adia o tema para outro vídeo; o conceito fica como heurística dele.
11. **"Eu faço mais rápido sozinho."** Concorda quando se conhece o repositório a fundo e a mudança é simples: aí quem programa já tem o contexto. Mas esses casos seriam poucos: numa organização grande, o plan mode deixa contribuir em repositórios e linguagens pouco conhecidos, porque humano e LLM entram com o mesmo contexto. Para mudança arquitetural, o *rubber duck* com a IA poupa o tempo do colega, a quem se pode mandar o plano pronto.
12. **Aposta sobre o futuro (opinião).** As ferramentas vão ficar mais rápidas com certeza e "um pouco" mais inteligentes; se a única vantagem humana for velocidade, ela some. Por isso ele usa plan mode sempre: para conhecer as fraquezas das ferramentas, que acha que não vão desaparecer.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| Plan mode = escrita desligada + system prompt próprio; escrita tentada dá erro | Explicação dele; converge com a descrição dos modos no [curso freeCodeCamp](./2026-08-05_source-claude-code-full-course-freecodecamp.md). O detalhe "deve dar erro" não foi conferido em documentação |
| Laço planejar → executar → testar → commit, sem exceção para trabalho não trivial | Opinião dele; mesmo fluxo base do [vídeo de out/2025](./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md), aqui sem multifase nem GitHub issue |
| Claude Code costuma usar Haiku 4.5 no sub agente Explore | Afirmação do falante, não verificada; os ~40 mil tokens do trace são número falado |
| Planejar ajuda o agente (contexto) e o desenvolvedor (requisitos) | Argumento central; o lado "agente" reforça [engenharia de contexto](../concepts/engenharia-de-contexto.md) |
| Três linhas no `CLAUDE.md`: plano extremamente conciso, sacrificar gramática, listar questões não resolvidas | Heurística dele, já registrada no vídeo de out/2025 (lá na memória do usuário, via `/memory`); aqui ele diz que estão no `CLAUDE.md` e, no fim, num `agents.md` (inconsistência do próprio vídeo ou do reconhecimento; `agents.md` é correção `Provável`) |
| Concisão de ~2.000 para ~400 palavras | Estimativa dele, sem medição mostrada |
| "Instruction budget": menos regras no `CLAUDE.md` deixam mais orçamento ao modelo | Heurística dele, não desenvolvida no vídeo |
| Fazer à mão é melhor só em repositório conhecido e mudança simples | Opinião dele; tensão com a posição de [Uncle Bob](./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md), cético com planejamento prévio (ver "Impacto") |
| Ferramentas vão ficar mais rápidas, não muito mais inteligentes | Previsão pessoal (jan/2026) |
| Plano em GitHub issue como RFC ou anexado a PR | Prática que ele diz ter visto em outros; não demonstrada |

## Notas de Evidência

- Laço e postura cética: abertura (0–1:14).
- Quatro capacidades do agente, mecânica do plan mode, analogia do colega, sub agente Haiku: 1:14–3:05 e início do trecho de 3:05.
- *Pragmatic Programmer*, rubber duck, trace do *course video manager* (Explore, ~40k tokens, pergunta `v1.0`): 3:05–6:10.
- Replanejamento, plano em issue/PR, as três linhas do `CLAUDE.md`: 6:10–9:15.
- *Instruction budget*, objeção "faço mais rápido", aposta sobre o futuro, `agents.md`: 9:15–fim.

## Impacto na Wiki Existente

- [Matt Pocock](../entities/matt-pocock.md): novo vídeo na cronologia, depois de "Frontend is HARDER" (2026-01-12) e antes da live de 2026-04-17; reforça plan mode como base do fluxo dele e registra a postura "ex-cético" e a aposta sobre velocidade das ferramentas.
- [Claude Code](../entities/claude-code.md): o plan mode desliga a escrita e troca o system prompt; sub agente Explore com modelo barato (afirmação de Matt, não verificada).
- [AI-Driven Development](../concepts/ai-driven-development.md): o laço planejar → executar → testar → commit em jan/2026, entre o fluxo de out/2025 e o *grilling* de abr/2026; as perguntas do agente como iteração sobre requisitos.
- [Engenharia de contexto](../concepts/engenharia-de-contexto.md): planejamento como carregamento deliberado de contexto; sub agente barato que devolve resumo ao agente principal.
- [Rules e Skills](../concepts/rules-e-skills.md): as três linhas de regra para planos e a heurística do *instruction budget* (arquivo curto porque entra em toda sessão).
- [Spec-Driven Development](../concepts/spec-driven-development.md) e [Uncle Bob](../entities/uncle-bob.md): não é contradição direta (Matt planeja por tarefa, em laço curto, não tudo antes), mas é uma tensão a registrar com o ceticismo de Uncle Bob com planejamento prévio.
- Não contradiz conclusões existentes.

## Questões Não Resolvidas

- As regras de plano estão no `CLAUDE.md` ou num `agents.md`? O vídeo cita os dois; o de out/2025 mostra a regra na memória do usuário (`/memory`). Conferir o link que ele indica.
- O sub agente Explore do Claude Code usa mesmo o Haiku 4.5 por padrão? Afirmação dele; conferir na documentação.
- Qual o nome do modo para o qual ele troca depois de aprovar o plano (`Não resolvido`; provavelmente *accept edits*, como no vídeo de out/2025, mas não confirmado).
- *Instruction budget*: ele promete outro vídeo; procurar se foi publicado. Desenvolvido, com números (~300–400, até ~500), no vídeo de fev/2026 [Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md).
- Redação exata da máxima de *The Pragmatic Programmer* não conferida.

## Páginas Relacionadas

- [Matt Pocock — Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md): onde o *instruction budget* é desenvolvido e o Explore aparece em Sonnet 4.6 (fev/2026).
- [Matt Pocock — How I use Claude Code for real engineering](./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): mesmo fluxo, demonstrado ao vivo três meses antes, com plano multifase e GitHub issue.
- [Live "construindo um projeto do zero"](./2026-04-17_source-matt-pocock-live-projeto-do-zero.md): evolução posterior, com *grilling* por skill.
- [Live com Uncle Bob](./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md): o contraponto sobre planejar antes.
- [Claude Code](../entities/claude-code.md), [Matt Pocock](../entities/matt-pocock.md), [Engenharia de contexto](../concepts/engenharia-de-contexto.md), [Rules e Skills](../concepts/rules-e-skills.md), [AI-Driven Development](../concepts/ai-driven-development.md).
