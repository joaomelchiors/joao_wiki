---
title: "Augusto Galego — A Própria Anthropic Explica Como Usar o Claude Code (Melhores Práticas)"
type: source
status: active
created: 2026-07-19
updated: 2026-11-12
tags: ["claude-code", "melhores-praticas", "anthropic", "ai-driven-development", "harness", "sessoes", "contexto"]
source_files:
  - raw/sources/2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/matt-pocock.md
tipo_conteudo: referencia
captura: automatica
---

# Augusto Galego — A Própria Anthropic Explica Como Usar o Claude Code (Melhores Práticas)

**Classificação** (`tipo_conteudo: referencia`, `captura: automatica`): digest falado (vídeo de terceiro) da documentação oficial da Anthropic; referência de segunda mão.

## Resumo

Transcrição de vídeo do canal de Augusto Galego (YouTube) que compila ~20 melhores práticas do Claude Code extraídas diretamente da documentação oficial da Anthropic. O autor enfatiza que as recomendações não são opiniões pessoais — são extraídas da própria documentação do fabricante. O material abrange desde práticas de prompt até gerenciamento de sessões, controle de contexto, uso de modelos por tipo de tarefa e segurança.

Fonte original do vídeo: `https://www.youtube.com/watch?v=iMso7WbhUr0`
Links documentação referenciados: Melhores Práticas (`code.claude.com/docs/en/best-practices`), Prompt Library (`code.claude.com/docs/en/prompt-library`), Common Workflows (`code.claude.com/docs/en/common-workflows`).

## Pontos-Chave

