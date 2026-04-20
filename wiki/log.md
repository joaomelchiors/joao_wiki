---
title: "Registro"
type: maintenance
status: active
created: 2026-04-07
updated: 2026-04-07
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
