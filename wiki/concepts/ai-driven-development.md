---
title: "AI-Driven Development (práticas de Matt Pocock)"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["ai-driven-development", "matt-pocock", "hitl", "afk", "tracer-bullets", "ia-generativa"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/assets/2026-11-12_home-repo-pattern.png
related_pages:
  - ./ia-generativa.md
  - ./tdd.md
  - ./engenharia-de-contexto.md
  - ./home-repo.md
  - ./rules-e-skills.md
  - ./spec-driven-development.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
---

# AI-Driven Development (práticas de Matt Pocock)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

**Tese central**: "Base de código ruim = agentes de IA ruins." Fundamentos clássicos de engenharia de software continuam essenciais na era da IA.

## Compreensão Atual

### Docs, Home Repo e Retro (posições posteriores de Matt Pocock)
- **Menos docs, mais código autoexplicativo**: a camada de docs em markdown que descreve o código se desatualiza e cria duas fontes de verdade. Vale manter só ADRs, glossário de domínio e uma camada fina de navegação. Responde em parte à questão "doc rot" (ver Questões Não Resolvidas). Fonte: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md).
- **Home Repo**: um repo único com skills, `AGENTS.md` e ponteiros para os demais repos, onde o agente sempre roda. Ver [Home Repo](./home-repo.md).
- **Skill `retro`**: analisa sessões passadas e sugere melhorias no repo (lint, code review); Matt defende **humano ou processo no loop** ("retro da retro") para validar se as mudanças ajudam. Fonte: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md); o artigo acadêmico citado não foi lido.

### HITL vs. AFK: Tipos de Tarefa
Separação clara entre tarefas que exigem humanos e tarefas automatizáveis:

| Tipo | Sigla | Descrição | Exemplos |
|---|---|---|---|
| **Human in the Loop** | HITL | Exige interação humana | Planejamento, decisões arquiteturais, design review, alinhamento, QA |
| **Away From Keyboard** | AFK | Pode ser automatizado sem humanos | Implementação pura, testes, refatorações, correções simples |

**Metáfora**: "Turno do dia" (humano planeja; enfileira trabalho) vs. "Turno da noite" (IA implementa AFK enquanto humano dorme).

**Princípio**: planejamento é **obrigatoriamente** HITL; implementação pode ser transformada em AFK.

### Fluxo Completo de Desenvolvimento
```
Ideia → Grill Me (HITL, 1h) → PRD (HITL) → Issues/Kanban (HITL) → Implementação (AFK, paralela) → QA (HITL) → Review (HITL) → Merge
```

#### 1. Grill Me: Sessão de Interrogatório
**Objetivo**: alcançar **entendimento compartilhado** entre humano e agente (não apenas gerar artefato).

Prompt da habilidade:
```
Interview me relentlessly about every aspect of this plan until we reach a shared understanding. 
Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. 
For each question, provide your recommended answer. Ask the questions one at a time.
If a question can be answered by exploring the codebase, explore the codebase instead.
```

- IA faz 40-100 perguntas; humano responde uma por uma
- Sessão pode durar 1 hora
- Histórico da conversa funciona como ativo de design
- Previne desalinhamento (maior problema ao trabalhar com IA)

**Crítica ao "specs to code"**: Matt rejeita a ideia de ignorar o código e trabalhar apenas com especificações — "tentei, é uma porcaria, não funciona. Você precisa ter controle do código."

#### 2. PRD: Product Requirements Document
**Estrutura**:
- Problem Statement + Solution
- User Stories ("As an \<actor\>, I want \<feature\>, so that \<benefit\>")
- Implementation Decisions (módulos, interfaces, API contracts — sem caminhos de arquivo ou snippets)
- Testing Decisions (o que faz bom teste, quais módulos testar, prior art)
- Out of Scope (essencial para "definition of done")
- Future Notes

**Filosofia de Matt**: "Eu não leio o PRD depois de gerado" — confia na capacidade de sumarização do LLM; já alcançou alinhamento no Grill Me.

**Doc rot (apodrecimento)**: PRDs no repositório apodrecem conforme código muda; Matt tende a descartá-los após implementação.

#### 3. PRD → Issues: Tracer Bullets (Balas Traçantes)
**Problema**: IA adora programar **horizontalmente** (camada por camada — fase 1: banco, fase 2: API, fase 3: frontend) → feedback tardio; só testa integração na fase 3.

**Solução: Vertical Slices (Fatias Verticais)**:
- **Definição**: fatias finas de funcionalidade que cruzam **todas as camadas** end-to-end (schema + API + UI + testes)
- **Origem**: _O Programador Pragmático_ — balas traçantes (com fósforo) permitem ver onde se está atirando
- **Benefício**: IA obtém feedback de todo o fluxo na fase 1; valida abordagem cedo

