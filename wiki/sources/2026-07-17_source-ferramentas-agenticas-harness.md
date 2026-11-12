---
title: "Dev AI — Ferramentas Agênticas: Harness (Partes 1 e 2)"
type: source
status: active
created: 2026-07-17
updated: 2026-11-12
tags: ["harness", "agentes", "ferramentas-agenticas", "claude-code", "codex", "loop-de-execucao", "contexto"]
source_files:
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-07-HarnessParte2.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../concepts/harness.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Ferramentas Agênticas: Harness (Partes 1 e 2)

Aulas 06 e 07 do módulo "Ferramentas Agênticas" do curso Dev AI da formacao.dev (instrutor Leonardo/Léo). Introduzem o conceito de **harness** — a camada de software que envolve o modelo LLM e o transforma em um agente capaz de perceber, decidir e agir no ambiente.

**Fontes**:
- https://escola.formacao.dev/ia-dev/sala/ferramentas-agenticas?aula=5ad11107-a05a-4e0a-a71e-5954242eec43 (Parte 1)
- https://escola.formacao.dev/ia-dev/sala/ferramentas-agenticas?aula=c32183dc-d9b7-42aa-8e37-0e964e1b34df (Parte 2)

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aulas conceituais sobre harness, com exemplos pontuais na ferramenta.

## Resumo

O **harness** é a infraestrutura que transforma um LLM (preditor de texto stateless) em um agente que percebe o ambiente, toma decisões e age. Ferramentas como Claude Code, Codex e Cursor são, na prática, harnesses. O harness gerencia: o contexto (montagem, injeção, compressão), o loop de execução (prompt → LLM → ação → resultado → contexto atualizado → LLM → ...), as ferramentas disponíveis (sistema de arquivos, terminal/bash, APIs, MCP, Skills), e a memória/estado da sessão. A grande revolução do desenvolvimento de software recente não foi apenas a evolução dos modelos, mas a evolução dos harnesses.

## Pontos-Chave

### Definição e Anatomia do Harness

- **Harness** (arreios): camada de software que **envolve o LLM** — o modelo é apenas uma parte; o harness é tudo o que está ao redor.
- O LLM sozinho só recebe e gera texto — ele é **stateless** (sem estado interno, sem memória persistente). O mesmo modelo é compartilhado por todos os usuários; o que muda é o **contexto**.
- O harness dá ao LLM "pernas, braços e olhos" — a capacidade de interagir com o ambiente e corrigir a rota.
- **Analogia central**: cavalo + arreios. O arreio (harness) conduz o cavalo (LLM) pelo caminho correto. Sem arreios, o cavalo vai em qualquer direção.

### Componentes do Harness

| Componente | Função |
|---|---|
| **LLM** | Recebe contexto, toma decisão sobre próxima ação |
| **Contexto** | Tudo que o modelo recebe: prompt atual, histórico, memória, ferramentas disponíveis, Skills carregadas |
| **Ferramentas** | Sistema de arquivos (FS), terminal (Bash), APIs externas, MCP, Skills |
| **Loop de execução** | Ciclo: LLM decide → ferramenta executa → resultado vai pro contexto → LLM decide novamente |
| **Gestão de contexto** | Montagem, compressão (quando janela excede limite), injeção de system prompt |
| **Memória/Estado** | Histórico de sessão, arquivos de memória |

### Loop de Execução (Harness Parte 2)

Fluxo detalhado do loop interno:

```
Prompt do usuário
     ↓
Montagem do Contexto:
  [prompt + histórico + memória + ferramentas disponíveis + Skills]
     ↓
LLM (stateless) → toma decisão:
  → "preciso ler a pasta X"
  → "preciso executar o arquivo Y"
  → "preciso chamar a Skill Z"
     ↓
Harness executa a ferramenta solicitada
     ↓
Resultado da ferramenta → volta para o contexto
     ↓
[LOOP: monta novo contexto → LLM → ação → resultado → ...]
     ↓
LLM decide: "já tenho tudo, posso dar resposta final"
     ↓
Resumo final para o usuário
```

**Observação importante**: a **ordem do contexto importa** — itens mais recentes (final do contexto) têm mais peso na tomada de decisão do LLM. Por isso carregar uma Skill no final de cada passo de uma spec aumenta sua relevância.

### Compressão de Contexto

Quando o contexto excede a **janela de contexto** (limite de tokens do modelo), o harness realiza compressão:
- Remove informações não relevantes para os próximos passos
- Sumariza o conteúdo anterior (como resumir uma reunião de 8h em meia hora)
- O contexto comprimido cabe na janela → loop continua
- No Claude Code: `/context` mostra o percentual da janela já utilizado
- Subagentes: cada subagente tem uma janela de contexto independente (com algum compartilhamento da sessão)

