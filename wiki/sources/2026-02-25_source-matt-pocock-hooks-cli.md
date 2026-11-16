---
title: "Matt Pocock — How to actually force Claude Code to use the right CLI (don't use CLAUDE.md)"
descricao: 'Vídeo curto de Matt Pocock (7 min, fev/2026) — trocar instruções do `CLAUDE.md` por hooks determinísticos do Claude Code: prompt que converte as instruções em hooks `PreToolUse`, demo de um script que bloqueia `npm` com exit code 2 e mensagem "use pnpm", o agente se corrige sozinho para `pnpm install`; *instruction budget* de ~500 e regras de estilo como ESLint. `demonstrado` com opinião; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "claude-code", "hooks", "pretooluse", "claude-md", "instruction-budget", "verificacao-deterministica", "pnpm", "eslint", "feedback-loops"]
source_files:
  - raw/sources/2026-02-25_how-to-actually-force-claude-code-to-use-the-right-cli-don_en-corrigida_3CSi8QAoN-s.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/verificacao-deterministica.md
  - ../concepts/rules-e-skills.md
  - ../concepts/melhores-praticas-claude-code.md
  - ./2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ./2026-02-21_source-matt-pocock-claude-worktree.md
  - ./2026-01-15_source-matt-pocock-plan-mode.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — How to actually force Claude Code to use the right CLI (don't use CLAUDE.md)

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 06:51 (25/fev/2026), um dia depois do [Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md), em que [Matt Pocock](../entities/matt-pocock.md) responde a uma pergunta frequente: como fazer o agente usar o comando certo (pnpm em vez de npm, um script wrapper em vez de `npx`, nunca `git push`). Em vez de pôr a regra no `CLAUDE.md`, ele a transforma num **hook** do [Claude Code](../entities/claude-code.md) que bloqueia o comando e devolve uma mensagem que orienta o agente. Mostra um prompt que faz o próprio Claude Code converter as instruções do `CLAUDE.md` em hooks, aplica-o numa sessão nova e testa o resultado ao vivo.

**Classificação**: `demonstrado` como tipo dominante — o prompt é colado numa sessão, o hook é gerado, revisado, configurado e testado na tela, e uma sessão nova mostra o bloqueio e a autocorreção. As razões para preferir hooks (orçamento de instruções, regras negativas) são **opinião** dele. Captura automática corrigida; ficaram `Não resolvidos` o nome exato do script (`block npm.sh`, provavelmente `block-npm.sh`) e algumas frases truncadas; é `Provável` a correção `get push` → `git push`. Começo e fim são autopromoção (newsletter e curso de Claude Code).

## Pontos-Chave

- **Problema**: fazer o agente adotar o seu fluxo, e não o que ele conhece melhor — pnpm × npm, script wrapper × `npx`, proibir certos comandos.
- **Contra a regra no `CLAUDE.md`** (opinião): funciona "na maior parte do tempo", sobretudo num arquivo quase vazio, mas (1) a regra só importa para algumas tarefas e o arquivo a torna global; (2) gasta o *instruction budget*, que segundo ele é de "uns 500" instruções antes de o modelo ficar "menos potente e mais confuso"; (3) não é determinística: reduz a chance de `npm` ou `git push`, mas não impede. Instruções **negativas** ("nunca faça X") ele considera especialmente ruins, porque gastam orçamento sem garantir nada.
- **Hooks**: código determinístico que roda em pontos do ciclo de execução do Claude Code; quando um evento dispara, todos os hooks que casam rodam em paralelo. Exemplos que ele cita: no início da sessão, ao aparecer um diálogo de permissão (para aprovar automaticamente) e o que interessa aqui, o **PreToolUse**, que roda antes de uma chamada de ferramenta e pode bloqueá-la.
- **Prompt de conversão**: pede ao Claude Code que pegue as instruções do `CLAUDE.md` e as transforme em hooks determinísticos no diretório do projeto, só as que der (preferir um comando a outro, proibir comandos), com um script bash separado por hook (sintaxe tirada da documentação, segundo ele), e que (1) confirme com o usuário quais hooks criar, (2) implemente, (3) explique como testar. Ele diz que o prompt está num artigo linkado no vídeo (**não lido pela wiki**).
- **Demo**: o agente propõe dois hooks (bloquear `npm`, bloquear `git push`); ele aceita só o de `npm`, porque já tem bloqueadores de `git push` na configuração global. O script verifica se o comando **começa com** `npm`, escreve "use pnpm not npm" e sai com **exit code 2**; o agente o torna executável (`chmod +x`) e registra em `settings.json` uma chave `hooks` → `PreToolUse` com matcher para a ferramenta Bash, que chama o script.
- **Teste**: ele apaga a instrução do `CLAUDE.md`, abre uma sessão nova e pede `npm install` de React Query; o hook bloqueia ("blocked, use pnpm not npm") e o agente roda `pnpm install` do TanStack React Query sozinho. Resultado: um comando impedido e o agente **redirecionado** ao certo, com uma instrução a menos no arquivo.
- **Generalização** (opinião): tirar regras do orçamento de instruções e aplicá-las de forma determinística, "just in time". Ele faz o mesmo com regras de estilo, por exemplo transformando a aversão a parâmetros posicionais em regras de **ESLint**, para "lint Claude into the right thing" sem precisar instruir. Chama isso de criar *feedback loops* para o Claude.
- **Portabilidade** (opinião, não verificada): a ideia de hooks "não é exclusiva do Claude" e provavelmente se aplica ao Codex e a outros agentes.

## Afirmações/Observações Principais

| Afirmação | Base | Força |
|---|---|---|
| Hook `PreToolUse` com exit code 2 bloqueia o comando e a mensagem leva o agente a trocar `npm` por `pnpm` | Demo ao vivo, duas sessões | Forte para o caso mostrado (demonstrado) |
| Todos os hooks que casam com um evento rodam em paralelo | Fala dele, apoiada na documentação que mostra | Média; segundo o relatório da correção bate com a documentação oficial (não conferido pela wiki) |
| Regra no `CLAUDE.md` não impede o comando, só reduz a chance | Raciocínio dele | Média (opinião plausível, sem medida) |
| *Instruction budget* de ~500 instruções | Heurística dele, sem fonte | Fraca (opinião); um dia antes ele dissera ~300–400, até ~500 em modelos maiores |
| Instruções negativas são especialmente ruins | Opinião | Fraca |
| A ideia de hooks se aplica a Codex e outros agentes | Opinião, "probably" | Fraca, não verificada |

## Notas de Evidência

- Tese e problema: 00:00–00:41. Contra o `CLAUDE.md` e *instruction budget*: 00:41–01:42. Hooks e prompt de conversão: 01:42–03:25. Demo da geração e da configuração: 03:25–05:08. Teste em sessão nova, ESLint e generalização: 05:08–06:09. Fechamento: 06:09–06:51.
- **Possível deslize do falante** (anotado, não corrigido): ele diz que, com isso, as instruções "que temos no `CLAUDE.md`" ficam disponíveis "just in time" e o Claude "progressivamente as descobre". A descoberta progressiva descrita corresponde aos hooks (e a skills), não ao `CLAUDE.md`, que entra em toda requisição. Leitura do mantenedor.
- **Ambiguidade**: ele remove a instrução do `CLAUDE.md` do projeto e logo depois fala em ter eliminado uma instrução do "global `CLAUDE.md`".
- O pacote real é `@tanstack/react-query`; no vídeo só se ouve "pnpm install TanStack React Query".
- Issues no GitHub do claude-code relatam casos em que o exit 2 não bloqueou, segundo o relatório da correção; **não verificado** se foram resolvidas.

## Impacto na Wiki Existente

- [Verificação determinística](../concepts/verificacao-deterministica.md): segunda fonte para o princípio "impor em vez de instruir", agora **demonstrada** e de outro autor (Matt, não Uncle Bob), aplicada a comandos de terminal e a lint. Não muda o status `draft` do núcleo da página (CRAP, mutação, cadeia de agentes), que continua dependendo só de Bob.
- [Claude Code](../entities/claude-code.md): primeira demo de hook na wiki — evento `PreToolUse`, matcher Bash, exit code 2, configuração em `settings.json`.
- [Rules e Skills](../concepts/rules-e-skills.md): terceiro destino para o que não deve ficar no arquivo global — além de skills, hooks (e regras de lint) para o que é determinístico. Novo número do *instruction budget* (~500) um dia depois de ~300–400.
- [Melhores Práticas do Claude Code](../concepts/melhores-praticas-claude-code.md): o hook que bloqueia `git push`, citado de passagem no vídeo de worktree (fev/2026), aparece aqui como parte da configuração global dele.
- [Matt Pocock](../entities/matt-pocock.md): nova seção e cronologia.
- Reforça o candidato a conceito "feedback loops para agentes" em [Questões Abertas](../open-questions.md), ainda sem fonte de outro autor.

## Questões Não Resolvidas

- O exit code 2 no `PreToolUse` bloqueia de forma confiável nas versões atuais? Há relatos de falha (segundo o relatório da correção), não conferidos.
- O *instruction budget* aparece como ~300–400 (até ~500) num dia e ~500 no seguinte; continua sem fonte.
- O artigo com o prompt completo (linkado no vídeo) não foi capturado em `raw/`.
- Os hooks de bloqueio de `git push` da configuração global dele não são mostrados.
- A ideia vale para Codex e outros agentes? Afirmação vaga, não verificada.

## Páginas Relacionadas

- [Matt Pocock](../entities/matt-pocock.md)
- [Claude Code](../entities/claude-code.md): hooks, `settings.json` e o ciclo de execução.
- [Verificação determinística](../concepts/verificacao-deterministica.md): impor por ferramenta em vez de instruir.
- [Rules e Skills](../concepts/rules-e-skills.md): arquivo global mínimo e *instruction budget*.
- [Melhores Práticas do Claude Code](../concepts/melhores-praticas-claude-code.md): prática relatada por Matt, com hook contra `git push`.
- [Matt Pocock — Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md): o vídeo anterior que ele cita, a favor de apagar o `CLAUDE.md`.
- [Matt Pocock — I'm using claude --worktree for everything now](./2026-02-21_source-matt-pocock-claude-worktree.md): menciona o hook que bloqueia `git push`.
- [Matt Pocock — I was an AI skeptic. Then I tried plan mode](./2026-01-15_source-matt-pocock-plan-mode.md): onde o *instruction budget* foi anunciado.
