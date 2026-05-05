---
title: "Agregado (Aggregate)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-27
tags: ["agregado", "aggregate", "ddd", "raiz-do-agregado", "ciclo-de-vida"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-5-agregado.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-16-arquitetura-hexagonal.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md
  - raw/sources/2026-04-21_transcrição-projetoEAD-20-repositorio_usuario.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md
  - ../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md
  - ./ddd.md
  - ./objeto-de-valor.md
  - ./contexto-delimitado.md
  - ./arquitetura-limpa.md
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
    provider/ ← interfaces (portas) — repositório + queries
  group/      ← agregado Group
  profile/    ← agregado Profile
  permission/ ← agregado Permission
```

A maioria dos agregados no exemplo tem uma única entidade como raiz, mas podem ter múltiplas.

### Repositório por Agregado

Regra do DDD esclarecida na aula 16: **um repositório por agregado**, não por entidade.

- O repositório é criado para a **raiz do agregado**.
- Se Curso, Capítulo e Aula formam um único agregado → existe apenas `CursoRepository`.
- Se cada um tem ciclo de vida independente → cada um tem seu próprio repositório.
- Nem toda interação com banco de dados precisa passar pelo repositório (vide CQS abaixo).

**Implementação concreta (Aula 20)**: o adaptador `UsuarioPrisma` implementa a interface `UsuarioRepositorio` usando composição com `PrismaService`. Métodos implementados: `criar(usuario)` e `buscarPorEmail(email)`. O adaptador vive no backend (`apps/backend/src/autenticacao/`), completamente fora do core.

### Separação Repositório vs. Queries (CQS Prático)

| Interface | Responsabilidade | Retorno típico |
|---|---|---|
| `usuario.repository.ts` | Comandos (criar, alterar, excluir) | Entidade rica |
| `usuario.queries.ts` | Consultas complexas (relatórios, dashboards) | DTOs / interfaces simples |

- **Repositórios** usam modelo rico e ORM para persistência.
- **Queries** podem usar SQL cru e retornar interfaces simples, sem passar pelo modelo rico.
- Referência: capítulo 4 do Livro Vermelho (Implementing DDD) sobre CQS.

### CQRS e Agregados

- **Comandos** (inserção, alteração, exclusão): usam modelos ricos, passam pelo agregado com validações.
- **Consultas** (leitura): podem ir diretamente ao SQL sem passar pelo agregado, especialmente para consultas complexas com múltiplos joins.

### Propriedades Opcionais e Segurança no Agregado

No agregado `User`, a senha é uma propriedade **opcional** (`HashPasswordVO | undefined`). Isso é necessário porque:

1. Ao carregar o usuário do banco, não se deseja que a senha trafegue pela aplicação.
2. O método `semSenha()` retorna um clone da entidade com `password: undefined`, usado pelo Caso de Uso de login para devolver o usuário sem dados sensíveis.
3. O teste "deve retornar usuário válido sem senha" valida este cenário explicitamente.

Essa abordagem mantém o modelo rico intacto enquanto oferece um mecanismo seguro de projeção.

### Métodos de Transformação via Clone (Modelo Rico)

A entidade `User` oferece métodos que retornam clones com estado alterado, preservando a imutabilidade:

| Método | O que faz | Usado em |
|---|---|---|
| `semSenha()` | Retorna clone com `password: undefined` | UC de login — devolver usuário sem dados sensíveis |
| `comSenha(hash)` | Retorna clone com a senha hash definida | UC de registro — após criptografar, associa o hash ao usuário |

Esses métodos demonstram o conceito de **modelo rico**: a entidade participa ativamente da construção e transformação do seu estado, em vez de ser apenas um container de dados com getters/setters.

## Debates

- **Agregado com entidade única**: é comum e válido ter um agregado com apenas uma entidade (raiz).
- **Granularidade**: definir fronteiras erradas (muito grandes ou muito pequenas) é um dos erros mais comuns; requer entendimento do negócio.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)
- [Aula 16 — Arquitetura Hexagonal](../sources/2026-04-23_source-imersao-ddd-arq-limpa-arq-hexagonal.md)
- [Aula 18 — Caso de Uso 01](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-01.md)
- [Aula 19 — Caso de Uso 02](../sources/2026-04-27_source-imersao-ddd-arq-limpa-caso-de-uso-02.md)
- [Aula 20 — Repositório de Usuário](../sources/2026-04-27_source-imersao-ddd-arq-limpa-repositorio-usuario.md)

## Questões Não Resolvidas

- Como lidar com relacionamentos entre agregados diferentes (ex.: User referenciando Group) sem criar acoplamento?

## Notas de Atualização

- 2026-04-20: criada a partir da aula 5 da imersão DDD + Arquitetura Limpa.
- 2026-04-23: adicionadas regra de 1 repositório por agregado, separação repositório vs. queries (CQS prático), pasta `provider/` na organização do código — a partir da Aula 16 (Arquitetura Hexagonal).
- 2026-04-27: adicionada seção sobre propriedades opcionais e segurança no agregado (senha opcional, `semSenha()`, teste explícito) — a partir da Aula 18 (Caso de Uso 01).
- 2026-04-27: adicionada seção de métodos de transformação via clone (`comSenha(hash)`) como exemplo de modelo rico — a partir da Aula 19 (Caso de Uso 02).
- 2026-04-27: complementada seção de repositório por agregado com implementação concreta `UsuarioPrisma` (composição com `PrismaService`) — a partir da Aula 20 (Repositório de Usuário).
