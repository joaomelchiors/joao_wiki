---
title: "GitHub Copilot"
descricao: 'Assistente de IA da GitHub (Microsoft); plataforma com Code Completion, Chat (Ask/Plan/Agent), Coding Agent (background em ambiente efêmero), Code Review Agent, Instructions, MCP (host/client/server), Copilot Spaces e extensão de modernização (Java/.NET).'
type: entity
status: active
created: 2026-05-07
updated: 2026-11-12
tags: ["github-copilot", "microsoft", "github", "ferramenta", "agentes", "mcp"]
related_pages:
  - ../sources/2026-05-07_source-palestra-github-copilot.md
  - ../concepts/ia-generativa.md
---

# GitHub Copilot

**GitHub Copilot** é o assistente de IA da GitHub (empresa do ecossistema Microsoft) para desenvolvimento de software. É uma plataforma de IA que concentra múltiplos LLMs como motores (OpenAI, Anthropic, Google) e disponibiliza diferentes modos de interação, dois agentes nativos e um ecossistema de extensões para o fluxo de desenvolvimento.

## Identificação

- **Tipo**: Produto comercial (SaaS + extensão de IDE)
- **Empresa**: GitHub (subsidiária da Microsoft)
- **Integração**: Extensão para VS Code, Visual Studio, IntelliJ, Eclipse, Neovim, Copilot CLI
- **Licenciamento**: Business (300 premium requests) / Enterprise (1000 premium requests)

## Capacidades Principais

### Modos de Interação no IDE

| Modo | Descrição |
|---|---|
| **Code Completion** | Autocompletar inline — comentário = prompt |
| **Chat Ask** | Perguntas e respostas, explicação de código, geração de testes |
| **Chat Plan** | Planejamento sem edição de código |
| **Chat Agent** | Loop autônomo: planeja → age → observa → repete |
| **Inline Chat** | Chat embutido diretamente no arquivo |
| **Copilot CLI** | Terminal CLI com modo agente e MCP |

### Sistema de Instructions

- Arquivo `.github/copilot-instructions.md`: instruções globais (repositório inteiro), sempre aplicadas
- Arquivos `.github/instructions/*.instructions.md`: instruções por padrão de arquivo/diretório (campo `applyTo` no frontmatter)
- Complementares (não excludentes): instrução global + instrução específica são acumulativas
- Escopo adicional: instruções a nível de organização GitHub (gerenciado pela empresa)

### Agentes Nativos

**1. Coding Agent**
- Executa tarefas autônomas em ambiente efêmero no GitHub.com (via GitHub Actions)
- Background e paralelo — N sessões simultâneas
- Output: Pull Requests com resumo + screenshots
- Code Scanning (CodeQL) integrado
- MCP do GitHub + Playwright nativamente integrados
- Disparado via: IDE (MCP), GitHub.com, issues atribuídas ao Copilot
- Monitorado via Mission Control (painel no GitHub.com)

**2. Code Review**
- Revisor automático de PRs — atribuir Copilot como revisor ativa a revisão
- Contexto completo do projeto (não só o diff)
- Análise de segurança (CodeQL) automática
- Guiado pelo campo `Code Review` do `copilot-instructions.md`

### Custom Agents

Agentes personalizados em arquivos `.md` no repositório, usando o Coding Agent como motor. Cada agente descreve sua função, modelo, ferramentas e instruções em linguagem natural. Permite criar "batalhões" de agentes especializados (ex: Debugger, UI Engineer, API Developer).

### MCP — Model Context Protocol

Protocolo aberto para integração de ferramentas externas com o Copilot:
- **Arquitetura**: Hosts (IDEs) → Clients (Copilot) → Servers (ferramentas externas)
- Interação em linguagem natural — a IA detecta a ferramenta certa automaticamente
- Configuração: `.vscode/mcp.json`
- Servidores comuns: GitHub (remoto, autenticação OAuth), Playwright (local, sem autenticação), Azure, Jira, Slack, Teams
- Reduz alucinações via contexto externo em tempo real

### Copilot Spaces

Contexto especializado e curado, compartilhável entre times:
- Adiciona instruções, repositórios, arquivos, issues, PRs como fonte de contexto
- Trazido para o IDE via MCP
- Permite padronizar contexto organizacional

### GitHub Copilot Modernization (Extensão)

