---
title: "Matt Pocock — Quatro shorts: docs, dumb zone, Pragmatic Programmer e retro skill"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["matt-pocock", "ai-coding", "docs", "dumb-zone", "contexto", "pragmatic-programmer", "retro-skill", "harness"]
source_files:
  - raw/sources/2026-07-16_delete-most-of-your-docs_en-orig_Fj8DKMbdIzU.md
  - raw/sources/2026-07-20_what-is-the-dumb-zone_en-orig_sOd7svdu_1I.md
  - raw/sources/2026-07-16_my-1-book-recommendation-for-strategic-programming_en-orig_t34UuBxB2YQ.md
  - raw/sources/2026-11-06_someone-wrote-a-paper-about-my-skill_en-orig_KJr1Q-k-yH0.md
related_pages:
  - ../entities/matt-pocock.md
  - ../concepts/ia-generativa.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-11-12_source-matt-pocock-home-repo.md
---

# Matt Pocock — Quatro shorts: docs, dumb zone, Pragmatic Programmer e retro skill

## Resumo

Legendas de quatro vídeos curtos (1 a 2 min) do canal de [Matt Pocock](../entities/matt-pocock.md), em inglês, **geradas automaticamente** pelo YouTube (podem conter erros, sobretudo em nomes próprios). Cada um trata de um ponto separado sobre trabalhar com agentes de código. Datas de publicação: 2026-07-16 (docs e livro), 2026-07-20 (dumb zone), 2026-11-06 (retro skill).

## 1. "Delete (most of) your docs" (2026-07-16)

- **Tese**: o código deve ser autoexplicativo; criar uma camada de docs em markdown para o agente ler no lugar do código é um antipadrão.
- **Motivo**: docs não são executáveis nem testáveis e se afastam do código. Com duas fontes de verdade em conflito, o agente não sabe qual vale. Isso gasta tokens e piora a saída.
- **O que o código precisa**: bom formato, organização em arquivos e módulos razoáveis, interfaces separadas das implementações, para o agente pegar só o que precisa.
- **O que vale manter (o que o código não explica)**: (1) **ADRs** (registros de decisões de arquitetura), para as alternativas consideradas; (2) um **glossário** da linguagem de domínio (ex.: o que é "pedido" no sistema); (3) uma **camada fina de navegação** para acelerar a exploração.
- Rejeita a ideia de docs "como fonte de verdade para entender o código".

## 2. "What is the dumb zone?" (2026-07-20)

- **Atenção degrada com o contexto**: cada token novo cria relações com todos os outros; 5 tokens geram 10 relações e 10 mil tokens geram cerca de 1 milhão. Em algum ponto o agente alucina mais, recupera pior e escreve código pior.
- **Smart zone × dumb zone**: a queda é gradual; algumas tarefas toleram a dumb zone, mas para aproveitar os tokens o ideal é gastá-los na smart zone.
- **Regra prática atual: cerca de 150 mil tokens.** Ele diz que há ~6 meses considerava ~100 mil e que o valor sobe com o tempo; varia por modelo e por tarefa e é "muito debatido".
- **Ao chegar à dumb zone**: limpar, compactar ou passar o contexto adiante (*hand off*), ou redesenhar o fluxo em tarefas pequenas em janelas novas, o que, segundo ele, gasta menos tokens e dá melhores resultados. **Alucinações de fidelidade** são sinal de que se está na dumb zone.

## 3. "My #1 book recommendation for strategic programming" (2026-07-16)

- Recomenda reler livros clássicos para aprender programação estratégica, começando por *The Pragmatic Programmer* (David Thomas e Andrew Hunt).
- Já usou ideias do livro em system prompts, como **tracer bullets** e **"don't outrun your headlights"**. Atribui ao livro termos como "programming by coincidence".
- Reler o livro o convenceu de que os **fundamentos de software continuam importando** ("parece escrito para a era da IA").

## 4. "Someone wrote a PAPER about my skill" (2026-11-06)

- Alguém escreveu um artigo acadêmico, "How do coding agent harnesses self-evolve, an empirical study of retrospective adaptation", sobre a **skill `retro`** dele, que olha para trás nas sessões do agente e sugere melhorias no repositório (regra de lint, mais code review etc.).
- Conclusão do artigo (segundo ele): a autoevolução do harness exige mais do que gerar e aplicar mudanças; é preciso verificar se ajudam em tarefas posteriores e revisar ou remover as que não ajudam.
- Posição dele: isso confirma que precisa haver um **humano ou processo no loop**, fazendo "retro da retro", e que são necessárias muitas retros. Diz **discordar das conclusões** que os autores tiraram dos dados, sem detalhar. Não foi possível verificar o artigo (só a legenda foi ingerida).

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| Docs separados do código geram conflito entre fontes e pioram o agente | Argumento lógico, sem dados | Fraca a moderada (opinião de especialista) |
| A dumb zone começa por volta de 150 mil tokens | "Regra prática", experiência própria; ele mesmo diz que varia | Fraca (heurística) |
| Escalada das relações de atenção (10 relações com 5 tokens; ~1 milhão com 10 mil tokens) | Explicação simplificada; o valor é aproximadamente n²/2 (conta feita aqui, não vem da fonte) | Moderada como ordem de grandeza |
| Autoevolução de harness precisa de humano no loop | Interpretação dele de um artigo que não foi lido aqui | Fraca |

## Impacto na Wiki Existente

- [IA Generativa](../concepts/ia-generativa.md), "Smart Zone vs. Dumb Zone": a tabela da fonte anterior dava **~100 mil tokens** como início da dumb zone; este short atualiza para **~150 mil** (o próprio autor diz que o limite mudou em ~6 meses). Registrado como **evolução da posição**, não contradição.
- "Doc rot" (questão aberta): este short responde em parte, com ADRs, glossário e navegação fina como docs que valem a pena manter.
- [Matt Pocock](../entities/matt-pocock.md): novas posições e cronologia.

## Questões Não Resolvidas

- Como medir onde começa a dumb zone para um modelo e tarefa específicos? Só há heurística.
- Quais são exatamente as conclusões do artigo sobre a retro skill e por que Matt discorda? (artigo não ingerido)
- Existe um limite parecido para sessões longas com compactação automática (ver [Harness](../concepts/ia-generativa.md))?
