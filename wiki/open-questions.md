---
title: "Questões Abertas"
descricao: 'Questões não resolvidas e candidatos de pesquisa.'
type: maintenance
status: active
created: 2026-04-07
updated: 2026-11-15
tags: ["questions"]
source_files: []
related_pages:
  - ./overview.md
  - ./index.md
---

# Questões Abertas

Esta página mantém questões que precisam de investigação adicional e julgamentos adiados.

## Crítica

- Verificar as três afirmações que só a conversa com LLM sustenta: distinção criar × reconstituir atribuída a Eric Evans, `crypto.randomUUIDv7()` no Node 24.16+ e direção `restore()` ↔ `tryCreate()` (itens detalhados abaixo). Ver [lint de 2026-11-12](./maintenance/lint-reports/2026-11-12_lint-higienizacao.md).

## Rastreamento

- Conceitos em `draft` aguardando segunda fonte: [TDD](./concepts/tdd.md), [AI-Driven Development](./concepts/ai-driven-development.md), [Laço Ralph](./concepts/ralph-loop.md) (método de um autor), [Deep Learning](./concepts/deep-learning.md); síntese [camadas Rule/Skill/MCP/SDD](./syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md).
- Esta wiki como home repo: decisão adiada até haver projetos reais — ver [síntese](./syntheses/2026-11-12_home-repo-nesta-wiki.md).

## Candidatos de Pesquisa Futura

