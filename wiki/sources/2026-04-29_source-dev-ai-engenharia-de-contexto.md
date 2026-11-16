---
title: "Dev AI — Aula IA-09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)"
descricao: 'Aula IA-09 (Dev AI) — context rot; engenharia de contexto com Rules e Skills; Spec Driven Development como injeção de contexto por task em escala.'
type: source
status: active
created: 2026-04-29
updated: 2026-11-12
tags: ["ia-generativa", "engenharia-de-contexto", "rules", "skills", "spec-driven-development", "context-rot", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-09-ContextoRulesSkill-engenhariaDeContexto.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - 2026-04-28_source-dev-ai-engenharia-de-prompt.md
  - 2026-04-28_source-dev-ai-conceito-de-agentes.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/spec-driven-development.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula IA-09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)

**Fonte**: `raw/sources/2026-04-27_transcrição-IA-09-ContextoRulesSkill-engenhariaDeContexto.md`  
**Plataforma**: [formacao.dev](https://escola.formacao.dev) — trilha Dev AI, módulo "Agentes, Skills & Engenharia de Contexto"

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula conceitual sobre engenharia de contexto, context rot e SDD; nenhuma execução.

## Resumo

Aula prática sobre o conceito de **engenharia de contexto**: a arte de manipular o prompt que chega ao LLM para guiar a execução de tarefas longas por um caminho mais previsível e arquiteturalmente correto. O instrutor (Léo) explica o problema do **context rot** (apodrecimento do contexto), a diferença entre **Rules** e **Skills**, e como o **Spec Driven Development** aplica engenharia de contexto em escala, dividindo uma tarefa longa em tasks menores com injeção de contexto antes de cada uma.

## Pontos-Chave

- **Context rot**: quanto mais longa a geração, mais o modelo se perde do objetivo original — textos longos deterioram a qualidade de saída progressivamente.
- **Engenharia de contexto** = manipular o prompt *antes* de cada ação (injetar Rules + Skills) para criar guard-rails que estreitam o caminho de execução.
- **Rule**: restrição operacional — define *como* estruturar o resultado (nomenclatura de arquivo, localização de pasta, convenções).
- **Skill**: habilidade técnica — define *como* implementar determinada funcionalidade (exemplos, princípios, padrões de projeto).
- **Spec Driven Development**: divide uma tarefa longa em múltiplas `tasks` menores; antes de cada task injeta Rules + Skills + Mentions (arquivos relevantes) — aplica engenharia de contexto em cada passo.
- Ferramentas modernas de agentes fazem verificação interna ao final de cada execução e se autocorrigem dentro do processo, sem necessariamente seguir uma linha reta.
- Documentação reutilizável (Rules, Skills) deve ser amigável tanto para humanos quanto para IA.

## Afirmações/Observações Principais

- **Variabilidade é inerente**: o mesmo prompt pode gerar caminhos diferentes; engenharia de contexto *reduz* a variabilidade, não a elimina completamente.
- **Referência a arquivos via caminho relativo** é suficiente para que o modelo inclua o conteúdo — mesmo sem suporte nativo a `@arquivo`, colar o caminho dentro do prompt funciona.
- **Guard-rails de contexto** ≠ guardrails de segurança: aqui são barreiras que *definem o caminho esperado*, não barreiras contra conteúdo perigoso.
- O instrutor diferencia Rule de Skill informalmente — Rule = restrição estrutural; Skill = habilidade de implementação — mas promete mais exemplos em aulas futuras.

## Notas de Evidência

- Toda a aula é transcrição verbal do instrutor Léo (formacao.dev). Não há referências externas citadas além da própria experiência do instrutor.
- Menção explícita a Claude Code CLI como exemplo de ferramenta que injeta contexto automaticamente (menções `@arquivo`).
- Menção a Spec Driven Development como curso futuro na plataforma.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Engenharia de Contexto](../concepts/engenharia-de-contexto.md), [Spec-Driven Development (SDD)](../concepts/spec-driven-development.md).

- **`concepts/ia-generativa.md`**: expandir seção "Engenharia de Prompt e Contexto" com context rot, distinção Rule vs. Skill, e Spec Driven Development como aplicação de engenharia de contexto em escala.
- **`overview.md`**: não requer atualização — a hipótese de engenharia de contexto como pilar já está implícita.
- Sem contradições detectadas com fontes anteriores — reforça e detalha o que as Aulas IA-06 e IA-08 mencionaram.

## Questões Não Resolvidas

- Diferença precisa entre Rule e Skill com exemplos concretos — prometida para aulas futuras do curso.
- Como o Spec Driven Development é configurado na prática (estrutura de arquivo, ferramenta, convenções)?
- Limite prático de tasks em um Spec Driven Development: quantas antes do context rot se tornar problema mesmo com injeção por task?
- Como combinar Mentions (arquivos), Rules e Skills de forma otimizada para minimizar tokens consumidos sem perder contexto relevante?

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md): conceito central que fundamenta a engenharia de contexto
- [Dev AI — Aula 08: Engenharia de Prompt](2026-04-28_source-dev-ai-engenharia-de-prompt.md): aula anterior que introduz CORFT e hierarquia de contexto
- [Dev AI — Aula 07: Conceito de Agentes](2026-04-28_source-dev-ai-conceito-de-agentes.md): contexto sobre loops iterativos que tornam context rot relevante
- [formacao.dev](../entities/formacao-dev.md): plataforma que oferece o curso
