---
title: "Claude Code Full Course — Autonomous Goals, MCP e VS Code (freeCodeCamp)"
descricao: 'Curso introdutório do freeCodeCamp (Eric Tech, ~1h20, legenda automática) — Claude Code no VS Code: modos de permissão, `/goal` (loop com avaliador), skills/plugins (skills.sh, escopos, `/reload-plugins`), `.agents` × `.claude`, contexto (`/context`, `/compact`, heurística 50%), Git/GitHub para leigos, MCP × CLI (tokens × segurança) e deploy na Vercel. Tem apostila ilustrada em sínteses.'
type: source
status: active
created: 2026-11-14
updated: 2026-11-15
tags: ["claude-code", "vs-code", "skills", "mcp", "permissoes", "contexto", "git", "iniciantes"]
source_files:
  - raw/sources/2026-08-05_claude-code-full-course-autonomous-goals-mcp-and-vs-code_en-orig_7l6bXLAKyEI.md
related_pages:
  - ./2026-01-15_source-matt-pocock-plan-mode.md
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../entities/claude-code.md
  - ../concepts/mcp.md
  - ../concepts/skills-na-pratica.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/melhores-praticas-claude-code.md
  - ../syntheses/2026-11-15_apostila-curso-claude-code-freecodecamp.md
tipo_conteudo: demonstrado
captura: automatica
---

# Claude Code Full Course — Autonomous Goals, MCP e VS Code (freeCodeCamp)

## Resumo

Curso introdutório de ~1h20 publicado pelo canal freeCodeCamp.org (2026-08-05), ministrado por "Eric" (canal Eric Tech; apresenta-se como ex-engenheiro sênior de Amazon e Microsoft — não verificado). Voltado a iniciantes, inclusive não técnicos. Cobre: instalação do Claude Code e uso dentro do VS Code; modos de permissão; o comando `/goal` (execução autônoma em loop com avaliador); instalação e uso de Skills/plugins (skills.sh); estrutura de pastas geradas (`.claude` vs `.agents`, `CLAUDE.md` vs `AGENTS.md`); monitoramento de contexto (`/context`, `/compact`, status bar); comandos `/` comuns; versionamento com Git/GitHub; MCP vs ferramentas CLI; deploy na Vercel; e um FAQ.

**Classificação**: `demonstrado` — o conteúdo dominante são demonstrações ao vivo no VS Code/terminal (clonar um app de tier list, instalar skills, deploy na Vercel); misturado com trechos de `explicacao` (tabelas conceituais) e `opiniao` (FAQ, recomendações de plano/modelos). Legenda automática em inglês, bastante ruidosa: "Claude Code" aparece como *Cloud Code*, *Claw Code*, *Clocko*; nomes de comandos e produtos podem estar distorcidos.

## Pontos-Chave

- **Onde usar**: app desktop (simples, menos flexível) × terminal puro × terminal dentro de um IDE (VS Code) — recomendação do instrutor: IDE, por unir terminal e visualização dos arquivos alterados.
- **Modos de permissão** (via `Shift+Tab`): *plan mode* (planeja sem editar; usuário aprova o plano), *accept edits* (edita arquivos, pede permissão para comandos), *auto mode* (aceita edições e roda comandos com uma camada de revisão por IA que escala para o humano quando necessário) e *bypass permissions* (irrestrito; só iniciando com flag tipo `--dangerously-skip-permissions`; indicado para ambientes descartáveis).
- **`/goal`**: faz o Claude Code rodar em loop até os requisitos serem atendidos — um avaliador compara a saída com os requisitos declarados e devolve feedback até passar; gera uma pasta temporária de avaliações (`eval`). Demonstrado clonando um app de tier list a partir de screenshot + link, com perguntas de clarificação (tech stack, fidelidade "pixel perfect" com tolerância de ~2%).
- **Skills**: definidas como SOP/workflow reutilizável que instrui o agente. Demo com a skill *frontend-design* da Anthropic (instalada via `/plugins`) e a *Vercel React best practices* (instalada passando a URL da página ao Claude Code). Catálogo citado: **skills.sh** (skills para qualquer agente). Três escopos de instalação: usuário (global), projeto (todos os colaboradores) ou só o usuário naquele projeto. `/reload plugins` (grafia da legenda; nome exato não verificado) aplica sem reiniciar; chamada por linguagem natural ou por `/nome-da-skill`; desinstalar = apagar a pasta da skill (ou via `/plugins`).
- **`.agents` vs `.claude`**: a pasta `.agents/skills/` é a fonte da verdade "universal" para qualquer framework de agente; `.claude/skills/` aparece como referência (link simbólico) para ela. `AGENTS.md` = instruções universais; `CLAUDE.md` = específicas do Claude Code (no exemplo, o `CLAUDE.md` só referencia o `AGENTS.md`). `settings.json` em `.claude` é só do Claude Code.
- **Contexto**: `/context` mostra o mapa de uso da janela por categoria (system prompt, skills, mensagens); o instrutor usa uma status bar customizada (construída por prompt, não embutida) com % da janela e tokens. Heurística do instrutor: acima de ~50% da janela, `/compact` (resumir, com perda possível) ou nova sessão — justificada pelo *context rot* (gráfico: acurácia cai com entrada longa em todos os modelos).
- **Comandos `/` cobertos**: `/clear`, `/compact`, `/resume` (inclusive "resume from summary" × sessão completa), `/rewind` (restaura código e conversa a um checkpoint), `/model`, `/plugins`, `/mcp`.
- **Git/GitHub**: explicação para leigos (repositório, commit, branch, diff verde/vermelho, colaboradores, `.gitignore`, `node_modules`); demo pedindo ao Claude Code para criar repositório privado e commitar (ele exclui `node_modules`/dotfiles e confirma que nenhum `.env`/segredo subiu); reverter passando o hash do commit ao Claude Code.
- **MCP × CLI**: ambos são formas de o agente controlar apps de terceiros (Jira, Slack, Stripe, Vercel). CLI = eficiente em tokens (gera comandos de terminal); MCP = protocolo padronizado com controle de quais tools expor, autenticação e trilha de auditoria, porém consome mais tokens (schemas das tools carregados no contexto). Recomendação do instrutor: CLI para velocidade/economia; MCP para segurança/times. Demo: deploy e exclusão de projeto na Vercel via CLI, com o agente confirmando qual projeto apagar antes de executar.
- **FAQ**: relação skill (SOP) × MCP (ferramenta) × sub agente (especialista que segue skills que chamam MCPs); plano de US$ 20 insuficiente para uso diário (alternativas: modelos locais ou OpenRouter/DeepSeek como substitutos — prática de terceiros, não oficial); Claude Code como "framework" independente do modelo; fundamentos não envelhecem rápido (opinião).

