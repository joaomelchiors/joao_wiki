---
title: "Matt Pocock — Most devs don't understand how context windows work"
descricao: 'Vídeo de Matt Pocock (9 min, out/2025) — janela de contexto (tokens de entrada + saída), limite por provedor (models.dev), desempenho cai com mais contexto, lost in the middle, demo de `/context`, `/compact` (`Ctrl+O`) × `/clear` no Claude Code, cautela com MCP e rules longas, Llama 4 Scout. `explicacao` com demo curta e opinião; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "janela-de-contexto", "lost-in-the-middle", "claude-code", "mcp", "tokens"]
source_files:
  - raw/sources/2025-10-22_most-devs-don-t-understand-how-context-windows-work_en-corrigida_-uW5-TaVXu4.md
related_pages:
  - ./2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/claude-api-parametros-e-custo.md
  - ../concepts/mcp.md
  - ../concepts/rules-e-skills.md
  - ../concepts/ia-generativa.md
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ./2025-09-19_source-matt-pocock-tokens-llm.md
  - ./2025-10-08_source-matt-pocock-agentes-workflows.md
  - ./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./2026-08-05_source-claude-code-full-course-freecodecamp.md
tipo_conteudo: explicacao
captura: automatica
---

# Matt Pocock — Most devs don't understand how context windows work

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 09:33 (out/2025), terceiro da série "Most devs don't understand…". Matt Pocock define a janela de contexto (todos os tokens de entrada e saída que o LLM vê), explica o limite fixado pelo provedor e por que ele existe, apresenta o problema **lost in the middle** e mostra no Claude Code o uso de `/context`, `/compact` e `/clear`. Fecha com um alerta sobre MCP servers e rules longas inflando o contexto e com o caso do Llama 4 Scout (janela enorme, recuperação ruim).

**Classificação**: `explicacao`. A maior parte é conceitual, com slides e um gráfico que ele mesmo chama de "muito pouco científico". O trecho no Claude Code (`/context` → `/compact` → `/context`) é `demonstrado`, mas curto. Há `opiniao` (a "paranoia" com contexto enxuto, cautela com MCP) e um fecho `fornecedor` (curso de AI SDK no aihero.dev). Captura automática corrigida; três passagens seguem em `Não resolvido` e uma correção é só `Provável` (ver "Questões Não Resolvidas").

## Pontos-Chave