- Conferir no guia de Simon Willison (*Agentic Engineering Patterns*, capítulo "Red/green TDD", fev/2026) as frases que Matt Pocock lê no vídeo de fev/2026 — a wiki só as tem de segunda mão — ver [resumo](./sources/2026-02-23_source-matt-pocock-red-green-refactor.md).
- Datar no histórico do repositório `mattpocock/skills` quando a skill `tdd` passou a pôr a refatoração fora do loop (já aparece assim em fev/2026) — ver [TDD](./concepts/tdd.md).
- Verificar na documentação oficial da Anthropic os comandos/flags citados no curso CCDV-F (transcrição automática, não verificada) — ver [resumo](./sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md).
- Idem para o curso freeCodeCamp: `/goal` (o instrutor o chama de "skill" — nativo ou instalado?), "Ultra Plan", `/reload plugins`, status line customizada × nativa — ver [resumo](./sources/2026-08-05_source-claude-code-full-course-freecodecamp.md) e [lint](./maintenance/lint-reports/2026-11-14_lint-ingestao-freecodecamp.md).
- Segurança real e escopo do *auto mode* do Claude Code ([entidade](./entities/claude-code.md)).
- Estado de Managed Agents / CLI `ant` (descrito como imaturo no curso).
- Curso Profissional AI — Agentes: aulas de criação de Skill, Skill com código, SDD, MCP e Skill × MCP já ingeridas em 2026-11-12 (itens abaixo); confirmar papel de Python vs. Node.js (a aula com código usou Node.js) — ver [Estilos de Skill](./sources/2026-11-06_source-agentes-ia-estilos-de-skill.md) e [Usando Skills](./sources/2026-11-07_source-agentes-ia-usando-skill.md).
- Identificar qual é a segunda ferramenta chamada de "ChatGPT" na aula "Usando Skills" (transcrição ambígua; possivelmente o app desktop com Codex — não verificado).
- Causa do não recarregamento de Skills no `/` do Claude Code (dois relatos: Ferramentas Agênticas e Usando Skills).
- Deep Learning: nenhuma fonte em `raw/` define o termo; buscar material sobre como o treinamento ajusta os pesos e sobre a taxonomia IA ⊃ aprendizado de máquina ⊃ deep learning — ver [conceito](./concepts/deep-learning.md).
- Curso Profissional AI — Agentes: ingerir as aulas práticas seguintes (primeiro MCP prático, projetos) e a aula IA-14, hoje só com título e URL (ver [Criando Skill](./sources/2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md), [SDD](./sources/2026-11-07_source-agentes-ia-sdd.md), [MCP](./sources/2026-11-08_source-agentes-ia-mcp.md), [Skill × MCP](./sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md)).
- Codex recarrega Skills sozinho? As aulas "Criando Skill" e "Skill com Código" se contradizem.
- Segurança de MCPs de catálogos e de Skills de terceiros com scripts: o curso só recomenda verificar a procedência.
- Home Repo: como Matt Pocock organiza a wiki dentro do repo (vídeo prometido) e se este repositório deve virar home repo — ver [conceito](./concepts/home-repo.md).
- Matt Pocock (live de abr/2026, projeto do zero): o repositório **Slopwatch** (`repos/ai/slopwatch`) ficou público e teve continuidade? Saiu o vídeo prometido com a implementação? Conferir também a afirmação de que o modo `xhigh` se tornou o padrão do Claude Code (abr/2026, uma fonte só) — ver [resumo](./sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md).
- **Pi** (agente de código de Mario Zechner): aparece na live como um dos cinco agentes principais e o único que produz ramificações reais de turn. Candidato a página de entidade, mas **falta fonte em `raw/`** — a identificação na ingestão de 2026-11-15 veio de busca na web. Buscar material primário (site/repo/doc) antes de criar a página.
- Três correções de legenda marcadas como prováveis, não certas, na live de abr/2026: `GitHub copilot setup` → GitHub Desktop, `Get all login` → `gh auth login`, `miday` → mid-May; e a sigla "CLCO course" → "Claude Code course". Conferir no vídeo se forem sustentar afirmação na wiki.
- Tensão em aberto sobre **memória de agente de longo prazo**: Matt a chama de "má ideia" em abr/2026 (prefere ADRs + DDD mínimo), mas a skill beta `chief-of-staff` dele (nov/2026) prescreve memória em wiki Markdown com ingest/query/lint. Interessa diretamente a [esta wiki como home repo](./syntheses/2026-11-12_home-repo-nesta-wiki.md) — ver [live](./sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md) e [repositório de skills](./sources/2026-11-14_source-matt-pocock-repo-skills.md).
- Matt Pocock (vídeo sobre tokens, set/2025): conferir no vídeo a conta de custo falada (legenda ruidosa, correções só prováveis); explicar os 11 tokens de entrada do Claude 3.5 Haiku para "hello world" (hipótese não verificada: overhead de formatação); medir a afirmação de que linguagens comuns (JavaScript) gastam menos tokens que raras (Haskell) — ver [resumo](./sources/2025-09-19_source-matt-pocock-tokens-llm.md).
- Matt Pocock (entrevista ao The Pragmatic Engineer): localizar as skills Wayfinder e "grill with docs" e conferir os números citados (~230 mil estrelas, ~1,2 milhão de views); trechos duvidosos da legenda ("Sandals", "Lauren", "Peter break", "Opus 5") — ver [resumo](./sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md).
- Uncle Bob (live com Matt Pocock): as ferramentas dele (CRAP, mutation tester, harness, visualizador de arquitetura) não estão publicadas; verificar se há versão aberta para TypeScript, e se CRAP/teste de mutação melhoram agentes além do relato dele; limiares CRAP 4/6/8 sem dados — ver [resumo](./sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) e [Verificação determinística](./concepts/verificacao-deterministica.md).
- Posições conflitantes sobre SDD e TDD (Bob, Matt, curso Profissional AI): sem experimento comparável na wiki — ver [SDD](./concepts/spec-driven-development.md) e [TDD](./concepts/tdd.md).
- Artigo acadêmico sobre a skill `retro` de Matt Pocock: ler e comparar com a posição dele (humano no loop) — ver [shorts](./sources/2026-07-16_source-matt-pocock-shorts.md).
- Limite de passos por spec (SDD) antes do context rot: a anedota de 150–200 passos não é evidência.
- Projeto DDD + Express (decisões vindas só da conversa com LLM): qual direção o projeto adotou entre `restore()` e `tryCreate()` (a conversa sugere as duas) — ver [DDD](./concepts/ddd.md).
- Verificar no livro de Eric Evans a distinção criar × reconstituir atribuída a ele na conversa — ver [DDD](./concepts/ddd.md).
- Verificar na documentação do Node se `crypto.randomUUIDv7()` existe e a partir de qual versão — ver [Objeto de Valor](./concepts/objeto-de-valor.md).
- **Qual ferramenta tem o parâmetro `max steps` citado por Matt Pocock (out/2025)?** A legenda diz "the ADK". Pode ser o AI SDK (`maxSteps`, hoje substituído por `stopWhen: stepCountIs(n)` segundo o relatório de correção, não verificado) ou o Google ADK. Conferir no vídeo. Fonte: [resumo](./sources/2025-10-08_source-matt-pocock-agentes-workflows.md).
- **O "token especial de stop" descrito por Matt Pocock corresponde a quê no mecanismo real?** Pode ser o token de fim de turno do modelo, o `stop_reason` da API ou a ausência de tool calls. A fonte simplifica e não explica. Fonte: [resumo](./sources/2025-10-08_source-matt-pocock-agentes-workflows.md).
- **AgentKit (OpenAI)**: o anúncio de out/2025 foi atualizado e, segundo o relatório de correção, Agent Builder e Evals estão em descontinuação desde 2026-06-03. Não verificado; só interessa se a wiki voltar ao produto.
- **Data do artigo "Building Effective Agents" (Anthropic)**: dez/2024 segundo Matt Pocock, não conferida.
- **Qual modelo tinha "2 milhões de tokens" no models.dev no vídeo de Matt Pocock (out/2025)?** Pela sequência, Gemini 2.5 Pro, mas o modelo saiu com 1 milhão (2M era anúncio futuro, segundo o relatório de correção, não verificado). Conferir no vídeo. Fonte: [resumo](./sources/2025-10-22_source-matt-pocock-janela-de-contexto.md).
- **Lost in the middle tem medição de referência?** Matt (out/2025) e Bob (ago/2026) descrevem o efeito sem citar estudo; Matt chama o próprio gráfico de "muito pouco científico". Procurar a fonte primária do termo e se o efeito persiste em modelos atuais. Ver [Engenharia de Contexto](./concepts/engenharia-de-contexto.md#smart-zone-vs-dumb-zone).
- **O Claude Code passou a expor tokens usados para a status line depois de out/2025?** Matt Pocock dizia que não (e que o Cursor fazia isso bem); o curso freeCodeCamp (ago/2026) mostra status line com tokens, mas como customização do instrutor. Conferir na documentação oficial. Fonte: [resumo](./sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md).
- **Qual o comando exato para retomar a conversa após sair?** A legenda diz "Claude continue" (`Não resolvido`); provável `claude --continue`. Conferir no vídeo ou na documentação. Fonte: [resumo](./sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md).
- **O artigo *Effective harnesses for long-running agents* (Anthropic, nov/2025) recomenda mesmo o `progress.txt` e o PRD em JSON com flag `passes`?** Matt Pocock afirma isso no vídeo do Ralph (jan/2026), de segunda mão. Conferir no artigo antes de citar como recomendação da Anthropic. Fonte: [resumo](./sources/2026-01-05_source-matt-pocock-ralph-wiggum.md); ver [Laço Ralph](./concepts/ralph-loop.md).
- **Data de origem da técnica Ralph Wiggum (Geoffrey Huntley)**: o vídeo diz "14th of July" sem ano (provável 2025); há fontes que situam a origem em maio de 2025. Não confirmado na fonte primária. Fonte: [resumo](./sources/2026-01-05_source-matt-pocock-ralph-wiggum.md).
- **Plugin oficial Ralph Wiggum para Claude Code** (dez/2025, baseado em stop hooks, segundo o relatório de correção): existe e como se compara ao laço bash puro? Não verificado. Ver [Laço Ralph](./concepts/ralph-loop.md).
- **Como o laço Ralph evoluiu de PRD em JSON + `progress.txt` (jan/2026) para issues locais + últimos 5 commits + Sandcastle (abr/2026)?** Candidato: ingerir `2026-03-03_the-7-phases-of-ai-driven-development`. Ver [Laço Ralph](./concepts/ralph-loop.md).
- **MCPs de navegador para agentes**: Dev Browser e Playwriter são de fato mais econômicos em contexto que Playwright MCP e Chrome DevTools MCP? Só há relatos no X repassados por Matt Pocock (jan/2026), sem teste dele. Fonte: [resumo](./sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md); ver [MCP](./concepts/mcp.md).
- **Feedback visual no laço AFK**: quanto um navegador plugado melhora o laço Ralph em front-end e quanto custa em tokens por iteração (screenshots)? Matt relata "melhora enorme" sem medida. Fonte: [resumo](./sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md); ver [Laço Ralph](./concepts/ralph-loop.md).
- **Extensão de Chrome do Claude no WSL**: continua sem suporte? Afirmação de Matt Pocock datada de jan/2026, não verificada. Ver [Claude Code](./entities/claude-code.md).
- **Candidato a conceito "feedback loops para agentes"** (textual × visual, ad hoc × determinístico), unificando [TDD](./concepts/tdd.md), [Laço Ralph](./concepts/ralph-loop.md), [Verificação determinística](./concepts/verificacao-deterministica.md) e o [vídeo sobre front-end](./sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): adiado até haver fonte de outro autor além de Matt Pocock e Uncle Bob. **Atualização (fev/2026)**: no [vídeo sobre hooks](./sources/2026-02-25_source-matt-pocock-hooks-cli.md) Matt usa o termo explicitamente para hooks e regras de ESLint; reforça o candidato, mas ainda é o mesmo autor.
- **Onde ficam as regras de plano de Matt Pocock?** No vídeo sobre plan mode (jan/2026) ele cita o `CLAUDE.md` e, no fim, um `agents.md` (correção só `Provável`); em out/2025 estavam na memória do usuário (`/memory`). Em fev/2026 ([Never Run claude /init](./sources/2026-02-24_source-matt-pocock-never-run-claude-init.md)) ele diz que o `CLAUDE.md` dele tem uma linha só e que a regra de concisão caberia melhor numa skill, que ele ainda não usa. Conferir o link indicado por ele. Fonte: [resumo](./sources/2026-01-15_source-matt-pocock-plan-mode.md); ver [Rules e Skills](./concepts/rules-e-skills.md).
- **O sub agente Explore do Claude Code usa o Haiku 4.5 por padrão?** Afirmação de Matt Pocock (jan/2026), não verificada. Conferir na documentação. Na sessão de fev/2026 ([Never Run claude /init](./sources/2026-02-24_source-matt-pocock-never-run-claude-init.md)) o Explore rodou em Sonnet 4.6; segundo o relatório da correção desse vídeo, a documentação atual diz que o Explore herda o modelo da conversa principal (não verificado a fundo). Fonte: [resumo](./sources/2026-01-15_source-matt-pocock-plan-mode.md); ver [Claude Code](./entities/claude-code.md).
- ***Instruction budget***: Matt Pocock (jan/2026) prometeu um vídeo próprio sobre a heurística; procurar se foi publicado e se há base além dela. Fonte: [resumo](./sources/2026-01-15_source-matt-pocock-plan-mode.md). **Atualização (fev/2026)**: no vídeo [Never Run claude /init](./sources/2026-02-24_source-matt-pocock-never-run-claude-init.md) ele dá números — ~300–400 instruções, até ~500 em modelos maiores —, ainda sem fonte; resta saber de onde vêm. No dia seguinte ([hooks e CLI](./sources/2026-02-25_source-matt-pocock-hooks-cli.md)) fala em "uns 500".
- **O exit code 2 num hook `PreToolUse` bloqueia de forma confiável?** Demonstrado por Matt Pocock (fev/2026) para `npm`; há relatos em issues do claude-code de casos em que não bloqueou, conhecidos só pelo relatório da correção. Conferir na documentação e nas issues. Também falta capturar o artigo com o prompt de conversão de `CLAUDE.md` em hooks, linkado no vídeo. Fonte: [resumo](./sources/2026-02-25_source-matt-pocock-hooks-cli.md); ver [Claude Code](./entities/claude-code.md).
- **Artigo *Evaluating AGENTS.md* (arXiv 2602.11988)**: candidato a ingestão. Matt Pocock (fev/2026) o cita em paráfrase; os números de que arquivos de contexto gerados por LLM reduzem levemente a taxa de sucesso (0,5–2%) e aumentam o custo em mais de 20%, e de que os escritos por humanos ajudam pouco (~4%), estão na wiki só de segunda mão (relatório da correção). Fonte: [resumo](./sources/2026-02-24_source-matt-pocock-never-run-claude-init.md); ver [Engenharia de Contexto](./concepts/engenharia-de-contexto.md).
- **No plan mode, uma tentativa de escrita "deve dar erro"** (Matt Pocock, jan/2026): confirmar o comportamento real do Claude Code. Fonte: [resumo](./sources/2026-01-15_source-matt-pocock-plan-mode.md).
- **`claude --worktree` pode fazer push para main?** Matt Pocock (fev/2026) relata commit "em main" e um branch `worktree-<nome>` rastreando `origin/main`, cujo `git push` sem argumentos não criou o branch remoto; o próprio vídeo mostra o branch `worktree-<nome>`, e o primeiro `git status` pode ter rodado no diretório principal. Conferir na documentação (code.claude.com/docs/en/worktrees) e no comportamento de upstream/`push.default` do git. Fonte: [resumo](./sources/2026-02-21_source-matt-pocock-claude-worktree.md); ver [Claude Code](./entities/claude-code.md).
- **Subagentes do Claude Code usam worktree só quando pedido?** Afirmação de Matt Pocock sobre o anúncio de fev/2026, fonte única. Conferir na documentação. Fonte: [resumo](./sources/2026-02-21_source-matt-pocock-claude-worktree.md); ver [Agentes de IA](./concepts/agentes-de-ia.md).

### DDD e Arquitetura Limpa (consolidadas em 2026-11-12, pedido do lint de 2026-11-04)

- CQS prático: a interface `usuario.queries.ts` foi mencionada na imersão, mas não implementada — ver [Arquitetura Limpa](./concepts/arquitetura-limpa.md). Relacionado: CQRS ainda não tem página própria (está espalhado em [DDD](./concepts/ddd.md) e [Agregado](./concepts/agregado.md)).
- Mapeamento entidade ↔ banco: a imersão não mostra a conversão de VOs com Prisma; o projeto Express decidiu por um Mapper `toDomain`/`toPersistence` (só na conversa com LLM) — ver [Arquitetura Limpa](./concepts/arquitetura-limpa.md) e [Objeto de Valor](./concepts/objeto-de-valor.md).
- Presenters/DTOs de resposta HTTP e `CriptografiaProvider` concreto com bcrypt ainda não demonstrados na imersão.
- `Validator` com Fluent API genérico e reutilizável entre VOs — ver [DDD](./concepts/ddd.md) e [Objeto de Valor](./concepts/objeto-de-valor.md).
- Relacionamento entre agregados (ex.: User → Group) sem acoplamento — ver [Agregado](./concepts/agregado.md).
- Mapa de contextos e integração `auth` × `financeiro` (API, eventos ou shared kernel) — ver [Contexto Delimitado](./concepts/contexto-delimitado.md).
- Limites de modelos ricos com ORMs (Prisma, TypeORM) e Linguagem Ubíqua com equipe e cliente em idiomas diferentes — ver [DDD](./concepts/ddd.md).

## Notas

- Promova questões não resolvidas importantes de novos resumos de fonte para esta página
- Revise esta página durante passes de verificação
