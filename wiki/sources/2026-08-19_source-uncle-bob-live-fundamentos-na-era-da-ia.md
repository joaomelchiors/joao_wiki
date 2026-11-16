---
title: "Uncle Bob e Matt Pocock — fundamentos de software na era da IA (live)"
descricao: 'Live de Matt Pocock com Uncle Bob (56 min, legenda revisada) — agentes cercados por CRAP, teste de mutação e regras de dependência; cadeia de cinco agentes; "não impor disciplinas humanas" (TDD); ceticismo com SDD e planejamento prévio; fundamentos e como iniciantes aprendem estratégia.'
type: source
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["uncle-bob", "matt-pocock", "entrevista", "crap", "mutation-testing", "multiagentes", "tdd", "spec-driven-development", "fundamentos"]
source_files:
  - raw/sources/2026-08-19_live-uncle-bob-on-software-fundamentals-in-the-age-of-ai_en-revisada_zcLPGC-tvgk.md
related_pages:
  - ./2026-01-15_source-matt-pocock-plan-mode.md
  - ./2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../entities/uncle-bob.md
  - ../entities/matt-pocock.md
  - ../concepts/verificacao-deterministica.md
  - ../concepts/tdd.md
  - ../concepts/spec-driven-development.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/ai-driven-development.md
  - ../concepts/harness.md
  - ../concepts/agentes-de-ia.md
  - ./2026-09-17_source-matt-pocock-pragmatic-engineer.md
  - ./2026-07-16_source-matt-pocock-shorts.md
tipo_conteudo: opiniao
captura: automatica
---

# Uncle Bob e Matt Pocock — fundamentos de software na era da IA (live)

## Resumo

Live de 56 min (publicada em 2026-08-19, no canal de Matt Pocock, em inglês) em que Matt entrevista Robert C. Martin ("Uncle Bob", autor de *Clean Code*). Bob conta como passou a usar agentes de IA desde dez/2025 e descreve seu método: manter o prompt mínimo e cercar o agente de **ferramentas determinísticas** (métrica CRAP, teste de mutação, regras de dependência entre módulos) em vez de regras em texto, com uma cadeia de agentes especializados. Também defende o ciclo ágil em vez de planejamento pesado ou SDD e explica por que os fundamentos continuam valendo.

**Classificação**: `opiniao`. É conversa com heurísticas e relatos de experiência pessoal, sem demonstração ao vivo; os resultados citados (fator 4–5 de produtividade, limiares de CRAP) são relatos dele, não verificados. A legenda é automática (en-orig), mas foi **revisada manualmente em duas passagens**; o cabeçalho do arquivo `-revisada` lista os poucos trechos ainda duvidosos. Nota: esse cabeçalho cita um arquivo `en-orig` que o usuário excluiu depois; o arquivo revisado é a única cópia.

## Pontos-Chave

