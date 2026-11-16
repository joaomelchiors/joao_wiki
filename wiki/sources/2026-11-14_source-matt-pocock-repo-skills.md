---
title: "Repositório mattpocock/skills (GitHub)"
descricao: 'Repositório mattpocock/skills no GitHub — 27 skills promovidas, governança (SCOPE, buckets, CLAUDE.md do repo), pastas in-progress (chief-of-staff, software-factory...) e misc, renomeações confirmadas no CHANGELOG (to-prd → to-spec), instalação como plugin. Referência do autor; os `SKILL.md` têm página própria.'
type: source
status: active
created: 2026-11-14
updated: 2026-11-14
tags: ["matt-pocock", "skills", "github", "claude-code", "copilot", "plugin"]
source_files:
  - raw/sources/2026-11-14_github-mattpocock-skills_readme-resumo.md
  - raw/sources/2026-11-14_github-mattpocock-skills_in-progress-misc.md
  - raw/sources/2026-11-14_github-mattpocock-skills_changelog.md
related_pages:
  - ../entities/matt-pocock.md
  - ../concepts/ai-driven-development.md
  - ../concepts/rules-e-skills.md
  - ../concepts/skills-na-pratica.md
  - ./2026-07-16_source-matt-pocock-teach-skill.md
  - ./2026-07-16_source-matt-pocock-shorts.md
  - ./2026-11-14_source-matt-pocock-skills-skill-md.md
tipo_conteudo: referencia
captura: manual
---

# Repositório mattpocock/skills (GitHub)

