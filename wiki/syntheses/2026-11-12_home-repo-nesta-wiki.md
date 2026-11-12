---
title: "Esta wiki como home repo: quando e como"
type: synthesis
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["home-repo", "claude-code", "claude-md", "llm-wiki", "decisao"]
source_files:
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
related_pages:
  - ../concepts/home-repo.md
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../entities/joao-marcos-melchiors.md
---

# Esta wiki como home repo: quando e como

> Síntese do mantenedor, a partir de conversa com o usuário em 2026-11-12. O padrão vem de [Matt Pocock](../entities/matt-pocock.md); a aplicação a este repositório é **interpretação e decisão de projeto**, não recomendação do autor do padrão.

## Pergunta

Este repositório (a wiki) deve virar o [home repo](../concepts/home-repo.md) do usuário? Quando, e o que muda?

## Conclusão

- **Sim, é candidato natural.** O repo já segue o modelo de "LLM wiki" (`raw/`, `wiki/`, `CLAUDE.md` com regras) que Matt cita como parte do seu home repo. Faltariam a seção de ponteiros ("Other Repos") e as skills compartilhadas.
- **Ainda não.** O valor do padrão cresce com o número de repos que compartilham skills e orientação. Com zero ou um projeto real, o ganho é pequeno. **Decisão (2026-11-12)**: adiar a reestruturação até existirem projetos reais.
- **Quando fizer, mudar o papel do `CLAUDE.md`.** Hoje ele contém todo o esquema da wiki. Num home repo, o `CLAUDE.md` vira o ponto de entrada geral (ponteiros e orientação comum), e o esquema da wiki vai para um arquivo próprio, por exemplo `docs/agents/wiki.md`, referenciado a partir dele (opção escolhida na conversa).
- **Começar enxuto**: acrescentar um ponteiro por projeto quando o projeto existir, em vez de montar a estrutura completa antes.

## Evidência

- [Home Repo (conceito)](../concepts/home-repo.md) e [resumo do vídeo e do artigo](../sources/2026-11-12_source-matt-pocock-home-repo.md), `referencia`: definição, ponteiros no `AGENTS.md`/`CLAUDE.md`, escala de ~20 a 40 repos, wiki dentro do home repo.
- O artigo **não discute o caso de zero projetos**; o critério "começar quando houver projetos" é do mantenedor.

## Interpretação

- O ganho do padrão vem de evitar duplicação entre repos. Sem repos para deduplicar, sobra só o custo de manter a estrutura.
- Mover o esquema da wiki para fora do `CLAUDE.md` evita que cada sessão em qualquer projeto carregue regras de ingestão que só valem para a wiki.

## Incertezas

- *Conhecimento geral sobre o Claude Code, não verificado nas fontes da wiki*: arquivos `CLAUDE.md` em subpastas são carregados sob demanda quando o agente lê arquivos daquela pasta; acessar pastas fora do diretório de trabalho exige `additionalDirectories` nas configurações ou o comando `/add-dir`. Isso afeta como os ponteiros para repos em outras pastas funcionariam.
- Como Matt organiza a wiki dentro do home repo ainda não foi mostrado (vídeo prometido).
- Segurança: um home repo com ferramentas ligadas a e-mail e chat concentra acesso; o padrão não discute permissões.

## Próximas Ações

- Reabrir esta síntese quando houver o primeiro projeto real fora da wiki.
- Verificar na documentação oficial do Claude Code o carregamento de `CLAUDE.md` em subpastas e o acesso a diretórios adicionais.
- Ao reestruturar: mover o esquema para `docs/agents/wiki.md`, criar a seção de ponteiros no `CLAUDE.md` e registrar no log.
