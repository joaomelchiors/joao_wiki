---
title: "TDD (Test-Driven Development) com IA"
descricao: '**(draft: só fontes de opinião)** TDD com agentes de IA — red-green-refactor, um teste por vez e feedback loops como teto de qualidade segundo Matt Pocock (fev–set/2026 e skill `tdd`), e o contraponto de Uncle Bob.'
type: concept
status: draft
created: 2026-11-12
updated: 2026-11-15
tags: ["tdd", "testes", "feedback-loop", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
  - raw/sources/2026-08-19_live-uncle-bob-on-software-fundamentals-in-the-age-of-ai_en-revisada_zcLPGC-tvgk.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
  - raw/sources/2026-02-23_red-green-refactor-is-op-with-claude-code_en-corrigida_hYZdIwFIy-c.md
related_pages:
  - ./verificacao-deterministica.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./ia-generativa.md
  - ./ai-driven-development.md
  - ./harness.md
  - ./melhores-praticas-claude-code.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ./ralph-loop.md
  - ../sources/2026-02-23_source-matt-pocock-red-green-refactor.md
---

# TDD (Test-Driven Development) com IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> **Evidência**: a página se apoia em três fontes de tipo `opiniao`: duas de Matt Pocock (palestra e entrevista) e uma live com Uncle Bob. Os argumentos abaixo são posição de cada um, não fato verificado; por isso o status é `draft`. O vídeo Ralph Wiggum (jan/2026, `demonstrado`) só mostra feedback loops em uso, sem defender TDD; não muda o status. O vídeo "Red Green Refactor is OP" (fev/2026) é mais uma fonte `opiniao` de Matt, com a skill dele lida na tela; também não muda o status.

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

**Antecedente de jan/2026** ([vídeo Ralph Wiggum](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md), `demonstrado` com trechos de opinião): antes da palestra, Matt já põe os feedback loops — type check, testes e CI verde a cada commit — como condição para o [laço Ralph](./ralph-loop.md) funcionar sem supervisão, porque o agente sem memória não sabe de onde veio um erro comitado. O vídeo não fala em TDD, e sim em testes e tipos em geral; na demo, typecheck e testes passam antes do commit. "Types, types, types" e "mais testes, não intermitentes" como próximos investimentos são ênfase dele.

**Vídeo de fev/2026** (["Red Green Refactor is OP With Claude Code"](../sources/2026-02-23_source-matt-pocock-red-green-refactor.md), `opiniao` com a skill na tela), dois meses antes da palestra:
- Segundo Matt, é "reconfortante" ver o agente escrever o teste, vê-lo falhar e depois passar **sem mexer no teste**; para um agente "razoável" isso seria "bem difícil" de fingir. Por isso ele diz não ler boa parte dos testes do loop (passa os olhos nos títulos) e confiar no QA do bloco de trabalho depois do commit para pegar testes ruins.
- **Um teste por vez**: regra da skill dele contra o hábito, que atribui aos LLMs, de escrever dezenas de testes numa só edição ("camadas horizontais") e tentar uma implementação que passe em todos — possível, mas gera "muitos testes ruins", na opinião dele. A regra serve à qualidade dos testes.
- Tipos fortes e testes como **"back pressure"** sobre uma IA ansiosa por gerar código; numa base de baixa qualidade, o LLM "replica o que vê". Opinião dele.
- A citação de Simon Willison (*test-first* como "ótimo encaixe" para agentes) é lida por Matt no vídeo; de segunda mão, não conferida no original.

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

### O que o `SKILL.md` de `tdd` prescreve (nov/2026)

Fonte: [`SKILL.md` do repositório de Matt](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md); instrução do próprio autor, sem avaliação de resultados.

- Testes verificam **comportamento por interfaces públicas**, não implementação.
- **Só em seams pré-acordados com o usuário**: antes de escrever qualquer teste, listar os seams e confirmar; nenhum teste em seam não confirmado.
- Antipadrões: **acoplado à implementação**, **tautológico** (a asserção recalcula o esperado como o código) e **fatiamento horizontal** (todos os testes primeiro); o certo é fatia vertical, um teste → uma implementação, cada teste como tracer bullet.
- Regras do loop: vermelho antes de verde; uma fatia por vez; **"refatoração não faz parte do loop"**, ela pertence à etapa de revisão (`code-review`).
- Auxiliar `mocking.md` (lido em 2026-11-14): **mock só em fronteiras de sistema** (APIs externas, tempo, aleatoriedade; para banco, preferir banco de teste), nunca nos próprios módulos ou colaboradores internos; injeção de dependência e interfaces estilo SDK (uma função por operação externa) para dar forma ao mock.
- Observação do mantenedor: isso difere do "red-green-refactor" da palestra de abril/2026. As fontes são de épocas diferentes; não há como saber por esta fonte se é mudança de posição ou só enquadramento da skill.
- **Fev/2026**: no [vídeo "Red Green Refactor is OP"](../sources/2026-02-23_source-matt-pocock-red-green-refactor.md), a skill de TDD mostrada na tela já tinha o loop teste → falha → código mínimo, com a busca por candidatos a refatoração só **depois** que todos os testes passam (texto lido por ele; trecho com parte `Não resolvido` no bruto). O vídeo ainda chama o ciclo de "red-green-refactor".

## Fontes de Suporte

- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Matt Pocock — Entrevista ao The Pragmatic Engineer](../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md)
- [mattpocock/skills — conteúdo dos SKILL.md](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md) (skill `tdd`)
- [Uncle Bob e Matt Pocock — live sobre fundamentos na era da IA](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md)
- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): feedback loops (tipos, testes, CI verde) como condição do laço AFK (jan/2026)
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): feedback loop visual (navegador) como complemento dos textuais — testes, lint, tipos — no front-end (jan/2026); não defende TDD nem muda o status `draft`
- [Matt Pocock — Red Green Refactor is OP With Claude Code](../sources/2026-02-23_source-matt-pocock-red-green-refactor.md): confiança por ver vermelho → verde, um teste por vez, refatoração depois do loop na skill (fev/2026); `opiniao`

## Conceitos Relacionados

- [ai-driven-development](./ai-driven-development.md)
- [harness](./harness.md)
- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)
- [verificacao-deterministica](./verificacao-deterministica.md)

## Questões Não Resolvidas

- Há evidência (não só opinião de três falas) sobre se TDD estrito melhora o resultado de agentes em comparação com testar depois e verificar por mutação?

## Notas de Atualização

- 2026-11-15: adicionado o vídeo de fev/2026 ("Red Green Refactor is OP") e a nota sobre a refatoração fora do loop já em fev/2026 (ingestão).
- 2026-11-15: adicionado o antecedente de jan/2026 (feedback loops no laço Ralph) (ingestão).

- 2026-11-14: adicionado o que o `SKILL.md` de `tdd` prescreve (ingestão).
- 2026-11-12: adicionada a posição de Uncle Bob (live) e link para verificação determinística (ingestão).
- 2026-11-12: adicionada a posição matizada da entrevista ao The Pragmatic Engineer (ingestão).
- 2026-11-12: status passou a `draft` e os argumentos foram atribuídos a Matt Pocock (higienização, etapa 3).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