1. **Método de verificação no prompt**: incluir instrução de autoverificação no próprio prompt (ex.: \"ao terminar, rode os testes; compare screenshot com o original e liste as diferenças\").
2. **Descrever estado desejado, não passos**: \"diga o que você quer e deixe o Claude encontrar os arquivos\" — resultado > procedimento.
3. **Incrementos testáveis**: fazer reparações em pequenos incrementos testáveis.
4. **Interromper cedo**: redirecionar o Claude Code imediatamente ao detectar presunção errada ou caminho incorreto.
5. **Regras específicas, não vagas**: \"utilize clean code\" < \"se acessar URL, use esta classe/lib desta forma\" — precisão supera generalidade.
6. **Contexto novo para tarefas não relacionadas**: usar `/clear` para evitar poluição de contexto entre tarefas distintas.
7. **Menor diretório possível**: iniciar o Claude Code no diretório mais específico para a tarefa (ex.: `backend/` em vez da raiz do monorepo).
8. **Modelos pesados focam em resultado**: para modelos como Opus, o prompt ideal descreve resultado, limitações e evidências — não uma sequência de ações.
9. **Hierarquia de modelos por tipo de tarefa**: Opus para planejamento/arquitetura (alta alavancagem); Sonnet para implementação rotineira. Workflow possível: Opus planeja e divide → Sonnet implementa cada parte.
10. **Checkpoints e `/rewind`**: o Claude Code mantém histórico de sessão; o comando `/rewind` permite voltar a um ponto anterior — útil quando a conversa degringolou na segunda metade.
11. **Gerenciamento de sessões**: usar `/rename` para nomear sessões antes de abandoná-las; `claude resume <nome>` para retomar com contexto completo. Sessões ficam salvas localmente por 30 dias em `.claude/projects`.
12. **`/goal` para objetivos verificáveis**: para tarefas grandes com estado final claro (ex.: \"CI com zero erros e testes passando\"), usar o comando `/goal` para manter o agente trabalhando de forma autônoma rumo ao objetivo.
13. **`review.md` dedicado para code review**: arquivo `.claude/review.md` contém apenas informações pertinentes a reviews; informações gerais do projeto ficam no `CLAUDE.md`. Facilita reviews de PRs complexos.
14. **Monitorar contexto com `/context`**: mostra o conteúdo e o percentual da janela ocupado — permite identificar e remover informações irrelevantes.
15. **Commitar o `.claude` do projeto**: o diretório `.claude` de projeto (não o pessoal/global) deve ser versionado para que toda a equipe opere com as mesmas Rules, Skills e configurações.
16. **Sandbox para auto mode**: a Anthropic recomenda rodar o Claude Code em VM ou container quando operando sem interrupção para evitar hot loops destrutivos.
17. **Ferramentas detectadas automaticamente**: não é necessário nomear ferramentas no prompt — basta descrever o objetivo (\"teste no browser\" é suficiente; o Claude Code infere que deve usar o Playwright).
18. **Retenção de sessões configurável**: o cache de sessões em `.claude/projects` persiste 30 dias por padrão; o período é configurável; sessões individuais podem ser deletadas manualmente.

## Afirmações/Observações Principais

- **Fonte primária**: todas as práticas são atribuídas pelo autor à documentação oficial Anthropic (Best Practices, Prompt Library, Common Workflows) — não são opiniões pessoais do youtuber.
- **Hierarquia de modelos confirma HITL/AFK**: Opus para planejamento (HITL) e Sonnet para implementação (AFK) é exatamente o padrão de Matt Pocock — reforçado agora pela própria Anthropic.
- **Sessões como ativo de trabalho**: o modelo mental de \"sessão nomeada\" implica que o contexto de decisões tomadas com o Claude Code é um ativo valioso que deve ser preservado, não descartado a cada commit.
- **`.claude` versionado**: commitar as configurações do projeto no Git garante que Rules e Skills são propagadas para toda a equipe — alinha com o princípio de regras como restrições operacionais documentado no harness.
- **Auto mode com sandbox**: a Anthropic reconhece o risco de loops destrutivos e recomenda ambiente isolado — confirma a responsabilidade do desenvolvedor no harness (verificações, permissões).

## Notas de Evidência

- O vídeo cita explicitamente URLs de documentação primária da Anthropic, tornando as afirmações verificáveis diretamente.
- O canal é de popularização (YouTube), não documentação oficial — considerar como digest curado de fonte primária, não como fonte primária em si.
- As práticas de gerenciamento de sessões (`/rename`, `/rewind`, `/goal`) referem-se a comandos específicos do Claude Code — verificar na documentação atual se disponíveis na versão em uso.

## Impacto na Wiki Existente

- **`concepts/ia-generativa.md`**: adicionar subseção **"Melhores Práticas Operacionais do Claude Code"** na seção de Harness. As práticas complementam o loop de execução e as responsabilidades do desenvolvedor já documentados — sem contradições.
- Nenhuma entidade nova identificada. O material faz referência a um canal do YouTube (Augusto Galego) — não recorrente o suficiente para criar página de entidade.
- Nenhuma contradição com fontes anteriores:
  - Hierarquia Opus/Sonnet = HITL/AFK de Matt Pocock e formacao.dev (confirmado pela Anthropic).
  - Sessões e contexto = detalha mecanismos do harness já documentados.
  - Sandbox para auto mode = confirma responsabilidade do desenvolvedor no harness.

## Questões Não Resolvidas

- Como exatamente funciona o `/rewind` — é granular por mensagem ou por ponto de commit interno do Claude Code?
- O arquivo `review.md` tem estrutura recomendada pela Anthropic ou é totalmente aberto?
- Como a Anthropic define o limite entre \"auto mode seguro\" vs. o que exige sandbox?

## Páginas Relacionadas

- [IA Generativa (conceito)](../concepts/ia-generativa.md): seções de Harness, AI-Driven Development e Infraestrutura Prática de Skills são as mais afetadas por este material.
- [Matt Pocock — Essential Skills for AI Coding](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): alinha hierarquia de modelos com HITL/AFK e uso de Opus para revisão.
- [Ferramentas Agênticas — Harness](./2026-07-17_source-ferramentas-agenticas-harness.md): formaliza o harness cujos mecanismos de sessão e contexto este material detalha operacionalmente.
