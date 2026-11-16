---
title: "Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática"
descricao: 'Palestra Microsoft/GitHub para a Caixa Econômica Federal (2 sessões) — GitHub Copilot completo: Code Completion, Chat (Ask/Plan/Agent), Instructions (`.github/copilot-instructions.md` + por padrão de arquivo), Modo Agente (loop plan→act→observe), Coding Agent (background em ambiente efêmero, GitHub Actions, Mission Control, PRs com screenshots), Code Review Agent, MCP (arquitetura host/client/server, Playwright, GitHub), Copilot Spaces (contexto curado compartilhável), Custom Agents, GitHub Copilot Modernization (Java/NET, upgrade, cloud enablement).'
type: source
status: active
created: 2026-05-07
updated: 2026-11-12
tags: ["github-copilot", "agentes", "mcp", "instructions", "coding-agent", "code-review", "modernizacao", "copilot-spaces", "custom-agents"]
source_files:
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md
related_pages:
  - ../entities/github-copilot.md
  - ../concepts/ia-generativa.md
  - ../concepts/mcp.md
  - ../syntheses/2026-11-12_apostila-palestra-microsoft-github-copilot.md
tipo_conteudo: fornecedor
captura: automatica
---

# Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática

Duas sessões de treinamento Microsoft/GitHub para desenvolvedores da **Caixa Econômica Federal**. Apresentadores: Jean (CSM) e Caio Queiroz (CSA - Arquiteto de Sucesso do Cliente). Contexto: parte de uma série de 3 encontros; as primeiras 2 sessões foram de nivelamento; a terceira (Sessão Teórica + Prática) aborda Copilot para modernização de código legado.

**Fontes**: Palestras Microsoft (transcrições internas, gravadas)

**Classificação** (`tipo_conteudo: fornecedor`, `captura: automatica`): palestra da Microsoft/GitHub sobre o próprio produto, com demonstrações; descreve o produto, sem comparação com concorrentes.

## Resumo

O GitHub Copilot é um **assistente de IA** da GitHub que usa múltiplos LLMs (OpenAI, Anthropic, Google) como motor. Não é apenas autocomplete — é uma plataforma com modos de interação (Code Completion, Chat, Agent Mode), dois agentes nativos (Coding Agent, Code Review), protocolo de integração (MCP), sistema de instruções personalizáveis (Instructions) e extensão de modernização de código legado. A grande palanca é o **modo agente**: um loop autônomo (ler → planejar → agir → observar → repetir) que itera até atingir o resultado do prompt, usando ferramentas (FS, terminal, browser via Playwright MCP, APIs via GitHub MCP). Para times corporativos, o **Coding Agent** executa tarefas em ambiente efêmero no GitHub.com (via GitHub Actions) em paralelo e background, sem tocar o ambiente local do desenvolvedor.

## Pontos-Chave

### GitHub Copilot — O Que É

- Assistente de IA **integrado nativamente ao IDE** (extensão para VS Code, Visual Studio, IntelliJ, Eclipse, Neovim)
- Suporta múltiplos LLMs como motor: Claude Sonnet/Opus (Anthropic), GPT (OpenAI), Gemini (Google), outros
- Não é uma IA específica — é uma **plataforma** que concentra diferentes modelos de IA para desenvolvimento
- Fluxo básico: código/comentário → contexto → proxy de validação (PII, ética, linguagem, vulnerabilidades) → LLM → sugestão

### Modos de Interação

| Modo | O que faz |
|---|---|
| **Code Completion** | Autocompletar no arquivo — comentário vira prompt, sugestão aparece inline (Tab para aceitar) |
| **Chat (Ask)** | Perguntas e respostas; gera código, explica, corrige bugs, traduz linguagens, gera testes unitários |
| **Chat (Plan)** | Mesmo poder do modo agente mas só planeja — NÃO altera código (ferramentas de edição desabilitadas) |
| **Chat (Agent)** | Modo autônomo: loop plan→act→observe, altera arquivos, executa terminal, itera até atingir o objetivo |
| **Inline Chat** | Chat embutido direto no arquivo — combina Code Completion + Chat |
| **Copilot CLI** | Terminal CLI com modo agente, múltiplos modelos, MCP, delegação ao Coding Agent |