- **Como começou**: em dez/2025–jan/2026 Bob testou agentes (primeiro Grok) e viu que eram rápidos, mas deixavam muita sujeira; percebeu que, por serem rápidos e não se cansarem, podiam executar ferramentas que antes eram impraticáveis para humanos.
- **CRAP e teste de mutação**: duas ideias dos anos 2000 que ele achava boas e inviáveis. **CRAP** combina cobertura de testes e complexidade ciclomática de cada função num escore de "quão ruim" ela é; **mutation testing** troca operadores no código (`<` por `>`, `==` por `!=`...) e exige que a suíte quebre; mutantes que sobrevivem expõem testes fracos. Com agentes, rodar isso virou viável (30 min em vez de uma noite, nas palavras dele).
- **Objetivo declarado**: chegar a uma situação em que não precisa olhar o código; confia no processo, olha os escores de CRAP e faz amostragens ("spot checks"). É meta, não afirmação de que já chegou.
- **Por que código ruim importa para agentes**: já em dez/2025 viu o agente piorar quando o código ficava confuso (consertava uma coisa e quebrava outra, girando em círculos; uma vez "desistiu"). Conclusão dele: agentes sofrem com bagunça como humanos, talvez com outro limiar.
- **Regras em texto = "diretrizes" (Piratas do Caribe)**: ao pôr um documento de 5–10 páginas de boas práticas no prompt, o modelo trata como sugestão. Ele cita o efeito **lost in the middle**: início e fim do contexto pesam mais que o meio. Recomendação: prompt inicial o menor possível e ferramentas determinísticas **depois** do fato, num laço ("mude o código até a ferramenta aprovar"). Matt chama isso de contrastar *steering* × verificação.
- **Custo**: cada ferramenta torna o agente mais lento; há um ponto em que fica mais lento que um humano, que ele ainda não achou. Hoje mantém fator ~2–4 de vantagem.
- **Multiagentes em cadeia** (descrição dele): *specifier* (transforma documento humano em Gherkin + procedimento de QA) → *coder* (testes unitários + código + faz o Gherkin passar) → *cleaner* (CRAP e revisão) → *hardener* (teste de mutação, 100% de cobertura) → *QA agent* (vira o procedimento em script executável pela UI). Vantagens: paralelismo e contexto focado (mitiga lost in the middle), agentes que "nascem, fazem uma tarefa e morrem". Desvios: tempo de partida e custo de comunicação. Relato: tarefa de 5 min para um agente solto vira ~1 h na cadeia, contra ~meio dia de um humano, com qualidade maior.
- **Trajetória do contexto** (ideia levantada por Matt, confirmada por Bob): o que entra no contexto direciona tudo o que vem depois; só limpar o contexto zera a trajetória. Exemplo de Bob: conversa sobre café contaminada por uma novela que alguém comentou.
- **Arquitetura**: até cerca de um mês antes da live, ele revisava a estrutura manualmente: interrogava o agente sobre módulos e dependências, redesenhava e pedia um plano. Depois criou (com agentes) um **visualizador de arquitetura** (UML navegável até o código) e uma **ferramenta de regras de dependência** (arquivo de especificação de quem pode depender de quem; um verificador final obriga o agente a corrigir, normalmente invertendo dependência ou criando interface). Tentativas de automatizar o desenho em si "sem muita sorte".
- **Módulos bem divididos** ajudam o agente pelo mesmo motivo que ajudam o humano (compartimentalização, contexto coerente). Concorda com **módulos profundos** (Ousterhout): modelos leem a interface e os testes sem precisar ler a implementação. Cita um debate longo com Ousterhout no apêndice de um livro.
- **O que mudar do livro**: **limiares**. Agentes têm memória de curto prazo grande e exata, então ele afrouxa a complexidade permitida: CRAP ≤ 4 para humanos, 6 para agentes, talvez 8.
- **Disciplinas × valores**: não impor aos agentes **disciplinas** feitas para humanos (ex.: TDD linha a linha); impor **valores** (código limpo, testado). Agentes mesmo mandados fazem TDD acabam escrevendo função e depois teste, como Ousterhout faria, e ele considera aceitável. TDD serve à memória curta humana.
- **Planejamento**: especificar tudo antes é a tentação dos anos 70 (waterfall); com agentes o resultado repete: o plano falha porque o humano não previu tudo e o agente "corre meio perdido". Prefere **abordagem ágil** (uma ou duas histórias, olhar a arquitetura, reorganizar). Analogia da casa com mudanças a US$ 1: custo de mudança despencou, então para que planejar demais?
- **Spec-driven development**: acha que "provavelmente não vai funcionar"; seus experimentos não funcionaram bem. As especificações são **efêmeras**; não mantém lista de specs no repositório. Em vez de documentar o que quer, trata o resultado como especificação: não distribui suas ferramentas (CRAP, teste de mutação, harness) para baixar; recomenda que a pessoa aponte o agente para elas e peça uma versão própria. Matt ressalva que "spec-driven" tem interpretações demais.
- **Estratégico × tático** (Ousterhout): agentes são bons no tático e fracos no estratégico. Para iniciantes: escrever código por cerca de um ano para saber com o que o agente lida; depois ser tratado como um agente (mesmas tarefas e mesmas ferramentas determinísticas), por meses, antes de coordenar agentes; passar por camadas (binário, assembly, C, Python, ferramentas) por analogia com seu conselho "escreva assembly por um fim de semana". Livros "velhos" recomendados: Tom DeMarco, Ed Yourdon, *The Pragmatic Programmer*.
- **Fundamentos continuam valendo**: software é a coisa mais complexa que fazemos; fundamentos são o modo de organizar complexidade para ser concebível por humanos e por modelos (que imitam humanos). Quem acha que não importam "vai aprender do modo difícil". Cada nova camada de abstração (assembly → compiladores → modelos) provocou o mesmo medo; "as regras que você joga fora são as que vai pegar do chão em um ano".

