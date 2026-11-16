---
title: "MCP (Model Context Protocol)"
descricao: 'MCP — host/client/server, conector/tradutor, tools × resources × prompts, Skill × MCP e MCP × CLI.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["mcp", "integracao", "conectores", "ia-generativa", "cli"]
source_files:
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md
  - raw/sources/2026-11-08-transcricao_AbentsDeIa_MCP.md
  - raw/sources/2026-11-08_AgentesDeIa-CatalogoDeMCPs.md
  - raw/sources/2026-11-08_transcricao-AgentesDeIa_SKILLxMCP.md
  - raw/assets/agentesDeIa_SKILLvsMCP.png
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2026-08-05_claude-code-full-course-autonomous-goals-mcp-and-vs-code_en-orig_7l6bXLAKyEI.md
  - raw/sources/2025-10-22_most-devs-don-t-understand-how-context-windows-work_en-corrigida_-uW5-TaVXu4.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
related_pages:
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md
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
  - ../syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md
---

# MCP (Model Context Protocol)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Padrão aberto (2024, Anthropic) para integrar ferramentas e dados externos a agentes de IA. Reúne a arquitetura host/client/server, a visão didática do curso Profissional AI (conector/tradutor), tools × resources × prompts e a comparação Skill × MCP.

## Compreensão Atual

### MCP (Model Context Protocol) e Perspectiva Corporativa
*(Fonte: Palestra Microsoft/GitHub para a Caixa Econômica Federal, 2026-05. Material de fornecedor (`fornecedor`): descreve o protocolo do ponto de vista do produto Copilot. A arquitetura e a autoria da Anthropic convergem com o curso CCDV-F e com as aulas do Profissional AI; os benefícios são afirmação do fornecedor.)*

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

Outro exemplo de servidor local, `demonstrado` fora da palestra: Matt Pocock (jan/2026) configura o **Chrome DevTools MCP** num arquivo de MCP do projeto (dito "MCP.json"; provavelmente `.mcp.json`, não confirmado), apontado para um Chrome com depuração remota que uma skill manda subir em modo headless; o Claude Code usa o servidor para QA visual. Fonte: [vídeo sobre front-end](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md).

**Benefícios (segundo a palestra; sem dados apresentados)**: reduz alucinações (contexto mais preciso via dados externos em tempo real), permite compartilhar informações entre times (Jira, Zendesk, Azure), reduz tempo de integração (padrão universal).

**Configuração no VS Code**: arquivo `.vscode/mcp.json` lista os servidores MCP. Ferramentas expostas ficam visíveis na interface da extensão.

### MCP na visão do curso Profissional AI — Agentes
Fonte: [MCP e catálogo de MCPs](../sources/2026-11-08_source-agentes-ia-mcp.md) (aula didática, sem a terminologia host/client/server).

- **Analogias**: "tomada padrão" e **tradutor intermediário** entre o agente e a aplicação; um conector por aplicação (YouTube, Gmail, Drive, banco, ERP) e uma lista de conectores ativos que o agente escolhe.
- **Ações**: cada conector expõe o que dá para fazer (ler/enviar e-mail, salvar arquivo, responder comentário). Objetivo: o agente **agir fora do chat** e integrar sistemas que não se falam.
- **Código por baixo**: todo MCP exige implementação; pode ficar numa pasta do projeto (`mcps`/`conectores`). O aluno só precisa entender para que serve.
- **Catálogos** citados: smithery.ai, pulsemcp.com, mcp.so; listas `awesome-mcp-servers`; oficiais: registry.modelcontextprotocol.io e `modelcontextprotocol/servers`. O curso recomenda verificar a procedência antes de baixar (descrições dos catálogos como "maior" ou "oficial" não verificadas aqui).

### MCP: Tools × Resources × Prompts
Complementa a seção MCP acima: além de *tools* (funções), há **resources** (dados lidos diretamente via esquema, menos idas e vindas — afirmado pelo instrutor como tema de exame) e *prompts* (templates, considerados pouco úteis). Em ambientes gerenciados, listas de servidores permitidos e aprovação são controladas por *managed settings*.

