---
title: "AI-Driven Development (práticas de Matt Pocock)"
type: concept
status: draft
created: 2026-11-12
updated: 2026-11-15
tags: ["ai-driven-development", "matt-pocock", "hitl", "afk", "tracer-bullets", "ia-generativa", "greenfield"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/assets/2026-11-12_home-repo-pattern.png
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
related_pages:
  - ./ia-generativa.md
  - ./tdd.md
  - ./engenharia-de-contexto.md
  - ./home-repo.md
  - ./rules-e-skills.md
  - ./spec-driven-development.md
  - ./verificacao-deterministica.md
  - ../entities/uncle-bob.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md
---

# AI-Driven Development (práticas de Matt Pocock)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> **Evidência**: todo o conteúdo vem de um único autor, Matt Pocock. As fontes principais (palestra, shorts e entrevista) são de tipo `opiniao`; o artigo do Home Repo (`referencia`) só aparece como remissão. Desde 2026-11-15 há uma fonte `demonstrado` — a [live de abr/2026](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md), com 1h47 de execução ao vivo —, o que eleva a evidência da **fase de pesquisa** descrita abaixo, mas não tira a página do `draft`: continua sendo método e heurística de um único autor, não prática validada por outras fontes. Convergências com outras fontes estão indicadas onde existem (por exemplo, Opus para revisão em [Melhores Práticas do Claude Code](./melhores-praticas-claude-code.md)).

## Definição

**Tese central** (Matt Pocock): "Base de código ruim = agentes de IA ruins." Fundamentos clássicos de engenharia de software continuam essenciais na era da IA.

## Compreensão Atual

### Docs, Home Repo e Retro (posições posteriores de Matt Pocock)
- **Menos docs, mais código autoexplicativo**: a camada de docs em markdown que descreve o código se desatualiza e cria duas fontes de verdade. Vale manter só ADRs, glossário de domínio e uma camada fina de navegação. Responde em parte à questão "doc rot" (ver Questões Não Resolvidas). Fonte: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md).
- **Home Repo**: um repo único com skills, `AGENTS.md` e ponteiros para os demais repos, onde o agente sempre roda. Ver [Home Repo](./home-repo.md).
- **Skill `retro`**: analisa sessões passadas e sugere melhorias no repo (lint, code review); Matt defende **humano ou processo no loop** ("retro da retro") para validar se as mudanças ajudam. Fonte: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md); o artigo acadêmico citado não foi lido.

### Posições da entrevista ao The Pragmatic Engineer (set/2026)
Fonte: [entrevista](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md) (legenda automática revisada manualmente). Tudo atribuído a Matt Pocock.

