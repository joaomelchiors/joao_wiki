---
title: "Matt Pocock — LIVE: Watch me build a brand-new project from scratch"
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["matt-pocock", "ai-driven-development", "greenfield", "grill-me", "linguagem-ubiqua", "observabilidade-de-agentes", "ddd"]
source_files:
  - raw/sources/2026-04-17_live-watch-me-build-a-brand-new-project-from-scratch_en-corrigida_K-mA3MZ_EzU.md
related_pages:
  - ../entities/matt-pocock.md
  - ../entities/claude-code.md
  - ../concepts/ai-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/ddd.md
  - ../concepts/spec-driven-development.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ../sources/2026-11-14_source-matt-pocock-skills-skill-md.md
tipo_conteudo: demonstrado
captura: automatica
---

# Matt Pocock — LIVE: Watch me build a brand-new project from scratch

> **Esta fonte tem versão corrigida.** A legenda automática passou pela rotina de correção de transcrição (`CLAUDE.md` §16) antes desta ingestão, porque trocava nomes próprios de um jeito que alterava o sentido técnico. O arquivo listado em `source_files` é a versão de referência; a procedência e o inventário completo das alterações estão no cabeçalho dele. A original permanece em `raw/` e não é citada (§5.2).

## Resumo

Live de 1h47 (raríssima no canal dele) em que Matt Pocock parte de "não tenho ideia de projeto" e termina com **dois documentos de pesquisa, um nome e um glossário de linguagem ubíqua** — sem escrever uma linha de código de aplicação. O projeto, escolhido por enquete no chat, é uma plataforma de observabilidade para agentes de código, batizada **Slopwatch** (nome sugerido por um espectador, "Eddie"). O valor da fonte não está no produto, e sim no registro minuto a minuto da **fase que antecede o PRD**: validar a ideia, pesquisar o terreno com subagentes, nomear as coisas e modelar o domínio.

**Classificação**: `demonstrado` — Claude Code roda ao vivo durante quase toda a sessão (duas sessões longas de *grilling*, quatro subagentes de pesquisa em paralelo, criação de repo, commit e publicação). Mistura com `opiniao` nas heurísticas do autor (não ler os documentos de pesquisa, dividir front/back é artificial, memória de agente de longo prazo é má ideia) — essas entram atribuídas. Captura automática: ver a nota de versão de referência acima.

## Pontos-Chave