## Afirmações/Observações Principais

- **Fortes (descrição técnica)**: definições de CRAP, mutation testing, Gherkin e lost in the middle são conhecimento técnico geral, ainda que a transcrição não prove os detalhes (fórmula do CRAP não foi dita).
- **Relatos pessoais (não verificados)**: tempos (30 min, 1 h), fatores de produtividade (2–4, 4–5×), limiares CRAP 4/6/8, que o agente desistiu uma vez, e que agentes mandados fazer TDD acabam fazendo função + teste.
- **Opinião**: SDD provavelmente não funciona; TDD estrito não deve ser imposto; fundamentos importam; iniciantes devem "ser o agente" por um tempo.
- A frase atribuída a Dijkstra (software como a coisa mais complicada) é lembrança de Bob, que diz estar "provavelmente errando" a autoria.

## Notas de Evidência

- Seções da transcrição (marcadores %): 0–10% (apresentação, bathrobe, como começou), 10–25% (CRAP, mutation testing, objetivo de não olhar o código, por que código ruim importa), 25–50% (lost in the middle, ferramentas × steering, multiagentes, trajetória), 50–75% (arquitetura, módulos profundos, limiares, TDD), 75–90% (planejamento, ágil, SDD, especificações efêmeras, tático × estratégico), 90%+ (como aprender, livros, fundamentos, fim).
- A legenda termina cortada, no meio de uma frase do encerramento.
- Fonte única; as posições valem como "segundo Bob Martin", com Matt Pocock como entrevistador que concorda em várias delas.

## Impacto na Wiki Existente

- [Verificação determinística](../concepts/verificacao-deterministica.md): **página nova (`draft`)** com CRAP, mutation testing, regras de dependência e cadeia de agentes.
- [TDD](../concepts/tdd.md): nova seção com a posição de Bob (disciplina humana vs. valor), que se soma à posição matizada de Matt; as duas fontes de opinião convergem em que TDD otimiza memória humana.
- [Spec-Driven Development](../concepts/spec-driven-development.md): novo ponto de **tensão** (Bob: SDD provavelmente não funciona; specs efêmeras). Não sobrescreve a aula do curso Profissional AI nem a posição de Matt.
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): lost in the middle como mecanismo citado por Bob e noção de trajetória do contexto.
- [AI-Driven Development](../concepts/ai-driven-development.md): convergência e divergência com as práticas de Matt Pocock (ágil, estratégico × tático, fundamentos).
- [Harness](../concepts/harness.md) e [Agentes de IA](../concepts/agentes-de-ia.md): ligação com a cadeia de agentes e com a verificação em laço.
- Entidades: nova [Uncle Bob](../entities/uncle-bob.md); [Matt Pocock](../entities/matt-pocock.md) com a live na cronologia.

## Questões Não Resolvidas

- Onde estão publicadas as ferramentas de Bob (CRAP para Clojure/Java/Go, mutation tester, harness, visualizador de arquitetura)? Ele diz que não quer distribuí-las; não há endereço na transcrição.
- Qual a fórmula de CRAP usada, e há evidência de que limiares 6–8 funcionam para agentes? Só relato.
- A cadeia especificador → coder → cleaner → hardener → QA foi testada fora do caso dele? Não há dados na fonte.
- O livro com o debate Bob × Ousterhout: a transcrição não deixa claro qual é (o apêndice é de *A Philosophy of Software Design*, segundo conhecimento geral, não confirmado na live).
- Trechos duvidosos da legenda: "The bathrobe's off. I have me.", "my bonus is reviewing the code".

## Páginas Relacionadas

- [Uncle Bob](../entities/uncle-bob.md)
- [Matt Pocock](../entities/matt-pocock.md)
- [Verificação determinística](../concepts/verificacao-deterministica.md)
- [TDD](../concepts/tdd.md)
- [Spec-Driven Development](../concepts/spec-driven-development.md)
- [Entrevista de Matt Pocock ao The Pragmatic Engineer](./2026-09-17_source-matt-pocock-pragmatic-engineer.md)
