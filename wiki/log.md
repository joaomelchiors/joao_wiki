---
title: "Registro"
type: maintenance
status: active
created: 2026-04-07
updated: 2026-11-07
tags: ["log"]
source_files: []
related_pages:
  - ./index.md
---

# Registro

Este arquivo é um log cronológico apenas para anexação. Adicione novas entradas ao final.

## [2026-04-07] update | inicialização do modelo wiki-kit

- Criada a estrutura de diretório básico da wiki
- Adicionado `CLAUDE.md`, `overview.md`, `index.md`, `log.md`, `open-questions.md`, `templates/`
- Status: nenhum resumo de fonte criado ainda

## [2026-04-19] update | definição do tema e propósito da wiki

- Preenchido `overview.md` com tema (Segundo Cérebro), propósito, escopo e entregáveis
- Wiki pronta para receber materiais brutos em `raw/sources/`

## [2026-04-20] ingest | Imersão DDD + Arquitetura Limpa — série de 14 transcrições (formacao.dev)

- **Material**: 14 transcrições de aulas ao vivo da imersão "Arquiteto Dev: DDD + Arquitetura Limpa" da plataforma formacao.dev, ministradas por Leonardo (Léo). Aulas 01–13 + uma aula duplicada (12a/12b).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-20_source-imersao-ddd-arq-limpa.md`
  - Criadas 5 páginas de conceito: `concepts/ddd.md`, `concepts/arquitetura-limpa.md`, `concepts/objeto-de-valor.md`, `concepts/agregado.md`, `concepts/contexto-delimitado.md`
  - Criada 1 página de entidade: `entities/formacao-dev.md`
  - Atualizado `overview.md` com hipóteses e perspectivas derivadas do material
  - Atualizado `index.md` com todas as novas páginas
- **Conteúdo coberto**: configuração de monorepo TypeScript (Turborepo + NestJS + Next.js), padrões DDD táticos (VO, Entidade, Agregado, Caso de Uso) e estratégicos (Contexto Delimitado, Linguagem Ubíqua, Mapa de Contexto), imutabilidade de modelos, padrão Result.
- **O que permanece não resolvido**:
  - Implementação completa do padrão `Result` com `combine` (pendência do instrutor para aulas seguintes).
  - Fluxo full-stack completo (registro + login com banco de dados) não coberto nas 14 aulas.
  - Possíveis transcrições futuras da mesma imersão a aguardar em `raw/sources/`.

## [2026-04-20] ingest | Imersão DDD + Arquitetura Limpa — Sessão Q&A 01

- **Material**: `2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md` — sessão de perguntas e respostas ao vivo da imersão (formacao.dev), 8 perguntas respondidas pelo instrutor Leonardo.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-20_source-imersao-ddd-arq-limpa-qa-01.md`
  - Atualizado `concepts/ddd.md`: distinção precisa UseCase × Serviço de Domínio × Serviço de Aplicação; exemplo de Serviço de Domínio para regra de unicidade; quem chama o Serviço de Domínio.
  - Atualizado `concepts/objeto-de-valor.md`: estratégia de VOs como substituto ao Zod no front-end; Validator com Fluent API.
  - Atualizado `concepts/arquitetura-limpa.md`: explicação de Inversão de Dependência vs. Injeção; princípio D do SOLID; acoplamento de libs simples; regras vs. framework.
  - Atualizado `index.md` com nova fonte e descrições revisadas.
- **Conteúdo coberto**: regras de unicidade e Serviço de Domínio; validações compostas com Fluent API; VOs vs. Zod; diferença UseCase × Serviço; inversão de dependência (princípio D do SOLID); Serviço de Domínio e acesso a repositório; front-end como aplicação rica.
- **O que permanece não resolvido**:
  - Implementação concreta do padrão Ports & Adapters para o módulo `auth` (prometida para o dia seguinte da imersão).
  - Implementação do `Validator` fluente genérico.

## [2026-04-23] ingest | Imersão DDD + Arquitetura Limpa — Aula 15: Tratamento de Erros

