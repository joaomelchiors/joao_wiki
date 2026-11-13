---
title: "Questões Abertas"
type: maintenance
status: active
created: 2026-04-07
updated: 2026-11-12
tags: ["questions"]
source_files: []
related_pages:
  - ./overview.md
  - ./index.md
---

# Questões Abertas

Esta página mantém questões que precisam de investigação adicional e julgamentos adiados.

## Crítica

- Verificar as três afirmações que só a conversa com LLM sustenta: distinção criar × reconstituir atribuída a Eric Evans, `crypto.randomUUIDv7()` no Node 24.16+ e direção `restore()` ↔ `tryCreate()` (itens detalhados abaixo). Ver [lint de 2026-11-12](./maintenance/lint-reports/2026-11-12_lint-higienizacao.md).

## Rastreamento

- Conceitos em `draft` aguardando segunda fonte: [TDD](./concepts/tdd.md), [AI-Driven Development](./concepts/ai-driven-development.md), [Deep Learning](./concepts/deep-learning.md); síntese [camadas Rule/Skill/MCP/SDD](./syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md).
- Esta wiki como home repo: decisão adiada até haver projetos reais — ver [síntese](./syntheses/2026-11-12_home-repo-nesta-wiki.md).

## Candidatos de Pesquisa Futura

- Verificar na documentação oficial da Anthropic os comandos/flags citados no curso CCDV-F (transcrição automática, não verificada) — ver [resumo](./sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md).
- Segurança real e escopo do *auto mode* do Claude Code ([entidade](./entities/claude-code.md)).
- Estado de Managed Agents / CLI `ant` (descrito como imaturo no curso).
- Curso Profissional AI — Agentes: aulas de criação de Skill, Skill com código, SDD, MCP e Skill × MCP já ingeridas em 2026-11-12 (itens abaixo); confirmar papel de Python vs. Node.js (a aula com código usou Node.js) — ver [Estilos de Skill](./sources/2026-11-06_source-agentes-ia-estilos-de-skill.md) e [Usando Skills](./sources/2026-11-07_source-agentes-ia-usando-skill.md).
- Identificar qual é a segunda ferramenta chamada de "ChatGPT" na aula "Usando Skills" (transcrição ambígua; possivelmente o app desktop com Codex — não verificado).
- Causa do não recarregamento de Skills no `/` do Claude Code (dois relatos: Ferramentas Agênticas e Usando Skills).
- Deep Learning: nenhuma fonte em `raw/` define o termo; buscar material sobre como o treinamento ajusta os pesos e sobre a taxonomia IA ⊃ aprendizado de máquina ⊃ deep learning — ver [conceito](./concepts/deep-learning.md).
- Curso Profissional AI — Agentes: ingerir as aulas práticas seguintes (primeiro MCP prático, projetos) e a aula IA-14, hoje só com título e URL (ver [Criando Skill](./sources/2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md), [SDD](./sources/2026-11-07_source-agentes-ia-sdd.md), [MCP](./sources/2026-11-08_source-agentes-ia-mcp.md), [Skill × MCP](./sources/2026-11-08_source-agentes-ia-skill-vs-mcp.md)).
- Codex recarrega Skills sozinho? As aulas "Criando Skill" e "Skill com Código" se contradizem.
- Segurança de MCPs de catálogos e de Skills de terceiros com scripts: o curso só recomenda verificar a procedência.
- Home Repo: como Matt Pocock organiza a wiki dentro do repo (vídeo prometido) e se este repositório deve virar home repo — ver [conceito](./concepts/home-repo.md).
- Matt Pocock (entrevista ao The Pragmatic Engineer): localizar as skills Wayfinder e "grill with docs" e conferir os números citados (~230 mil estrelas, ~1,2 milhão de views); trechos duvidosos da legenda ("Sandals", "Lauren", "Peter break", "Opus 5") — ver [resumo](./sources/2026-09-17_source-matt-pocock-pragmatic-engineer.md).
- Uncle Bob (live com Matt Pocock): as ferramentas dele (CRAP, mutation tester, harness, visualizador de arquitetura) não estão publicadas; verificar se há versão aberta para TypeScript, e se CRAP/teste de mutação melhoram agentes além do relato dele; limiares CRAP 4/6/8 sem dados — ver [resumo](./sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) e [Verificação determinística](./concepts/verificacao-deterministica.md).
- Posições conflitantes sobre SDD e TDD (Bob, Matt, curso Profissional AI): sem experimento comparável na wiki — ver [SDD](./concepts/spec-driven-development.md) e [TDD](./concepts/tdd.md).
- Artigo acadêmico sobre a skill `retro` de Matt Pocock: ler e comparar com a posição dele (humano no loop) — ver [shorts](./sources/2026-07-16_source-matt-pocock-shorts.md).
- Limite de passos por spec (SDD) antes do context rot: a anedota de 150–200 passos não é evidência.
- Projeto DDD + Express (decisões vindas só da conversa com LLM): qual direção o projeto adotou entre `restore()` e `tryCreate()` (a conversa sugere as duas) — ver [DDD](./concepts/ddd.md).
- Verificar no livro de Eric Evans a distinção criar × reconstituir atribuída a ele na conversa — ver [DDD](./concepts/ddd.md).
- Verificar na documentação do Node se `crypto.randomUUIDv7()` existe e a partir de qual versão — ver [Objeto de Valor](./concepts/objeto-de-valor.md).

### DDD e Arquitetura Limpa (consolidadas em 2026-11-12, pedido do lint de 2026-11-04)

- CQS prático: a interface `usuario.queries.ts` foi mencionada na imersão, mas não implementada — ver [Arquitetura Limpa](./concepts/arquitetura-limpa.md). Relacionado: CQRS ainda não tem página própria (está espalhado em [DDD](./concepts/ddd.md) e [Agregado](./concepts/agregado.md)).
- Mapeamento entidade ↔ banco: a imersão não mostra a conversão de VOs com Prisma; o projeto Express decidiu por um Mapper `toDomain`/`toPersistence` (só na conversa com LLM) — ver [Arquitetura Limpa](./concepts/arquitetura-limpa.md) e [Objeto de Valor](./concepts/objeto-de-valor.md).
- Presenters/DTOs de resposta HTTP e `CriptografiaProvider` concreto com bcrypt ainda não demonstrados na imersão.
- `Validator` com Fluent API genérico e reutilizável entre VOs — ver [DDD](./concepts/ddd.md) e [Objeto de Valor](./concepts/objeto-de-valor.md).
- Relacionamento entre agregados (ex.: User → Group) sem acoplamento — ver [Agregado](./concepts/agregado.md).
- Mapa de contextos e integração `auth` × `financeiro` (API, eventos ou shared kernel) — ver [Contexto Delimitado](./concepts/contexto-delimitado.md).
- Limites de modelos ricos com ORMs (Prisma, TypeORM) e Linguagem Ubíqua com equipe e cliente em idiomas diferentes — ver [DDD](./concepts/ddd.md).

## Notas

- Promova questões não resolvidas importantes de novos resumos de fonte para esta página
- Revise esta página durante passes de verificação
