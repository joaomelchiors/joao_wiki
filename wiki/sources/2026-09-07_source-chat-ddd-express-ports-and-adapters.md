---
title: "Conversa DDD + Express + Ports & Adapters"
descricao: 'Conversa prática (~935 KB) construindo backend Express com TypeScript usando DDD + Ports & Adapters — Entity abstrata (`tryCreate`/`create`/`restore`/`cloneWith`), UUID v7, Mapper, Repository, Composition Root e Controller desacoplado do framework.'
type: source
status: active
created: 2026-09-07
updated: 2026-11-12
tags: ["ddd", "express", "ports-and-adapters", "typescript", "clean-architecture", "docker", "postgresql", "aprendizagem"]
source_files:
  - raw/sources/2026-09-07_chat-DDD-Express-PortsAndAdapters.md
related_pages:
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/agregado.md
  - ../entities/joao-marcos-melchiors.md
  - ../entities/formacao-dev.md
tipo_conteudo: conversa-llm
captura: manual
---

# Conversa DDD + Express + Ports & Adapters

**Classificação** (`tipo_conteudo: conversa-llm`, `captura: manual`): conversa entre João Marcos Melchiors e um LLM; registra decisões tomadas naquele projeto e o aprendizado do autor, mas não confirma conceitos sozinha. Texto digitado, sem transcrição.

## Resumo

Registro de uma longa conversa (~49.000 linhas) entre João Marcos Melchiors e um LLM, documentando a jornada prática de construção de um backend Express com TypeScript, evoluindo gradualmente de uma estrutura básica (rotas, middlewares) para uma arquitetura completa com DDD + Ports & Adapters. O material cobre desde configuração de ambiente (Docker, PostgreSQL, dotenv, Jest/SuperTest) até decisões arquiteturais avançadas sobre Entity abstrata, Value Objects, Mapper, Repository, Composition Root e Controller desacoplado do framework. A conversa segue uma abordagem de "baby steps" — cada conceito é construído incrementalmente, com código funcional a cada passo.

## Pontos-Chave

- **Estrutura de pastas Express**: três modelos documentados — MVC básico, DDD por camadas, e modular por funcionalidade (recomendado). Cada módulo contém `application/`, `domain/`, `infrastructure/`, `presentation/`.
- **Route vs Middleware vs Controller**: analogia do restaurante — Route é a porta, Middleware é o segurança, Controller é o garçom, UseCase é o cozinheiro. Middleware não implementa lógica de negócio; executa verificações transversais (auth, validação, logging, CORS, rate limiting).
- **Modelagem da Entity**: evolução do `User.tryCreate()` de modelo híbrido (id=string, email=EmailVO, password=HashPasswordVO) para modelo coerente. Decisão de manter VOs com comportamento (EmailVO com `localPart`, `domain`) dentro da entidade e usar `.value` para VOs sem comportamento (IdVO).
- **`Entity` abstrata como protocolo de ciclo de vida**: `tryCreate()`, `create()`, `restore()`, `cloneWith()`. Construtor protegido obriga criação via métodos estáticos. `cloneWith()` usa `structuredClone` + `deepMerge` e redelega para `tryCreate()`.
- **`restore()` vs `create()`**: justificativa via Eric Evans — criar ≠ reconstituir. `restore()` garante invariantes universais; `create()` pode adicionar regras exclusivas de nascimento (eventos de domínio, status inicial). No estado atual do projeto, ambos delegam para `tryCreate()`, mas a separação semântica já está preparada.
- **`id` obrigatório na Entity**: mudança de `id?: IdVO` para `id: IdVO`. Argumento: "uma entidade só é entidade se tiver identidade". O input do UseCase (`CreateUserInput`) não contém `id`; o UseCase gera via `IdVO.generate()`.
- **UUID v7**: migração de UUID v4 para v7 usando `randomUUIDv7()` nativo do Node 24.16+. Benefícios: localidade temporal para índices B-tree, ordenação cronológica, geração fora do banco, unicidade global.
- **`IdVO.generate()` vs `IdVO.tryCreate()`**: separação semântica — `generate()` cria novo ID (criação), `tryCreate()` valida/reconstitui ID existente (restauração/persistência).
- **`PostgresUserMapper`**: responsabilidade única de tradução entre representações (`AccountRow` ↔ `User`). Não interpreta, não decide, não contém lógica de negócio. `toDomain()` + `toPersistence()`. O Repository escolhe quais campos usar do mapper; o mapper sempre produz o estado completo.
- **Separação estado vs operação de persistência**: a entidade representa o estado completo; o UseCase representa a intenção (cadastrar, alterar senha, desativar). O Mapper não sabe qual operação está sendo executada. O Repository decide se faz INSERT ou UPDATE e quais campos usar.
- **Contrato do Repository**: preferência por `create(user)` + `update(user)` (explícito) em vez de `save(user)` (implícito). Métodos específicos (`updatePassword`, `markAsDeleted`) somente quando houver necessidade técnica concreta.
- **Composition Root / Factory**: `makeCreateUserUseCase()` como única função que conhece implementações concretas. Não é uma Factory de domínio; é uma função de composição que monta o grafo de objetos. Conecta `PostgresAccountRepository` e `BcryptPasswordHasher` ao `CreateUserUseCase`.
- **Controller desacoplado do Express**: não importa `Request`/`Response` do Express. Recebe `HttpRequest<TBody>` e devolve `HttpResponse<T>` — interfaces próprias. Permite testar sem subir servidor.
- **Adaptador Express**: função que conecta o Controller ao framework — recebe `req`/`res`, extrai `body`, chama `controller.handle()`, escreve `res.status().json()`. Mantém Express na borda.
- **Tratamento de erros HTTP**: tensão entre preservar todos os erros do `Result` e determinar o `statusCode` HTTP. Erros de domínio vs erros de aplicação mapeiam para status diferentes (400 vs 409 vs 500). Solução pragmática: `HttpErrorStatusResolver` temporário retornando 400 + lista de erros. Decisão: não criar abstração prematura; evoluir quando houver caso real.
- **`createdAt` e `updatedAt` obrigatórios na Entity**: na criação, valores gerados automaticamente com `new Date()` e armazenados no domínio (não no banco). Na restauração, vêm da persistência.

