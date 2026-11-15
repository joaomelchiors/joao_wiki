---
title: "Agentes de IA"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["agentes", "llm", "workflow", "sub-agentes", "paralelismo", "ia-generativa"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-07-ContextoRulesSkill-conceitoDeAgentes.md
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2026-11-12_transcricao-formacaoDEV-porcessamento-sequencial-paralelo.md
  - raw/sources/2026-11-12_transcricao-formacaoDEV-planejamento-organizando-email.md
related_pages:
  - ./ia-generativa.md
  - ./harness.md
  - ./spec-driven-development.md
  - ./seguranca-de-agentes.md
  - ./mcp.md
  - ../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
---

# Agentes de IA

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> Fonte do material: curso de Andrew Brown para a certificação Claude Certified Developer Foundations (CCDV-F), 2026-11; fonte em inglês, síntese em português. Material de instrutor, parte opinião e parte fatos do exame.

## Definição

Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e usando ferramentas de forma autônoma e iterativa para atingir um objetivo. Reúne a definição da aula IA-07 e a distinção agente × workflow e sub agentes do curso CCDV-F.

## Compreensão Atual

### Agentes de IA (Aula IA-07)
> **"Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e utilizando ferramentas de forma autônoma e iterativa para atingir um objetivo."**

- **LLM = cérebro**: tomada de decisão, planejamento.
- **Agente = braços**: orquestrador de prompts que executa ações no mundo externo (arquivos, terminal, banco, APIs).
- **Loop iterativo**: agente executa → observa resultado → envia ao LLM → repete até objetivo atingido.
- **Anti-pattern**: fazer a aplicação tomar decisões com if/else (3000+ linhas) em vez de delegar ao LLM.

### Agente × Workflow
- **Agente**: o modelo decide o próximo passo num loop agêntico; funciona como uma **política dinâmica** (regra de decisão escolhida em tempo de execução a partir do contexto), não como uma máquina de estados fixa.
- **Workflow**: passos predeterminados (n8n, código comum) = máquina de estados. Bom para automação e garantias; **não** serve como loop agêntico externo.
- **Combinação**: um estado do workflow pode chamar um agente. Se o problema cabe em código determinístico, usar código.

### Sub Agentes
- Ganhos: especialização, paralelismo, contexto enxuto por tarefa, **verificação independente** (agente revisor com nota + justificativa), ferramentas/permissões restritas e isolamento.
- Custos: dinheiro, latência, coordenação, erros de comunicação; evitar *tool stuffing* (cada ferramenta consome tokens em toda chamada).
- No Claude Code são arquivos `.md` com frontmatter ([Claude Code](../entities/claude-code.md)). Padrões vistos no curso: pesquisa com coordenador + particionamento + **loop de refinamento** (máx. 4 iterações).

### Estratégias de execução: sequencial × paralela (Organizador de E-mails, formacao.dev)
Fonte: [Estratégias de execução](../sources/2026-11-12_source-organizador-emails-sequencial-paralelo.md) (aula conceitual, legenda revisada).

- **Sequencial**: menos tokens (o raciocínio de uma etapa aproveita o contexto já construído), mais tempo. Indicada quando não há pressa (ex.: madrugada) ou há dependência entre etapas.
- **Paralela**: vários agentes sobre dados distintos → tempo cai muito; tokens sobem, pois cada agente refaz parte do raciocínio (contexto, MCPs, limitações).
- **Híbrida**: combinar as duas; mas o paralelismo precisa ser previsto desde o projeto — cada agente com **dados e arquivos próprios**, para um não sobrescrever o trabalho do outro.
- **Modelos por responsabilidade**: planejamento com modelo avançado (ex.: Opus), execução com modelo econômico — reforça, por fonte independente, a hierarquia registrada em [melhores-praticas-claude-code](./melhores-praticas-claude-code.md).

### Exemplo de arquitetura de fluxo com HITL (Organizador de E-mails)
Fonte: [Planejamento da solução](../sources/2026-11-12_source-organizador-emails-planejamento.md).

- Fluxo de organização do Gmail em 6 fases: coleta (via MCP, persistida em arquivos por grupos de 50 threads) → classificação por Skills (remetente, relevância 0–10, risco), que já registra a **ação planejada** por mensagem → revisão (agente confere o trabalho; pode ser outro agente) → **confirmação do usuário** (human-in-the-loop, opcional, antes de ações com consequência) → execução (só aplica o que foi decidido) → relatório final.
- Camadas **Fluxo → Skill → MCP**: o fluxo diz o quê, a Skill concentra o como (reutilizável), o MCP dá o acesso.
- Começar com **um agente** executando tudo (Full Agent) e paralelizar depois com instâncias do mesmo fluxo sobre grupos distintos.

## Fontes de Suporte

- [Dev AI — Aula 07: Conceito de Agentes](../sources/2026-04-28_source-dev-ai-conceito-de-agentes.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)
- [Organizador de E-mails — Estratégias de execução](../sources/2026-11-12_source-organizador-emails-sequencial-paralelo.md)
- [Organizador de E-mails — Planejamento da solução](../sources/2026-11-12_source-organizador-emails-planejamento.md)

## Conceitos Relacionados

- [harness](./harness.md)
- [spec-driven-development](./spec-driven-development.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [mcp](./mcp.md)
- [verificacao-deterministica](./verificacao-deterministica.md): exemplo de cadeia de cinco agentes (specifier → coder → cleaner → hardener → QA), relato de Uncle Bob.

## Questões Não Resolvidas

- Como estruturar um sistema multi-agente na prática? Um exemplo relatado (uma fonte de opinião, sem dados) está em [Verificação determinística](./verificacao-deterministica.md); Matt Pocock é cético com enxames de agentes especializados.
- Qual o custo (latência, tokens) de loops iterativos com LLMs? A aula de estratégias dá a direção do trade-off (sequencial economiza tokens, paralelo economiza tempo), mas sem números.

## Notas de Atualização

- 2026-11-15: adicionadas as estratégias de execução (sequencial × paralela × híbrida) e o exemplo de fluxo em 6 fases com HITL, do projeto Organizador de E-mails (ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