**Classificação** (`tipo_conteudo: referencia`, `captura: manual`): página do repositório oficial de [Matt Pocock](../entities/matt-pocock.md) (https://github.com/mattpocock/skills), lida em 2026-11-14. É documentação do próprio autor sobre o próprio produto, então vale como descrição do que existe, não como avaliação de eficácia. **Segunda mão:** o arquivo em `raw/` guarda o resumo devolvido pela ferramenta de leitura, não o README literal; o texto dos `SKILL.md` foi lido depois e está em [mattpocock/skills — conteúdo dos SKILL.md](./2026-11-14_source-matt-pocock-skills-skill-md.md).

## Resumo

Repositório "Skills for Real Engineers. Straight from my .agents directory" (site: aihero.dev/skills; licença MIT). Reúne **27 skills** que o autor diz usar no dia a dia, pequenas, adaptáveis e combináveis, para qualquer modelo. Duas pastas em `skills/`: `engineering` e `productivity`. Distingue **user-invoked** (só rodam quando o usuário digita o comando) de **model-invoked** (o agente também pode acioná-las).

## Skills por grupo

| Grupo | Skills |
|---|---|
| Engineering, user-invoked (11) | `ask-matt` (roteador), `grill-with-docs`, `triage`, `improve-codebase-architecture`, `setup-matt-pocock-skills`, `to-spec`, `to-tickets`, `implement`, `implement-spec`, `wayfinder`, `retro` |
| Engineering, model-invoked (9) | `prototype`, `diagnosing-bugs`, `research`, `tdd`, `domain-modeling`, `codebase-design`, `code-review`, `pr`, `wizard` |
| Productivity, user-invoked (5) | `grill-me`, `handoff`, `teach`, `to-questionnaire`, `wait-what` |
| Productivity, model-invoked (2) | `grilling` (primitiva reutilizada por outras), `writing-for-agents` |

Descrição de uma linha de cada skill em `raw/sources/2026-11-14_github-mattpocock-skills_readme-resumo.md`.

## Instalação (segundo o README)

Uma opção por agente, pois duas geram duplicatas: plugin no Claude Code (`claude plugin install mattpocock-skills@claude-plugins-official`), Codex e GitHub Copilot (CLI e VS Code) via marketplace, Gemini CLI manual, e `npx skills@latest add mattpocock/skills -a <agente>` para Cursor, OpenCode, Devin, Windsurf, Amp, Pi. Depois, `/setup-matt-pocock-skills` uma vez por repo. Recomendação do autor: começar mudanças com `/grill-me` ou `/grill-with-docs`.

## Métricas (2026-11-14, valores do dia da captura)

324,5 mil estrelas e 27,2 mil forks (conferidos na API do GitHub no mesmo dia: 324.488 e 27.233), 555 commits no `main` e 221 issues abertas (estes dois só pela página).

## Governança e organização (SCOPE.md, CLAUDE.md, GLOSSARY.md)

Lidos em 2026-11-14 (texto literal no arquivo de auxiliares em `raw/`). Versão do pacote no CHANGELOG: 1.3.2.

- **Cinco buckets** em `skills/`: `engineering` e `productivity` (promovidos: entram no plugin, no README e ganham página em `docs/`), `in-progress` (beta público, fora do plugin), `misc` (congelado e sem manutenção; toda issue é fechada) e `deprecated` (vazio: skill aposentada é apagada, e o changeset nomeia a substituta).
- **SCOPE.md**: uma ideia só fica aberta se descrever uma **falha observada em sessão real** (hipóteses "seria melhor se..." não contam) e couber na filosofia (nada de opção de configuração, ramo por ferramenta ou ajuste pessoal — isso vai para o `CLAUDE.md` do usuário ou um fork). Propostas de skill nova são fechadas: "se o comportamento se compõe de skills existentes, não ganha skill nova". Rejeições viram arquivos em `.out-of-scope/` (8 conceitos rejeitados listados, como limites de perguntas e recursão de subagentes).
- **CLAUDE.md do repo** (instruções para o agente mantenedor): o router `ask-matt` deve ser re-sincronizado a cada skill adicionada, renomeada ou removida ("um router que não a menciona, ou que ainda roteia para uma morta, é um router que mente"); proibição de travessões em toda a prosa do repo; toda skill que despacha subagente deve mandar começá-lo com janela limpa (alguns harnesses, como o Codex, bifurcam a conversa por padrão, herdando o contexto que o subagente devia escapar); o repo usa as próprias skills de triagem sobre si.
- **GLOSSARY.md do repo**: resolve "issue tracker" (nunca "backlog"), "issue" (nunca "ticket", exceto decision ticket do wayfinder) e registra ambiguidades já resolvidas — o repo pratica a própria disciplina de glossário.

## Pastas in-progress e misc (lidas em 2026-11-14)

Texto literal em `raw/sources/2026-11-14_github-mattpocock-skills_in-progress-misc.md`.

**`in-progress/` (beta, instalável com `npx skills@latest add mattpocock/skills --skill=<nome>`):**

- **`chief-of-staff`**: agente de longa duração coordenando subagentes em dois trilhos (tático e estratégico), todo trabalho em subagentes para proteger o contexto. Manda manter a memória em uma **wiki de Markdown interligada com `index.md` e três operações: ingest, query e lint** — e "escrever história, não o presente" (toda afirmação datada; afirmações sobre código citam o commit; mudanças viram afirmação nova com a antiga marcada como superada). Forte paralelo com o esquema wiki-kit desta wiki (convergência independente; ver [síntese home repo](../syntheses/2026-11-12_home-repo-nesta-wiki.md)). Roda `retro` em ~1 de cada 5 sessões de subagentes.
- **`software-factory`**: vocabulário para projetar uma "fábrica de software" (agentes transformando tickets em código mergeado): task, trigger, run, runner (descartável), ticket tracker, git host, orquestrador, plataforma de observabilidade. Princípio **"start slow"**: todo trigger é acelerador, e "aceleradores sem freios fazem um canhão de slop"; os três freios são checagens automáticas, revisão automatizada e revisão humana, com throttle que abre conforme os freios ganham confiança. Acompanham 4 surveys de produtos (runners, git hosts, trackers, observabilidade; datados 2026-10, com aviso de obsolescência) e um catálogo de tasks exemplo (explore, implement, review, rework, ratchet, retro).
- **`loop-me`**: grilling com estado que produz specs de **workflows** da vida do usuário (lente de "loops": padrões recorrentes, e por isso delegáveis); vocabulário trigger/checkpoint/push right/brief; pronto quando "um agente implementador construiria sem fazer uma pergunta".
- **`claude-handoff`**: handoff + lançamento imediato de agente em segundo plano via `claude --bg`.
- **`setup-ts-deep-modules`**: instala dependency-cruiser com 4 regras (fronteira por entry points na raiz do pacote, liberdade interna, testes só pelos entry points, sem ciclos) e **prova que as regras mordem** (passa → viola de propósito → falha → reverte → passa); desencoraja barrel files.
- **`writing-fragments` / `writing-beats` / `writing-shape`**: trio de escrita explore/exploit — minerar fragmentos sem estrutura; montar artigo como jornada de **beats** estilo escolha-sua-aventura com disciplina de **grounding** (nenhum beat usa conceito não fundamentado); moldar pilha bruta em artigo parágrafo a parágrafo argumentando o formato de cada bloco.

**`misc/` (congelado):** `git-guardrails-claude-code` (hook PreToolUse que bloqueia `git push`, `reset --hard`, `clean -f` etc., script bash incluído), `migrate-to-shoehorn` (de `as` para `@total-typescript/shoehorn` em testes), `scaffold-exercises` (estruturas de exercícios dos cursos do autor) e `setup-pre-commit` (Husky + lint-staged + Prettier).

## CHANGELOG: renomeações confirmadas

Lido por busca dirigida (arquivo completo, 67 KB, em `raw/`). Confirma a hipótese registrada na primeira leitura:

- **`to-prd` → `to-spec`** (PR #464, v1.1.0); a PR #734 concluiu a renomeação removendo até o aviso "you may know this document as a PRD". Ou seja: o "Write PRD" da palestra de abril/2026 é hoje `to-spec`, por renomeação documentada, não só semelhança de função.
- **`to-plan` + `to-issues` → fundidas em `to-tickets`** (PR #464); `to-issues` foi apagada.
- **`decision-mapping` → `wayfinder`** (PR #464): "decision map era jargão e impreciso"; o reframe trouxe as leading words fog of war, frontier, map.
- **`diagnose` → `diagnosing-bugs`**; **`writing-great-skills` → `writing-for-agents`** (breaking, PR #763); **`review`** saiu de `in-progress/` como **`code-review`** (PR #464).
- **Taxonomia**: "Commands / Skills" virou "User-invoked / Model-invoked"; **`CONTEXT.md`/`CONTEXT-MAP.md`** viraram **`GLOSSARY.md`/`GLOSSARY-MAP.md`** (PR #1120).
- A PR #406 registra que o próprio `ask-matt` chegou a "mentir" (faltavam 5 skills no mapa), o que gerou a regra de manutenção no `CLAUDE.md` do repo.

## Afirmações e evidências

| Afirmação | Atribuição | Força |
|---|---|---|
| As skills dos vídeos e palestras existem e estão publicadas neste repo | README (autor) | Verificada pela lista e, depois, pela leitura dos `SKILL.md` |
| Skills pequenas, combináveis e independentes do modelo | Autor | Declaração do autor; sem teste independente |
| Popularidade (estrelas/forks) | GitHub | Número do dia, conferido na API; não indica qualidade |

## Impacto na wiki existente

- **Responde a questões abertas**: onde estão Grill Me, PRD (hoje `to-spec`), TDD, `/teach` e **Wayfinder**, e "grill with docs" (`grill-with-docs`); `retro` e `improve-codebase-architecture` também estão lá. Ver [ai-driven-development](../concepts/ai-driven-development.md).
- **Nomes mudaram** em relação à palestra de abril/2026: o PRD aparece como `to-spec`, e "PRD to Issues" como `to-tickets`. É inferência do mantenedor pela função descrita; o histórico de renomeação não foi verificado.
- **Skills da fonte que continuam fora do que a wiki cobria**: `triage`, `handoff`, `wait-what`, `to-questionnaire`, `wizard`, `research`, `diagnosing-bugs`, `writing-for-agents`.
- O repo distribui as skills como **plugin** para vários agentes, o que conecta com plugin = conector + Skills em [skills-na-pratica](../concepts/skills-na-pratica.md).

## Questões não resolvidas

- ~~Qual o conteúdo real dos `SKILL.md`?~~ → Lidos; ver [resumo dos SKILL.md](./2026-11-14_source-matt-pocock-skills-skill-md.md). Faltam os arquivos auxiliares e as pastas `in-progress/` e `misc/`.
- ~~Os nomes antigos foram renomeados ou removidos?~~ → Confirmado no `CHANGELOG.md`: `to-prd` → `to-spec`; `to-plan` + `to-issues` → `to-tickets`; ver a seção "CHANGELOG".
- ~~O que há em `SCOPE.md` e `GLOSSARY.md`?~~ → Lidos; ver "Governança". Os arquivos individuais de `.out-of-scope/` (8 conceitos rejeitados) não foram abertos.
- A pasta `docs/` (34 páginas humanas por skill, publicadas em aihero.dev) não foi lida.
- Os 4 surveys do `software-factory` citam produtos e preços de 2026-10 com aviso explícito de obsolescência; nada deles foi verificado de forma independente.
