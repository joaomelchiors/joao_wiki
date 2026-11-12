---
title: "Matt Pocock — The Home Repo Pattern (vídeo e artigo)"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["matt-pocock", "home-repo", "agents-md", "multi-repo", "skills", "llm-wiki", "ai-coding"]
source_files:
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/assets/2026-11-12_home-repo-pattern.png
related_pages:
  - ../concepts/home-repo.md
  - ../entities/matt-pocock.md
  - ../concepts/ia-generativa.md
  - ./2026-07-16_source-matt-pocock-shorts.md
---

# Matt Pocock — The Home Repo Pattern (vídeo e artigo)

## Resumo

Duas fontes sobre o mesmo padrão, de [Matt Pocock](../entities/matt-pocock.md), ambas de 2026-11-12:

- **Vídeo** (8:53, "The Home Repo Pattern: Run agents across ALL your repos"): legenda em inglês **gerada automaticamente**, com ruído (por exemplo "agents.mmd" no lugar de `AGENTS.md`).
- **Artigo** em aihero.dev ("The Home Repo Pattern"): referência escrita com FAQ e um **prompt de configuração** em 4 passos. Texto capturado em `raw/sources`; imagem do diagrama em `raw/assets/2026-11-12_home-repo-pattern.png` (`acme/home` com skills e tooling apontando para `storefront`, `payments-api`, `admin-dashboard` e "20 more repos").

O padrão foi consolidado na página de conceito [Home Repo](../concepts/home-repo.md). Este resumo registra o que cada fonte traz.

## Pontos-Chave

**Do vídeo**
- Problema: trabalhar com agentes em vários repositórios sem duplicar skills, ferramentas, `AGENTS.md` e links de wiki em 30 ou 40 repos. Pôr tudo no diretório do usuário deixa o material invisível e desatualizado, além de ser o lugar da personalização individual.
- Solução: um **único repo "home"** com skills (inclusive privadas), `settings.json` versionado, `CLAUDE.md`/`AGENTS.md`, wiki e ferramentas próprias. O agente roda sempre nele e alcança os outros repos por **caminhos listados no `AGENTS.md`**; se o repo não existe na máquina, clona; com agentes em paralelo, usa worktrees.
- Escala: funciona para "20, 30, 40" repos; para centenas, usar divulgação progressiva (agrupar por frontend, backend, interno).
- Prefere monorepo, mas diz que muitas vezes não dá "por vontade política" ou por misturar repos públicos e privados.
- Ele chama o home repo de **"personal wiki"**: wiki de LLM "estilo Karpathy" em markdown, cheia de dados sensíveis ao negócio, usada para criar cursos e conteúdo. Promete outro vídeo sobre como a gera e mantém.
- **Ferramentas** próprias (CLI) integram Gmail, Slack, Discord, YouTube, GitHub, Google Calendar e outros, o que permite fluxos como "ler mensagem no Discord → corrigir no repo do curso → editar o curso com uma skill".
- Afirma ter ficado "mais ambicioso" com as ferramentas depois de adotar o padrão.

**Do artigo**
- Definição: um repo que guarda skills, `AGENTS.md` e docs compartilhados; o agente roda nele, e o `AGENTS.md` traz um ponteiro de navegação por repo.
- Benefícios: um lugar para orientação e ferramentas; um lugar para rodar todos os agentes; mudanças amplas em vários repos numa só sessão.
- Prompt de configuração: (1) inventariar repos; (2) inventariar material compartilhado e classificar em compartilhado, duplicado, específico ou instalado; (3) acordar o plano e o `AGENTS.md`; (4) aplicar em branches novas, commit só no home repo, push por conta do usuário. Nada muda antes da aprovação do plano.
- FAQ: o que vai no home repo e o que fica em cada repo; por que repo em vez de `~/.claude/skills`; `AGENTS.md` ou `CLAUDE.md` (usar o que o harness carrega; o Claude Code carrega `CLAUDE.md`); formato do ponteiro; clonar ou usar cópia existente; worktrees por feature; equipes podem compartilhar o home repo; ~20 repos funciona e ~400 exige um arquivo por área; submodules são opcionais; relação com monorepo; CLI não é necessária no início; uso em CI dentro do sandbox de uma *software factory*.

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| O padrão resolve a duplicação de skills e steering em multi-repo | Experiência do autor e reação do público ("foi muito bem no Twitter"); sem dados | Fraca a moderada |
| Funciona bem com ~20 a 40 repos; com ~400 exige agrupamento | Vídeo diz "20 a 40"; artigo diz "~20 funciona" e "~400 é demais" | Moderada (as duas fontes concordam) |
| Home repo permite tooling mais ambicioso | Relato pessoal | Fraca |
| A wiki dele segue o modelo "Karpathy" | Citação do autor; estrutura interna **não mostrada** | Fraca (ver questões) |

## Impacto na Wiki Existente

- Nova página [Home Repo](../concepts/home-repo.md).
- [IA Generativa](../concepts/ia-generativa.md): remissão ao conceito, perto de Skills e Harness.
- [Matt Pocock](../entities/matt-pocock.md): nova contribuição e cronologia.
- Relação com esta wiki: o repo atual usa o esquema "LLM wiki" (`raw/` + `wiki/` + `CLAUDE.md`) e já funciona como embrião de home repo. Ver análise na conversa de 2026-11-12 (interpretação, não vem das fontes).
- Sem contradições com fontes anteriores.

## Questões Não Resolvidas

- Como Matt organiza e mantém a wiki dentro do home repo (promete vídeo futuro).
- O artigo não discute o caso de **zero projetos**; a recomendação de começar cedo e enxuto é interpretação.
- Segurança: um repo com skills, ferramentas e acesso a Gmail/Slack concentra muito acesso; não há discussão sobre permissões ou segredos (o prompt só diz para não ler `.env`).
- Efeito de manter ponteiros em `CLAUDE.md` × `AGENTS.md` quando a equipe usa harnesses diferentes (o artigo sugere um arquivo de uma linha apontando para o outro).
