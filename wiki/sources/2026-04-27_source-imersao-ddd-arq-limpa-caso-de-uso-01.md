---
title: "Imersão DDD + Arq. Limpa — Aula 18: Caso de Uso 01 (Registrar Usuário)"
type: source
status: active
created: 2026-04-27
updated: 2026-04-27
tags: ["ddd", "caso-de-uso", "ports-adapters", "criptografia", "uuid", "typescript"]
source_files:
  - raw/sources/2026-04-21_transcrição-projetoEAD-18-casoDeUso-01.md
related_pages:
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/agregado.md
  - ../entities/formacao-dev.md
---

# Imersão DDD + Arq. Limpa — Aula 18: Caso de Uso 01 (Registrar Usuário)

## Resumo

Aula prática que implementa o caso de uso `RegistrarUsuario` de ponta a ponta, demonstrando a integração entre VOs, Result, repositório e um novo provedor de criptografia. Introduz o VO `ID` (baseado em UUID) e resolve questões pendentes de aulas anteriores: a senha é agora explicitamente opcional na entidade `User`, e o método `semSenha()` é criado para devolver o usuário sem dados sensíveis.

## Pontos-Chave

- **Caso de uso concreto**: `RegistrarUsuario` implementa a interface genérica `UseCase<Input, Output>`. Recebe nome, e-mail e senha; coordena validação (via VOs), criptografia (via provedor) e persistência (via repositório).
- **Dois provedores injetados**: `UsuarioRepositorio` (persistência) e `CriptografiaProvider` (hash e comparação de senha), ambos recebidos via construtor — inversão de dependência em ação.
- **`CriptografiaProvider`**: interface com dois métodos — `criptografar(senha: string): Promise<string>` e `comparar(senha: string, hash: string): Promise<boolean>`. Implementação concreta (ex.: bcrypt) fica fora do core.
- **VO `ID`**: novo Value Object que encapsula um UUID v4. Se nenhum valor for fornecido, gera automaticamente. Possui `isValid()` estático (usa `uuid.validate`). Método `createHash()` gera um novo UUID.
- **Senha opcional na entidade**: `User` aceita senha como `undefined` — necessário para cenários onde o usuário é carregado do banco sem expor a senha. Teste explícito "deve retornar usuário válido sem senha" foi adicionado.
- **`User.semSenha()`**: método que retorna um clone do usuário com `password: undefined`. Uso principal: caso de uso de login deve retornar o usuário sem a senha.
- **`Result.try` no fluxo assíncrono**: usado para encapsular a chamada ao `CriptografiaProvider`, que é assíncrona. O UC combina resultados de VOs e do hash com `Result.combine`, filtrando valores nulos.
- **Bcrypt rounds**: trade-off entre segurança e performance; a partir de 12 rounds é considerado "production-ready"; rounds mais altos são mais lentos mas mais seguros.

## Afirmações/Observações Principais

- **"O Caso de Uso coordena regras de negócio + serviços de infraestrutura"**: é a definição operacional de UC nesta imersão — não implementa regras, mas orquestra.
- **"Mesmo retornando o hash, é uma falha de segurança"**: o instrutor enfatiza que vazar o hash bcrypt permite ataques de força bruta direcionados (ex.: testar datas de nascimento). Recomenda armazenar a senha em tabela separada (`usuario_credenciais`) ou omitir a coluna em todas as queries padrão.
- **"Está demorando a primeira funcionalidade porque estamos criando o framework"**: justificativa para o investimento inicial — após a infraestrutura base, novos UCs são rápidos de criar.
- **"Cada UC num arquivo separado traz visibilidade"**: reiterado com exemplo do projeto EAD real (500+ UCs por módulo em files/folders).

## Notas de Evidência

- Interface `CriptografiaProvider` e `UsuarioRepositorio` implementadas como portas (pasta `provider/`).
- VO `ID` criado em `shared/core/src/model/` com dependência de `uuid` (lib considerada "não ofensiva").
- Testes unitários do `User` atualizados para cenário sem senha.
- `Result.combine` aceita valores nulos na lista (são filtrados internamente).

## Impacto na Wiki Existente

- **[ddd.md](../concepts/ddd.md)**: reforça a definição de Caso de Uso como coordenador; adiciona CriptografiaProvider como exemplo concreto de porta.
- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: resolve parcialmente a questão pendente do `PrismaUserRepository` (interface definida; implementação concreta não feita nesta aula). Adiciona `CriptografiaProvider` ao diagrama de portas. Questão de segurança de senha como debate arquitetural.
- **[objeto-de-valor.md](../concepts/objeto-de-valor.md)**: adiciona VO `ID` à tabela de exemplos; confirma que `StrongPasswordVO` é usado apenas no UC (não armazenado).
- **[agregado.md](../concepts/agregado.md)**: reforça senha como opcional no agregado User — clone sem senha é operação do agregado.

## Questões Não Resolvidas

- Implementação concreta do adaptador `PrismaUserRepository` — interface definida mas implementação continua pendente.
- Como integrar o `CriptografiaProvider` com o framework NestJS (injeção via módulo)?
- `Result.combine` com itens nulos: comportamento exato do filtro não está 100% documentado.
- Tabela separada para credenciais (`usuario_credenciais`) vs. omissão de coluna — qual abordagem adotar no projeto?

## Páginas Relacionadas

- [DDD](../concepts/ddd.md) — padrão Caso de Uso como orquestrador
- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — Ports & Adapters, inversão de dependência
- [Objeto de Valor](../concepts/objeto-de-valor.md) — VO `ID`, `StrongPasswordVO`
- [Agregado](../concepts/agregado.md) — senha opcional, `semSenha()` como operação do agregado
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