### Code Completion (Modo Básico)

- Comentário no arquivo = prompt → dispara requisição ao LLM
- Contexto: arquivos abertos na IDE + aba atual
- Proxy valida: PII, linguagem não ética, vulnerabilidades comuns
- Aceitar sugestão: Tab; ver alternativas: ícone de navegação
- Também sugere código automaticamente (sem comentário) durante a digitação

### Copilot Instructions — Sistema de Instruções

Arquivo(s) Markdown que personalizam o comportamento do Copilot para um repositório. O Copilot **sempre** considera essas instruções, 100% das vezes, em todos os modos (Code Completion, Chat, Code Review).

**Arquivo global** (obrigatório):
```
.github/copilot-instructions.md
```
→ Escopo: repositório inteiro; instruções em linguagem natural; sem frontmatter especial.

**Arquivos específicos por padrão de arquivo/diretório**:
```
.github/instructions/<nome>.instructions.md
```
→ Requer frontmatter com campo `applyTo` (glob pattern) para definir em quais arquivos/diretórios se aplica.
→ Não são excludentes — o global + o específico são **complementares** quando o arquivo tocado bate o padrão.

**Conteúdo típico**: tech stack obrigatória, práticas de código, guia de revisão, o que NÃO fazer (tão importante quanto o que fazer), idioma de resposta, melhores práticas de segurança.

**Escopo de organização**: possível configurar instructions a nível de organização GitHub (gerenciado pela empresa).

### Modo Agente — Loop Autônomo

```
Prompt do usuário
     ↓
LLM lê contexto (arquivos abertos, workspace, Instructions)
     ↓
Plano de ação (plan)
     ↓
Execução com ferramentas (act):
  → lê arquivos, cria arquivos, edita arquivos
  → executa comandos no terminal (build, testes)
  → abre browser via MCP (Playwright)
     ↓
Observa resultados (observe):
  → buildou? testes passaram? prompt foi atendido?
     ↓
[LOOP: se não atingiu o objetivo → volta ao plano]
     ↓
Termina: resume o que fez, sugere próximos passos lógicos
```

**Ferramentas do Modo Agente** (visíveis em "Configure Tools"):
- Create Directory, Edit Files, Execute Commands, Browser (Playwright MCP), MCP servers ativos

**Diferencial**: descobre o contexto relevante automaticamente a partir do prompt (não precisa indicar arquivos manualmente); quanto mais específico o prompt, melhor o resultado.

### Coding Agent — Agente Autônomo em Background

O **Coding Agent** é diferente do Modo Agente da extensão:

| | Modo Agente (extensão) | Coding Agent |
|---|---|---|
| **Execução** | No IDE local do desenvolvedor | No GitHub.com (GitHub Actions) |
| **Ambiente** | Ambiente real do dev | Ambiente efêmero (criado e destruído por sessão) |
| **Interação** | Interativa (IDE) | Background / assíncrona (Mission Control) |
| **Paralelismo** | Um de cada vez | N sessões em paralelo simultaneamente |
| **Output** | Edições locais | Pull requests no repositório |

**Características**:
- Usa GitHub Actions como runner (pode ser self-hosted ou GitHub-hosted)
- Faz checkout do código, instala dependências, builda, testa, abre browser (Playwright MCP nativo)
- Inclui screenshots na PR provando que funcionou
- Code Scanning (CodeQL) integrado — valida vulnerabilidades de segurança durante a sessão
- Pode ser disparado pelo IDE (via MCP do GitHub), pelo GitHub.com, ou via issues
- Suporta Model Picker: selecionar o modelo manualmente ou usar "auto" (escolhe o melhor para o prompt)

