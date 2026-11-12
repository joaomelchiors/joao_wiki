---
title: "Imersão DDD + Arquitetura Limpa — Série de Transcrições (14 aulas)"
type: source
status: active
created: 2026-04-20
updated: 2026-11-12
tags: ["ddd", "arquitetura-limpa", "typescript", "nest", "monorepo", "objeto-de-valor", "agregado", "contexto-delimitado", "caso-de-uso"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-01-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-02-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-03-configurando.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-4-modelagem.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-5-agregado.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-6-casoDeUso-parte1.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-7-casoDeUso-parte2.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-8-dominio.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-9-contexto.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-10-objetoDeValor.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-11-modelosImutaveis.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-01.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-12-exemplo-objetoDeValor-02.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-13-exemplo-objetoDeValor-senha.md
related_pages:
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../concepts/agregado.md
  - ../concepts/contexto-delimitado.md
  - ../entities/formacao-dev.md
tipo_conteudo: demonstrado
captura: automatica
---

# Imersão DDD + Arquitetura Limpa — Série de Transcrições (14 aulas)

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): série de aulas da imersão com implementação ao vivo na maior parte das aulas (uma das 14 é só conceitual).

## Resumo

Série de 14 transcrições de aulas ao vivo da imersão "DDD + Arquitetura Limpa" da plataforma formacao.dev (escola.formacao.dev), ministrada pelo instrutor Leonardo (Léo). O conteúdo cobre desde a configuração de um monorepo TypeScript com Turborepo/NestJS/Next.js até a implementação prática de padrões DDD — Objetos de Valor, Entidades, Agregados, Casos de Uso e Contextos Delimitados — com exemplos em um sistema financeiro fictício e um módulo de autenticação.

## Pontos-Chave

- **Configuração de monorepo**: uso de Turborepo + NestJS (back-end) + Next.js (front-end) + módulo `shared` compartilhado; código compartilhado pode ser usado tanto no front quanto no back-end.
- **Modularização por contextos**: cada domínio de negócio vira um módulo físico (pasta/projeto) separado; o nome das entidades muda conforme o contexto (ex.: `User` no auth vs. `Investor` em investimentos).
- **Modelo anêmico vs. rico**: modelo anêmico só tem atributos e getters/setters; modelo rico carrega atributos e comportamentos, preservando o encapsulamento.
- **Objeto de Valor (Value Object)**: é o local prioritário para encapsular regras de negócio; troca tipos primitivos por objetos que se auto-validam na criação e oferecem comportamentos ricos (ex.: `EmailVO`, `PersonNameVO`, `StrongPasswordVO`, `HashPasswordVO`).
- **Agregado**: coleção de entidades e objetos de valor persistidos atomicamente; seu ciclo de vida determina se é um agregado (depende do negócio, não apenas do modelo de dados).
- **Caso de uso / Application Service**: pode ser chamado tanto do front-end quanto do back-end; o módulo core não deve conter nenhuma dependência de framework ou infraestrutura.
- **Ferramentas estratégicas do DDD**: Contexto Delimitado, Linguagem Ubíqua e Mapa de Contexto.
- **Imutabilidade de modelos**: uso de `readonly` + método `clone(props parciais)` para evitar mutação direta; facilita integração com React e persistência.
- **Padrão Result**: esboço de uma classe `Result` para encapsular sucesso/falha de validações e agregar múltiplos erros.
- **CQRS (menção)**: separação entre comandos (escrita, usa modelos ricos) e consultas (leitura, pode usar SQL direto ou DTOs simples).

## Afirmações/Observações Principais

- *Objeto de valor é o primeiro e mais importante local para colocar regras de negócio* — afirmado explicitamente pelo instrutor (aula 10).
- *Um objeto instanciado é, por construção, um objeto válido* — o construtor do VO lança exceção se inválido; assim o sistema jamais opera com dados inválidos.
- *Contextos delimitados não precisam de bancos de dados separados* — é decisão de infraestrutura, não de domínio (aula 9).
- *Dependências cíclicas entre módulos são proibidas* — considerado "pecado mortal" no mapa de contexto (aula 9).
- *O DDD é um resgate à POO feita do jeito certo* — interpretação do instrutor (aula 9).
- *Linguagem ubíqua deve estar presente do código ao e-mail e à conversa com o CEO* — consistência terminológica em todos os artefatos (aula 9).

## Notas de Evidência

- Aulas 01–03: configuração prática do monorepo (Turborepo, NestJS, Next.js, Prisma + PostgreSQL via Docker).
- Aula 04: modelagem DDD, modelo anêmico vs. rico, encapsulamento.
- Aula 05: conceito de Agregado, raiz do agregado, organização do código por agregados.
- Aulas 06–07: Caso de Uso como interface genérica (input/output), chamada do mesmo UC no front e no back.
- Aula 08: Domínio, subdomínios (core, suporte, genérico) com exemplo de hospital.
- Aula 09: Ferramentas estratégicas — Contexto Delimitado, Linguagem Ubíqua, Mapa de Contexto.
- Aula 10: Objeto de Valor — conceito, vantagens, exemplos de comportamentos ricos.
- Aula 11: Modelos imutáveis com `props` + `clone`; interface de propriedades separada da classe.
- Aulas 12a/12b: Implementação de `EmailVO` e `PersonNameVO`; uso de DTO como view formatada.
- Aula 13: `StrongPasswordVO` e `HashPasswordVO`; esboço da classe `Result` para agregação de erros.

## Impacto na Wiki Existente

- Wiki criada do zero — não há páginas anteriores para atualizar; este é o primeiro material ingerido.
- Criadas páginas de conceito: `ddd.md`, `arquitetura-limpa.md`, `objeto-de-valor.md`, `agregado.md`, `contexto-delimitado.md`.
- Criada página de entidade: `formacao-dev.md`.

## Questões Não Resolvidas

- A série de aulas continua (instrutor menciona 5º dia e gravações offline). Verificar se há mais transcrições futuras a ingerir.
- Implementação completa do fluxo full-stack (banco de dados + login) não foi coberta nessas 14 aulas.
- A classe `Result` foi apenas esboçada — não está completamente implementada nas transcrições.
- Como tratar múltiplos erros de validação simultaneamente ainda ficou como pendência do instrutor para a aula seguinte.

## Páginas Relacionadas

- [ddd.md](../concepts/ddd.md): conceitos estratégicos e táticos do Domain-Driven Design
- [arquitetura-limpa.md](../concepts/arquitetura-limpa.md): camadas e princípios da Arquitetura Limpa
- [objeto-de-valor.md](../concepts/objeto-de-valor.md): padrão Value Object aplicado em TypeScript
- [agregado.md](../concepts/agregado.md): padrão Agregado e raiz do agregado
- [contexto-delimitado.md](../concepts/contexto-delimitado.md): Bounded Context e ferramentas estratégicas do DDD
- [formacao-dev.md](../entities/formacao-dev.md): plataforma de ensino onde o curso foi ministrado
