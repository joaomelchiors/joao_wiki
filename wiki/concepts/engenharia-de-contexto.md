---
title: "Engenharia de Contexto"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["engenharia-de-contexto", "prompt", "context-rot", "dumb-zone", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-08-ContextoRulesSkill-engenhariaDePrompt.md
  - raw/sources/2026-04-27_transcrição-IA-09-ContextoRulesSkill-engenhariaDeContexto.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
related_pages:
  - ./ia-generativa.md
  - ./rules-e-skills.md
  - ./spec-driven-development.md
  - ./harness.md
  - ./ai-driven-development.md
  - ./home-repo.md
  - ./verificacao-deterministica.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-07-16_source-matt-pocock-shorts.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
---

# Engenharia de Contexto

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Engenharia de contexto é decidir o que o modelo vê antes de agir, e é considerada mais importante que a engenharia de prompt. Rules, Skills e Spec-Driven Development são formas dela. Esta página cobre prompt estruturado (CORFT), meta-prompt, **context rot** e a **smart/dumb zone**.

## Compreensão Atual

### Engenharia de Prompt e Contexto (Aulas IA-08 e IA-09)
**Engenharia de contexto é mais importante que engenharia de prompt.** Skills, Rules e Spec Driven Development são formas de engenharia de contexto.

Estrutura **CORFT** para prompts:

```
[CONTEXTO]     → Quem você é, qual o projeto, qual stack
[OBJETIVO]     → O que precisa ser feito
[REGRAS]       → O que pode e não pode fazer
[FORMATO]      → Como a saída deve ser entregue
[TAREFA FINAL] → A instrução principal (sempre por último)
```

**Hierarquia prática**: Engenharia de Contexto (Skills/Rules/Spec) > Prompt Estruturado (CORFT) > Meta-Prompt (IA gerando prompts).

**Meta-prompt**: pedir para a IA gerar ou melhorar um prompt. Spec Driven Development é uma forma de meta-prompt ("prompt gerando prompt").

### Context Rot (Apodrecimento do Contexto)
Quantas mais tokens são geradas numa única execução, mais o modelo tende a se desviar do objetivo inicial — o contexto original fica estatisticamente menos relevante à medida que a sequência cresce. Isso é chamado de **context rot**.

| Fator | Efeito |
|---|---|
| Tarefa curta (prompt simples) | Modelo mantém coerência com o objetivo |
| Tarefa longa (muitos tokens gerados) | Caminho diverge; alucinações e desvios aumentam |

**Consequência prática**: tarefas longas devem ser quebradas em tasks menores (Spec Driven Development) ou ter contexto injetado antes de cada ação (engenharia de contexto).

### Smart Zone vs. Dumb Zone
*Heurística de Matt Pocock (palestra Essential Skills e shorts, fontes de tipo `opiniao`). Os números de tokens são regra prática dele, não medição. A ideia geral de degradação com contexto longo converge com o "context rot" das aulas acima.*

**Restrição arquitetural dos LLMs** (segundo Matt): ficam progressivamente "burros" à medida que tokens se acumulam.

| Zona | Tokens | Comportamento |
|---|---|---|
| **Smart zone** | Início da conversa, ~0-100k tokens (palestra de abril/2026) | LLM faz melhor trabalho; relações de atenção menos tensionadas |
| **Dumb zone** | ~100k+ tokens (palestra de abril/2026) | LLM fica progressivamente "burro"; toma decisões estúpidas |

**Atualização (short de 2026-07-20)**: o próprio Matt Pocock passou a usar **~150 mil tokens** como regra prática e diz que há ~6 meses achava ~100 mil e que o valor continua subindo; varia por modelo e tarefa. A queda é gradual, e alucinações de fidelidade são um sinal de estar na dumb zone. Ao chegar lá: limpar, compactar, fazer *hand off* ou redesenhar o fluxo em tarefas pequenas em janelas novas. Evolução da posição, não contradição. Fonte: [shorts de Matt Pocock](../sources/2026-07-16_source-matt-pocock-shorts.md).

**Reforço (entrevista de set/2026)**: Matt repete os ~150 mil tokens como valor atual para modelos de fronteira, independentemente do tamanho da janela (ele credita a ideia de smart/dumb zone a Dex Horthy), e usa isso para fatiar trabalho grande em várias sessões (spec/destino + tickets; mapa no Wayfinder). Mesma fonte de opinião de um autor. Ver [entrevista](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md).

**Live com Uncle Bob (ago/2026)**: Matt reapresenta smart/dumb zone (de novo creditando Dex Horthy) e Bob traz o mecanismo **lost in the middle**: início e fim do contexto pesam mais que o meio, então regras longas colocadas no prompt "somem" e viram diretrizes. Conclusão dele: prompt inicial mínimo e verificação determinística depois (ver [Verificação determinística](./verificacao-deterministica.md)). Ambos também falam de **trajetória do contexto**: o que entra direciona tudo o que vem depois, e só limpar o contexto zera isso (exemplo do café contaminado por uma novela). Opinião e relato, não medição; a ideia converge com context rot, acima. Fonte: [live](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md).

**Analogia**: "Adicionar token é como adicionar time a uma liga de futebol — número de partidas escala quadraticamente" (relações de atenção entre cada par de tokens).

**Consequências práticas**:
- Dimensionar tarefas para permanecerem dentro da smart zone
- Evitar acúmulo infinito de contexto (compactação contínua)
- Preferir limpar contexto (voltar ao estado base) a compactar (histórico variável)
- **LLMs como "Memento"**: esquecem continuamente ao limpar; comportamento determinístico a cada reset

## Fontes de Suporte

- [Dev AI — Aula 08: Engenharia de Prompt e Contexto](../sources/2026-04-28_source-dev-ai-engenharia-de-prompt.md)
- [Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — Quatro shorts (docs, dumb zone, Pragmatic Programmer, retro skill)](../sources/2026-07-16_source-matt-pocock-shorts.md)

## Conceitos Relacionados

- [rules-e-skills](./rules-e-skills.md)
- [spec-driven-development](./spec-driven-development.md)
- [harness](./harness.md)
- [ai-driven-development](./ai-driven-development.md)
- [home-repo](./home-repo.md)

## Questões Não Resolvidas

- **Otimização de contexto por task**: como combinar Mentions + Rules + Skills minimizando tokens sem perder contexto relevante?

## Notas de Atualização

- 2026-11-12: adicionados lost in the middle e trajetória do contexto, da live com Uncle Bob (ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
