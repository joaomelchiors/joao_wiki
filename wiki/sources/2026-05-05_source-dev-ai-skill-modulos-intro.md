---
title: "Dev AI — Aula IA-13: Skill e Módulos — Introdução ao Capítulo"
type: source
status: active
created: 2026-05-05
updated: 2026-11-12
tags: ["dev-ai", "skills", "modularização", "formacao-dev"]
source_files:
  - raw/sources/2026-05-04_transcrição-IA-13-SkillModulos-IntroducaoEModulos.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
tipo_conteudo: explicacao
captura: automatica
---

# Dev AI — Aula IA-13: Skill e Módulos — Introdução ao Capítulo

**Fonte**: `raw/sources/2026-05-04_transcrição-IA-13-SkillModulos-IntroducaoEModulos.md`  
**Curso**: Dev AI (formacao.dev) — Capítulo 3: "Skill e Módulos"  
**Instrutor**: Leonardo (Léo)  
**URL**: https://escola.formacao.dev/ia-dev/sala/agentes-skills-eng-ctx?aula=223f70b0-ba30-4763-9531-191237da0418

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): aula de orientação do capítulo; quase nenhum conteúdo técnico.

## Resumo

Aula introdutória do Capítulo 3 da trilha Dev AI. O instrutor não apresenta conceitos técnicos novos — o conteúdo é de orientação pedagógica e de alinhamento de expectativas antes de entrar na parte prática do capítulo.

O capítulo se propõe a construir **duas Skills centrais** que serão reutilizadas em outros cursos:
1. **Skill de criação de projeto do zero**: incluindo configuração e scaffold do ambiente.
2. **Skill de criação de novos módulos**: para aplicações que crescem de forma modularizada.

Ambas servem como exercício prático dos tipos de Skill (determinística + híbrida) introduzidos na Aula IA-12.

## Pontos-Chave

### Modularização como Espectro Gradual

O instrutor apresenta modularização não como binário (modular vs. monolítico), mas como **gradação progressiva**:

| Nível | Estrutura | Quando usar |
|---|---|---|
| 1 | Um único módulo | Projetos pequenos; desenvolvedor iniciante no conceito |
| 2 | Dois módulos (ex.: `auth` + `app`) | Separação mínima de responsabilidades |
| 3+ | Múltiplos módulos com fronteiras claras | Equipes grandes; complexidade real de negócio |

**Conclusão do instrutor**: não há necessidade de modularizar logo de cara. O ideal é modularizar, mas a decisão depende de maturidade do desenvolvedor e necessidade real do projeto.

### Filosofia: Não Atrasar por Perfeccionismo

> "Não atrasa a tua implantação do sistema. Leva a aplicação para a produção, deixa o usuário usar, melhora a aplicação e depois você pode fazer refatorações."

Metáfora: "trocar a asa e o motor com o avião no ar" — refatorar progressivamente sem parar a operação.

Crítica ao perfeccionismo prematuro: buscar modularização perfeita antes de validar o produto com usuários é contraproducente.

### Skills do Capítulo: Determinísticas + Híbridas na Prática

As duas Skills anunciadas para o capítulo são intencionalmente projetadas para demonstrar a combinação de Skills determinísticas (parte via script) com Skills híbridas (parte via instrução textual ao agente). O instrutor retornou do futuro após gravar o capítulo para contextualizar: as Skills foram validadas e serão reutilizadas em projetos com 1, 2 e múltiplos módulos.

## Afirmações e Evidências

| Afirmação | Evidência | Força |
|---|---|---|
| Modularização é ideal mas não obrigatória | Opinião do instrutor com justificativa pedagógica | Moderada (perspectiva do instrutor) |
| Skills do capítulo serão reutilizadas em cursos futuros | Declaração direta ("venho do futuro") | Moderada (promessa de continuidade) |
| Skills determinísticas + híbridas são superiores para criar projetos | Implícito pela escolha do instrutor para o capítulo | Baixa (não demonstrado ainda) |

## Impacto na Wiki Existente

- **Nenhum conceito novo** para adicionar a `ia-generativa.md`.
- Confirma e reforça a taxonomia de Skills (Aulas IA-11 e IA-12) com a perspectiva de aplicação prática iminente.
- Adiciona nuance sobre **modularização como espectro gradual** — conceito complementar ao que já existe em `concepts/contexto-delimitado.md` (Bounded Context) e `overview.md` (modularização como pilar #1 do AI-Driven Development).
- Sinaliza conteúdo futuro: implementação real das duas Skills (próximas aulas do mesmo capítulo).

## Questões Não Resolvidas

- Estrutura concreta das duas Skills prometidas (criação de projeto e criação de módulo) — serão apresentadas nas próximas aulas do capítulo.
- Critérios precisos para decidir entre 1, 2 ou múltiplos módulos — o instrutor menciona que serão apresentados "mais lá na frente".
- Como a Skill de criação de módulo se adapta a projetos com 1 módulo vs. múltiplos (o instrutor diz que usará a mesma Skill com "orientações diferentes").
