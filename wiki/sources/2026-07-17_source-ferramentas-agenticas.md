---
title: "Dev AI — Ferramentas Agênticas: Pastas das Skills, Skills Básica/Com Código/No Codex, Especificação Simples"
type: source
status: active
created: 2026-07-17
updated: 2026-07-17
tags: ["skills", "spec-driven-development", "ferramentas-agenticas", "claude-code", "codex", "agentes"]
source_files:
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-01-PastasDasSkills.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-02-SkillBasica copy.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-03-.SkillComCodigo.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-04-SkillNoCodex.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-05-EspecificacaoSimples.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
---

# Dev AI — Ferramentas Agênticas (Aulas 01–06)

Módulo introdutório "Ferramentas Agênticas" do curso "Dev AI" da formacao.dev (instrutor Leonardo/Léo). Cobre a infraestrutura básica de Skills em ferramentas agênticas (Claude Code e Codex), a criação de Skills simples e determinísticas, e uma introdução prática ao Spec-Driven Development com especificações simples. A aula 06 (Harness Parte 1) não contém conteúdo transcrito.

**Fonte**: https://escola.formacao.dev/ia-dev/sala/ferramentas-agenticas

## Resumo

As primeiras cinco aulas estabelecem os fundamentos práticos de uso de Skills em ferramentas agênticas: onde ficam as pastas, como criar um arquivo `skill.md`, como Skills são acionadas (explicitamente ou por gatilho implícito via description), como incluir scripts executáveis dentro de uma Skill (Skills determinísticas), e como orquestrar múltiplas Skills e tarefas através de especificações Markdown simples (Spec-Driven Development).

## Pontos-Chave

### Aula 01 — Pastas das Skills

- **Claude Code**: pasta `.claude/skills/` dentro do projeto
- **Codex**: pasta `.agents/skills/` dentro do projeto
- Pastas com ponto (`.claude`, `.agents`) são ocultas no macOS/Linux; no Windows aparecem normalmente no VS Code
- Skills ficam dentro do projeto por padrão; para compartilhar entre projetos, usar **git submodules**
- Skills como pilar base do curso inteiro

### Aula 02 — Skill Básica

- Estrutura mínima de uma Skill: arquivo `skill.md` dentro de uma subpasta (ex.: `.claude/skills/curto-e-grosso/skill.md`)
- Frontmatter obrigatório: `name` (kebab-case) + `description`
- A `description` serve como **gatilho implícito** — palavras-chave na description disparam a Skill sem referência explícita
- Chamada explícita: `/nome-da-skill` via comando no chat
- O corpo da Skill é um **prompt reutilizável** que muda o contexto da resposta
- Aplicação: Skills para estilos de resposta, padrões de projeto, padrões da empresa

### Aula 03 — Skill Com Código

- Skill pode conter **múltiplos arquivos** (não apenas `skill.md`)
- Exemplo: adicionar `index.js` à pasta da Skill para criar uma Skill **determinística**
- A Skill instrui o agente a executar o arquivo (ex.: `node index.js`) e retornar o resultado
- Gatilhos implícitos funcionam também para Skills com código
- Skills determinísticas permitem: criar pastas, baixar conteúdo, configurar projetos, rodar testes

### Aula 04 — Skill no Codex

- Comportamento das Skills é **praticamente idêntico** no Codex e no Claude Code
- Analogia: Skill = **função/procedure** na programação — trecho reutilizável e acionável
- Engenharia de contexto > prompt único gigante: melhor quebrar em passos, carregando Skills específicas por passo
- Analogia do estagiário: briefing de semana inteira na segunda = menos eficiente que orientações step-by-step com documentação específica por tarefa
- Preferência do instrutor: **chamada explícita** de Skills em vez de depender de gatilhos implícitos

### Aula 05 — Especificação Simples (Spec-Driven Development)

- Conceito renomeado pelo instrutor para leigos: **receitas** (ingredientes + passo a passo + saída = algoritmo)
- Estrutura de pasta: `specs/changes/<nome-da-mudança>/spec.md`
  - `specs/archive/`: especificações concluídas (com data no nome de arquivo)
- Arquivo `spec.md`: título + seção de orientações + lista de tarefas com checkboxes (`- [ ]`)
- Orientações úteis dentro da spec: "marque os passos concluídos", "coloque uma evidência abaixo de cada passo"
- Execução: enviar o caminho do arquivo spec.md para o agente — ele executa os passos
- Paralelização: instrução "execute os passos usando subagentes em paralelo"
- Contexto independente por passo: "execute de forma sequencial, utilizando subagentes, cada passo em um contexto independente"
- Organização por grupo: tarefas de negócio / back-end / front-end / mobile / batch separadas por seção
- Rastreabilidade: o agente marca checkboxes como concluídos (`[x]`) e pode adicionar evidências com data/hora

### Aula 06 — Harness Parte 1

- Arquivo transcrito sem conteúdo (aula possivelmente não gravada ou transcrição vazia)

## Afirmações/Observações Principais

- A Skill é, para desenvolvimento com IA, o equivalente à **procedure/função** na programação procedural — o maior divisor de águas é ter trechos reutilizáveis e acionáveis
- O grande poder das Skills não é o reuso em si, mas a capacidade de **mudar o contexto** no momento certo: colocar a Skill no topo do contexto aumenta a atenção do modelo naquilo que importa
- Skills + Spec-Driven Development = orquestração de chamadas em vez de mega-prompts; cada passo tem Skills específicas, resultando em respostas muito mais precisas
- O instrutor confirma ter executado com sucesso **10 especificações encadeadas**, cada uma com 10-15 passos
- A `description` da Skill é um mecanismo de disparo automático — deve ser escrita com cuidado para evitar falsos positivos

## Notas de Evidência

- Aulas 01-05: transcrições completas disponíveis em `raw/sources/2026-07-17_*`
- Demonstrações ao vivo: instrutor cria Skills no Claude Code e as replica no Codex
- Aula 06: transcrição vazia — sem evidência de conteúdo

## Impacto na Wiki Existente

- **`concepts/ia-generativa.md`**: expandir seção de Skill com detalhes práticos de pastas (`.claude/skills/` vs `.agents/skills/`), frontmatter mínimo, gatilho implícito vs explícito, Spec-Driven Development com estrutura de pasta e checkboxes
- Nenhuma contradição com fontes anteriores — aprofunda e concretiza o que havia sido introduzido nas Aulas IA-11 a IA-13

## Questões Não Resolvidas

- Conteúdo de "Harness" — o que é e como funciona? (Aula 06 estava vazia)
- Como o Claude Code decide quando recarregar Skills após alteração de arquivo (o instrutor notou instabilidade)
- Detalhes de git submodules para compartilhar Skills entre projetos
- Como gerenciar conflitos quando múltiplos subagentes modificam os mesmos arquivos em paralelo
- Limite prático de especificações encadeadas ou passos em paralelo

## Páginas Relacionadas

- [ia-generativa.md](../concepts/ia-generativa.md)
- [formacao-dev.md](../entities/formacao-dev.md)
