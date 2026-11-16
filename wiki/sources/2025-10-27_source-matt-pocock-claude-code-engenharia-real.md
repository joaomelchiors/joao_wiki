---
title: "Matt Pocock — How I use Claude Code for real engineering"
descricao: 'Vídeo de Matt Pocock (10 min, out/2025) — sessão real no Claude Code: plan mode com sub agente Explore e perguntas, plano conciso com questões não resolvidas (regras em `/memory`), plano multifase, execução em *accept edits* conferindo `/context`, plano salvo em GitHub issue via `gh` para limpar o contexto e retomar, status line customizada. `demonstrado`; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "claude-code", "plan-mode", "plano-multifase", "janela-de-contexto", "github-issues", "memory", "rules"]
source_files:
  - raw/sources/2025-10-27_how-i-use-claude-code-for-real-engineering_en-corrigida_kZ-zzHVUrO4.md
related_pages:
  - ./2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ../entities/claude-code.md
  - ../entities/matt-pocock.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/rules-e-skills.md
  - ../concepts/ai-driven-development.md
  - ../concepts/melhores-praticas-claude-code.md
  - ../concepts/spec-driven-development.md
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ./2026-04-17_source-matt-pocock-live-projeto-do-zero.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-08-05_source-claude-code-full-course-freecodecamp.md
  - ./2026-01-15_source-matt-pocock-plan-mode.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — How I use Claude Code for real engineering

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 10:11 (out/2025) em que Matt Pocock grava uma sessão real no Claude Code: adicionar um comando a uma CLI interna dos cursos AI Hero, uma feature que ele prevê maior que uma janela de contexto. O fluxo mostrado é plan mode → perguntas de esclarecimento → plano conciso com "questões não resolvidas" → plano **multifase** → execução fase a fase em *accept edits*, conferindo `/context` entre fases → plano salvo como **GitHub issue** via `gh` → limpar o contexto e retomar a fase 4 a partir da issue. Ele também mostra o arquivo de memória do usuário e a status line customizada.

**Classificação**: `demonstrado`. É uma sessão executada ao vivo, com código gerado e revisado no diff do VS Code. As preferências ("paranoia" com contexto, `accept edits` agressivo depois do planejamento, issues na nuvem) são `opiniao` dele, e a afirmação sobre a status line é datada. Captura automática corrigida; quatro correções são só `Prováveis` e sete passagens ficaram em `Não resolvido` (ver "Questões Não Resolvidas"). Os números de contexto foram lidos da tela de passagem e devem ser tratados como aproximados.

## Pontos-Chave

