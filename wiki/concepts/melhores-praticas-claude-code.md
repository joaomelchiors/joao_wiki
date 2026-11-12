---
title: "Melhores Práticas Operacionais do Claude Code"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["claude-code", "boas-praticas", "sessoes", "sandbox", "ia-generativa"]
source_files:
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
related_pages:
  - ./ia-generativa.md
  - ./harness.md
  - ./engenharia-de-contexto.md
  - ./ai-driven-development.md
  - ../sources/2026-07-18_source-claude-code-melhores-praticas.md
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
- **Modelos por tipo de tarefa**: Opus para planejamento/arquitetura/revisão (alta alavancagem); Sonnet para implementação rotineira. Workflow documentado: Opus planeja e divide em tarefas → Sonnet implementa cada tarefa em paralelo. Alinha com o padrão HITL/AFK de Matt Pocock, agora confirmado pela Anthropic.
- **`/goal` para objetivos verificáveis**: para tarefas grandes com estado final claro (ex.: "CI com zero erros e testes passando"), usar `/goal` para manter o agente trabalhando de forma autônoma até atingir o objetivo.

**Infraestrutura e segurança**:
- **`.claude` do projeto versionado**: commitar o diretório `.claude` do projeto (não o pessoal/global) garante que toda a equipe opera com as mesmas Rules, Skills e configurações.
- **`review.md` dedicado para code review**: arquivo `.claude/review.md` deve conter *apenas* informações pertinentes a code reviews; informações gerais do projeto pertencem ao `CLAUDE.md` — separação de responsabilidades no nível dos arquivos de configuração.
- **Sandbox para auto mode**: a Anthropic recomenda rodar o Claude Code em VM ou container ao operar sem interrupção (auto mode prolongado) para evitar hot loops destrutivos — confirma a responsabilidade do desenvolvedor no harness.
- **Ferramentas detectadas automaticamente**: não é necessário nomear ferramentas no prompt; basta descrever o objetivo ("teste o browser" → Claude Code infere Playwright).

## Fontes de Suporte

- [Claude Code — Melhores Práticas (Augusto Galego)](../sources/2026-07-18_source-claude-code-melhores-praticas.md)

## Conceitos Relacionados

- [harness](./harness.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [ai-driven-development](./ai-driven-development.md)

## Questões Não Resolvidas

- Nenhuma registrada até agora para este tema.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
