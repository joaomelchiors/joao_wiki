---
title: "Índice"
type: maintenance
status: active
created: 2026-04-07
updated: 2026-11-04
tags: ["index"]
source_files: []
related_pages:
  - ./overview.md
  - ./log.md
  - ./open-questions.md
---

# Índice

Este arquivo é o índice baseado em conteúdo da wiki. O LLM deve ler isto primeiro antes de responder consultas, então navegar para páginas relevantes.

## Contagens

- resumo de fonte: 28
- página de conceito: 6
- página de entidade: 4
- página de síntese: 0
- página de manutenção: 6 (index, log, overview, open-questions, lint-2026-04-28, lint-2026-11-04)

## Páginas de Entrada

- [overview.md](./overview.md): Página pai organizando os temas (DDD + Arquitetura Limpa; IA Generativa; AI-Driven Development), propósito, hipóteses e perspectivas desta wiki. Última atualização: 2026-04-28
- [open-questions.md](./open-questions.md): Questões não resolvidas e candidatos de pesquisa. Última atualização: 2026-04-07

## Fontes

- [2026-04-20_source-imersao-ddd-arq-limpa.md](./sources/2026-04-20_source-imersao-ddd-arq-limpa.md): Resumo da série de 14 transcrições da imersão "DDD + Arquitetura Limpa" da formacao.dev — cobre configuração de monorepo TypeScript, padrões DDD táticos e estratégicos. Última atualização: 2026-04-20
- [2026-04-20_source-imersao-ddd-arq-limpa-qa-01.md](./sources/2026-04-20_source-imersao-ddd-arq-limpa-qa-01.md): Resumo da sessão Q&A 01 — cobre regras de unicidade, Serviço de Domínio, Inversão vs. Injeção de Dependência, VOs vs. Zod e validação no front-end. Última atualização: 2026-04-20
- [2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md](./sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md): Resumo da Aula 15 — implementação final da classe `Result<T>` com `ok`, `fail`, `try`, `combine`; tratamento de múltiplos erros de VOs; bug de `export type` vs `export`. Última atualização: 2026-04-23
- [2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md](./sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md): Resumo da Aula 16 — Ports & Adapters na prática; repositório por agregado; separação repositório vs. queries (CQS); 1 UC por arquivo. Última atualização: 2026-04-23
- [2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md](./sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md): Resumo da Aula 18 — implementação concreta do UC `RegistrarUsuario`; CriptografiaProvider; VO ID (UUID); senha opcional na entidade; método `semSenha()`; segurança de hash. Última atualização: 2026-04-27
- [2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md](./sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md): Resumo da Aula 19 — refinamento do UC `RegistrarUsuario`; verificação de unicidade; método `comSenha(hash)`; exceção única com erros acumulados; UC como maior cliente do domínio. Última atualização: 2026-04-27
- [2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md](./sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md): Resumo da Aula 20 — adaptador `UsuarioPrisma` (implementação concreta do repositório via Prisma); controller NestJS `AutenticacaoController`; `DatabaseModule` com `PrismaService`. Última atualização: 2026-04-27
- [2026-04-27_source-dev-ai-ia-generativa-01.md](./sources/2026-04-27_source-dev-ai-ia-generativa-01.md): Resumo da Aula IA-01 — pipeline de modelos Transformer (tokenização, embeddings); matriz de entrada [nTokens × nDimensões]; analogia dimensional. Última atualização: 2026-04-27
- [2026-04-27_source-dev-ai-ia-generativa-02.md](./sources/2026-04-27_source-dev-ai-ia-generativa-02.md): Resumo da Aula IA-02 — Multi-Head Attention (Q/K/V); Feed-Forward (expansão/compressão); camada de saída (logits + softmax); temperatura; geração autorregressiva + KV-cache. Última atualização: 2026-04-27
- [2026-04-27_source-dev-ai-revolucao-da-atencao.md](./sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md): Resumo da Aula IA-03 — detalhamento do Multi-Head Attention: projeção Q/K/V por head (768×64), cálculo de scores, softmax, concatenação de heads, atenção não-simétrica. Última atualização: 2026-04-27
- [2026-04-27_source-dev-ai-limitacoes-do-modelo.md](./sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md): Resumo da Aula IA-04 — limitações arquiteturais (contagem de caracteres); trade-off de tokenização; LM Studio; chain-of-thought em loop. Última atualização: 2026-04-27
- [2026-04-27_source-dev-ai-system-prompt.md](./sources/2026-04-27_source-dev-ai-system-prompt.md): Resumo da Aula IA-05 — system prompt como camada invisível; guardrails; estrutura de mensagens API; "honestidade consciente"; opinião sobre AGI. Última atualização: 2026-04-27
- [2026-04-28_source-dev-ai-objetivo-das-trilhas.md](./sources/2026-04-28_source-dev-ai-objetivo-das-trilhas.md): Resumo da Aula IA-06 — objetivos de AI-Driven Development; três pilares (modularização > arq. limpa > CQRS); prioridade de cuidado por camada; expectativas realistas sobre código gerado por IA. Última atualização: 2026-04-28
- [2026-04-28_source-dev-ai-conceito-de-agentes.md](./sources/2026-04-28_source-dev-ai-conceito-de-agentes.md): Resumo da Aula IA-07 — definição formal de Agente de IA (orquestrador de prompts + LLM como núcleo de decisão); loop iterativo; anti-pattern if/else; multi-agentes. Última atualização: 2026-04-28
- [2026-04-28_source-dev-ai-engenharia-de-prompt.md](./sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md): Resumo da Aula IA-08 — engenharia de prompt (estrutura CORFT); engenharia de contexto como #1; meta-prompt; hierarquia prática; Skills/Rules/Spec Driven Development. Última atualização: 2026-04-28
- [2026-04-28_source-matt-pocock-essential-skills-ai-coding.md](./sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): Palestra de Matt Pocock — práticas de AI-Driven Development; smart zone/dumb zone; HITL vs. AFK; Grill Me; PRD; tracer bullets; módulos profundos vs. rasos; TDD; paralelização com Sand Castle. Última atualização: 2026-04-28
- [2026-04-29_source-dev-ai-engenharia-de-contexto.md](./sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md): Aula IA-09 (Dev AI) — context rot; engenharia de contexto com Rules e Skills; Spec Driven Development como injeção de contexto por task em escala. Última atualização: 2026-04-29
- [2026-04-29_source-dev-ai-rule-skill.md](./sources/2026-04-29_source-dev-ai-rule-skill.md): Aula IA-10 (Dev AI) — definições canônicas de Rule (declarativa, contextual) e Skill (ativa, passo a passo, few-shot); relação Rule→Skill; independência de ferramenta. Última atualização: 2026-04-29
- [2026-05-04_source-dev-ai-exemplo-skill.md](./sources/2026-05-04_source-dev-ai-exemplo-skill.md): Aula IA-11 (Dev AI) — exemplo prático de criação de Skill no Cursor (`criar-entidade-completa`); formato de arquivo Markdown de Skill; ciclo por engenharia reversa de código existente; heurística de granularidade; fraqueza de Skills sem few-shot. Última atualização: 2026-05-04
- [2026-05-04_source-dev-ai-tipos-de-skill.md](./sources/2026-05-04_source-dev-ai-tipos-de-skill.md): Aula IA-12 (Dev AI) — taxonomia de três tipos de Skill (determinística, híbrida, aberta); Skill como contêiner de arquivos (scripts, assets, templates); encadeamento de Skills no Spec Driven Development. Última atualização: 2026-05-04
- [2026-05-05_source-dev-ai-skill-modulos-intro.md](./sources/2026-05-05_source-dev-ai-skill-modulos-intro.md): Aula IA-13 (Dev AI) — introdução ao Capítulo 3; Skills anunciadas (criar projeto + criar módulo); modularização como espectro gradual (1 → 2 → n módulos); princípio de não atrasar deploy por perfeccionismo. Última atualização: 2026-05-05
- [2026-07-17_source-ferramentas-agenticas.md](./sources/2026-07-17_source-ferramentas-agenticas.md): Módulo Ferramentas Agênticas (Dev AI, Aulas 01–05) — pastas de Skills por ferramenta (`.claude/skills/` vs `.agents/skills/`); estrutura mínima de `skill.md`; gatilho implícito vs. chamada explícita; Skills determinísticas com scripts executáveis; Spec-Driven Development prático (pasta `specs/changes/`, checkboxes, paralelização via subagentes, arquivamento). Última atualização: 2026-07-17
- [2026-07-17_source-ferramentas-agenticas-harness.md](./sources/2026-07-17_source-ferramentas-agenticas-harness.md): Harness (Dev AI, Aulas 06–07) — definição formal de harness (camada de software que envolve o LLM); LLM como stateless; loop de execução (montagem de contexto → LLM → ferramenta → resultado → loop); compressão automática de contexto; ferramentas disponíveis (FS, Bash, MCP, Skills); responsabilidades embutidas vs. responsabilidade do desenvolvedor (verificações em Skills e specs). Última atualização: 2026-07-17
- [2026-05-07_source-palestra-github-copilot.md](./sources/2026-05-07_source-palestra-github-copilot.md): Palestra Microsoft/GitHub para a Caixa Econômica Federal (2 sessões) — GitHub Copilot completo: Code Completion, Chat (Ask/Plan/Agent), Instructions (`.github/copilot-instructions.md` + por padrão de arquivo), Modo Agente (loop plan→act→observe), Coding Agent (background em ambiente efêmero, GitHub Actions, Mission Control, PRs com screenshots), Code Review Agent, MCP (arquitetura host/client/server, Playwright, GitHub), Copilot Spaces (contexto curado compartilhável), Custom Agents, GitHub Copilot Modernization (Java/NET, upgrade, cloud enablement). Última atualização: 2026-05-07
- [2026-07-18_source-claude-code-melhores-praticas.md](./sources/2026-07-18_source-claude-code-melhores-praticas.md): Vídeo de Augusto Galego resumindo ~20 melhores práticas do Claude Code segundo a documentação oficial Anthropic — método de verificação no prompt, gestão de sessões (`/rename`, `/rewind`, `/goal`), hierarquia de modelos (Opus=planejamento/Sonnet=implementação), sandbox para auto mode, `.claude` do projeto versionado. Última atualização: 2026-07-19
- [2026-09-07_source-chat-ddd-express-ports-and-adapters.md](./sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md): Conversa prática (~935 KB) construindo backend Express com TypeScript usando DDD + Ports & Adapters — Entity abstrata (`tryCreate`/`create`/`restore`/`cloneWith`), UUID v7, Mapper, Repository, Composition Root e Controller desacoplado do framework. Última atualização: 2026-09-07
- [2026-08-03_source-modelagem-dominio-48-erro-validacao.md](./sources/2026-08-03_source-modelagem-dominio-48-erro-validacao.md): Aula 48 da série Modelagem de Domínio (formacao.dev) — introdução da classe `ErroValidacao` (estende `Error` JS) como ponto de partida do modelo; atributos `codigo`/`valor`/`extras`; catálogo de constantes de erros; métodos estáticos `criar`/`lancar`; justificativa da ordem causal erro → validação → VOs → entidades. Última atualização: 2026-11-04