1. **Tese.** Se há um "skill issue" com agentes de código, segundo ele, é não pensar o bastante na janela de contexto, que ele chama de principal restrição dos agentes atuais.
2. **Definição.** A janela de contexto é o conjunto inteiro de tokens de entrada (system prompt, mensagens do usuário) e de saída (mensagens do assistente) que o LLM vê. Cresce à medida que a conversa avança.
3. **Limite.** Cada modelo tem um limite fixo, definido pelo provedor e medido em tokens. Pode ser atingido na entrada (muitas mensagens, um documento ou imagem enorme), o que gera erro do provedor, ou durante a geração, quando a saída para ao bater no limite.
4. **Consulta de limites.** Ele usa o models.dev para comparar: Claude Haiku 4.5 com 200 mil tokens, Qwen Math Plus com cerca de 4 mil e um modelo com 2 milhões que, pela sequência, é o Gemini 2.5 Pro (ver Afirmações). Modelos menores e mais antigos tendem a ter janelas menores.
5. **Por que há limite.** Restrições da arquitetura e custo de memória por processamento, e também porque o desempenho cai com mais contexto: "quanto mais informação você dá, pior o modelo vai performar", em modelos pequenos e grandes.
6. **Recuperação e lost in the middle.** Todo modelo tem dificuldade de recuperar informação do próprio contexto (agulha no palheiro). O que está no meio de uma conversa longa pesa menos que o início e o fim. Ele atribui isso ao mecanismo de atenção, como propriedade emergente e não intencional, e compara com os vieses de primazia e de recência em humanos.
7. **Consequência prática.** Janelas curtas têm menos problemas de lost in the middle; limpar regularmente o chat do agente "renova a memória" e melhora o desempenho.
8. **Demo no Claude Code (Sonnet 4.5, janela de 200k).** `/context` mostra 95k usados: cerca de 8% no system prompt e 40% (77k) em mensagens. Com 105k livres ele seguiria; começaria a se preocupar com uns 50k restantes, e então rodaria `/clear`.
9. **`/compact` × `/clear`.** `/compact` limpa o histórico e gera um resumo. Na demo, levou cerca de um minuto e gasta tokens (é uma chamada de LLM). Depois, `Ctrl+O` mostra o resumo completo, que segundo ele preserva intenções e "vibes" sem os arquivos lidos, como um "mini arquivo de rules" da conversa. As mensagens caíram para 4k e o espaço livre para 90%. Regra dele: compactar quando quiser preservar as "vibes"; `/clear` como padrão.
10. **Transparência.** Ao trabalhar com agente, diz que é preciso entender o que está na janela de contexto a qualquer momento.
11. **MCP e rules.** MCP servers são atraentes (conjuntos de ferramentas prontos), mas podem inflar o contexto rapidamente: no exemplo dele, "um terço" de system prompt e uma fatia grande de tools de "um par" de servidores. Por isso ele diz ser "extremamente cauteloso" ao adicionar MCP e evita Cursor rules ou Claude rules muito grandes.
12. **Avaliar um LLM.** Não basta olhar o tamanho da janela; é preciso ver quão bem o modelo recupera informação dela. Exemplo: o Llama 4 Scout (Meta, abril), com 10 milhões de tokens, que segundo ele teve problemas sérios de lost in the middle quando as pessoas o testaram.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| Janela de contexto = tokens de entrada + saída que o LLM vê | Definição de vocabulário, coerente com o restante da wiki; base para a série de tokens ([vídeo anterior](./2025-09-19_source-matt-pocock-tokens-llm.md)) |
| O limite pode ser atingido na entrada (erro) ou na geração (para) | Converge com a distinção *context window exceeded* × `max_tokens` da [API do Claude](../concepts/claude-api-parametros-e-custo.md). A ligação é do mantenedor |
| Mais contexto → pior desempenho, em todos os modelos | Mesma linha do context rot (Dev AI) e da smart/dumb zone (Matt, 2026). Afirmação geral, sem medição no vídeo |
| Lost in the middle é propriedade emergente da atenção | Explicação dele, não demonstrada; o gráfico é declaradamente "muito pouco científico". Bob traz o mesmo mecanismo na [live de ago/2026](./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) |
| Limite de 2 milhões de tokens (pela sequência, Gemini 2.5 Pro) | **Duvidoso.** A frase está em `Não resolvido` (o modelo não é nomeado na fala). Segundo o relatório de correção, o Gemini 2.5 Pro saiu com 1 milhão, e 2 milhões eram anúncio futuro; o número depende do que o models.dev mostrava. Não verificado nesta rodada |
| Começaria a se preocupar com ~50k livres numa janela de 200k | Heurística pessoal e operacional (out/2025), em tokens livres e não em tokens usados. Ver Impacto |
| `/compact` gasta tempo e tokens; `/clear` deve ser o padrão | Demonstrado na parte do custo (um minuto, queda de 77k para 4k); a preferência é opinião. Coerente com a posição posterior dele (preferir limpar a compactar) |
| Números da demo | O próprio falante oscila ("77k" e depois "uns 70k, o que fosse"); usar como ordem de grandeza |
| MCP servers inflam o contexto; ele é "extremamente cauteloso" | Opinião; converge com o custo de tokens do MCP no [curso freeCodeCamp](./2026-08-05_source-claude-code-full-course-freecodecamp.md) |
| Llama 4 Scout (10M) teve lost in the middle sério | Relato atribuído ("depois que as pessoas testaram"), sem fonte citada no vídeo |

## Notas de Evidência

- Tese e definição da janela (entrada + saída): 0–10% e 10–25%.
- Limite, erro do provedor, parada na geração: 10–25%.
- models.dev (Haiku 4.5, 2 milhões, Gemini 2.5 Pro, Qwen Math Plus), motivos do limite, agulha no palheiro, lost in the middle, primazia/recência: 25–50%.
- Demo de `/context`, `/compact`, `Ctrl+O`, `/clear`; início do alerta sobre MCP: 50–75%.
- MCP e rules, recapitulação, Llama 4 Scout: 75–90%.
- Divulgação do curso de AI SDK (US$ 99, aihero.dev): 90–100%, `fornecedor`.

