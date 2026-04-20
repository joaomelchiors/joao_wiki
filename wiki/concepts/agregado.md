---
title: "Agregado (Aggregate)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-20
tags: ["agregado", "aggregate", "ddd", "raiz-do-agregado", "ciclo-de-vida"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-5-agregado.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ./ddd.md
  - ./objeto-de-valor.md
  - ./contexto-delimitado.md
---

# Agregado (Aggregate)

## Definição

Um Agregado é uma coleção de entidades e objetos de valor que são persistidos de forma atômica (em uma única transação). Possui uma **raiz do agregado** — a entidade principal que representa o ponto de entrada para operações no agregado.

## Compreensão Atual

### Critério de Identificação

O critério fundamental para definir um agregado é o **ciclo de vida**: se um conjunto de objetos só faz sentido existir e ser persistido junto, formam um agregado. Isso depende do negócio, não apenas do modelo de dados.

**Exemplo EAD**:
- Se cursos, capítulos e aulas são cadastrados e salvos em uma única transação → são um agregado (raiz: Curso).
- Se aulas têm cadastro independente e podem ser reutilizadas em vários capítulos → cada um tem ciclo de vida próprio e **não** formam um agregado.

### Organização do Código

Na imersão, o código é organizado por agregado dentro de cada módulo:

```
auth/src/
  user/       ← agregado User (raiz: UserEntity)
    model/    ← entidade + VOs
    usecase/  ← casos de uso
  group/      ← agregado Group
  profile/    ← agregado Profile
  permission/ ← agregado Permission
```

A maioria dos agregados no exemplo tem uma única entidade como raiz, mas podem ter múltiplas.

### CQRS e Agregados

- **Comandos** (inserção, alteração, exclusão): usam modelos ricos, passam pelo agregado com validações.
- **Consultas** (leitura): podem ir diretamente ao SQL sem passar pelo agregado, especialmente para consultas complexas com múltiplos joins.

## Debates

- **Agregado com entidade única**: é comum e válido ter um agregado com apenas uma entidade (raiz).
- **Granularidade**: definir fronteiras erradas (muito grandes ou muito pequenas) é um dos erros mais comuns; requer entendimento do negócio.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)

## Questões Não Resolvidas

- Como lidar com relacionamentos entre agregados diferentes (ex.: User referenciando Group) sem criar acoplamento?

## Notas de Atualização

- 2026-04-20: criada a partir da aula 5 da imersão DDD + Arquitetura Limpa.