1. **Ponto de partida.** Um prompt inicial ditado ao microfone com uma ferramenta de ditado, "sem pensar muito". Plan mode ativado com `Shift+Tab`. Regra dele: em trabalho grande, sempre criar um plano antes.
2. **Exploração antes do plano.** O Claude Code disparou um sub agente Explore para mapear a estrutura da CLI e depois fez perguntas de esclarecimento em formato de formulário de múltipla escolha (opção de CLI, argumento posicional × opção obrigatória, casamento estrito × flexível de números de exercício). Matt responde e submete.
3. **Plano conciso.** O plano saiu curto e fácil de ler por causa de uma regra no arquivo de memória do usuário (`/memory`), cerca de 43 linhas: "em todas as interações e mensagens de commit, seja extremamente conciso e sacrifique a gramática pela concisão". Ele diz que é a sua regra favorita e que nunca vai tirá-la.
4. **Questões não resolvidas.** Outra regra da memória: no fim de cada plano, listar as questões não resolvidas, também de forma extremamente concisa. Ele responde por ditado e o Claude refaz o plano até não restar nenhuma. Nenhum código foi escrito até aqui.
5. **Outras regras da memória (específicas do fluxo dele).** Comentários de PR, Changesets, GitHub CLI como meio principal de interagir com o GitHub, prefixo "Matt" nos nomes de branch. Ele chama o conjunto de "dicas muito leves".
6. **Plano multifase.** Com a sensação de que a feature estouraria a janela, ele escolhe "keep planning" e pede "make the plan multi-phase", para dividir o trabalho entre várias janelas de contexto.
7. **Checagem de contexto.** Antes de executar, `/context` mostrou cerca de 33k tokens usados (o espaço livre aparece como "83.7", sem unidade; ver Questões). Depois da fase 1, uns 3k a mais.
8. **Execução em *accept edits*.** Troca para o modo de aceitar edições e pede "execute phase one". Primeiro atrito: o modelo ainda achava estar em plan mode; ele repete o pedido. Permite builds com pnpm sem perguntar de novo. Revisa só no fim de cada fase, no diff do VS Code, e faz commit ou stage entre fases para separar o que cada uma acrescentou. O Claude deixou um TODO para a fase 2 no código, o que ele considera útil como "dica" para a fase seguinte.
9. **Sair e voltar.** Fecha o Claude com `Ctrl+C` duas vezes, roda `code .` e retoma a conversa (a fala diz "Claude continue"; provavelmente `claude --continue`, não confirmado).
10. **Status line.** Customizada para mostrar o repo relativo à pasta de repos, o branch e a contagem de arquivos staged, unstaged e novos. Ele diz que gostaria que o Claude Code expusesse os tokens usados para pôr na status line, algo que segundo ele o Cursor faz muito bem (out/2025).
11. **Mudança fora do agente.** Um auto formatter alterou arquivos ao salvar. Como o Claude Code não fica sabendo, ele manda o agente reler os arquivos, de forma direta, e o agente só relê.
12. **Plano como GitHub issue.** Pede uma issue com o plano atual e os itens já marcados; o agente chama `gh issue create`. Com o plano fora da janela, ele limpa o contexto: sobram cerca de 16k tokens (arquivos de memória, ferramentas de sistema, system prompt) e nenhuma mensagem. Então pede para buscar a issue 24 e executar a fase 4.
13. **Plan mode × accept edits depois de limpar.** Pondera que plan mode forçaria exploração, talvez necessária com o contexto vazio, mas escolhe *accept edits* e deixa o agente partir do plano. O agente leu o arquivo certo sem muita exploração, e a fase 5 aproveitou a issue que já estava na janela.
14. **Dicas finais (dele).** Ter na memória a instrução de ser extremamente conciso; pedir questões não resolvidas no fim de cada plano; usar o GitHub CLI para criar issues e compartilhar contexto entre janelas. Diz que é assim que faz todo o seu código, inclusive no AI Hero e no Evalite.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| Plan mode + exploração + perguntas antes de qualquer código | Demonstrado. Antecede em seis meses o *grilling* da [live de abr/2026](./2026-04-17_source-matt-pocock-live-projeto-do-zero.md) e da [palestra](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md); aqui as perguntas vêm do próprio plan mode, sem skill |
| Regra "be extremely concise, sacrifice grammar for concision" na memória do usuário | Heurística dele, com efeito visível na demo (plano curto). Primeira fonte da wiki com o conteúdo de um arquivo de memória do Claude Code |
| Pedir questões não resolvidas no fim de cada plano | Heurística dele, demonstrada. Parente do "for each question, provide your recommended answer" do Grill Me, mas mais leve |
| Plano multifase para atravessar várias janelas de contexto | Demonstrado. A palavra "multihase" de um dos trechos é correção `Provável`, mas o pedido "make the plan multi-phase" aparece várias vezes na fala |
| Persistir o plano numa GitHub issue (via `gh`) e limpar o contexto | Demonstrado. Alternativa a `/compact`, coerente com a preferência por `/clear` do [vídeo anterior](./2025-10-22_source-matt-pocock-janela-de-contexto.md). Antecede as issues locais (`issues/*.md`) do fluxo de 2026 |
| Issues na nuvem permitem comentários e contribuições assíncronas | Opinião dele |
| Depois de planejar, dá para ser "bem agressivo" com *accept edits* | Opinião dele; condicionada a já entender a implementação |
| Números: ~33k usados antes de executar; fase 1 ~3k; ~16k após limpar | Lidos da tela de passagem; ordem de grandeza. O "83.7" de espaço livre está em `Não resolvido` (unidade ausente) |
| Claude Code não mostra tokens usados na status line; o Cursor faz isso bem | Afirmação datada (out/2025), não verificada; pode ter mudado. Converge com a status line com tokens do [curso freeCodeCamp](./2026-08-05_source-claude-code-full-course-freecodecamp.md), que lá é customização do instrutor |
| O Claude Code não percebe alterações feitas fora dele (formatter) | Observação demonstrada; a instrução exata dada ao agente está em `Não resolvido` |
| Retomar a conversa após sair com `Ctrl+C` duas vezes | Demonstrado o efeito; o comando exato ("Claude continue") está em `Não resolvido` |

## Notas de Evidência

- Prompt ditado, plan mode, intenção de plano primeiro: 0–10%.
- Sub agente Explore, perguntas de esclarecimento, plano conciso com questões não resolvidas: 10–25%.
- `/memory` e regras do usuário, segundo plano, pedido de plano multifase, `/context` (~33k), início da fase 1: 25–50%.
- Status line, build com pnpm, saída e retomada, revisão no VS Code, TODO para a fase 2, fases 2 e 3, desejo de tokens na status line, formatter: 50–75%.
- GitHub issue via `gh issue create`, limpeza do contexto (~16k), fase 4 a partir da issue 24: 75–90%.
- Fase 5, resumo do fluxo e dicas finais, Evalite e AI Hero: 90–100%.

