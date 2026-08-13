---
title: "GitHub Copilot"
type: entity
status: active
created: 2026-05-07
updated: 2026-05-07
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
