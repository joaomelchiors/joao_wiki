---
title: "Rule, Skill, MCP e SDD como camadas de contexto e ação"
descricao: 'Rule, Skill, MCP e SDD como camadas complementares (o quê, como, com que ferramenta, em que ordem). Quadro unificado do mantenedor, não presente nas fontes.'
type: synthesis
status: draft
created: 2026-11-12
updated: 2026-11-12
tags: ["rules", "skills", "mcp", "spec-driven-development", "engenharia-de-contexto", "interpretacao"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md
  - raw/sources/2026-11-08_transcricao-AgentesDeIa_SKILLxMCP.md
  - raw/assets/agentesDeIa_SKILLvsMCP.png
  - raw/sources/2026-11-07-transcricao_AbentsDeIa_SDD.md
related_pages:
  - ../concepts/rules-e-skills.md
  - ../concepts/mcp.md
  - ../concepts/spec-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../sources/2026-04-29_source-dev-ai-rule-skill.md
  - ../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md
  - ../sources/2026-11-07_source-agentes-ia-sdd.md
---

# Rule, Skill, MCP e SDD como camadas de contexto e ação

> Síntese do mantenedor. As definições de cada instrumento vêm das fontes; o **quadro unificado em quatro camadas é interpretação** e não aparece em nenhuma fonte. Status `draft` porque nenhuma fonte o sustenta diretamente.

## Pergunta

Como Rule, Skill, MCP e SDD se relacionam? São alternativas umas às outras ou partes de um mesmo arranjo?

## Conclusão

Os quatro podem ser lidos como **camadas complementares**, cada uma respondendo a uma pergunta diferente sobre o que o agente precisa:

| Camada | Pergunta que responde | Natureza | Onde está definido |
|---|---|---|---|
| **Rule** | O que deve ser respeitado? | Declarativa, passiva, contextual | Aula IA-10 ([Rules e Skills](../concepts/rules-e-skills.md)) |
| **Skill** | Como executar uma tarefa específica? | Ativa, processo ordenado; pode chamar código | Aula IA-10; aula Skill × MCP |
| **MCP** | Que ferramenta externa acessar? | Integração; sempre tem código por baixo | Aula Skill × MCP ([MCP](../concepts/mcp.md)) |
| **SDD** | Em que ordem fazer o processo inteiro? | Fluxo de ponta a ponta (checklist em Markdown) | Aula SDD ([Spec-Driven Development](../concepts/spec-driven-development.md)) |

Encadeamento: a spec (SDD) dita a sequência; cada passo pode indicar uma Skill; a Skill aplica as Rules relevantes e usa as ações que um MCP expõe. Todas são formas de [engenharia de contexto](../concepts/engenharia-de-contexto.md), isto é, de decidir o que o modelo vê antes de agir.

## Evidência

- [Rule × Skill (aula IA-10)](../sources/2026-04-29_source-dev-ai-rule-skill.md), `explicacao`: Rule declarativa × Skill ativa; a Skill "sabe quais Rules são relevantes e as aplica".
- [Skill × MCP (Profissional AI)](../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md), `explicacao`: "Skill ensina o processo; MCP dá acesso às ferramentas"; os "três pilares" SDD = fluxo, Skill = como fazer, MCP = ferramentas.
- [SDD (Profissional AI)](../sources/2026-11-07_source-agentes-ia-sdd.md), `explicacao`: um passo da spec pode dizer "use `/nome-da-skill`".

## Interpretação

- A aula Skill × MCP já une três das quatro peças (SDD, Skill, MCP). A Rule vem de outro curso (Dev AI). Juntar as duas formulações é o passo do mantenedor.
- Os dois cursos são do mesmo ecossistema (formacao.dev), o que torna o vocabulário compatível, mas não prova que o instrutor proporia esse quadro.

## Incertezas

- O próprio instrutor admite sobreposição: uma Skill pode integrar com sistema externo e conter passo a passo. As fronteiras são de **propósito**, não técnicas.
- Custo de contexto de cada camada (quanto cada uma carrega e quando) não é abordado nas fontes.
- Nenhuma fonte `demonstrado` mostra as quatro camadas funcionando juntas num mesmo projeto.

## Próximas Ações

- Validar o quadro quando as aulas práticas de MCP e os projetos do curso Profissional AI forem ingeridos.
- Se uma fonte apresentar o quadro unificado, promover para o conceito e mudar o status para `active`.
