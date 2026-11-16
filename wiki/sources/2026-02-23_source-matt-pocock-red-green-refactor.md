---
title: "Matt Pocock — Red Green Refactor is OP With Claude Code"
descricao: 'Vídeo curto de Matt Pocock (5 min, fev/2026) — red-green-refactor como forma "ridiculamente fácil" de melhorar agentes: ver o teste falhar e depois passar dá confiança para só passar os olhos nos testes; a skill `tdd` dele (um teste por vez contra a "enxurrada" horizontal, refatoração depois de tudo verde); feedback loops como back pressure; código ruim é replicado pelo LLM. `opiniao` com trecho demonstrado; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "tdd", "red-green-refactor", "testes", "feedback-loop", "claude-code", "skills", "qualidade-de-codigo", "simon-willison", "kent-beck"]
source_files:
  - raw/sources/2026-02-23_red-green-refactor-is-op-with-claude-code_en-corrigida_hYZdIwFIy-c.md
related_pages:
  - ../concepts/tdd.md
  - ../entities/matt-pocock.md
  - ../concepts/ai-driven-development.md
  - ../concepts/verificacao-deterministica.md
  - ./2026-02-21_source-matt-pocock-claude-worktree.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ./2026-11-14_source-matt-pocock-skills-skill-md.md
  - ./2026-01-05_source-matt-pocock-ralph-wiggum.md
tipo_conteudo: opiniao
captura: automatica
---

# Matt Pocock — Red Green Refactor is OP With Claude Code

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 5:19 (23/fev/2026) em que Matt Pocock apresenta red-green-refactor como "um jeito ridiculamente fácil" de ter resultados melhores de um agente de código. Parte do guia de Simon Willison (capítulo "Red/green TDD") e de Kent Beck (*Extreme Programming Explained*), explica o que significam vermelho, verde e refatorar, e diz por que o ciclo importa mais com IA: ver o teste falhar e depois passar, sem que o agente mexa no teste, dá a ele confiança para não ler a maior parte dos testes. Mostra na tela a própria skill de TDD (loop incremental, um teste por vez, procurar candidatos a refatoração depois que tudo passa) e fecha com feedback loops como "back pressure" e com a tese de que o LLM replica a qualidade da base de código.

**Classificação**: `opiniao` como tipo dominante — é heurística pessoal ("eu acho reconfortante", "na minha opinião", "testes ruins"). Há um trecho `demonstrado` curto: a skill de TDD aparece na tela e ele lê as regras dela, sem rodar o agente. Captura automática corrigida; dois inícios de frase cortados ("In other words") e "10 minutes ago" (provavelmente "10 years ago") ficaram em `Não resolvido`, e "skim them" está em `Prováveis`. O fim é autopromoção (newsletter, skills e um curso de Claude Code anunciado em fev/2026).

## Pontos-Chave

- **Origem da prática** (explicação): red-green-refactor tem "uns 20, 30 anos"; Kent Beck como defensor mais prolífico do TDD, em *Extreme Programming Explained*; XP datado por ele, de forma aproximada, nos "anos 90, 2000". A citação de Simon Willison — a forma mais disciplinada de TDD é *test-first*, e isso se encaixa muito bem em agentes de código — é **de segunda mão**: Matt lê o guia na tela, a wiki não leu o original.
- **Vermelho**: escrever um teste que falha, e o CI fica vermelho. Exemplo dele: testar um fetch por SDK antes de existir o método da API e o schema do banco.
- **Verde**: implementação **mínima** que faz o CI voltar ao verde. **Refatorar**: com o CI verde, dá para reorganizar o código com testes que avisam se algo quebrou.
- **Por que importa mais com IA** (opinião): é "reconfortante" ver o agente fazer o ciclo — teste falha, implementação sem mexer no teste, teste passa. Segundo ele, para um agente "razoável" é "bem difícil" fingir isso.
- **Consequência prática** (relato dele): não lê boa parte dos testes do loop; passa os olhos nos títulos (transcrição provável) e não lê necessariamente as implementações. Depois do commit no branch, faz QA do bloco de trabalho e diz que, nesse ponto, costuma achar testes ruins, se houver.
- **A skill de TDD na tela** (demonstrado, só leitura): loop incremental — para cada comportamento restante, escrever o próximo teste, ver falhar, escrever o código mínimo para passar. Regra: **um teste por vez**. Ao fim do loop: "depois que todos os testes passarem, procure candidatos a refatoração" (detalhe deixado para outro vídeo).
- **Por que um teste por vez** (opinião): LLMs "adoram" criar camadas horizontais — 90 testes numa só edição e depois tentar uma implementação de uma vez que passe em todos; possível, mas gera "muitos testes ruins", na opinião dele. Um teste e uma implementação de cada vez produzem testes que guiam a implementação; a regra existe para melhorar a **qualidade dos testes**.
- **Feedback loops como back pressure** (opinião): a IA é ansiosa para gerar código e achar a solução mais rápida; é preciso impor "back pressure" para mantê-la estável — tipos fortes (TypeScript), testes unitários e afins.
- **Qualidade de código importa mais que nunca** (opinião): numa base de baixa qualidade, o LLM replica o que vê; "fica feliz em brincar na lama se o que você tem é lama".