### MCP × ferramentas CLI
Fonte: [curso freeCodeCamp sobre Claude Code](../sources/2026-08-05_source-claude-code-full-course-freecodecamp.md) (`demonstrado`; a comparação em si é slide/heurística do instrutor Eric).

Ambos permitem ao agente controlar aplicações de terceiros (Jira, Slack, Stripe, Vercel), mas por caminhos diferentes:

| | CLI | MCP |
|---|---|---|
| Como funciona | O agente gera e roda comandos de terminal | Protocolo padronizado expõe tools ao agente |
| Custo de tokens | Baixo | Mais alto (schemas das tools ficam no contexto) |
| Controle/segurança | Depende do ambiente local | Escolha de quais tools expor, autenticação, trilha de auditoria |
| Indicação (segundo Eric) | Velocidade e economia de tokens | Times, controle de acesso, segurança |

Demo da fonte: deploy e exclusão de projeto na Vercel via CLI, com o agente confirmando qual projeto apagar antes de executar.

Segunda fonte sobre o custo de contexto, como opinião: segundo Matt Pocock (out/2025), MCP servers podem inflar o contexto rapidamente. No exemplo dele, as tools de "um par" de servidores ocupavam uma fatia grande da janela, e por isso ele diz ser "extremamente cauteloso" ao adicioná-los. Converge com a linha "Custo de tokens" da tabela. Fonte: [vídeo sobre janela de contexto](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md).

Terceira menção, de segunda mão: segundo respostas no X repassadas por Matt Pocock (jan/2026), Playwright MCP e Chrome DevTools MCP são *context-hoggy* — screenshots devolvidos ao modelo consomem muitos tokens e os servidores trazem muitas tools com descrições longas. Alternativas citadas nessas respostas: Dev Browser e Playwriter, que ele diz não ter testado. Força: relato de terceiros. Fonte: [vídeo sobre front-end](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md).

### Skill × MCP × SDD: os três pilares (Profissional AI)
Fonte: [Skill × MCP](../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md) (com imagem-resumo em `raw/assets/agentesDeIa_SKILLvsMCP.png`).

| | Skill | MCP |
|---|---|---|
| Pergunta que responde | Como executar? | Que ferramenta acessar? |
| Função | Orientação | Integração |
| Analogia | Manual / receita | Tomada / conector |

- **"Skill ensina o processo; MCP dá acesso às ferramentas."** Não há barreira técnica rígida (uma Skill pode integrar com sistema externo); a diferença é o propósito. Todo MCP tem código; Skill nem sempre.
- **Skill × SDD**: a Skill é **focada** em uma tarefa; o SDD cuida do **processo de ponta a ponta**, e cada passo pode chamar uma Skill. Os três pilares: SDD = fluxo, Skill = como fazer, MCP = ferramentas externas.
- Interpretação (não vem da fonte): Rule, Skill, MCP e SDD podem ser vistos como camadas diferentes de contexto e ação. Ver a síntese [Rule, Skill, MCP e SDD como camadas](../syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md).

## Fontes de Suporte

- [Palestra Microsoft — GitHub Copilot: Visão Geral e Aula Prática](../sources/2026-05-07_source-palestra-github-copilot.md)
- [Agentes de IA (Profissional AI) — MCP e catálogo de MCPs](../sources/2026-11-08_source-agentes-ia-mcp.md)
- [Agentes de IA (Profissional AI) — Skill × MCP](../sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)
- [Matt Pocock — Most devs don't understand how context windows work](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md): MCP inflando o contexto (opinião).
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): Chrome DevTools MCP para QA visual (demonstrado); custo de contexto de MCPs de navegador (relato de terceiros).

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
- 2026-11-14: adicionada a seção MCP × ferramentas CLI (curso freeCodeCamp sobre Claude Code).
- 2026-11-15: adicionada a opinião de Matt Pocock sobre MCP inflando o contexto em MCP × ferramentas CLI (ingestão).
