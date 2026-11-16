---
title: "João Marcos Melchiors"
descricao: 'Proprietário da wiki; desenvolvedor TypeScript com stack Express/PostgreSQL/Docker; princípios arquiteturais e perfil de aprendizagem observados na conversa DDD+Express.'
type: entity
status: active
created: 2026-09-07
updated: 2026-09-07
tags: ["pessoa", "proprietário", "desenvolvedor", "arquitetura"]
source_files:
  - raw/sources/2026-09-07_chat-DDD-Express-PortsAndAdapters.md
related_pages:
  - ../sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/agregado.md
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
---

# João Marcos Melchiors

## Visão Geral

Proprietário e criador desta wiki ("Segundo Cérebro"). Desenvolvedor de software com foco em TypeScript, estudando DDD + Arquitetura Limpa e IA Generativa / AI-Driven Development através da plataforma formacao.dev e de fontes externas. A wiki é o sistema pessoal de gestão de conhecimento que ele mantém com auxílio de LLMs.

## Fatos-Chave

- **Stack principal**: TypeScript, Express, PostgreSQL, Docker
- **Projeto de estudo principal**: "Obsolescência" — monorepo com pacotes `shared`, `auth` e backend Express
- **Ambiente**: Windows, VS Code, PowerShell
- **Cursos ativos**: formacao.dev — trilhas "Arquiteto Dev: DDD + Arquitetura Limpa" e "Dev AI: Desenvolvimento com IA"

## Perfil de Aprendizagem (observado)

- **"Não gosta de não entender o que está acontecendo"** — declaração explícita na conversa, justificando a preferência por Express sobre NestJS. As abstrações do Nest o confundiam; Express dá a sensação de estar "com a mão no controle".
- **Abordagem baby-step**: cada conceito é construído incrementalmente. Não aceita uma peça nova sem entender por que a anterior existe.
- **Aprendizagem por diálogo**: usa conversas com LLMs como ferramenta de estudo — formula perguntas, implementa, testa, questiona novamente. A conversa DDD + Express tem ~49.000 linhas construídas nesse ciclo.
- **Prioriza compreensão sobre produtividade**: prefere construir cada camada manualmente (Entity, VO, Result, Repository, Mapper, Factory, Controller) em vez de usar frameworks que entregam estrutura pronta.
- **Identifica abstrações prematuras**: na conversa sobre tratamento de erros HTTP, percebeu que a complexidade do `HttpErrorStatusResolver` estava travando o desenvolvimento e optou por simplificar.

## Visão de Arquitetura de Software

As seguintes preferências e convicções emergiram da conversa:

### Princípios observados

| Princípio | Evidência |
|-----------|-----------|
| **Clareza sobre magia** | Escolha do Express sobre NestJS; construção manual de cada camada |
| **Baby steps** | Cada decisão é implementada, compilada e testada antes de avançar |
| **Entidade é entidade se tem identidade** | Mudança de `id?: IdVO` para `id: IdVO` após questionamento próprio |
| **VOs com comportamento ficam na entidade** | Manteve EmailVO (com `localPart`, `domain`) mas extraiu `.value` de IdVO |
| **Mapper traduz, não decide** | Corrigiu a sugestão do LLM quando o mapper começou a interpretar lógica de negócio |
| **Contrato explícito sobre implícito** | Preferência por `create`/`update` em vez de `save` genérico |
| **Pragmatismo sobre perfeição** | Parou a discussão de erros HTTP quando percebeu abstração prematura |
| **Domínio ignora infraestrutura** | Controller não importa Express; UseCase não sabe de PostgreSQL |

### Padrões adotados no projeto

- **Result pattern** com `ok`, `fail`, `combine`, `try`, `trySync`
- **Entity abstrata** com `tryCreate()`, `create()`, `restore()`, `cloneWith()`
- **Validator** com Specifications (Strategy pattern para validações)
- **Pipeline** para normalização de dados
- **Ports & Adapters**: interfaces no core, implementações no backend
- **Composition Root**: factories como `makeCreateUserUseCase()` que montam grafos de objetos
- **Controller desacoplado**: `HttpRequest`/`HttpResponse` próprios; adaptador Express na borda

### Posições explícitas

- **"Se o banco possui um objeto que hoje é inválido segundo o domínio, isso é um erro"** — alinhamento com Vaughn Vernon para uso de `create()` também na reconstituição, mas aceitou `restore()` como separação semântica futura.
- **"O mapper representa o estado da entidade, não a operação de persistência"** — corrigiu o LLM quando mapper recebeu lógica condicional.
- **"Uma abstração pode começar a atrapalhar o desenvolvimento quando estamos tentando resolver problemas que ainda não existem"** — identificação própria de over-engineering no HttpErrorStatusResolver.

## Cronograma

- 2026-04-07: Inicialização do wiki-kit (Segundo Cérebro)
- 2026-04-19: Definição do tema e propósito da wiki
- 2026-04-20 – 2026-07-19: Ingestão de ~26 fontes (formacao.dev + externas)
- 2026-09-07: Conversa DDD + Express + Ports & Adapters (~935 KB de diálogo prático)

## Conceitos Relacionados

- [DDD](../concepts/ddd.md): Entity, Agregado, Repositório, Caso de Uso
- [Arquitetura Limpa](../concepts/arquitetura-limpa.md): Ports & Adapters, Controller, Inversão de Dependência
- [Objeto de Valor](../concepts/objeto-de-valor.md): IdVO, EmailVO, HashPasswordVO
- [Agregado](../concepts/agregado.md): Repositório por agregado, modelo rico
- [IA Generativa](../concepts/ia-generativa.md): Aprendizagem com LLMs (hub); temas derivados: [Rules e Skills](../concepts/rules-e-skills.md), [AI-Driven Development](../concepts/ai-driven-development.md)

## Fontes Relacionadas

- [Conversa DDD + Express + Ports & Adapters](../sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md)

## Pontos de Rastreamento

- Evolução do projeto "Obsolescência" — próximos módulos, integração OAuth, eventos de domínio
- Decisões futuras sobre tratamento de erros HTTP (taxonomia domínio/aplicação/infraestrutura)
- Migração para TypeScript 7 (remoção de `baseUrl`)
- Adoção de UUID v7 no projeto (Node 24.16+)
- Posição sobre testes: Jest + SuperTest para integração; preferência por testes com banco real (não mocks)
