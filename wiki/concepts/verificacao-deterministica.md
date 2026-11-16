---
title: "Verificação determinística para agentes de IA"
descricao: '**(draft: núcleo em uma fonte de opinião)** Verificação determinística para agentes — CRAP, mutation testing, regras de dependência, cadeia de agentes e "valores × disciplinas", segundo Uncle Bob; hooks `PreToolUse` e lint no lugar de regras em texto, segundo Matt Pocock.'
type: concept
status: draft
created: 2026-11-12
updated: 2026-11-15
tags: ["verificacao", "crap", "mutation-testing", "multiagentes", "qualidade", "agentes"]
source_files:
  - raw/sources/2026-08-19_live-uncle-bob-on-software-fundamentals-in-the-age-of-ai_en-revisada_zcLPGC-tvgk.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
  - raw/sources/2026-02-23_red-green-refactor-is-op-with-claude-code_en-corrigida_hYZdIwFIy-c.md
  - raw/sources/2026-02-25_how-to-actually-force-claude-code-to-use-the-right-cli-don_en-corrigida_3CSi8QAoN-s.md
related_pages:
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ../sources/2026-02-23_source-matt-pocock-red-green-refactor.md
  - ../sources/2026-02-25_source-matt-pocock-hooks-cli.md
  - ../entities/claude-code.md
  - ./tdd.md
  - ./harness.md
  - ./agentes-de-ia.md
  - ./engenharia-de-contexto.md
  - ./spec-driven-development.md
  - ./ai-driven-development.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../entities/uncle-bob.md
---

# Verificação determinística para agentes de IA

> **Evidência**: a página se apoia em **uma fonte de tipo `opiniao`** (live com Uncle Bob). O método e os números são relato dele, sem validação independente; por isso o status é `draft`. O mesmo princípio (verificar em vez de só instruir) aparece de forma parcialmente convergente em [Melhores Práticas do Claude Code](./melhores-praticas-claude-code.md) e em [Harness](./harness.md), mas não com estas ferramentas. Desde o [vídeo de fev/2026 sobre hooks](../sources/2026-02-25_source-matt-pocock-hooks-cli.md), o princípio "impor em vez de instruir" tem também uma fonte **demonstrada** de outro autor (Matt Pocock), aplicada a comandos de terminal e a lint; isso reforça a definição, mas não o núcleo da página (CRAP, mutação, cadeia de agentes), que continua só de Bob — por isso o `draft` se mantém.

## Definição

Usar ferramentas automáticas e repetíveis (que dão sempre o mesmo veredito para o mesmo código) como **portão de qualidade** do trabalho do agente, em vez de depender de instruções em texto que o modelo pode ignorar. O agente fica num laço: muda o código até a ferramenta aprovar.

## Compreensão Atual

Tudo abaixo é **segundo Uncle Bob**, salvo onde indicado.

### Por que não só instruções (steering)
- Regras longas em prompt são tratadas como "diretrizes"; o modelo as segue às vezes.
- Efeito **lost in the middle**: início e fim do contexto têm mais peso que o meio; instruções do meio do prompt tendem a sumir. Ver [Engenharia de Contexto](./engenharia-de-contexto.md).
- Ferramentas determinísticas não entram no contexto da mesma forma e podem ser empilhadas. Recomendação: prompt inicial mínimo + verificação depois do fato.
- Custo: cada ferramenta adiciona tempo; o ponto em que o agente fica mais lento que um humano ainda não foi encontrado (ele cita vantagem de 2–4×).

### Ferramentas citadas

| Ferramenta | O que verifica | Observação |
|---|---|---|
| **CRAP** (Change Risk Anti-Patterns) | Combina cobertura de testes e complexidade ciclomática de cada função num escore | Limiar dele: ≤ 4 para humanos, 6 para agentes (talvez 8); com 100% de cobertura, escore 6 = 6 caminhos, todos testados |
| **Mutation testing** | Troca operadores no código e exige falha da suíte; "mutante sobrevivente" = teste ausente ou fraco | Viável com agentes (30 min contra uma noite, relato) |
| **Regras de dependência entre módulos** | Arquivo de especificação com quem pode depender de quem; verificador final | Agente corrige invertendo dependência, criando interface ou dividindo módulo |
| **Visualizador de arquitetura** | UML navegável até o código | Ajuda o humano a auditar; não é gate |
| **Testes de aceitação em Gherkin + procedimento de QA executável** | Comportamento pela UI | Escritos a partir do documento humano |

### Cadeia de agentes (pipeline do Bob)
1. **Specifier**: documento humano → Gherkin + procedimento de QA.
2. **Coder**: testes unitários + código; faz o Gherkin passar.
3. **Cleaner**: CRAP e revisão geral (limpa a bagunça do coder).
4. **Hardener**: teste de mutação, cobertura total.
5. **QA agent**: transforma o procedimento em script que opera o sistema e dá resultado determinístico.

Benefícios: paralelismo; contexto focado (lost in the middle menor); agentes "descartáveis" (nascem, fazem uma tarefa, morrem, o próximo começa limpo). Custos: tempo de partida (10–15 s por agente) e comunicação. Relato: ~1 h contra ~5 min de um agente solto e ~meio dia de um humano.

