---
title: "Matt Pocock"
type: entity
status: active
created: 2026-04-28
updated: 2026-11-15
tags: ["pessoa", "typescript", "ai-coding"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
  - raw/sources/2026-11-12_artigo-home-repo-pattern.md
  - raw/sources/2026-11-12_the-home-repo-pattern-run-agents-across-all-your-repos_en-orig_hWe-j78vNpc.md
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
related_pages:
  - ./uncle-bob.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../concepts/verificacao-deterministica.md
  - ../concepts/home-repo.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-11-12_source-matt-pocock-home-repo.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md
  - ../concepts/ddd.md
  - ../concepts/ia-generativa.md
  - ../concepts/ai-driven-development.md
  - ../concepts/tdd.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/arquitetura-limpa.md
---

# Matt Pocock

## Visão Geral

Especialista em TypeScript, educador técnico e palestrante sobre desenvolvimento com IA. Criador de conteúdo educacional amplamente reconhecido na comunidade TypeScript e autor de ferramentas open-source para AI-driven development.

## Informações de Contato

- **Twitter/X**: [@mattpocockuk](https://x.com/mattpocockuk)
- **GitHub**: [mattpocock](https://github.com/mattpocock)
- **Repositório de Skills**: [mattpocock/skills](https://github.com/mattpocock/skills) — 27 skills (engineering e productivity), instaláveis como plugin; ver [resumo da fonte](../sources/2026-11-14_source-matt-pocock-repo-skills.md). Inclui Grill Me, `grill-with-docs`, `to-spec`, `to-tickets`, TDD, `/teach`, Wayfinder e `retro`. Os `SKILL.md` das 27 skills foram lidos: [resumo](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md)
- **Repositório principal**: `mattpocock/course-video-manager`

## Expertise e Áreas de Atuação

### TypeScript
- Especialista reconhecido na comunidade
- Criador de conteúdo educacional sobre TypeScript
- "Vocês veem por que eu parei de ensinar TypeScript? Porque agora a IA simplesmente sabe tudo" (comentário durante palestra)

### AI-Driven Development
- Foco em práticas de engenharia de software para maximizar eficácia de agentes de IA
- Desenvolvedor de ferramentas para orquestração de agentes (Sandcastle)
- Defensor da tese: "fundamentos clássicos da engenharia de software continuam cruciais na era da IA"

## Contribuições Principais

### Sandcastle
Biblioteca TypeScript open-source para orquestração de agentes de IA em paralelo. Repositório `mattpocock/sandcastle`, publicada como `@ai-hero/sandcastle`.

> Grafia corrigida em 2026-11-15 (era "Sand Castle" nesta wiki): o nome é uma palavra só, conforme o repositório e o pacote. Em abr/2026 a biblioteca já existia e era usada por ele ("estou usando Sandcastle agora"), o que data a ferramenta como anterior à palestra de abril.

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
- **Improve Codebase Architecture**: varredura para aprofundar módulos; ele a resume por uma definição operacional de complexidade — "app complexo é difícil de mudar; app simples é fácil de mudar", e a skill "não transforma uma base ruim em boa, mas coloca você no caminho"
- **Domain Model**: versão posterior do Grill Me voltada a modelagem de domínio; em abr/2026 ele a descreve como nova e "sem um nome muito bom". É a skill usada na segunda metade da [live de abr/2026](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md)
- **Zoom Out**: skill minúscula que ele compara a um "explique como se eu tivesse cinco anos", usada quando o agente introduz jargão que ele não conhece (na live, OIDC e IdP)

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

## Live "construindo um projeto do zero" (abr/2026)

Fonte: [resumo da live](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md) — 1h47, `demonstrado`. É a fonte mais longa da wiki mostrando o método dele em execução, e a única em que ele parte de uma ideia inexistente.

- **Formato raríssimo**: ele diz que quase nunca faz live e que fez essa para escolher um projeto que servisse de "playground" para conteúdo de formato longo ("watch me work"). Pediu ideias ao chat, abriu enquete e seguiu a opção vencedora: plataforma de observabilidade para agentes de código. O nome **Slopwatch** foi sugerido por um espectador.
- **Nada de código de aplicação em 1h47**: o resultado são dois documentos de pesquisa, um nome e um `context.md` com o glossário do domínio. É o registro da fase anterior ao PRD — ver [AI-Driven Development](../concepts/ai-driven-development.md).
- **Duas sessões de grilling**, a segunda com a skill `domain model`. Observação dele sobre o mecanismo: "não estou realmente respondendo às perguntas; elas me levam a pensar nas coisas que estou dizendo". Também diz que, quando trabalha sozinho, roda **duas sessões de grilling em paralelo**, uma em cada terminal, e que isso é exaustivo: "você está constantemente tomando decisões".
- **Linguagem ubíqua com o agente**: ver [DDD](../concepts/ddd.md); ele afirma na sessão que "DDD é um casamento fantástico com AI coding".
- **Ambiente de trabalho (abr/2026)**: Windows (diz ter migrado para poder lançar a placa de vídeo como despesa da empresa), VS Code, plano Max 20x (US$ 200/mês, antes 5x), Opus 4.7, ditado por **Wispr Flow**, status line customizada publicada no aihero.dev.
- **Ferramentas que ele não usa**: diz nunca ter usado **OpenClaw** ("nunca sequer tentei") e que ainda não usou **Pi**, apesar de querer — "toda manhã eu acho que hoje é o último dia que vou usar o Claude Code, e nunca é"; atribui isso a inércia.
- **Sobre tokens**: considera que as pessoas são "anais demais" com consumo, sobretudo de tokens de entrada ("incrivelmente baratos"); limpar prompts ditados para economizar não vale a pena. Contrasta com a preocupação com custo registrada em outras fontes da wiki.
- **Formação**: repete que não se formou em computação — "me formei em teatro e tenho mestrado em voz e canto".

## Posições Posteriores (vídeos e artigo, jul–nov/2026)

Fontes: [shorts](../sources/2026-07-16_source-matt-pocock-shorts.md) e [Home Repo](../sources/2026-11-12_source-matt-pocock-home-repo.md) (legendas automáticas em inglês).

- **Docs**: deletar a maior parte dos docs que descrevem o código (antipadrão: duas fontes de verdade); manter ADRs, glossário de domínio e navegação fina.
- **Dumb zone**: regra prática atualizada de ~100 mil para **~150 mil tokens**, e subindo; limpar, compactar, fazer *hand off* ou dividir em tarefas pequenas em janelas novas.
- **Fundamentos**: recomenda *The Pragmatic Programmer* (tracer bullets, "don't outrun your headlights") como livro #1 para programação estratégica; reforça a tese de que fundamentos continuam importando.
- **Skill `retro`**: analisa sessões passadas e sugere melhorias; precisa de humano no loop. Alguém escreveu um artigo acadêmico sobre ela; Matt discorda das conclusões (artigo não lido).
- **Home Repo**: padrão de um repo único com skills, `AGENTS.md` e ponteiros para os outros repos; ver [Home Repo](../concepts/home-repo.md). Ele chama o seu de "personal wiki", estilo Karpathy, com CLI própria.
- Mantém a posição anterior contra "specs to code"; contrasta com a aula de SDD do curso Profissional AI, que sugere gerar sistemas a partir de specs (ver [SDD](../sources/2026-11-07_source-agentes-ia-sdd.md)).

## Trajetória e Skills (entrevista ao The Pragmatic Engineer, set/2026)

Fonte: [entrevista](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md); relato do próprio Matt, não verificado.

- **Carreira**: seis anos como professor de canto/voz (Reino Unido); autodidata em JavaScript a partir de ~2017; passou por agências (TypeScript e React), integrou o time central do XState (Stately) e trabalhou ~3 meses na Vercel; criou o **Total TypeScript** com Joel Hooks (Egghead), que segundo ele superou sete dígitos de receita.
- **Pivô para IA**: começou a olhar para IA em 2023 com cursos de IA em aplicações, mas abandonou essa linha; a virada veio por volta de dezembro/2025, quando agentes passaram a ser "bons o bastante para delegar". Passou a ensinar a camada estratégica.
- **Skills**: Grill Me, Wayfinder, spec → tickets, TDD, "grill with docs" (linguagem de domínio), improve codebase architecture; distribuídas como repositório de skills. Ver [AI-Driven Development](../concepts/ai-driven-development.md).
- **Palestra "Software Fundamentals Still Matter"** (AI Engineer London, abril/2026): ele diz que passou de 1 milhão de visualizações.
- **Livros recomendados**: *The Pragmatic Programmer*, *A Philosophy of Software Design*, capítulos iniciais de *Domain-Driven Design*.

## Live com Uncle Bob (ago/2026)

Fonte: [resumo](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md). Matt atua como entrevistador de [Uncle Bob](./uncle-bob.md); ele diz que queria falar com Bob havia tempo e que gostou do debate dele com John Ousterhout. Posições de Matt na conversa (relato dele): suspeita de enxames de muitos agentes, com exceção de implementador + revisor; sobre SDD, o critério é se as specs são **persistidas e revisitadas**; tático × estratégico (Ousterhout) como enquadramento; concorda que o custo de mudança caiu muito. Ver também [Verificação determinística](../concepts/verificacao-deterministica.md).

## Cronologia

- **2026-04-17**: live "Watch me build a brand-new project from scratch" — escolhe um projeto por enquete e chega a pesquisa, nome e glossário sem escrever código de aplicação; [resumo](../sources/2026-04-17_source-matt-pocock-live-projeto-do-zero.md)
- **2026-04-26** (data da transcrição): Palestra "Essential Skills for AI Coding from Planning to Production" — apresenta fluxo completo de desenvolvimento com IA, demonstra Sandcastle, Skills e técnicas de arquitetura
- **2026-07-16 / 2026-07-20**: shorts sobre docs, livro recomendado e dumb zone
- **2026-11-06**: short sobre o artigo acadêmico da skill `retro`
- **2026-09-17**: entrevista ao podcast The Pragmatic Engineer (AI Skills)
- **2026-08-19**: live de Matt entrevistando [Uncle Bob](./uncle-bob.md) sobre fundamentos de software na era da IA — [resumo](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md)
- **2026-11-12**: vídeo e artigo "The Home Repo Pattern"

## Relacionamento com Outros Conceitos

- **Convergência com formacao.dev (trilha Dev AI)**: material complementa e reforça aulas IA-06 (modularização como pilar #1), IA-07 (agentes) e IA-08 (engenharia de prompt/contexto)
- **Arquitetura Limpa**: módulos profundos conectam-se com separação de responsabilidades e testabilidade
- **DDD**: modularização como Bounded Contexts; módulos profundos como agregados bem encapsulados
- **John Ousterhout**: _A Philosophy of Software Design_ como base teórica para módulos profundos vs. rasos

## Pontos para Monitorar

1. Evolução do Sandcastle — novas features, documentação, adoção pela comunidade
2. Novas Skills publicadas por Matt — repositório [mattpocock/skills](https://github.com/mattpocock/skills) (27 promovidas + 7 beta + 4 congeladas em 2026-11-14, v1.3.2; `CHANGELOG.md`, auxiliares e pastas `in-progress/`/`misc/` lidos). Restam a pasta `docs/` (34 páginas em aihero.dev) e os arquivos de `.out-of-scope/`; observar quais skills beta (chief-of-staff, software-factory) são promovidas
3. Wayfinder e "grill with docs": publicação e evolução
4. Posições sobre multi-agentes — limites práticos de paralelização, custo/latência
5. Tratamento de doc rot — técnicas para preservar decisões arquiteturais sem apodrecimento
6. Métricas de eficácia — como medir qualidade de código gerado por IA vs. escrito por humanos
7. **Slopwatch** — o projeto iniciado na live de abr/2026 (observabilidade de agentes de código): o repositório ficou público? houve continuidade? Ele prometeu seguir em vídeos, não em lives; nada verificado
8. Mudança de posição sobre **memória de agente de longo prazo** — "má ideia" em abr/2026, mas a skill beta `chief-of-staff` (nov/2026) prescreve memória em wiki Markdown; observar qual posição prevalece
