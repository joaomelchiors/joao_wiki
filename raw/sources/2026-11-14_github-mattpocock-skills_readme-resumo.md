# mattpocock/skills (captura de 2026-11-14)

Fonte: https://github.com/mattpocock/skills
Captura: página lida com WebFetch em 2026-11-14; o texto abaixo é o resumo em português devolvido pela ferramenta (não é cópia literal do README). Números de estrelas/forks valem para essa data.

**Descrição:** "Skills for Real Engineers. Straight from my .agents directory." Site oficial: aihero.dev/skills. Conjunto de skills de agentes de código usadas no dia a dia pelo autor, pequenas, adaptáveis e combináveis, que funcionam com qualquer modelo.

## Estrutura (raiz)

`.agents/`, `.changeset/`, `.claude-plugin/`, `.github/`, `.out-of-scope/`, `docs/`, `scripts/`, `skills/`; arquivos `AGENTS.md`, `CHANGELOG.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `GLOSSARY.md`, `LICENSE`, `README.md`, `SCOPE.md`, `package.json`.

## Skills (27)

Skills user-invoked só rodam quando você digita o comando; model-invoked podem ser acionadas pelo agente.

### Engineering, user-invoked (11)
- ask-matt: roteador que indica qual skill ou fluxo usar
- grill-with-docs: entrevista que também atualiza glossário e ADRs
- triage: move issues por uma máquina de estados de triagem
- improve-codebase-architecture: procura oportunidades de aprofundar módulos; relatório HTML
- setup-matt-pocock-skills: configura o repo (tracker, labels, layout de docs); uma vez por repo
- to-spec: transforma a conversa em spec e publica no issue tracker
- to-tickets: quebra plano/spec em tickets verticais com dependências
- implement: constrói o trabalho com TDD e code-review antes do commit
- implement-spec: implementa uma spec inteira em uma branch, com subagentes em paralelo
- wayfinder: planeja trabalhos grandes como mapa de tickets de decisão
- retro: sugere melhorias no ambiente do agente após a sessão

### Engineering, model-invoked (9)
- prototype: protótipos descartáveis para responder pergunta de design
- diagnosing-bugs: loop disciplinado de diagnóstico de bugs e regressões de performance
- research: investiga em fontes primárias e salva Markdown com citações
- tdd: red-green-refactor
- domain-modeling: modelo de domínio, glossário e ADRs
- codebase-design: vocabulário e disciplina para módulos profundos
- code-review: revisão do diff em dois eixos (padrões do repo e aderência à spec)
- pr: estrutura do corpo de um pull request
- wizard: assistente interativo em bash para passos que só um humano executa

### Productivity, user-invoked (5)
- grill-me: entrevista intensa sobre um plano até resolver todos os ramos do design
- handoff: compacta a conversa em documento para outro agente continuar
- teach: ensina um conceito ao longo de várias sessões, com o diretório como workspace
- to-questionnaire: transforma uma decisão em questionário em Markdown
- wait-what: re-explica uma mensagem confusa usando o vocabulário do glossário

### Productivity, model-invoked (2)
- grilling: primitiva de entrevista reutilizada por outras skills
- writing-for-agents: guia para escrever skills, AGENTS.md/CLAUDE.md e docs para agentes

## Instalação

Uma opção por agente (instalar duas gera duplicatas):
- Claude Code: `claude plugin install mattpocock-skills@claude-plugins-official` (atualiza sozinho)
- Codex: `codex plugin marketplace add mattpocock/skills` e `codex plugin add mattpocock-skills@mattpocock`
- GitHub Copilot (CLI e VS Code): `copilot plugin marketplace add mattpocock/skills` e `copilot plugin install mattpocock-skills@mattpocock`; configurar `extraKnownMarketplaces` em `~/.copilot/settings.json`; no VS Code, "Chat: Install Plugin From Source"
- Gemini CLI (manual): `gemini skills install` com `--path skills/engineering` e `--path skills/productivity`
- Outros (Cursor, OpenCode, Devin, Windsurf, Amp, Pi; manual): `npx skills@latest add mattpocock/skills -a <agente>`; atualizar com `npx skills@latest update`

Depois: rodar `/setup-matt-pocock-skills` uma vez por repo; o README recomenda `/grill-me` ou `/grill-with-docs` antes de cada mudança.

## Licença e métricas (2026-11-14)

MIT. 324,5 mil estrelas, 27,2 mil forks, 1,7 mil watchers, 221 issues abertas, 25 PRs, 555 commits no `main`.