**Mission Control**: painel no GitHub.com para monitorar sessões do Coding Agent — ver logs, arquivos alterados, interagir com a sessão em andamento, acompanhar múltiplas sessões em paralelo.

**Criar issues como prompt para o Coding Agent**: criar issue descrevendo a tarefa → atribuir ao Copilot → o Coding Agent executa aquela issue como prompt e gera uma PR.

### Code Review Agent

- Revisor automático de PRs — acionado atribuindo o Copilot como revisor na PR
- Visão do contexto **completo** do projeto (não só os commits da PR)
- Faz análise de segurança (CodeQL) automaticamente
- Adiciona comentários na PR com blocos de código sugeridos
- Guiado pelo arquivo de Instructions — seção `Code Review` no `copilot-instructions.md` personaliza o comportamento
- Processo: Prepare → Validate Agent → Auto Validate → CodeQL Analysis → publicar resultados

### MCP — Model Context Protocol

**MCP = "USB-C da IA"** — padrão aberto para integração de ferramentas externas com agentes de IA.

**Histórico**: API (2000s, apps web) → LSP (Language Server Protocol, IDEs) → MCP (2024, agentes de IA).

**Componentes**:
| | Descrição | Exemplos |
|---|---|---|
| **Hosts** | Ambientes de desenvolvimento | VS Code, Visual Studio, Eclipse |
| **Clients** | Agentes/apps que consomem o MCP | Copilot Agent Mode, Coding Agent |
| **Servers** | Ferramentas/sistemas externos expostos | GitHub, Playwright, Azure, Jira, Slack |

**Interação**: toda em linguagem natural — o agente entende o que precisa e chama a ferramenta automaticamente. Não é REST/GET/POST manual.

**Configuração no VS Code**: arquivo `.vscode/mcp.json` com definição dos servidores. Ferramentas ficam visíveis em "Configure Tools" da extensão.

**Dois tipos de servidor**:
- **Local** (ex: Playwright): abre browser localmente, sem autenticação
- **Remoto** (ex: GitHub): autenticação via OAuth; permissões = permissões do usuário autenticado

**Integração com Coding Agent**: nativamente integra o MCP do GitHub + Playwright — sem configuração extra. O Coding Agent usa esses dois servidores por padrão.

**Reduz alucinações**: contexto mais preciso via dados externos em tempo real (issues, PRs, Jira, etc.).

### Copilot Spaces

Recurso para criar **contexto especializado e curado** compartilhável entre times:
- Adiciona: instruções em linguagem natural, repositórios inteiros, arquivos/pastas, issues, PRs, GitHub URLs
- Cria uma "fonte de contexto" que pode ser trazida para dentro do IDE via MCP
- Exemplo: "API Architecture Caixa" space com padrões de API → qualquer dev da Caixa pode usar esse contexto
- Permite padronizar o contexto que todos os times usam

### Custom Agents

Agentes personalizados por arquivo `.md` associados ao repositório, que usam o **Coding Agent como motor**:
- Estrutura: frontmatter com parâmetros (nome, modelo, ferramentas) + instruções em linguagem natural
- Seções típicas: Upgrade success criteria, Anti-exclusive rules (o que NÃO fazer), ferramentas habilitadas
- Exemplo: `Modernize Java`, `Modernize .NET`, `Rails API Developer`, `UI Engineer`, `Debugger`
- Cada dev pode ter múltiplos agentes especializados trabalhando em paralelo

### GitHub Copilot Modernization (Extensão)

Extensão separada instalável no IDE (VS Code, Visual Studio, IntelliJ):
- **Linguagens suportadas**: Java e .NET (outras linguagens: modo agente manual)
- **Quatro modalidades de modernização**:
  1. **Replatform**: mudar onde a app roda (ex: VM → containers)
  2. **Refactor**: modernizar o código (padrões legados → modernos)
  3. **Upgrade**: atualizar versão de runtime (Java 8 → Java 21, .NET 4.8 → moderno)
  4. **Cloud Enablement**: preparar para rodar na nuvem (Azure AKS, App Service, Container Apps)