## Conceitos

- [ddd.md](./concepts/ddd.md): Domain-Driven Design — ferramentas estratégicas e táticas (Repositório, Provedor, Result); distinção UseCase × Serviço de Domínio × Serviço de Aplicação; Entity como protocolo de ciclo de vida (`tryCreate`/`create`/`restore`/`cloneWith`); invariantes universais vs. regras de criação. Última atualização: 2026-09-07
- [arquitetura-limpa.md](./concepts/arquitetura-limpa.md): Clean Architecture — camadas, Ports & Adapters, Inversão de Dependência, Composition Root/Factory, Controller desacoplado (`HttpRequest`/`HttpResponse`), Mapper como tradutor puro. Última atualização: 2026-09-07
- [objeto-de-valor.md](./concepts/objeto-de-valor.md): Value Object — validade por construção, imutabilidade, UUID v7 (`IdVO.generate()` vs `tryCreate()`), VOs como parâmetro de repositório, critério para manter VO vs. extrair `.value`; **ErroValidacao** como base do pipeline de validação (Modelagem de Domínio, Aula 48). Última atualização: 2026-11-04
- [agregado.md](./concepts/agregado.md): Aggregate — coleção atômica; 1 repositório por agregado; CQS prático; métodos de transformação via clone; modelo rico; contrato de repositório (`create`/`update` explícito). Última atualização: 2026-04-27
- [contexto-delimitado.md](./concepts/contexto-delimitado.md): Bounded Context — fronteiras de módulo, tipos de subdomínio, proibição de dependências cíclicas. Última atualização: 2026-04-20
- [ia-generativa.md](./concepts/ia-generativa.md): IA Generativa — pipeline Transformers; system prompt e guardrails; agentes; engenharia de prompt (CORFT); context rot; Rule vs. Skill; tipos de Skill (determinística, híbrida, aberta); infraestrutura prática de Skills; Spec-Driven Development prático; **Harness** (loop de execução, compressão de contexto); **Melhores Práticas Claude Code** (hierarquia Opus/Sonnet, sessões, `/rewind`, `/goal`, sandbox); **MCP** (host/client/server); **Copilot Instructions**; AI-Driven Development (smart zone/dumb zone, HITL vs. AFK, TDD). Última atualização: 2026-07-19