- **Fatiar o trabalho pela smart zone (~150 mil tokens)**: o que não cabe numa janela vira vários tickets, um por sessão. Dois documentos: o **destino** (spec/PRD, define o fim) e os **tickets**. Origem: os *Ralph loops* (agente faz a menor mudança rumo ao objetivo e limpa o contexto).
- **Quando usar cada skill**: pequeno e alinhável depois → nenhuma entrevista; cabe numa sessão → Grill Me; atravessa várias sessões → **Wayfinder**. Regra dele: deslocar o alinhamento para depois ("shift right") sempre que o custo de errar for baixo.
- **Wayfinder**: um **mapa** central com tickets de tipos diferentes (grilling, protótipo, pesquisa, tarefa arbitrária); "névoa de guerra" que se abre a cada sessão; estrutura de grafo dirigido. Matt diz usar também em tarefas não técnicas (planejar curso, obra).
- **Grill Me como canal de valores**: o agente "não lê a sua mente"; a entrevista estabelece escopo, o que é importante e o que está fora. Também força o humano a decidir e a pesquisar o que não sabe.
- **Leading words**: termos de livros clássicos (*tracer bullet*, fatia vertical, módulos profundos, *don't outrun your headlights*) repetidos no prompt, que o modelo devolve e usa no próprio raciocínio. Interpretação do autor da entrevista: esses termos já estão nos priors do modelo. **Hipótese** de Matt, sem teste controlado.
- **Linguagem ubíqua com o agente**: skill "grill with docs" constrói um glossário de domínio durante o planejamento; ganho declarado é descrever mudanças com poucas palavras e navegar o código por `grep`. Ver [DDD](./ddd.md).
- **Entropia de software**: agentes a produzem mais rápido; a base de código é o ambiente do agente e precisa ser otimizada para quem "acorda sem memória a cada sessão".
- **Spec**: continua rejeitando editar só a spec e regenerar código (resultado pior que codar à mão, na experiência dele); tensão com a aula de SDD do curso Profissional AI ([SDD](./spec-driven-development.md)).
- **Waterfall**: protótipos baratos da IA antes da spec; aceita o rótulo como "cautionary tale".
- **Agentes na nuvem e processo organizacional**: prefere agentes em máquina remota acessível por chat; sugere observabilidade por agente, conjunto comum de skills e testes A/B de processos. Relatos, não dados.

### Conversa com Uncle Bob (live, ago/2026)
Fonte: [live](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md); fala do entrevistado Bob, com Matt como interlocutor. Nesta página, o que Matt diz fica atribuído a Matt.

- **Convergências**: fundamentos clássicos continuam valendo; a IA comeu o tático e o estratégico fica com o humano; custo de mudança baixo favorece iterar (ágil) em vez de planejar tudo; módulos profundos (Ousterhout) ajudam o agente; livros antigos (*The Pragmatic Programmer*) como leitura.
- **Matt sobre multiagentes**: diz ter suspeita de quem tem "100 agentes com e-mail próprio" e faz exceção para implementador + revisor (red-green-refactor: o implementador só faz passar, o revisor recebe o diff e pode ter mais instruções). Bob usa cadeia de cinco papéis ([Verificação determinística](./verificacao-deterministica.md)).
- **Divergências/diferenças de ênfase**: Bob busca verificação determinística em vez de regras em texto e quer chegar a não olhar o código; Matt afirma que "o código é o campo de batalha" (ver [entidade](../entities/matt-pocock.md)) e rejeita "specs to code". Posições não são idênticas; ficam lado a lado.
- **Como aprender estratégia**: Matt pergunta como iniciantes aprendem programação estratégica quando a IA fez o tático; Bob responde com código à mão por ~1 ano, depois ser tratado como agente, e livros antigos. Matt acrescenta que o ciclo de feedback da estratégia agora é mais curto com agentes (opinião).

### HITL vs. AFK: Tipos de Tarefa
Separação clara entre tarefas que exigem humanos e tarefas automatizáveis:

| Tipo | Sigla | Descrição | Exemplos |
|---|---|---|---|
| **Human in the Loop** | HITL | Exige interação humana | Planejamento, decisões arquiteturais, design review, alinhamento, QA |
| **Away From Keyboard** | AFK | Pode ser automatizado sem humanos | Implementação pura, testes, refatorações, correções simples |

**Metáfora**: "Turno do dia" (humano planeja; enfileira trabalho) vs. "Turno da noite" (IA implementa AFK enquanto humano dorme).

**Princípio**: planejamento é **obrigatoriamente** HITL; implementação pode ser transformada em AFK.

### Antes do PRD: a fase de pesquisa (live de abr/2026, demonstrada)

Fonte: [live "Watch me build a brand-new project from scratch"](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md) — 1h47 de execução ao vivo que termina **sem código de aplicação**, com dois documentos de pesquisa, um nome e um glossário.

O fluxo da seção seguinte começa em "Ideia". Esta live mostra o que acontece **antes** de a ideia virar PRD, quando o projeto é greenfield:

```
Ideia vaga → validar (vale construir?) → pesquisa do terreno (subagentes em paralelo)
          → documento de pesquisa (persiste o que foi descoberto fora da janela)
          → nome → modelagem de domínio (grilling) → context.md (linguagem ubíqua)
          → [daqui em diante: PRD → tickets → implementação]
```

- **"Até você chegar ao código, você está só trabalhando com pesquisa — é uma tarefa de pesquisa."** A fase não produz especificação; produz entendimento e vocabulário.
- **Validar antes de especificar**: ele adia de propósito duas decisões grandes — autenticação completa (OIDC fica para a v2; na v1, token emitido pelo admin) e o tratamento de *resume*/compactação — dizendo que precisa ver uma versão básica funcionando antes de decidir. "Poderíamos especificar tudo isso, mas precisamos validar se a ideia é boa."
- **Pesquisa delegada a subagentes**, em paralelo e com pergunta fechada (como cada um dos cinco agentes de código expõe dados; se emite OpenTelemetry). Conclusão operacional: os schemas divergem e evoluem, não existe resposta "só use OTel", então **um adaptador por agente é inevitável**.
- **Documento de pesquisa ≠ PRD**: o PRD é documento de *destino*; o documento de pesquisa é memória do que foi descoberto. Ele não o relê — "o que importa são as conclusões" —, mesma postura já registrada sobre o PRD.
- **Nomear faz parte do trabalho**: ele admite o *bikeshedding* do trecho de naming e ainda assim defende o resultado — "o nome faz parecer mais real"; "a linguagem é como você traz um programa à vida".
- **Terminologia que "calcifica"**: quando um termo novo passa a ser reusado pelos dois lados (no caso, *sidecar*), ele trata isso como sinal de progresso e captura o termo deliberadamente.
- **Fecho com glossário em `context.md`**, testado contra cenários concretos — ver [DDD](./ddd.md).
- **Contra dividir por camada**: fazer sessões de grilling separadas para front-end e back-end é "uma decisão artificial — o domínio, o espaço do problema, é a coisa inteira"; organizar times por camada "sempre foi uma decisão ruim" porque prende a atenção à camada em vez do problema.
- **Memória de agente de longo prazo**: nesta data ele a considera **má ideia** e prefere "algo observável, concreto, que você possa editar na hora e que caiba na janela de contexto" — ADRs mais uma versão mínima de DDD. Compare com a skill beta `chief-of-staff` (nov/2026), que prescreve memória de longo prazo em wiki Markdown ([resumo do repositório](../sources/2026-11-14_source-matt-pocock-repo-skills.md)). Fontes de épocas diferentes; a wiki registra as duas sem conciliar.

### Fluxo Completo de Desenvolvimento
```
Ideia → Grill Me (HITL, 1h) → PRD (HITL) → Issues/Kanban (HITL) → Implementação (AFK, paralela) → QA (HITL) → Review (HITL) → Merge
```

#### 1. Grill Me: Sessão de Interrogatório
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

#### 2. PRD: Product Requirements Document
**Estrutura**:
- Problem Statement + Solution
- User Stories ("As an \<actor\>, I want \<feature\>, so that \<benefit\>")
- Implementation Decisions (módulos, interfaces, API contracts — sem caminhos de arquivo ou snippets)
- Testing Decisions (o que faz bom teste, quais módulos testar, prior art)
- Out of Scope (essencial para "definition of done")
- Future Notes

**Filosofia de Matt**: "Eu não leio o PRD depois de gerado" — confia na capacidade de sumarização do LLM; já alcançou alinhamento no Grill Me.

**Doc rot (apodrecimento)**: PRDs no repositório apodrecem conforme código muda; Matt tende a descartá-los após implementação.

#### 3. PRD → Issues: Tracer Bullets (Balas Traçantes)
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

#### 4. Implementação AFK: Loop Automatizado
**Estrutura do agente AFK**:
- Recebe issues locais (de `issues/*.md`) + últimos 5 commits
- Trabalha apenas em tasks AFK (ignora HITL)
- Se todas completas: `<promise>NO MORE TASKS</promise>`

**Priorização**: bugfixes críticos > infraestrutura de dev (testes, tipos) > tracer bullets > polish > refactors

**Ciclo**: explorar repo → usar `/tdd` → rodar feedback loops (`test`, `typecheck`) → commit → mover issue para `done`

**Regra**: ONLY WORK ON A SINGLE TASK

**Paralelização (Sand Castle)**: planner escolhe múltiplas issues independentes → cada issue roda em sandbox isolada (git worktree em Docker) → implementadores trabalham em paralelo → revisor (Opus) revisa commits → merger mescla branches e resolve conflitos

#### 5. QA e Review
**QA manual essencial**: impõe "bom gosto" humano; previne código genérico/malfeito (_slop_).

**Função do QA**: criar mais issues para o Kanban enquanto agente implementa.

**Review automatizada**:
- Limpar contexto antes de revisar (review na smart zone, não na dumb zone)
- Usar modelo mais inteligente para revisão (Opus) que para implementação (Sonnet)

### Arquitetura Testável: Módulos Profundos vs. Rasos
**Conceito de John Ousterhout** (_A Philosophy of Software Design_):

| Tipo | Características | Para IA |
|---|---|---|
| **Módulos Rasos** (ruins) | Muitos arquivos pequenos; dependências difusas; poucas exportações | Difícil navegar; difícil testar (onde desenhar limites?) |
| **Módulos Profundos** (bons) | Interface simples; muita funcionalidade interna | Fácil testar (um limite ao redor captura muita funcionalidade); fácil entender |

**Consequência**: "Sem ajuda, ou se você não vigiar a IA com cuidado, ela vai produzir uma base de código rasa."

**Como aprofundar**: usar habilidade `improve codebase architecture` — varredura procurando clusters de módulos para agrupar e testar como unidade.

**Mentalidade de "caixas cinzas"**: conhecer forma e comportamento do módulo; delegar implementação interna para IA.

### Push vs. Pull: Instruções para LLMs
**Push**: enviar instruções diretamente ao LLM (ex.: system prompt, padrões de código no contexto inicial).  
**Pull**: LLM busca informações quando necessário (ex.: Skills consultáveis).

**Uso prático**:
- **Implementador**: padrões disponíveis via Pull (Skills)
- **Revisor**: padrões enviados via Push (comparar código contra padrões)

### Skills Essenciais
| Skill | Função | Tipo |
|---|---|---|
| **Grill Me** | Sessão de interrogatório (40-100 perguntas; 1h) | HITL |
| **Write PRD** | Geração de Product Requirements Document estruturado | HITL |
| **PRD to Issues** | Conversão de PRD em issues paralelizáveis com tracer bullets | HITL |
| **TDD** | Ciclo red-green-refactor guiado por testes | AFK |
| **Improve Codebase Architecture** | Varredura para aprofundar módulos | AFK |

### Skills hoje no repositório (nov/2026)

Fonte: [`SKILL.md` das 27 skills](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md) (instruções do próprio autor; descrevem o desenho, não resultados).

- **Fluxo principal** descrito por `ask-matt`: `grill-with-docs` → (`prototype` se preciso) → `to-spec` → `to-tickets` → `implement` (por ticket, com `/clear`) ou `implement-spec` (subagentes em paralelo) → `code-review` → `retro`. Wayfinder entra para esforços grandes e nebulosos e entrega ao `to-spec`.
- **Mudanças de nomes e de forma em relação à palestra de abril/2026** (acima): "Write PRD" virou `to-spec` e "PRD to Issues" foi fundida em `to-tickets` (**renomeações confirmadas no `CHANGELOG.md`**: `to-prd` → `to-spec` na PR #464; `to-plan` + `to-issues` → `to-tickets`; ver [resumo do repositório](../sources/2026-11-14_source-matt-pocock-repo-skills.md)); o Grill Me continua como `grill-me`, hoje uma casca de uma linha sobre a primitiva `grilling`, que pergunta em **rodadas** por fronteira da árvore de decisões, com resposta recomendada, em vez de uma única sessão de 40 a 100 perguntas (aquele número vem da palestra; o `SKILL.md` não fixa quantidade).
- **TDD**: o `SKILL.md` de `tdd` coloca a refatoração **fora** do loop e exige seams de teste acordados com o usuário; a palestra de abril descrevia "red-green-refactor". Fontes de épocas diferentes; ver [tdd](./tdd.md).
- **Beta (`in-progress/`)**: `chief-of-staff` (agente de longa duração com memória em wiki: ingest/query/lint), `software-factory` (fábrica de agentes com freios: "aceleradores sem freios fazem um canhão de slop"), `loop-me`, `claude-handoff`, `setup-ts-deep-modules` e o trio de escrita; detalhes no [resumo do repositório](../sources/2026-11-14_source-matt-pocock-repo-skills.md).
- **Novidades que a wiki ainda não tinha**: `retro` (melhorar o ambiente do agente, preferindo checagens determinísticas a regras), `writing-for-agents` (ponteiros de contexto, leading words, negação), `diagnosing-bugs` (loop de feedback apertado antes de teorizar), `code-review` em dois eixos, `handoff`, `to-questionnaire`, `wizard`, `teach` (workspace com `MISSION.md` e registros de aprendizagem).

## Fontes de Suporte

- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — LIVE: construindo um projeto do zero](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md): única fonte `demonstrado` do conceito — a fase de pesquisa, o naming e a modelagem de domínio executados ao vivo (abr/2026).
- [Matt Pocock — Quatro shorts (docs, dumb zone, Pragmatic Programmer, retro skill)](../sources/2026-07-16_source-matt-pocock-shorts.md)
- [Matt Pocock — The Home Repo Pattern (vídeo e artigo)](../sources/2026-11-12_source-matt-pocock-home-repo.md)
- [Matt Pocock — Entrevista ao The Pragmatic Engineer (Wayfinder, leading words, fundamentos)](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md)
- [Uncle Bob e Matt Pocock — live sobre fundamentos na era da IA](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) (Matt como entrevistador; fala principal é de Bob)

- [mattpocock/skills — conteúdo dos SKILL.md](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md): texto das 27 skills; fluxo principal, `wayfinder`, `teach`, `retro`, `writing-for-agents`.
- [Repositório mattpocock/skills (GitHub)](../sources/2026-11-14_source-matt-pocock-repo-skills.md): 27 skills de Matt (Grill Me, `grill-with-docs`, `to-spec`, `to-tickets`, `tdd`, Wayfinder, `retro`, `teach`...) e instalação como plugin; referência do próprio autor.
- [Matt Pocock — short sobre a skill `/teach`](../sources/2026-07-16_source-matt-pocock-teach-skill.md): skill para aprender assuntos (exemplo: medir terreno por triangulação; também cubo mágico e técnicas sêniores). Uso de skills voltado à aprendizagem do desenvolvedor, não ao processo de código; relato pessoal, sem o conteúdo da skill.

## Conceitos Relacionados

- [verificacao-deterministica](./verificacao-deterministica.md)
- [tdd](./tdd.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [home-repo](./home-repo.md)
- [rules-e-skills](./rules-e-skills.md)
- [spec-driven-development](./spec-driven-development.md)

## Questões Não Resolvidas

- ~~**Skills**: onde obter as Skills?~~ → **Respondida em 2026-11-14**: repositório público [mattpocock/skills](https://github.com/mattpocock/skills), ver [resumo](../sources/2026-11-14_source-matt-pocock-repo-skills.md). Falta ler o conteúdo de cada `SKILL.md`.
- **Sand Castle**: como configurar e usar a biblioteca de Matt Pocock? Documentação disponível?

- ~~**Doc rot**: PRDs apodrecem — mas e decisões arquiteturais importantes? Como preservá-las?~~ → **Parcialmente resolvida** no short "Delete (most of) your docs" (2026-07-16): manter ADRs, glossário de domínio e camada fina de navegação; evitar docs que descrevem o código. Heurística de um autor, sem dados.
- **Limite de paralelização**: há limite prático de quantos agentes simultâneos? Custo/latência? (`implement-spec` paraleliza pela fronteira do grafo de tickets, sem fixar um limite no texto lido.)
- ~~**Wayfinder e "grill with docs"**: onde estão publicadas?~~ → Estão em [mattpocock/skills](https://github.com/mattpocock/skills) (`wayfinder`, `grill-with-docs`), segundo o README.
- ~~**Push vs. Pull**: como implementar Pull na prática?~~ → **Parcialmente respondida** por `SKILL-MECHANICS.md`: Pull é a skill model-invoked, cuja `description` fica sempre carregada como ponteiro (custo de contexto em troca de descoberta); referência compartilhada vive numa skill só de referência ou em arquivo apontado. Resta a variante via MCP.

## Notas de Atualização

- 2026-11-15: adicionada a seção "Antes do PRD: a fase de pesquisa", da live de abr/2026 (ingestão) — primeira fonte `demonstrado` da página; registrada a tensão entre "memória de longo prazo é má ideia" (abr/2026) e a skill `chief-of-staff` (nov/2026).
- 2026-11-14: renomeações confirmadas pelo CHANGELOG; adicionadas as skills beta e a resposta parcial de Push vs. Pull (ingestão dos auxiliares).
- 2026-11-14: adicionada a seção "Skills hoje no repositório" com base nos `SKILL.md` (ingestão).
- 2026-11-14: adicionada a fonte do repositório de skills (ingestão), com respostas a duas questões abertas.
- 2026-11-14: adicionado o short `/teach` (ingestão) às fontes de suporte.
- 2026-11-12: adicionada a seção da live com Uncle Bob (ingestão).
- 2026-11-12: adicionada a seção da entrevista ao The Pragmatic Engineer (ingestão).
- 2026-11-12: status passou a `draft`, com nota de evidência (higienização, etapa 3).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
