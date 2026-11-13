---
title: "TDD (Test-Driven Development) com IA"
type: concept
status: draft
created: 2026-11-12
updated: 2026-11-12
tags: ["tdd", "testes", "feedback-loop", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
  - raw/sources/2026-08-19_live-uncle-bob-on-software-fundamentals-in-the-age-of-ai_en-revisada_zcLPGC-tvgk.md
related_pages:
  - ./verificacao-deterministica.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./ia-generativa.md
  - ./ai-driven-development.md
  - ./harness.md
  - ./melhores-praticas-claude-code.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
---

# TDD (Test-Driven Development) com IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> **Evidência**: a página se apoia em três fontes de tipo `opiniao`: duas de Matt Pocock (palestra e entrevista) e uma live com Uncle Bob. Os argumentos abaixo são posição de cada um, não fato verificado; por isso o status é `draft`.

## Definição

Ciclo red-green-refactor guiado por testes. Na palestra de Matt Pocock, TDD é essencial para IA porque os ciclos de feedback são o teto da qualidade do que o agente produz e porque dificulta a "trapaça" de testar o que já foi implementado.

## Compreensão Atual

### TDD (Test-Driven Development) como Essencial
**Por que TDD é crucial para IA (segundo Matt Pocock)**:
- Adiciona bons testes automaticamente
- Dificulta "trapaça" (IA tende a fazer implementação → testes que validam o feito)
- TDD inverte: instrumenta código antes de escrever → IA precisa fazer implementação real
- Ciclos de feedback são essenciais para IA não programar "às cegas"
- **"Qualidade dos ciclos de feedback = teto da qualidade da IA"**

**Ciclo Red-Green-Refactor**:
1. Escrever teste que falha (red)
2. Fazer implementação passar (green)
3. Refatorar

**Frontend** (também segundo Matt): muito difícil testar automaticamente com IA (multimodal; precisa olhos humanos). Solução: IA gera protótipos descartáveis para escolha humana.

### Posição matizada na entrevista (set/2026, Matt Pocock)
Fonte: [entrevista ao The Pragmatic Engineer](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md).

- TDD otimiza uma **memória de trabalho pequena**: o teste que falha lembra o humano de onde parou. Agentes têm memória de trabalho maior, então, segundo Matt, TDD "mira no problema errado".
- O que agentes realmente precisam é de **feedback loops**: ver o efeito do que fazem e provar que funciona. Escrever a falha primeiro dificulta que o agente "trapaceie".
- Mesmo sem TDD estrito, ele pede "evidência de TDD": prova de que a mudança falharia sem ela.
- Alerta: agentes escrevem muitos **testes tautológicos** (que só afirmam a própria implementação).
- Ele diz ter uma relação "mista" com TDD e continua recomendando pela confiança que dá ao humano; começa a ver contra-argumentos. Isso suaviza a ênfase da palestra de abril/2026 (fonte acima). Fontes discordam em ênfase, não em conclusão.

### Posição de Uncle Bob (live, ago/2026)
Fonte: [live com Uncle Bob](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md); opinião e relato dele, não verificados.

- TDD é uma **disciplina humana**, útil porque humanos têm memória de curto prazo limitada (escrever uma linha de teste, uma de código). Ele diz **não impor** essa disciplina a agentes: faz mais sentido impor **valores** (código limpo, testado) e ajustar **limiares** (ex.: complexidade permitida), não comportamentos.
- Mesmo mandados a fazer TDD com rigor, os agentes, segundo ele, acabam escrevendo uma função e depois o teste dela (como John Ousterhout faria), e ele considera isso aceitável.
- Em vez de TDD estrito, ele depende de **verificação determinística** depois do fato: cobertura, escore CRAP e teste de mutação. Ver [Verificação determinística](./verificacao-deterministica.md).
- **Convergência com Matt** (entrevista de set/2026): TDD serve à memória humana e agentes precisam de feedback. **Divergência de ênfase** com a palestra de abril/2026 (TDD "essencial para IA"): as fontes discordam; ficam as três posições, sem conclusão. Bob (que popularizou TDD) é a fonte mais cética sobre impô-lo a agentes; ainda é uma única voz de opinião.

## Fontes de Suporte

- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — Entrevista ao The Pragmatic Engineer](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md)
- [Uncle Bob e Matt Pocock — live sobre fundamentos na era da IA](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md)

## Conceitos Relacionados

- [ai-driven-development](./ai-driven-development.md)
- [harness](./harness.md)
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)
- [verificacao-deterministica](./verificacao-deterministica.md)

## Questões Não Resolvidas

- Há evidência (não só opinião de três falas) sobre se TDD estrito melhora o resultado de agentes em comparação com testar depois e verificar por mutação?

## Notas de Atualização

- 2026-11-12: adicionada a posição de Uncle Bob (live) e link para verificação determinística (ingestão).
- 2026-11-12: adicionada a posição matizada da entrevista ao The Pragmatic Engineer (ingestão).
- 2026-11-12: status passou a `draft` e os argumentos foram atribuídos a Matt Pocock (higienização, etapa 3).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
