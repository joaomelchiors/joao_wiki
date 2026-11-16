---
title: "Imersão DDD + Arq. Limpa — Aula 20: Repositório de Usuário (Adaptador Prisma + Controller NestJS)"
descricao: 'Resumo da Aula 20 — adaptador `UsuarioPrisma` (implementação concreta do repositório via Prisma); controller NestJS `AutenticacaoController`; `DatabaseModule` com `PrismaService`.'
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ddd", "adaptador", "prisma", "nestjs", "controller", "repositório", "typescript"]
source_files:
  - raw/sources/2026-04-21_transcrição-projetoEAD-20-repositorio_usuario.md
related_pages:
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/agregado.md
  - ../entities/formacao-dev.md
tipo_conteudo: demonstrado
captura: automatica
---

# Imersão DDD + Arq. Limpa — Aula 20: Repositório de Usuário (Adaptador Prisma + Controller NestJS)

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): implementação ao vivo do adaptador de repositório com Prisma.

## Resumo

Aula que implementa a camada de infraestrutura completa para o módulo de autenticação: o adaptador `UsuarioPrisma` (implementação concreta do `UsuarioRepositorio` via Prisma), o `AutenticacaoController` (rota REST no NestJS) e o `DatabaseModule` (serviço Prisma encapsulado). Fecha o ciclo Ports & Adapters de ponta a ponta — do controller à persistência.

## Pontos-Chave

- **Adaptador `UsuarioPrisma`**: classe que implementa a interface `UsuarioRepositorio` (porta definida no core). Usa composição com `PrismaService` (injetado via construtor do NestJS). Implementa os métodos `criar(usuario)` e `buscarPorEmail(email)`.
- **`PrismaService`**: classe do módulo `DatabaseModule` que estende `PrismaClient` do Prisma. Registrada como `@Injectable()` no NestJS. O `DatabaseModule` exporta `PrismaService` para que outros módulos possam consumi-lo.
- **`AutenticacaoController`**: controller NestJS com rota `POST /auth/registrar`. Serve como camada de adaptadores — traduz requisição HTTP para chamada ao caso de uso `RegistrarUsuario`.
- **Sistema de módulos NestJS**: cada módulo declara explicitamente o que importa e exporta. `DatabaseModule` exporta `PrismaService`; `AutenticacaoModule` importa `DatabaseModule` e declara `AutenticacaoController` + `UsuarioPrisma` como providers.
- **Barrel exports no módulo core**: para que o backend consiga importar as interfaces do core (`UsuarioRepositorio`, `CriptografiaProvider`, `RegistrarUsuario`), elas devem ser re-exportadas via `index.ts` do pacote `auth`.
- **Prisma em monorepo — gotcha**: após rodar `npx prisma migrate dev`, é necessário rodar `npx prisma generate` para gerar o `PrismaClient`. Em monorepo, o caminho de importação pode ser diferente (`@prisma/client` vs. caminho relativo ao `generator`).
- **Controller como adaptador REST**: o controller faz a tradução de protocolo (HTTP → UC) e não contém lógica de negócio. É a fronteira mais externa da aplicação — equivalente à camada "Infraestrutura/Web" na Clean Architecture.

## Afirmações/Observações Principais

- **"O módulo core não tem absolutamente nada de back-end"**: reforço de que o pacote `auth` é puro domínio + casos de uso — pode ser usado diretamente pelo front-end sem problemas.
- **"O controller faz parte da camada de adapters"**: o instrutor posiciona explicitamente o controller NestJS na camada de adaptadores.
- **Composição vs. herança para `UsuarioPrisma`**: o adaptador usa composição (injeta `PrismaService`) em vez de herança — alinhado com as boas práticas.
- **Módulos NestJS ↔ Bounded Contexts**: o sistema de módulos do NestJS (imports/exports explícitos) oferece um paralelo natural com Bounded Contexts — cada módulo controla o que é visível externamente.

## Notas de Evidência

- Adaptador `UsuarioPrisma` criado via `nest generate service` em `apps/backend/src/autenticacao/`.
- Controller criado via `nest generate controller` com rota `@Post('registrar')`.
- Teste manual via REST Client (extensão VS Code): `POST http://localhost:4000/auth/registrar` retornando "user registrado com sucesso".
- Schema Prisma com tabela `usuarios` (id, nome, email, senha, createdAt, updatedAt) já existente desde a Aula 01.

## Impacto na Wiki Existente

- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: resolve a questão pendente do `PrismaUserRepository` — implementação concreta documentada. Resolve parcialmente a questão de controllers NestJS. Adiciona seção sobre camada de adaptadores concreta (controller + adaptador de repositório).
- **[ddd.md](../concepts/ddd.md)**: reforça o papel do repositório como padrão tático; agora com implementação concreta documentada.
- **[agregado.md](../concepts/agregado.md)**: complementa a seção de repositório por agregado com o exemplo real do adaptador Prisma.

## Questões Não Resolvidas

- Implementação concreta do `CriptografiaProvider` (bcrypt) no backend — mencionada mas não implementada nesta aula.
- Presenters/DTOs para resposta HTTP — controller retorna string simples, sem estrutura de resposta.
- Testes de integração do adaptador `UsuarioPrisma` com banco real — não cobertos.
- Mapeamento Entidade ↔ modelo Prisma (conversão de VOs para tipos primitivos na persistência e vice-versa) — detalhes não mostrados.

## Páginas Relacionadas

- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — Ports & Adapters, camada de adaptadores
- [DDD](../concepts/ddd.md) — repositório como ferramenta tática
- [Agregado](../concepts/agregado.md) — repositório por agregado
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