### Responsabilidades do Harness (Embutidas na Ferramenta)

1. **Loop de execução**: recebe saída do modelo, executa ação, devolve resultado, chama o modelo novamente
2. **Exposição de ferramentas**: passa lista de ferramentas disponíveis para o LLM decidir qual usar
3. **Gestão de contexto**: monta o prompt, injeta system prompt, comprime quando necessário
4. **Permissões e confirmação**: decide o que o agente pode executar autonomamente vs. o que pede confirmação do usuário
5. **Roteamento**: interpreta chamadas de ferramentas do modelo e direciona para o código correto
6. **Memória e estado**: mantém histórico, arquivos de memória, sessões

### Harness do Desenvolvedor (Parte 2: responsabilidade humana)

Além do harness embutido nas ferramentas, o **desenvolvedor** pode e deve adicionar "sensores" ao processo via Skills e specs:
- Pedir cobertura de testes ≥ 90% ao criar uma classe (instrução na Skill)
- Adicionar passo de "execute os testes do projeto" após passos críticos nas specs
- Pedir testes de integração em pontos estratégicos
- Instruir o agente a abrir browser interno para validar UI (Claude Code tem browser embutido)
- Usar subagente diferente para criar testes (contexto limpo evita viés de confirmação)

**Distinção importante**: harness ≠ arquivo ou técnica específica. A técnica é **Skills + Spec-Driven Development**. O harness é a infraestrutura. As verificações que o dev insere nas Skills e specs **fortalecem o harness**.

### Dois Modelos Mentais (Harness Parte 2)

1. **Visão estrutural**: harness envolve o LLM + gerencia o contexto + acessa as ferramentas
2. **Visão de fluxo**: harness como sequência de passos em loop (montagem de contexto → LLM → ação → resultado → novo contexto → ...)

### Exemplos de Harnesses no Mercado

| Ferramenta | Tipo |
|---|---|
| Claude Code | Harness (IDE de terminal) |
| Codex | Harness |
| Cursor | Harness (IDE com harness interno) |
| Antigravity | Harness (IDE com harness interno) |
| LangChain | Framework de orquestração de agentes |
| AutoGPT | Framework de harness |
| Claude Agent SDK | SDK para construção de harnesses |

## Afirmações/Observações Principais

- **"A grande revolução foi o harness, não o modelo"**: o modelo evoluiu, mas evoluiu menos do que as ferramentas de harness que controlam chamadas, feedback e verificação.
- **"Dois agentes com o mesmo modelo podem ter desempenhos muito diferentes dependendo da qualidade do harness"** — exatamente como duas specs podem ter desempenhos diferentes dependendo das verificações inseridas.
- **LLM é stateless**: o modelo não tem estado interno. O contexto é tudo — e a ordem do contexto importa.
- Harness = "infraestrutura que transforma preditor de texto em agente que percebe, decide e age"

## Notas de Evidência

- Aulas 06 e 07: transcrições completas em `raw/sources/2026-07-17_*HarnessParte1.md` e `*HarnessParte2.md`
- Demonstração ao vivo: instrutor interage com Claude Code para obter definição formal de harness
- Diagramas mencionados na Parte 2: `harnessEnvolveContexoLLMeFerramentas.png` e `harnessComoSequenciaDePassos.png` (disponíveis como zip no início do curso)

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Harness (infraestrutura do agente)](../concepts/harness.md).

- **`concepts/ia-generativa.md`**: adicionar nova seção sobre Harness (definição, loop de execução, compressão de contexto, responsabilidade embutida vs. do desenvolvedor); marcar questão "Harness" como resolvida; nova questão sobre MCP (prometido para próximo projeto)
- Nenhuma contradição com fontes anteriores — aprofunda e formaliza o conceito de agentes (Aula IA-07) e o loop iterativo já documentado, agora com nome formal e detalhes de implementação

## Questões Não Resolvidas

- **MCP (Model Context Protocol)**: mencionado como integração de ferramentas no harness, mas o instrutor deixou para o próximo projeto — sem definição ainda
- Como o harness decide entre executar autonomamente vs. pedir confirmação do usuário — critérios não detalhados
- Estratégias específicas de compressão de contexto (qual algoritmo/heurística o Claude Code usa para sumarizar)
- Como os arquivos de memória funcionam na prática — mencionados mas não demonstrados

## Páginas Relacionadas

- [ia-generativa.md](../concepts/ia-generativa.md)
- [formacao-dev.md](../entities/formacao-dev.md)
