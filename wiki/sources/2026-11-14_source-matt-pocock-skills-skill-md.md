---
title: "mattpocock/skills — conteúdo dos SKILL.md (27 skills)"
type: source
status: active
created: 2026-11-14
updated: 2026-11-14
tags: ["matt-pocock", "skills", "grilling", "wayfinder", "tdd", "teach", "retro", "code-review", "writing-for-agents"]
source_files:
  - raw/sources/2026-11-14_github-mattpocock-skills_skill-md.md
  - raw/sources/2026-11-14_github-mattpocock-skills_auxiliares.md
related_pages:
  - ./2026-11-14_source-matt-pocock-repo-skills.md
  - ../entities/matt-pocock.md
  - ../concepts/ai-driven-development.md
  - ../concepts/tdd.md
  - ../concepts/rules-e-skills.md
  - ../concepts/engenharia-de-contexto.md
  - ./2026-07-16_source-matt-pocock-teach-skill.md
tipo_conteudo: referencia
captura: manual
---

# mattpocock/skills — conteúdo dos SKILL.md (27 skills)

**Classificação** (`tipo_conteudo: referencia`, `captura: manual`): os `SKILL.md` literais (em inglês) das pastas `engineering` e `productivity` do repositório de [Matt Pocock](../entities/matt-pocock.md), lidos em 2026-11-14 no estado do branch `main` naquele dia. São instruções do próprio autor para agentes, então mostram **o que ele manda o agente fazer**, não provam que funcionam. Os arquivos auxiliares citados pelas skills foram lidos em seguida, no mesmo dia, e estão resumidos na seção "Arquivos auxiliares" abaixo (texto literal em `raw/sources/2026-11-14_github-mattpocock-skills_auxiliares.md`). As pastas `in-progress/` e `misc/` estão no [resumo do repositório](./2026-11-14_source-matt-pocock-repo-skills.md). Visão geral do repo: [resumo do repositório](./2026-11-14_source-matt-pocock-repo-skills.md).

## Resumo

As skills formam um **fluxo principal "ideia → entrega"** descrito pela skill roteadora `ask-matt`, mais entradas laterais, skills autônomas e duas camadas de vocabulário. Muitas skills são só encadeamentos: `grill-me` e `grill-with-docs` têm 1 a 3 linhas e chamam outras skills ("Call the Skill tool with...").

## O fluxo principal (segundo `ask-matt`)

1. **`/grill-with-docs`** afia a ideia por entrevista e grava o que aprende em `GLOSSARY.md` e ADRs (versão sem estado: `/grill-me`, para quando não há diretório de trabalho). Internamente chama `grilling` + `domain-modeling`.
2. Se uma pergunta só se resolve com código rodando: `/handoff` → `/prototype` → `/handoff` de volta.
3. Trabalho de várias sessões: `/to-spec` (conversa vira spec, sem entrevista) → `/to-tickets` (tickets em fatias verticais com arestas de bloqueio) → `/implement` por ticket com `/clear` entre eles, ou `/implement-spec` para tudo de uma vez. Trabalho pequeno: `/implement` na mesma janela.
4. O código é construído com `/tdd` e fechado com `/code-review`; `/pr` formata o corpo do PR.
5. **`/retro`** fecha o ciclo sugerindo mudanças no **ambiente** do agente, não no código.

Entradas laterais: `/triage` (issues de terceiros), `/diagnosing-bugs` (bugs difíceis), `/wayfinder` (esforço grande e nebuloso, que ao terminar entrega em `/to-spec`). Manutenção: `/improve-codebase-architecture`. Vocabulário por baixo: `/domain-modeling` e `/codebase-design`. Autônomas: `grill-me`, `grilling`, `prototype`, `research`, `to-questionnaire`, `wizard`, `wait-what`, `teach`, `writing-for-agents`. Pré-requisito: `/setup-matt-pocock-skills`.

**Higiene de contexto** (`ask-matt`): manter grilling, spec e tickets em uma janela só (sem compactar nem limpar até depois de `/to-tickets`); cada `/implement` começa limpo, a partir do ticket. O limite é a **smart zone**, "~150k tokens em modelos de ponta" (coerente com [engenharia-de-contexto](../concepts/engenharia-de-contexto.md)). Entre fases há cinco opções: continuar, `/clear`, `/handoff`, subagente, `/compact` (o padrão, "no fim da árvore"); a árvore completa de `PHASE-BOUNDARIES.md` está resumida na seção "Arquivos auxiliares".

## Skills em detalhe