Extensão separada para modernização de código legado:
- Linguagens: Java e .NET
- Modalidades: Replatform (containers), Refactor (padrões), Upgrade (versão de runtime), Cloud Enablement
- Gera `plan.md` + execução incremental + `progress.md`
- Integração com Azure (AKS, App Service, Service Bus)
- Redução de tempo: 70–90% vs processo manual

## Comparativo com Conceitos do formacao.dev

| Conceito | Copilot/GitHub | formacao.dev |
|---|---|---|
| Instructions | `.github/copilot-instructions.md` | Rules (`.claude/rules/`) |
| Custom Agents | `.github/agents/*.md` | Skills (`.claude/skills/`) |
| Plan Mode | Plano do modo Plan | Specs (`specs/changes/*.md`) |
| Agent loop | "Inner loop" (plan→act→observe) | Harness |

## Contexto de Uso

Treinamento da Microsoft/GitHub para times de desenvolvimento da Caixa Econômica Federal (2026), focando em:
- Nivelamento de conhecimento sobre o Copilot (sessões 1–2) 
- Modernização de código legado com IA (sessão 3 em diante)

## Referências

- [Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática](../sources/2026-05-07_source-palestra-github-copilot.md)
- Documentação oficial: GitHub Copilot Docs (links passados aos participantes durante a palestra)

## Detalhes migrados de IA Generativa (2026-11-12)

> Seções movidas de [IA Generativa](../concepts/ia-generativa.md) ao dividir a página; conteúdo original da palestra Microsoft/GitHub.

### Modo Agente vs. Coding Agent: Dois Níveis de Autonomia
Uma distinção importante observada na perspectiva corporativa do GitHub Copilot:

| | **Modo Agente** (extensão) | **Coding Agent** (GitHub.com) |
|---|---|---|
| **Execução** | No IDE local do desenvolvedor | Ambiente efêmero no GitHub.com (GitHub Actions) |
| **Ambiente** | Ambiente real do dev | Isolado, criado e destruido por sessão |
| **Interação** | Interativa (IDE, tempo real) | Background / assíncrona (Mission Control) |
| **Paralelismo** | Uma tarefa por vez | N sessões em paralelo simultaneamente |
| **Output** | Edições locais | Pull Requests com resumo + screenshots |
| **Segurança** | Ambiente do dev | Code Scanning (CodeQL) integrado |

**Coding Agent** como "funcionário a mais": cada dev vira gerente de uma equipe de agentes especializados — agentes de teste, documentação, debugging, implementação, design rodando em paralelo.

**Mission Control**: painel no GitHub.com para monitorar, interagir e acompanhar múltiplas sessões do Coding Agent em paralelo.

### Copilot Instructions como Análogo Corporativo de Rules + Skills
O GitHub Copilot (versão corporativa) usa **Instructions** como mecanismo equivalente às Rules e Skills do formacao.dev:

| Conceito formacao.dev | Equiv. Copilot/GitHub | Local | Escopo |
|---|---|---|---|
| Rule (`.claude/rules/`) | `copilot-instructions.md` | `.github/` | Repositório inteiro, sempre aplicado |
| Rule por contexto | `*.instructions.md` | `.github/instructions/` | Definido pelo campo `applyTo` (glob pattern) |
| Skill (`.agents/skills/`) | `*.md` em agents folder | `.github/agents/` | Agentes customizados usando Coding Agent como motor |

**Complementaridade**: instruction global + instruction específica por arquivo/diretório são **acumulativas** (não se excluem).

**Prática**: dizer o que **NÃO** fazer é tão ou mais importante do que dizer o que fazer nas Instructions.

**Copilot Spaces**: contexto especializado e curado compartilhável entre times (instruções + repositórios + arquivos + issues). Trazido para o IDE via MCP. Equivale funcionalmente a uma Skill de contexto de equipe.

### Questões Não Resolvidas (migradas)

- **Copilot Spaces vs. Copilot Instructions**: qual a linha divisória entre o que deve estar em Instructions (sempre ativo) vs. em Spaces (contextó curado compartilhado)? Quando é melhor criar um Space vs. um instruction específico por diretório?
- **Coding Agent e conflitos de merge**: como o Coding Agent lida com conflitos quando múltiplas sessões paralelas tocam os mesmos arquivos?
- **Self-hosted runners + Coding Agent**: como o runner acessa o código se há restrições de firewall? (mencionado como novo recurso, mas não detalhado na palestra)
