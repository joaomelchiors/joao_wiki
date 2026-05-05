---
title: "Dev AI — Aula 08: Engenharia de Prompt e Engenharia de Contexto"
type: source
status: active
created: 2026-04-28
updated: 2026-04-28
tags: ["prompt-engineering", "engenharia-de-contexto", "meta-prompt", "skills", "rules", "spec-driven-development"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-08-ContextoRulesSkill-engenhariaDePrompt.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
---

# Dev AI — Aula 08: Engenharia de Prompt e Engenharia de Contexto

## Resumo

Aula objetiva que define os princípios práticos de **engenharia de prompt** e posiciona a **engenharia de contexto** como o fator mais importante. Apresenta a estrutura **CORFT** (Contexto → Objetivo → Regras → Formato → Tarefa Final), o conceito de **meta-prompt** (IA gerando prompts), e a hierarquia: engenharia de contexto > prompt estruturado > Rules/Skills/Spec Driven Development. O instrutor reforça que prompts podem ser narrados por voz com micro-revisão no final, sem necessidade de engenharia elaborada para a maioria dos casos.

## Pontos-Chave

### Os 5 Princípios de Prompt

#### 1. Engenharia de Contexto (mais importante)

- **Contexto > prompt perfeito**: se o contexto é bom (arquivos marcados, pastas referenciadas, Skills/Rules), até um prompt narrado gera bons resultados.
- **Skills, Rules e Spec Driven Development** são formas de engenharia de contexto — manipulam o contexto que o agente/LLM recebe.
- Ferramentas de código (Codex, Claude Code) permitem marcar arquivos/pastas como contexto.

#### 2. Final do Prompt tem Peso Desproporcional

- Reforço direto da Aula IA-02: últimos tokens são mais influentes na geração.
- **Prática**: terminar o prompt com a instrução mais importante / o que realmente quer.
- Mesmo ao narrar por voz: fazer micro-revisão no final dizendo a coisa mais importante.

#### 3. Estrutura CORFT para Prompts

```
[CONTEXTO]     → Quem você é, qual o projeto, qual stack
[OBJETIVO]     → O que precisa ser feito (claro e específico)
[REGRAS]       → O que pode e não pode fazer
[FORMATO]      → Como a saída deve ser entregue
[TAREFA FINAL] → A instrução principal (sempre por último)
```

A estrutura respeita o princípio #2: tarefa final e formato ficam no final, onde têm mais peso.

#### 4. Meta-Prompt

- Pedir para a IA **gerar ou melhorar** um prompt.
- Útil para transformar um prompt narrado/informal em um prompt estruturado.
- Spec Driven Development é uma forma de meta-prompt: a especificação gerada é "um prompt gerando outro prompt".

#### 5. Engenharia de Contexto (Rules, Skills, Spec Driven Development)

- **Rules**: regras bem definidas (nomenclatura, restrições, padrões).
- **Skills**: habilidades específicas (ex.: "construa consultas SQL seguindo este padrão").
- **Spec Driven Development**: especificação multi-step que agentes seguem; combina documentação com execução.

### Hierarquia Prática

```
1. Engenharia de Contexto (Skills, Rules, Spec Driven Dev)
   ↓
2. Prompt Estruturado (CORFT)
   ↓
3. Meta-Prompt (IA gerando prompts)
```

Se o contexto é bom, prompts simples (até narrados) funcionam. Prompts elaborados são necessários apenas para funcionalidades "mais chatas, com pegadinhas".

### Narração por Voz como Método

- O instrutor usa microfone para narrar prompts no dia a dia.
- Aplicação local que transcreve fala → texto na posição do cursor.
- Método: narrar livremente → micro-revisão no final com instrução principal.

## Afirmações/Observações Principais

- **"Engenharia de contexto é simplesmente a coisa mais importante"**: posicionamento claro e repetido.
- **"Eu não sou o maluco do prompt"**: o instrutor se posiciona contra a cultura de prompts ultra-elaborados.
- **"Nada como você ter um contexto muito claro através de Skills, Rules e Spec Driven Development"**: formas modernas > prompts ad-hoc.
- **"A especificação gerada é um prompt gerando outro prompt"**: Spec Driven Development como meta-prompt automático.
- **"Se você tem uma boa engenharia de contexto, é o suficiente para ter um resultado muito legal"**: pragmatismo.

## Notas de Evidência

- Estrutura CORFT apresentada em bloco de código durante a aula.
- Exemplo prático: agente financeiro com formato de saída JSON bem definido no final do prompt.
- Demonstração ao vivo de transcrição por voz → texto direto no cursor.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: adiciona seção sobre engenharia de prompt (estrutura CORFT, meta-prompt, hierarquia prática); resolve parcialmente questão sobre Skills/Rules/Spec Driven Development.

## Questões Não Resolvidas

- Definição formal de Skills (será coberto em próximas aulas práticas).
- Definição formal de Rules (será coberto em próximas aulas práticas).
- Spec Driven Development em detalhe (ficou para curso posterior).
- Como agentes manipulam contexto em Spec Driven Development — mencionado mas não detalhado.

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
