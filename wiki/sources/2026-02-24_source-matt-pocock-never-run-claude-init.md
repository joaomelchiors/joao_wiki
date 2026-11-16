---
title: "Matt Pocock — Never Run claude /init"
descricao: 'Vídeo de Matt Pocock (10 min, fev/2026) contra o `/init`: roda o comando no próprio repo e corta o `CLAUDE.md` gerado seção por seção (descobrível no código, apodrece, global demais); modelo de uso da janela (system prompt fixo × exploração/implementação/testes flexíveis); *instruction budget* de ~300–400 instruções; direção de comportamento vai para skills; o `CLAUDE.md` dele tem uma linha só. `opiniao` com trecho demonstrado; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "claude-code", "claude-md", "agents-md", "init", "instruction-budget", "engenharia-de-contexto", "skills", "doc-rot", "explore"]
source_files:
  - raw/sources/2026-02-24_never-run-claude-init_en-corrigida_9tmsq-Gvx6g.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/rules-e-skills.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/ai-driven-development.md
  - ../concepts/home-repo.md
  - ./2026-01-15_source-matt-pocock-plan-mode.md
  - ./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ./2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ./2026-07-16_source-matt-pocock-shorts.md
  - ./2026-02-25_source-matt-pocock-hooks-cli.md
tipo_conteudo: opiniao
captura: automatica
---

# Matt Pocock — Never Run claude /init

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 10:37 (24/fev/2026), um dia depois do de red-green-refactor, em que [Matt Pocock](../entities/matt-pocock.md) recomenda **nunca** rodar o comando `/init` do [Claude Code](../entities/claude-code.md) (ou o equivalente de outro agente) e apagar qualquer `CLAUDE.md`/`AGENTS.md` que pareça gerado por agente. Roda o `/init` no repositório de trabalho dele, explica como o conteúdo desse arquivo ocupa a janela de contexto em toda requisição e lê o arquivo gerado cortando seção por seção. Fecha com o que, para ele, deve ficar no arquivo (quase nada), com a ideia de *instruction budget* e com a recomendação de levar a direção de comportamento para skills.

**Classificação**: `opiniao` como tipo dominante — é uma tese pessoal sustentada por heurísticas ("eu penso nisso como…", "kill it"). Há um trecho `demonstrado`: o `/init` roda ao vivo, o sub agente Explore aparece trabalhando e o arquivo gerado é lido na tela. Cita um artigo acadêmico, mas só a conclusão, numa paráfrase. Captura automática corrigida; são `Prováveis` na correção "sub agent", "the LLM", `vite.config.ts`, "repo parser service", "routing" e "Routes execute", e ficaram `Não resolvidos` a expressão do "hot day", `runtime live.r run promise`, a forma exata de "effect reducer" e a frase sobre abrir o arquivo de memória. O fim é autopromoção (newsletter e curso de Claude Code).

## Pontos-Chave