- **Material**: `2026-04-20_transcrição-projetoEAD-15-tratamento-de-erros.md` — aula focada na implementação da classe `Result<T>` para tratamento de múltiplos erros (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md`
  - Atualizado `concepts/objeto-de-valor.md`: seção do padrão Result reescrita com API final completa (`ok`, `fail`, `try`, `trySync`, `combine`, `combineAsync`, `throwIfFailed`); questão "Implementação do Result com combine" marcada como resolvida.
  - Atualizado `concepts/ddd.md`: adicionado `Result` como ferramenta tática auxiliar (shared) na tabela de padrões.
  - Atualizado `concepts/arquitetura-limpa.md`: adicionada seção sobre `Result` na camada compartilhada e nota sobre `export type` vs `export` em TypeScript.
  - Atualizado `index.md` com nova fonte e descrições revisadas dos conceitos.
- **Conteúdo coberto**: classe `Result<T>` com API completa; `Result.combine` para agregar erros de múltiplos VOs; `Result.try`/`trySync` para encapsular operações falíveis; bug de `export type` vs `export` para classes; padrão de uso com entidades (`trySync` + `combine` + `throwIfFailed`).
- **O que permanece não resolvido**:
  - Padrão de retry com `Result.try` (mencionado mas não implementado).
  - `ValidationException` customizada para encapsular a rede de erros.

## [2026-04-23] ingest | Imersão DDD + Arquitetura Limpa — Aula 16: Arquitetura Hexagonal

- **Material**: `2026-04-20_transcrição-projetoEAD-16-arquitetura-hexagonal.md` — aula sobre implementação concreta de Portas e Adaptadores, repositório por agregado e separação de queries (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md`
  - Atualizado `concepts/arquitetura-limpa.md`: seção Portas e Adaptadores expandida com implementação concreta (pasta `provider/`, diagrama de porta vs. adaptador); adicionado padrão de 1 UC por arquivo; questão sobre Ports & Adapters marcada como parcialmente resolvida.
  - Atualizado `concepts/agregado.md`: adicionada regra de 1 repositório por agregado; separação repositório vs. queries (CQS prático); pasta `provider/` na organização do código.
  - Atualizado `concepts/ddd.md`: adicionado `Repositório` como ferramenta tática na tabela de padrões.
  - Atualizado `index.md` com nova fonte e descrições revisadas dos conceitos.
- **Conteúdo coberto**: Ports & Adapters na prática (porta = interface no core, adaptador = implementação fora); 1 repositório por raiz do agregado; separação repositório (comandos) vs. queries (consultas complexas com SQL cru); 1 caso de uso por arquivo; convenção de nomenclatura bilíngue (negócio em português, técnico em inglês); pasta `provider/` para interfaces.
- **O que permanece não resolvido**:
  - Implementação concreta do adaptador `PrismaUserRepository` (ficou para a aula 17).
  - Interface `usuario.queries.ts` mencionada mas não implementada.
  - Controllers NestJS e presenters ainda não cobertos.

## [2026-04-27] ingest | Imersão DDD + Arquitetura Limpa — Aula 18: Caso de Uso 01 (Registrar Usuário)

- **Material**: `2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md` — aula prática de implementação do caso de uso `RegistrarUsuario`, com repositório, criptografia e VO ID (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md`
  - Atualizado `concepts/ddd.md`: adicionado `Provedor (Provider)` como ferramenta tática (ex.: `CriptografiaProvider`).
  - Atualizado `concepts/arquitetura-limpa.md`: adicionado `CriptografiaProvider` ao diagrama de portas; exemplo de interface; debate de segurança de hash; questão do `PrismaUserRepository` atualizada.
  - Atualizado `concepts/objeto-de-valor.md`: adicionado VO `ID` (UUID v4, geração automática, `createHash()`) à tabela de exemplos.
  - Atualizado `concepts/agregado.md`: adicionada seção sobre propriedades opcionais e segurança no agregado (senha opcional, `semSenha()`).
  - Atualizado `index.md` com nova fonte e descrições revisadas dos conceitos.
- **Conteúdo coberto**: implementação do UC `RegistrarUsuario` com dois provedores injetados (`UsuarioRepositorio` + `CriptografiaProvider`); VO `ID` com UUID v4; senha opcional na entidade `User`; método `semSenha()` para retornar clone seguro; bcrypt rounds (trade-off segurança/performance); `Result.try` para fluxo assíncrono; `Result.combine` com itens nulos.
- **O que permanece não resolvido**:
  - Implementação concreta do `PrismaUserRepository` — interface definida, implementação pendente.
  - Integração do `CriptografiaProvider` com NestJS (módulo de injeção).
  - `Result.combine` com itens nulos: comportamento exato do filtro não documentado em detalhe.
  - Tabela separada para credenciais vs. omissão de coluna — decisão arquitetural em aberto.

## [2026-04-27] ingest | Imersão DDD + Arquitetura Limpa — Aula 19: Caso de Uso 02 (Registrar Usuário — continuação)

- **Material**: `2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md` — continuação da implementação do UC `RegistrarUsuario`, com verificação de unicidade, método `comSenha(hash)` e Q&A (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md`
  - Atualizado `concepts/ddd.md`: adicionada formulação "UC como maior cliente do domínio" com os 3 pontos de acesso ao domínio (VO, Entidade, Serviço de Domínio).
  - Atualizado `concepts/arquitetura-limpa.md`: adicionada seção sobre input do UC (primitivos vs. VOs); instanciação na camada de adaptadores.
  - Atualizado `concepts/objeto-de-valor.md`: clarificada separação StrongPasswordVO (UC) vs. HashPasswordVO (entidade); adicionada seção VOs como parâmetro de repositório.
  - Atualizado `concepts/agregado.md`: adicionada seção de métodos de transformação via clone (`comSenha(hash)`) como exemplo de modelo rico.
  - Atualizado `index.md` com nova fonte e descrições revisadas dos conceitos.
- **Conteúdo coberto**: fluxo refinado do UC (validar → hash → criar com senha → verificar unicidade → persistir); método `comSenha(hash)` na entidade; verificação de unicidade por e-mail no repositório; VOs como parâmetro de repositório; exceção única com erros acumulados via `map` + `join`; UC como maior cliente do domínio; input do UC (primitivos vs. modelos).
- **O que permanece não resolvido**:
  - Implementação concreta do `PrismaUserRepository` — continua pendente.
  - Formato de resposta de erro da API HTTP (NestJS) não definido.
  - Quando instanciar modelos no UC vs. na camada de adaptadores — sem regra definitiva.

## [2026-04-27] ingest | Imersão DDD + Arquitetura Limpa — Aula 20: Repositório de Usuário (Adaptador Prisma + Controller NestJS)

- **Material**: `2026-04-21_transcrição-projetoEAD-20-repositorio_usuario.md` — aula que implementa a camada de infraestrutura completa para o módulo de autenticação (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md`
  - Atualizado `concepts/arquitetura-limpa.md`: adicionada seção de adaptadores concretos (`UsuarioPrisma`, `AutenticacaoController`, `PrismaService`); questões do `PrismaUserRepository`, integração Prisma e controllers marcadas como resolvidas.
  - Atualizado `concepts/ddd.md`: adicionada referência à implementação concreta do adaptador e controller.
  - Atualizado `concepts/agregado.md`: complementada seção de repositório por agregado com implementação concreta `UsuarioPrisma`.
  - Atualizado `index.md` com nova fonte e descrições revisadas dos conceitos.
- **Conteúdo coberto**: adaptador `UsuarioPrisma` (composição com `PrismaService`); `AutenticacaoController` com rota `POST /auth/registrar`; `DatabaseModule` exportando `PrismaService`; barrel exports no pacote core; módulos NestJS como fronteiras (paralelo com Bounded Contexts); gotcha de Prisma generate em monorepo; teste manual via REST Client.
- **O que permanece não resolvido**:
  - Implementação concreta do `CriptografiaProvider` (bcrypt) — não feita nesta aula.
  - Presenters/DTOs de resposta HTTP — controller retorna string simples.
  - Mapeamento Entidade ↔ modelo Prisma (conversão de VOs para tipos primitivos) — detalhes não mostrados.
  - Testes de integração do adaptador com banco real — não cobertos.

## [2026-04-27] ingest | Dev AI — Aula 01: IA Generativa — Tokenização e Embeddings

- **Material**: `2026-04-25_transcrição-IA-01-IntroducaoDesenvolvimentoIA-IaGenerativa01.md` — primeira aula da trilha "Dev AI", cobrindo o pipeline de modelos Transformer (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-dev-ai-ia-generativa-01.md`
  - Criada nova página de conceito: `wiki/concepts/ia-generativa.md` — tokenização, embeddings, pipeline Transformer, analogia dimensional, matriz de entrada.
  - Atualizado `entities/formacao-dev.md`: adicionado curso "Dev AI" como segunda trilha; tabela com os dois cursos; cronograma e fontes atualizados; conceito `ia-generativa` adicionado como relacionado.
  - Atualizado `overview.md`: escopo expandido para incluir "IA Generativa e desenvolvimento orientado a IA"; nova hipótese sobre entendimento interno de Transformers; perspectivas sobre Attention e Stack Driven Development.
  - Atualizado `index.md` com nova fonte, novo conceito, descrições revisadas de entidade e overview (contagem: 8 fontes, 6 conceitos).
- **Conteúdo coberto**: tokenização (fragmentos intermediários, IDs numéricos, vocabulário do modelo); embeddings (vetores multidimensionais, 768+ dimensões, pré-treinamento); matriz de entrada [nTokens × nDimensões]; continuidade prompt-resposta; analogia dimensional 1D→2D→3D→nD.
- **O que permanece não resolvido**:
  - Mecanismo de Attention (Self-Attention, Multi-Head Attention) — será coberto na aula seguinte.
  - Relação entre dimensionalidade dos embeddings e qualidade do modelo.
  - Fine-tuning vs. pré-treinamento — como embeddings são atualizados.
  - Temas práticos: Skills, Stack Driven Development, Rules — mencionados mas não cobertos.

## [2026-04-27] ingest | Dev AI — Aula 02: IA Generativa — Attention, Feed-Forward e Geração Autorregressiva

- **Material**: `2026-04-25_transcrição-IA-02-IntroducaoDesenvolvimentoIA-IaGenerativa02.md` — segunda aula da trilha "Dev AI", completando o pipeline de modelos Transformer (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-dev-ai-ia-generativa-02.md`
  - Atualizado `concepts/ia-generativa.md`: pipeline completo com Multi-Head Attention (Q/K/V, heads), Feed-Forward (expansão/compressão), camada de saída (logits + softmax), temperatura, geração autorregressiva + KV-cache; insights práticos (importância do final do prompt); questão sobre Attention marcada como parcialmente resolvida.
  - Atualizado `index.md` com nova fonte e descrição revisada do conceito.
- **Conteúdo coberto**: Multi-Head Attention (12 heads, Q/K/V, relação inter-token); Feed-Forward (expansão 4× + ativação + compressão); 12 camadas alternadas; camada de saída (último embedding × vocabulário 128k → logits → softmax); temperatura; loop autorregressivo com KV-cache; custo computacional (~100MB+ por requisição, bilhões de operações); "o final do prompt é mais importante".
- **O que permanece não resolvido**:
  - Detalhes matemáticos da fórmula de Attention (Q·Kᵀ/√d, masking) — será coberto na aula seguinte.
  - Impacto real da temperatura por tipo de tarefa.
  - Fine-tuning vs. pré-treinamento.

## [2026-04-27] ingest | Dev AI — Aula 03: A Revolução da Atenção (Multi-Head Attention em detalhe)

- **Material**: `2026-04-25_transcrição-IA-03-IntroducaoDesenvolvimentoIA-RevolucaoDaAtencao.md` — aula opcional de aprofundamento no mecanismo de Attention (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-dev-ai-revolucao-da-atencao.md`
  - Atualizado `concepts/ia-generativa.md`: expandida seção de Multi-Head Attention com projeção Q/K/V por head (768×64), cálculo de scores (Q_i × K_j), softmax, concatenação de 12 heads + W_O; questão sobre Attention marcada como resolvida; adicionadas questões sobre positional encoding e layer normalization.
  - Atualizado `index.md` com nova fonte e descrição revisada (contagem: 10 fontes).
- **Conteúdo coberto**: projeção Q/K/V (W_Q, W_K, W_V cada 768×64); semântica de Q/K/V (pergunta/conteúdo/resposta); cálculo Q×K por par de tokens; softmax para normalização; atenção não-simétrica (ordem importa); concatenação 12×64=768 + W_O; visualização concreta de mapa de atenção; analogia "cerveja e fralda" para correlações emergentes; menção a engenharia de contexto como base para Skills/Rules/Spec Driven Development.
- **O que permanece não resolvido**:
  - Scaling factor (÷√d) — não mencionado explicitamente pelo instrutor.
  - Positional encoding e causal masking — não formalizados.
  - Layer normalization e residual connections — não cobertos.

## [2026-04-27] ingest | Dev AI — Aula 04: Limitações dos Modelos (Arquitetura baseada em Tokens)

- **Material**: `2026-04-25_transcrição-IA-04-IntroducaoDesenvolvimentoIA-limitacoesDoModelo.md` — aula experimental sobre limitações práticas de modelos Transformer (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-dev-ai-limitacoes-do-modelo.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada seção de limitações arquiteturais (contagem de caracteres, chain-of-thought em loop) e LM Studio como ferramenta; novas questões sobre contorno de limitações e prompt injection.
  - Atualizado `index.md` com nova fonte e descrição revisada (contagem: 11 fontes).
- **Conteúdo coberto**: limitação de contagem de letras (teste com "inconstitucionalissimamente"); trade-off letras vs. palavras vs. tokens; LM Studio para execução local; chain-of-thought visível em modelo 17B (6800+ tokens em loop); autocorreção de Claude Sonnet durante geração; princípio "fundamentos > ferramentas".
- **O que permanece não resolvido**:
  - Como contornar limitações de contagem (ferramentas externas? código auxiliar?).
  - Prompt injection e prompt insufficiency — mencionados mas não detalhados.
  - Quais outras tarefas são arquiteturalmente difíceis para Transformers.

## [2026-04-27] ingest | Dev AI — Aula 05: System Prompt e Guardrails

- **Material**: `2026-04-25_transcrição-IA-05-IntroducaoDesenvolvimentoIA-systemPrompt.md` — última aula planejada da introdução teórica (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-27_source-dev-ai-system-prompt.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada seção sobre System Prompt e Guardrails (estrutura de mensagens API, componentes do system prompt, guardrails, "honestidade consciente"); debate sobre AGI; novas questões sobre system prompts customizados e equilíbrio segurança/utilidade.
  - Atualizado `index.md` com nova fonte e descrição revisada (contagem: 12 fontes).
- **Conteúdo coberto**: system prompt como camada invisível; estrutura de mensagens API Anthropic (system/user/assistant); guardrails como barreiras de segurança; modelos sem censura via LM Studio; "honestidade consciente" do Claude; caso Pentágono-Anthropic; opinião sobre AGI ("precisa de novo breakthrough, mas 10-15 anos de inovação com tecnologia atual").
- **O que permanece não resolvido**:
  - Como escrever system prompts eficazes para aplicações customizadas.
  - Equilíbrio guardrails vs. utilidade.
  - Prompt injection — mencionado mas não detalhado.

## [2026-04-28] ingest | Dev AI — Aula 06: Objetivo das Trilhas — Arquitetura para AI-Driven Development

- **Material**: `2026-04-25_transcrição-IA-06-ContextoRulesSkill-objetivoDasTrilhas.md` — aula de alinhamento que marca a transição teoria→prática na trilha Dev AI (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-28_source-dev-ai-objetivo-das-trilhas.md`
  - Atualizado `overview.md`: adicionada hipótese de convergência DDD+IA (modularização como pilar #1 para ambas); perspectivas sobre AI-Driven Development, prioridade de cuidado e CQRS.
  - Atualizado `index.md` com nova fonte, overview revisado (contagem: 13 fontes).
- **Conteúdo coberto**: três pilares do AI-Driven Development (modularização #1 > arq. limpa #2 > CQRS #3); dois eixos de organização (módulos × camadas); fluxo completo de feature (formulário→banco→resposta); prioridade de cuidado por camada (model/UC=máximo, controller/repo=médio, frontend=menor); expectativas realistas (IA gera código funcional mas maior/menos otimizado); Big Ball of Mud vs. modularização; AI-Driven Dev ≠ CRUDs; testes 100% nas regras de negócio; Skills para varredura de código.
- **Convergência das trilhas**: esta aula conecta formalmente DDD/Clean Architecture (trilha Arquiteto Dev) com AI-Driven Development (trilha Dev AI). Modularização (Bounded Context) é o ponto de convergência.
- **O que permanece não resolvido**:
  - Conceito formal de "Agentes" — será coberto na aula seguinte.
  - Skills, Rules e Spec Driven Development — mencionados mas não definidos.
  - CQRS na prática com IA.
  - Mecanismos indiretos de comunicação entre módulos.

## [2026-04-28] ingest | Dev AI — Aula 07: Conceito de Agentes de IA

- **Material**: `2026-04-25_transcrição-IA-07-ContextoRulesSkill-conceitoDeAgentes.md` — aula conceitual sobre agentes (formacao.dev).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-28_source-dev-ai-conceito-de-agentes.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada seção sobre Agentes de IA (definição formal, LLM como cérebro, loop iterativo, anti-pattern if/else); novas questões sobre multi-agentes e custo de loops.
  - Atualizado `index.md` com nova fonte e descrição revisada (contagem: 14 fontes).
- **Conteúdo coberto**: definição formal de agente ("LLM como núcleo de decisão"); agente = orquestrador de prompts; LLM = cérebro / agente = braços; loop iterativo (build→erro→correção→retry); ferramentas (terminal, arquivos, banco, APIs); anti-pattern de 3000-4000 linhas de if/else; multi-agentes como próximo passo.
- **O que permanece não resolvido**:
  - Blocos de construção para desenvolvimento com IA (Skills, Rules, contexto) — próxima aula.
  - Estruturação de sistemas multi-agente.
  - Custo/latência de loops iterativos com LLMs.

## [2026-04-28] ingest | Dev AI — Aula 08: Engenharia de Prompt e Engenharia de Contexto

- **Material**: `2026-04-25_transcrição-IA-08-ContextoRulesSkill-engenhariaDePrompt.md` — última aula da série introdutória Dev AI (formacao.dev). Completa a ingestão das 8 aulas do módulo.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada seção sobre Engenharia de Prompt e Contexto (estrutura CORFT, meta-prompt, hierarquia prática, engenharia de contexto como #1); nova fonte adicionada.
  - Atualizado `index.md` com nova fonte e descrição revisada (contagem: 15 fontes).
- **Conteúdo coberto**: 5 princípios de prompt (engenharia de contexto #1, final do prompt, CORFT, meta-prompt, Skills/Rules/Spec Driven Development); estrutura CORFT (Contexto→Objetivo→Regras→Formato→Tarefa Final); hierarquia prática (contexto > prompt estruturado > meta-prompt); narração por voz como método; Spec Driven Development como meta-prompt automático.
- **Marco**: com esta ingestão, todas as 8 aulas da série Dev AI (IA-01 a IA-08) estão documentadas. Resta apenas o material "Essential Skills for AI Coding" como pendente em raw/sources/.
- **O que permanece não resolvido**:
  - Definição formal de Skills e Rules (ficou para aulas práticas).
  - Spec Driven Development em detalhe (curso posterior).
  - Como agentes manipulam contexto em Spec Driven Development.

## [2026-04-28] ingest | Matt Pocock — Essential Skills for AI Coding from Planning to Production

- **Material**: `2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md` — palestra de Matt Pocock ([@mattpocockuk](https://x.com/mattpocockuk)) sobre práticas de engenharia de software para AI-Driven Development. Material externo (YouTube), mas fortemente alinhado com a trilha Dev AI da formacao.dev.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md`
  - Criada nova entidade: `wiki/entities/matt-pocock.md` — especialista em TypeScript; criador do Sand Castle (biblioteca de paralelização de agentes) e Skills para Claude Code
  - Atualizado `concepts/ia-generativa.md`: adicionada seção extensa sobre AI-Driven Development (smart zone/dumb zone, HITL vs. AFK, fluxo completo Grill Me → PRD → Tracer Bullets → Implementação AFK → QA, módulos profundos vs. rasos, TDD essencial, Push vs. Pull, Skills); novas questões abertas sobre Sand Castle, Skills, doc rot, paralelização
  - Atualizado `overview.md`: novas hipóteses (arquitetura de módulos profundos, base ruim = IA ruim, ciclos de feedback = teto de qualidade); novas perspectivas (Grill Me/PRD/Tracer Bullets/TDD, HITL vs. AFK, smart zone/dumb zone, fatias verticais, livros clássicos)
  - Atualizado `index.md`: nova fonte e nova entidade (contagens: 16 fontes, 6 conceitos, 2 entidades); descrições revisadas de `ia-generativa.md` e `overview.md`
- **Conteúdo coberto**:
  - **Restrições de LLMs**: smart zone vs. dumb zone (~100k tokens); relações de atenção escalam quadraticamente; LLMs como "Memento" (amnésia ao limpar contexto)
  - **HITL vs. AFK**: separação clara entre tarefas humanas (planejamento, QA, review) e automatizáveis (implementação, testes); metáfora "turno do dia vs. turno da noite"
  - **Grill Me**: sessão de interrogatório (40-100 perguntas, 1h) para alcançar entendimento compartilhado; crítica ao "specs to code"
  - **PRD**: Product Requirements Document estruturado (Problem/Solution/User Stories/Implementation Decisions/Testing Decisions/Out of Scope); Matt não lê PRD após gerado (confia em sumarização + alinhamento já alcançado); doc rot como problema
  - **Tracer Bullets (fatias verticais)**: implementação end-to-end (schema + API + UI + testes) vs. horizontal (camada por camada); IA adora programar horizontalmente; tracer bullets dão feedback instantâneo; issues com relações de bloqueio permitem paralelização
  - **Módulos profundos vs. rasos** (John Ousterhout, _A Philosophy of Software Design_): módulos com interface simples + muita funcionalidade interna são mais fáceis de testar e mais eficazes para IA; IA sem supervisão tende a produzir codebase rasa; habilidade `improve codebase architecture` para aprofundar módulos
  - **TDD essencial**: ciclo red-green-refactor; IA tende a trapacear (implementação → testes); TDD dificulta trapaça (instrumenta código antes); ciclos de feedback = teto de qualidade da IA
  - **Implementação AFK**: loop automatizado (explorar → TDD → feedback → commit → mover issue); priorização (bugfixes > infraestrutura > tracer bullets > polish > refactors); regra: ONLY WORK ON A SINGLE TASK
  - **Paralelização (Sand Castle)**: planner → implementadores (paralelos em sandboxes Docker isoladas) → revisor (Opus) → merger; resolve relações de dependência entre issues
  - **QA manual**: impõe "bom gosto" humano; previne _slop_ (código genérico/malfeito); função do QA = criar mais issues enquanto agente implementa
  - **Push vs. Pull**: revisor recebe padrões via Push (compara código contra padrões); implementador tem padrões via Pull (Skills consultáveis)
  - **Skills**: Grill Me, Write PRD, PRD to Issues, TDD, Improve Codebase Architecture
- **Convergência com Dev AI**: material **reforça e complementa** aulas IA-06 (modularização como pilar #1), IA-07 (agentes) e IA-08 (engenharia de prompt/contexto). Matt demonstra **como** aplicar os conceitos na prática (módulos profundos, orquestração de agentes, Skills).
- **Marco**: com esta ingestão, todos os materiais de `raw/sources/` foram processados. Base de conhecimento completa para as trilhas "Arquiteto Dev: DDD + Arquitetura Limpa" e "Dev AI: Desenvolvimento com IA".
- **O que permanece não resolvido**:
  - Sand Castle: como configurar e usar? Documentação disponível?
  - Skills: onde obter as Skills mencionadas? Repositório público?
  - Claude Code: quais recursos específicos Matt usa? Como configura permissões?
  - Revisão de código crescente: técnicas para lidar com volume sem perder qualidade?
  - Protótipos de frontend: fluxo detalhado de como IA gera protótipos descartáveis?
  - Doc rot: como preservar decisões arquiteturais importantes sem apodrecimento?
  - Multi-agentes: limite prático de agentes simultâneos? Custo/latência?
  - Push vs. Pull: como implementar sistema de Pull (Skills consultáveis) na prática? MCP?

## [2026-04-28] lint | Verificação completa da wiki (todos os diretórios)

- **Escopo**: 33 arquivos .md analisados (concepts, entities, sources, maintenance) — temas DDD + Arquitetura Limpa, IA Generativa, AI-Driven Development
- **O que foi feito**:
  - Criado relatório de lint: `wiki/maintenance/lint-reports/2026-04-28_lint-completo.md`
  - Atualizado `index.md`: adicionada entrada para o relatório de lint
  - Análise sistemática: contradições, conteúdo obsoleto, páginas órfãs, conceitos não promovidos, candidatos de pesquisa
- **Principais descobertas**:
  - **Nenhuma contradição detectada** — todas as fontes estão alinhadas
  - **1 arquivo obsoleto**: `sources/2026-04-20_transcricoes-projetoEAD.md` (órfão; supersedido por `source-imersao-ddd-arq-limpa.md`; contém links quebrados)
  - **4 conceitos-chave não promovidos para páginas próprias**: Result/Either pattern (prioridade alta), CQRS (prioridade média), Inversão de Dependência (expandir), TDD (prioridade média)
  - **open-questions.md está vazio** apesar de 50+ questões não resolvidas espalhadas pelas páginas de conceito (prioridade alta para consolidação)
  - **READMEs de scaffold** em vários diretórios (prioridade baixa; verificar se têm conteúdo útil)
- **Ações recomendadas**:
  - **Prioridade Alta**: (1) Marcar `transcricoes-projetoEAD.md` como superseded ou deletar; (2) Promover Result/Either para `concepts/result-pattern.md`; (3) Consolidar 10-15 questões mais importantes em `open-questions.md`
  - **Prioridade Média**: (4) Promover CQRS para página própria ou seção dedicada; (5) Considerar `concepts/tdd.md`; (6) Expandir Inversão de Dependência com exemplos concretos
  - **Prioridade Baixa**: (7) Verificar READMEs; (8) Considerar páginas para Entidade e Caso de Uso (apenas se houver mais material); (9) Revisar tags no frontmatter
- **Candidatos de pesquisa**: Sand Castle (documentação, exemplos), Skills de Matt Pocock (repositório), CQRS com TypeScript, Result/Either libraries, Prisma com DDD, System Prompt Engineering, multi-agentes, doc rot, Push vs. Pull, frontend com IA, revisão de código com IA
- **Estatísticas**: 16 resumos de fonte (15 no index + 1 órfão), 6 conceitos, 2 entidades, 0 sínteses, 4 páginas de manutenção — **28 páginas ativas** (excluindo READMEs)
- **Saúde geral**: 🟢 **Saudável** com oportunidades de melhoria — nenhuma contradição; boa cobertura dos temas; convergência entre fontes; frontmatter consistente; log completo. Áreas de atenção: arquivo obsoleto, conceitos não promovidos, open-questions.md vazio.
- **Próxima verificação recomendada**: 2026-07-28 (3 meses) ou após ingestão de novo bloco significativo de materiais.

## [2026-04-29] ingest | Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)

- **Material**: `2026-04-27_transcrição-IA-08-ContextoRulesSkill-engenhariaDeContexto.md` — aula prática sobre engenharia de contexto como mecanismo de redução de variabilidade em execuções longas de agentes (formacao.dev, módulo "Agentes, Skills & Eng. de Contexto").
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md`
  - Atualizado `concepts/ia-generativa.md`: expandida seção "Engenharia de Prompt e Contexto" com três novos blocos — **context rot** (tabela de efeito, consequência prática), **Rule vs. Skill** (tabela comparativa, notas de evidência), e **Spec Driven Development como Engenharia de Contexto em Escala** (diagrama de tasks + Mentions); adicionadas 3 novas questões abertas (Rule vs. Skill formal, Spec Driven Development na prática, otimização de contexto por task); nova nota de atualização.
  - Atualizado `wiki/index.md`: nova fonte adicionada; contagem atualizada (17 fontes); descrição de `ia-generativa.md` revisada; datas atualizadas.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: context rot (apodrecimento do contexto em execuções longas); engenharia de contexto = injeção de Rule + Skill + Mentions antes de cada ação; Rule = restrição operacional (como estruturar); Skill = habilidade de implementação (como executar); Spec Driven Development = divisão em tasks menores com injeção de contexto por task; autocorreção interna de ferramentas modernas de agentes; documentação reutilizável amigável para humanos e IA.
- **Sem contradições** com fontes anteriores — reforça e detalha conceitos introduzidos nas Aulas IA-06 (engenharia de contexto como pilar #1), IA-07 (loop iterativo de agentes como motivador do context rot) e IA-08 (hierarquia de engenharia de contexto > prompt estruturado).
- **Marco**: com esta ingestão, todos os materiais disponíveis em `raw/sources/` estão processados (17/17). A wiki está atualizada.
- **O que permanece não resolvido**:
  - Diferença formal entre Rule e Skill com exemplos concretos — prometida para aulas futuras.
  - Configuração prática do Spec Driven Development (ferramentas, estrutura de arquivo, limites de tasks).
  - Otimização de tokens por task em Spec Driven Development (como equilibrar Mentions + Rules + Skills).

## [2026-04-29] ingest | Dev AI — Aula 10: Rule vs. Skill — Definições Canônicas

- **Material**: `2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md` — aula conceitual que formaliza as definições de Rule e Skill usando definições geradas e corrigidas via Claude Code (formacao.dev, módulo "Agentes, Skills & Engenharia de Contexto").
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-04-29_source-dev-ai-rule-skill.md`
  - Atualizado `concepts/ia-generativa.md`: seção "Rule vs. Skill" substituída com definições canônicas (declarativa vs. ativa), citações textuais das definições formais, técnica few-shot, propriedades adicionais (contextualidade da Rule, relação Rule→Skill, Skill como Markdown + exemplos), e independência de ferramenta (Cursor, Claude Code, Codex, Antigravity); questão "Rule vs. Skill" marcada como resolvida; duas novas questões abertas adicionadas (formato de Skill na prática; referência Rule→Skill por ferramenta); nova fonte adicionada em Fontes de Suporte; nova nota de atualização.
  - Atualizado `wiki/index.md`: nova fonte adicionada; contagem atualizada (18 fontes); descrição de `ia-generativa.md` revisada.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: Rule = declarativa, convenção/restrição contextual passiva, define *o quê*; Skill = ativa, processo ordenado passo a passo, define *como*; Skill pode referenciar Rules internamente; few-shot (exemplos de código dentro do prompt/skill); independência de ferramenta (conceito > implementação específica); Rule como regra passiva ativada pela Skill no momento certo.
- **Questão resolvida**: "qual é a diferença formal entre Rule e Skill?" — aberta desde a Aula IA-09.
- **Sem contradições** com fontes anteriores — formaliza e detalha o que havia sido introduzido informalmente na Aula IA-09.
- **Marco**: com esta ingestão, todos os materiais disponíveis em `raw/sources/` estão processados (18/18). A wiki está totalmente atualizada.
- **O que permanece não resolvido**:
  - Formato prático de arquivo Markdown para uma Skill (seções, número de exemplos few-shot adequado).
  - Como Skill referencia Rule concretamente por ferramenta (Cursor vs. Claude Code vs. Codex).
  - Configuração prática do Spec Driven Development.
  - Exemplo concreto de Rule + Skill prometido para a próxima aula.

## [2026-05-04] ingest | Dev AI — Aula 11: Exemplo Prático de Skill (Cursor)

- **Material**: `2026-05-04_transcrição-IA-11-ContextoRulesSkill-exemploSkill.md` — aula prática demonstrando a criação de uma Skill chamada `criar-entidade-completa` no Cursor e sua execução em projeto vazio (formacao.dev, módulo "Agentes, Skills & Eng. de Contexto").
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-05-04_source-dev-ai-exemplo-skill.md`
  - Atualizado `concepts/ia-generativa.md`: adicionadas subseções "Formato Prático de uma Skill (Cursor)" (estrutura mínima de arquivo Markdown com frontmatter + "Quando usar" + "Processo", observações da demonstração) e "Ciclo de Criação de Skills" (engenharia reversa de código existente como método preferido vs. criação do zero, heurística de granularidade); questões "Skill na prática" e "Referência Rule→Skill por ferramenta" marcadas como parcialmente resolvidas; duas novas questões abertas adicionadas (metadados do Cursor, Skills complexas).
  - Atualizado `wiki/index.md`: nova fonte adicionada; contagem atualizada (19 fontes); descrição de `ia-generativa.md` revisada; datas atualizadas.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: estrutura física de Skill no Cursor (pasta `.cursor/skills/`, arquivo Markdown com metadados); ciclo de criação por engenharia reversa de código existente (método preferido pelo instrutor); criação do zero como alternativa menos eficaz; fraqueza de Skills sem exemplos few-shot; referência explícita de Rule dentro de uma Skill (redundante no Cursor mas portável); heurística de granularidade (Skills específicas > Skills genéricas); demonstração de execução (nomenclaturas respeitadas, hierarquia de pastas criada, BaseEntity gerado).
- **Sem contradições** com fontes anteriores — concretiza e aprofunda conceitos formalizados nas Aulas IA-09 (context rot, ingestão de Rule + Skill) e IA-10 (definições canônicas de Rule e Skill).
- **Marco**: com esta ingestão, todos os materiais disponíveis em `raw/sources/` estão processados (19/19). A wiki está totalmente atualizada.
- **O que permanece não resolvido**:
  - Metadados obrigatórios vs. opcionais no frontmatter de Skills no Cursor.
  - Como o Cursor injeta a Skill no contexto — automaticamente ou via `@skill`?
  - Skills complexas com subpastas de referências — mencionadas mas não demonstradas.
  - Referência Rule→Skill no Claude Code e Codex — comportamento não documentado.
  - Configuração prática do Spec Driven Development.

## [2026-05-04] ingest | Dev AI — Aula 12: Tipos de Skill (Determinística, Híbrida e Aberta)

- **Material**: `2026-05-04_transcrição-IA-12-ContextoRulesSkill-tiposDeSkill.md` — aula de fechamento do capítulo "Agentes, Skills & Eng. de Contexto" da trilha Dev AI (formacao.dev). Formaliza uma taxonomia de três tipos de Skills e expande o conceito de Skill como contêiner de arquivos.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-05-04_source-dev-ai-tipos-de-skill.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada subseção "Tipos de Skill (Aula IA-12)" com tabela comparativa (determinística / híbrida / aberta), conceito de Skill como contêiner de arquivos (scripts, assets, templates), exemplo real de `paralelo.js` para git worktrees, e diagrama de encadeamento de Skills no Spec Driven Development; questão "Skills complexas" marcada como parcialmente resolvida; quatro novas questões abertas adicionadas (linha divisória determinística/híbrida, execução de scripts, versionamento, git worktrees); nova nota de atualização.
  - Atualizado `wiki/index.md`: nova fonte adicionada; contagem atualizada (20 fontes); descrição de `ia-generativa.md` revisada.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: taxonomia de três tipos de Skill — (1) **determinísticas** (script fixo executado pelo agente; ex.: scaffold, Docker, npm), (2) **híbridas** (parte script + parte instrução textual; ex.: criar módulo com integração no projeto), (3) **abertas** (100% textual; forma mais comum); Skills como contêiner de arquivos (pasta pode ter `.prettierrc`, projetos-template, scripts); exemplo real de `paralelo.js` para criar git worktrees paralelos; reforço da definição de Skill como "bloco de instruções, regras, contexto e, às vezes, código/ferramentas"; encadeamento Skill+Task no Spec Driven Development.
- **Sem contradições** com fontes anteriores — reforça e estende a Aula IA-11 (formato prático) e a Aula IA-10 (definições canônicas).
- **Marco**: com esta ingestão, todos os materiais disponíveis em `raw/sources/` estão processados (20/20). A wiki está totalmente atualizada.
- **O que permanece não resolvido**:
  - Skill determinística vs. híbrida — linha divisória ainda subjetiva.
  - Como o agente sabe quando executar um script vs. seguir instruções textuais dentro de uma Skill?
  - Versionamento de scripts em Skills — não abordado.
  - Detalhes do script `paralelo.js` para git worktrees — mencionado mas não documentado.
  - Configuração prática do Spec Driven Development — continua pendente.

## [2026-05-05] ingest | Dev AI — Aula 13: Skill e Módulos — Introdução ao Capítulo

- **Material**: `2026-05-04_transcrição-IA-13-SkillModulos-IntroducaoEModulos.md` — aula introdutória do Capítulo 3 da trilha Dev AI (formacao.dev, módulo "Skill e Módulos"). Não apresenta conceitos técnicos novos; o conteúdo é de orientação pedagógica e alinhamento de expectativas.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-05-05_source-dev-ai-skill-modulos-intro.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada subseção "Skills Práticas do Capítulo 3" (tabela com as duas Skills anunciadas: criar projeto + criar módulo) e conceito de **modularização como espectro gradual** (nível 1 = 1 módulo, nível 2 = 2 módulos, nível 3+ = múltiplos módulos) com o princípio de não atrasar deploy por perfeccionismo ("trocar a asa com o avião voando"); nova fonte adicionada ao frontmatter; nova nota de atualização.
  - Atualizado `wiki/index.md`: nova fonte adicionada; contagem atualizada (21 fontes); descrição de `ia-generativa.md` revisada; datas atualizadas.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: anúncio das duas Skills do capítulo (criar projeto do zero + criar módulo); validação pós-gravação pelo instrutor ("vim do futuro"); modularização como escolha gradual (não binário); Histórico de evolução esperado (1 módulo → 2 módulos → n módulos); crítica ao perfeccionismo prematuro; metáfora "trocar a asa com o avião voando".
- **Nenhuma contradição** com fontes anteriores — reforça e contextualiza os tipos de Skill (IA-12) e a conexão DDD+IA (modularização como pilar #1, IA-06).
- **Marco**: com esta ingestão, todos os materiais disponíveis em `raw/sources/` estão processados (21/21 arquivos de conteúdo). A wiki está totalmente atualizada.
- **O que permanece não resolvido**:
  - Estrutura concreta das duas Skills prometidas (criar projeto e criar módulo) — serão apresentadas nas próximas aulas do capítulo.
  - Critérios precisos para decidir entre 1, 2 ou múltiplos módulos — prometidos "mais lah na frente".
  - Como a Skill de criação de módulo se adapta a projetos com 1 vs. n módulos (mesma Skill, orientações diferentes — detalhe não fornecido).

## [2026-07-18] ingest | Dev AI — Módulo Ferramentas Agênticas (Aulas 01–06)

- **Material**: 6 transcrições do módulo "Ferramentas Agênticas" do curso Dev AI (formacao.dev, instrutor Leonardo). Aulas 01–05 com conteúdo; Aula 06 (Harness Parte 1) sem transcrição.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-07-17_source-ferramentas-agenticas.md`
  - Atualizado `concepts/ia-generativa.md`: adicionadas duas novas subseções — **Infraestrutura Prática de Skills por Ferramenta** (pastas `.claude/skills/` vs `.agents/skills/`, estrutura mínima de `skill.md`, gatilho implícito via description vs. chamada explícita, Skills determinísticas com scripts executáveis, analogia Skill = função/procedure) e **Spec-Driven Development na Prática** (estrutura de pasta `specs/changes/`, formato de `spec.md` com checkboxes, modos de execução sequencial/paralelo/contexto independente, rastreabilidade); questão "Spec Driven Development na prática" marcada como parcialmente resolvida; novas questões abertas sobre Harness, recarregamento de Skills, git submodules e conflitos em subagentes paralelos; nova fonte adicionada ao frontmatter e notas de atualização.
  - Atualizado `wiki/index.md`: nova fonte adicionada (contagem: 22 fontes); descrição de `ia-generativa.md` revisada com novos detalhes.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: pastas de Skills por ferramenta (Claude Code: `.claude/skills/`, Codex: `.agents/skills/`); pastas ocultas no macOS/Linux, visíveis no Windows; compartilhamento via git submodules; estrutura mínima de `skill.md` (frontmatter com `name` e `description`); `description` como gatilho implícito (palavras-chave disparam Skill automaticamente); chamada explícita preferida pelo instrutor (`/nome-da-skill`); Skills com múltiplos arquivos (determinísticas com `index.js` executado via Node.js); analogia Skill = função/procedure da programação procedural; comportamento idêntico no Codex; especificação simples (`specs/changes/<nome>/spec.md`); checkboxes de rastreamento; execução por subagentes sequencial ou paralela; arquivamento de specs em `specs/archive/`; evidência de 10 especificações encadeadas com 10–15 passos cada.
- **Nenhuma contradição** com fontes anteriores — concretiza e aprofunda os conceitos introduzidos nas Aulas IA-09 a IA-13 (context rot, Rule vs. Skill, formatos de Skill, tipos de Skill, Spec Driven Development).
- **O que permanece não resolvido**:
  - Conteúdo de "Harness" — Aula 06 estava vazia; conceito mencionado mas não documentado.
  - Instabilidade de recarregamento de Skills no Claude Code (instrutor precisou fechar/abrir app ou executar `/reload skills`).
  - Como compartilhar Skills entre projetos via git submodules — mencionado mas não demonstrado.
  - Conflitos de escrita quando múltiplos subagentes paralelos modificam os mesmos arquivos.
  - Limite prático de especificações encadeadas ou subagentes paralelos.

## [2026-07-18] ingest | Dev AI — Módulo Ferramentas Agênticas: Harness Partes 1 e 2 (Aulas 06–07)

- **Material**: 2 transcrições das aulas de Harness do módulo "Ferramentas Agênticas" (formacao.dev, instrutor Leonardo). Aula 06 (Harness Parte 1) anteriormente vazia, agora com conteúdo completo; Aula 07 (Harness Parte 2, arquivo novo `2026-07-17_transcrição-FerramentasAgenticas-07-HarnessParte2.md`).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-07-17_source-ferramentas-agenticas-harness.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada nova seção **Harness** com definição formal, anatomia (componentes: LLM stateless, contexto, ferramentas, loop, compressão, memória), diagrama textual do loop de execução, compressão automática de contexto, dois modelos mentais (visão estrutural e visão de fluxo), responsabilidades embutidas na ferramenta vs. responsabilidade do desenvolvedor (verificações em Skills e specs); questão "Harness" marcada como resolvida; nova questão aberta sobre MCP; novos source_files e related_pages adicionados ao frontmatter; nota de atualização appended.
  - Atualizado `wiki/index.md`: nova fonte adicionada (contagem: 23 fontes); descrição de `ia-generativa.md` revisada com Harness.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto (Parte 1 — Aula 06)**: definição de harness = camada de software que envolve o LLM (analogia cavalo/arreios); LLM sozinho é stateless (apenas recebe e gera texto); harness = pernas, braços e olhos do LLM; componentes: contexto gerenciado, ferramentas (FS, terminal, APIs, MCP), loop de execução; loop: prompt → LLM decide ação → ferramenta executa → resultado vai pro contexto → LLM decide novamente; exemplos de ferramentas: ler pasta, ler arquivo, alterar arquivo, deletar, chamar MCP; responsabilidades do harness: loop, exposição de ferramentas, gestão de contexto (montagem + compressão), permissões, roteamento, memória/estado; analogia: modelo = motor, harness = resto do carro; ferramentas = sensores (erro no terminal redireciona o caminho); a grande evolução foi o harness, não apenas o modelo.
- **Conteúdo coberto (Parte 2 — Aula 07)**: fluxo detalhado do loop (prompt + histórico + memória + ferramentas + Skills → montagem de contexto → LLM → decisão → ferramenta → resultado → novo contexto → ...); LLM é stateless — contexto é tudo; ordem do contexto importa (itens mais recentes têm mais peso, por isso Skill carregada no final do passo tem mais relevância); compressão de contexto quando janela excede limite (sumarização, analogia de reunião de 8h); `/context` no Claude Code mostra percentual da janela usada; subagentes têm janela de contexto independente; dois modelos mentais (visão estrutural + visão de fluxo em sequência de passos); harness ≠ arquivo ou técnica — a técnica é Skills + Spec-Driven Development; a grande revolução do desenvolvimento de software foi o harness; "preditor de texto → agente que percebe, decide e age".
- **Harness do desenvolvedor**: pedir cobertura de testes ≥ 90% nas Skills; testes de integração em pontos estratégicos das specs; browser interno do Claude Code para validação de UI; subagente separado para criar testes (contexto limpo evita viés de confirmação).
- **Nenhuma contradição** com fontes anteriores — formaliza e nomeia o loop iterativo de agentes já documentado na Aula IA-07.
- **O que permanece não resolvido**:
  - MCP (Model Context Protocol): integração de ferramentas externas ao harness — deixado para o próximo projeto.
  - Estratégias específicas de compressão de contexto (algoritmo/heurística exata do Claude Code).
  - Como os arquivos de memória do harness funcionam na prática.
  - Critérios exatos para decidir entre execução autônoma vs. confirmação do usuário.

## [2026-07-18] ingest | Palestra Microsoft/GitHub — GitHub Copilot: Visão Geral e Aula Prática

- **Material**: 2 transcrições de sessões de treinamento Microsoft/GitHub para a Caixa Econômica Federal (apresentadores: Jean/CSM e Caio Queiroz/CSA). Sessão Teórica (Visão Geral) + Sessão Prática.
  - `raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md`
  - `raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md`
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-05-07_source-palestra-github-copilot.md`
  - Criada nova entidade: `wiki/entities/github-copilot.md`
  - Atualizado `concepts/ia-generativa.md`: nova seção **MCP (Model Context Protocol) e Perspectiva Corporativa** com subseções:
    - MCP: arquitetura host/client/server, dois tipos de servidor (local: Playwright; remoto: GitHub/OAuth), `.vscode/mcp.json`, interação em linguagem natural
    - Modo Agente vs. Coding Agent (comparativo tabular: execução, ambiente, interação, paralelismo, output, segurança)
    - Copilot Instructions como análogo corporativo de Rules + Skills (tabela de equivalências)
    - Copilot Spaces como contexto curado compartilhável via MCP
    - Questão MCP marcada como parcialmente resolvida; 3 novas questões abertas (Spaces vs. Instructions, conflitos Coding Agent, self-hosted runners)
  - Atualizado `wiki/index.md`: nova fonte (contagem: 25), nova entidade (contagem: 3), ia-generativa revisada com MCP e Copilot
  - Atualizado `wiki/log.md`: esta entrada
- **Conteúdo coberto (Sessão Teórica)**:
  - GitHub Copilot = assistente de IA com múltiplos LLMs como motor (OpenAI, Anthropic, Google)
  - Modos: Code Completion (inline), Chat Ask, Chat Plan (só planeja), Chat Agent (loop autônomo), Inline Chat, Copilot CLI
  - Fluxo de request: contexto → proxy (valida PII, ética, vulnerabilidades) → LLM → sugestão
  - Instructions: `.github/copilot-instructions.md` (global, sempre) + `.github/instructions/*.instructions.md` (por padrão de arquivo `applyTo`), complementares
  - Modo Agente: loop plan→act→observe, ferramentas (FS, terminal, browser via Playwright, GitHub MCP), descobre contexto automaticamente
  - Coding Agent: agente autônomo em ambiente efêmero (GitHub Actions); background e paralelo; output = PRs com screenshots; Mission Control para monitoramento; disparo via IDE, GitHub.com ou issues
  - Code Review Agent: revisor automático de PRs; contexto completo do projeto; CodeQL integrado; guiado por Instructions
  - MCP: padrão aberto arquitetura host/client/server; linguagem natural; Playwright (local) vs. GitHub (remoto/OAuth); `.vscode/mcp.json`
  - Copilot Spaces: contexto curado e compartilhável (instruções + repositórios + arquivos + issues); trazido para IDE via MCP
  - Custom Agents: `.github/agents/*.md` usando Coding Agent como motor; agentes especializados em paralelo
  - Licenças: Business (300 premium requests) / Enterprise (1000); modo "auto" + 10% desconto
- **Conteúdo coberto (Sessão Prática)**:
  - Demo: loja virtual → modo Plan → carrinho de compras → perguntas do agente → Start Implementation → modo Agent
  - MCP na prática: iniciar Playwright + GitHub MCP no `.vscode/mcp.json`; listar issues do repositório em linguagem natural
  - GitHub Copilot Modernization: extensão separada para Java e .NET; Start Assessment → cloud readiness → upgrade Java 8→21
  - Plan.md: plano gerado pelo agente antes de executar o upgrade (steps, dependências, desafios)
  - Progress.md: acompanhar o upgrade step a step
  - 4 modalidades: Replatform, Refactor, Upgrade, Cloud Enablement (Azure AKS, App Service, Service Bus)
  - 70–90% de redução de tempo vs. processo manual de modernização
  - Custom agents em `.md` para modernização (Modernize Java, Modernize .NET, Modernize Azure Java, etc.)
- **Diferenças importantes em relação ao formacao.dev**: contexto corporativo (Microsoft/GitHub vs. escola independente); Instructions = Rules + Skills; Custom Agents = Skills; loop Plan→Act→Observe = harness; terminologia diferente, conceitos análogos.
- **Nenhuma contradição** com fontes anteriores — amplifica e contextualiza MCP, harness e agentes em um ambiente corporativo (produto comercial vs. ferramentas open source do curso).
- **O que permanece não resolvido**:
  - Copilot Spaces vs. Instructions: linha divisória entre uso de cada um
  - Coding Agent + conflitos de merge em sessões paralelas
  - Self-hosted runners + restrições de firewall + Coding Agent
  - Como os Spaces se sincronizam quando os repositórios de fonte atualizam

## [2026-07-19] ingest | Augusto Galego — A Própria Anthropic Explica Como Usar o Claude Code (Melhores Práticas)

- **Material**: `2026-07-18_transcrição-IA-ClaudeCode-MelhoresPraticas.md` — transcrição de vídeo do canal de Augusto Galego (YouTube) compilando ~20 melhores práticas do Claude Code extraídas diretamente da documentação oficial da Anthropic (Best Practices, Prompt Library, Common Workflows). Fonte do vídeo: `https://www.youtube.com/watch?v=iMso7WbhUr0`.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-07-18_source-claude-code-melhores-praticas.md`
  - Atualizado `concepts/ia-generativa.md`: adicionada nova subseção **"Melhores Práticas Operacionais do Claude Code"** na seção de Harness, com três grupos de práticas — (1) Prompt (método de verificação no prompt, estado desejado vs. passos, incrementos testáveis, interromper cedo, regras específicas), (2) Contexto e Sessões (`/clear`, menor diretório, `/context`, sessões nomeadas com `/rename`/`claude resume`, checkpoints e `/rewind`), (3) Hierarquia de modelos e Infraestrutura (Opus=planejamento/Sonnet=implementação, `/goal`, `.claude` do projeto versionado, `review.md` dedicado, sandbox para auto mode, ferramentas detectadas automaticamente); nova fonte e related_page adicionadas ao frontmatter; nota de atualização appended.
  - Atualizado `wiki/index.md`: nova fonte adicionada (contagem: 26); descrição de `ia-generativa.md` revisada com melhores práticas operacionais; datas atualizadas.
  - Atualizado `wiki/log.md`: esta entrada.
- **Conteúdo coberto**: todas as práticas derivadas da documentação oficial Anthropic — método de verificação no prompt (ground truth no próprio prompt); descrever resultado, não passos (especialmente para Opus); incrementos testáveis; interromper cedo ao detectar desvio; regras específicas > genéricas; `/clear` para contexto novo; menor diretório possível; `/context` para monitorar janela; sessões nomeadas com `/rename` e retomadas com `claude resume`; retenção de 30 dias em `.claude/projects`; checkpoints e `/rewind` para voltar ponto anterior; hierarquia Opus (planejamento) → Sonnet (implementação); `/goal` para objetivos verificáveis; `.claude` do projeto versionado no Git; `review.md` como arquivo separado de code review; sandbox (VM/container) para operação sem interrupção; ferramentas detectadas automaticamente sem nomear no prompt.
- **Nenhuma contradição** com fontes anteriores — reforça e detalha operacionalmente os conceitos de harness, context rot, HITL/AFK (Matt Pocock e formacao.dev) e responsabilidade do desenvolvedor. A hierarquia Opus/Sonnet confirmada pela Anthropic valida explicitamente o padrão HITL/AFK de Matt Pocock.
- **Convergência com fontes anteriores**:
  - Hierarquia de modelos por tipo de tarefa = HITL/AFK de Matt Pocock (Aula IA-07 + palestra Pocock), agora confirmado pela Anthropic.
  - `/context` = mecanismo de monitoramento de contexto já documentado no módulo Harness (Aulas 06–07).
  - Sandbox para auto mode = responsabilidade do desenvolvedor no harness (identificada no módulo Harness).
  - `.claude` versionado = complementa o conceito de Rules/Skills como configurações de equipe.
- **O que permanece não resolvido**:
  - Como funciona exatamente o `/rewind` — granularidade por mensagem ou por checkpoint interno?
  - O `review.md` tem estrutura recomendada pela Anthropic ou é completamente aberto?
  - Existe integração nativa entre sessões do Claude Code e histórico do Git?

## [2026-09-07] ingest | Conversa DDD + Express + Ports & Adapters (registro retroativo)

> **Nota**: esta entrada é retroativa. A ingestão ocorreu em 2026-09-07 mas o log não foi atualizado na época. Detectado no lint de 2026-11-04.

- **Material**: `2026-09-07_chat-DDD-Express-PortsAndAdapters.md` — conversa longa (~935 KB, ~49.000 linhas) entre João Marcos e um LLM, construindo um backend Express com TypeScript usando DDD + Ports & Adapters de forma incremental.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md`
  - Atualizado `concepts/ddd.md`: Entity como protocolo de ciclo de vida (`tryCreate`/`create`/`restore`/`cloneWith`); distinção `restore()` vs `create()` (Eric Evans); `id` obrigatório como invariante; invariantes universais vs. regras de criação.
  - Atualizado `concepts/arquitetura-limpa.md`: Composition Root / Factory (`makeXxxUseCase()`); Controller desacoplado do Express (`HttpRequest`/`HttpResponse` próprios); Mapper como tradutor puro (`toDomain`/`toPersistence`); separação estado vs. operação de persistência.
  - Atualizado `concepts/objeto-de-valor.md`: UUID v4 → UUID v7 nativo (Node 24.16+); `IdVO.generate()` vs `IdVO.tryCreate()`; critério para manter VO dentro da entidade (com comportamento) vs. extrair `.value` (sem comportamento).
  - Criada nova entidade: `wiki/entities/joao-marcos-melchiors.md` — proprietário da wiki; perfil de aprendizagem e princípios arquiteturais observados.
- **Conteúdo coberto**: estrutura de pastas Express; Route/Middleware/Controller/UseCase; `Entity` abstrata com protocolo de ciclo de vida; `PostgresUserMapper`; `PostgresAccountRepository`; Composition Root; Controller sem Express (`HttpRequest`/`HttpResponse`); adaptador Express na borda; tratamento de erros HTTP; `createdAt`/`updatedAt` obrigatórios.
- **Sem contradições** com fontes anteriores — aprofunda e concretiza conceitos da imersão DDD + Arquitetura Limpa (formacao.dev).
- **O que permanece não resolvido**:
  - Status HTTP global para erros mistos (domínio + aplicação).
  - `HttpErrorStatusResolver` em versão pragmática (tudo 400).
  - Testes de integração do Repository com banco real.
  - OAuth / múltiplos provedores de identidade.
  - Eventos de domínio.
  - Migração `baseUrl` TypeScript 7.

## [2026-11-04] lint | Verificação completa da wiki

- **Escopo**: 37 páginas ativas analisadas (27 fontes, 6 conceitos, 4 entidades, 6 manutenção) + 49 arquivos brutos em `raw/sources/`.
- **O que foi feito**:
  - Criado relatório de lint: `wiki/maintenance/lint-reports/2026-11-04_lint-completo.md`
  - Atualizado `wiki/index.md`: adicionadas `2026-09-07_source-chat-ddd-express-ports-and-adapters.md` e `entities/joao-marcos-melchiors.md`; contagens corrigidas (27 fontes, 4 entidades, 6 manutenção); descrições de conceitos DDD/Arq. Limpa/VO atualizadas para refletir set/2026; entrada do novo lint adicionada.
  - Marcado `wiki/sources/2026-04-20_transcricoes-projetoEAD.md` como `status: superseded` (ação recomendada desde o lint de 2026-04-28, finalmente executada).
  - Atualizado `wiki/log.md`: esta entrada + entrada retroativa de set/2026.
- **Principais descobertas**:
  - **Nenhuma contradição** — fontes posteriores (chat DDD+Express) reforçam os conceitos sem contradizer nada estabelecido.
  - **Nenhuma referência cruzada quebrada** — todos os links internos são válidos.
  - **2 páginas ausentes do `index.md`**: fonte e entidade de set/2026 (corrigido nesta sessão).
  - **`open-questions.md` vazio** — continua acumulando questões nas páginas de conceito sem consolidação.
  - **3 fontes brutas não ingeridas**: IA-14 (vazia — sem transcrição), `2026-08-03_ModelagemDeDominio-48` (prioridade alta), `2026-11-04_Curso_Certificacao_ClaudeCode` (prioridade alta, grande).
  - **1 arquivo obsoleto** corrigido: `transcricoes-projetoEAD.md` → `superseded`.
- **Saúde geral**: 🟡 Atenção — sem problemas críticos; principal gap são as 2 fontes não ingeridas e o `open-questions.md` vazio.
- **Próxima verificação recomendada**: após ingestão dos materiais pendentes, ou em 2027-02-04.

## [2026-11-04] ingest | Modelagem de Domínio — Aula 48: Classe ErroValidacao (registro retroativo)

> **Nota**: esta entrada é retroativa. A ingestão foi feita na mesma sessão do lint de 2026-11-04, mas não foi registrada no log na época. Detectado em 2026-11-05.

- **Material**: `2026-08-03_transcrição-ModelagemDeDominio-48-ErrorDeValidacao.md` — aula introdutória da série Modelagem de Domínio (formacao.dev) sobre a classe `ErroValidacao`.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-08-03_source-modelagem-dominio-48-erro-validacao.md`
  - Atualizado `concepts/objeto-de-valor.md`: nova seção "ErroValidacao como Base do Pipeline de Validação" (atributos `codigo`/`valor`/`extras`, métodos `criar`/`lancar`, catálogo de constantes, ordem causal erro → validação → VOs → entidades).
  - Atualizado `wiki/index.md`: entrada do novo resumo de fonte e contagem de fontes.
- **Conteúdo coberto**: projeto de domínio puro isolado de infraestrutura; `ErroValidacao` estendendo `Error`; retorno `never` em `lancar`; códigos simbólicos em vez de mensagens livres.
- **Sem contradições** com fontes anteriores — refina a abordagem de códigos de erro da Aula 15.
- **O que permanece não resolvido**:
  - Aula 49 (testes da `ErroValidacao`) não está em `raw/sources/`.
  - Extensões futuras (nome da classe/atributo) não implementadas na aula.
  - Propagação do erro do core até a camada HTTP não detalhada.

## [2026-11-05] ingest | Curso de Certificação Claude Certified Developer Foundations (CCDV-F)

- **Material**: `2026-11-04_Curso_Certificacao_ClaudeCode.md` — transcrição em **inglês** (~489 KB, ~8 h) do curso de Andrew Brown (ExamPro/freeCodeCamp). Conforme instrução do arquivo, o conteúdo foi lido em inglês e registrado na wiki em português do Brasil.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md`
  - Criadas entidades: `wiki/entities/claude-code.md` e `wiki/entities/andrew-brown.md`
  - Atualizado `concepts/ia-generativa.md`: nova seção "Arquitetura de Agentes e Certificação Claude (CCDV-F)" (agente × workflow, sub agentes, MCP tools × resources, prompt injection/jailbreak, parâmetros e custo da API, higiene de sessão, autonomia no Claude Code); questão sobre prompt injection parcialmente resolvida.
  - Atualizado `overview.md` (escopo, hipóteses e perspectivas) e `open-questions.md` (3 candidatos de pesquisa).
  - Atualizado `index.md` (nova fonte, 2 entidades, contagens: 29 fontes, 6 entidades).
- **Cobertura**: leitura **parcial e por amostragem** (exame, arquitetura de agentes, sub agentes, higiene de sessão, segurança, MCP, parâmetros de API e laboratórios selecionados). Laboratórios longos (hooks, Managed Agents, AWS, Task tool) não foram esgotados.
- **Sem contradições** com fontes anteriores; ponto de atenção sobre o *auto mode* (segurança não verificada) versus recomendação de sandbox da fonte de melhores práticas.
- **O que permanece não resolvido**:
  - Segurança real e escopo do *auto mode*.
  - Verificação de comandos/flags na documentação oficial (transcrição automática com ruído).
  - Leitura integral dos blocos finais do curso.
  - Estado de Managed Agents / CLI `ant`.

## [2026-11-05] update | Reescrita didática da ingestão do curso CCDV-F

- **O que foi feito**: a pedido do usuário, o resumo de fonte `wiki/sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md` foi reescrito de forma didática — explicações em prosa (o que é, por que existe, exemplo, erro comum), tabelas, mapa de decisões e perguntas de autoteste com respostas. Exemplos criados por mim estão marcados como *(exemplo didático)*.
- **Páginas atualizadas**: apenas o resumo de fonte (conteúdo factual igual ao da ingestão anterior; leitura da fonte continua parcial).
- **O que permanece não resolvido**: mesmas questões da ingestão anterior (auto mode, conferência de comandos, blocos finais do curso). A seção em `concepts/ia-generativa.md` ainda está em formato de tópicos e pode ser expandida se o usuário quiser.

## [2026-11-06] ingest | Profissional AI — Agentes: Estilos de Skill

- **Material**: `2026-11-06_transcricao_AgentesDeIA_EstilosDeSkill.md` — aula curta de outro curso da formacao.dev (sala `profissional-ai-agentes`, trilha "Automação com Agentes de IA"). Era o único arquivo bruto novo (não rastreado no git) e sem referência na wiki.
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-11-06_source-agentes-ia-estilos-de-skill.md`
  - Atualizado `concepts/ia-generativa.md`: na subseção "Tipos de Skill", tabela de correspondência entre os estilos desta aula e a taxonomia da IA-12 (critério por meio de execução vs. por autonomia) e pré-requisito Python + Node.js; nova questão aberta (Python em Skills); frontmatter, fontes e nota de atualização.
  - Atualizado `entities/formacao-dev.md`: terceiro curso/trilha registrado.
  - Atualizado `overview.md` (perspectiva) e `open-questions.md` (candidato de pesquisa: próximas aulas do curso).
  - Atualizado `index.md` (nova fonte; contagem: 30 fontes).
- **Conteúdo coberto**: três estilos de Skill (só modelo, determinística, mista); exemplos falados (resumir texto, inverter letras); recomendação de instalar Python e Node.js; plano de usar uma Skill pronta antes de criar a própria.
- **Sem contradições** com fontes anteriores — reforça a taxonomia da Aula IA-12. Ressalvas: nome do instrutor não consta no arquivo (atribuição a Leonardo é inferência, não verificada); conteúdo sem demonstração.
- **Outros brutos**: `Sem título.md` e IA-14 (`2026-07-19_transcrição-IA-14-...`) não foram abertos nesta ingestão; o lint de 2026-11-04 já registrava a IA-14 como vazia. Não verificado se continuam assim.
- **O que permanece não resolvido**:
  - Skill pronta usada na aula seguinte e as Skills "com código" e "sem código" prometidas (sem transcrição ainda).
  - Harness usado pelo curso; papel de Python vs. Node.js.
  - Linha divisória determinística × híbrida (continua subjetiva).

## [2026-11-07] ingest | Profissional AI — Agentes: Usando Skills

- **Material**: `2026-11-07_transcricao_AgentesDeIa_UsandoSkill.md` — segunda aula do curso Profissional AI — Agentes (formacao.dev). Nas tentativas anteriores do dia o arquivo estava vazio (0 bytes); agora tem ~12 KB. Transcrição automática ruidosa ("Cloud Code" = Claude Code etc.).
- **O que foi feito**:
  - Criado resumo de fonte: `wiki/sources/2026-11-07_source-agentes-ia-usando-skill.md`
  - Atualizado `concepts/ia-generativa.md`: nova subseção "Usando e Instalando Skills Prontas" (chamada com `/`, Personalizar → Habilidades/Plugins, plugin = conector/MCP + Skills, contorno de recarregamento, variabilidade do resultado); questão "Recarregamento de Skills" com segundo relato; frontmatter, fontes e nota de atualização.
  - Atualizado `entities/claude-code.md` (instalação de Skills pelo app desktop) e `entities/formacao-dev.md` (segunda aula).
  - Atualizado `overview.md` e `open-questions.md` (2 novos itens: identificar a segunda ferramenta; causa do não recarregamento).
  - Atualizado `index.md` (nova fonte; contagem: 31 fontes).
- **Conteúdo coberto**: Skill como habilidade empacotada em comando; instalação de `skill creator` e `Slack gif creator`; Skill com arquivos Python; `Reload Skills` e contornos; plugins Gmail e computer use (conector/MCP + Skills); demos `bola.gif` e `robo.png`; reforço de que a Skill entra no contexto.
- **Sem contradições** com fontes anteriores — confirma plugin como pacote (curso CCDV-F) e repete o sintoma de recarregamento (Ferramentas Agênticas).
- **Pendências**: `2026-07-19_transcrição-IA-14-...` continua só com URL e título (não ingerível); `Sem título.md` foi removido do working tree (não por esta ingestão).
- **O que permanece não resolvido**:
  - Identidade da segunda ferramenta chamada "ChatGPT" (não verificado).
  - Causa do não recarregamento de Skills no `/`.
  - Segurança de Skills/plugins de terceiros com scripts e permissões (não abordada pela fonte).

## [2026-11-11] update | Conceito Deep Learning

- **O que foi feito**: criada a página de conceito `concepts/deep-learning.md`, pedida pelo usuário porque `ia-generativa.md` só tinha `deep-learning` como tag. Busca em `raw/` por termos em português e inglês (deep learning, aprendizado profundo, rede neural, machine learning etc.) não encontrou o termo literal; o conteúdo veio de trechos das aulas IA-01 a IA-03 (camadas, pré-treinamento, pesos, parâmetros, feed-forward).
- **Páginas criadas ou atualizadas**: criada `concepts/deep-learning.md`; atualizados `concepts/ia-generativa.md` (link e `related_pages`), `index.md` (contagem de conceitos: 7) e `open-questions.md` (novo item).
- **Evidência**: definição formal e taxonomia marcadas como conhecimento geral, não verificado nas fontes; ligação com alucinação marcada como interpretação.
- **O que permanece não resolvido**: como o treinamento ajusta os pesos; fonte que defina deep learning explicitamente; aula opcional sobre Q/K/V ainda sem transcrição.

## [2026-11-12] ingest | Fila de novembro: curso Profissional AI — Agentes e conteúdos de Matt Pocock

- **Material**: 6 brutos do curso Profissional AI — Agentes (Criando Skill, Skill com Código, SDD, MCP, Catálogo de MCPs, Skill × MCP + imagem `agentesDeIa_SKILLvsMCP.png`) e 6 de Matt Pocock (4 legendas de shorts, legenda do vídeo "The Home Repo Pattern" e o artigo de aihero.dev, salvos em `raw/` nesta sessão com a imagem `2026-11-12_home-repo-pattern.png`). Todas as legendas são automáticas (em inglês, as de Matt); possíveis erros de nomes.
- **Criados**: resumos `2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo`, `2026-11-07_source-agentes-ia-sdd`, `2026-11-08_source-agentes-ia-mcp`, `2026-11-08_source-agentes-ia-skill-vs-mcp`, `2026-07-16_source-matt-pocock-shorts`, `2026-11-12_source-matt-pocock-home-repo`; conceito `concepts/home-repo.md`.
- **Atualizados**: `concepts/ia-generativa.md` (novas subseções de Skill do zero, SDD, MCP, Skill × MCP, Docs/Home Repo/Retro; dumb zone ~100k → ~150k; questões), `entities/matt-pocock.md`, `entities/formacao-dev.md`, `overview.md`, `open-questions.md`, `index.md` (37 fontes, 8 conceitos).
- **Contradições e tensões registradas (sem sobrescrever)**: (1) Codex recarrega Skills sozinho ou não — as duas aulas do curso discordam; (2) SDD do curso (gerar sistemas a partir de specs) × Matt Pocock ("specs to code" não funciona), com sentidos diferentes de "spec"; (3) dumb zone: 100k (abril) → 150k (julho), tratada como evolução da posição; (4) `SKILL.md` × `skill.md`.
- **Não ingeridos**: `2026-07-19_transcrição-IA-14-...` (continua só com título e URL); artigo acadêmico sobre a skill `retro` (só a legenda do short).
- **O que permanece não resolvido**: aulas práticas de MCP e projetos do curso; segurança de MCPs e Skills de terceiros; como Matt organiza a wiki do home repo; se este repo deve virar home repo.
