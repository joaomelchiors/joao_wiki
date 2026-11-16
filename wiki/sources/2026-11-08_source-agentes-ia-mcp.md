---
title: "Agentes de IA (Profissional AI) — MCP e catálogo de MCPs prontos"
descricao: 'MCP como tomada/tradutor entre IA e aplicações, ações dos conectores, código por baixo e catálogos de MCPs prontos.'
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["ia-generativa", "mcp", "agentes", "integracao", "formacao-dev", "catalogo"]
source_files:
  - raw/sources/2026-11-08-transcricao_AbentsDeIa_MCP.md
  - raw/sources/2026-11-08_AgentesDeIa-CatalogoDeMCPs.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ./2026-11-08_source-agentes-ia-skill-vs-mcp.md
  - ./2026-05-07_source-palestra-github-copilot.md
  - ./2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../concepts/mcp.md
tipo_conteudo: explicacao
captura: automatica
---

# Agentes de IA (Profissional AI) — MCP e catálogo de MCPs prontos

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual sem implementação; o catálogo de MCPs anexo é texto escrito (seria `referencia`, captura manual).

## Resumo

Aula introdutória sobre **MCP (Model Context Protocol)** do curso "Profissional AI — Agentes" (formacao.dev), terceira das "três ferramentas" do curso (Skill, SDD, MCP), mais uma página de apoio com links de catálogos e listas de MCPs prontos. O foco é conceitual: o que é, para que serve e como pensar nele. A implementação fica para as aulas seguintes. Transcrição automática; o instrutor (provavelmente Leonardo) não é nomeado no arquivo.

## Pontos-Chave

- **Definição**: padrão de comunicação entre o modelo de IA e o mundo externo (aplicações, internet, sistemas da empresa). O instrutor diz que a Anthropic criou o MCP e que ele virou padrão de mercado, com outras empresas aderindo.
- **Analogias**: "tomada padrão" (se o plugue não encaixa, a conexão não funciona) e **tradutor intermediário** (a IA "fala inglês", a ferramenta "fala alemão", o MCP traduz nos dois sentidos). O agente fala sempre do mesmo jeito com o conector; o conector conhece a aplicação.
- **Um conector por aplicação**: MCP do YouTube, do Gmail, do Google Drive, de banco de dados, de ERP etc. O agente tem uma lista de conectores ativos e escolhe qual usar.
- **Ações expostas**: cada conector define o que dá para fazer (ler e-mail, salvar arquivo no Drive, responder comentário no YouTube, atualizar planilha).
- **Resultado esperado**: o agente age **fora do chat** (criar slide no Canva, documento no Notion, mover arquivos), em vez de só gerar texto. Também permite integrar sistemas que não conversam entre si.
- **Código por baixo**: construir um MCP exige programação; o aluno só precisa saber para que ele serve. Conectores podem ficar numa pasta do projeto (`mcps`/`conectores`, sem padrão fixo). Ao pedir para a IA gerar um, usar o nome "MCP".
- **Reuso e controle**: o mesmo conector serve a vários projetos e evita uma integração diferente por ferramenta.
- **Segurança**: o instrutor só ressalva que é preciso conectar "de forma segura", sobretudo com bancos de dados de empresas; não detalha como.
- **Catálogo de MCPs prontos** (página de apoio): a aula recomenda verificar a procedência antes de baixar. Lista [Smithery](https://smithery.ai), [PulseMCP](https://www.pulsemcp.com/servers) e [mcp.so](https://mcp.so) como catálogos; `awesome-mcp-servers` (punkpeye, wong2, appcypher) e `best-of-mcp-servers` (tolkonepiu, ~400 servidores ranqueados) como listas da comunidade; e, como oficiais, o [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io) e o repositório `modelcontextprotocol/servers` (servidores de referência como filesystem, git, fetch e memory).

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| MCP foi criado pela Anthropic e virou padrão de mercado | Afirmação do instrutor; coerente com [MCP no curso CCDV-F e na palestra Microsoft](../concepts/mcp.md) (padrão aberto de 2024, Anthropic) | Moderada (convergência entre fontes) |
| MCP permite à IA agir fora do chat e integrar sistemas que não conversam | Descrição conceitual, sem demonstração | Fraca |
| Os catálogos listados são os mais completos/oficiais ("o maior catálogo", "catálogo oficial") | Descrições da própria página de apoio; **não verificado** nesta wiki | Fraca |

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [MCP (Model Context Protocol)](../concepts/mcp.md).

- [IA Generativa](../concepts/ia-generativa.md): nova subseção com a visão do curso (conector, tradutor, ações, código por baixo) ao lado da arquitetura host/client/server e de Tools × Resources × Prompts já registradas. Convergência: padrão aberto da Anthropic; plugin = conector/MCP + Skills (ver [Usando Skills](./2026-11-07_source-agentes-ia-usando-skill.md)).
- Diferença de nível: esta aula é **didática e sem a terminologia** host/client/server nem Tools/Resources/Prompts; não contradiz as fontes anteriores.
- Catálogos de MCP e verificação de procedência entram como candidatos de pesquisa (segurança de servidores de terceiros é lacuna na wiki).

## Questões Não Resolvidas

- Segurança e governança de MCPs de terceiros (o catálogo sugere verificar procedência, mas não como). Risco ligado a prompt injection (já tratado no curso CCDV-F).
- Impacto no contexto: muitos conectores ativos aumentam o contexto? A aula não aborda (pergunta já aberta na wiki).
- Como as aulas seguintes implementam o primeiro MCP (próxima ingestão).
