---
title: "Matt Pocock — I'm using claude --worktree for everything now"
descricao: 'Vídeo de Matt Pocock (8 min, fev/2026) — primeiras impressões do suporte nativo a git worktrees no Claude Code: demo de `git worktree add/remove` com VS Code, `claude --worktree` (pasta `.claude/worktrees/`, nome aleatório, escolha de manter ou remover ao sair), o "paper cut" do push que pode ir para main, subagentes com worktree sob pedido e paralelização "mais barata". `demonstrado` com opinião; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "claude-code", "git-worktree", "worktree", "paralelizacao", "subagentes", "git", "vs-code", "hooks"]
source_files:
  - raw/sources/2026-02-21_i-m-using-claude-worktree-for-everything-now_en-corrigida_yv8VZpov8bk.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/ai-driven-development.md
  - ../concepts/melhores-praticas-claude-code.md
  - ../concepts/tipos-de-skill.md
  - ../concepts/agentes-de-ia.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-01-05_source-matt-pocock-ralph-wiggum.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — I'm using claude --worktree for everything now

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 7:57 (fev/2026) em que Matt Pocock testa pela primeira vez o suporte embutido a **git worktrees** no Claude Code, anunciado como forma de agentes rodarem em paralelo sem interferir um no outro. Ele primeiro mostra worktrees "à mão" (`git worktree add`, VS Code reconhecendo a worktree no painel de source control, PR e merge, `git worktree remove`), depois roda `claude --worktree`, que cria a worktree em `.claude/worktrees/` com nome aleatório e oferece manter ou remover ao sair. Relata um "paper cut": o push pode acabar indo para o branch de origem (main) se o agente não empurrar para o branch nomeado. Conclui que pretende usar worktrees em toda sessão e que a ferramenta torna a paralelização "mais livre".

**Classificação**: `demonstrado` como tipo dominante: comandos e sessões rodam na tela. Há mistura com `opiniao` (entusiasmo, "não sei por que você não usaria sempre", "paralelização grátis") e com relato de comportamento que o próprio autor diz não entender bem. O trecho final é autopromoção (curso de Claude Code e newsletter). Captura automática corrigida; nomes de arquivo de teste e algumas frases ficaram em `Não resolvido`, e os comandos `git` homófonos e `rm -rf` estão em `Prováveis` (ver "Questões Não Resolvidas").

## Pontos-Chave

- **Worktree à mão** (demonstrado): no repositório principal, em main, `git worktree add` cria uma pasta irmã com estado git próprio, num branch com o nome da worktree. Um arquivo criado ali aparece no painel de source control do VS Code como uma segunda árvore, ao lado do repositório principal; dá para fazer commit, publicar o branch e abrir PR sem sair da IDE. Depois do merge, um `git pull` no diretório principal traz a mudança.
- **Remover**: apagar a pasta (`rm -rf`, transcrição provável) ou `git worktree remove`; segundo ele, "tenho quase certeza de que faz mais ou menos a mesma coisa" (não verificado; a fonte não mostra diferença).
- **`claude --worktree`** (demonstrado): cria a worktree em `.claude/worktrees/<nome aleatório>`; usa `git worktree` por baixo. Dentro dela ele pede para apagar um arquivo, fazer commit, push e PR. Ao sair (`Ctrl+C` duas vezes), o Claude Code pergunta se mantém ou remove a worktree; remover sem ter feito push perde as mudanças e o histórico de commits, segundo ele.
- **"Paper cut" no branch** (relato, comportamento não esclarecido): na primeira tentativa ele vê o commit em main com `git status` e `git log` e conclui que a worktree do Claude "não se comporta como a do git". Numa segunda sessão, o `git status` mostra o branch `worktree-delightful-dazzling-sketch` "up to date with origin main", e o push só cria um branch novo quando ele roda `git push origin worktree-delightful-dazzling-sketch`. A lição dele: o agente precisa fazer push para o branch nomeado; senão, "por padrão", iria para o branch de onde a worktree foi criada. Se main não for protegido, haveria risco de push acidental para main.
- **Hook de segurança**: um hook dele bloqueou o `git push` do agente e o Claude Code devolveu o comando para ele rodar manualmente (demonstrado, sem mostrar o hook).
- **Ciclo de vida por agente** (opinião): o que agrada a ele é a worktree ficar presa a um agente e ao trabalho dele, do início ao fim. "Não sei por que você não usaria worktrees toda vez que usa o Claude."
- **Subagentes com worktree** (segundo o anúncio, não demonstrado): subagentes também suportariam worktrees, cada um abrindo PR de volta para main, orquestrados de cima. Segundo ele, é preciso pedir explicitamente ao Claude que use worktrees para os agentes; não acontece automaticamente.
- **Tese de fechamento** (opinião): gosta quando uma ferramenta "absorve a complexidade de outra" e gerencia o ciclo de vida dela. Repete que programar com IA não é tão diferente de programar sem, mas exige ensinar ao agente os fundamentos (TDD, paralelização eficaz, planejamento com feedback rápido), tema do curso de Claude Code que anuncia.

## Afirmações/Observações Principais

