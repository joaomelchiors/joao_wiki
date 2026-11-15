---
title: "Claude Code"
type: entity
status: active
created: 2026-11-05
updated: 2026-11-15
tags: ["claude-code", "anthropic", "harness", "agentes", "ferramenta", "mcp", "skills", "hooks"]
source_files:
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
  - raw/sources/2026-08-05_claude-code-full-course-autonomous-goals-mcp-and-vs-code_en-orig_7l6bXLAKyEI.md
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
related_pages:
  - ../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md
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
- **Controle de contexto**: `/context`, `/compact`, `/clear`, `/rename`, `/rewind`, retomada e fork de sessões. Uso demonstrado na [live de Matt Pocock](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md): retomar com `resume` a partir de um ponto anterior da mesma conversa para **descartar um ramo** do contexto ("é quase como voltar no tempo"), e `Esc` duas vezes para desfazer até um turno anterior — alternativa a compactar; ver [Engenharia de Contexto](../concepts/engenharia-de-contexto.md).
- **Referência entre sessões**: segundo a mesma live, uma sessão só consegue puxar o contexto de outra se estiverem **no mesmo diretório**; o contorno dele foi retomar a sessão antiga e colar nela a pergunta feita pela nova.
- **Níveis de esforço**: na live (abr/2026) ele alterna entre `medium` e esforço alto e afirma que o Claude lançou o modo `xhigh`, que passou a ser o padrão do Claude Code e que só existe para Opus. Afirmação de uma fonte só, datada, **não verificada** na documentação.
- **Autonomia graduada**: regras de permissão, modos de permissão, *auto mode* e sandbox; managed settings para governança organizacional ([curso CCDV-F](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)). Modos demonstrados no [curso freeCodeCamp](../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md) (alternados com `Shift+Tab`): *plan mode* (planeja sem editar, usuário aprova), *accept edits* (edita, pede permissão para comandos), *auto mode* (roda comandos com revisão por IA que escala para o humano) e *bypass permissions* (irrestrito; indicado só para ambientes descartáveis).
- **`/goal` (execução autônoma)**: roda em loop com um avaliador que compara a saída com os requisitos e devolve feedback até atender; gera pasta temporária de avaliações. Demonstrado ponta a ponta no curso freeCodeCamp (clone de app a partir de screenshot + link); o instrutor o chama de "skill" — não verificado se é recurso nativo ou skill instalada.
- **Skills e plugins na prática** (curso freeCodeCamp): instalação via `/plugins` ou passando a URL da skill; três escopos (usuário global, projeto/colaboradores, usuário no projeto); `/reload plugins` (grafia da legenda, não verificada) aplica sem reiniciar; catálogo skills.sh; `.agents/skills/` como fonte universal e `.claude/skills/` como referência a ela; `AGENTS.md` (universal) × `CLAUDE.md` (específico do Claude Code).
- **Extensibilidade**: hooks (pré/pós uso de ferramenta), skills, plugins (pacote de skills + agentes + hooks + MCP + LSP), servidores MCP.
- **Instalação de Skills pelo app desktop**: *Personalizar* → *Habilidades* lista e instala Skills da Anthropic (ex.: `skill creator`); Skills aparecem no menu `/`, às vezes só após recarregar/reabrir ([Usando Skills](../sources/2026-11-07_source-agentes-ia-usando-skill.md); nomes vindos de transcrição automática).
- **Uso programático**: modo headless/print (`-p`) e Agent SDK (Python/TypeScript).
- **Sub agentes embutidos**: Explore, Plan, general-purpose, bash, status line setup, claude-code-guide.
- **Provedores**: API da Anthropic ou terceiros (Bedrock, Vertex AI, Foundry).

## Cronograma e Evolução

- 2026-04: live de Matt Pocock mostra o uso intensivo em sessões longas de *grilling* com subagentes em paralelo; ele cita `xhigh` como padrão novo e menciona não ter acesso ao *auto mode* ainda (o que situa o recurso como posterior/em liberação gradual).
- 2026-07: melhores práticas oficiais resumidas em vídeo (hierarquia Opus/Sonnet, `/goal`, sandbox).
- 2026-07: exame de certificação CCDV-F (guia v1) passa a cobrir Claude Code como domínio.
- 2026-08: curso introdutório do freeCodeCamp (canal Eric Tech) demonstra `/goal`, skills.sh e fluxo completo no VS Code; janela de contexto de 1M tokens no modelo demonstrado.
- Recursos novos citados no curso, com documentação ainda escassa: *auto mode*, Managed Agents.

## Relacionamentos

- Comparável ao [GitHub Copilot](./github-copilot.md) (modo agente, coding agent, MCP, instructions).
- Conceitos: [Harness](../concepts/harness.md), [Rules e Skills](../concepts/rules-e-skills.md), [MCP](../concepts/mcp.md), [Spec-Driven Development](../concepts/spec-driven-development.md) e [Melhores Práticas](../concepts/melhores-praticas-claude-code.md); fundamentos em [IA Generativa](../concepts/ia-generativa.md).
- Material de ensino: [Andrew Brown](./andrew-brown.md); [formacao.dev](./formacao-dev.md) usa Claude Code como uma das ferramentas do módulo de ferramentas agênticas.

## Pontos para Monitorar

- Segurança real e escopo do *auto mode*.
- Evolução de plugins/marketplaces e Managed Agents.
- Mudanças em comandos e flags (parte dos nomes vem de transcrição automática, não verificada na documentação oficial).
