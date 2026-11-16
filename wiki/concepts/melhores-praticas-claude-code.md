---
title: "Melhores Práticas Operacionais do Claude Code"
descricao: 'Melhores práticas operacionais do Claude Code (verificação, sessões, `/rewind`, `/goal`, sandbox) e práticas relatadas por Matt Pocock (worktree por sessão, hooks que bloqueiam comandos).'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["claude-code", "boas-praticas", "sessoes", "sandbox", "ia-generativa"]
source_files:
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
  - raw/sources/2025-10-27_how-i-use-claude-code-for-real-engineering_en-corrigida_kZ-zzHVUrO4.md
  - raw/sources/2026-02-21_i-m-using-claude-worktree-for-everything-now_en-corrigida_yv8VZpov8bk.md
  - raw/sources/2026-02-25_how-to-actually-force-claude-code-to-use-the-right-cli-don_en-corrigida_3CSi8QAoN-s.md
related_pages:
  - ../sources/2026-02-25_source-matt-pocock-hooks-cli.md
  - ./verificacao-deterministica.md
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ./ia-generativa.md
  - ./harness.md
  - ./engenharia-de-contexto.md
  - ./ai-driven-development.md
  - ../sources/2026-07-18_source-claude-code-melhores-praticas.md
  - ../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ../sources/2026-02-21_source-matt-pocock-claude-worktree.md
---

# Melhores Práticas Operacionais do Claude Code

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Digest das ~20 melhores práticas operacionais que a Anthropic documenta para o Claude Code, vistas em vídeo de Augusto Galego (2026-07): prompts com verificação, gestão de contexto e sessões, hierarquia de modelos, infraestrutura e segurança.

## Compreensão Atual

### Melhores Práticas Operacionais do Claude Code (Documentação Anthropic)
*(Fonte: vídeo de Augusto Galego, digest da documentação oficial Anthropic, 2026-07)*

A Anthropic documenta ~20 melhores práticas operacionais para o Claude Code. As mais relevantes para o trabalho com agentes:

**Práticas de prompt**:
- **Incluir método de verificação no prompt**: inserir instrução de autoverificação no próprio prompt — ex.: "ao terminar, rode os testes; compare screenshot com o original e liste as diferenças". A Anthropic chama isso de *ground truth* do resultado esperado.
- **Descrever estado desejado, não passos**: "diga o que você quer e deixe o Claude encontrar os arquivos" — descrever *resultado* supera prescrever *sequência de ações*. Para modelos mais pesados (Opus), focar em resultado, limitações e evidências é ainda mais eficaz.
- **Incrementos testáveis**: fazer reparações em pequenos incrementos; validar cada passo antes de avançar.
- **Interromper cedo**: ao detectar presunção errada ou caminho incorreto, redirecionar imediatamente — quanto antes, menos dano ao contexto.
- **Regras específicas, não vagas**: "utilize clean code" < "se acessar URL, use a classe `HttpClient` desta forma" — precisão supera generalidade nas Rules.

**Gestão de contexto e sessões**:
- **Contexto novo para tarefas não relacionadas**: usar `/clear` antes de iniciar tarefa sem relação com o histórico atual — evita poluição.
- **Menor diretório possível**: iniciar o Claude Code no diretório mais específico para a tarefa (ex.: `backend/` em vez da raiz do monorepo) — contexto menor, menos ruído.
- **Monitorar contexto com `/context`**: exibe percentual da janela ocupado e o conteúdo atual — permite identificar e remover informações irrelevantes antes que compressão automática degrade a qualidade.
- **Sessões nomeadas e persistentes**: usar `/rename` para nomear sessões antes de abandoná-las; `claude resume <nome>` para retomar com contexto completo. Sessões ficam salvas em `.claude/projects` por **30 dias** (configurável) — o contexto de decisões é um ativo preservável, não descartável.
- **Checkpoints e `/rewind`**: o Claude Code mantém histórico interno; o comando `/rewind` permite voltar a um ponto anterior na conversa — útil quando a segunda metade de uma sessão longa degringolou sem precisar reverter no Git.

