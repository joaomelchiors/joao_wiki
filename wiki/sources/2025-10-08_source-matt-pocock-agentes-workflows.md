---
title: "Matt Pocock — Most devs don't understand what agents are"
descricao: 'Vídeo de Matt Pocock (7 min, out/2025) — reação ao AgentKit da OpenAI ("é workflow, não agente"); definição da Anthropic (agente = loop de tool calls em que o LLM decide parar); quando usar agente × workflow; espectro (max steps, agente → workflow, workflow com loop). `explicacao` com opinião; legenda automática **corrigida**.'
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "agentes", "workflow", "agente-vs-workflow", "llm", "tool-calling"]
source_files:
  - raw/sources/2025-10-08_most-devs-don-t-understand-what-agents-are_en-corrigida_AtYtuVTZCQU.md
related_pages:
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../concepts/agentes-de-ia.md
  - ../concepts/harness.md
  - ../concepts/claude-api-parametros-e-custo.md
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ./2026-04-28_source-dev-ai-conceito-de-agentes.md
  - ./2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ./2025-09-19_source-matt-pocock-tokens-llm.md
tipo_conteudo: explicacao
captura: automatica
---

# Matt Pocock — Most devs don't understand what agents are

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário das alterações estão no cabeçalho dele (§5.2).

## Resumo

Vídeo de 07:36 (out/2025) em que Matt Pocock reage ao lançamento do **AgentKit** da OpenAI: o construtor visual mostrado no anúncio, segundo ele, monta **workflows**, não agentes. A partir daí ele retoma a distinção do artigo "Building Effective Agents" da Anthropic: agente é um loop em que o LLM decide quando parar, e workflow é uma sequência de passos predeterminados em código. Depois compara os dois (improvisar × otimizar), diz que formam um espectro e não categorias estanques, e mostra as formas mistas (agente com limite de passos, agente que chama workflows, workflow com loop).

**Classificação**: `explicacao`. É conceitual e usa diagramas no tldraw, sem código executado. Tem trechos de `opiniao` (preferência por workflows, "jazz × música clássica", incômodo com o uso do termo pela OpenAI), que entram atribuídos. Captura automática corrigida; três passagens seguem em `Não resolvido` e quatro correções são só `Prováveis` (ver "Questões Não Resolvidas").

## Pontos-Chave

1. **Gatilho: AgentKit.** O fluxo do anúncio (guardrail contra jailbreak → chamada de LLM que roteia a entrada → um de três agentes) é, para ele, um workflow: passos determinísticos com caminhos conhecidos. Ele diz que não pretende usar o produto.
2. **Definição de referência.** Ele adota a do artigo da Anthropic "Building Effective Agents", que diz ter saído em "dezembro do ano passado" (dez/2024, data não conferida nesta rodada). Agente é um loop. Workflow é um fluxo direcional com caminhos predeterminados. Ele observa, com ironia, que o artigo intitulado "agents" descreve cerca de seis tipos de workflow.
3. **Agente = loop em que o LLM decide quando parar.** O loop são várias chamadas ao LLM, e cada uma precisa receber informação nova. Essa informação vem de **tool calls**: o modelo pede a execução de um código (exemplo: ferramenta `write file` criando um `.gitignore`), o sistema executa e devolve o resultado. Segundo ele, esse loop é o que move o Claude Code e os agentes de código em geral.
4. **Parada.** Ele diz que o agente, quando acha que terminou, "emite um token especial de stop" que o front end captura para parar de chamar o LLM. É uma simplificação dele (ver Afirmações).
5. **Workflow = passos predeterminados.** O resultado de uma chamada de LLM alimenta a próxima. Pode haver lógica determinística entre os passos, mas todos os caminhos são escritos antes. A vantagem é que o sistema pode ser otimizado, por exemplo paralelizando (dividir um texto, resumir cada parte ao mesmo tempo e depois resumir os resumos).
6. **Critério de qualificação.** Uma única chamada ao LLM não é agente nem workflow ("é só uma chamada de API"). Para ele, a diferença central é **quem decide quando o programa para**: no agente, o LLM; no workflow, os passos definidos de antemão.
7. **Quando usar cada um.** Agente serve quando o caminho até a solução não está claro ou quando a tarefa precisa generalizar. O exemplo dele são assistentes de código (Claude Code, Cursor), que não sabem que codebase nem que bug vão encontrar. Workflow serve quando o caminho é conhecido, e "se você precisa fazer a mesma coisa mil vezes", sempre workflow.
8. **Espectro, não definição rígida.** Formas intermediárias: (a) agente com **max steps**, um limite determinístico no código para não rodar para sempre, porque ele não colocaria em produção um agente "puro"; (b) agente que chama workflows de dentro de tools, juntando a generalização do agente à otimização das ferramentas; (c) workflow que contém loops, como gerar um texto e avaliá-lo várias vezes. O teste que ele propõe é se o LLM pode quebrar o loop antes do fim. Se pode, ele chama de agente.
9. **Por que a definição importa.** Ele diz que usa a distinção como ferramenta de ensino e de comunicação de trade-offs, e espera que a definição da Anthropic ("tool calls em loop") seja a adotada.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| O construtor do AgentKit monta workflows, não agentes | Opinião dele sobre um produto; ele não usou a ferramenta, só olhou o anúncio |
| Agente = LLM decide quando parar; workflow = passos predeterminados | Mesma linha da distinção agente × workflow do [CCDV-F](./2026-11-04_source-curso-certificacao-claude-developer-foundations.md) (política dinâmica × máquina de estados) e do loop da [IA-07](./2026-04-28_source-dev-ai-conceito-de-agentes.md). O critério "quem decide parar" é dele |
| O loop é alimentado por tool calls que trazem informação nova | Converge com o loop de execução do [Harness](../concepts/harness.md) |
| O agente "emite um token especial de stop" capturado no front end | **Simplificação do autor**, tratar como explicação atribuída. Na API do Claude, a parada aparece como `stop_reason` ([API do Claude](../concepts/claude-api-parametros-e-custo.md)). A ligação entre as duas coisas é do mantenedor, não está no vídeo |
| Agentes e workflows formam um espectro | Complementa a "combinação" do CCDV-F (estado do workflow chamando agente) com o caminho inverso (agente chamando workflow numa tool) |
| A maioria dos agentes tem um contador de max steps | Afirmação de frequência sem dado. A ferramenta citada como exemplo é ambígua na legenda (ver Questões) |
| Se tivesse de escolher um, ficaria com workflows ("sou do contra por natureza") | Opinião pessoal, declarada como tal |
| "Agente é jazz; workflow é música clássica" | Metáfora dele para improvisar × otimizar de antemão |