1. **Fase de pesquisa antes de qualquer código.** Para projetos greenfield, Matt afirma que até existir código você "está apenas trabalhando com pesquisa — é uma tarefa de pesquisa". A live inteira fica nessa fase.
2. **O gatilho é validar a ideia, não especificá-la.** Ele interrompe o próprio levantamento de requisitos duas vezes dizendo que precisa ver algo funcionando antes de decidir (autenticação e o tratamento de *resume*/compactação ficam explicitamente para depois: "resume stays open until you've seen real data").
3. **Grilling como motor da fase.** Duas sessões de *grill* (uma com a skill `grill me`, outra com uma versão nova que ele chama de `domain model`). Ele observa que não está "respondendo perguntas", e sim sendo levado a pensar: "it's prompting me to think of things that I'm saying".
4. **Pesquisa delegada a subagentes.** Pede explicitamente subagentes para investigar como cinco agentes de código expõem dados — Claude Code, Codex, Pi, OpenCode e GitHub Copilot CLI — incluindo se emitem OpenTelemetry. Resultado: todos têm hooks e um JSONL *append-only* em disco, os schemas divergem e evoluem, e **não existe resposta "só use OTel"**; logo, um adaptador por agente é inevitável.
5. **Poda de contexto por `resume`, não por compactação.** Depois de uma divagação longa (escolha de nome), ele volta a uma conversa anterior com `resume` e com dois `Esc` para "cortar aquele pedaço de contexto" — "é como se tivéssemos voltado no tempo". Usa isso duas vezes, inclusive para fazer uma sessão do Claude Code responder à pergunta de outra.
6. **Documentos de pesquisa como memória, não como leitura.** Os dois documentos existem para persistir o contexto fora da janela ("eu geralmente não leio esses documentos de pesquisa; o que importa são as conclusões"). Ele distingue: PRD é documento de **destino**; o que ele produziu ali é **pesquisa**.
7. **Nomear é parte do trabalho.** Longo trecho de naming (Yardstick, Loupe, Peek, Crow's Nest, Palantir...) que ele mesmo critica como *bikeshedding*, mas conclui: "o nome faz parecer mais real" e "a linguagem é como você traz um programa à vida".
8. **Linguagem ubíqua explícita, em `context.md`.** O fecho da live é um glossário: *session* (uma execução de um agente, contendo um DAG de *turns*), *turn* (uma mensagem do usuário + a resposta completa do assistente), *model request* (uma chamada HTTP ao provedor), *listener* (processo ao lado do agente) e *server*. Fala do agente, aceita por ele: "se *session* é vago, todo o modelo de dados fica vago".
9. **Terminologia que "calcifica".** Ele chama de sinal de progresso o momento em que um termo passa a ser reusado pelos dois lados (o caso é *sidecar*) e diz que capturar isso faz parte do processo dele.
10. **Testar a linguagem com cenários.** Pede ao agente cenários concretos (Alice ramifica e abandona um branch; Bob rebobina dois turns; Carol assiste à sessão de Dave ao vivo) para decidir se o vocabulário aguenta — e é por aí que surge a necessidade do conceito de *turn* e do DAG.

## Afirmações/Observações Principais

| Afirmação (de Matt, salvo indicação) | Significância |
|---|---|
| "Até você chegar ao código, você está só trabalhando com pesquisa" | Nomeia uma fase que o fluxo já registrado na wiki (Grill Me → PRD → issues) não cobria: o que acontece **antes** do PRD |
| "100 mil tokens ainda é a smart zone" | Datado de abr/2026; coerente com a palestra do mesmo mês e **anterior** à revisão para ~150 mil (jul/2026) |
| "Estamos quase entrando na dumb zone" como critério para encerrar a sessão | Mostra a heurística usada operacionalmente, não só enunciada |
| Memória de agente de longo prazo é "má ideia"; prefere ADRs + uma versão mínima de DDD | **Tensão** com a skill beta `chief-of-staff` (nov/2026), que prescreve memória em wiki Markdown — ver "Impacto" |
| "Dividir grilling em front-end e back-end é uma decisão artificial; o domínio é a coisa inteira" | Resposta dele a pergunta do chat; alinha com Bounded Context e com a crítica à organização por camadas |
| "Complexo = difícil de mudar; simples = fácil de mudar" | Definição operacional que ele usa para justificar a skill `improve codebase architecture` |
| "Human + AI sempre vai superar AI, não importa quão boa a AI fique" | Posição dele, sem dados |
| "Input tokens são incrivelmente baratos"; limpar prompts ditados para economizar token "absolutamente não vale a pena" | Contrapeso explícito à preocupação com consumo de tokens |
| "A IA não entende quanto tempo a IA leva para programar algo" (sobre uma estimativa de "um ou dois dias") | Observação sobre estimativas geradas por LLM |
| Afirma que o Claude lançou o modo `xhigh` e que ele se tornou o padrão do Claude Code | Afirmação de uma fonte só, datada; **não verificada** |
| Diz que não usa OpenClaw ("nunca tentei") e que ainda não usou Pi, apesar de querer | Útil para calibrar o alcance do que ele demonstra |
| Ambiente dele: Windows, plano Max 20x (US$ 200/mês), Opus 4.7, ditado por Wispr Flow, VS Code | Contexto da demonstração |

## Notas de Evidência

- Escolha do tema e enquete no chat: início (0–10%).
- Pesquisa com subagentes sobre os cinco agentes e conclusão "adaptador por agente é inevitável": 10–25%.
- Escolha de nome, poda de contexto por `resume`, criação do repo e primeiro documento de pesquisa: 25–50%.
- Identidade/autenticação (OIDC adiado para v2, token emitido pelo admin na v1) e formato do servidor (binário único × Docker Compose × Kubernetes; Postgres × SQLite; Rust × TypeScript/Bun): 50–75%.
- Glossário e cenários de teste da linguagem (`session`/`turn`/`model request`/`listener`/`server`): 75–90%.
- Encerramento, "quase na dumb zone", perguntas do chat sobre tokens e processo: 90–100%.

## Impacto na Wiki Existente

- **[AI-Driven Development](../concepts/ai-driven-development.md)**: acrescentada a fase anterior ao PRD (pesquisa → nome → modelagem de domínio) como **demonstração**, e não só heurística. É a primeira fonte `demonstrado` desse conceito, que até agora se apoiava em `opiniao`; não basta para sair do `draft`, porque segue sendo o mesmo autor.
- **[Engenharia de Contexto](../concepts/engenharia-de-contexto.md)**: os ~100 mil tokens desta live datam a evolução da heurística (abr/2026 → jul/2026 → nov/2026). Acrescentada a **poda por `resume`/`Esc` duplo** como movimento distinto dos cinco das fronteiras de fase (continuar, limpar, hand off, subagente, compactar): aqui ele não resume nem limpa — descarta um ramo da conversa e continua do ponto anterior.
- **[DDD](../concepts/ddd.md)**: primeira fonte da wiki que mostra **linguagem ubíqua sendo construída com um agente** (glossário em `context.md`, termos que "calcificam", cenários para testar o vocabulário). Ele diz explicitamente "isso é linguagem ubíqua" e "DDD é um casamento fantástico com AI coding".
- **[Matt Pocock](../entities/matt-pocock.md)**: corrigida a grafia **Sand Castle → Sandcastle** (confirmada no repositório `mattpocock/sandcastle` e no pacote `@ai-hero/sandcastle`); acrescentados a skill `domain model`, o ambiente de trabalho e a cronologia desta live.
- **[Claude Code](../entities/claude-code.md)**: acrescentados o uso de `resume` + `Esc` duplo para descartar contexto, o agente embutido `claude-code-guide` e a afirmação (não verificada) sobre `xhigh` como padrão.
- **Tensão registrada, sem sobrescrever**: nesta live (abr/2026) Matt diz que **memória de agente de longo prazo é má ideia** e prefere "algo observável, concreto, editável e que caiba na janela de contexto" — ADRs e DDD mínimo. Em nov/2026, a skill beta `chief-of-staff` dele prescreve exatamente memória de longo prazo em wiki Markdown com `index.md` e operações ingest/query/lint (ver [resumo do repositório](../sources/2026-11-14_source-matt-pocock-repo-skills.md)). São fontes de épocas diferentes; a wiki registra as duas. Isso interessa diretamente a [esta wiki como home repo](../syntheses/2026-11-12_home-repo-nesta-wiki.md), cuja premissa é a memória em Markdown.
- **Sem contradição com o fluxo já registrado**: "não leio os documentos de pesquisa" é a mesma postura de "não leio o PRD depois de gerado", agora aplicada a outro artefato.

## Questões Não Resolvidas

- **Slopwatch existe publicamente?** A live mostra `repos/ai/slopwatch` sendo criado e publicado no GitHub, mas não há verificação independente de que o repositório ficou público nem de que o projeto teve continuidade. Ele próprio diz que pretendia transformar isso em vídeos.
- **O vídeo prometido saiu?** Ele afirma que não faria mais streams e que o próximo passo seria um vídeo com a implementação — não ingerido.
- **`xhigh` como padrão do Claude Code**: afirmação de abr/2026, não conferida na documentação.
- **Pi** aparece como um dos cinco agentes principais e com um comportamento próprio (é o único que produz ramificações reais de turn). Candidato a página de entidade quando houver fonte em `raw/` sobre ele — a identificação do produto nesta ingestão veio de busca na web, não de material bruto.
- **Passagens da legenda sem solução e correções apenas prováveis**: inventariadas no cabeçalho do arquivo de referência (campos `Não resolvido` e `Prováveis`). Nenhuma delas sustenta afirmação usada nesta página; as que valeria conferir no vídeo estão em [open-questions](../open-questions.md).
- **"CLCO course"**: ele diz que foi o curso de maior sucesso que já fez; a sigla foi corrigida para "Claude Code course" por contexto, sem confirmação.

## Páginas Relacionadas

- [Matt Pocock](../entities/matt-pocock.md) — autor; esta live é a demonstração mais longa do método dele na wiki
- [AI-Driven Development](../concepts/ai-driven-development.md) — a fase de pesquisa entra ali, antes do PRD
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md) — smart zone datada e a poda por `resume`
- [DDD](../concepts/ddd.md) — linguagem ubíqua construída com agente
- [Palestra Essential Skills](2026-04-28_source-matt-pocock-essential-skills-ai-coding.md) — mesmo mês; descreve o fluxo que esta live antecede
- [Entrevista ao The Pragmatic Engineer](2026-09-17_source-matt-pocock-pragmatic-engineer.md) — Wayfinder e o fatiamento por smart zone
- [SKILL.md das skills de Matt](2026-11-14_source-matt-pocock-skills-skill-md.md) — onde `grill me` e `domain model` aparecem já como skills publicadas
