---
title: "Agentes de IA"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["agentes", "llm", "workflow", "sub-agentes", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-07-ContextoRulesSkill-conceitoDeAgentes.md
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
related_pages:
  - ./ia-generativa.md
  - ./harness.md
  - ./spec-driven-development.md
  - ./seguranca-de-agentes.md
  - ./mcp.md
  - ../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
---

# Agentes de IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> Fonte do material: curso de Andrew Brown para a certificação Claude Certified Developer Foundations (CCDV-F), 2026-11; fonte em inglês, síntese em português. Material de instrutor, parte opinião e parte fatos do exame.

## Definição

Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e usando ferramentas de forma autônoma e iterativa para atingir um objetivo. Reúne a definição da aula IA-07 e a distinção agente × workflow e sub agentes do curso CCDV-F.

## Compreensão Atual

### Agentes de IA (Aula IA-07)
> **"Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e utilizando ferramentas de forma autônoma e iterativa para atingir um objetivo."**

- **LLM = cérebro**: tomada de decisão, planejamento.
- **Agente = braços**: orquestrador de prompts que executa ações no mundo externo (arquivos, terminal, banco, APIs).
- **Loop iterativo**: agente executa → observa resultado → envia ao LLM → repete até objetivo atingido.
- **Anti-pattern**: fazer a aplicação tomar decisões com if/else (3000+ linhas) em vez de delegar ao LLM.

### Agente × Workflow
- **Agente**: o modelo decide o próximo passo num loop agêntico; funciona como uma **política dinâmica** (regra de decisão escolhida em tempo de execução a partir do contexto), não como uma máquina de estados fixa.
- **Workflow**: passos predeterminados (n8n, código comum) = máquina de estados. Bom para automação e garantias; **não** serve como loop agêntico externo.
- **Combinação**: um estado do workflow pode chamar um agente. Se o problema cabe em código determinístico, usar código.

### Sub Agentes
- Ganhos: especialização, paralelismo, contexto enxuto por tarefa, **verificação independente** (agente revisor com nota + justificativa), ferramentas/permissões restritas e isolamento.
- Custos: dinheiro, latência, coordenação, erros de comunicação; evitar *tool stuffing* (cada ferramenta consome tokens em toda chamada).
- No Claude Code são arquivos `.md` com frontmatter ([Claude Code](../entities/claude-code.md)). Padrões vistos no curso: pesquisa com coordenador + particionamento + **loop de refinamento** (máx. 4 iterações).

## Fontes de Suporte

- [Dev AI — Aula 07: Conceito de Agentes](../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)

## Conceitos Relacionados

- [harness](./harness.md)
- [spec-driven-development](./spec-driven-development.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [mcp](./mcp.md)

## Questões Não Resolvidas

- Como estruturar um sistema multi-agente na prática?
- Qual o custo (latência, tokens) de loops iterativos com LLMs?

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