- **Tese** (opinião dele): o arquivo que o `/init` cria "queima tokens", distrai o agente e se desatualiza depressa. Se houver um `CLAUDE.md`/`AGENTS.md` que pareça gerado por agente, apague.
- **Artigo citado**: *Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?* (Gloaguen et al., ETH Zurich / LogicStar.ai, arXiv 2602.11988). Ele lê a conclusão de que requisitos desnecessários nos arquivos de contexto tornam as tarefas mais difíceis e que arquivos escritos por humanos deveriam descrever só requisitos mínimos. **O artigo não foi lido pela wiki**; ver Notas de Evidência sobre a paráfrase.
- **Demo do `/init`** (demonstrado): repositório grande, aplicação React Router com back-end em Effect ("minha stack favorita"), sem `CLAUDE.md`. O comando dispara um passo de exploração por sub agente, que lê arquivos, faz buscas e devolve um resumo ao agente orquestrador. Na sessão dele o Explore rodou em **Sonnet 4.6**.
- **Modelo de uso da janela** (explicação com diagrama na tela): o **system prompt** (ferramentas, MCP servers e tudo o que está no `CLAUDE.md`) é fixo desde o início da sessão; **exploração**, **implementação** e **testes** (feedback loops, debug, que pode "inchar" se algo der errado) são flexíveis. Reduzir a parte fixa dá mais espaço ao trabalho e reduz o custo. Para ele, deixá-la no mínimo é "o melhor resultado possível".
- **Por que o arquivo cresce** (opinião): o conselho comum de acrescentar uma regra sempre que o agente faz algo indesejado (ex.: usar npm em vez de pnpm, um padrão de React) faz o arquivo crescer mesmo sem `/init`. O problema é o **escopo global**: regras de React são inúteis numa sessão só de API e banco ou só de documentação, mas custam tokens em todas.
- **Leitura do arquivo gerado** (demonstrado, julgamento dele): a introdução não serve a ninguém; os comandos são "trivialmente descobríveis" no `package.json`, a fonte de verdade; a seção de arquitetura (React Router com SSR, React 19, React Compiler) é descobrível nos arquivos de configuração, com custo comparável ao da explicação; a seção de serviços Effect cita arquivos concretos e vai **apodrecer** na primeira mudança de implementação, entrando em conflito com o código; rotas, endpoint de clipes e UI com reducers não interessam à maioria das requisições.
- **Sistema de arquivos como documentação** (opinião): uma estrutura de pastas bem feita dá ao agente a impressão da arquitetura a partir da fonte de verdade (o código), não de documentação que apodrece. Exemplo: os serviços Effect aparecem nas pastas por nome.
- ***Instruction budget*** (heurística dele, sem fonte): além da janela de contexto, o LLM tem um "orçamento" de quantas instruções consegue seguir de uma vez — **~300 a 400**, crescendo com modelos maiores mas chegando a "uns 500". Cada frase do arquivo gerado é uma instrução; encher o arquivo de instruções irrelevantes para a tarefa "aleija" o agente antes de começar.
- **Direção de comportamento vai para skills** (opinião): a parte útil do arquivo, como orientar o LLM, deve morar em skills que o agente descobre sem gastar o orçamento logo de cara. Exemplo dele: LLMs relutam em usar reducers no front-end, mas reducers funcionam muito bem com LLMs porque viram uma unidade testável que dirige a UI. Promete outro vídeo sobre skills.
- **O que fica no `CLAUDE.md` dele** (relato): uma única linha, de seis palavras, "você está no WSL no Windows", por causa da resolução de caminhos entre Windows e Linux, que não é intuitiva.
- **Mudança de posição** (relato dele, datado): a regra "em todas as interações e mensagens de commit, seja extremamente conciso e sacrifique a gramática pela concisão" ficou no arquivo "por um tempo"; agora ele acha que ela cabe melhor numa skill, e diz que ainda nem a está usando.
- **Alternativa**: confiar no passo de exploração embutido, que "todo agente deveria fazer agora", para montar o contexto necessário *just in time* antes de implementar.

## Afirmações/Observações Principais

| Afirmação | Base | Força |
| --- | --- | --- |
| O `CLAUDE.md` entra no contexto fixo de toda requisição e custa tokens sempre | Explicação dele; coerente com o curso freeCodeCamp e as melhores práticas já na wiki | Moderada (descrição do mecanismo, sem medição no vídeo) |
| O conteúdo gerado pelo `/init` é descobrível no código e apodrece | Leitura demonstrada de um arquivo, num repositório | Fraca a moderada (um caso, julgamento do autor) |
| Arquivos de contexto gerados por LLM não ajudam | Artigo citado, lido só na paráfrase | Não avaliada pela wiki (artigo não ingerido) |
| *Instruction budget* de ~300–400 (até ~500) instruções | Heurística dele, sem fonte | Fraca (opinião) |
| Direção de comportamento deve ir para skills | Opinião, com um exemplo (reducers) | Fraca (opinião de especialista) |
| O Explore rodou em Sonnet 4.6 | Visto na sessão dele | Observação de uma sessão; não diz qual é o padrão |

## Notas de Evidência

- Tese, artigo e demo: 00:00–01:30. Modelo de uso da janela e crescimento do arquivo: 01:30–04:00. Leitura do arquivo gerado: 04:00–07:00. *Instruction budget*: ~07:00–08:00. Skills, `CLAUDE.md` de uma linha e mudança de posição: 08:00–09:40. Fecho: 09:40–10:37.
- **Paráfrase do artigo**: segundo o relatório da rotina de correção (que conferiu o artigo em fonte externa), a frase lida por ele omite o "should" do original — o artigo diz que os arquivos escritos por humanos *deveriam* descrever só requisitos mínimos, não que já o façam. O mesmo relatório registra como achado principal que arquivos gerados por LLM reduzem levemente a taxa de sucesso (0,5–2%) e aumentam o custo em mais de 20%, enquanto os escritos por humanos ajudam pouco (~4%). Esses números são **de segunda mão** para a wiki: vêm da conferência feita na correção, não de uma ingestão do artigo.
- **Modelo do Explore**: em jan/2026 ele disse que o Explore "costuma usar" o Haiku 4.5 ([vídeo sobre plan mode](./2026-01-15_source-matt-pocock-plan-mode.md)); aqui a sessão dele mostra Sonnet 4.6. Segundo o relatório da correção, a documentação atual diz que o Explore herda o modelo da conversa principal — conferência superficial, **não verificada a fundo**. Os dois relatos são observações de sessões, não contradição entre fontes sobre um padrão documentado.
- Nomes do repositório (serviços de banco, drizzle, "dump service") e detalhes de API Effect vêm de leitura em voz alta e parte deles é frágil na legenda (`Prováveis`/`Não resolvido`); não foram usados como fato.