## Afirmações/Observações Principais

- **Ver vermelho → verde como substituto de ler os testes**: é a afirmação central e é opinião dele, sem medida. Força: relato de praticante; a salvaguarda declarada é o QA depois do commit. Conversa com o alerta posterior dele sobre testes tautológicos (entrevista de set/2026) — o ciclo dificulta, segundo ele, mas não impede testes ruins.
- **Refatoração já ficava fora do loop em fev/2026**: na skill mostrada, o loop é teste → falha → código mínimo, e a busca por refatoração vem "depois que todos os testes passam". Isso aproxima o vídeo do `SKILL.md` de nov/2026 ("refatoração não faz parte do loop") e ajuda a ler a diferença registrada em [TDD](../concepts/tdd.md) entre a palestra de abr/2026 ("red-green-refactor") e a skill: pelo menos desde fev/2026 o nome do ciclo e a estrutura da skill convivem, com a refatoração como etapa posterior. Força: demonstrado (texto da skill na tela), mas só um trecho é lido; a frase sobre o loop tem parte `Não resolvido` no bruto.
- **"Um teste por vez" é a mesma ideia do antipadrão "fatiamento horizontal"** que o `SKILL.md` de nov/2026 nomeia e das fatias verticais da palestra de abr/2026; aqui aparece como regra da skill três meses antes.
- **"LLM replica o que vê"**: converge com a ênfase dele em fundamentos e módulos profundos em fontes posteriores; afirmação de opinião, sem evidência no vídeo.

## Notas de Evidência

- 00:00–00:31: red-green-refactor, guia de Simon Willison, Kent Beck e XP.
- 00:31–01:19: citação de Willison (segunda mão), definição de vermelho e o exemplo do SDK.
- 01:19–02:39: verde mínimo, refatorar, "por que agora", confiança em ver vermelho → verde, passar os olhos nos testes.
- 02:39–03:59: QA depois do commit, a skill de TDD na tela, um teste por vez, 90 testes horizontais.
- 03:59–05:19: candidatos a refatoração depois do loop, back pressure, código como lama, newsletter e curso.

## Impacto na Wiki Existente

- [TDD](../concepts/tdd.md): nova fonte de opinião de Matt (fev/2026), anterior à palestra; argumento da confiança por ver vermelho → verde; regra de um teste por vez; refatoração depois do loop já em fev/2026, o que matiza a observação sobre a diferença entre palestra e `SKILL.md`. O status `draft` não muda (mais uma fonte `opiniao`).
- [Matt Pocock](../entities/matt-pocock.md): novo vídeo na cronologia (2026-02-23), dois dias depois do vídeo de worktrees.
- [AI-Driven Development](../concepts/ai-driven-development.md): a skill de TDD já existia em fev/2026 com a refatoração fora do loop; entra como fonte de suporte e no item de TDD de "Skills hoje no repositório".
- [Verificação determinística](../concepts/verificacao-deterministica.md): "back pressure" por tipos e testes como posição de Matt, a registrar em "Visões Concorrentes" ao lado de Bob (Bob verifica depois do fato; Matt confia no ciclo e no QA).
- Não contradiz conclusões existentes; reforça a posição de Matt de abr/2026 e antecede a posição "mista" de set/2026.

## Questões Não Resolvidas

- `Não resolvido` no bruto: "In other words" cortado em dois pontos; "10 minutes ago" (provável "10 years ago"); "write then the minimal code to pass, and then pass" (truncado ou lido da skill). Não citar como fato.
- `Prováveis`: "skim them" (passar os olhos), sem confirmação.
- As frases atribuídas a Simon Willison não foram conferidas no guia original (simonwillison.net, capítulo "Red/green TDD" de *Agentic Engineering Patterns*); a wiki não tem fonte dele.
- O texto completo da skill de TDD de fev/2026 não aparece no vídeo; comparar com o histórico do repositório `mattpocock/skills` para datar a mudança "refatoração fora do loop".
- O curso de Claude Code anunciado (fev/2026): foi lançado? Não verificado.

## Páginas Relacionadas

- [TDD](../concepts/tdd.md): conceito em que o vídeo entra como fonte de opinião.
- [Matt Pocock](../entities/matt-pocock.md): autor.
- [AI-Driven Development](../concepts/ai-driven-development.md): skill `tdd` no fluxo dele.
- [Verificação determinística](../concepts/verificacao-deterministica.md): feedback loops e back pressure × verificação depois do fato.
- [Matt Pocock — claude --worktree](./2026-02-21_source-matt-pocock-claude-worktree.md): vídeo de dois dias antes, que já anunciava o curso sobre fundamentos (TDD entre eles).
- [Palestra Essential Skills](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): TDD como "essencial", dois meses depois.
- [Entrevista ao The Pragmatic Engineer](./2026-09-17_source-matt-pocock-pragmatic-engineer.md): posição "mista" sobre TDD e testes tautológicos.
- [mattpocock/skills — SKILL.md](./2026-11-14_source-matt-pocock-skills-skill-md.md): texto atual da skill `tdd`.
- [Matt Pocock — Ralph Wiggum](./2026-01-05_source-matt-pocock-ralph-wiggum.md): feedback loops como condição do laço AFK (jan/2026).
