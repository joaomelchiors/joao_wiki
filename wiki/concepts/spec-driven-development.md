---
title: "Spec-Driven Development (SDD)"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["spec-driven-development", "sdd", "sub-agentes", "engenharia-de-contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-08-ContextoRulesSkill-engenhariaDeContexto.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-01-PastasDasSkills.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-02-SkillBasica copy.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-03-.SkillComCodigo.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-04-SkillNoCodex.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-05-EspecificacaoSimples.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-11-07-transcricao_AbentsDeIa_SDD.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
related_pages:
  - ./ia-generativa.md
  - ./engenharia-de-contexto.md
  - ./rules-e-skills.md
  - ./agentes-de-ia.md
  - ./mcp.md
  - ./harness.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../sources/2026-07-17_source-ferramentas-agenticas.md
  - ../sources/2026-11-07_source-agentes-ia-sdd.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
---

# Spec-Driven Development (SDD)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Spec-Driven Development divide uma tarefa complexa em tasks (checklist em Markdown) executadas uma a uma, com injeção de contexto e Skills a cada passo, opcionalmente por sub-agentes. Reúne a visão de engenharia de contexto, a prática (pasta `specs/`) e a aula teórica do curso Profissional AI.

## Compreensão Atual

### Spec Driven Development como Engenharia de Contexto em Escala
Quando uma tarefa é complexa demais para um único prompt (context rot), o **Spec Driven Development** divide a execução em múltiplas `tasks` menores, com injeção de contexto antes de cada uma:

```
[Task 1]  → [injetar Rule + Skill + Mentions] → executar
[Task 2]  → [injetar Rule + Skill + Mentions] → executar
[Task 3]  → [injetar Rule + Skill + Mentions] → executar
...
[Task N]  → [injetar Rule + Skill + Mentions] → executar
```

- **Mentions**: referências a arquivos relevantes que o modelo deve considerar naquela task específica.
- Cada task opera com contexto fresco + guard-rails específicos → menor desvio, resultado mais previsível.
- O resultado final ainda pode variar (processo estatístico), mas permanece dentro das restrições definidas.
- Ferramentas modernas de agentes adicionam verificação automática ao final de cada task e se autocorrigem se necessário.

### SDD na visão do curso Profissional AI — Agentes
Fonte: [Spec-Driven Development (aula teórica)](../sources/2026-11-07_source-agentes-ia-sdd.md).

- **Spec = receita em Markdown**: lista de passos com checkbox (`- [ ]`); o agente executa um por vez e marca `[x]`. Pode registrar evidência por passo e incluir passos de verificação. Passos podem chamar Skills (`/nome-da-skill`) e ser delegados a **sub-agentes** com contexto limpo (analogia coordenador/auxiliar).
- Reuso para rotinas recorrentes; o instrutor relata uma execução de ~150–200 passos (anedota não verificável).
- **Tensão registrada**: o curso sugere gerar sistemas inteiros a partir de specs; Matt Pocock diz que "specs to code" não funciona (ver [Matt Pocock](../entities/matt-pocock.md)). Os sentidos de "spec" diferem (checklist executável × especificação que substitui o código); as duas posições são mantidas.

### Spec-Driven Development na Prática (Especificação Simples — Aula 05)
**Estrutura de pasta recomendada**:

```
specs/
├── changes/
│   └── <nome-da-mudança>/
│       └── spec.md       ← arquivo de especificação ativo
└── archive/
    └── 2026-07-17_<nome-da-mudança>/
        └── spec.md       ← spec concluída (movida com data no nome)
```

**Estrutura de um arquivo `spec.md`**:

```markdown
# Nome da Mudança

## Orientações

Execute as tarefas abaixo em sequência.
Marque os passos concluídos.
Coloque uma evidência abaixo de cada passo com data e hora.

## Tarefas

- [ ] Tarefa 1: descrição detalhada / usar Skill X
- [ ] Tarefa 2: descrição detalhada / usar Skill Y
- [ ] Tarefa 3: descrição detalhada
```

**Como executar**: enviar o caminho relativo do `spec.md` para o agente. Ele lê e executa cada tarefa, marcando com `[x]` ao concluir.

**Modos de execução**:
- **Sequencial**: padrão; o agente executa tarefa por tarefa.
- **Paralelo**: adicionar orientação "execute os passos usando subagentes em paralelo".
- **Contexto independente por passo**: "execute de forma sequencial, utilizando subagentes, cada passo em um contexto independente" — cada step começa com contexto fresco.

**Evidências**: o instrutor confirma ter executado 10 especificações encadeadas, cada uma com 10–15 passos, sem falhas de rastreamento.

## Fontes de Suporte

- [Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [Dev AI — Ferramentas Agênticas (Aulas 01–07)](../sources/2026-07-17_source-ferramentas-agenticas.md)
- [Agentes de IA (Profissional AI) — Spec-Driven Development](../sources/2026-11-07_source-agentes-ia-sdd.md)
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)

## Conceitos Relacionados

- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [rules-e-skills](./rules-e-skills.md)
- [agentes-de-ia](./agentes-de-ia.md)
- [mcp](./mcp.md)
- [harness](./harness.md)

## Questões Não Resolvidas

- ~~**Spec Driven Development na prática**: qual ferramenta, estrutura de arquivo e convenções são usadas?~~ → **Parcialmente resolvida no módulo Ferramentas Agênticas (Aula 05)**: pasta `specs/changes/<nome>/spec.md`, checkboxes de tarefa, orientações embutidas na spec, execução sequencial ou em paralelo com subagentes; specs concluídas movidas para `specs/archive/`. Limites de tasks antes do context rot: ainda não formalizados.
- **Conflitos em subagentes paralelos**: como evitar conflitos quando múltiplos subagentes escrevem nos mesmos arquivos em paralelo dentro de uma spec.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