### Entrevista e domínio
- **`grilling`** (primitiva): modela o plano como **árvore de decisões**; em cada **rodada** faz todas as perguntas da **fronteira** (decisões cujos pré-requisitos já estão resolvidos), numeradas, com **resposta recomendada** (formulada para que "sim" aceite); fatos do ambiente são trabalho do agente (subagente com contexto novo), decisões são do usuário; termina quando a fronteira está vazia e o usuário confirma o entendimento compartilhado.
- **`domain-modeling`**: desafia termos contra o `GLOSSARY.md`, afia linguagem vaga, testa com cenários concretos, cruza com o código e atualiza o glossário na hora (sem detalhes de implementação). ADR só se as três condições valerem: **difícil de reverter**, **surpreendente sem contexto**, **resultado de trade-off real**. Estrutura: um `GLOSSARY.md` + `docs/adr/` (ou `GLOSSARY-MAP.md` em multi-contexto).
- **`wait-what`**: manda o agente re-explicar a última mensagem com contexto, em ASD-STE100 (inglês técnico simplificado), usando o vocabulário do `GLOSSARY.md`.

### Planejar
- **`to-spec`**: **sem entrevista**, só síntese da conversa; define os **seams** de teste (o ideal é um só, o mais alto possível) e confirma com o usuário; modelo: Problem Statement, Solution, User Stories ("extremamente extensa"), Implementation Decisions, Testing Decisions, Out of Scope, Further Notes; sem caminhos de arquivo nem trechos de código (envelhecem); publica no tracker com `ready-for-agent`.
- **`to-tickets`**: fatias **tracer bullet** verticais, demonstráveis e do tamanho de uma janela de contexto; cada ticket declara quem o **bloqueia**; prefatoração primeiro ("tornar a mudança fácil, depois fazer a mudança fácil"); **refatorações amplas** seguem *expand–contract* em vez de fatia vertical; o usuário valida granularidade e arestas antes de publicar. Local: um arquivo por ticket em `.scratch/<feature>/issues/`.
- **`wayfinder`**: ver abaixo.
- **`triage`**: máquina de estados com duas categorias (`bug`, `enhancement`) e cinco estados (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`); verifica redundância e rejeição prévia (`.out-of-scope/`), **reproduz o bug antes** de entrevistar; todo comentário começa com aviso "gerado por IA".

### Implementar e revisar
- **`implement`**: usa `tdd` em seams pré-acordados; type-check e testes isolados com frequência, suíte completa só no fim; depois `code-review` e commit.
- **`implement-spec`**: trata os tickets como **grafo de tarefas**; subagentes implementadores com contexto novo, cada um em seu worktree, em paralelo na fronteira; subagente "merger" integra em uma branch de integração; comunicação esparsa por **ponteiros de contexto**; ao final, um `code-review` e correções por um subagente novo.
- **`tdd`**: testa comportamento por interfaces públicas; **só em seams pré-acordados com o usuário**; antipadrões: acoplado à implementação, **tautológico** (a asserção recalcula o esperado como o código) e **fatiamento horizontal** (todos os testes antes de todo o código); regras: vermelho antes de verde, uma fatia por vez, e **"refatoração não faz parte do loop"** (pertence à revisão).
- **`code-review`**: dois eixos em subagentes paralelos e separados, **Standards** (padrões documentados do repo + base de 12 *code smells* de Fowler, sempre como julgamento) e **Spec** (faltando, escopo extra, implementação suspeita); não mistura nem reordena os achados.
- **`pr`** (crédito a Dex Horthy, Humanlayer): corpo com Summary (menor visual possível), Evidence (antes/depois) e Merge Danger (porta de mão única ou dupla; raio de explosão).
- **`diagnosing-bugs`**: a fase 1 "é a skill": construir um **loop de feedback apertado** (rápido, determinístico, capaz de ficar vermelho no sintoma exato) antes de teorizar; depois reproduzir e minimizar, 3 a 5 hipóteses falseáveis ranqueadas, instrumentar com logs etiquetados (`[DEBUG-xxxx]`), teste de regressão antes do fix **só se houver seam correto** (a ausência de seam é, por si, um achado); limpeza.
- **`prototype`**: código descartável que responde uma pergunta (lógica/estado → HTML único; visual → variações de UI); depois a decisão validada entra no código real e o protótipo fica numa branch como fonte primária.
- **`research`**: agente em segundo plano investiga **fontes primárias** e grava Markdown com citações.
- **`wizard`**: gera script bash interativo para passos que só um humano pode fazer (credenciais, segredos de CI, migração).

### Arquitetura
- **`codebase-design`**: vocabulário de **módulos profundos**: módulo, interface, implementação, **profundidade** (alavancagem na interface), **seam** (Michael Feathers), adapter, **alavancagem**, **localidade**; teste da deleção; "a interface é a superfície de teste"; "um adapter é um seam hipotético, dois é real". Rejeita explicitamente a profundidade como razão de linhas (Ousterhout) e o termo "boundary" (confunde com contexto delimitado do DDD).
- **`improve-codebase-architecture`**: varre o código (priorizando áreas que mudaram, por YAGNI), gera relatório **HTML** com cartões antes/depois e força da recomendação; depois entrevista sobre o candidato escolhido.

### Meta e produtividade
- **`retro`**: lê o log da sessão e propõe melhorias em sete categorias: navegação, checagens automáticas, padrões de código, `AGENTS.md` global, economia de ferramentas, no-ops e acesso à informação. **Violação mecânica → checagem determinística** (lint, hook, CI); só julgamento vai para `CODING_STANDARDS.md`. `CLAUDE.md`/`AGENTS.md` devem ser usados "com extrema parcimônia", em geral só para ponteiros de navegação; o revisor (menos pressão de contexto) impõe os padrões, não o implementador.
- **`writing-for-agents`**: **ponteiros de contexto** (a redação decide quando o agente alcança o material), **carga de contexto × carga cognitiva**, hierarquia de informação e divulgação progressiva, critérios de conclusão (claros e exaustivos), **leading words** (palavras já presentes no pré-treino, como *tracer bullets*, *fog of war*), **negação** como falha ("não pense em elefante"; prefira o positivo) e poda (fonte única de verdade, no-ops, sedimento).
- **`handoff`**: documento de passagem salvo no diretório temporário do SO, sem duplicar specs/issues/commits (só ponteiros), com seção de skills sugeridas e segredos removidos.
- **`to-questionnaire`**: entrevista o usuário sobre o **envio** (para quem, o que precisa receber) e escreve um questionário Markdown que mira a lacuna de conhecimento do destinatário.
- **`setup-matt-pocock-skills`**: explora o repo e configura tracker (GitHub, GitLab, markdown local ou outro), rótulos de triagem e layout de docs, gravando bloco "Agent skills" no `CLAUDE.md`/`AGENTS.md` e `docs/agents/*.md`.

### `wayfinder` (detalhe)
- Para esforço maior que uma sessão: um **mapa** (issue com rótulo `wayfinder:map`) com Destination, Notes, Decisions so far, **Not yet specified** ("fog of war") e Out of scope; **tickets de decisão** como issues filhas, cada um do tamanho de uma sessão de ~100K tokens, tipos `research` (AFK), `prototype` (HITL), `grilling` (HITL, o padrão) e `task`; bloqueio nativo do tracker define a **fronteira**; **uma decisão por sessão** (exceto pesquisas); planeja "decisões, não entregáveis"; ao fim, entrega ao `/to-spec` em vez de construir.
- Critério "ticket ou névoa": dá para formular a pergunta com precisão agora? (não importa se dá para respondê-la agora).

### `teach` (detalhe)
- **Estado em múltiplas sessões**, com o diretório atual como workspace: `MISSION.md` (por que o usuário quer aprender; ancora tudo), `reference/*.html` (folhas de consulta), `RESOURCES.md`, `learning-records/*.md` (como ADRs de aprendizado, usados para calcular a **zona de desenvolvimento proximal**), `lessons/*.html` (unidade principal: uma lição curta, bonita, com uma vitória tangível), `assets/` (componentes reutilizáveis) e `NOTES.md`.
- Filosofia: conhecimento (de fontes confiáveis; "nunca confie no conhecimento paramétrico"), **habilidades** (lições interativas com ciclo de feedback imediato) e **sabedoria** (via comunidades reais). Distingue **fluência** (recuperação no momento) de **força de armazenamento** (retenção longa) e usa dificuldade desejável (recuperação ativa, espaçamento, intercalação). Quizzes: respostas com o mesmo número de palavras e posição da correta variada.
- Responde ao short [/teach](./2026-07-16_source-matt-pocock-teach-skill.md): o "teach workspace" é o diretório; quiz e continuidade de contexto vêm de `learning-records` e `MISSION.md`.

## Arquivos auxiliares (lidos em 2026-11-14)

Texto literal em `raw/sources/2026-11-14_github-mattpocock-skills_auxiliares.md`. Os mais substanciais:

- **`PHASE-BOUNDARIES.md`** (ask-matt): a árvore das cinco opções na fronteira entre fases, em ordem: (1) **continuar**, se a próxima fase precisa desta como **fonte primária** ou se ainda há smart zone (grilling → implementação é o "sim" padrão: a implementação quer o raciocínio literal, não um resumo); (2) **`/clear`**, se o contexto é descartável; (3) **`/handoff`**, só para harness novo, diretório novo, colega ou fork de tarefa lateral; (4) **subagente**, se a tarefa roda AFK; (5) **`/compact`**, o padrão, de preferência com instrução (`/compact we're going to QA this area`). Todo movimento exceto continuar troca fonte primária (completa, ruidosa) por secundária (com perdas, enxuta); o erro típico é começar pelo `/compact` e herdar uma sessão "confiante e errada sobre uma decisão que o resumo achatou". As perguntas são julgamento, não critérios objetivos; o valor é fazê-las **em ordem e na fronteira**.
- **`AGENT-BRIEF.md`** (triage): o brief de agente é o contrato que o agente AFK executa. Princípios: **durabilidade sobre precisão** (descrever interfaces, tipos e contratos de comportamento; nunca caminhos de arquivo nem números de linha, que envelhecem), **comportamental, não procedural** (o quê, não como), critérios de aceitação testáveis um a um e **fora de escopo explícito**. Template e exemplos bons/ruins incluídos; para PR, o brief descreve o que falta no diff existente.
- **`OUT-OF-SCOPE.md`** (triage): base de conhecimento de rejeições, um arquivo por **conceito** (não por issue), em estilo de mini documento de design; só **enhancements rejeitados** entram (nunca o já implementado, que envenenaria a deduplicação); correspondência por semelhança de conceito ("night theme" casa com `dark-mode.md`).
- **`DEEPENING.md`** (codebase-design): quatro categorias de dependência que decidem como testar o módulo aprofundado: in-process (fundir e testar direto), local-substituível (PGLite, FS em memória), remota mas própria (**port** no seam + adapter HTTP/in-memory) e externa de terceiros (mock injetado). Testes: **substituir, não empilhar** — testes unitários dos módulos rasos viram lixo e são apagados quando os testes na interface do módulo profundo existem.
- **`DESIGN-IT-TWICE.md`** (codebase-design): padrão de 3+ subagentes paralelos, cada um com restrição de projeto diferente (minimizar interface; maximizar flexibilidade; otimizar o chamador comum), comparados por profundidade, localidade e posição do seam; recomendação opinativa no fim. Baseado em Ousterhout.
- **`tests.md` e `mocking.md`** (tdd): exemplos de teste bom (comportamento observável pela interface) × ruim (mock de colaborador interno, verificação por canal lateral, tautológico); **mock só em fronteiras de sistema** (APIs externas, tempo/aleatoriedade; preferir banco de teste a mock de banco), nunca nos próprios módulos; injeção de dependência e interfaces estilo SDK (uma função por operação) em vez de fetcher genérico.
- **`LOGIC.md` e `UI.md`** (prototype): protótipo de lógica é um HTML único com estado visível, botões de livre uso e **walkthroughs guiados por cenário**, com a lógica isolada em módulo puro "liftável"; protótipo de UI gera 3 (máx. 5) variantes **estruturalmente diferentes** na mesma rota, trocadas por `?variant=` com uma barra flutuante, de preferência dentro de uma página real ("uma rota vazia esconde problemas de design").
- **`HTML-REPORT.md`** (improve-codebase-architecture): formato do relatório (Tailwind + Mermaid via CDN, cartões antes/depois, selos de força); disciplina de vocabulário: "use exatamente module, interface, depth, seam, adapter, leverage, locality; nunca component, service, API, boundary".
- **`SKILL-MECHANICS.md`** (writing-for-agents): a mecânica da escolha de invocação: **model-invoked** mantém a `description` sempre carregada (carga de contexto em troca de descoberta; outras skills podem alcançá-la, e uma skill só de referência vira o lar de referência compartilhada), **user-invoked** custa zero contexto mas gasta carga cognitiva ("você é o índice"); skills user-invoked não podem chamar umas às outras — referência comum a duas vai para arquivo fora do sistema de skills; **router skill** (como `ask-matt`) é a cura para user-invoked demais.
- **Formatos do `teach`**: `MISSION-FORMAT.md` (missão concreta — "correr meia maratona até outubro", não "ficar em forma"; uma missão por workspace), `RESOURCES-FORMAT.md` (só fontes de alta confiança, anotadas, com seção de lacunas), `LEARNING-RECORD-FORMAT.md` (equivalente didático do ADR: 1–3 frases; só entendimento demonstrado, conhecimento prévio declarado, equívoco corrigido ou mudança de missão; nunca "material coberto" — cobertura não é aprendizado), `GLOSSARY-FORMAT.md` (termo só entra quando o usuário o entende: o glossário registra conhecimento comprimido, não é dicionário para estudar).
- **Formatos do `domain-modeling`**: `ADR-FORMAT.md` (um ADR pode ser um parágrafo; o valor é registrar que se decidiu e por quê; o que qualifica: forma arquitetural, integrações entre contextos, tecnologia com lock-in, fronteiras, desvios deliberados do óbvio, restrições invisíveis no código, alternativas rejeitadas não óbvias) e `GLOSSARY-FORMAT.md` (definições de 1–2 frases, opinativas, com `_Avoid_`; só termos do contexto do projeto, nunca conceitos gerais de programação).
- **Templates do `setup-matt-pocock-skills`**: `issue-tracker-github.md` (comandos `gh` para sub-issues e **dependências nativas de bloqueio**; aviso de nunca abrir issue em `mattpocock/skills` por engano a partir de um fork), `issue-tracker-local.md` (`.scratch/<feature>/`, um arquivo por ticket, operações de wayfinding), `domain.md` (como as skills consomem glossário e ADRs: silêncio quando não existem; criados sob demanda) e `triage-labels.md` (tabela de mapeamento dos cinco papéis).
- **`template.sh` do `wizard`** (~9,5 KB): biblioteca bash pronta (estágios com limpeza de tela, `ask`/`ask_secret`, upsert idempotente em `.env` com modo 0600, `gh secret set` com fallback, resumo final); o autor da skill escreve só os estágios abaixo do marcador. **`hitl-loop.template.sh`** (diagnosing-bugs): loop de reprodução com humano, `step` e `capture` imprimindo `KEY=VALUE` para o agente ler.
- **`CREDITS.md`** (pr): o menu de visuais vem da skill `show-me` de Dex Horthy (Humanlayer), copiado (não referenciado) porque dependência entre repositórios quebraria instalações avulsas.

## Afirmações e evidências

| Afirmação | Atribuição | Força |
|---|---|---|
| As skills codificam o fluxo grill → spec → tickets → implement → review → retro | `ask-matt` (autor) | Descrição do próprio autor; descreve o desenho, não resultados |
| Smart zone ~150k tokens | `ask-matt` (autor) | Opinião/heurística; concorda com as demais fontes de Matt, sem dados |
| Revisor, e não o implementador, deve impor padrões | `retro` (autor) | Princípio de projeto do autor, não testado aqui |
| Seams de teste devem ser acordados com o usuário antes de escrever testes | `tdd`, `to-spec` | Regra do autor |
| Verificações mecânicas valem mais que regras escritas | `retro` | Coerente com [verificação determinística](../concepts/verificacao-deterministica.md) (Uncle Bob), mas independente delas |

## Impacto na wiki existente

- **Atualiza nomes**: o "PRD" da palestra de abril/2026 corresponde hoje a `to-spec`, e "PRD to Issues" a `to-tickets` (a correspondência é inferência do mantenedor pela função; o histórico de renomeação não foi lido). O fluxo atual não menciona "PRD".
- **Tensão registrada em [spec-driven-development](../concepts/spec-driven-development.md)**: nas fontes anteriores Matt rejeita "specs to code"; aqui ele publica `to-spec` e `implement-spec`. Pela leitura, a spec é sintetizada da conversa e **consumida por tickets e subagentes**, não escrita antes do raciocínio; se isso concilia as duas posições é interpretação (não verificado com o autor).
- **Detalha o TDD** de [tdd](../concepts/tdd.md): seams pré-acordados, antipadrão tautológico e refatoração fora do loop.
- **Mostra o Wayfinder, "grill with docs" e `retro`** de [ai-driven-development](../concepts/ai-driven-development.md) em forma executável.

## Questões não resolvidas

- ~~Conteúdo dos arquivos auxiliares~~ → Lidos em 2026-11-14; ver a seção "Arquivos auxiliares".
- ~~Pastas `skills/in-progress/` e `skills/misc/`~~ → Lidas; ver o [resumo do repositório](./2026-11-14_source-matt-pocock-repo-skills.md).
- A pasta `docs/` (34 páginas humanas, uma por skill promovida, publicadas em aihero.dev/skills-<nome>) não foi lida; segundo o `CLAUDE.md` do repo, espelha as skills com seções "What it does / When to reach for it / Common questions / It's working if".
- Evidência independente de que esse fluxo produz código melhor.
