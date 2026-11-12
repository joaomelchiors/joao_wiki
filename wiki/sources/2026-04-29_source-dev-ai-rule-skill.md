---
title: "Dev AI — Aula IA-10: Rule vs. Skill — Definições Canônicas"
type: source
status: active
created: 2026-04-29
updated: 2026-11-12
tags: ["ia-generativa", "rules", "skills", "engenharia-de-contexto", "few-shot", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - 2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - 2026-04-28_source-dev-ai-engenharia-de-prompt.md
  - ../concepts/rules-e-skills.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula IA-10: Rule vs. Skill — Definições Canônicas

**Fonte**: `raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md`  
**Plataforma**: [formacao.dev](https://escola.formacao.dev) — trilha Dev AI, módulo "Agentes, Skills & Engenharia de Contexto"

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula de definições (Rule × Skill); nenhuma execução.

## Resumo

Aula curta dedicada a **conceituar formalmente Rule e Skill**, os dois pilares da engenharia de contexto. O instrutor (Léo) apresenta definições refinadas geradas pelo Claude Code e corrigidas por ele, destacando que os conceitos transcendem ferramentas específicas. A principal distinção: Rule é *declarativa* (restrição passiva), Skill é *ativa* (processo passo a passo). A aula também introduz a técnica **few-shot** como mecanismo de funcionamento interno das Skills.

## Pontos-Chave

- **Rule (Regra)**: convenção ou restrição *declarativa* que o agente deve respeitar quando o contexto for relevante. Foca em *o quê* (restrição), não em *como* (processo). Não necessariamente global — aplica-se apenas quando pertinente.
- **Skill (Habilidade)**: capacidade de executar uma tarefa de ponta a ponta seguindo um processo *definido e ordenado*. É *ativa* — descreve como fazer algo passo a passo. Pode referenciar Rules internamente.
- **Few-shot**: técnica de incluir exemplos de código dentro do prompt ou da Skill para guiar o modelo. Fundamental para o funcionamento das Skills (o modelo aprende o padrão a partir dos exemplos).
- **Independência de ferramenta**: Rule e Skill são conceitos agnósticos — Cursor, Claude Code, Codex e Antigravity implementam os mesmos conceitos (às vezes com nomes diferentes). O conceito importa mais que a ferramenta.
- **Relação Rule → Skill**: uma Skill pode (e deve) referenciar Rules relevantes internamente. As Rules são "passivas" que a Skill "ativa" no momento certo.

## Afirmações/Observações Principais

- **Definição de Rule** (refinada via Claude Code, corrigida pelo instrutor):
  > "Uma Rule é uma convenção ou restrição que o agente deve respeitar quando o contexto for relevante. O que define uma Rule não é a sua abrangência, mas sim que ela é declarativa e descreve restrições sem necessariamente definir como um determinado padrão é aplicado."

- **Definição de Skill** (refinada via Claude Code, corrigida pelo instrutor):
  > "Uma Skill tem capacidade de executar uma tarefa complexa de ponta a ponta, seguindo um processo definido e ordenado. Ela é ativa, descreve como fazer algo passo a passo. Internamente, uma Skill sabe quais são as Rules relevantes para aquela tarefa e as aplica automaticamente."

- Uma Skill é, em essência, **manipulação do contexto**: um arquivo Markdown colocado no topo do contexto, com descrição do processo + exemplos few-shot.
- O Cursor tem Rule implícita e Skill explícita; Claude Code tem ambos; o princípio de engenharia de contexto vale para qualquer ferramenta.

## Notas de Evidência

- Transcrição verbal do instrutor Léo (formacao.dev). Definições atribuídas a sessão com Claude Code, revisadas pelo instrutor.
- Menção explícita a ferramentas: Cursor, Claude Code (Cláudio Code), Codex, Antigravity — todas implementam os conceitos.
- Aula descrita como "super rápida" pelo instrutor — confirma que é material conceitual denso e sintético.
- Aula seguinte prometida: criação prática de uma Rule e uma Skill com exemplo concreto.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Rules e Skills](../concepts/rules-e-skills.md).

- **`concepts/ia-generativa.md`**: atualizar seção "Rule vs. Skill" com as definições canônicas (declarativa vs. ativa), a técnica few-shot, e a relação Rule → Skill (referência interna). A nota de "não verificado" na seção atual pode ser removida.
- Sem contradições com fontes anteriores — esta aula resolve explicitamente a questão "qual a diferença formal entre Rule e Skill?" que estava em aberto desde a Aula IA-09.

## Questões Não Resolvidas

- Como estruturar um arquivo de Skill na prática: qual formato de Markdown, quais seções, quantos exemplos few-shot são suficientes?
- Como uma Skill referencia uma Rule concretamente nas diferentes ferramentas (Cursor, Claude Code, Codex)?
- Há limite de tamanho para uma Rule ou Skill antes de prejudicar o contexto?
- A próxima aula promete exemplo prático — aguardar material.

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md): conceito central; seção de engenharia de contexto
- [Dev AI — Aula 09: Engenharia de Contexto](2026-04-29_source-dev-ai-engenharia-de-contexto.md): aula anterior que introduziu context rot e a distinção Rule/Skill informalmente
- [Dev AI — Aula 08: Engenharia de Prompt](2026-04-28_source-dev-ai-engenharia-de-prompt.md): aula que introduz CORFT e hierarquia de contexto
- [formacao.dev](../entities/formacao-dev.md): plataforma que oferece o curso