## Afirmações/Observações Principais

- **"Cada objeto deve proteger apenas suas próprias invariantes"**: EmailVO protege formato; User protege regras que dependem de múltiplos atributos (ex.: "senha não pode conter parte do email").
- **"O domínio diz: me entregue um EmailVO válido. Ele não sabe de onde veio"** — princípio da Arquitetura Hexagonal aplicado concretamente.
- **"O mapper representa o estado da entidade, não a operação de persistência"** — separação fundamental que evita explosão de mappers por caso de uso.
- **"Uma abstração pode começar a atrapalhar o desenvolvimento quando estamos tentando resolver problemas que ainda não existem"** — João identifica abstração prematura no sistema de erros HTTP e opta por pragmatismo.
- **João não gosta de não entender o que está acontecendo** — motivo declarado para preferir Express sobre NestJS. Prefere construir cada peça manualmente para compreender antes de aceitar.
- **Abordagem baby-step**: cada decisão é implementada, compilada e testada antes de avançar para a próxima. A conversa inteira é um fluxo contínuo de micro-decisões com código funcional.

## Notas de Evidência

- Blocos 9–11 (~linhas 8500–29000): modelagem DDD detalhada com código TypeScript real — `Entity`, `User`, `IdVO`, `EmailVO`, `HashPasswordVO`, `Result.combine()`.
- Bloco 10 (~linhas 13000–21000): implementação concreta do Mapper e Repository para PostgreSQL com SQL real.
- Bloco 12 (~linhas 29000–37000): Composition Root, Controller e adaptador Express com código completo.
- Bloco 13 (~linhas 37000–49481): discussão sobre erros de domínio vs aplicação e a decisão de não sobre-engenheirar.
- João revela suas preferências de design em diversas passagens — ver [joao-marcos-melchiors.md](../entities/joao-marcos-melchiors.md).

## Impacto na Wiki Existente

- **`concepts/ddd.md`**: adicionar `restore()` como operação de reconstituição; Entity como protocolo de ciclo de vida; `id` obrigatório; invariantes universais vs regras de criação.
- **`concepts/arquitetura-limpa.md`**: adicionar Composition Root / Factory; Controller desacoplado; adaptador Express; Mapper como tradutor puro; separação estado vs operação.
- **`concepts/objeto-de-valor.md`**: UUID v7; `IdVO.generate()` vs `tryCreate()`; critério para manter VO dentro da entidade (com comportamento) vs extrair `.value` (sem comportamento).
- **`concepts/agregado.md`**: contrato do repository (`create`/`update` explícito); modelo rico com `changePassword()`, `deactivate()`.
- **Nova entidade**: `entities/joao-marcos-melchiors.md` — proprietário da wiki, perfil observado na conversa.
- **Nenhuma contradição** com fontes anteriores — reforça e aprofunda conceitos da imersão DDD + Arquitetura Limpa (formacao.dev).

## Questões Não Resolvidas

- **Status HTTP global para erros mistos**: quando um `Result.fail` contém erros de domínio (400) e de aplicação (409), qual `statusCode` usar? Decisão adiada para quando houver caso real.
- **`HttpErrorStatusResolver`**: ficou numa versão pragmática (tudo 400 + lista de erros). Taxonomia de erros (domínio, aplicação, infraestrutura) não implementada.
- **Internacionalização de mensagens de erro**: mencionada mas não abordada.
- **Testes de integração do Repository com banco real**: não cobertos na conversa.
- **OAuth / múltiplos provedores de identidade**: mencionado (`account_providers`), schema SQL criado, mas implementação não desenvolvida.
- **Eventos de domínio**: mencionados como uso futuro de `create()` vs `restore()`, mas não implementados.
- **Migração de `baseUrl` para TypeScript 7**: discutida no início da conversa, mas ficou com `ignoreDeprecations: "6.0"` como solução temporária.

## Páginas Relacionadas

- [ddd.md](../concepts/ddd.md): Entity, Agregado, Repositório, Caso de Uso
- [arquitetura-limpa.md](../concepts/arquitetura-limpa.md): Ports & Adapters, Controller, Inversão de Dependência
- [objeto-de-valor.md](../concepts/objeto-de-valor.md): IdVO, EmailVO, HashPasswordVO, Result
- [agregado.md](../concepts/agregado.md): Repositório por agregado, modelo rico
- [joao-marcos-melchiors.md](../entities/joao-marcos-melchiors.md): Proprietário da wiki, autor da conversa
- [formacao-dev.md](../entities/formacao-dev.md): Plataforma de ensino (base conceitual referenciada)
