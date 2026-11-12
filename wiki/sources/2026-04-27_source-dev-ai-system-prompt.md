---
title: "Dev AI — Aula 05: System Prompt e Guardrails"
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ia-generativa", "system-prompt", "guardrails", "segurança", "api", "prompt-engineering"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-05-IntroducaoDesenvolvimentoIA-systemPrompt.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
tipo_conteudo: demonstrado
captura: automatica
---

# Dev AI — Aula 05: System Prompt e Guardrails

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): demonstra ao vivo a diferença entre modelos comerciais e locais diante do system prompt; parte é explicação.

## Resumo

Última aula planejada da introdução teórica. Demonstra que nenhum prompt do usuário é processado isoladamente — sempre existe um **system prompt** que encapsula e condiciona o comportamento do modelo. Explica a estrutura de mensagens da API (system → user → assistant), os **guardrails** como barreiras de segurança, e demonstra a diferença entre modelos comerciais (com guardrails) e modelos locais sem censura. Termina com opinião pessoal sobre AGI.

## Pontos-Chave

### System Prompt

- **Definição**: bloco de texto enviado **antes da conversa** que define comportamento, personalidade e restrições do modelo.
- **Invisível ao usuário**: o prompt do usuário é sempre encapsulado por um system prompt definido pelo operador (Anthropic, OpenAI, etc.).
- Cada ferramenta/plataforma tem seu próprio system prompt — influencia diretamente a qualidade e o tipo de resposta.

### Estrutura de Mensagens (API Anthropic)

```json
[
  { "role": "system", "content": "Você é um assistente..." },
  { "role": "user", "content": "pergunta do usuário" },
  { "role": "assistant", "content": "resposta da IA" },
  { "role": "user", "content": "próxima pergunta" }
]
```

Três componentes: **system prompt** + **turnos de conversa** (user/assistant) + **injeções adicionais** (metadados).

### Conteúdo do System Prompt (Claude)

O Claude revelou que seu system prompt contém:

| Componente | Descrição |
|---|---|
| Instruções de formatação | Como formatar respostas |
| Regras de segurança | Guardrails contra conteúdo perigoso |
| Informações de produtos | Features da Anthropic |
| Instruções de ferramentas | Quando e como usar cada ferramenta |
| Metadados de contexto | Localização aproximada do usuário, data/hora |
| Identidade do usuário | Informações básicas |

### Guardrails

- **Definição**: barreiras de segurança implementadas via system prompt que impedem o modelo de gerar conteúdo perigoso, ilegal ou inadequado.
- Modelos comerciais (Claude, ChatGPT) → guardrails robustos.
- Modelos locais sem censura (via LM Studio) → sem guardrails, respondem qualquer prompt.
- **Demonstração**: o instrutor fez um prompt malicioso em modelo local sem censura — o modelo gerou o conteúdo sem restrições (exceto aviso final). O mesmo prompt seria rejeitado pelo Claude.

### "Honestidade Consciente" do Claude

- Quando perguntado sobre seu system prompt, Claude:
  - **Reconhece** que o system prompt existe.
  - **Descreve** sua natureza geral.
  - **Recusa** reproduzi-lo literalmente — "não vou fingir que não existe, mas não vou vazá-lo".
- O instrutor elogia essa abordagem como "sinceridade consciente".

### Opinião sobre AGI

- O instrutor **não acredita** que a arquitetura Transformer atual chegará à AGI (Inteligência Geral Artificial).
- Será necessário um **novo breakthrough** (como o Attention foi para LLMs).
- No entanto, a tecnologia atual permite **10-15 anos de inovação** em software — desenvolvimento mais rápido, soluções mais complexas, equipes menores.

## Afirmações/Observações Principais

- **"Você nunca escreve um prompt isolado"**: todo prompt é encapsulado por um system prompt da plataforma.
- **"Cada ferramenta tem um prompt mais competente que a outra"**: a qualidade do system prompt influencia diretamente a qualidade das respostas.
- **Caso Pentágono-Anthropic**: mencionado como exemplo de conflito sobre remoção de guardrails para uso militar.
- **"A gente tem tecnologia para os próximos 10, 15 anos de inovação"**: mesmo sem AGI, o potencial atual é transformador para desenvolvimento de software.

## Notas de Evidência

- Demonstração ao vivo: prompt para Claude sobre sua estrutura interna + prompt malicioso em modelo local.
- Resposta real do Claude descrevendo componentes do seu system prompt (documentação pública).
- LM Studio usado para demonstrar modelo sem censura.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: adiciona seção sobre System Prompt, guardrails e estrutura de mensagens da API.

## Questões Não Resolvidas

- Como escrever system prompts eficazes para aplicações customizadas?
- Qual o impacto real de diferentes system prompts na qualidade de respostas de código?
- Como equilibrar guardrails (segurança) com utilidade (flexibilidade)?

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
