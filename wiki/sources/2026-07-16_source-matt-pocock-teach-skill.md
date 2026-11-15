---
title: "Matt Pocock — My /teach skill is still insane (short)"
type: source
status: active
created: 2026-11-14
updated: 2026-11-14
tags: ["matt-pocock", "skills", "aprendizagem", "teach"]
source_files:
  - raw/sources/2026-07-16_my-teach-skill-is-still-insane_en-orig_glaIO6OYh74.md
related_pages:
  - ../entities/matt-pocock.md
  - ../concepts/ai-driven-development.md
  - ../concepts/rules-e-skills.md
  - ./2026-07-16_source-matt-pocock-shorts.md
tipo_conteudo: opiniao
captura: automatica
---

# Matt Pocock — My /teach skill is still insane (short)

**Classificação** (`tipo_conteudo: opiniao`, `captura: automatica`): short de 1 min 07 s (publicado em 2026-07-16) com um relato pessoal de uso; mostra o resultado de passagem, sem execução detalhada. Legenda em inglês, gerada automaticamente (pode errar nomes próprios).

## Resumo

[Matt Pocock](../entities/matt-pocock.md) recomenda a sua skill `/teach`, que usa para aprender qualquer assunto. O exemplo do vídeo: ele quer construir um escritório no jardim, o terreno tem formato irregular e um levantamento topográfico profissional é caro. Ele pediu a uma IA um guia de medição e não bastou; percebeu que precisava aprender o assunto e abriu um "teach workspace".

## Pontos-chave

- **Fluxo**: guia pronto não funcionou → abrir um espaço de ensino dedicado → a IA explica sob medida para o objetivo dele.
- **Conteúdo do exemplo**: medir todos os lados do terreno e dividi-lo em triângulos; com a diagonal entre os triângulos, o formato fica determinado (triangulação).
- **Recursos citados**: perguntas de quiz; continuidade de contexto (a skill "entende onde ele está" nas dúvidas seguintes).
- **Usos declarados**: cubo mágico e "técnicas de desenvolvimento sênior". Frase final: se você não entende algo, use `teach`.

## Afirmações e evidências

| Afirmação | Atribuição | Força |
|---|---|---|
| A skill `/teach` é útil para muitos assuntos | Matt Pocock, experiência pessoal | Opinião de um autor; sem comparação |
| A explicação é "perfeitamente adaptada" à missão, melhor que pesquisar no Google | Matt Pocock | Subjetiva; não verificado |
| Triangulação determina o formato do terreno | Conteúdo do exemplo | Método geométrico geral (não verificado nesta wiki); a precisão da medição caseira não foi discutida |

## Impacto na wiki existente

- Aparece uma **terceira categoria de uso de skills** no material de Matt: além de processo de desenvolvimento (Grill Me, PRD, TDD), há skills voltadas a **aprendizagem do próprio desenvolvedor**. Registrado em [ai-driven-development](../concepts/ai-driven-development.md).
- Reforça a ideia de skill como instrução reutilizável ([rules-e-skills](../concepts/rules-e-skills.md)); o vídeo não mostra o conteúdo do `SKILL.md`.

## Questões não resolvidas

- ~~Onde a skill `/teach` está publicada?~~ Está em [mattpocock/skills](./2026-11-14_source-matt-pocock-repo-skills.md) (`productivity`, user-invoked: ensina um conceito ao longo de várias sessões, com o diretório como workspace, o que explica o "teach workspace"). O texto da skill foi lido: ver [SKILL.md](./2026-11-14_source-matt-pocock-skills-skill-md.md) (`MISSION.md`, lições em HTML, registros de aprendizagem). O vídeo não diz (o título "still insane" sugere menção em vídeo anterior, não ingerido).
- ~~O que é o "teach workspace"?~~ É o diretório onde `/teach` roda, com `MISSION.md`, `lessons/`, `reference/`, `learning-records/` etc. (ver resumo dos `SKILL.md`).
- A medição do terreno por triangulação é suficiente para decisões de construção? Fora do escopo do vídeo.