### Princípios derivados
- **Disciplinas × valores**: não impor aos agentes disciplinas feitas para limitações humanas (TDD estrito); impor os valores (código limpo, testado). Ver [TDD](./tdd.md).
- **Limiares ajustáveis**: agentes aguentam mais complexidade por função; vale ajustar o limiar de CRAP.
- **Trajetória do contexto**: quanto mais focada a tarefa de cada agente, menos o contexto se contamina com assuntos alheios.
- **Meta de confiança, não de ausência**: o objetivo é não precisar olhar o código, com escores e amostragem; Bob ainda faz "spot checks".

### Hooks e lint no lugar de regras em texto (Matt Pocock, fev/2026)
Segundo [Matt Pocock](../entities/matt-pocock.md), regra no `CLAUDE.md` só reduz a chance de o agente usar o comando errado, não impede, e gasta o *instruction budget* (ver [Rules e Skills](./rules-e-skills.md)). A alternativa que ele **demonstra** no [Claude Code](../entities/claude-code.md): um hook `PreToolUse` com matcher Bash chama um script que, se o comando começa com `npm`, escreve "use pnpm not npm" e sai com exit code 2; o comando é bloqueado e o agente, lendo a mensagem, roda `pnpm install` sozinho. Ele generaliza (opinião) para regras de estilo transformadas em regras de ESLint, chamando isso de *feedback loops* para o agente. Diferença de escopo em relação a Bob: aqui o portão age **antes** da ação (bloqueia o comando) ou no lint, não na qualidade do código depois do fato. Fonte: [resumo](../sources/2026-02-25_source-matt-pocock-hooks-cli.md).

## Visões Concorrentes e Debates

- **Matt Pocock** pede também "evidência de TDD" e alerta para **testes tautológicos** de agentes; Bob não fala disso, mas o mutation testing ataca exatamente esse problema (interpretação do mantenedor, sem fonte direta: mutantes sobreviventes revelam testes que não verificam nada).
- **Cadeia de agentes × revisão simples**: Matt usa só implementador + revisor e é cético com enxames de agentes especializados (na live, ele faz uma exceção para implementação e revisão). Bob já usa cinco papéis.
- **QA visual ad hoc × QA determinístico**: no [vídeo de jan/2026 sobre front-end](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md), Matt Pocock mostra o agente fazendo QA pelo navegador (Chrome DevTools MCP) como teste informal, sem escrever testes E2E repetíveis; o agente de QA da cadeia de Bob, ao contrário, transforma o procedimento em script com resultado determinístico. Os dois fatos vêm das fontes; a aproximação entre eles é da wiki (**interpretação do mantenedor**) — nenhuma das fontes compara as abordagens.
- **Confiar no ciclo × verificar depois**: no [vídeo de fev/2026 sobre red-green-refactor](../sources/2026-02-23_source-matt-pocock-red-green-refactor.md), Matt Pocock diz confiar no teste que ele vê falhar e depois passar, em tipos fortes e testes como "back pressure" e no QA humano depois do commit, sem ler a maior parte dos testes; Bob verifica depois do fato com ferramentas (cobertura, CRAP, mutação). Posições de cada um; a aproximação é da wiki (**interpretação do mantenedor**) — nenhuma fonte compara.
- A [aula SDD do curso Profissional AI](../sources/2026-11-07_source-agentes-ia-sdd.md) usa verificação por passo e evidência em specs; o foco é rastreio de passos, não ferramentas de qualidade de código.

## Fontes de Suporte

- [Uncle Bob e Matt Pocock — fundamentos de software na era da IA (live)](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md)
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): QA visual ad hoc, contraponto citado em "Visões Concorrentes"
- [Matt Pocock — Red Green Refactor is OP With Claude Code](../sources/2026-02-23_source-matt-pocock-red-green-refactor.md): back pressure por tipos e testes e confiança no ciclo vermelho → verde, contraponto citado em "Visões Concorrentes"
- [Matt Pocock — How to actually force Claude Code to use the right CLI](../sources/2026-02-25_source-matt-pocock-hooks-cli.md): hook `PreToolUse` que bloqueia `npm` e redireciona o agente (demonstrado, fev/2026)

## Conceitos Relacionados

- [tdd](./tdd.md)
- [harness](./harness.md): onde a verificação é executada.
- [agentes-de-ia](./agentes-de-ia.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [ai-driven-development](./ai-driven-development.md)
- [spec-driven-development](./spec-driven-development.md)

## Questões Não Resolvidas

- Evidência independente de que CRAP e teste de mutação melhoram resultados de agentes (hoje só relato).
- Qual é o ponto de equilíbrio entre rigor e velocidade, e como medi-lo.
- Se existem ferramentas abertas equivalentes para o stack TypeScript desta wiki (não pesquisado).
- O verificador de regras de dependência pode ser gerado pelo próprio agente (Bob sugere apontar o agente para as ferramentas e pedir uma versão própria); falta registro de resultado.

## Notas de Atualização

- 2026-11-15: adicionada a seção sobre hooks e lint no lugar de regras em texto, do vídeo de fev/2026 de Matt Pocock sobre hooks; nota de evidência ajustada; segue `draft` (ingestão).
- 2026-11-15: adicionado o contraponto do vídeo de fev/2026 de Matt Pocock (red-green-refactor) (ingestão).
- 2026-11-12: página criada na ingestão da live com Uncle Bob.
