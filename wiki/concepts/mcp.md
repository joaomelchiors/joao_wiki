---
title: "MCP (Model Context Protocol)"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["mcp", "integracao", "conectores", "ia-generativa"]
source_files:
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md
  - raw/sources/2026-11-08-transcricao_AbentsDeIa_MCP.md
  - raw/sources/2026-11-08_AgentesDeIa-CatalogoDeMCPs.md
  - raw/sources/2026-11-08_transcricao-AgentesDeIa_SKILLxMCP.md
  - raw/assets/agentesDeIa_SKILLvsMCP.png
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
related_pages:
  - ./ia-generativa.md
  - ./rules-e-skills.md
  - ./skills-na-pratica.md
  - ./spec-driven-development.md
  - ./seguranca-de-agentes.md
  - ./harness.md
  - ../sources/2026-05-07_source-palestra-github-copilot.md
  - ../sources/2026-11-08_source-agentes-ia-mcp.md
  - ../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
---

# MCP (Model Context Protocol)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Padrão aberto (2024, Anthropic) para integrar ferramentas e dados externos a agentes de IA. Reúne a arquitetura host/client/server, a visão didática do curso Profissional AI (conector/tradutor), tools × resources × prompts e a comparação Skill × MCP.

## Compreensão Atual

### MCP (Model Context Protocol) e Perspectiva Corporativa
*(Fonte: Palestra Microsoft/GitHub para a Caixa Econômica Federal, 2026-05)*

### MCP — Protocolo de Integração de Ferramentas
**MCP = "USB-C da IA"** — padrão aberto (2024, Anthropic) para integrar ferramentas externas a agentes de IA.

**Evolução histórica**: REST API (apps web, 2000s) → LSP — Language Server Protocol (IDEs, ferramentas de linguagem) → **MCP** (agentes de IA, 2024).

**Arquitetura em três camadas**:

| Camada | Descrição | Exemplos |
|---|---|---|
| **Hosts** | Ambientes de desenvolvimento onde o dev trabalha | VS Code, Visual Studio, IntelliJ |
| **Clients** | Agentes/apps que consomem o MCP para acessar ferramentas | Copilot Agent Mode, Coding Agent |
| **Servers** | Ferramentas e sistemas externos expostos via MCP | GitHub, Playwright, Azure, Jira, Slack |

**Interação**: sempre em **linguagem natural** — o agente detecta automaticamente qual ferramenta usar para atender o prompt. Não é REST manual (GET/POST).

**Dois tipos de servidor MCP**:
- **Local** (ex: Playwright): executa localmente, sem autenticação, abre browser via motor Chromium/Edge/Firefox
- **Remoto** (ex: GitHub): requer OAuth; as permissões do MCP = permissões do usuário autenticado

**Benefícios**: reduz alucinações (contexto mais preciso via dados externos em tempo real), permite compartilhar informações entre times (Jira, Zendesk, Azure), reduz tempo de integração (padrão universal).

**Configuração no VS Code**: arquivo `.vscode/mcp.json` lista os servidores MCP. Ferramentas expostas ficam visíveis na interface da extensão.

### MCP na visão do curso Profissional AI — Agentes
Fonte: [MCP e catálogo de MCPs](../sources/2026-11-08_source-agentes-ia-mcp.md) (aula didática, sem a terminologia host/client/server).

- **Analogias**: "tomada padrão" e **tradutor intermediário** entre o agente e a aplicação; um conector por aplicação (YouTube, Gmail, Drive, banco, ERP) e uma lista de conectores ativos que o agente escolhe.
- **Ações**: cada conector expõe o que dá para fazer (ler/enviar e-mail, salvar arquivo, responder comentário). Objetivo: o agente **agir fora do chat** e integrar sistemas que não se falam.
- **Código por baixo**: todo MCP exige implementação; pode ficar numa pasta do projeto (`mcps`/`conectores`). O aluno só precisa entender para que serve.
- **Catálogos** citados: smithery.ai, pulsemcp.com, mcp.so; listas `awesome-mcp-servers`; oficiais: registry.modelcontextprotocol.io e `modelcontextprotocol/servers`. O curso recomenda verificar a procedência antes de baixar (descrições dos catálogos como "maior" ou "oficial" não verificadas aqui).

### MCP: Tools × Resources × Prompts
Complementa a seção MCP acima: além de *tools* (funções), há **resources** (dados lidos diretamente via esquema, menos idas e vindas — afirmado pelo instrutor como tema de exame) e *prompts* (templates, considerados pouco úteis). Em ambientes gerenciados, listas de servidores permitidos e aprovação são controladas por *managed settings*.

### Skill × MCP × SDD: os três pilares (Profissional AI)
Fonte: [Skill × MCP](../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md) (com imagem-resumo em `raw/assets/agentesDeIa_SKILLvsMCP.png`).

| | Skill | MCP |
|---|---|---|
| Pergunta que responde | Como executar? | Que ferramenta acessar? |
| Função | Orientação | Integração |
| Analogia | Manual / receita | Tomada / conector |

- **"Skill ensina o processo; MCP dá acesso às ferramentas."** Não há barreira técnica rígida (uma Skill pode integrar com sistema externo); a diferença é o propósito. Todo MCP tem código; Skill nem sempre.
- **Skill × SDD**: a Skill é **focada** em uma tarefa; o SDD cuida do **processo de ponta a ponta**, e cada passo pode chamar uma Skill. Os três pilares: SDD = fluxo, Skill = como fazer, MCP = ferramentas externas.
- Interpretação (não vem da fonte): Rule, Skill, MCP e SDD podem ser vistos como camadas diferentes de contexto e ação.

## Fontes de Suporte

- [Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática](../sources/2026-05-07_source-palestra-github-copilot.md)
- [Agentes de IA (Profissional AI) — MCP e catálogo de MCPs](../sources/2026-11-08_source-agentes-ia-mcp.md)
- [Agentes de IA (Profissional AI) — Skill × MCP](../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)

## Conceitos Relacionados

- [rules-e-skills](./rules-e-skills.md)
- [skills-na-pratica](./skills-na-pratica.md)
- [spec-driven-development](./spec-driven-development.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [harness](./harness.md)

## Questões Não Resolvidas

- ~~**MCP (Model Context Protocol)**: como integrar servidores MCP para estender capacidades de leitura de dados externos ao harness sem sobrecarregar o contexto?~~ → **Parcialmente resolvida na palestra Microsoft/GitHub**: MCP = padrão aberto arquitetura host/client/server; interação em linguagem natural; dois tipos (local: Playwright; remoto: GitHub/OAuth); configuração via `.vscode/mcp.json`. Pendênte: como os servidores MCP são governados em ambientes corporativos com restrições de firewall.
- **Critério Skill × MCP**: o curso admite sobreposição técnica; falta critério prático de decisão.
- **Segurança de MCPs e Skills de terceiros**: catálogos e Skills com scripts exigem checagem de procedência; o curso só recomenda verificar.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
