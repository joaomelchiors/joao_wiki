---
title: "Imersão DDD + Arquitetura Limpa — Aula 16: Arquitetura Hexagonal"
type: source
status: active
created: 2026-04-23
updated: 2026-11-12
tags: ["arquitetura-hexagonal", "ports-and-adapters", "repositório", "caso-de-uso", "cqs", "typescript"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-16-arquitetura-hexagonal.md
related_pages:
  - ../concepts/arquitetura-limpa.md
  - ../concepts/ddd.md
  - ../concepts/agregado.md
  - ../entities/formacao-dev.md
  - ./2026-04-20_source-imersao-ddd-arq-limpa.md
tipo_conteudo: demonstrado
captura: automatica
---

# Imersão DDD + Arquitetura Limpa — Aula 16: Arquitetura Hexagonal

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): aula com implementação ao vivo de portas e adaptadores no projeto.

## Resumo

Aula onde o instrutor Leonardo implementa concretamente o padrão Portas e Adaptadores (Arquitetura Hexagonal) no projeto EAD. Partindo do modelo de Usuário já pronto, cria o caso de uso `RegistrarUsuário`, define a interface `UsuárioRepository` como **porta** na borda do módulo core, e explica como implementações concretas (Prisma, memória) funcionam como **adaptadores**. Também aborda a separação entre repositórios (comandos) e queries (consultas) e a convenção de um repositório por agregado.

## Pontos-Chave

- **Portas e Adaptadores na prática**: a interface do repositório é a **porta** (vive dentro do módulo core); implementações concretas (PrismaRepository, MemóriaRepository) são os **adaptadores** (vivem fora do core).
- **O hexágono não tem significado especial**: é apenas um nome dado pelo criador do padrão — o conceito importante é que o núcleo não depende de nada externo.
- **Regra: 1 repositório por agregado**: não se cria repositório por entidade, mas por raiz do agregado. Ex.: Curso com Capítulos e Aulas = 1 único CursoRepository.
- **Separação Repositório vs. Queries (CQS prático)**: repositórios tratam comandos (persistência/mutação); consultas complexas vão em interfaces separadas (`usuario.queries.ts`) que retornam DTOs/views, não entidades ricas.
- **1 caso de uso = 1 arquivo**: cada UC é uma classe em arquivo separado (ex.: `registrar-usuario.usecase.ts`), em vez de um service monolítico com dezenas de métodos. Traz visibilidade explícita de todas as funcionalidades do sistema.
- **Pasta `provider/`**: convenção para agrupar interfaces (portas) que o módulo core precisa receber de fora.
- **Nomenclatura bilíngue**: termos de framework/tecnologia em inglês (`UseCase`, `Repository`, `Result`); termos de negócio em português (`RegistrarUsuário`, `usuário`). Pode ser padronizado para um único idioma.

## Afirmações/Observações Principais

- **"A seta de dependência sempre é de fora para dentro"**: reforça a regra da Arquitetura Limpa — o core nunca importa nada de infraestrutura.
- **"Repositório é um padrão de projeto do DDD"**: existe um capítulo dedicado no livro de referência (Implementing DDD / Livro Vermelho).
- **"Nem tudo que trabalha com banco de dados precisa passar pelo repositório"**: consultas complexas podem usar SQL cru e retornar DTOs simples, sem passar pelo modelo rico.
- **Exemplo real mostrado**: o instrutor mostra seu próprio projeto EAD em produção, onde `files/` tem casos de uso como `CreateFile`, `DeleteBatchFiles`, `MoveFiles` — cada um em seu arquivo separado.
- **Input type do caso de uso**: cada UC define um tipo `Input` específico (ex.: `{ nome, email, senha }`) que representa o contrato de entrada.

## Notas de Evidência

- O diagrama de Portas e Adaptadores foi desenhado ao vivo (Excalidraw/Scala) mostrando: módulo core → interface (porta na borda) → implementações externas (adaptadores).
- O projeto real do instrutor foi mostrado como referência de organização por caso de uso.
- Referência explícita ao capítulo 4 do "Livro Vermelho" (Implementing DDD) sobre repositórios e CQS.

## Impacto na Wiki Existente

- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: a seção sobre Portas e Adaptadores estava apenas "mencionada" — agora tem implementação concreta. Resolve parcialmente a questão aberta sobre implementação de Ports & Adapters para o módulo auth. Adicionar a pasta `provider/` como convenção de organização.
- **[agregado.md](../concepts/agregado.md)**: adicionar a regra "1 repositório por agregado" e a separação repositório/queries.
- **[ddd.md](../concepts/ddd.md)**: adicionar Repositório como ferramenta tática e reforçar CQRS prático.

## Questões Não Resolvidas

- Implementação concreta do adaptador Prisma para `UsuárioRepository` não foi feita nesta aula — ficou para a próxima.
- A interface `usuario.queries.ts` foi mencionada mas não implementada — ficou como conceito.
- Como lidar com transações que envolvem múltiplos agregados no mesmo bounded context?

## Páginas Relacionadas

- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — Ports & Adapters é a implementação prática da inversão de dependência
- [Agregado](../concepts/agregado.md) — regra de 1 repositório por agregado
- [DDD](../concepts/ddd.md) — Repositório como padrão tático
- [Imersão DDD — Série de Transcrições](./2026-04-20_source-imersao-ddd-arq-limpa.md) — fonte base
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
