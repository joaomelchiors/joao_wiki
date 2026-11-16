---
title: "Essential Skills for AI Coding from Planning to Production"
descricao: 'Palestra de Matt Pocock — práticas de AI-Driven Development; smart zone/dumb zone; HITL vs. AFK; Grill Me; PRD; tracer bullets; módulos profundos vs. rasos; TDD; paralelização com Sand Castle.'
type: source
status: active
created: 2026-04-28
updated: 2026-11-15
tags: ["ai-driven-development", "arquitetura", "tdd", "modularizacao"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/ddd.md
  - ../concepts/ai-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/spec-driven-development.md
  - ../concepts/tdd.md
  - ../concepts/ralph-loop.md
  - ./2026-01-05_source-matt-pocock-ralph-wiggum.md
tipo_conteudo: opiniao
captura: automatica
---

# Essential Skills for AI Coding from Planning to Production

**Autor**: Matt Pocock ([@mattpocockuk](https://x.com/mattpocockuk))  
**Fonte**: [YouTube - Essential Skills for AI Coding](https://www.youtube.com/watch?v=-QFHIoCo-Ko)  
**Contexto**: Palestra técnica sobre desenvolvimento com IA, com foco em práticas de engenharia de software e arquitetura para maximizar a eficácia de agentes de IA.

**Classificação** (`tipo_conteudo: opiniao`, `captura: automatica`): palestra de um praticante sobre o próprio método; tem demonstrações pontuais (Sand Castle, Skills), mas o conteúdo dominante é experiência e posição pessoal. Legenda em inglês.

## Resumo

Palestra prática sobre como estruturar projetos e processos de desenvolvimento para maximizar a eficácia de agentes de IA. A tese central: **fundamentos clássicos da engenharia de software continuam cruciais na era da IA — base de código ruim = agentes de IA ruins**. Cobre restrições de LLMs (smart zone/dumb zone), fluxo HITL→AFK (Human in the Loop → Away From Keyboard), técnicas de planejamento (Grill Me, PRD, Kanban), arquitetura testável (módulos profundos vs. rasos, TDD), e paralelização de agentes.

## Pontos-Chave

### 1. Restrições dos LLMs: Smart Zone vs. Dumb Zone

- **Smart zone**: início da conversa, com poucos tokens — LLM faz o melhor trabalho
- **Dumb zone**: ~100k tokens em diante — relações de atenção ficam tensionadas, LLM fica progressivamente "burro"
- **Analogia**: adicionar token é como adicionar time a uma liga de futebol — número de partidas escala quadraticamente (relações de atenção entre tokens)
- **Consequência**: dimensionar tarefas para permanecerem dentro da smart zone; evitar compactação contínua de contexto
- **Solução**: planos multi-fase com limpeza de contexto entre fases (preferível a loops infinitos de acumulação)

### 2. LLMs como "Memento": Amnésia Contínua

- **Metáfora**: LLMs são como o personagem do filme _Memento_ — esquecem continuamente ao limpar contexto
- **Ciclo de sessão**: prompt do sistema → exploração → implementação → teste → limpar → volta ao prompt do sistema
- **Filosofia**: preferir limpar contexto (voltar ao estado base determinístico) em vez de compactar (que cria histórico variável)
- **Benefício**: estado sempre consistente; cada sessão começa do zero; reduz acúmulo de "resíduos" de contexto

### 3. HITL vs. AFK: Tipos de Tarefa

- **HITL (Human in the Loop)**: tarefas que exigem interação humana — planejamento, decisões arquiteturais, design review, alinhamento
- **AFK (Away From Keyboard)**: tarefas que podem ser implementadas e mescladas sem humanos — implementação pura, testes, refatorações
- **Princípio**: planejamento **obrigatoriamente** HITL; implementação pode ser transformada em AFK
- **Metáfora**: "turno do dia" (humano planeja) vs. "turno da noite" (IA implementa AFK enquanto humano dorme)

### 4. Grill Me: Sessão de Interrogatório

**Prompt da habilidade**:
```
Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer. Ask the questions one at a time. If a question can be answered by exploring the codebase, explore the codebase instead.
```

- **Objetivo**: alcançar **entendimento compartilhado** entre humano e agente (não apenas gerar um artefato)
- **Processo**: IA faz 40-100 perguntas; humano responde uma por uma; sessão pode durar 1 hora
- **Valor**: histórico da conversa funciona como ativo de design; previne desalinhamento (maior problema ao trabalhar com IA)
- **Crítica ao "specs to code"**: Matt rejeita a ideia de ignorar o código e trabalhar apenas com especificações — "tentei, é uma porcaria, não funciona"
- **Pair programming com IA**: ideal ter humano especialista do domínio + IA na mesma sala (ou outro dev + IA para questões técnicas)

### 5. PRD (Product Requirements Document): Documento de Destino

**Estrutura do PRD**:
- **Problem Statement**: problema do usuário
- **Solution**: solução proposta
- **User Stories**: lista extensa no formato "As an \<actor\>, I want \<feature\>, so that \<benefit\>"
- **Implementation Decisions**: módulos a construir/modificar, interfaces, decisões arquiteturais, API contracts (sem caminhos de arquivo ou snippets de código — apodrecem rápido)
- **Testing Decisions**: o que faz um bom teste, quais módulos serão testados, prior art de testes na codebase
- **Out of Scope**: o que NÃO será feito (essencial para "definition of done")
- **Future Notes**: observações adicionais

**Filosofia**:
- PRD resume o conceito de design alcançado durante o Grill Me
- **Matt não lê o PRD depois de gerado** — confia na capacidade de sumarização do LLM; já alcançou alinhamento no Grill Me
- PRD é volátil — pode apodrecer (_doc rot_) se mantido no repositório após implementação; Matt tende a descartá-lo (marcar issue como fechada)

### 6. PRD → Issues: Tracer Bullets (Balas Traçantes)

**Problema**: IA adora programar **horizontalmente** (camada por camada — fase 1: banco, fase 2: API, fase 3: frontend)  
**Consequência**: feedback tardio; só testa integração completa na fase 3

**Solução: Tracer Bullets (Fatias Verticais)**:
- **Definição**: fatias finas de funcionalidade que cruzam **todas as camadas** end-to-end (schema + API + UI + testes)
- **Origem**: _O Programador Pragmático_ — balas traçantes (com fósforo) permitem ver onde se está atirando à noite; **feedback instantâneo**
- **Benefício**: IA obtém feedback de todo o fluxo na fase 1; pode validar e ajustar abordagem cedo
- **Preferência**: muitas fatias finas > poucas fatias grossas
- **Kanban com dependências**: issues podem ter relações de bloqueio ("blocked by") → permite paralelização (múltiplos agentes trabalhando em paralelo em issues independentes)

**Regras de Vertical Slices**:
- Cada slice entrega caminho completo e estreito através de todas as camadas
- Slice completo é demoável ou verificável por conta própria
- Preferir muitas fatias finas a poucas grossas

### 7. Módulos Profundos vs. Rasos (John Ousterhout)

**Conceito-chave de _A Filosofia do Design de Software_**:

**Módulos Rasos** (ruins):
- Muitos arquivos pequenos com poucas exportações
- Dependências complexas e difusas
- Difícil para IA navegar (precisa rastrear grafo de dependências manualmente)
- Difícil testar (onde desenhar os limites de teste? mock de tudo?)
- **IA tende a produzir codebase rasa sem supervisão**

**Módulos Profundos** (bons):
- Interface pequena e simples
- Muita funcionalidade interna encapsulada
- Fácil de testar (um grande limite de teste ao redor do módulo captura muita funcionalidade)
- Fácil para IA entender e modificar
- **Permite mentalidade de "caixas cinzas"**: conhecer forma e comportamento do módulo, delegar implementação interna para IA

**Como aprofundar módulos**: usar habilidade `improve codebase architecture` — faz varredura procurando clusters de módulos que podem ser agrupados e testados como unidade

### 8. TDD (Test-Driven Development) como Essencial para IA

**Ciclo Red-Green-Refactor**:
1. Escrever teste que falha (red)
2. Fazer implementação passar (green)
3. Refatorar

**Por que TDD é essencial para IA**:
- Adiciona bons testes à codebase automaticamente
- **Dificulta trapaça**: IA tende a "trapacear" em testes (fazer implementação primeiro, depois testes que apenas validam o que foi feito)
- TDD inverte: instrumenta o código antes de escrevê-lo → IA precisa fazer implementação real
- Ciclos de feedback são **essenciais** para IA não programar "às cegas"
- **Qualidade dos ciclos de feedback = teto da qualidade da IA**

**Filosofia de Matt sobre testes**:
- Testes 100% nas regras de negócio (model + use case)
- Frontend muito difícil de testar automaticamente com IA (multimodal; precisa de olhos humanos)
- Para frontend: IA pode gerar protótipos descartáveis para escolha humana

### 9. Implementação AFK: Loop de Ralph

> Versão anterior (jan/2026, PRD em JSON + `progress.txt`) e comparação em [Laço Ralph](../concepts/ralph-loop.md).

**Estrutura do prompt do agente AFK**:
- Recebe issues locais (concatenadas de `issues/*.md`) + últimos 5 commits
- Trabalha apenas em tasks AFK (ignora HITL)
- Se todas AFK completas: `<promise>NO MORE TASKS</promise>`

**Priorização de tarefas**:
1. Critical bugfixes
2. Development infrastructure (testes, tipos, scripts de dev)
3. Tracer bullets para novas features
4. Polish e quick wins
5. Refactors

**Ciclo**:
1. Explorar repo
2. Usar `/tdd` para completar tarefa
3. Rodar feedback loops (`npm run test`, `npm run typecheck`)
4. Commit (mensagem deve incluir: decisões-chave, arquivos alterados, blockers/notas para próxima iteração)
5. Mover issue para `issues/done` ou adicionar nota sobre o que foi feito

**Regra final**: ONLY WORK ON A SINGLE TASK

### 10. Revisão de Código e Paralelização

**Revisão automatizada**:
- Limpar contexto antes de revisar (review na smart zone, não na dumb zone)
- Usar Opus para revisão (mais inteligente), Sonnet para implementação
- **Push vs. Pull**: revisor recebe _push_ de padrões de código (comparar código contra padrões); implementador tem padrões disponíveis via _pull_ (Skills)

**Paralelização (Sand Castle)**:
- Planejador escolhe múltiplas issues independentes do backlog (resolve relações de bloqueio)
- Para cada issue: cria sandbox (git worktree isolada em Docker) + roda implementador
- Se commits criados: roda revisor
- Merger agent mescla branches; resolve conflitos de merge/tipos/testes

**Custo**: desenvolvedores fazem mais revisão de código agora; difícil combinar com "PRs pequenos e autocontidos"

### 11. Filosofia do Fluxo

**Fluxo completo**:
```
Ideia → Grill Me (HITL) → PRD (HITL) → Issues/Kanban (HITL) → Implementação (AFK) → QA (HITL) → Review (HITL) → Merge
```

**Princípios**:
- **Planejamento = turno do dia** (humano cuida; enfileira muito trabalho para agente)
- **Implementação = turno da noite** (agente trabalha AFK)
- **Manter forma da codebase em mente**: não é specs-to-code; pensar em módulos e interfaces o tempo todo
- **Não otimizar PRD excessivamente**: valor está no alinhamento (Grill Me), não no documento perfeito
- **QA manual essencial**: impõe "bom gosto" humano; previne código genérico/malfeito (_slop_)
- **Função do QA**: criar mais issues para o Kanban enquanto agente implementa

**Manutenção de sanidade**:
- Conhecer forma/comportamento dos módulos (interfaces), delegar implementação interna
- Revisar testes primeiro (garantir que testam coisas razoáveis), depois código
- Monitorar tokens usados (status line) para saber distância da dumb zone

## Afirmações/Observações Principais

1. **"Base de código ruim sempre resultará em agentes de IA ruins"** — fundamentos de engenharia continuam essenciais
2. **"Você precisa ter controle do código, entender o que há nele e moldá-lo, porque o código é o seu campo de batalha"** — crítica ao movimento specs-to-code
3. **"IA adora programar horizontalmente"** — sem orientação, faz camada por camada; precisa ser direcionada para fatias verticais
4. **"Se sua base de código não tem ciclos de feedback, você nunca vai obter resultado decente da IA"** — feedback é teto de qualidade
5. **"Planejamento tem obrigatoriamente que manter humano no ciclo"** — não pode ser automatizado; implementação pode
6. **"Eu não leio o PRD"** — confia na capacidade de sumarização do LLM; alinhamento já foi alcançado no Grill Me
7. **"Sem ajuda, ou se você não vigiar a IA com cuidado, ela vai produzir uma base de código rasa"** — necessita supervisão arquitetural
8. **"Se vocês puderem levar apenas uma lição: vão à Amazon e comprem os livros antigos de desenvolvimento de software"** — _O Programador Pragmático_, _A Filosofia do Design de Software_, etc. contêm práticas verbalizadas que funcionam perfeitamente para instruir LLMs

## Notas de Evidência

- **Restrições de LLMs**: discussão sobre zona inteligente/burra (início da palestra); referência a Dex Hy (Human Layer); ~100k tokens como marca pessoal de Matt
- **Grill Me**: demonstração ao vivo; exemplo de briefing de gamificação; 40-100 perguntas; 1 hora de sessão
- **PRD**: template completo mostrado; habilidade `/prd` demonstrada ao vivo
- **Tracer bullets**: comparação horizontal vs. vertical com diagramas; demonstração de correção da IA ao propor primeira fatia horizontal
- **Módulos profundos**: referência direta a John Ousterhout (_A Philosophy of Software Design_); diagramas de módulos rasos vs. profundos
- **TDD**: demonstração ao vivo; ciclo red-green-refactor; menção a IA "trapaceando" em testes
- **Loop de Ralph**: código bash (`once.sh`, `afk.sh`) mostrado; estrutura do prompt; jq para parsing de JSON
- **Sand Castle**: biblioteca TypeScript de Matt; `main.ts` com planner → implementers → reviewer → merger
- **Habilidade "improve codebase architecture"**: demonstrada ao vivo; encontrou candidatos a módulos profundos (serviço de pontuação de questionários, lógica de reordenação)

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [AI-Driven Development (práticas de Matt Pocock)](../concepts/ai-driven-development.md), [Engenharia de Contexto](../concepts/engenharia-de-contexto.md), [Spec-Driven Development (SDD)](../concepts/spec-driven-development.md), [TDD (Test-Driven Development) com IA](../concepts/tdd.md).

### Conceitos afetados

**`concepts/ia-generativa.md`**:
- Adicionar seção sobre práticas de AI-Driven Development (smart zone/dumb zone, HITL vs. AFK)
- Expandir seção de Agentes com técnicas concretas (Grill Me, PRD, Kanban, paralelização)
- Adicionar seção sobre Skills (Grill Me, PRD, TDD, improve architecture)
- Complementar engenharia de prompt com Push vs. Pull

**`concepts/arquitetura-limpa.md`**:
- Adicionar conceito de módulos profundos vs. rasos (John Ousterhout)
- Reforçar importância de testabilidade (módulos profundos = fácil testar)
- Tracer bullets / fatias verticais como técnica de implementação incremental
- Relação entre arquitetura e eficácia da IA

**`concepts/ddd.md`**:
- Módulos profundos podem mapear para Bounded Contexts ou Agregados
- Reforçar que modularização é pilar #1 para AI-Driven Dev (convergência com aula IA-06)

### Entidades afetadas

**Nova entidade**: `entities/matt-pocock.md`
- Especialista em TypeScript; criador de conteúdo educacional; palestrante
- Biblioteca Sand Castle (gerenciador de agentes paralelos)
- Repositório: `mattpocock/course-video-manager`

**`entities/formacao-dev.md`**:
- Material externo (não da formacao.dev) mas alinhado com trilha Dev AI

### Overview

**`overview.md`**:
- Adicionar hipótese: "Arquitetura de módulos profundos (John Ousterhout) maximiza eficácia de agentes de IA"
- Adicionar perspectiva: "Grill Me, PRD, Tracer Bullets e TDD como práticas essenciais para AI-Driven Development"
- Reforçar convergência: fundamentos clássicos de engenharia (TDD, módulos, feedback loops) continuam cruciais na era da IA

### Contradições

**Nenhuma contradição direta**. Material de Matt Pocock **reforça e complementa** as aulas IA-06, IA-07, IA-08:
- Aula IA-06 fala de "modularização como pilar #1" — Matt demonstra **como** estruturar módulos (profundos vs. rasos)
- Aula IA-07 define agentes — Matt mostra **como** orquestrar agentes em prática (paralelização, Kanban)
- Aula IA-08 fala de engenharia de prompt/contexto — Matt aplica com Skills (Grill Me, PRD, TDD) e Push vs. Pull

## Questões Não Resolvidas

1. **Sand Castle**: como configurar e usar a biblioteca? Documentação disponível?
2. **Claude Code**: Matt menciona uso extensivo — quais recursos específicos usa? Como configura permissões?
3. **Habilidades (Skills)**: onde obter as Skills mencionadas (Grill Me, PRD, TDD, improve architecture)? Repositório público?
4. **Revisão de código crescente**: "fazemos mais revisão de código agora" — há técnicas para lidar com volume sem perder qualidade?
5. **Protótipos de frontend**: como exatamente Matt usa IA para gerar protótipos descartáveis? Fluxo detalhado?
6. **Doc rot (apodrecimento de documentação)**: PRDs no repositório apodrecem — mas e decisões arquiteturais importantes? Como preservá-las?
7. **Multi-agentes**: Sand Castle permite paralelização — há limite prático de quantos agentes simultâneos? Custo/latência?
8. **Push vs. Pull**: como implementar sistema de Pull (Skills consultáveis) na prática? MCP? Arquivos `.md` no repo?

## Páginas Relacionadas

- [ia-generativa.md](../concepts/ia-generativa.md): conceito principal — adicionar práticas de AI-Driven Dev
- [arquitetura-limpa.md](../concepts/arquitetura-limpa.md): módulos profundos, testabilidade, tracer bullets
- [ddd.md](../concepts/ddd.md): modularização como pilar #1 (convergência)
- [matt-pocock.md](../entities/matt-pocock.md): autor/palestrante (a criar)
- [formacao-dev.md](../entities/formacao-dev.md): contexto da trilha Dev AI (material complementar externo)
