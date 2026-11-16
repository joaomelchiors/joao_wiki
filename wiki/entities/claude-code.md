---
title: "Claude Code"
descricao: 'Ferramenta agêntica da Anthropic (harness); comandos de contexto, permissões/auto mode (4 modos detalhados), `/goal` com avaliador, `/init`, sandbox, sub agentes, hooks, plugins/skills.sh, `.agents` × `.claude`, MCP e Agent SDK.'
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
  - raw/sources/2025-10-22_most-devs-don-t-understand-how-context-windows-work_en-corrigida_-uW5-TaVXu4.md
  - raw/sources/2025-10-27_how-i-use-claude-code-for-real-engineering_en-corrigida_kZ-zzHVUrO4.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
  - raw/sources/2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode_en-corrigida_WNx-s-RxVxk.md
  - raw/sources/2026-02-21_i-m-using-claude-worktree-for-everything-now_en-corrigida_yv8VZpov8bk.md
  - raw/sources/2026-02-24_never-run-claude-init_en-corrigida_9tmsq-Gvx6g.md
  - raw/sources/2026-02-25_how-to-actually-force-claude-code-to-use-the-right-cli-don_en-corrigida_3CSi8QAoN-s.md
related_pages:
  - ../sources/2026-02-25_source-matt-pocock-hooks-cli.md
  - ../concepts/verificacao-deterministica.md
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ../sources/2026-02-21_source-matt-pocock-claude-worktree.md
  - ../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ../concepts/ralph-loop.md
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
- **Controle de contexto**: `/context`, `/compact`, `/clear`, `/rename`, `/rewind`, retomada e fork de sessões. Uso demonstrado na [live de Matt Pocock](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md): retomar com `resume` a partir de um ponto anterior da mesma conversa para **descartar um ramo** do contexto ("é quase como voltar no tempo"), e `Esc` duas vezes para desfazer até um turno anterior — alternativa a compactar; ver [Engenharia de Contexto](../concepts/engenharia-de-contexto.md). Demo anterior de Matt (out/2025, Sonnet 4.5 com janela de 200k): `/context` mostra o uso por categoria (system prompt ~8%, mensagens ~40%); `/compact` levou cerca de 1 minuto e gasta tokens, por ser uma chamada de LLM; depois de compactar, `Ctrl+O` mostra o resumo completo; as mensagens caíram de ~77k para ~4k. Trecho `demonstrado`, mas os números são aproximados porque o próprio falante oscila. Fonte: [vídeo sobre janela de contexto](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md).
- **Referência entre sessões**: segundo a mesma live, uma sessão só consegue puxar o contexto de outra se estiverem **no mesmo diretório**; o contorno dele foi retomar a sessão antiga e colar nela a pergunta feita pela nova.
- **Níveis de esforço**: na live (abr/2026) ele alterna entre `medium` e esforço alto e afirma que o Claude lançou o modo `xhigh`, que passou a ser o padrão do Claude Code e que só existe para Opus. Afirmação de uma fonte só, datada, **não verificada** na documentação.
- **Autonomia graduada**: regras de permissão, modos de permissão, *auto mode* e sandbox; managed settings para governança organizacional ([curso CCDV-F](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)). Modos demonstrados no [curso freeCodeCamp](../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md) (alternados com `Shift+Tab`): *plan mode* (planeja sem editar, usuário aprova), *accept edits* (edita, pede permissão para comandos), *auto mode* (roda comandos com revisão por IA que escala para o humano) e *bypass permissions* (irrestrito; indicado só para ambientes descartáveis). Uso real de plan mode por Matt Pocock (out/2025): o sub agente Explore mapeia o código, o modelo faz perguntas de esclarecimento num formulário de múltipla escolha e o plano vem com as opções *auto-accept edits*, aprovar manualmente ou *keep planning*. Primeiro atrito observado: depois de trocar para *accept edits*, o modelo "ainda acha que está em plan mode" e é preciso repetir o pedido. Trecho `demonstrado`; fonte: [How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md).
- **Mecânica do plan mode, segundo Matt Pocock (jan/2026)**: o modo desliga a escrita no sistema de arquivos e usa um system prompt próprio, que manda planejar antes de mudar qualquer coisa; uma tentativa de escrita "deve dar erro". Ele diz que o sub agente Explore "costuma usar" o Haiku 4.5 para muitas leituras baratas e devolve um resumo ao agente principal (Opus 4.5 no trace dele, com ~40 mil tokens gastos pelo Explore, número falado). Diz também que Cursor e VS Code passaram a ter plan mode. Afirmações dele, **não verificadas** em documentação; fonte `opiniao` com trace narrado: [resumo](../sources/2026-01-15_source-matt-pocock-plan-mode.md).
- **Memória e status line** (mesma demo, out/2025): `/memory` abre a memória do usuário ou a do projeto; a de Matt tem cerca de 43 linhas de regras curtas (ver [Rules e Skills](../concepts/rules-e-skills.md)). Status line customizada com repo, branch e contagem de arquivos staged, unstaged e novos. Segundo ele, em out/2025 o Claude Code não expunha os tokens usados para a status line (o Cursor sim); afirmação datada, **não verificada**. Ele sai com `Ctrl+C` duas vezes e retoma a conversa; o comando exato ficou ilegível na legenda (provavelmente `claude --continue`, não confirmado). O agente não percebe alterações feitas fora dele, como as de um formatter ao salvar: é preciso mandá-lo reler os arquivos. Fonte: [resumo](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md).
- **`/goal` (execução autônoma)**: roda em loop com um avaliador que compara a saída com os requisitos e devolve feedback até atender; gera pasta temporária de avaliações. Demonstrado ponta a ponta no curso freeCodeCamp (clone de app a partir de screenshot + link); o instrutor o chama de "skill" — não verificado se é recurso nativo ou skill instalada.
- **Skills e plugins na prática** (curso freeCodeCamp): instalação via `/plugins` ou passando a URL da skill; três escopos (usuário global, projeto/colaboradores, usuário no projeto); `/reload plugins` (grafia da legenda, não verificada) aplica sem reiniciar; catálogo skills.sh; `.agents/skills/` como fonte universal e `.claude/skills/` como referência a ela; `AGENTS.md` (universal) × `CLAUDE.md` (específico do Claude Code).
- **Extensibilidade**: hooks (pré/pós uso de ferramenta), skills, plugins (pacote de skills + agentes + hooks + MCP + LSP), servidores MCP.
- **Hooks na prática (`PreToolUse`)**: demonstrado por Matt Pocock (fev/2026). Um script bash checa se o comando começa com `npm`, escreve "use pnpm not npm" e sai com **exit code 2**; fica registrado em `settings.json` sob `hooks` → `PreToolUse`, com matcher para a ferramenta Bash. Numa sessão nova, o `npm install` foi bloqueado e o agente rodou `pnpm install` sozinho. Segundo ele, quando um evento dispara, todos os hooks que casam rodam em paralelo; há eventos também no início da sessão e no diálogo de permissão. Ele gerou o hook pedindo ao próprio Claude Code que convertesse instruções do `CLAUDE.md` em hooks. Relatos de exit 2 que não bloqueou existem (de segunda mão, **não verificados**). Fonte: [resumo](../sources/2026-02-25_source-matt-pocock-hooks-cli.md); ver [Verificação determinística](../concepts/verificacao-deterministica.md).
- **Navegador**: Matt Pocock (jan/2026, `demonstrado`) usa o Claude Code com o **Chrome DevTools MCP** para QA visual (screenshots, emulação de modo escuro), com uma skill que sobe o Chrome headless antes. Cita a extensão de Chrome do Claude como alternativa, que segundo ele não era suportada no WSL (afirmação datada, **não verificada**). Fonte: [resumo](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md).
- **Instalação de Skills pelo app desktop**: *Personalizar* → *Habilidades* lista e instala Skills da Anthropic (ex.: `skill creator`); Skills aparecem no menu `/`, às vezes só após recarregar/reabrir ([Usando Skills](../sources/2026-11-07_source-agentes-ia-usando-skill.md); nomes vindos de transcrição automática).
- **Uso programático**: modo headless/print (`-p`) e Agent SDK (Python/TypeScript). Exemplo de uso: invocado pela CLI dentro de um laço bash, uma tarefa por iteração, no [laço Ralph](../concepts/ralph-loop.md) de Matt Pocock ([vídeo de jan/2026](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md)); o comando e as flags não são lidos no vídeo.
- **Git worktrees nativas (`claude --worktree`)**: demonstrado por Matt Pocock (fev/2026). A flag cria a worktree em `.claude/worktrees/<nome aleatório>`, usando `git worktree` por baixo, num branch `worktree-<nome>`; ao sair, o Claude Code pergunta se mantém ou remove a worktree, e remover sem ter feito push perde as mudanças, segundo ele. No caso dele, o branch rastreava `origin/main` e o push só criou o branch remoto quando foi feito explicitamente para o branch nomeado; ele recomenda pedir isso ao agente e proteger main. O relato de que o commit "foi contra main" não está esclarecido (o próprio autor diz não entender bem o comportamento). Segundo ele, subagentes também podem usar worktrees, mas só se pedido explicitamente (fonte única). Fonte: [resumo](../sources/2026-02-21_source-matt-pocock-claude-worktree.md).
- **`/init`**: inicializa um `CLAUDE.md` com documentação do código; na demo de Matt Pocock (fev/2026, `demonstrado`) o comando dispara um sub agente Explore que lê arquivos e devolve um resumo, e o arquivo gerado traz introdução, comandos, arquitetura, serviços e rotas. Matt recomenda **nunca** usá-lo e apagar arquivos gerados por agente (opinião dele: conteúdo descobrível no código, que apodrece e pesa em toda requisição). Na sessão dele o Explore rodou em **Sonnet 4.6**; em jan/2026 ele dissera que o Explore "costuma usar" o Haiku 4.5. São observações de sessões, **não verificadas** como padrão. Fonte: [resumo](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md); ver [Rules e Skills](../concepts/rules-e-skills.md).
- **Sub agentes embutidos**: Explore, Plan, general-purpose, bash, status line setup, claude-code-guide.
- **Provedores**: API da Anthropic ou terceiros (Bedrock, Vertex AI, Foundry).

## Cronograma e Evolução

- 2025-10: vídeos de Matt Pocock mostram `/context` e `/compact` ([janela de contexto](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md)) e o fluxo plan mode → plano multifase → GitHub issue → limpar o contexto ([engenharia real](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md)).
- 2026-01: vídeo de Matt Pocock defende plan mode como etapa obrigatória do laço planejar → executar → testar → commit, com replanejamento no mesmo arquivo de plano ([plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md)).
- 2026-02: suporte nativo a git worktrees (`claude --worktree`) e worktrees para subagentes, testado por Matt Pocock em primeiras impressões ([claude --worktree](../sources/2026-02-21_source-matt-pocock-claude-worktree.md)).
- 2026-02: vídeo de Matt Pocock contra o `/init` e por um `CLAUDE.md` mínimo, com Explore em Sonnet 4.6 na sessão dele ([Never Run claude /init](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md)).
- 2026-02: no dia seguinte, Matt Pocock troca uma regra do `CLAUDE.md` por um hook `PreToolUse` que bloqueia `npm` ([hooks e CLI](../sources/2026-02-25_source-matt-pocock-hooks-cli.md)).
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
