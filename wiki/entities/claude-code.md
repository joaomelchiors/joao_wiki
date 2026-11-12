---
title: "Claude Code"
type: entity
status: active
created: 2026-11-05
updated: 2026-11-07
tags: ["claude-code", "anthropic", "harness", "agentes", "ferramenta", "mcp", "skills", "hooks"]
source_files:
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
related_pages:
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../sources/2026-07-18_source-claude-code-melhores-praticas.md
  - ../sources/2026-07-17_source-ferramentas-agenticas-harness.md
  - ../sources/2026-11-07_source-agentes-ia-usando-skill.md
  - ../concepts/ia-generativa.md
  - ./github-copilot.md
  - ./andrew-brown.md
---

# Claude Code

## Visão Geral

Ferramenta de codificação agêntica da Anthropic, executada no terminal (e em IDEs/app desktop). É um exemplo de **harness**: a camada de software que envolve o LLM, monta o contexto, executa ferramentas (arquivos, busca, execução, web, inteligência de código) e repete o loop até concluir o turno.

## Fatos-Chave

- **Configuração em Markdown**: `CLAUDE.md` (instruções do projeto), skills, sub agentes (arquivos `.md` com frontmatter), comandos e hooks; o diretório `.claude` do projeto pode ser versionado ([melhores práticas](../sources/2026-07-18_source-claude-code-melhores-praticas.md)).
- **Controle de contexto**: `/context`, `/compact`, `/clear`, `/rename`, `/rewind`, retomada e fork de sessões.
- **Autonomia graduada**: regras de permissão, modos de permissão, *auto mode* e sandbox; managed settings para governança organizacional ([curso CCDV-F](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)).
- **Extensibilidade**: hooks (pré/pós uso de ferramenta), skills, plugins (pacote de skills + agentes + hooks + MCP + LSP), servidores MCP.
- **Instalação de Skills pelo app desktop**: *Personalizar* → *Habilidades* lista e instala Skills da Anthropic (ex.: `skill creator`); Skills aparecem no menu `/`, às vezes só após recarregar/reabrir ([Usando Skills](../sources/2026-11-07_source-agentes-ia-usando-skill.md); nomes vindos de transcrição automática).
- **Uso programático**: modo headless/print (`-p`) e Agent SDK (Python/TypeScript).
- **Sub agentes embutidos**: Explore, Plan, general-purpose, bash, status line setup, claude-code-guide.
- **Provedores**: API da Anthropic ou terceiros (Bedrock, Vertex AI, Foundry).

## Cronograma e Evolução

- 2026-07: melhores práticas oficiais resumidas em vídeo (hierarquia Opus/Sonnet, `/goal`, sandbox).
- 2026-07: exame de certificação CCDV-F (guia v1) passa a cobrir Claude Code como domínio.
- Recursos novos citados no curso, com documentação ainda escassa: *auto mode*, Managed Agents.

## Relacionamentos

- Comparável ao [GitHub Copilot](./github-copilot.md) (modo agente, coding agent, MCP, instructions).
- Conceitos: [Harness](../concepts/harness.md), [Rules e Skills](../concepts/rules-e-skills.md), [MCP](../concepts/mcp.md), [Spec-Driven Development](../concepts/spec-driven-development.md) e [Melhores Práticas](../concepts/melhores-praticas-claude-code.md); fundamentos em [IA Generativa](../concepts/ia-generativa.md).
- Material de ensino: [Andrew Brown](./andrew-brown.md); [formacao.dev](./formacao-dev.md) usa Claude Code como uma das ferramentas do módulo de ferramentas agênticas.

## Pontos para Monitorar

- Segurança real e escopo do *auto mode*.
- Evolução de plugins/marketplaces e Managed Agents.
- Mudanças em comandos e flags (parte dos nomes vem de transcrição automática, não verificada na documentação oficial).
