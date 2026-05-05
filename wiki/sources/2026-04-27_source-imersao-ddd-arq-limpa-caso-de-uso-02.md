---
title: "Imersão DDD + Arq. Limpa — Aula 19: Caso de Uso 02 (Registrar Usuário — continuação)"
type: source
status: active
created: 2026-04-27
updated: 2026-04-27
tags: ["ddd", "caso-de-uso", "modelo-rico", "erros", "repositório", "typescript"]
source_files:
  - raw/sources/2026-04-21_transcrição-projetoEAD-19-casoDeUso-02.md
related_pages:
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/agregado.md
  - ../entities/formacao-dev.md
---

# Imersão DDD + Arq. Limpa — Aula 19: Caso de Uso 02 (Registrar Usuário — continuação)

## Resumo

Continuação direta da Aula 18. Refina o fluxo do caso de uso `RegistrarUsuario`, implementando a verificação de unicidade por e-mail, o método `comSenha(hash)` na entidade `User`, e a estratégia de exceção única com múltiplos erros concatenados. Inclui sessão de Q&A esclarecendo responsabilidades do UC vs. domínio e por que `StrongPasswordVO` vive no UC e não na entidade.

## Pontos-Chave

- **Fluxo refinado do UC `RegistrarUsuario`**: (1) validar VOs sem acessar banco → (2) verificar resultado com `throwIfFailed()` → (3) gerar hash da senha via `CriptografiaProvider` → (4) criar usuário com senha via `comSenha(hash)` → (5) verificar unicidade por e-mail via repositório → (6) persistir via `repositorio.criar(usuario)`.
- **Método `comSenha(hash)` na entidade**: retorna um clone do `User` com a senha hash definida. Demonstra modelo rico — a entidade participa ativamente da construção do seu estado, não é apenas getter/setter.
- **Verificação de unicidade**: `repositorio.buscarPorEmail(email)` retorna `Promise<User | null>`. Se o usuário já existir, o UC lança exceção (`Usuario.EmailJaExiste` ou similar). Essa regra vive no UC porque depende de infraestrutura (banco).
- **VOs como parâmetro do repositório**: a interface `buscarPorEmail` pode receber `EmailVO` em vez de `string`. Vantagem: garante que apenas e-mails válidos serão consultados no banco, eliminando uma validação redundante.
- **UC como "maior cliente do domínio"**: formulação do instrutor — o Application Service é o maior consumidor de Entidades, VOs e Serviços de Domínio. O domínio pode ser acessado via três elementos: Entidade, VO e Serviço de Domínio.
- **Exceção única com erros acumulados**: `throwIfFailed()` lança uma única exceção contendo um array. Estratégia recomendada: `errors.map(e => e.message).join(',')` produz string com códigos separados por vírgula. O front-end faz `split(',')` e traduz cada código (i18n).
- **StrongPasswordVO no UC, não na Entidade**: o `User` armazena `HashPasswordVO` e "não sabe" como a hash foi gerada — forte ou fraca. A validação da força da senha é responsabilidade do UC de registro, não do modelo.
- **Input do UC: primitivos vs. VOs**: ambas as abordagens são válidas. Primitivos (`nome: string, email: string, senha: string`) são passados ao UC, que instancia os VOs internamente. Alternativa: instanciar VOs na camada de adaptadores e passar modelos prontos ao UC.

## Afirmações/Observações Principais

- **"O UC não valida — ele chama quem valida"**: reforço de que o UC é coordenador, não implementador de regras. A validação está nos VOs e Entidades; o UC apenas instancia e orquestra.
- **"A Entidade não é responsável por criptografia"**: o `User` não tem acesso ao `CriptografiaProvider`. Ele recebe a senha já como hash e a encapsula. A separação de responsabilidades é preservada.
- **Modelo rico vs. tabelas no banco**: a separação de senha em tabela diferente é "detalhe de implementação" do banco; o modelo pode ter uma única entidade `User` que mapeia para duas tabelas, sem que o domínio saiba.
- **Result.combine + throwIfFailed só para validações do input**: a verificação de unicidade (busca no banco) é feita separadamente, após confirmar que o input em si é válido. Isso evita consultas desnecessárias ao banco quando os dados já são inválidos.

## Notas de Evidência

- Fluxo do UC implementado passo a passo no código ao vivo.
- Testes demonstrados: cenário "deve quebrar" com objeto vazio mostrando array de erros `['PersonName.IsEmpty', 'Email.Invalid']`.
- Estratégia de `map` + `join` para exceção com múltiplos códigos demonstrada no teste.

## Impacto na Wiki Existente

- **[ddd.md](../concepts/ddd.md)**: reforça formulação "UC é o maior cliente do domínio"; explicita os três pontos de acesso ao domínio (Entidade, VO, Serviço de Domínio).
- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: reforça que o UC pode receber primitivos ou VOs no input; complementa discussão sobre camada de adaptadores como local alternativo de instanciação de modelos.
- **[objeto-de-valor.md](../concepts/objeto-de-valor.md)**: VOs como parâmetro de repositório (tipagem forte na interface de persistência); separação `StrongPasswordVO` (UC) vs. `HashPasswordVO` (entidade) clarificada.
- **[agregado.md](../concepts/agregado.md)**: método `comSenha(hash)` como exemplo de modelo rico — entidade com comportamento de transformação via clone.

## Questões Não Resolvidas

- Implementação concreta do `PrismaUserRepository` — continua pendente.
- Como serializar a exceção com múltiplos erros na resposta HTTP (NestJS)? Formato de resposta de erro da API não definido.
- Quando instanciar modelos no UC vs. na camada de adaptadores — sem regra definitiva.

## Páginas Relacionadas

- [DDD](../concepts/ddd.md) — UC como maior cliente do domínio
- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — input do UC, camada de adaptadores
- [Objeto de Valor](../concepts/objeto-de-valor.md) — VOs no repositório, StrongPasswordVO vs. HashPasswordVO
- [Agregado](../concepts/agregado.md) — método `comSenha(hash)`, modelo rico
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