## Impacto na Wiki Existente

- **[Claude Code](../entities/claude-code.md)**, seção "Fatos-Chave": primeira demo na wiki de plan mode em uso real (sub agente Explore, perguntas em formulário, opções *auto-accept* / aprovar manualmente / *keep planning*), de `/memory` (memória do usuário × do projeto), de retomar a conversa depois de sair e de status line customizada. Também o atrito "ainda acha que está em plan mode".
- **[Matt Pocock](../entities/matt-pocock.md)**: quarta fonte de out/2025, a primeira dele na wiki **mostrando** o fluxo com agente de código (as três anteriores são da série "Most devs don't understand…"). Entra na cronologia e numa seção própria; as preferências são opinião dele.
- **[Engenharia de Contexto](../concepts/engenharia-de-contexto.md)**: técnica demonstrada de dividir o trabalho em fases e externalizar o plano (issue) para limpar a janela sem perder o estado, complementar à poda por `resume` (abr/2026) e à preferência por `/clear`.
- **[Rules e Skills](../concepts/rules-e-skills.md)**: exemplo concreto de rules de usuário curtas (~43 linhas) que mudam o formato da saída; coerente com a cautela dele com rules longas (vídeo de out/2025).
- **[AI-Driven Development](../concepts/ai-driven-development.md)**, seção "Fluxo Completo de Desenvolvimento": forma inicial (out/2025) do fluxo plano → issue → implementação, ainda sem PRD, sem Grill Me e sem paralelização. É interpretação do mantenedor tratá-la como antecessora do fluxo de 2026; o vídeo não faz essa ligação.
- **[Spec-Driven Development](../concepts/spec-driven-development.md)**: o plano multifase com itens marcados numa issue lembra a spec em checklist. Ligação do mantenedor; Matt não usa o termo.
- Sem contradição com conclusões existentes.

## Questões Não Resolvidas

- **Não resolvido no bruto**: nome do arquivo criado (`get diffs.ts, ts` e depois `get diffs.js`); `I can't be asked`; `83.7 free space` (provável "83.7%", unidade ausente); `Claude continue` (provável `claude --continue`); `And note how it in followed my instructions`; `pull the files into your context` (início possivelmente cortado). Nenhum muda os pontos-chave, mas não citar esses trechos como fato.
- **Prováveis** (frágeis): `multihase` → multi-phase; `autoaccedit` → auto-accept edits; `in updated file` → an updated file; `cursor` → Cursor.
- O Claude Code passou a expor tokens usados para a status line depois de out/2025? Conferir na documentação.
- Qual ferramenta de ditado ele usava em out/2025? A live de abr/2026 cita Wispr Flow; aqui não é nomeada.
- Há em `raw/` um vídeo posterior dele sobre plan mode (`2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode`), ainda não ingerido, que pode confirmar ou atualizar este fluxo.

## Páginas Relacionadas

- [Matt Pocock — Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md): a regra de concisão que aqui ele "nunca vai tirar" sai do arquivo global, segundo ele, para uma skill (fev/2026).
- [Claude Code](../entities/claude-code.md): plan mode, `/memory`, `/context`, status line, retomada de sessão
- [Matt Pocock](../entities/matt-pocock.md): autor; fluxo de trabalho em out/2025
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): dividir em fases e externalizar o plano para limpar a janela
- [Rules e Skills](../concepts/rules-e-skills.md): rules de usuário curtas que mudam o formato da saída
- [AI-Driven Development](../concepts/ai-driven-development.md): o fluxo de 2026 (Grill Me → PRD → issues)
- [Melhores práticas do Claude Code](../concepts/melhores-praticas-claude-code.md): verificação e gestão de sessões
- [Spec-Driven Development](../concepts/spec-driven-development.md): plano em checklist como contexto por tarefa
- [Matt Pocock — janela de contexto](./2025-10-22_source-matt-pocock-janela-de-contexto.md): vídeo anterior, `/clear` × `/compact`
- [Live "projeto do zero"](./2026-04-17_source-matt-pocock-live-projeto-do-zero.md) e [palestra](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md): versão posterior do método
- [Curso freeCodeCamp](./2026-08-05_source-claude-code-full-course-freecodecamp.md): modos de permissão e status line customizada
- [Matt Pocock — I was an AI skeptic. Then I tried plan mode](./2026-01-15_source-matt-pocock-plan-mode.md): as mesmas regras de plano reafirmadas três meses depois (jan/2026), agora ditas no `CLAUDE.md`
