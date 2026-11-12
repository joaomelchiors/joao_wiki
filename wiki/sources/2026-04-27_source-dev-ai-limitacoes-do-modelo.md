---
title: "Dev AI — Aula 04: Limitações dos Modelos (Arquitetura baseada em Tokens)"
type: source
status: active
created: 2026-04-27
updated: 2026-11-12
tags: ["ia-generativa", "transformer", "limitações", "tokens", "lm-studio", "chain-of-thought"]
source_files:
  - raw/sources/2026-04-25_transcrição-IA-04-IntroducaoDesenvolvimentoIA-limitacoesDoModelo.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
tipo_conteudo: demonstrado
captura: automatica
---

# Dev AI — Aula 04: Limitações dos Modelos (Arquitetura baseada em Tokens)

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): testes ao vivo em Claude e em modelos locais no LM Studio (contagem de letras).

## Resumo

Aula experimental que demonstra limitações práticas dos modelos Transformer causadas pela arquitetura baseada em tokens. Usa o desafio de contar letras na palavra "inconstitucionalissimamente" (27 letras) como teste — mostrando que modelos falham nessa tarefa porque operam sobre tokens, não caracteres individuais. Testa com Claude Sonnet (resultado parcialmente correto), GPTSchema 3.4 local (errou) e um modelo de 17B com chain-of-thought visível (entrou em loop após 6800+ tokens). Introduz o LM Studio como ferramenta para rodar modelos localmente.

## Pontos-Chave

### Limitação: Contagem de Caracteres

- **Teste**: "Quantas letras tem na palavra inconstitucionalissimamente?"
- **Resultado esperado**: 27 letras.
- **Claude Sonnet 4.6**: respondeu 29, depois corrigiu para 27 na mesma resposta (autocorreção durante geração).
- **GPTSchema 3.4 (local, ~6-8GB)**: respondeu 21 letras — completamente errado.
- **Modelo 17B com thinking (local)**: entrou em loop de raciocínio, tentou contar múltiplas vezes, se contradisse, consumiu 6800+ tokens e falhou por "generation failed".

### Por que Modelos Falham Nisso

- Modelos operam sobre **tokens**, não letras ou palavras.
- Contar letras exige decomposição no nível de caractere — algo que a tokenização não favorece.
- O modelo não "vê" a palavra original; vê tokens como `["incon", "stitu", "cion", "al", "issima", "mente"]`.
- Tarefas de manipulação de caracteres (contagem, anagramas, palíndromos) são pontos fracos arquiteturais.

### Trade-off da Tokenização

| Granularidade | Problema |
|---|---|
| **Letras** | Dicionário gigante, sem semântica entre caracteres isolados |
| **Palavras** | Dicionário intratável (milhões de palavras em múltiplas línguas) |
| **Tokens** | Meio-termo: reutiliza trechos comuns, mantém relações semânticas |

### LM Studio

- Ferramenta para rodar modelos de IA localmente no computador do desenvolvedor.
- Permite carregar múltiplos modelos, alternar entre eles.
- Vantagem: mostra **thinking/chain-of-thought** de forma mais explícita que modelos comerciais.
- Exibe estatísticas: tempo total, tokens de entrada, tokens de saída, tokens/segundo.
- O instrutor não usará LM Studio no restante do curso, mas recomenda como ferramenta de experimentação.

### Chain-of-Thought Visível

- O modelo de 17B mostra seu "pensamento" ao tentar resolver o problema.
- Processo: conta letras → erra → reconta → muda de estratégia (algarismos romanos?) → reconta → loop.
- Demonstra como modelos maiores com reasoning tentam compensar limitações arquiteturais com mais computação (nem sempre com sucesso).

## Afirmações/Observações Principais

- **"Existem limitações nesse modelo"**: o instrutor posiciona explicitamente que modelos Transformer têm fraquezas arquiteturais — não são onipotentes.
- **"Entender limitações ajuda a escrever prompts melhores"**: saber o que o modelo faz mal permite evitar ou contornar essas situações.
- **"Meu maior objetivo não é ficar preso a uma ferramenta"**: o instrutor reforça que princípios e fundamentos são mais importantes que a ferramenta específica.
- **Autocorreção na geração**: Claude gerou "29" e depois corrigiu para "27" na mesma resposta — demonstra que o modelo refina sua saída de forma autorregressiva (o contexto posterior influencia a "correção").

## Notas de Evidência

- Teste ao vivo com 3 modelos diferentes (Claude Sonnet, GPTSchema 3.4, modelo 17B).
- LM Studio rodando localmente com estatísticas de processamento visíveis.
- 6800+ tokens consumidos pelo modelo 17B em tentativa falha de contagem.

## Impacto na Wiki Existente

- **[ia-generativa.md](../concepts/ia-generativa.md)**: adiciona seção sobre limitações arquiteturais dos modelos Transformer e menciona LM Studio como ferramenta.

## Questões Não Resolvidas

- Como contornar limitações de contagem de caracteres na prática (ferramentas externas? código auxiliar?).
- Quais outras tarefas são arquiteturalmente difíceis para modelos Transformer?
- Prompt injection e prompt insufficiency — mencionados mas não detalhados.

## Páginas Relacionadas

- [IA Generativa](../concepts/ia-generativa.md) — conceito principal
- [formacao.dev](../entities/formacao-dev.md) — plataforma de origem
