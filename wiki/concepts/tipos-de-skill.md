---
title: "Tipos de Skill"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["skills", "taxonomia", "determinística", "híbrida", "ia-generativa"]
source_files:
  - raw/sources/2026-05-04_transcrição-IA-12-ContextoRulesSkill-tiposDeSkill.md
  - raw/sources/2026-05-04_transcrição-IA-13-SkillModulos-IntroducaoEModulos.md
  - raw/sources/2026-11-06_transcricao_AgentesDeIA_EstilosDeSkill.md
related_pages:
  - ./ia-generativa.md
  - ./rules-e-skills.md
  - ./skills-na-pratica.md
  - ./spec-driven-development.md
  - ../sources/2026-05-04_source-dev-ai-tipos-de-skill.md
  - ../sources/2026-05-05_source-dev-ai-skill-modulos-intro.md
  - ../sources/2026-11-06_source-agentes-ia-estilos-de-skill.md
---

# Tipos de Skill

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Taxonomia de Skills por grau de autonomia do agente (determinística, híbrida, aberta; aula IA-12) e a taxonomia equivalente do curso Profissional AI por meio de execução (só modelo, determinística, mista). Inclui as Skills práticas do Capítulo 3 (criar projeto e criar módulo).

## Compreensão Atual

### Tipos de Skill (Aula IA-12)
As Skills são classificadas em três tipos conforme o grau de autonomia concedida ao agente:

| Tipo | Descrição | Quando usar |
|---|---|---|
| **Determinística** | Contém um script que o agente simplesmente executa (ex.: `run.js` via Node). Resultado fixo e previsível. | Automações repetíveis com resultado pré-definido (ex.: scaffold de projeto, copiar estrutura de arquivos, criar worktree Git) |
| **Híbrida** | Parte do processo é determinística (script); parte é delegada ao agente via instrução textual. | Criação de módulos onde a estrutura base é fixa, mas a integração com código existente requer raciocínio |
| **Aberta** | Processo 100% textual — o agente decide como executar cada passo. | Forma mais comum; adequada para Skills de código onde o contexto varia por projeto |

**Skills como contêiner de arquivos**: uma pasta de Skill pode conter múltiplos arquivos além do `skill.md`:
- Scripts (`run.js`, `createproject.js`) para execução determinística.
- Assets e configurações pré-definidas (ex.: `.prettierrc`, imagens padrão, Dockerfile).
- Projetos-template completos que o script copia para o destino.

**Exemplo real**: script `paralelo.js` dentro de uma Skill que cria git worktrees para que múltiplos agentes trabalhem em paralelo em branches isoladas — exemplo de Skill determinística/híbrida para infraestrutura de desenvolvimento.

**Encadeamento de Skills (Spec Driven Development)**: cada task no Spec Driven Development pode carregar uma Skill diferente, permitindo composição de comportamentos especializados:

```
Skill 1 + Task 1 → executar
Skill 2 + Task 2 → executar
...
Skill N + Task N → executar
```

**Mesma taxonomia em outro curso (Profissional AI — Agentes, 2026-11-06)**: na trilha "Automação com Agentes de IA" da formacao.dev, o instrutor apresenta os mesmos três estilos, mas classificando pelo **meio de execução** em vez do grau de autonomia:

| Estilo (Agentes de IA) | Quem executa | Exemplo falado na aula | Equivalente na IA-12 |
|---|---|---|---|
| Só modelo | Modelo de linguagem, guiado por texto/exemplos no contexto | Resumir um texto grande | Aberta |
| Determinística | Código com passo a passo fixo | Inverter as letras de um texto | Determinística |
| Mista | Código + modelo | — (não exemplificado) | Híbrida |

- **Pré-requisito de ambiente** (afirmação do instrutor): ter **Python** e **Node.js** instalados, pois cobrem "praticamente qualquer" automação via Skills; o modelo já sabe usar ambas. Relaciona-se aos scripts `run.js`/`index.js` das Aulas IA-12 e Ferramentas Agênticas (Node.js). Python não aparecia nas fontes anteriores.
- Interpretação: a repetição entre cursos sugere que a taxonomia é um conceito estável do instrutor; os dois critérios (autonomia × meio de execução) são complementares, não conflitantes.
- Fonte: [Agentes de IA — Estilos de Skill](../sources/2026-11-06_source-agentes-ia-estilos-de-skill.md) (aula curta, sem demonstração; exemplos apenas falados).

### Skills Práticas do Capítulo 3: Criar Projeto e Criar Módulo (Aula IA-13)
O Capítulo 3 da trilha Dev AI tem como objetivo construir duas Skills centrais reutilizáveis:

| Skill | Propósito | Tipo |
|---|---|---|
| **Criar projeto do zero** | Scaffold e configuração completa de novo projeto | Determinística + Híbrida |
| **Criar módulo** | Adicionar novo módulo a projeto existente, com integração contextual | Determinística + Híbrida |

Ambas demonstram na prática a combinação determinística + híbrida introduzida na Aula IA-12.

**Modularização como espectro gradual** (insight da Aula IA-13): modularização não é binária — é uma gradação progressiva conforme a maturidade do projeto e do desenvolvedor:

| Nível | Estrutura | Quando usar |
|---|---|---|
| 1 | Um único módulo | Projetos pequenos; iniciante no conceito |
| 2 | Dois módulos (ex.: `auth` + `app`) | Separação mínima de responsabilidades |
| 3+ | Múltiplos módulos com fronteiras claras | Equipes grandes; complexidade real de negócio |

**Princípio**: não atrasar o deploy por perfeccionismo estrutural. Levar a aplicação ao ar e refatorar progressivamente ("trocar a asa com o avião voando").

## Fontes de Suporte

- [Dev AI — Aula 12: Tipos de Skill](../sources/2026-05-04_source-dev-ai-tipos-de-skill.md)
- [Dev AI — Aula 13: Skill e Módulos — Introdução ao Capítulo](../sources/2026-05-05_source-dev-ai-skill-modulos-intro.md)
- [Agentes de IA (Profissional AI) — Estilos de Skill e Pré-requisitos](../sources/2026-11-06_source-agentes-ia-estilos-de-skill.md)

## Conceitos Relacionados

- [rules-e-skills](./rules-e-skills.md)
- [skills-na-pratica](./skills-na-pratica.md)
- [spec-driven-development](./spec-driven-development.md)

## Questões Não Resolvidas

- ~~**Skills complexas**: qual estrutura de pasta para Skills com subpastas de referências?~~ → **Parcialmente resolvida na Aula IA-12**: uma pasta de Skill pode conter múltiplos arquivos (scripts como `run.js`, assets, configurações, projetos-template). Skills que chamam outras Skills não foram formalizadas.
- **Skill determinística vs. híbrida**: quando exatamente preferir uma à outra? A linha divisória ainda é subjetiva. (A aula "Estilos de Skill" do curso Profissional AI repete a taxonomia sem resolver este ponto.)
- **Python em Skills**: o curso Profissional AI recomenda Python + Node.js para Skills com código; as demais fontes só mostram Node.js. Qual linguagem preferir, e por quê? Não esclarecido.
- **Execução de scripts em Skills**: como o agente sabe quando executar um script vs. seguir instruções textuais? Há conflito possível entre os dois modos?
- **Versionamento de scripts em Skills**: como atualizar `run.js` sem quebrar Skills existentes que dependem dele?
- **Paralelização com git worktrees (Skill interna)**: detalhes de configuração do script `paralelo.js` mencionado pelo instrutor não foram documentados.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
