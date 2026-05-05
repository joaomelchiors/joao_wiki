---
title: "Dev AI — Aula 06: Objetivo das Trilhas — Arquitetura para AI-Driven Development"
type: source
status: active
created: 2026-04-28
updated: 2026-04-28
tags: ["ai-driven-development", "modularização", "arquitetura-limpa", "cqrs", "skills", "full-stack"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-06-ContextoRulesSkill-objetivoDasTrilhas.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/contexto-delimitado.md
  - ../entities/formacao-dev.md
---

# Dev AI — Aula 06: Objetivo das Trilhas — Arquitetura para AI-Driven Development

## Resumo

Aula de alinhamento que define os **objetivos e princípios** da trilha AI-Driven Development. Estabelece que o foco é **aplicações fullstack médias/grandes para produção** (não CRUDs simples). Define três pilares arquiteturais prioritários: (1) **Modularização**, (2) **Arquitetura Limpa**, (3) **CQRS**. Mapeia o fluxo completo de uma feature (formulário → estado → API → controller → use case → model → repositório → banco) e define onde o cuidado humano é máximo (model + use case) vs. onde a IA pode ter mais liberdade (frontend/componentes). Marca a transição da teoria (Aulas 01-05) para a prática (Skills, Rules, Agentes).

## Pontos-Chave

### Três Pilares Arquiteturais (em ordem de prioridade)

| Prioridade | Pilar | Descrição |
|---|---|---|
| **#1** | **Modularização** | Dividir para conquistar — módulos de negócio independentes (autenticação, transações, recorrências, cartão). Módulos refletidos no frontend E no backend. |
| **#2** | **Arquitetura Limpa** | Separação entre framework (cima) e negócio (baixo). Camadas bem definidas com responsabilidades claras. |
| **#3** | **CQRS** | Command Query Responsibility Segregation — separar comandos (write) de consultas (read) para simplificar a arquitetura. |

### Por que Modularizar é o #1

- **Contextos menores**: módulos bem definidos = IA recebe contexto menor e mais focado.
- **Escalabilidade**: aplicação pode crescer para 15+ módulos sem ficar ingovernável.
- **Independência**: módulos não devem ter dependências diretas entre si (podem comunicar-se por mecanismos indiretos).
- **Big Ball of Mud**: sem modularização, código fica misturado → difícil para humanos E para IA.
- **Paralelismo**: módulos independentes permitem desenvolvimento paralelo.

### Dois Eixos de Organização

- **Eixo horizontal**: módulos de negócio (autenticação, transações, recorrências, cartão...)
- **Eixo vertical**: camadas de tecnologia (componente → estado → API → controller → use case → model → repositório → banco)

Cada módulo tem sua fatia vertical completa: frontend (páginas, componentes) + backend (controller, use case, model, repositório).

### Fluxo Completo de uma Feature

```
[Formulário] → [Estado] → [Chamada API (HTTP POST)] → [Controller (NestJS)]
    → [Use Case] → [Model] → [Repositório] → [Banco de Dados]
    → [resposta] → [Controller] → [HTTP 201] → [Estado] → [Formulário: "sucesso!"]
```

### Prioridade de Cuidado (onde investir revisão humana)

| Camada | Nível de Cuidado | Razão |
|---|---|---|
| **Model (regras de negócio)** | 🟢 Máximo | Coração da aplicação — erros aqui são críticos |
| **Use Case** | 🟢 Máximo | Orquestra o fluxo — deve ser perfeito e testado |
| **Controller / Repositório** | 🟡 Médio | Importante mas tolerável se não for "o código mais lindo" |
| **Frontend (componentes, páginas)** | 🟠 Menor | IA gera componentes maiores que o ideal; revisão periódica |

### AI-Driven Development — Expectativas Realistas

- **Não é para CRUDs**: para apps simples, use Lovable/v0/Replit. AI-Driven Development é para aplicações de mercado em produção.
- **IA gera código funcional mas não perfeito**: componentes tendem a ser maiores, com potencial duplicação e menos reuso.
- **Revisão é necessária**: "quanto mais revisar, melhor será — mas mais tempo será necessário". Trade-off consciente.
- **Skills para varredura**: IA pode fazer revisões automáticas com orientações claras ("percorra meus componentes e encontre oportunidades de reuso").
- **O todo é mais importante que as partes**: arquitetura saudável > componente perfeito.

### Testes

- Testar 100% das regras de negócio de forma **independente** de framework, frontend, backend e banco de dados.
- Alinhado com Arquitetura Limpa: domínio testável sem infraestrutura.

## Afirmações/Observações Principais

- **"Modularizar é algo que a gente não pode negociar"**: princípio inegociável para aplicações reais.
- **"A IA vai conseguir seguir a sua estrutura arquitetural de forma muito tranquila"**: ponto forte da IA.
- **"Uma aplicação que é três telas, não precisa de arquitetura"**: AI-Driven Development é para complexidade real.
- **"O que é 10, 20, 30 vezes mais importante é a responsabilidade de cada camada"**: foco em separação de responsabilidades.
- **"Código de IA será maior que código manual"**: IA tende a gerar componentes mais verbosos.

## Notas de Evidência

- Diagramas desenhados ao vivo: (1) módulos de negócio isolados, (2) módulos espelhados no frontend/backend, (3) fluxo completo de feature com camadas coloridas por prioridade.
- Stack mencionada: Next.js/React (frontend), NestJS (backend), PostgreSQL (banco).
- Aplicação financeira como projeto de referência para a trilha.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: impacto indireto — a modularização melhora a eficácia do contexto fornecido à IA (contextos menores e mais focados).
- **[arquitetura-limpa.md](../concepts/arquitetura-limpa.md)**: confirmada como pilar #2 do AI-Driven Development; fluxo de camadas mapeado.
- **[contexto-delimitado.md](../concepts/contexto-delimitado.md)**: modularização descrita aqui é a aplicação prática de Bounded Context.
- **[overview.md](../overview.md)**: deve ser atualizado para refletir a convergência DDD + IA (modularização serve ambas as trilhas).

## Questões Não Resolvidas

- Como definir fronteiras de módulos em aplicações existentes (legacy)?
- Mecanismos indiretos de comunicação entre módulos — eventos? mensageria?
- CQRS na prática: como implementar com IA?
- Como criar Skills eficazes para varredura e revisão de código?
- Qual o threshold de complexidade para justificar AI-Driven Development vs. ferramentas low-code?

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceitos de IA
- [Arquitetura Limpa](../concepts/arquitetura-limpa.md) — pilar #2
- [Contexto Delimitado](../concepts/contexto-delimitado.md) — base teórica da modularização
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
