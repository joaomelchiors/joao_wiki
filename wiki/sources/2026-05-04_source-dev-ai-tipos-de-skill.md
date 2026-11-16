---
title: "Dev AI — Aula 12: Tipos de Skill (Determinística, Híbrida e Aberta)"
descricao: 'Aula IA-12 (Dev AI) — taxonomia de três tipos de Skill (determinística, híbrida, aberta); Skill como contêiner de arquivos (scripts, assets, templates); encadeamento de Skills no Spec Driven Development.'
type: source
status: active
created: 2026-05-04
updated: 2026-11-12
tags: ["ia-generativa", "skill", "ai-driven-development", "agentes", "spec-driven-development"]
source_files:
  - raw/sources/2026-05-04_transcrição-IA-12-ContextoRulesSkill-tiposDeSkill.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - 2026-05-04_source-dev-ai-exemplo-skill.md
  - 2026-04-29_source-dev-ai-rule-skill.md
  - ../concepts/tipos-de-skill.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula 12: Tipos de Skill (Determinística, Híbrida e Aberta)

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula de taxonomia com exemplos falados; nenhuma execução.

## Resumo

Aula de fechamento do capítulo "Agentes, Skills & Eng. de Contexto" da trilha Dev AI (formacao.dev). O instrutor Leonardo formaliza uma taxonomia de três tipos de Skills — determinísticas, híbridas e abertas — distinguindo-as pelo grau de autonomia concedida ao agente. A aula também reforça a definição de Skill como "bloco de instruções, regras, contexto e, às vezes, código/ferramentas" e antecipa que o próximo capítulo do curso aplicará esses tipos em projetos concretos.

## Pontos-Chave

- **Taxonomia de Skills**: três tipos com nível crescente de autonomia do agente — determinísticas, híbridas e abertas.
- **Skills determinísticas**: contêm um script (ex.: `run.js`) que o agente simplesmente executa — resultado previsível e fixo; adequadas para tarefas recorrentes com estrutura pré-definida (ex.: scaffold de projeto de landing page).
- **Skills híbridas**: parte do processo é determinística (script); parte é delegada ao agente para decidir como executar — adequadas para criar módulos onde a estrutura base é fixa mas a integração com código existente requer raciocínio.
- **Skills abertas**: processo totalmente delegado ao agente via descrição passo a passo — forma mais comum; sem scripts auxiliares.
- **Skills como contêiner de arquivos**: uma pasta de Skill pode conter arquivos pré-definidos (assets, configurações, projetos-template) além do `skill.md`.
- **Spec Driven Development reforçado**: encadeamento de tasks (Skill 1 → Task 1 → Skill 2 → Task 2) como base do Spec Driven Development.

## Afirmações/Observações Principais

- A definição reforçada de Skill: *"Um bloco de instruções, regras, contexto e, às vezes, código/ferramentas que ensinam a executar um tipo de tarefa de forma mais consistente."* — Consistência é o valor central.
- Skills determinísticas são adequadas para automações de infra (ex.: o instrutor mostra um script `paralelo.js` que cria git worktrees para agentes rodarem em paralelo em branches isoladas).
- Skills com scripts internos permitem chamar npm, Docker, Git, APIs — a Skill não é apenas texto, é um processo executável.
- O instrutor observa que Skills abertas são a forma mais comum, seguidas pelas híbridas; determinísticas são casos específicos de automação pesada.

## Notas de Evidência

- Definição de Skill reiterada no início da aula como ponto de partida pedagógico.
- Exemplo de Skill determinística: pasta `criar-projeto-completo/` com `skill.md` + `run.js`; o agente recebe instrução "execute o arquivo run.js" e o Node roda o script.
- Exemplo de Skill híbrida: pasta `criar-modulo-completo/` com `skill.md` + `createproject.js`; script cria estrutura, agente integra no projeto existente.
- Exemplo real do instrutor: script `paralelo.js` que cria git worktrees para execução paralela de agentes — classificado como caso de Skill determinística/híbrida.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Tipos de Skill](../concepts/tipos-de-skill.md).

- `concepts/ia-generativa.md`: ampliar a seção de Skill com a taxonomia de três tipos; adicionar que Skills podem conter arquivos auxiliares (scripts, assets, templates).
- Questão aberta "Skills complexas: qual estrutura de pasta para Skills com subpastas?" — **parcialmente resolvida**: a aula confirma que pasta de Skill pode conter múltiplos arquivos (scripts, assets, projetos-template); subpastas de referências continuam sem detalhamento formal.
- Sem contradições com fontes anteriores — reforça e estende a Aula IA-11.

## Questões Não Resolvidas

- Quando exatamente preferir Skill híbrida vs. Skill aberta? A linha entre elas ainda é subjetiva.
- Como o agente "sabe" quando deve chamar um script vs. seguir instruções textuais dentro de uma Skill?
- Gestão de versão de scripts dentro de Skills: como atualizar `run.js` sem quebrar Skill existente?
- Paralelização nativa com git worktrees: detalhes de configuração do script `paralelo.js` não documentados.

## Páginas Relacionadas

- [IA Generativa (conceito)](../concepts/ia-generativa.md)
- [Dev AI — Aula 11: Exemplo Prático de Skill](2026-05-04_source-dev-ai-exemplo-skill.md)
- [Dev AI — Aula 10: Rule vs. Skill — Definições Canônicas](2026-04-29_source-dev-ai-rule-skill.md)
- [formacao.dev (entidade)](../entities/formacao-dev.md)