## Entidades

- [formacao-dev.md](./entities/formacao-dev.md): Plataforma de ensino online; instrutor Leonardo; cursos "Arquiteto Dev: DDD + Arquitetura Limpa" e "Dev AI: Desenvolvimento com IA". Última atualização: 2026-04-27
- [matt-pocock.md](./entities/matt-pocock.md): Especialista em TypeScript e AI-Driven Development; criador do Sand Castle (biblioteca para paralelização de agentes) e Skills para Claude Code (Grill Me, PRD, TDD, improve architecture). Última atualização: 2026-04-28
- [github-copilot.md](./entities/github-copilot.md): Assistente de IA da GitHub (Microsoft); plataforma com Code Completion, Chat (Ask/Plan/Agent), Coding Agent (background em ambiente efêmero), Code Review Agent, Instructions, MCP (host/client/server), Copilot Spaces e extensão de modernização (Java/.NET). Última atualização: 2026-05-07
- [joao-marcos-melchiors.md](./entities/joao-marcos-melchiors.md): Proprietário da wiki; desenvolvedor TypeScript com stack Express/PostgreSQL/Docker; princípios arquiteturais e perfil de aprendizagem observados na conversa DDD+Express. Última atualização: 2026-09-07

## Sínteses

- Nenhuma ainda