## Impacto na Wiki Existente

- [Rules e Skills](../concepts/rules-e-skills.md): primeira fonte que **desenvolve** o *instruction budget* com números (prometido no vídeo sobre plan mode) e que formaliza "direção de comportamento em skills, não no arquivo global". Registra a mudança de posição sobre a regra de concisão, que em out/2025 ele "nunca ia tirar" e em jan/2026 mantinha no `CLAUDE.md`.
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): modelo de uso da janela (parte fixa × fases flexíveis) e exploração *just in time* em lugar de documentação pré-carregada; reforça a tese de doc rot dos [shorts](./2026-07-16_source-matt-pocock-shorts.md) (jul/2026), cinco meses antes.
- [Claude Code](../entities/claude-code.md): `/init` gera um `CLAUDE.md` a partir de exploração por sub agente; Explore em Sonnet 4.6 na sessão de fev/2026, ao lado do relato de Haiku 4.5 de jan/2026.
- [Matt Pocock](../entities/matt-pocock.md): nova seção do vídeo e cronologia.
- [AI-Driven Development](../concepts/ai-driven-development.md): antecedente da posição "menos docs, mais código autoexplicativo".
- [Home Repo](../concepts/home-repo.md): tensão a registrar — o home repo (nov/2026) põe ponteiros no `AGENTS.md`, que entram em toda sessão; este vídeo pede o arquivo global no mínimo. Não é contradição declarada pelo autor.

## Questões Não Resolvidas

- O artigo arXiv 2602.11988 não foi lido; os números citados acima são de segunda mão. Candidato a ingestão.
- O *instruction budget* continua sem fonte além do próprio autor; não se sabe de onde vêm os números 300–400 e 500.
- Qual modelo o Explore usa por padrão: Haiku 4.5 (jan/2026), Sonnet 4.6 na sessão de fev/2026, ou o da conversa principal?
- A regra de concisão saiu do arquivo e "ainda não" está numa skill: ele voltou a usá-la?

## Páginas Relacionadas

- [Matt Pocock](../entities/matt-pocock.md)
- [Claude Code](../entities/claude-code.md)
- [Rules e Skills](../concepts/rules-e-skills.md): *instruction budget* e regras no arquivo global × skills.
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): parte fixa × fases flexíveis da janela.
- [AI-Driven Development](../concepts/ai-driven-development.md): menos docs, código como fonte de verdade.
- [Home Repo](../concepts/home-repo.md): `AGENTS.md` com ponteiros, em tensão com o arquivo global mínimo.
- [Matt Pocock — I was an AI skeptic. Then I tried plan mode](./2026-01-15_source-matt-pocock-plan-mode.md): onde o *instruction budget* foi anunciado e o Explore associado ao Haiku 4.5.
- [Matt Pocock — How I use Claude Code for real engineering](./2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): memória de ~43 linhas e a regra de concisão em out/2025.
- [Matt Pocock — Most devs don't understand how context windows work](./2025-10-22_source-matt-pocock-janela-de-contexto.md): cautela com MCP e rules longas (out/2025).
- [Matt Pocock — Frontend is HARDER for AI than backend](./2026-01-12_source-matt-pocock-frontend-feedback-visual.md): skill como "`AGENTS.md` sob demanda".
- [Matt Pocock — Quatro shorts](./2026-07-16_source-matt-pocock-shorts.md): "delete (most of) your docs", tese posterior sobre doc rot.
- [Matt Pocock — How to actually force Claude Code to use the right CLI](./2026-02-25_source-matt-pocock-hooks-cli.md): o vídeo do dia seguinte, que tira regras do `CLAUDE.md` e as transforma em hooks.