**Hierarquia de modelos e objetivos**:
- **Modelos por tipo de tarefa**: Opus para planejamento/arquitetura/revisão (alta alavancagem); Sonnet para implementação rotineira. Workflow documentado: Opus planeja e divide em tarefas → Sonnet implementa cada tarefa em paralelo. Interpretação: é parecido com o padrão HITL/AFK de [Matt Pocock](./ai-driven-development.md), mas a fonte (resumo de terceiro da documentação da Anthropic) não faz essa ligação. As duas descrições convergem; uma não confirma a outra.
- **`/goal` para objetivos verificáveis**: para tarefas grandes com estado final claro (ex.: "CI com zero erros e testes passando"), usar `/goal` para manter o agente trabalhando de forma autônoma até atingir o objetivo.

**Infraestrutura e segurança**:
- **`.claude` do projeto versionado**: commitar o diretório `.claude` do projeto (não o pessoal/global) garante que toda a equipe opera com as mesmas Rules, Skills e configurações.
- **`review.md` dedicado para code review**: arquivo `.claude/review.md` deve conter *apenas* informações pertinentes a code reviews; informações gerais do projeto pertencem ao `CLAUDE.md` — separação de responsabilidades no nível dos arquivos de configuração.
- **Sandbox para auto mode**: a Anthropic recomenda rodar o Claude Code em VM ou container ao operar sem interrupção (auto mode prolongado) para evitar hot loops destrutivos — confirma a responsabilidade do desenvolvedor no harness.
- **Ferramentas detectadas automaticamente**: não é necessário nomear ferramentas no prompt; basta descrever o objetivo ("teste o browser" → Claude Code infere Playwright).

### Prática relatada por Matt Pocock (out/2025)

Fora da documentação oficial: segundo Matt Pocock, ele planeja antes de qualquer código em trabalho grande, revisa só no fim de cada fase (no diff do editor) e faz commit ou stage entre fases para separar o que cada uma acrescentou ([How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md); demonstrado, preferência dele).

Em fev/2026, segundo o mesmo autor, ele passa a abrir cada sessão numa worktree própria com `claude --worktree`, terminando o trabalho num PR de volta para main. Cuidados que ele relata: mandar o agente fazer push para o branch nomeado da worktree (senão o push pode mirar o branch de origem), proteger main e manter um hook que bloqueia `git push` do agente; ao sair, só remover a worktree depois do push. Demonstrado, com comportamento de branch que ele próprio diz não entender bem ([claude --worktree](../sources/2026-02-21_source-matt-pocock-claude-worktree.md)).

Quatro dias depois, ele explica como faz esse tipo de bloqueio: em vez de regra no `CLAUDE.md`, um **hook `PreToolUse`** que barra o comando (exit code 2) e diz ao agente o que usar no lugar. Na demo, bloqueia `npm` e o agente troca por `pnpm`; o bloqueio de `git push` já estava na configuração global dele e não é mostrado. Demonstrado; a preferência por hooks em vez de regras é opinião dele ([hooks e CLI](../sources/2026-02-25_source-matt-pocock-hooks-cli.md); ver [Verificação determinística](./verificacao-deterministica.md)).

## Fontes de Suporte

- [Claude Code — Melhores Práticas (Augusto Galego)](../sources/2026-07-18_source-claude-code-melhores-praticas.md)
- [Matt Pocock — How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): prática de um usuário, separada da documentação.
- [Matt Pocock — I'm using claude --worktree for everything now](../sources/2026-02-21_source-matt-pocock-claude-worktree.md): worktree por sessão e cuidados com o push (fev/2026).
- [Matt Pocock — How to actually force Claude Code to use the right CLI](../sources/2026-02-25_source-matt-pocock-hooks-cli.md): hook `PreToolUse` no lugar de regra no `CLAUDE.md` (fev/2026).

## Conceitos Relacionados

- [harness](./harness.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [ai-driven-development](./ai-driven-development.md)

## Questões Não Resolvidas

- Nenhuma registrada até agora para este tema.

## Notas de Atualização

- 2026-11-15: acrescentado o hook `PreToolUse` que bloqueia comandos, relatado por Matt Pocock (fev/2026), em "Prática relatada por Matt Pocock" (ingestão).
- 2026-11-15: acrescentada a prática de worktree por sessão relatada por Matt Pocock (fev/2026), em "Prática relatada por Matt Pocock" (ingestão).
- 2026-11-15: adicionada a prática relatada por Matt Pocock (planejar, revisar por fase, commit entre fases), separada da documentação oficial (ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