## Notas de Evidência

- AgentKit e crítica ao construtor visual: 0–10%.
- Artigo da Anthropic, definição por loop × fluxo direcional, início do tldraw: 10–25%.
- Tool calls (`write file`), parada do agente, workflows e paralelização: 25–50%.
- Critério de qualificação, quem decide parar, quando usar cada um, jazz × clássica, início do espectro: 50–75%.
- Max steps, agente com workflows, workflow com loops, teste de quebrar o loop: 75–90%.
- Valor pedagógico da definição, divulgação do aihero.dev: 90–100%.

## Impacto na Wiki Existente

- **[Agentes de IA](../concepts/agentes-de-ia.md)**, seção "Agente × Workflow": entram o critério "quem decide parar", o espectro com três formas intermediárias (max steps, agente → workflow em tool, workflow com loop) e a regra "caminho conhecido / mil repetições → workflow". Não há contradição com o CCDV-F nem com a IA-07, as três fontes convergem. Primeira fonte da wiki que cita o artigo "Building Effective Agents" da Anthropic, ainda assim de segunda mão.
- **[Matt Pocock](../entities/matt-pocock.md)**: segunda fonte da fase "IA em aplicações" (out/2025), antes do pivô para agentes de código. Opiniões a registrar: preferência por workflows, crítica ao AgentKit, defesa da definição da Anthropic.
- **[Harness](../concepts/harness.md)**: reforço externo do loop "LLM → tool → resultado → LLM", com o Claude Code como exemplo citado por ele.
- **[API do Claude](../concepts/claude-api-parametros-e-custo.md)**: só uma ligação possível entre o "token de stop" e o `stop_reason`. É interpretação do mantenedor e não precisa ser propagada.

## Questões Não Resolvidas

- **Qual ferramenta tem o parâmetro "max steps"?** A legenda diz `the ADK`, que está em `Não resolvido` na versão de referência. Pode ser o AI SDK (`maxSteps`) ou o Google ADK. Nesta página a afirmação não é atribuída a nenhuma ferramenta específica. O relatório de correção também registra que, no AI SDK atual, `maxSteps` deu lugar a `stopWhen: stepCountIs(n)`. Isso não foi verificado nesta rodada e vale como nota de obsolescência.
- **Trechos ilegíveis**: `The way that works with the LLM calls tools` e `when I see as agent workflows grow more complex` (Não resolvido). Nada desta página depende do texto exato deles. O sentido geral (tool calls trazem informação nova; incômodo com o uso do termo) aparece em outros pontos do vídeo.
- **Prováveis**: `routes the input` (era `roots`) e `another LLM call` (era `LM`) sustentam a descrição do roteamento no AgentKit (ponto-chave 1). São correções frágeis, conferir no vídeo antes de citar literalmente.
- **Data do artigo da Anthropic**: dez/2024 segundo a fala ("dezembro do ano passado"), não conferido.
- **AgentKit hoje**: segundo o relatório de correção, a própria página da OpenAI informa que Agent Builder e Evals estão em descontinuação desde 2026-06-03. É contexto temporal de segunda mão e não foi verificado nesta rodada.
- **"Token especial de stop"**: em que medida isso corresponde ao mecanismo real (token de fim de turno do modelo × `stop_reason` devolvido pela API × fim das tool calls) não é explicado na fonte.

## Páginas Relacionadas

- [Agentes de IA](../concepts/agentes-de-ia.md): onde a distinção agente × workflow é consolidada
- [Harness](../concepts/harness.md): loop de execução com tools
- [API do Claude: parâmetros e custo](../concepts/claude-api-parametros-e-custo.md): `stop_reason`
- [Matt Pocock](../entities/matt-pocock.md): autor
- [Claude Code](../entities/claude-code.md): citado como exemplo de agente
- [Dev AI — IA-07](./2026-04-28_source-dev-ai-conceito-de-agentes.md): definição de agente e loop iterativo, versão de aula
- [Curso CCDV-F](./2026-11-04_source-curso-certificacao-claude-developer-foundations.md): agente × workflow como política dinâmica × máquina de estados
- [Matt Pocock — tokens](./2025-09-19_source-matt-pocock-tokens-llm.md): vídeo anterior da mesma série
