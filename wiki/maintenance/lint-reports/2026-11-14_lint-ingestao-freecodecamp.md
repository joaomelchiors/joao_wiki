---
title: "Lint — ingestão freeCodeCamp e checagens gerais"
type: maintenance
status: active
created: 2026-11-14
updated: 2026-11-14
tags: ["lint", "verificacao", "claude-code"]
source_files:
  - raw/sources/2026-08-05_claude-code-full-course-autonomous-goals-mcp-and-vs-code_en-orig_7l6bXLAKyEI.md
related_pages:
  - ../../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md
  - ../../entities/claude-code.md
  - ../../concepts/mcp.md
  - ../../index.md
---

# Lint — ingestão freeCodeCamp e checagens gerais (2026-11-14)

## Escopo da Revisão

1. Ingestão de hoje (curso freeCodeCamp sobre Claude Code): resumo de fonte conferido por amostragem contra a legenda bruta; páginas editadas (entidade Claude Code, conceito MCP) revisadas quanto a atribuição.
2. Checagens automáticas em toda a wiki (script): links Markdown relativos, existência dos `source_files` do frontmatter, presença de `tipo_conteudo`/`captura` nas fontes, contagens por diretório × seção "Contagens" do index.

## Verificado e Correto

- **0 links quebrados** em toda a `wiki/`; **0 caminhos inexistentes** em `source_files`.
- Todas as 43 fontes têm `tipo_conteudo` e `captura` (os `README.md` de diretório não são fontes e não contam).
- Afirmações do resumo conferidas na legenda bruta: tolerância de 2% no modo "pixel perfect", janela de 1M tokens (19% ≈ 180k), "AI classifier" do auto mode, skills.sh, skill frontend-design "criada pela Anthropic" (afirmação do instrutor), flag de bypass dita como "dangerously skip".
- Contagens reais: 43 fontes, 23 conceitos, 7 entidades, 3 sínteses, 7 páginas de manutenção (sem contar este relatório) — index conferido.
- Novas seções em `claude-code.md` e `mcp.md` estão atribuídas à fonte/instrutor; nenhuma afirmação de fonte única virou fato sem atribuição; nenhuma interpretação do mantenedor entrou em conceito.
- Sem contradições novas: o vídeo reforça CCDV-F (auto mode) e melhores práticas (`/goal`, `/compact`, `/rewind`).

## Problemas Encontrados e Corrigidos

1. **Contagem de sínteses no index**: dizia 2, mas há 3 páginas listadas (home-repo, camadas, apostila Copilot) → corrigido para 3. Também removida linha em branco espúria entre as entradas de sínteses.
2. **Grafia `/reload-plugins`**: a legenda diz "{slash} reload plugins", sem hífen; o hífen era invenção do mantenedor → corrigido para `/reload plugins` com nota "grafia da legenda, não verificada" (fonte e entidade).
3. **Origem do `/goal`**: a questão aberta dizia que o vídeo "trata como comando disponível"; na verdade o instrutor o apresenta literalmente como "uma skill" acionada por slash command → questão reescrita na fonte e nota adicionada na entidade.

## Problemas Registrados, Sem Ação

- Os nomes de comandos/flags vindos de legenda automática (status line, "resume from summary", bypass) continuam não verificados na documentação oficial — já listados como questão na fonte; promovidos a `open-questions.md` junto com `/goal` e "Ultra Plan".
- Credenciais do instrutor (ex-Amazon/Microsoft) não verificadas; irrelevante para as demos (`demonstrado`), relevante se opiniões do FAQ forem citadas.

## Ações Recomendadas

- (média) Conferir na documentação oficial da Anthropic: `/goal`, plugins/reload, status line, "Ultra Plan" — fecharia questões desta fonte e do CCDV-F de uma vez.
- (baixa) Nenhuma página órfã ou conceito a promover detectado nesta rodada.