## Manutenção

- [index.md](./index.md): Índice baseado em conteúdo de toda a wiki. Ponto de entrada para consultas. Última atualização: 2026-11-04
- [log.md](./log.md): Log cronológico de ingestões, consultas, verificações e atualizações. Última atualização: 2026-11-04
- [overview.md](./overview.md): Quadro geral do tema de pesquisa (DDD + Arq. Limpa; IA Generativa; AI-Driven Development). Última atualização: 2026-04-28
- [open-questions.md](./open-questions.md): Lista de questões não resolvidas. Última atualização: 2026-04-07
- [maintenance/lint-reports/2026-04-28_lint-completo.md](./maintenance/lint-reports/2026-04-28_lint-completo.md): Verificação completa da wiki — 28 páginas analisadas; 1 arquivo obsoleto detectado; 4 conceitos não promovidos identificados; open-questions.md vazio (50+ questões espalhadas). Última atualização: 2026-04-28
- [maintenance/lint-reports/2026-11-04_lint-completo.md](./maintenance/lint-reports/2026-11-04_lint-completo.md): Verificação completa da wiki — 37 páginas analisadas; index.md e log.md desatualizados desde set/2026; 2 páginas ausentes do index (fonte + entidade); 2 fontes brutas não ingeridas; open-questions.md vazio. Última atualização: 2026-11-04
