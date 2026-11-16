---
title: "Agentes de IA (Profissional AI) — Estilos de Skill e Pré-requisitos (Python e Node.js)"
descricao: 'Aula curta do curso Profissional AI — Agentes (formacao.dev) — três estilos de Skill (só modelo, determinística, mista) e pré-requisito Python + Node.js; reforça a taxonomia da IA-12.'
type: source
status: active
created: 2026-11-06
updated: 2026-11-12
tags: ["ia-generativa", "skill", "agentes", "formacao-dev", "python", "nodejs", "skill-deterministica", "skill-hibrida"]
source_files:
  - raw/sources/2026-11-06_transcricao_AgentesDeIA_EstilosDeSkill.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ./2026-05-04_source-dev-ai-tipos-de-skill.md
  - ./2026-07-17_source-ferramentas-agenticas.md
  - ../concepts/tipos-de-skill.md
tipo_conteudo: explicacao
captura: automatica
---

# Agentes de IA (Profissional AI) — Estilos de Skill e Pré-requisitos (Python e Node.js)

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula curta conceitual; exemplos apenas falados.

## Resumo

Aula curta (~18 parágrafos de transcrição) de um **curso diferente** da formacao.dev: a trilha "Automação com Agentes de IA" da sala "Profissional AI — Agentes" (URL na primeira linha do arquivo bruto). O instrutor (Leonardo, pela mesma plataforma; a transcrição não traz o nome) apresenta, antes de a turma executar a primeira Skill pronta, **três estilos de Skill** — só modelo, só código (determinística) e mista (híbrida) — e orienta a instalar **Python** e **Node.js** no computador, mesmo para quem não é programador. O público parece ser mais amplo que o da trilha Dev AI (inferência: há explicação de como baixar/instalar, e a fala "mesmo que você não seja programador").

## Pontos-Chave

- **Plano didático**: primeiro *usar* uma Skill criada por outra pessoa; depois criar a própria. Na sequência, o instrutor promete construir junto uma Skill **com** código e outra **sem** código.
- **Três estilos de Skill**:
  1. **Só modelo (aberta)**: trecho reutilizável "jogado" no contexto do chat para orientar o modelo (orientações, exemplos). Exemplo dado: Skill que resume um texto grande com todos os detalhes de como resumir bem.
  2. **Determinística**: usa linguagem de programação; o passo a passo é fixo e o resultado tende a ser sempre o mesmo (o instrutor admite "alguma variação" conforme a lógica). Exemplo dado: inverter todas as letras de um texto por código.
  3. **Híbrida**: parte do processo por código, parte pelo modelo de linguagem ("o melhor dos dois mundos"; descrita como o que "temos usado até agora").
- **Pré-requisito de ambiente**: ter **Python** (python.org, instaladores Windows/macOS) e **Node.js** (instalador oficial; usa JavaScript) configurados. Justificativa: cobrem "praticamente qualquer coisa" que se queira automatizar via Skills, e o modelo já sabe usar as linguagens.
- **Segurança das ferramentas**: o instrutor afirma que Python e Node.js são seguros, sem propaganda/software extra e amplamente usados (afirmação do instrutor, não verificada aqui).
- **Apoio**: se houver dificuldade na instalação, o instrutor diz que fará artigo/aula de passo a passo; links serão colocados na aula seguinte.

## Afirmações/Observações Principais

- Skill = "trecho que você reusa várias vezes" e que entra no contexto para direcionar a resposta — formulação coloquial, **compatível** com a definição canônica (Rule vs. Skill) já registrada na wiki, porém mais simples.
- A divisão em três estilos é **a mesma taxonomia da Aula IA-12** (determinística / híbrida / aberta), com nomes diferentes: aqui os estilos são apresentados pelo critério "quem executa o trabalho: modelo, código ou ambos". Isso sugere que a taxonomia é uma ideia estável do instrutor entre cursos, não um detalhe de uma aula.
- Diferença de ênfase: na IA-12 a classificação é pelo **grau de autonomia do agente**; aqui, pelo **meio de execução** (IA vs. linguagem de programação). Não é contradição; são dois critérios complementares.

## Notas de Evidência

- Todo o conteúdo vem de uma única transcrição curta, sem código, demonstração ou tela; os exemplos (resumir texto, inverter letras) são ilustrativos, falados, não implementados na aula.
- O nome do instrutor não consta no arquivo; a atribuição a Leonardo é inferência pela plataforma (formacao.dev) e pelo estilo de fala. Marcar como **não verificado**.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Tipos de Skill](../concepts/tipos-de-skill.md).

- `concepts/ia-generativa.md`: acrescentar nota na subseção "Tipos de Skill" mostrando que a mesma taxonomia reaparece em outro curso, o critério alternativo (meio de execução) e o pré-requisito Python/Node.js.
- `entities/formacao-dev.md`: registrar o **terceiro curso/trilha** ("Profissional AI — Agentes", trilha "Automação com Agentes de IA").
- `overview.md`: pequena atualização (escopo/perspectiva: Skills para automação por não programadores).
- Nenhuma contradição com fontes anteriores.

## Questões Não Resolvidas

- Qual é a Skill pronta que será usada na aula seguinte, e de quem é?
- Como será a Skill "com código" vs. "sem código" prometida? (a conferir quando houver transcrições)
- Quais ferramentas (harness) o curso usa — Claude Code, Codex, outra? A aula não diz.
- Python **e** Node.js são mesmo necessários, ou o curso só os usa em exemplos? O instrutor afirma necessidade, mas sem demonstração.

## Páginas Relacionadas

- [IA Generativa (conceito)](../concepts/ia-generativa.md) — seção "Tipos de Skill"
- [Dev AI — Aula 12: Tipos de Skill](./2026-05-04_source-dev-ai-tipos-de-skill.md) — mesma taxonomia, critério por autonomia
- [Dev AI — Ferramentas Agênticas (Aulas 01–05)](./2026-07-17_source-ferramentas-agenticas.md) — Skills determinísticas com scripts Node.js
- [formacao.dev (entidade)](../entities/formacao-dev.md)
