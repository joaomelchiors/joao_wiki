---
title: "Modelagem de Domínio — Aula 48: Classe ErroValidacao"
descricao: 'Aula 48 da série Modelagem de Domínio (formacao.dev) — introdução da classe `ErroValidacao` (estende `Error` JS) como ponto de partida do modelo; atributos `codigo`/`valor`/`extras`; catálogo de constantes de erros; métodos estáticos `criar`/`lancar`; justificativa da ordem causal erro → validação → VOs → entidades.'
type: source
status: active
created: 2026-08-03
updated: 2026-11-12
tags: ["ddd", "modelagem", "erro-de-validacao", "typescript", "formacao-dev"]
source_files:
  - raw/sources/2026-08-03_transcrição-ModelagemDeDominio-48-ErrorDeValidacao.md
related_pages:
  - ./2026-04-20_source-imersao-ddd-arq-limpa.md
  - ./2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/ddd.md
  - ../entities/formacao-dev.md
tipo_conteudo: demonstrado
captura: automatica
---

# Modelagem de Domínio — Aula 48: Classe ErroValidacao

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): implementação ao vivo da classe `ErroValidacao`.

## Resumo

Aula introdutória do capítulo de Modelagem de Domínio (série do ProjetoEAD, formacao.dev, instrutor Leonardo). A aula apresenta a classe `ErroValidacao` como ponto de partida de um novo projeto — isolado de banco e front-end — que modela o domínio puro. A `ErroValidacao` estende a classe `Error` do JavaScript e é enriquecida com código de erro, valor inválido e dados extras (tamanho mínimo/máximo etc.). O instrutor justifica começar pelo erro: a representação de erro influencia a validação, que influencia os VOs, que influenciam as entidades.

## Pontos-Chave

- **Projeto isolado de infraestrutura**: o novo projeto EAD modela apenas domínio puro (`src/` diretamente) — VOs, entidades, serviços de domínio, serviços de aplicação (casos de uso) e eventos. Sem dependências de banco, web ou framework.
- **ErroValidacao estende Error JS**: a classe herda de `Error` e adiciona três atributos `readonly`: `codigo` (string), `valor` (qualquer tipo) e `extras` (objeto com dados adicionais como tamanho mínimo/máximo).
- **Catálogo de constantes de erros**: pasta `constantes/erros.ts` exporta um objeto imutável de strings de código de erro (ex.: `erros.desconhecido = 'desconhecido'`). Isso centraliza os códigos e evita strings mágicas espalhadas.
- **Métodos estáticos de fábrica**: `ErroValidacao.criar(codigo, valor)` cria um erro sem lançar; `ErroValidacao.lancar(codigo, valor)` cria e lança — retorno tipado como `never`.
- **Estratégia "classe antes do teste"**: instrutor cria a classe e só depois escreve o teste, visando 100% de cobertura. Sem TDD estrito (decisão pedagógica).
- **Separação física como controle de dependências**: isolar o projeto de domínio em pasta/pacote próprio impede dependências indesejadas; a pasta `core/` usada em exemplos anteriores era convenção análoga.

## Afirmações/Observações Principais

- **Ordem causal**: `ErroValidacao` → `Validação` → `VOs` → `Entidades`. O instrutor argumenta que modelar o erro antes garante consistência de representação em todo o modelo.
- **Sem VO para o erro**: os atributos da `ErroValidacao` são tipos primitivos (string, any) por design — o erro será consumido fora do core (front-end, API), então manter simples é intencional.
- **`never` como retorno de métodos que lançam**: tipo `never` em TypeScript para métodos que sempre lançam exceção (não chegam ao fim do bloco).
- **Código antes do valor**: preferência por código de erro (string simbólica) em vez de mensagem livre — facilita i18n e rastreabilidade (padrão já estabelecido nas aulas anteriores).

## Notas de Evidência

- Transcrição única de ~9 KB cobrindo apenas esta aula introdutória; próxima aula (não ingerida) testa a classe.
- Instrutor referencia explicitamente o projeto de exercícios do capítulo anterior como base de comparação.

## Impacto na Wiki Existente

- **`concepts/objeto-de-valor.md`**: adicionar referência à `ErroValidacao` como classe auxiliar no pipeline de validação de VOs; anotar que há uma nova série (Modelagem de Domínio) que aprofunda o tema.
- **`concepts/ddd.md`**: a nova série reforça o padrão de projeto isolado de domínio puro (sem infraestrutura).
- **Nenhuma contradição** com fontes anteriores: a classe `ErroValidacao` é uma evolução/refinamento da abordagem de códigos de erro já usada nas Aulas 15 e anteriores.

## Questões Não Resolvidas

- Conteúdo da Aula 49 (testes da `ErroValidacao`) não está em `raw/sources/` — a série provavelmente continua, mas as transcrições não foram capturadas.
- Atributos `nome da classe` e `nome do atributo` mencionados pelo instrutor como extensão futura da classe — não implementados nesta aula.
- Estratégia completa de como `ErroValidacao` propaga do core para a camada HTTP (status code, payload) — não detalhada nesta aula.

## Páginas Relacionadas

- [Objeto de Valor](../concepts/objeto-de-valor.md)
- [DDD](../concepts/ddd.md)
- [Aula 15 — Tratamento de Erros](./2026-04-23_source-imersao-ddd-arq-limpa-tratamento-erros.md)
- [formacao.dev](../entities/formacao-dev.md)

