---
title: "Visão Geral do Tema de Pesquisa"
type: maintenance
status: active
created: 2026-04-07
updated: 2026-04-28
tags: ["overview"]
source_files: []
related_pages:
  - ./index.md
  - ./open-questions.md
---

# Visão Geral do Tema de Pesquisa

Esta página define o que esta wiki investiga. Preenchê-la primeiro ajuda o LLM a decidir como organizar resumos de fonte.

## Tema

Segundo Cérebro — sistema pessoal de gestão de conhecimento.

## Propósito

Organizar, catalogar e estruturar o conhecimento adquirido, servindo como base de consulta para tomada de decisão.

## Escopo

- Conhecimento adquirido em contexto acadêmico e de aprendizado estruturado
- **DDD + Arquitetura Limpa** em TypeScript (formacao.dev — trilha Arquiteto Dev)
- **IA Generativa e desenvolvimento orientado a IA** (formacao.dev — trilha Dev AI)

## Fora do Escopo

- A definir

## Hipóteses Atuais

- DDD + Arquitetura Limpa são complementares: DDD fornece o modelo de domínio rico; Arquitetura Limpa define como organizar as camadas sem vazamento de dependências.
- Objetos de Valor são a unidade mais eficaz de encapsulamento de regras de negócio em TypeScript.
- Monorepos com módulos físicos separados tornam explícitas as fronteiras entre contextos delimitados.
- Entender o funcionamento interno de modelos Transformer (tokenização, embeddings, attention) melhora a capacidade de usar LLMs eficazmente no desenvolvimento.
- **Convergência DDD + IA**: modularização (Bounded Context) é o pilar #1 tanto para DDD quanto para AI-Driven Development — contextos menores = IA mais eficaz.
- AI-Driven Development exige arquitetura sólida (modularização > arquitetura limpa > CQRS); não é para CRUDs simples.
- **Arquitetura de módulos profundos** (John Ousterhout) maximiza eficácia de agentes de IA: interface simples + muita funcionalidade interna = fácil de testar e entender.
- **Base de código ruim = agentes de IA ruins**: fundamentos clássicos de engenharia de software (TDD, módulos, feedback loops) continuam cruciais na era da IA.
- **Qualidade dos ciclos de feedback = teto da qualidade da IA**: sem ciclos de feedback (testes, tipos, linters), IA programa "às cegas".

## Perspectivas a Explorar

- Como o padrão Result/Either se integra à validação de VOs e casos de uso.
- Como mapear VOs para a camada de persistência (Prisma) sem vazar abstrações.
- Implementação completa de um fluxo full-stack: registro + login com banco de dados.
- Como o mecanismo de Attention (Self-Attention, Multi-Head Attention) permite aos Transformers capturar contexto.
- Skills, Stack Driven Development e Rules como padrões de desenvolvimento com IA.
- AI-Driven Development: prioridade de cuidado (model + use case > controller/repo > frontend) e expectativas realistas sobre código gerado por IA.
- CQRS como padrão complementar para simplificar arquitetura (separar comandos de consultas).
- **Grill Me, PRD, Tracer Bullets e TDD** como práticas essenciais para AI-Driven Development.
- **HITL vs. AFK**: separação clara entre tarefas que exigem humanos (planejamento, QA, review) e tarefas automatizáveis (implementação, testes).
- **Smart zone vs. dumb zone**: LLMs ficam progressivamente "burros" após ~100k tokens — dimensionar tarefas e limpar contexto em vez de acumular.
- **Fatias verticais** (tracer bullets) vs. horizontais: implementar end-to-end (schema + API + UI + testes) para feedback instantâneo.
- **Livros clássicos de engenharia** (_O Programador Pragmático_, _A Filosofia do Design de Software_) continuam relevantes para instruir LLMs.

## Tipos de Material Preferidos

- Transcrições de áudio de aulas
- Textos de aulas
- Materiais de faculdade

## Entregáveis Almejados

- Resumos
- Apresentações
- Mapas de debates
- Notas de estudo
- Handbook

## Páginas Relacionadas

- [index.md](./index.md): Índice completo da wiki
- [open-questions.md](./open-questions.md): Lista de questões não resolvidas
