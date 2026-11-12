---
title: "Agentes de IA (Profissional AI) — Spec-Driven Development (aula teórica)"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["ia-generativa", "spec-driven-development", "agentes", "sub-agentes", "markdown", "formacao-dev"]
source_files:
  - raw/sources/2026-11-07-transcricao_AbentsDeIa_SDD.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../entities/matt-pocock.md
  - ./2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md
  - ./2026-07-17_source-ferramentas-agenticas.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
tipo_conteudo: explicacao
captura: automatica
---

# Agentes de IA (Profissional AI) — Spec-Driven Development (aula teórica)

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula teórica; a prática fica para a aula seguinte. Contém uma anedota não verificável.

## Resumo

Aula teórica do curso "Profissional AI — Agentes" (formacao.dev) que apresenta o **Spec-Driven Development (SDD)** como segunda das "três ferramentas" do curso (Skill, especificação e MCP). O instrutor (provavelmente Leonardo; não consta no arquivo) define SDD como uma **receita em Markdown** que lista os passos que o agente deve seguir em um processo longo, em vez de um prompt vago ou gigante. A prática fica para a aula seguinte.

## Pontos-Chave

- **Analogia da receita**: "faça um bolo de chocolate" (o agente inventa o processo) × uma lista de ~23 passos (resultado mais padronizado e consistente).
- **Formato**: arquivo `.md` com título opcional (`#`) e lista de tarefas com checkbox (`- [ ]`). O agente executa um passo por vez e **marca `[x]` ao concluir**, até terminar tudo. O instrutor diz que passará a usar só `.md` para texto e prompts.
- **Sub-agentes**: cada passo pode ser delegado a um sub-agente com contexto limpo. Analogia: o coordenador João delega a tarefa 3 à Maria, que tem memória própria e devolve o resultado. A interface pode mostrar progresso ("21 passos, concluí o segundo").
- **Evidência por passo (opcional)**: pedir ao agente que registre abaixo de cada passo quando foi executado e se houve problema e correção. Também é possível incluir passos de verificação ao final.
- **Skills dentro da spec**: um passo pode dizer "use `/nome-da-skill`", o que reforça a execução porque a Skill já ensina como fazer.
- **Reuso**: a mesma spec serve para rotinas recorrentes (relatório mensal, tarefa diária ou semanal).
- **Três pilares** (formulação do curso): SDD cuida do fluxo; Skill cuida de tarefas específicas; MCP dá acesso a ferramentas externas (explicado nas aulas seguintes).
- **Exemplo de checklist**: "ler pedidos do dia, organizar dados na planilha, resumir feedback, gerar relatório".

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| Uma lista de passos dá resultado mais consistente que um prompt vago | Argumento do instrutor e analogia; sem demonstração | Fraca a moderada |
| O agente marca os passos concluídos e executa processos muito longos | Relato pessoal: 10 specs de 10 a 15 passos cada (~150–200 passos) numa execução só; o instrutor diz não saber o número exato | Fraca (anedota, não verificável) |
| É possível "gerar o código-fonte de uma aplicação a partir de um arquivo simples em texto" e "construir sistemas complexos inteiros" | Apenas afirmação, sem demonstração | Fraca |
| Delegar passos a sub-agentes dá precisão "cirúrgica" | Analogia; sem dados | Fraca |

## Impacto na Wiki Existente

- [IA Generativa](../concepts/ia-generativa.md): acrescenta uma visão didática de SDD às seções "Spec Driven Development como Engenharia de Contexto em Escala" e "Spec-Driven Development na Prática": spec = checklist Markdown, sub-agente como delegação, evidência por passo, e os "três pilares".
- **Tensão com outra fonte (não resolvida)**: [Matt Pocock](../entities/matt-pocock.md) afirma em [Essential Skills](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md) que "specs to code" não funciona e que o desenvolvedor precisa controlar o código. A aula do curso sugere gerar aplicações completas a partir de specs. As duas fontes não usam "spec" no mesmo sentido: aqui a spec é uma **lista de tarefas executável**, e Matt critica especificações que substituem o código. Mantêm-se as duas posições.
- Consistente com a descrição prática de SDD do módulo [Ferramentas Agênticas](./2026-07-17_source-ferramentas-agenticas.md) (checkboxes, paralelização com sub-agentes).

## Questões Não Resolvidas

- Qual o limite de passos por spec antes do context rot? (já em aberto em [IA Generativa](../concepts/ia-generativa.md); a anedota de 150–200 passos não prova a ausência de degradação)
- Como o coordenador mantém o estado entre sub-agentes com memória limpa: pelo próprio arquivo de spec?
- Quando um passo deve usar Skill e quando basta texto na spec? (a aula "Skill × MCP" dá a resposta conceitual: ver [resumo](./2026-11-08_source-agentes-ia-skill-vs-mcp.md))
