---
title: "Transcrições Projeto EAD - Imersão DDD e Arquitetura Limpa"
type: source
status: active
created: 2026-04-20
updated: 2026-04-20
tags: ["ddd", "arquitetura-limpa", "modelagem", "typescript"]
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
  - ./concepts/domain-driven-design.md
  - ./concepts/arquitetura-limpa.md
  - ./concepts/objeto-de-valor.md
  - ./concepts/entidade.md
  - ./concepts/agregado.md
  - ./concepts/caso-de-uso.md
---

# Transcrições Projeto EAD - Imersão DDD e Arquitetura Limpa

**Fonte:** Curso "Imersão DDD e Arquitetura Limpa" - Formação.dev  
**Instrutor:** Leonardo Leitão  
**Formato:** 14 transcrições de aulas em vídeo

## Resumo do Material

Este material consiste em 14 transcrições de aulas de um curso sobre Domain Driven Design (DDD) e Arquitetura Limpa. O conteúdo progride desde a configuração de um projeto monorepo até a implementação prática de padrões de modelagem rica.

### Estrutura das Aulas

| Aula | Tema |
|------|------|
| 01-03 | Configuração do projeto (Nest.js, Next.js, código compartilhado) |
| 04 | Modelagem de domínio |
| 05 | Agregados |
| 06-07 | Casos de uso (parte 1 e 2) |
| 08 | Domínio e subdomínios |
| 09 | Contextos delimitados |
| 10 | Objetos de valor |
| 11 | Modelos imutáveis |
| 12-13 | Exemplos de objetos de valor (e-mail, nome, senha) |

## Pontos-Chave

### 1. Configuração do Projeto

- **Monorepo com código compartilhado:** Estrutura com pastas `apps/` (backend, frontend), `shared/` (código comum) e módulos por contexto (ex: `auth/`, `finance/`)
- **Tecnologias:** Nest.js (backend), Next.js (frontend), TypeScript, Turbopack, Prisma (ORM)
- **Objetivo:** Permitir que código de domínio seja usado tanto no frontend quanto no backend

### 2. Arquitetura Limpa / Hexagonal

```
┌─────────────────────────────────────┐
│              Web                    │
├─────────────────────────────────────┤
│           Adapters                  │
├─────────────────────────────────────┤
│        Casos de Uso                 │
├─────────────────────────────────────┤
│     Entidades / Domínio             │
└─────────────────────────────────────┘
```

- **Camadas centrais:** Domínio e Casos de Uso (regras de negócio)
- **Camadas externas:** Adapters e Web (infraestrutura, interfaces)
- **Princípio:** Dependências apontam para o centro; domínio não depende de frameworks

### 3. Domain Driven Design - Ferramentas Estratégicas

**Contexto Delimitado (Bounded Context):**
- Módulos que refletem subdomínios do negócio
- Cada contexto tem linguagem e modelos próprios
- Evita a "grande bola de lama" (tudo misturado)

**Linguagem Ubíqua:**
- Terminologia consistente entre código, documentação e comunicação
- Ex: "paciente" significa coisas diferentes em emergência vs. internação

**Mapa de Contexto:**
- Diagrama simples mostrando contextos e suas relações
- Evitar dependências cíclicas entre módulos

**Subdomínios:**
- **Core:** Principal diferencial do negócio (investir mais esforço)
- **Suporte:** Necessários, mas não são o foco principal
- **Genérico:** Soluções de mercado (RH, jurídico)

### 4. Ferramentas Táticas de Modelagem

**Objeto de Valor (Value Object):**
- Primeiro e mais importante local para regras de negócio
- Substitui tipos primitivos por objetos com comportamento
- Garante validade imutável do dado
- Exemplos: `Email`, `PersonName`, `StrongPassword`, `HashPassword`

```typescript
// Exemplo: trocar string por objeto de valor
class Curso {
  nome: Nome;  // em vez de nome: string
}
```

**Entidade:**
- Objetos com identidade única (ID)
- Segundo melhor local para regras de negócio
- Modelo rico: atributos + comportamentos (não apenas getters/setters)

**Agregado:**
- Coleção de entidades e objetos de valor persistidos atomicamente
- Entidade raiz controla o ciclo de vida
- Ex: Curso (raiz) → Capítulos → Aulas (depende do negócio)

**Serviço de Domínio:**
- Terceiro local para regras que não se encaixam em VO ou Entidade

### 5. Casos de Uso (Application Services)

- Implementam regras de aplicação
- Podem ser chamados tanto do frontend quanto do backend
- Não dependem de banco de dados diretamente (usam inversão de dependência)
- Interface padrão: `execute(input): output`

### 6. Modelos Imutáveis

- Preferência por imutabilidade nos modelos de domínio
- Método `clone(props)` para criar cópias alteradas
- Interface `Props` separada da classe para facilitar serialização

### 7. CQRS (Command Query Responsibility Segregation)

- **Comandos:** Modelos ricos, validações complexas
- **Consultas:** Podem usar SQL direto, DTOs simples, sem ORM complexo

## Afirmações e Evidências

| Afirmação | Força da Evidência |
|-----------|-------------------|
| Modelo rico favorece encapsulamento | Opinião do instrutor, prática de mercado |
| Objetos de valor são o melhor local para regras | Opinião do instrutor |
| Contextos delimitados refletem subdomínios do negócio | Conceito estabelecido em DDD |
| Casos de uso podem ser executados no frontend | Demonstrado em código |
| Agregados dependem do ciclo de vida do negócio | Conceito estabelecido em DDD |

## Impacto na Wiki Existente

Este material é **fundacional** para o Segundo Cérebro. Ele estabelece:

1. **Vocabulário base:** DDD, Arquitetura Limpa, modelagem rica
2. **Padrões de implementação:** Como estruturar código de domínio
3. **Critérios de decisão:** Quando usar VO vs. Entidade vs. Serviço

### Páginas a Criar

**Conceitos:**
- `domain-driven-design.md` - Visão geral do DDD
- `arquitetura-limpa.md` - Princípios e camadas
- `objeto-de-valor.md` - Definição, exemplos, benefícios
- `entidade.md` - Identidade, modelo rico
- `agregado.md` - Raiz do agregado, persistência atômica
- `caso-de-uso.md` - Application services, interface padrão
- `contexto-delimitado.md` - Bounded contexts, linguagem ubíqua
- `modelo-anemico-vs-rico.md` - Comparação

**Entidades:**
- `leonardo-leitao.md` - Instrutor do curso (opcional)

**Sínteses (futuro):**
- Comparação de padrões de modelagem
- Guia de implementação de VOs

## Questões Não Resolvidas

1. **DTOs:** Mencionados mas não implementados em detalhe
2. **Tratamento de erros múltiplos:** Classe `Result` mencionada, não implementada
3. **Inversão de dependência:** Mencionada, será vista em aulas futuras
4. **Testes:** Não abordado nas transcrições

## Contradições Potenciais

- Nenhuma contradição interna detectada
- **Observação:** O instrutor reconhece que algumas escolhas são preferências pessoais (ex: imutabilidade, organização de pastas) e não requisitos do DDD

---

**Próximos passos sugeridos:**
1. Criar páginas de conceito para cada padrão mencionado
2. Extrair exemplos de código para ilustrar cada conceito
3. Criar síntese comparando modelo anêmico vs. rico
4. Documentar decisões de arquitetura do projeto exemplo
