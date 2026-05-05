---
title: "Dev AI — Aula 07: Conceito de Agentes de IA"
type: source
status: active
created: 2026-04-28
updated: 2026-04-28
tags: ["agentes", "llm", "orquestrador", "ferramentas", "ai-driven-development"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-07-ContextoRulesSkill-conceitoDeAgentes.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
---

# Dev AI — Aula 07: Conceito de Agentes de IA

## Resumo

Aula curta e conceitual que define formalmente o que é um **Agente de IA**. O agente é uma aplicação externa ao modelo que atua como orquestrador de prompts — executa ações no mundo real (arquivos, terminal, APIs) enquanto delega toda tomada de decisão ao LLM. Inclui exemplo prático de loop agente-modelo (build → erro → correção → retry) e anti-pattern de decisão via código (if/else).

## Pontos-Chave

### Definição Formal

> **"Agente é um sistema de IA no qual um LLM atua como núcleo de decisão, percebendo o contexto, planejando ações e utilizando ferramentas de forma autônoma e iterativa para atingir um objetivo."**

### Anatomia de um Agente

| Componente | Responsabilidade |
|---|---|
| **LLM (cérebro)** | Tomada de decisão, planejamento, interpretação |
| **Agente (braços)** | Execução de ações no mundo externo, orquestração de prompts |
| **Ferramentas** | Linha de comando, sistema de arquivos, banco de dados, APIs |

### Loop Iterativo

```
Agente envia contexto → LLM decide ação → Agente executa → Observa resultado
    → Se objetivo não atingido: volta ao início com novo contexto
    → Se objetivo atingido: fim
```

**Exemplo concreto**:
1. LLM devolve código para salvar em arquivo.
2. Agente salva o arquivo.
3. Agente roda o build.
4. Build falha com erro.
5. Agente envia o erro de volta ao LLM.
6. LLM devolve correção (novo arquivo ou modificação).
7. Agente aplica e repete até sucesso.

### Anti-Pattern: Decisão via Código

- O instrutor relata que, em um projeto, a IA gerou 3000-4000 linhas de if/else para tomar decisões baseadas na interpretação do usuário.
- Solução correta: devolver ao LLM para que ele decida o próximo passo — "muito mais inteligente, muito mais flexível".

### Multi-Agentes

- Ferramentas como as que serão vistas no curso implementam **múltiplos agentes** coordenando chamadas a LLMs.
- Cada agente pode ter uma especialidade (codificação, testes, design, etc.).

## Afirmações/Observações Principais

- **"Agente é um orquestrador de prompts"**: definição simplificada e pragmática.
- **"O cérebro está no modelo e o agente simplesmente é os braços"**: separação clara de responsabilidades.
- **"Iterativa, diferente de interativa"**: o instrutor distingue iteração (loop/repetição) de interação (comunicação).
- **"Se você cria código que faz coisas que o modelo não pode fazer, mas a tomada de decisão é do modelo, você está criando um agente"**: definição operacional.

## Notas de Evidência

- Exemplo real de projeto financeiro com chat por voz: objeto preenchido via transcrição, com intenções, referências e dados — decisão delegada ao LLM.
- Números concretos: 3000-4000 linhas de código geradas como anti-pattern.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: adiciona conceito de Agente como camada acima do modelo Transformer.

## Questões Não Resolvidas

- Como estruturar um sistema multi-agente na prática?
- Qual o custo (latência, tokens) de loops iterativos com LLMs?
- Como definir critérios de parada para o loop do agente?
- Blocos de construção para desenvolvimento com IA — será coberto na aula seguinte.

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
