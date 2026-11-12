---
title: "Agentes de IA (Profissional AI) — Skill × MCP (e SDD): os três pilares"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["ia-generativa", "skill", "mcp", "spec-driven-development", "agentes", "formacao-dev"]
source_files:
  - raw/sources/2026-11-08_transcricao-AgentesDeIa_SKILLxMCP.md
  - raw/assets/agentesDeIa_SKILLvsMCP.png
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ./2026-11-08_source-agentes-ia-mcp.md
  - ./2026-11-07_source-agentes-ia-sdd.md
  - ./2026-11-06_source-agentes-ia-estilos-de-skill.md
  - ../concepts/mcp.md
tipo_conteudo: explicacao
captura: automatica
---

# Agentes de IA (Profissional AI) — Skill × MCP (e SDD): os três pilares

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual com imagem-resumo; nenhuma execução.

## Resumo

Aula curta do curso "Profissional AI — Agentes" (formacao.dev) que compara **Skill** e **MCP** antes do primeiro MCP prático e os encaixa com o **SDD**. Tese: são ferramentas **complementares**, definidas pelo propósito e não por barreira técnica. O arquivo bruto referencia a imagem-resumo `raw/assets/agentesDeIa_SKILLvsMCP.png`. Transcrição automática (o título do arquivo tem "SILL"); o instrutor não é nomeado.

## Pontos-Chave

Resumo da imagem (tabela da aula):

| | Skill | MCP |
|---|---|---|
| Pergunta que responde | Como executar? | Que ferramenta acessar? |
| Função | Orientação | Integração |
| Analogia | Manual / receita | Tomada / conector |

Frase de síntese da imagem: **"Skill ensina o processo. MCP dá acesso às ferramentas."**

- **Skill**: ensina o agente a fazer algo (manual com passos, regras e boas práticas). Pode usar só o modelo, ferramentas ou código. Exemplo do instrutor: skill "responder-cliente" que lê a mensagem, identifica problemas comuns e responde no tom da empresa.
- **MCP**: sempre tem **código por baixo**; conecta a IA a sistemas externos e expõe **ações** (Gmail: marcar como lido, arquivar, excluir, responder, enviar; Drive: ler pasta, criar ou mover arquivo). Não traz passo a passo: dá as ferramentas para usar depois, em uma Skill ou spec.
- **Sem barreira rígida**: é possível fazer integração com sistema externo dentro de uma Skill, ou ter passo a passo numa Skill. A diferença é o propósito de cada uma.
- **Skill × SDD**: a Skill é **focada** em uma coisa (responder cliente; classificar a pergunta; checar o tom; tratar assunto fora do escopo). O SDD cuida do **processo de ponta a ponta**, e cada passo pode indicar uma Skill.
- **Três pilares**: SDD cuida do fluxo; Skill cuida de como fazer tarefas específicas; MCP cuida do acesso a ferramentas externas.
- O passo a passo pode ficar dentro de uma Skill e virar um comando (ex.: `responder-cliente`).

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| Skill = como fazer; MCP = qual ferramenta usar | Conceito do curso, resumido na imagem | Moderada (consistente com [Rule vs. Skill](./2026-04-29_source-dev-ai-rule-skill.md) e com as definições de MCP da wiki) |
| "Todo MCP demanda implementação em código" | Afirmação do instrutor | Moderada (coerente com a natureza de conector) |
| Skills e MCPs se sobrepõem tecnicamente | Afirmação do instrutor, sem demonstração | Fraca |

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [MCP (Model Context Protocol)](../concepts/mcp.md).

- [IA Generativa](../concepts/ia-generativa.md): nova subseção "Skill × MCP × SDD: os três pilares (Profissional AI)" com a tabela comparativa.
- Complementa [Rule vs. Skill](../concepts/rules-e-skills.md) (Rule declarativa, Skill ativa) acrescentando o eixo MCP (integração). Interpretação: Rule/Skill/MCP/SDD formam camadas diferentes de contexto e ação; as fontes não apresentam esse quadro unificado. Ver a síntese [Rule, Skill, MCP e SDD como camadas](../syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md).
- Sem contradições com fontes anteriores.

## Questões Não Resolvidas

- Critério prático para decidir entre integrar via Skill ou via MCP, já que o instrutor admite sobreposição.
- Como Skills e MCP interagem no contexto (carregamento, custo de tokens): não abordado.