## Impacto na Wiki Existente

- **[Engenharia de Contexto](../concepts/engenharia-de-contexto.md)**, seções "Smart Zone vs. Dumb Zone" e "Context Rot": fonte mais antiga de Matt sobre degradação com contexto longo (out/2025), antes da formulação "smart/dumb zone". Ele já descreve lost in the middle (antes de Bob, ago/2026) e já prefere `/clear` a `/compact`. A heurística "preocupar-se com ~50k livres em 200k" (~150k usados) é numericamente próxima dos ~150k que ele adotaria em 2026, mas é critério diferente (espaço livre × zona de qualidade). Isso é interpretação do mantenedor, não declaração dele. Não contradiz os ~100k de abr/2026, que era outra métrica.
- **[Claude Code](../entities/claude-code.md)**: demo de `/context` (por categoria), `/compact` (resumo, custo de ~1 min, `Ctrl+O` para ver o resumo) e `/clear`.
- **[MCP](../concepts/mcp.md)**, seção "MCP × ferramentas CLI": segunda fonte sobre o custo de contexto das tools de MCP, opinião de Matt.
- **[Rules e Skills](../concepts/rules-e-skills.md)**: Matt evita rules longas por medo de lost in the middle. Converge com Bob (regras longas "viram diretrizes").
- **[API do Claude](../concepts/claude-api-parametros-e-custo.md)**: possível ligação entre "limite na entrada × na geração" e *context window exceeded* × `max_tokens`. Interpretação do mantenedor.
- **[Matt Pocock](../entities/matt-pocock.md)**: terceira fonte da fase "IA em aplicações" (out/2025); posições a registrar como opinião.
- Sem contradição com conclusões existentes.

## Questões Não Resolvidas

- **Qual modelo tem "2 milhões de tokens" no models.dev?** A frase está em `Não resolvido`; pela sequência é o Gemini 2.5 Pro, mas o valor de lançamento seria 1 milhão segundo o relatório de correção. Não usar como fato.
- **Trechos ilegíveis**: `a system prompt, which is and some instructions` e `4 Scout, which if I had myself, it's just down here` (Não resolvido). Não alteram o sentido dos pontos-chave: a definição de system prompt e o número de 10 milhões do Llama 4 Scout vêm de outras frases.
- **Provável**: `cursor rules` → Cursor rules (só caixa). Frágil, mas não muda o sentido.
- **Llama 4 Scout**: os problemas de recuperação são relato de segunda mão, sem referência no vídeo.
- **Lost in the middle**: o vídeo não cita estudo; o mecanismo (atenção como propriedade emergente) é explicação dele.

## Páginas Relacionadas

- [Matt Pocock — Never Run claude /init](./2026-02-24_source-matt-pocock-never-run-claude-init.md): a cautela com rules longas vira a tese contra o `/init` e o *instruction budget* com números (fev/2026).
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): context rot, smart/dumb zone, lost in the middle
- [Claude Code](../entities/claude-code.md): `/context`, `/compact`, `/clear` demonstrados
- [MCP](../concepts/mcp.md): custo de contexto das tools
- [Rules e Skills](../concepts/rules-e-skills.md): por que evitar rules longas
- [API do Claude: parâmetros e custo](../concepts/claude-api-parametros-e-custo.md): janela de contexto × `max_tokens`
- [IA Generativa](../concepts/ia-generativa.md): atenção e tokens
- [Matt Pocock](../entities/matt-pocock.md): autor
- [Matt Pocock — tokens](./2025-09-19_source-matt-pocock-tokens-llm.md) e [agentes × workflows](./2025-10-08_source-matt-pocock-agentes-workflows.md): vídeos anteriores da série
- [Live com Uncle Bob](./2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md): lost in the middle segundo Bob
- [Curso freeCodeCamp](./2026-08-05_source-claude-code-full-course-freecodecamp.md): `/context`, `/compact` e custo de tokens do MCP
