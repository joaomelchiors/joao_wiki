---
title: 'Glossário de nomes verificados em transcrições'
descricao: 'Nomes próprios verificados em fonte externa na rotina de correção (§16), com as grafias erradas da legenda automática; semeado com OpenClaw, Sandcastle, Pi e Porffor.'
type: maintenance
status: active
created: 2026-11-15
updated: 2026-11-15
tags: [transcricao, correcao, glossario]
source_files:
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
related_pages:
  - ../log.md
  - ../index.md
---

# Glossário de nomes verificados em transcrições

## Escopo

Apoio à rotina de correção de transcrição (`CLAUDE.md` §16). Reúne os nomes próprios **já confirmados em fonte externa**, com as grafias erradas que a legenda automática produziu. Serve para que cada correção reaproveite verificações anteriores em vez de refazer a busca.

Regras de uso:

- Só entra aqui nome verificado em fonte externa (documentação, repositório, página oficial). Correção feita só por contexto vai para o campo `Prováveis` do arquivo corrigido, **não** para este glossário.
- Uma grafia errada listada aqui não autoriza substituição cega: confira se o contexto do trecho é o mesmo (ex.: `pi` só vira **Pi** quando se refere ao agente).
- Novas entradas são acrescentadas pela própria rodada de correção, ao final, com os nomes que ela verificou. As rodadas são sequenciais, então não há duas escrevendo ao mesmo tempo.
- O cabeçalho de cada arquivo corrigido continua obrigado a listar seus próprios `Verificados` (§16); este glossário não substitui esse campo.

## Nomes verificados