**Regras**:
- Cada slice entrega caminho completo e estreito através de todas as camadas
- Slice completo é demoável ou verificável por conta própria
- Preferir muitas fatias finas a poucas grossas
- Issues podem ter relações de bloqueio ("blocked by") → permite paralelização

#### 4. Implementação AFK: Loop Automatizado
**Estrutura do agente AFK**:
- Recebe issues locais (de `issues/*.md`) + últimos 5 commits
- Trabalha apenas em tasks AFK (ignora HITL)
- Se todas completas: `<promise>NO MORE TASKS</promise>`

**Priorização**: bugfixes críticos > infraestrutura de dev (testes, tipos) > tracer bullets > polish > refactors

**Ciclo**: explorar repo → usar `/tdd` → rodar feedback loops (`test`, `typecheck`) → commit → mover issue para `done`

**Regra**: ONLY WORK ON A SINGLE TASK

**Paralelização (Sand Castle)**: planner escolhe múltiplas issues independentes → cada issue roda em sandbox isolada (git worktree em Docker) → implementadores trabalham em paralelo → revisor (Opus) revisa commits → merger mescla branches e resolve conflitos

#### 5. QA e Review
**QA manual essencial**: impõe "bom gosto" humano; previne código genérico/malfeito (_slop_).

**Função do QA**: criar mais issues para o Kanban enquanto agente implementa.

**Review automatizada**:
- Limpar contexto antes de revisar (review na smart zone, não na dumb zone)
- Usar modelo mais inteligente para revisão (Opus) que para implementação (Sonnet)

### Arquitetura Testável: Módulos Profundos vs. Rasos
**Conceito de John Ousterhout** (_A Philosophy of Software Design_):

| Tipo | Características | Para IA |
|---|---|---|
| **Módulos Rasos** (ruins) | Muitos arquivos pequenos; dependências difusas; poucas exportações | Difícil navegar; difícil testar (onde desenhar limites?) |
| **Módulos Profundos** (bons) | Interface simples; muita funcionalidade interna | Fácil testar (um limite ao redor captura muita funcionalidade); fácil entender |

**Consequência**: "Sem ajuda, ou se você não vigiar a IA com cuidado, ela vai produzir uma base de código rasa."

**Como aprofundar**: usar habilidade `improve codebase architecture` — varredura procurando clusters de módulos para agrupar e testar como unidade.

**Mentalidade de "caixas cinzas"**: conhecer forma e comportamento do módulo; delegar implementação interna para IA.

### Push vs. Pull: Instruções para LLMs
**Push**: enviar instruções diretamente ao LLM (ex.: system prompt, padrões de código no contexto inicial).  
**Pull**: LLM busca informações quando necessário (ex.: Skills consultáveis).

**Uso prático**:
- **Implementador**: padrões disponíveis via Pull (Skills)
- **Revisor**: padrões enviados via Push (comparar código contra padrões)

### Skills Essenciais
| Skill | Função | Tipo |
|---|---|---|
| **Grill Me** | Sessão de interrogatório (40-100 perguntas; 1h) | HITL |
| **Write PRD** | Geração de Product Requirements Document estruturado | HITL |
| **PRD to Issues** | Conversão de PRD em issues paralelizáveis com tracer bullets | HITL |
| **TDD** | Ciclo red-green-refactor guiado por testes | AFK |
| **Improve Codebase Architecture** | Varredura para aprofundar módulos | AFK |

## Fontes de Suporte

- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — Quatro shorts (docs, dumb zone, Pragmatic Programmer, retro skill)](../sources/2026-07-16_source-matt-pocock-shorts.md)
- [Matt Pocock — The Home Repo Pattern (vídeo e artigo)](../sources/2026-11-12_source-matt-pocock-home-repo.md)

## Conceitos Relacionados

- [tdd](./tdd.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [home-repo](./home-repo.md)
- [rules-e-skills](./rules-e-skills.md)
- [spec-driven-development](./spec-driven-development.md)

## Questões Não Resolvidas

- **Sand Castle**: como configurar e usar a biblioteca de Matt Pocock? Documentação disponível?
- **Skills**: onde obter as Skills mencionadas por Matt Pocock (Grill Me, PRD, TDD, improve architecture)? Repositório público?
- ~~**Doc rot**: PRDs apodrecem — mas e decisões arquiteturais importantes? Como preservá-las?~~ → **Parcialmente resolvida** no short "Delete (most of) your docs" (2026-07-16): manter ADRs, glossário de domínio e camada fina de navegação; evitar docs que descrevem o código. Heurística de um autor, sem dados.
- **Limite de paralelização**: há limite prático de quantos agentes simultâneos? Custo/latência?
- **Push vs. Pull**: como implementar sistema de Pull (Skills consultáveis) na prática? MCP? Arquivos `.md` no repo?

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