- Processo: Assessment → Plano de upgrade (plan.md) → Execução incremental (steps) → Validação (build + testes)
- Assessment: analisa dependências, versões, vulnerabilidades, APIs depreciadas, padrões legados
- Inclui `progress.md` para acompanhar o upgrade step a step
- Tempo estimado: ~18 min para upgrade completo de uma aplicação Java pequena
- Migração de infraestrutura: ex. RabbitMQ → Azure Service Bus
- **70–90% de redução de tempo** comparado ao processo manual

### Licenciamento

- **Business**: 300 premium requests
- **Enterprise**: 1000 premium requests
- Modelo "auto": seleção inteligente do melhor modelo pelo prompt + 10% desconto nas premium requests

## Afirmações Principais

- **"Quanto mais específico, mais detalhe, mais clareza — melhor o resultado"**: mantra repetido múltiplas vezes em contextos diferentes (Instructions, modo agente, Spaces, prompts)
- O Coding Agent é como "ter um funcionário a mais" — cada dev vira gerente de uma equipe de agentes
- A validação automática (loop act→observe) evita o problema "na minha máquina funciona" (ambiente efêmero independente)
- Instructions: dizer o que NÃO fazer é tão ou mais importante do que dizer o que fazer

## Diferenças em Relação ao formacao.dev

Esta palestra é de contexto corporativo (Microsoft/GitHub para Caixa), não de um curso de formação. As diferenças de vocabulário e perspectiva em relação ao `formacao.dev`:

| Conceito | formacao.dev | Microsoft/GitHub |
|---|---|---|
| Instructions | "Rules" (`.claude/rules/`) | `copilot-instructions.md` (`.github/`) |
| Skills | `.claude/skills/` | Custom Agents (`.github/agents/*.md`) |
| Specs | `specs/changes/*.md` | Plano do modo Plan / issues como prompt |
| Harness | Conceito explícito e nomeado | Conceito implícito (modo agente + loop) |

O loop `ler → planejar → agir → observar → repetir` do modo agente é o mesmo conceito de harness descrito nas Aulas 06–07 do formacao.dev, mas referido simplesmente como "inner loop" ou "agent loop" nesta palestra.

## Questões Não Resolvidas

- Como o Coding Agent lida com conflitos de merge quando múltiplas sessões paralelas tocam os mesmos arquivos?
- Critérios exatos para o modo "auto" escolher o modelo (além de "baseado no prompt")
- Como o proxy valida linguagem não ética/PII em código — que heurísticas usa?
- Self-hosted runners com Coding Agent: como o runner acessa o código se há restrições de firewall? (mencionado como novo recurso, mas não detalhado)
- Como os Copilot Spaces ficam sincronizados quando os repositórios de fonte atualizam?

## Notas de Evidência

- Sessão 3 de 3 de treinamento Microsoft para Caixa Econômica Federal (May 2026)
- Demonstrações ao vivo: loja virtual (carrinho de compras via Agent Mode), servidor MCP do Playwright e GitHub, upgrade Java 8→21 via extensão Modernization
- Código demonstrado: TypeScript, Go, Java (Docxraptor API), Node.js
- Versão de modelo mencionada: Claude Sonic 4.5/4.6

## Páginas Relacionadas

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [MCP (Model Context Protocol)](../concepts/mcp.md).

- [github-copilot.md](../entities/github-copilot.md)
- [ia-generativa.md](../concepts/ia-generativa.md)
- [Apostila de estudo da palestra](../syntheses/2026-11-12_apostila-palestra-microsoft-github-copilot.md): versão longa, em capítulos, para estudar e explicar a um colega.
