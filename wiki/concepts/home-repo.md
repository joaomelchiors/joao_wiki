---
title: "Home Repo (repositório-casa para agentes)"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["home-repo", "agents-md", "multi-repo", "skills", "harness", "llm-wiki", "ai-coding"]
source_files:
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
  - raw/assets/2026-11-12_home-repo-pattern.png
related_pages:
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
  - ../entities/matt-pocock.md
  - ./ia-generativa.md
---

# Home Repo (repositório-casa para agentes)

## Definição

Padrão descrito por [Matt Pocock](../entities/matt-pocock.md): um **repositório único** que guarda skills, `AGENTS.md` (ou `CLAUDE.md`) e docs compartilhados, e **onde o agente sempre roda**. O `AGENTS.md` do home repo traz um **ponteiro de navegação** por repositório, para que o agente abra ou clone cada um quando precisar.

## Compreensão Atual

- **Problema**: agente iniciado em um repo só enxerga esse repo; cada repo acaba com cópia própria de skills e configuração; planejar uma feature que cruza repos fica sem visão do todo.
- **Mecânica**: o home repo é um repo normal, versionado em git, que pode ser compartilhado por uma equipe. Cada ponteiro é uma linha com nome, descrição, caminho local e remoto para clonar se faltar, com dicas opcionais ("leia o `AGENTS.md` dele antes de mexer"). Cada feature usa um **worktree** dentro do clone do repo, permitindo vários agentes no mesmo repo.
- **Conteúdo típico**: skills usadas em vários repos; `AGENTS.md` com ponteiros; docs compartilhados (padrões de código, glossário, decisões que afetam o sistema); opcionalmente uma wiki em Markdown e ferramentas (CLI para serviços externos). Fica em cada repo tudo que vale só para ele (build, testes, docs próprios, histórico, remoto).
- **Escala**: ~20 a 40 repos funcionam com ponteiros diretos; perto de 400, usar um arquivo por área (divulgação progressiva). Com milhares, o artigo cita um marketplace de skills como mais adequado.
- **Alternativas**: monorepo (melhor quando possível; o home repo cobre o caso em que não dá, por exemplo repos públicos e privados misturados), submodules (aceitáveis com 5 a 10 repos) e `~/.claude/skills` (paliativo; não é versionado pela equipe).
- **Configuração**: o artigo traz um prompt de 4 passos (inventariar repos; inventariar material compartilhado; acordar plano; aplicar em branches novas) que só altera algo após aprovação.

### Relação com esta wiki (interpretação, não vem das fontes)

- Este repositório já segue o modelo de "LLM wiki" (`raw/`, `wiki/`, `CLAUDE.md` com regras) que Matt cita como parte do seu home repo. Pode ser usado como home repo acrescentando uma seção "Other Repos" ao `CLAUDE.md` e skills compartilhadas.
- Valor esperado cresce com o número de repos que compartilham skills; com zero ou um projeto o ganho é pequeno. Começar enxuto e acrescentar ponteiros por projeto é recomendação do mantenedor desta wiki, não do autor do padrão.

## Debates

- **Monorepo × home repo**: Matt prefere monorepo; o home repo é alternativa quando política ou visibilidade impedem.
- **`AGENTS.md` × `CLAUDE.md`**: o artigo usa `AGENTS.md` como padrão e sugere um arquivo de uma linha apontando para ele quando o harness carrega outro nome.
- **Wiki dentro do home repo**: o vídeo defende; o artigo só diz que pode ter "uma pequena wiki". Estrutura não mostrada.

## Fontes de Suporte

- [Matt Pocock — The Home Repo Pattern (vídeo e artigo)](../sources/2026-11-12_source-matt-pocock-home-repo.md)

## Entidades Relacionadas

- [Matt Pocock](../entities/matt-pocock.md): autor do padrão.

## Questões Não Resolvidas

- Como Matt organiza a wiki e as ferramentas do home repo (vídeo futuro).
- Segurança e permissões quando o home repo reúne ferramentas com acesso a e-mail, chat e GitHub.
- Quanto contexto o `AGENTS.md` com muitos ponteiros consome antes do trabalho começar (relação com [Smart/Dumb Zone](./engenharia-de-contexto.md)).
- Convivência de skills do home repo com skills do próprio repo filho.

## Notas de Atualização

- 2026-11-12: página criada a partir do vídeo e do artigo de Matt Pocock.
