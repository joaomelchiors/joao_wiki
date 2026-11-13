---
title: "Uncle Bob (Robert C. Martin)"
type: entity
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["pessoa", "clean-code", "agentes", "tdd"]
source_files:
  - raw/sources/2026-08-19_live-uncle-bob-on-software-fundamentals-in-the-age-of-ai_en-revisada_zcLPGC-tvgk.md
related_pages:
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ../concepts/verificacao-deterministica.md
  - ../concepts/tdd.md
  - ../concepts/spec-driven-development.md
  - ../concepts/arquitetura-limpa.md
  - ./matt-pocock.md
---

# Uncle Bob (Robert C. Martin)

## Visão Geral

Programador veterano e autor de *Clean Code* (citada na live a 2ª edição); conhecido por defender TDD, código limpo e agilidade. A wiki já usa o nome dele indiretamente em [Arquitetura Limpa](../concepts/arquitetura-limpa.md) (a Clean Architecture é dele, conhecimento geral; as fontes do curso não o detalham). Na live com Matt Pocock aparece como praticante de desenvolvimento com agentes.

## Fatos-Chave

Todos os dados biográficos abaixo são **relato do próprio Bob na live**, não verificados:

- Primeiro programa aos 12 anos (1964), num computador de brinquedo de peças e pinos; leu livros de FORTRAN, COBOL e PL/I sem máquina para executar; primeiro emprego com programação aos 18 e mais de meio século de carreira.
- Faz "rants" matinais de roupão (o quadro do "bathrobe rant" começou por uma crítica a SQL e injeção de SQL).
- Começou a usar agentes em dez/2025–jan/2026 e, desde então, constrói um conjunto de ferramentas para eles (CRAP para várias linguagens, mutation tester, harness, visualizador de arquitetura, verificador de dependências), que prefere não distribuir.

## Posições (segundo Bob, na live)

- Agentes devem ser cercados por **verificação determinística**, não por regras em texto. Ver [Verificação determinística](../concepts/verificacao-deterministica.md).
- Não impor **disciplinas** humanas (TDD linha a linha) a agentes; impor **valores** (código limpo, testado). Ver [TDD](../concepts/tdd.md).
- Planejar tudo antes (e SDD) tende a falhar; preferir ciclo ágil curto. Specs são efêmeras. Ver [SDD](../concepts/spec-driven-development.md).
- Fundamentos de engenharia importam porque organizam complexidade; iniciantes devem escrever código e "ser tratados como agente" antes de coordenar agentes.

## Cronologia

- **dez/2025–jan/2026**: primeiros experimentos com agentes (relato).
- **2026-08-19**: live no canal de Matt Pocock — [resumo](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md).

## Relacionamentos

- [Matt Pocock](./matt-pocock.md): entrevistador; Matt cita *Clean Code* como o livro mais citado em suas conversas e diz que a live era uma conversa que queria ter havia tempo. Convergem em fundamentos, estratégia × tática e custo de mudança baixo; divergem em ênfase sobre TDD (Matt: essencial em abril/2026, "mista" em set/2026; Bob: não impor).
- John Ousterhout: Bob e Matt o usam como referência (módulos profundos, estratégico × tático); Bob cita um debate longo entre os dois em apêndice de livro.

## Pontos para Monitorar

- Publicação das ferramentas de Bob ou de documentação do método (CRAP/mutation/dependências).
- Evolução do limiar de CRAP para agentes (4 → 6 → 8?) e dos relatos de produtividade.
- Se ele registrar resultados do "ágil" em vez de planejamento prévio, depois dos experimentos que dizia estar fazendo.
