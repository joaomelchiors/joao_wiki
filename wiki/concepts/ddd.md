---
title: "Domain-Driven Design (DDD)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-27
tags: ["ddd", "domínio", "modelagem", "padrões"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-4-modelagem.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-5-agregado.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-8-dominio.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-9-contexto.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-15-tratamento-de-erros.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-16-arquitetura-hexagonal.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-20-repositorio_usuario.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md
  - ./objeto-de-valor.md
  - ./agregado.md
  - ./contexto-delimitado.md
  - ./arquitetura-limpa.md
---

# Domain-Driven Design (DDD)

## Definição

Domain-Driven Design é um conjunto de práticas e padrões de software cujo foco é alinhar o código ao domínio de negócio da aplicação. Na interpretação do instrutor da imersão, "é um resgate à programação orientada a objetos feita do jeito certo". O DDD abrange tanto ferramentas **estratégicas** (como organizar os módulos do sistema) quanto ferramentas **táticas** (como implementar o modelo de domínio no código).

## Compreensão Atual

### Ferramentas Estratégicas

| Ferramenta | Descrição resumida |
|---|---|
| **Contexto Delimitado** | Módulo com fronteiras claras que representa um subdomínio do negócio. |
| **Linguagem Ubíqua** | Terminologia universal compartilhada entre código, documentação e especialistas do negócio dentro de um contexto. |
| **Mapa de Contexto** | Diagrama (pode ser informal) que mostra quais contextos existem e como se relacionam — sem dependências cíclicas. |

### Ferramentas Táticas (Padrões do Modelo de Domínio)

| Padrão | Prioridade | Papel |
|---|---|---|
| **Objeto de Valor (VO)** | 1.º lugar | Encapsula regras de negócio, garante validade na criação, oferece comportamentos ricos. |
| **Entidade** | 2.º lugar | Objeto com identidade única (ID); contém regras de negócio quando VOs não são suficientes. |
| **Serviço de Domínio** | 3.º lugar | Regras que não cabem em VO nem Entidade; normalmente sem acesso direto ao banco (mas pode receber interface de repositório via Caso de Uso). |
| **Agregado** | Estrutural | Coleção de entidades e VOs persistidos atomicamente; define ciclo de vida conjunto. |
| **Caso de Uso / Application Service** | Aplicação | **Coordenador do fluxo**: integra chamadas de regras de negócio com chamadas de infraestrutura. Não implementa regra de domínio diretamente. |
| **Repositório** | Infraestrutura (via interface) | Persistência do agregado; 1 repositório por raiz do agregado. A interface (porta) vive no core; a implementação (adaptador) vive fora. |
| **Provedor (Provider)** | Infraestrutura (via interface) | Serviço externo acessado via porta. Ex.: `CriptografiaProvider` (hash + comparação de senhas). Interface no core, implementação (ex.: bcrypt) fora. |
| **Result** | Auxiliar (shared) | Encapsula resultado de operação; permite agregar múltiplos erros de VOs sem lançar exceção imediata. Usado por `combine` para validar entidades inteiras. |

### Distinção: Caso de Uso × Serviço de Domínio × Serviço de Aplicação

| Elemento | O que faz | Implementa regra de negócio? | Acessa infra diretamente? |
|---|---|---|---|
| **Caso de Uso** | Orquestra o fluxo (buscar → validar → persistir → responder) | Não | Via interface (inversão de dependência) |
| **Serviço de Aplicação** | Sinônimo de Caso de Uso na literatura | Não | Via interface |
| **Serviço de Domínio** | Implementa regra que não cabe em VO ou Entidade (ex.: verificar unicidade de nome) | Sim | Normalmente não; pode receber interface de repositório injetada pelo Caso de Uso |

**Quem chama o Serviço de Domínio?** O Caso de Uso — ele é o único coordenador com acesso às interfaces de infraestrutura, e repassa essas interfaces ao Serviço de Domínio quando necessário.

**Exemplo de uso do Serviço de Domínio**: regra de nome único no banco de dados. Não cabe em VO (exige acesso ao banco) nem na Entidade (um único objeto). O Caso de Uso chama um `ValidateUniqueNameService`, injetando a interface do repositório.

### Domínio, Subdomínios e Categorias

- **Domínio**: tudo que a empresa faz (único para cada organização).
- **Subdomínio core**: o core business — recebe maior esforço de desenvolvimento.
- **Subdomínio de suporte**: específico o suficiente para ser desenvolvido internamente, mas não é o centro do negócio.
- **Subdomínio genérico**: resolvido com software de prateleira (ex.: RH, jurídico) — sem desenvolvimento customizado.

### Modelo Anêmico vs. Modelo Rico

- **Anêmico**: objeto com apenas atributos e getters/setters; regras ficam espalhadas em serviços externos. Tem espaço em aplicações simples.
- **Rico**: objeto com atributos e comportamentos encapsulados juntos; preserva o encapsulamento e facilita manutenção. Recomendado quando o domínio é complexo.

## Debates

- **DDD em projetos simples**: o instrutor argumenta que é possível aplicar DDD parcialmente mesmo em projetos menores, sem o full DDD estratégico.
- **Modelos ricos vs. frameworks de ORM**: frameworks como JPA/Hibernate impõem restrições (anotações, getters obrigatórios) que dificultam modelos ricos — trade-off reconhecido.
- **Comandos vs. Consultas (CQRS)**: modelos ricos fazem sentido para comandos (escrita); para consultas complexas, SQL direto mapeado para DTOs simples pode ser mais prático.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)
- [Aula 15 — Tratamento de Erros](../sources/2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md)
- [Aula 16 — Arquitetura Hexagonal](../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md)
- [Aula 18 — Caso de Uso 01](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md)
- [Aula 19 — Caso de Uso 02](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md)
- [Aula 20 — Repositório de Usuário](../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md)

## Entidades Relacionadas

- [formacao.dev](../entities/formacao-dev.md): plataforma onde o curso foi ministrado

## Questões Não Resolvidas

- Quais são os limites reais de escalabilidade de modelos ricos com ORMs modernos (Prisma, TypeORM)?
- Como mapear corretamente Linguagem Ubíqua quando o cliente e a equipe de desenvolvimento falam idiomas diferentes?
- Como estruturar o `Validator` fluente (Fluent API) de forma genérica e reutilizável entre VOs?

## Notas de Atualização

- 2026-04-20: criada a partir da ingestão da série de transcrições da imersão DDD + Arquitetura Limpa.
- 2026-04-20: atualizada com distinção precisa UseCase × Serviço de Domínio × Serviço de Aplicação, e esclarecimento de quem chama o Serviço de Domínio — a partir da sessão Q&A 01.
- 2026-04-23: adicionado padrão `Result` como ferramenta tática auxiliar (shared) — a partir da Aula 15 (Tratamento de Erros).
- 2026-04-23: adicionado `Repositório` como ferramenta tática (1 por agregado, interface no core, implementação fora) — a partir da Aula 16 (Arquitetura Hexagonal).
- 2026-04-27: adicionado `Provedor (Provider)` como ferramenta tática (ex.: `CriptografiaProvider` para hash de senhas) — a partir da Aula 18 (Caso de Uso 01).
- 2026-04-27: adicionada formulação "UC como maior cliente do domínio" com os 3 pontos de acesso ao domínio (VO, Entidade, Serviço de Domínio) — a partir da Aula 19 (Caso de Uso 02).
- 2026-04-27: adicionada referência à implementação concreta do adaptador `UsuarioPrisma` e controller NestJS — a partir da Aula 20 (Repositório de Usuário).
