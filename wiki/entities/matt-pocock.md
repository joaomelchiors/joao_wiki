---
title: "Matt Pocock"
type: entity
status: active
created: 2026-04-28
updated: 2026-11-12
tags: ["pessoa", "typescript", "ai-coding"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
related_pages:
  - ../concepts/home-repo.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
  - ../concepts/ia-generativa.md
  - ../concepts/arquitetura-limpa.md
---

# Matt Pocock

## Visão Geral

Especialista em TypeScript, educador técnico e palestrante sobre desenvolvimento com IA. Criador de conteúdo educacional amplamente reconhecido na comunidade TypeScript e autor de ferramentas open-source para AI-driven development.

## Informações de Contato

- **Twitter/X**: [@mattpocockuk](https://x.com/mattpocockuk)
- **GitHub**: mattpocock
- **Repositório principal**: `mattpocock/course-video-manager`

## Expertise e Áreas de Atuação

### TypeScript
- Especialista reconhecido na comunidade
- Criador de conteúdo educacional sobre TypeScript
- "Vocês veem por que eu parei de ensinar TypeScript? Porque agora a IA simplesmente sabe tudo" (comentário durante palestra)

### AI-Driven Development
- Foco em práticas de engenharia de software para maximizar eficácia de agentes de IA
- Desenvolvedor de ferramentas para orquestração de agentes (Sand Castle)
- Defensor da tese: "fundamentos clássicos da engenharia de software continuam cruciais na era da IA"

## Contribuições Principais

### Sand Castle
Biblioteca TypeScript open-source para orquestração de agentes de IA em paralelo.

**Características**:
- Função `run` que cria git worktrees isoladas em sandboxes Docker
- Permite paralelização de múltiplos agentes trabalhando em issues independentes
- Pipeline: planner → implementers (paralelos) → reviewer → merger
- Resolve relações de dependência entre issues automaticamente

**Arquitetura**:
- **Planner**: analisa backlog, escolhe issues independentes (resolve bloqueios)
- **Implementers**: cada issue roda em sandbox isolada (branch separada)
- **Reviewer**: revisa commits criados (usa Opus para maior inteligência)
- **Merger**: mescla branches; resolve conflitos de tipos/testes

### Skills para Claude Code
Conjunto de habilidades (_Skills_) para desenvolvimento com IA:
- **Grill Me**: sessão de interrogatório para alinhamento humano-IA
- **Write PRD**: geração de Product Requirements Document estruturado
- **PRD to Issues**: conversão de PRD em issues paralelizáveis com tracer bullets
- **TDD**: ciclo red-green-refactor guiado por testes
- **Improve Codebase Architecture**: varredura para aprofundar módulos

## Filosofia de Desenvolvimento

### Princípios-chave
1. **"Base de código ruim = agentes de IA ruins"** — arquitetura sólida é pré-requisito
2. **"O código é o seu campo de batalha"** — crítica ao movimento "specs to code"; código não pode ser ignorado
3. **"IA adora programar horizontalmente"** — necessita direcionamento para fatias verticais
4. **"Planejamento obrigatoriamente humano no ciclo; implementação pode ser AFK"** — humano cuida do "turno do dia", IA do "turno da noite"
5. **"Livros antigos de engenharia de software"** — _O Programador Pragmático_, _A Filosofia do Design de Software_ (John Ousterhout) continuam essenciais

### Conceitos-chave Promovidos
- **Smart zone vs. dumb zone**: LLMs ficam progressivamente "burros" após ~100k tokens (relações de atenção escalarem quadraticamente)
- **HITL vs. AFK**: separação clara entre tarefas que exigem humanos (planejamento, decisões arquiteturais) e tarefas automatizáveis (implementação, testes)
- **Tracer bullets / fatias verticais**: implementação end-to-end (schema + API + UI + testes) para feedback instantâneo; contrasta com abordagem horizontal (camada por camada)
- **Módulos profundos vs. rasos** (John Ousterhout): módulos com interface simples + muita funcionalidade interna são mais fáceis de testar e mais eficazes para IA trabalhar
- **TDD essencial para IA**: ciclos de feedback via testes = teto de qualidade da IA; TDD dificulta "trapaça" (IA fazendo implementação antes de testes)
- **Push vs. Pull**: revisor recebe _push_ de padrões (compara código contra padrões); implementador tem padrões via _pull_ (Skills consultáveis)

### Fluxo de Trabalho Completo
```
Ideia → Grill Me (HITL, 1h de interrogatório) 
     → PRD (HITL, documento de destino) 
     → Issues/Kanban (HITL, tracer bullets com dependências) 
     → Implementação (AFK, múltiplos agentes paralelos) 
     → QA (HITL, impor "bom gosto" humano) 
     → Review (HITL, padrões de código) 
     → Merge
```

## Posições e Perspectivas

### Sobre "Specs to Code"
**Crítica forte**: "Tentei, tentei de verdade, e é uma porcaria, não funciona. Você precisa ter controle do código, entender o que há nele e moldá-lo."

Matt rejeita a ideia de ignorar o código e trabalhar apenas com especificações. Argumenta que:
- Código é o campo de batalha; não pode ser abstraído
- Forma da codebase deve ser mantida em mente durante todo o processo
- PRD é ferramenta de alinhamento, não compilador de especificações

### Sobre Revisão de PRDs
**Posição incomum**: "Eu não leio o PRD depois de gerado."

Justificativa:
- Alinhamento já foi alcançado durante Grill Me (entendimento compartilhado)
- LLMs são ótimos em sumarização; confia nessa capacidade
- PRD tende a apodrecer (_doc rot_) se mantido no repositório — prefere descartar após implementação

### Sobre Testes de Frontend
"Frontend é muito difícil de testar com IA porque é multimodal. IA não tem olhos. Precisa de olhos humanos olhando para o front-end o tempo todo."

Solução: IA gera protótipos descartáveis para escolha humana, não implementação final.

### Sobre Revisão de Código Crescente
**Reconhece problema**: "Levantem a mão se sentem que estão fazendo mais revisão de código agora do que costumavam fazer. Sim, definitivamente."

Matt admite não ter solução perfeita — aceita que delegação de implementação resulta em mais revisão; trade-off necessário.

## Posições Posteriores (vídeos e artigo, jul–nov/2026)

Fontes: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md) e [Home Repo](../sources/2026-11-12_source-matt-pocock-home-repo.md) (legendas automáticas em inglês).

- **Docs**: deletar a maior parte dos docs que descrevem o código (antipadrão: duas fontes de verdade); manter ADRs, glossário de domínio e navegação fina.
- **Dumb zone**: regra prática atualizada de ~100 mil para **~150 mil tokens**, e subindo; limpar, compactar, fazer *hand off* ou dividir em tarefas pequenas em janelas novas.
- **Fundamentos**: recomenda *The Pragmatic Programmer* (tracer bullets, "don't outrun your headlights") como livro #1 para programação estratégica; reforça a tese de que fundamentos continuam importando.
- **Skill `retro`**: analisa sessões passadas e sugere melhorias; precisa de humano no loop. Alguém escreveu um artigo acadêmico sobre ela; Matt discorda das conclusões (artigo não lido).
- **Home Repo**: padrão de um repo único com skills, `AGENTS.md` e ponteiros para os outros repos; ver [Home Repo](../concepts/home-repo.md). Ele chama o seu de "personal wiki", estilo Karpathy, com CLI própria.
- Mantém a posição anterior contra "specs to code"; contrasta com a aula de SDD do curso Profissional AI, que sugere gerar sistemas a partir de specs (ver [SDD](../sources/2026-11-07_source-agentes-ia-sdd.md)).

## Cronologia

- **2026-04-26** (data da transcrição): Palestra "Essential Skills for AI Coding from Planning to Production" — apresenta fluxo completo de desenvolvimento com IA, demonstra Sand Castle, Skills e técnicas de arquitetura
- **2026-07-16 / 2026-07-20**: shorts sobre docs, livro recomendado e dumb zone
- **2026-11-06**: short sobre o artigo acadêmico da skill `retro`
- **2026-11-12**: vídeo e artigo "The Home Repo Pattern"

## Relacionamento com Outros Conceitos

- **Convergência com formacao.dev (trilha Dev AI)**: material complementa e reforça aulas IA-06 (modularização como pilar #1), IA-07 (agentes) e IA-08 (engenharia de prompt/contexto)
- **Arquitetura Limpa**: módulos profundos conectam-se com separação de responsabilidades e testabilidade
- **DDD**: modularização como Bounded Contexts; módulos profundos como agregados bem encapsulados
- **John Ousterhout**: _A Philosophy of Software Design_ como base teórica para módulos profundos vs. rasos

## Pontos para Monitorar

1. Evolução do Sand Castle — novas features, documentação, adoção pela comunidade
2. Novas Skills publicadas por Matt — repositório de Skills para Claude Code
3. Posições sobre multi-agentes — limites práticos de paralelização, custo/latência
4. Tratamento de doc rot — técnicas para preservar decisões arquiteturais sem apodrecimento
5. Métricas de eficácia — como medir qualidade de código gerado por IA vs. escrito por humanos
