---
title: "Contexto Delimitado (Bounded Context)"
type: concept
status: active
created: 2026-04-20
updated: 2026-04-20
tags: ["contexto-delimitado", "bounded-context", "ddd", "linguagem-ubiqua", "mapa-de-contexto"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-8-dominio.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-9-contexto.md
  - raw/sources/2026-04-20_transcrição-projetoEAD-01-configurando.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ./ddd.md
  - ./agregado.md
---

# Contexto Delimitado (Bounded Context)

## Definição

Um Contexto Delimitado é um módulo da aplicação com fronteiras claras, que reflete um subdomínio do negócio. É a principal ferramenta estratégica do DDD para contrapor a "grande bola de lama" — sistemas sem fronteiras definidas onde tudo é misturado.

## Compreensão Atual

### O que um contexto delimita

- **Entidades com nomes próprios**: o mesmo CNPJ é "paciente" na emergência, "pessoa física" no jurídico e "cliente" na farmácia — o contexto define o significado.
- **Linguagem Ubíqua**: cada contexto tem seu próprio vocabulário de negócio, consistente do código ao e-mail e à reunião com o CEO.
- **Independência**: contextos são desenvolvidos e implantados separadamente; não devem ter dependências cíclicas.

### Três Ferramentas Estratégicas do DDD

| Ferramenta | Descrição |
|---|---|
| **Contexto Delimitado** | Define fronteiras; um projeto físico por subdomínio. |
| **Linguagem Ubíqua** | Terminologia universal dentro de um contexto (código, docs, conversas). |
| **Mapa de Contexto** | Diagrama informal mostrando quais contextos existem e como se relacionam. |

### Tipos de Subdomínio (e seu impacto no contexto)

| Tipo | Desenvolvido internamente? | Exemplo (hospital) |
|---|---|---|
| **Core** | Sim, com maior esforço | Internação |
| **Suporte** | Sim | Emergência, Suprimentos |
| **Genérico** | Não — software de prateleira | RH, Jurídico |

### Regra das Dependências Cíclicas

> Dependências cíclicas entre contextos são **proibidas** — consideradas "pecado mortal" pelo instrutor.

Um contexto pode depender de outro, mas não pode haver ciclos (A→B→A).

### Banco de Dados Separado

Não obrigatório por definição. A separação de banco de dados é uma decisão de infraestrutura, não de domínio.

## Debates

- **Granularidade dos contextos**: definir contextos muito grandes ressuscita a "bola de lama"; muito pequenos geram overhead de integração.
- **Contexto compartilhado (Shared Kernel)**: quando dois contextos têm lógica idêntica (ex.: loja física e online), pode-se criar um kernel compartilhado para evitar duplicação.

## Fontes de Suporte

- [Imersão DDD + Arquitetura Limpa — Série de Transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)

## Questões Não Resolvidas

- Como definir o mapa de contexto completo para o sistema financeiro do projeto da imersão?
- Qual é a estratégia de integração entre os contextos `auth` e `financeiro` (API? eventos? shared kernel)?

## Notas de Atualização

- 2026-04-20: criada a partir das aulas 8–9 da imersão DDD + Arquitetura Limpa.