- **Worktree como unidade de isolamento de um agente**: o vídeo é a primeira fonte desta wiki em que Matt usa worktrees diretamente no Claude Code, antes do Sandcastle (abr/2026), que cria worktrees em sandboxes Docker. Força: demonstrado o mecanismo; a vantagem para paralelização é opinião dele, sem medida.
- **O push para main é relato, não fato estabelecido.** A observação da rodada de correção aponta que a documentação do Claude Code descreve um branch `worktree-<nome>` (o próprio vídeo mostra `worktree-delightful-dazzling-sketch`) e que o primeiro `git status` "em main" pode ter rodado no diretório principal. O que a fonte sustenta com segurança: o branch criado rastreava `origin/main`, e um `git push` sem argumentos de fato não criou o branch remoto novo no caso dele. Força: fraca para o "commit em main"; o próprio autor diz que quem entende melhor de worktrees "provavelmente entende mais do que eu".
- **Proteger main e mandar o agente empurrar para o branch nomeado** é a mitigação que ele sugere, além de dizer que "dá para pedir isso no prompt". Força: recomendação de um praticante.
- **Paralelização mais barata**: converge com a ênfase dele em paralelização em fontes posteriores (Sandcastle na palestra de abr/2026) e convive com a posição posterior de que o laço simples supera enxames de agentes ([Laço Ralph](../concepts/ralph-loop.md)). Não há contradição: aqui ele fala de isolar sessões, não de orquestrar dezenas de agentes.

## Notas de Evidência

- 00:00–00:47: anúncio do suporte nativo, `git status` em main, `git worktree add`.
- 00:47–01:59: pasta da worktree, VS Code, commit, publicar branch, PR.
- 01:59–03:58: `git pull` no principal, remoção da worktree, `claude --worktree` e sessão dentro dela.
- 03:58–05:57: manter/remover ao sair, "paper cut" do branch, segunda sessão, hook que bloqueia push, push para o branch nomeado.
- 05:57–07:57: opinião sobre ciclo de vida e paralelização, subagentes com worktree, curso e newsletter.

## Impacto na Wiki Existente

- [Matt Pocock](../entities/matt-pocock.md): novo vídeo na cronologia (fev/2026), entre o plan mode (jan) e a palestra com Sandcastle (abr); primeiro registro do uso de worktrees no Claude Code.
- [Claude Code](../entities/claude-code.md): flag `--worktree` (pasta `.claude/worktrees/`, nome aleatório, manter/remover ao sair) e subagentes com worktree, por esta fonte.
- [AI-Driven Development](../concepts/ai-driven-development.md), paralelização: antecedente do Sandcastle com worktrees nativas do Claude Code.
- [Melhores Práticas Operacionais do Claude Code](../concepts/melhores-praticas-claude-code.md): práticas relatadas por Matt (worktree por sessão, push para branch nomeado, proteger main).
- [Tipos de Skill](../concepts/tipos-de-skill.md): a skill `paralelo.js` que cria worktrees, citada lá, faz por script o que a flag passa a fazer de forma nativa (relação apenas registrada).
- Não contradiz conclusões existentes.

## Questões Não Resolvidas

- `Não resolvido` no bruto: nome do arquivo de teste (`fooar.md`, `fubar.mmd`, provavelmente foobar.md); o nome gerado `cheerful coalescing worth`; "ping up a new work tree" (talvez "spin up"); "a specific uh name branch" (provável "named branch"); duas frases interrompidas. Não citar como fato.
- `Prováveis`: `rm -rf`, "ask Claude", Cursor e os comandos `git` (homófono `get`).
- O commit da primeira sessão foi mesmo para main, ou o `git status` rodou no diretório principal? E por que o branch `worktree-<nome>` rastreia `origin/main` e o push sem argumento não criou o remoto? Conferir na documentação do Claude Code (code.claude.com/docs/en/worktrees) e no git (`push.default`, upstream).
- Subagentes com worktree exigem pedido explícito? Afirmação de fonte única, sobre o anúncio de fev/2026.
- `git worktree remove` × apagar a pasta: a fonte não mostra a diferença (o git mantém metadados da worktree até `git worktree prune`; não verificado aqui).

## Páginas Relacionadas

- [Matt Pocock](../entities/matt-pocock.md): autor; posições sobre paralelização.
- [Claude Code](../entities/claude-code.md): a ferramenta e a flag `--worktree`.
- [AI-Driven Development](../concepts/ai-driven-development.md): paralelização com Sandcastle, que também usa worktrees.
- [Palestra Essential Skills](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): Sandcastle e worktrees em Docker, dois meses depois.
- [Matt Pocock — Ralph Wiggum](./2026-01-05_source-matt-pocock-ralph-wiggum.md): laço AFK do mês anterior, sem worktrees.
- [Melhores Práticas Operacionais do Claude Code](../concepts/melhores-praticas-claude-code.md): onde entram as práticas relatadas.
- [Tipos de Skill](../concepts/tipos-de-skill.md): skill de terceiros que cria worktrees por script.
- [Agentes de IA](../concepts/agentes-de-ia.md): subagentes e paralelização.