## Afirmações/Observações Principais

- O *auto mode* teria um "classificador de IA" que revisa scripts antes de rodar e aciona o humano quando necessário — consistente com o que o curso CCDV-F descreve para o auto mode, mas aqui é descrição informal do instrutor, sem fonte da documentação.
- `/goal` como mecanismo de loop avaliador-executor é a peça central do título ("Autonomous Goals"); já aparecia citado nas [melhores práticas do Claude Code](../concepts/melhores-praticas-claude-code.md), e esta fonte mostra o uso ponta a ponta.
- A separação `.agents`/`AGENTS.md` (universal) × `.claude`/`CLAUDE.md` (específico) corrobora o que o curso Profissional AI mostra sobre pastas de skills por ferramenta ([skills-na-pratica](../concepts/skills-na-pratica.md)).
- A comparação MCP × CLI por custo de tokens e segurança é o ponto mais novo para a wiki — o conceito [mcp](../concepts/mcp.md) ainda não tratava a alternativa CLI.
- Números do demo: janela de contexto de 1M tokens no modelo usado; menção a modelos "Opus 4.8" e "Fable 5" (ruído de legenda possível nos nomes).

## Notas de Evidência

- Demos: clone do app tier list com `/goal` (0–25%), skills frontend-design e Vercel (25–50%), estrutura de pastas e contexto (50%), Git/GitHub e Vercel CLI (50–75%), FAQ (75–100%).
- Tabelas conceituais (modos de permissão, MCP × CLI) são slides do instrutor lidos em voz alta.

## Impacto na Wiki Existente

- [claude-code.md](../entities/claude-code.md): adicionados modos de permissão detalhados, `/goal` com avaliador, escopos de instalação de skills, skills.sh e `.agents` × `.claude`.
- [mcp.md](../concepts/mcp.md): adicionada a comparação MCP × CLI (tokens × segurança), atribuída ao instrutor.
- Sem contradições com conclusões existentes; reforça CCDV-F (auto mode) e melhores práticas (`/goal`, `/rewind`, `/compact`).

## Questões Não Resolvidas

- `/goal` é recurso nativo do Claude Code ou uma skill instalada pelo instrutor? O próprio instrutor o apresenta como "uma skill" acionada por slash command, mas não mostra a origem nem a instalação.
- O que é "Ultra Plan" (opção "refine with Ultra Plan" mostrada de passagem no plan mode)?
- Verificar na documentação oficial os nomes exatos: status bar/status line nativa × customizada, flag de bypass, "resume from summary".

## Páginas Relacionadas

- [Claude Code](../entities/claude-code.md)
- [MCP](../concepts/mcp.md)
- [Skills na prática](../concepts/skills-na-pratica.md)
- [Engenharia de contexto](../concepts/engenharia-de-contexto.md) — context rot e heurística de 50%
- [Melhores práticas do Claude Code](../concepts/melhores-praticas-claude-code.md)
- [Apostila do curso (síntese, 2026-11-15)](../syntheses/2026-11-15_apostila-curso-claude-code-freecodecamp.md) — versão didática completa, com 9 diagramas, glossário e perguntas de revisão