| Grafia correta | Grafias erradas vistas no bruto | O que é | Fonte da verificação | Visto em |
| --- | --- | --- | --- | --- |
| OpenClaw | `open claw` | Agente open-source de Peter Steinberger | openclaw.ai | live K-mA3MZ_EzU |
| Sandcastle | `San Castle`, `Sand Castle`, `Sound Castle`, `Sencastle` | Ferramenta de Matt Pocock | repositório `mattpocock/sandcastle`; pacote `@ai-hero/sandcastle` | live K-mA3MZ_EzU |
| Pi | `pi`, `PI` | Agente de Mario Zechner (badlogic) | pi.dev | live K-mA3MZ_EzU |
| Porffor | `P4` | Compilador AOT de JavaScript para binário | github.com/CanadaHonk/porffor | live K-mA3MZ_EzU |
| tiktoken / js-tiktoken | `tick token`, `JS tick token` | Tokenizador da OpenAI e sua implementação em JavaScript | npmjs.com/package/js-tiktoken | vídeo nKSk_TiR8YA |
| o200k_base | `O200K base`, `0200K` | Codificação (vocabulário) do tiktoken usada pelo GPT-4o | tabela model-to-encoding do tiktoken; README do js-tiktoken | vídeo nKSk_TiR8YA |
| GPT-4o | `GPT40` | Modelo da OpenAI | tabela model-to-encoding do tiktoken (`gpt-4o` → `o200k_base`) | vídeo nKSk_TiR8YA |
| AI SDK | `ASDK` | SDK de TypeScript mantido pela Vercel | aihero.dev/vercel-ai-sdk-tutorial | vídeo nKSk_TiR8YA |
| Claude 3.5 Haiku | `claw 3.5 haik coup` | Modelo da Anthropic | openrouter.ai/anthropic/claude-3.5-haiku | vídeo nKSk_TiR8YA |
| Gemini 2.0 Flash-Lite | `Gemini 2.0 flashlight` | Modelo do Google | ai.google.dev/gemini-api/docs/models/gemini-2.0-flash-lite | vídeo nKSk_TiR8YA |
| Lewis Carroll / frabjous | `Louiswis Carol`, `Lewis Carol`; `fragous`, `Frajus`, `Fragus` | Autor de *Jabberwocky*; palavra inventada ("O frabjous day") | poetryarchive.org/poem/jabberwocky | vídeo nKSk_TiR8YA |
| AgentKit / agentic UIs | `Agent Kit`; `aic UIs` | Kit de agentes da OpenAI (Agent Builder, ChatKit); expressão do anúncio "embed agentic UIs faster" | openai.com/index/introducing-agentkit | vídeo AtYtuVTZCQU |
| tldraw | `TL Draw` | Canvas infinito / whiteboard e SDK React | tldraw.dev | vídeo AtYtuVTZCQU |
| Claude Code | `clawed code`, `claw code`, `Clo code` | Ferramenta de código agêntica da Anthropic | anthropic.com/product/claude-code | vídeo AtYtuVTZCQU |
| Ctrl+O (Claude Code) | `control zero` | Atalho do Claude Code para ver o resumo completo após `/compact` ("ctrl+o to see full summary") | claudeissues.com, issue 82509 | vídeo -uW5-TaVXu4 |
| AI Hero | `AI hero` | Plataforma de cursos de IA de Matt Pocock | aihero.dev | vídeo kZ-zzHVUrO4 |
| Changesets | `change sets` | Ferramenta de versionamento e changelog com foco em monorepos | github.com/changesets/changesets | vídeo kZ-zzHVUrO4 |
| gh issue create | `GH issue create` | Comando do GitHub CLI para criar issue | cli.github.com/manual/gh_issue_create | vídeo kZ-zzHVUrO4 |
| Evalite | `Everite` | Eval runner em TypeScript de Matt Pocock, sobre Vitest | github.com/mattpocock/evalite; evalite.dev | vídeo kZ-zzHVUrO4 |
| Dev Browser | nenhuma (já correta no bruto) | Skill de navegador para agentes, de Sawyer Hood (`dev-browser`) | github.com/sawyerhood/dev-browser | vídeo pSritFeoYFo |
| Playwriter | nenhuma (já correta no bruto) | Extensão de Chrome + MCP de remorses que controla o navegador existente via API do Playwright | github.com/remorses/playwriter | vídeo pSritFeoYFo |
| Chrome DevTools MCP | nenhuma (já correta no bruto) | Servidor MCP oficial do Chrome DevTools (ferramentas como `take_screenshot`, `evaluate_script`, `emulate`) | github.com/ChromeDevTools/chrome-devtools-mcp | vídeo pSritFeoYFo |
| Ralph Wiggum | `Ralph Wigum` | Técnica de orquestração de agentes de código em laço bash, criada por Geoffrey Huntley | dreamhost.com/blog/ralph-wiggum; devinterrupted.substack.com (entrevista com o criador) | vídeo _IK18goX4X8 |
| Geoffrey Huntley | `Jeffrey Huntley`, `Jeffrey Hunt's` | Criador da técnica Ralph Wiggum | devinterrupted.substack.com; ghuntley.com | vídeo _IK18goX4X8 |
| OpenCode | `open code` | Agente de código open-source para terminal | opencode.ai | vídeo _IK18goX4X8 |
| Codex (CLI) | `codeex` | Agente de código da OpenAI para terminal | documentação de terceiros do Codex CLI (codex.danielvaughan.com) | vídeo _IK18goX4X8 |
| Playwright (MCP) | `Playright's` | Servidor MCP de automação de navegador `@playwright/mcp` | README do pacote `@playwright/mcp` | vídeo _IK18goX4X8 |
| claude --worktree / .claude/worktrees/ | `clawed workree`, `atclaude/worktrees` | Flag do Claude Code que inicia a sessão numa git worktree isolada, criada em `.claude/worktrees/` | code.claude.com/docs/en/worktrees | vídeo yv8VZpov8bk |
| git worktree | `get workree`, `git workree`, `workree` | Comando do Git para múltiplas árvores de trabalho (`add`, `remove`) | git-scm.com/docs/git-worktree | vídeo yv8VZpov8bk |
| Simon Willison | `Sam Williams`, `Sam` | Autor do weblog simonwillison.net e do guia *Agentic Engineering Patterns* (capítulo "Red/green TDD", fev/2026) | simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/ | vídeo hYZdIwFIy-c |
| CLAUDE.md | `claw.md` | Arquivo de memória/instruções de projeto do Claude Code | code.claude.com/docs/en/memory | vídeo WNx-s-RxVxk |
| Claude Haiku 4.5 | `haik coup 4.5` | Modelo pequeno da Anthropic (out. 2025) | anúncio da Anthropic, coberto por thenewstack.io e computerworld.com | vídeo WNx-s-RxVxk |
| Claude Opus 4.5 | `opus 4.5` | Modelo de ponta da Anthropic (nov. 2025) | anúncio da Anthropic, coberto por techcrunch.com e decrypt.co | vídeo WNx-s-RxVxk |
| Wispr Flow | `Whisper Flow` | App de ditado por voz com IA | wisprflow.ai | vídeo WNx-s-RxVxk |
| superwhisper | `Super Whisper` | App de ditado por voz com IA, processamento local | superwhisper.com | vídeo WNx-s-RxVxk |
| TanStack Query (React Query) | `tenstack` | Biblioteca de busca e cache de dados assíncronos (pacote `@tanstack/react-query`) | tanstack.com/query; github.com/TanStack/query | vídeo 3CSi8QAoN-s |
| A Philosophy of Software Design | `a philosophy of software design` (caixa) | Livro de John Ousterhout que introduz "deep modules" | henrikwarne.com (resenha); sive.rs/book/PoSD | vídeo uC44zFz7JSM |
| Effect | `effect` | Biblioteca TypeScript para apps robustas (erros tipados, concorrência estruturada) | effect.website; github.com/Effect-TS/effect | vídeo uC44zFz7JSM |
| AGENTS.md | `agents.mmd`, `agent.mmd` | Formato aberto de arquivo de instruções para agentes de código | agents.md | vídeo 9tmsq-Gvx6g |
| Evaluating AGENTS.md (artigo) | `evaluating agents.mmd are repository level context files helpful for coding agents` | Artigo de Gloaguen et al. (ETH Zurich / LogicStar.ai), arXiv 2602.11988, ICLR 2026 | arxiv.org/abs/2602.11988 | vídeo 9tmsq-Gvx6g |
| /init (Claude Code) | `claude in it`, `Claude in it`; `codebased documentation` | Comando do Claude Code que inicializa um CLAUDE.md "with codebase documentation" | descrição do comando no Claude Code; claude.com/blog/using-claude-md-files | vídeo 9tmsq-Gvx6g |
| Sonnet 4.6 | `sonet 4.6` | Modelo da Anthropic lançado em 2026-02-17 (`claude-sonnet-4-6`) | anúncio da Anthropic (cobertura: thenewstack.io/claude-sonnet-46-launch) | vídeo 9tmsq-Gvx6g |
| pnpm | `pmpm` | Gerenciador de pacotes JavaScript | pnpm.io | vídeo 9tmsq-Gvx6g |
| GSD (Get Shit Done) | nenhuma (já correta no bruto) | Framework open-source de spec-driven development para Claude Code e outros agentes | repositório gsd-build/get-shit-done (via augmentcode.com, mintlify.com/gsd-build/get-shit-done) | vídeo Ah9p7v7nJWg |
| Spec Kit | nenhuma (já correta no bruto) | Toolkit open-source do GitHub para spec-driven development (CLI `specify`) | github.github.com/spec-kit; github.blog | vídeo Ah9p7v7nJWg |
| The Design of Design | `the design of design` (caixa) | Livro de Frederick P. Brooks (Addison-Wesley, 2010); cap. 2 apresenta a árvore de design (design tree) | cs.unc.edu/~brooks/DesignofDesign; pearson.com | vídeo EJyuu6zlQCg |
| Cucumber | `cucumber` (caixa) | Ferramenta de BDD; especificações escritas em Gherkin (Given/When/Then) | referência Gherkin do Cucumber (espelho em cran r-project); Wikipedia "Cucumber (software)" | vídeo EJyuu6zlQCg |
| Thariq | `Tarik` | Integrante da equipe do Claude Code que anunciou a prévia do novo `/init` conversacional (`CLAUDE_CODE_NEW_INIT=1`) | cobertura de terceiros: medium.com/@AdithyaGiridharan; gentic.news | vídeo llwTBpPqo9A |
| useEffectReducer / use-effect-reducer | `useEffect reducer`, `use effect reducer` | Hook React de David Khourshid (useReducer com efeitos via `exec`); pacote npm `use-effect-reducer` | github.com/davidkpiano/useEffectReducer; npmjs.com/package/use-effect-reducer | vídeo llwTBpPqo9A |
| A comprehensive taxonomy of hallucinations in Large Language Models (artigo) | nenhuma (já correta no bruto, salvo caixa) | Relatório de Manuel Cossio (arXiv 2508.01781, ago/2025); distingue alucinação intrínseca e extrínseca | arxiv.org/abs/2508.01781 | vídeo 9VNG0h4pLh0 |
| Why Language Models Hallucinate (artigo) | nenhuma (já correta no bruto) | Artigo da OpenAI (Kalai, Nachum, Vempala, Zhang; arXiv 2509.04664, set/2025): treino e avaliação recompensam chutar em vez de admitir incerteza | arxiv.org/abs/2509.04664; openai.com/index/why-language-models-hallucinate | vídeo 9VNG0h4pLh0 |
| LiveBench | nenhuma (já correta no bruto) | Benchmark/leaderboard de LLMs com questões atualizadas para limitar contaminação (ICLR 2025) | livebench.ai; github.com/LiveBench/LiveBench | vídeo 9VNG0h4pLh0 |
| Jake Moffatt (Moffatt v. Air Canada) | nenhuma (já correta no bruto) | Passageiro que venceu a Air Canada por informação errada do chatbot sobre tarifa de luto (2024 BCCRT 149, fev/2024) | cbc.ca (reportagem); americanbar.org; decisions.civilresolutionbc.ca | vídeo 9VNG0h4pLh0 |
| to-prd / to-issues | `two PRD`, `two issues` | Skills de Matt Pocock: transformar a conversa em PRD (issue no GitHub) e quebrar plano/PRD em issues de fatia vertical | skills.sh/mattpocock/skills; github.com/pipedrive/mattpocock-skills (espelho de mattpocock/skills) | vídeo 3MP8D-mdheA |
| Vitest | `V test` | Framework de testes para JavaScript/TypeScript | `package.json` do repo `mattpocock/course-video-manager` (`"test": "vitest"`, `vitest ^3`) | vídeo hX7yG1KVYhI |
| React Router | `React router` | Framework/roteador React (v7) | `package.json` do repo `mattpocock/course-video-manager` (`react-router ^7.11.0`); reactrouter.com | vídeo hX7yG1KVYhI |
| Drizzle (ORM) | `drizzle` | ORM TypeScript (`drizzle-orm`, `drizzle-kit`) | `package.json` do repo `mattpocock/course-video-manager`; orm.drizzle.team | vídeo hX7yG1KVYhI |
| CourseWriteService / `course-write-service.test.ts` / `course-write-e2e.test.ts` | `course right service`, `course right service.test.ts`, `course right e2e.test.ts` | Serviço da camada de escrita do course-video-manager e seus arquivos de teste | histórico do repo `mattpocock/course-video-manager` no GitHub (commit do Issue #489; árvore em 2026-03-18) | vídeo hX7yG1KVYhI |
| course-video-manager | nenhuma | Aplicação interna de Matt Pocock para gerenciar vídeos de cursos | github.com/mattpocock/course-video-manager | vídeo hX7yG1KVYhI |
| AskUserQuestion (Claude Code) | `ask user question tool` | Ferramenta nativa do Claude Code para perguntas estruturadas ao usuário | atcyrus.com/stories/claude-code-ask-user-question-tool-guide; buildermethods.com | vídeo hX7yG1KVYhI |
| .out-of-scope/ | `dot out of scope` | Diretório da skill triage de Matt Pocock com registros de pedidos de melhoria rejeitados (consultado antes de recomendar um estado) | skills.sh/mattpocock/skills/triage; aihero.dev/skills-triage.md | vídeo MzWIIlx0Gpc |
| @ai-hero/sandcastle / sandcastle init | `AI hero Sandcastle`; `Sandcastle in it` | Pacote npm do Sandcastle e seu comando de scaffold (`npx @ai-hero/sandcastle init`, cria `.sandcastle/`) | aihero.dev/sandcastle/getting-started; docs/guide/init.md em github.com/mattpocock/sandcastle | vídeo E5-QK3CDVQM |
| mktemp -t handoff-XXXXXX.md | `mic temp t handoff` | Comando que a skill handoff de Matt Pocock mandava usar para gerar o caminho do documento de handoff no diretório temporário (versões posteriores do upstream deixaram de usar `mktemp`) | espelhos do SKILL.md: skills.sh/vinvcn/mattpocock-skills-zh-cn/handoff; skills.sh/mattpocock/skills/handoff/security/agent-trust-hub | vídeo DNqsMXH6Eog |
| claude -p | `Claude P`, `Claude-P` | Modo programático (não interativo) do CLI do Claude Code; citado no anúncio de mai/2026 do crédito mensal para uso programático | the-decoder.com; theregister.com (cobertura do anúncio) | vídeo lNOQaakmyDU |
| Claude Cowork | `Claude co-work`, `Co-work` | Produto agêntico da Anthropic para trabalho de escritório (desktop, acesso a pastas e conectores) | claude.com/product/cowork | vídeo lNOQaakmyDU |
| Conductor | nenhuma (já correta no bruto) | App de Mac (Melty Labs) que roda agentes de código em paralelo em git worktrees isoladas | conductor.build | vídeo lNOQaakmyDU |
| Garry Tan / gstack | `Gary Tan's G stack` | CEO da Y Combinator e seu pacote open-source de skills do Claude Code (`garrytan/gstack`) | github.com/garrytan/gstack (cobertura: augmentcode.com) | vídeo UzMNBN6xLLA |
| Shape Up / Ryan Singer | nenhuma (já correta no bruto) | Livro de Ryan Singer (Basecamp) sobre shaping e ciclos de seis semanas | basecamp.com/shapeup | vídeo UzMNBN6xLLA |
| Cursor (thermo-nuclear-code-quality-review) | `cursor` (caixa) | Editor/agente de código; publica a skill de revisão `thermo-nuclear-code-quality-review` no repositório `cursor/plugins` | tessl.io/registry/skills/github/cursor/plugins/thermo-nuclear-code-quality-review | vídeo mh5XZ-L5SFQ |
| SKILL.md | `skill.md` | Arquivo único que define uma skill de agente | espelhos do SKILL.md da skill do Cursor (claudskills.com; cdn.jsdelivr.net) | vídeo mh5XZ-L5SFQ |
| execSync / Effect.sync | `Exec sync inside effect. sync` | `child_process.execSync` do Node e construtor de efeito síncrono da biblioteca Effect (para operação que não falha) | nodejs.org/api/child_process.html; effect.website/docs | vídeo mh5XZ-L5SFQ |
| improve-codebase-architecture | `improved code base architecture` | Skill de Matt Pocock (`mattpocock/skills`) que busca oportunidades de aprofundar módulos | aihero.dev/skills-improve-codebase-architecture | vídeo mh5XZ-L5SFQ |
| mattpocock/skills | `mapper.got skills` | Repositório de skills de Matt Pocock (inclui `teach`, instalável com `npx skills add https://github.com/mattpocock/skills --skill teach`) | aihero.dev/skills-teach.md; mcpservers.org/agent-skills/mattpocock/teach | vídeo s5T5oQJcJ6U |
| Claude Opus 4.8 | nenhuma (já correta no bruto: `Opus 4.8`) | Modelo de ponta da Anthropic lançado em 2026-05-28 | anthropic.com/claude/opus; techcrunch.com (2026-05-28) | vídeo s5T5oQJcJ6U |
| to-spec / to-tickets | `two spec`, `two tickets` | Skills de Matt Pocock que substituem to-prd / to-issues na v1.1 do repo de skills | aihero.dev/skills-to-spec; aihero.dev/skills-to-tickets; aihero.dev (changelog v1.1) | vídeo A8mokin_YOs |
| mattpocock/skills (`npx skills add mattpocock/skills`) | `Map Po skills` | Repositório de skills de Matt Pocock e o comando que o instala | listagens skills.sh e mcpservers.org (mattpocock/setup-matt-pocock-skills) | vídeo A8mokin_YOs |
| Wayfinder | nenhuma (já correta no bruto) | Skill de Matt Pocock (v1.1) que planeja trabalho grande como mapa de tickets no issue tracker | aihero.dev/skills-wayfinder | vídeo A8mokin_YOs |
| setup-matt-pocock-skills | `set up Mac Pocock skills`, `set up Mac Pocock` | Skill de Matt Pocock de configuração única por repositório (issue tracker, rótulos de triagem, docs de domínio em `docs/agents/`) | aihero.dev/skills-setup-matt-pocock-skills | vídeo M6mYodf0dJM |
| ask-matt | `ask math` | Skill roteadora de Matt Pocock que indica qual skill/fluxo usar na situação | aihero.dev/skills-ask-matt | vídeo M6mYodf0dJM |
| npx skills@latest add | `NPX skills at latest add` | Comando do CLI `skills` (Vercel, skills.sh) para instalar um repositório de skills | aihero.dev/skills-setup-matt-pocock-skills; vercel.com/blog/introducing-skills | vídeo M6mYodf0dJM |
| Vercel | `Versel` | Empresa que publica o CLI `skills` e o diretório skills.sh | vercel.com/blog/introducing-skills | vídeo M6mYodf0dJM |
| Socket | nenhuma (já correta no bruto) | Empresa de segurança de supply chain que audita skills em skills.sh | páginas `/security/socket` em skills.sh | vídeo M6mYodf0dJM |
| grill-with-docs | `grow with docs`, `grill dogs` | Skill de Matt Pocock (`mattpocock/skills`) de planejamento numa sessão só, alternativa ao Wayfinder quando não precisa de mapa | aihero.dev/skills-grill-with-docs | live 251hsWgoTPM |
| Remotion | `remotion` (caixa) | Framework para criar vídeos programaticamente em React | remotion.dev | live 251hsWgoTPM |
| herdr | `Herder`, `Herder's` | Multiplexador de terminal open-source para vários agentes de código (detecta Claude Code, Codex etc.) | tecmint.com/herdr-run-ai-coding-agents-in-linux-terminal; docs.rs/crate/herdr | live 251hsWgoTPM |
| omp (Oh My Pi) | nenhuma (já correta no bruto) | Agente de código de terminal, fork do Pi, de Can Bölük | betterstack.com/community/guides/ai/oh-my-pi-ai-coding-agent | live 251hsWgoTPM |
| openai.yaml / allow_implicit_invocation: false | `open ai.yaml`; `allow implicit invocation false` | Arquivo `agents/openai.yaml` de uma skill do Codex e a chave de `policy` que impede o Codex de invocar a skill sozinho (só via `$skill-name`) | developers.openai.com/codex/skills | vídeo gaDdrDdczO4 |
| ASD-STE100 (Simplified Technical English) | `ASD STE 100` | Norma de inglês técnico controlado da ASD (aeroespacial); usada pela skill wait-what para fixar o registro | asd-ste100.org; aihero.dev/skills-wait-what | vídeo gaDdrDdczO4 |
| wait-what / to-questionnaire / wizard / writing-for-agents | nenhuma (faladas como `Wait What`, `to questionnaire`, `wizard`, `writing for agents`) | Skills da v1.2 de mattpocock/skills; writing-for-agents substitui writing-great-skills | aihero.dev/skills-wait-what; aihero.dev/skills-to-questionnaire; skills.sh/mattpocock/skills | vídeo gaDdrDdczO4 |
| Claude Opus 5 | nenhuma (já correta no bruto: `Opus 5`) | Modelo da Anthropic lançado em 2026-07-24 (`claude-opus-5`) | axios.com (2026-07-24); venturebeat.com | vídeo gaDdrDdczO4 |

## Problemas recorrentes

Padrões de erro que se repetem entre transcrições, sem nome próprio associado. Nenhum registrado ainda.

## Prioridade

Baixa como página; alta como insumo durante os lotes de correção.
