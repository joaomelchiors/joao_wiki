---
title: "Spec-Driven Development (SDD)"
descricao: 'SDD — tasks em checklist, injeção de contexto, sub-agentes, pasta `specs/` e tensão com "specs to code"; conflitos de paralelismo parcialmente respondidos (arquivos por agente).'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["spec-driven-development", "sdd", "sub-agentes", "engenharia-de-contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-09-ContextoRulesSkill-engenhariaDeContexto.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-01-PastasDasSkills.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-02-SkillBasica copy.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-03-.SkillComCodigo.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-04-SkillNoCodex.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-05-EspecificacaoSimples.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-11-07-transcricao_AbentsDeIa_SDD.md
  - raw/sources/2026-04-26_transcrição-Essential Skills-for-AI-Coding-from Planning-to-Production.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode_en-corrigida_WNx-s-RxVxk.md
related_pages:
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./ia-generativa.md
  - ./engenharia-de-contexto.md
  - ./rules-e-skills.md
  - ./agentes-de-ia.md
  - ./mcp.md
  - ./harness.md
  - ../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md
  - ../sources/2026-07-17_source-ferramentas-agenticas.md
  - ../sources/2026-11-07_source-agentes-ia-sdd.md
  - ../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ./ralph-loop.md
---

# Spec-Driven Development (SDD)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Spec-Driven Development divide uma tarefa complexa em tasks (checklist em Markdown) executadas uma a uma, com injeção de contexto e Skills a cada passo, opcionalmente por sub-agentes. Reúne a visão de engenharia de contexto, a prática (pasta `specs/`) e a aula teórica do curso Profissional AI.

## Compreensão Atual

### Spec Driven Development como Engenharia de Contexto em Escala
Quando uma tarefa é complexa demais para um único prompt (context rot), o **Spec Driven Development** divide a execução em múltiplas `tasks` menores, com injeção de contexto antes de cada uma:

```
[Task 1]  → [injetar Rule + Skill + Mentions] → executar
[Task 2]  → [injetar Rule + Skill + Mentions] → executar
[Task 3]  → [injetar Rule + Skill + Mentions] → executar
...
[Task N]  → [injetar Rule + Skill + Mentions] → executar
```

- **Mentions**: referências a arquivos relevantes que o modelo deve considerar naquela task específica.
- Cada task opera com contexto fresco + guard-rails específicos → menor desvio, resultado mais previsível.
- O resultado final ainda pode variar (processo estatístico), mas permanece dentro das restrições definidas.
- Ferramentas modernas de agentes adicionam verificação automática ao final de cada task e se autocorrigem se necessário.

### SDD na visão do curso Profissional AI — Agentes
Fonte: [Spec-Driven Development (aula teórica)](../sources/2026-11-07_source-agentes-ia-sdd.md).

- **Spec = receita em Markdown**: lista de passos com checkbox (`- [ ]`); o agente executa um por vez e marca `[x]`. Pode registrar evidência por passo e incluir passos de verificação. Passos podem chamar Skills (`/nome-da-skill`) e ser delegados a **sub-agentes** com contexto limpo (analogia coordenador/auxiliar).
- Reuso para rotinas recorrentes; o instrutor relata uma execução de ~150–200 passos (anedota não verificável).
- **Tensão registrada**: o curso sugere gerar sistemas inteiros a partir de specs; Matt Pocock diz que "specs to code" não funciona (ver [Matt Pocock](../entities/matt-pocock.md)). Os sentidos de "spec" diferem (checklist executável × especificação que substitui o código); as duas posições são mantidas.

### Ceticismo de Uncle Bob (live, ago/2026)
Fonte: [live com Uncle Bob](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) (opinião e relato dele, tipo `opiniao`).

- Acha que SDD "provavelmente não vai funcionar"; seus experimentos não funcionaram bem. Especificar tudo antes repete o waterfall: o plano falha porque o humano não previu tudo e o agente executa "meio perdido".
- Prefere o ciclo **ágil**: uma ou duas histórias, olhar a arquitetura, reorganizar, repetir. Argumento: o custo de mudar caiu a quase zero (analogia da casa com mudanças a US$ 1).
- Para ele, **especificações são efêmeras**: não as mantém no repositório; trata o resultado (e as ferramentas que verificam) como a especificação.
- Matt Pocock concorda e ressalva que "spec-driven" tem muitas interpretações (passar informação a um agente já seria SDD?) e propõe como critério **persistir e revisitar** as specs.
- **Tensão registrada** com a aula do curso Profissional AI (spec = checklist persistente e reexecutável): sentidos de "spec" diferem; as posições são mantidas lado a lado, sem conclusão.
- Registro anterior de Matt sobre planejar (jan/2026, `opiniao`): no [vídeo sobre plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md) ele defende planejar com o agente antes de **cada** tarefa, num laço curto planejar → executar → testar → commit, replanejando quando surge algo imprevisto. Nenhuma das fontes relaciona essa prática com o ceticismo de Bob; a comparação fica em aberto.

### Spec-Driven Development na Prática (Especificação Simples — Aula 05)
**Estrutura de pasta recomendada**:

```
specs/
├── changes/
│   └── <nome-da-mudança>/
│       └── spec.md       ← arquivo de especificação ativo
└── archive/
    └── 2026-07-17_<nome-da-mudança>/
        └── spec.md       ← spec concluída (movida com data no nome)
```

**Estrutura de um arquivo `spec.md`**:

```markdown
# Nome da Mudança

## Orientações

Execute as tarefas abaixo em sequência.
Marque os passos concluídos.
Coloque uma evidência abaixo de cada passo com data e hora.

## Tarefas

- [ ] Tarefa 1: descrição detalhada / usar Skill X
- [ ] Tarefa 2: descrição detalhada / usar Skill Y
- [ ] Tarefa 3: descrição detalhada
```

**Como executar**: enviar o caminho relativo do `spec.md` para o agente. Ele lê e executa cada tarefa, marcando com `[x]` ao concluir.

**Modos de execução**:
- **Sequencial**: padrão; o agente executa tarefa por tarefa.
- **Paralelo**: adicionar orientação "execute os passos usando subagentes em paralelo".
- **Contexto independente por passo**: "execute de forma sequencial, utilizando subagentes, cada passo em um contexto independente" — cada step começa com contexto fresco.

**Evidências**: o instrutor confirma ter executado 10 especificações encadeadas, cada uma com 10–15 passos, sem falhas de rastreamento.

### A versão de Matt Pocock em skills (nov/2026)

Fonte: [`SKILL.md` do repositório de Matt](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md); instruções do autor.

- `to-spec` **não entrevista**: sintetiza a conversa (depois de `grill-with-docs`) em uma spec com problema, solução, user stories, decisões de implementação e de teste, e fora de escopo, sem caminhos de arquivo nem código, e publica no issue tracker. `to-tickets` a quebra em fatias verticais com arestas de bloqueio, e `implement-spec` executa o **grafo de tarefas** com subagentes em paralelo (um worktree por ticket, branch de integração).
- **Tensão com as fontes anteriores**: Matt e Bob rejeitam "specs to code" (a spec escrita antes e transformada em código). Pelo texto lido, a spec de Matt nasce da conversa e é consumida por tickets, não substitui o raciocínio. Se isso concilia as posições é interpretação, não confirmada pelo autor. Diferença em relação ao curso Profissional AI: aqui a spec e os tickets vivem no **issue tracker** (ou em `.scratch/`), não em `specs/changes/` com checklist.
- **Antecedente de jan/2026** ([vídeo Ralph Wiggum](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md), `demonstrado`): o `plans/prd.json` com user stories, passos de verificação e flag `passes` funciona ao mesmo tempo como PRD e lista de tarefas verificável, consumida uma tarefa por iteração pelo [laço Ralph](./ralph-loop.md). **Interpretação do mantenedor**: lembra a spec em checklist; Matt não usa o termo SDD.

## Fontes de Suporte

- [Dev AI — Aula 09: Engenharia de Contexto (Rules, Skills, Spec Driven Development)](../sources/2026-04-29_source-dev-ai-engenharia-de-contexto.md)
- [Dev AI — Ferramentas Agênticas (Aulas 01–07)](../sources/2026-07-17_source-ferramentas-agenticas.md)
- [Agentes de IA (Profissional AI) — Spec-Driven Development](../sources/2026-11-07_source-agentes-ia-sdd.md)
- [Matt Pocock — Essential Skills for AI Coding from Planning to Production](../sources/2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [mattpocock/skills — conteúdo dos SKILL.md](../sources/2026-11-14_source-matt-pocock-skills-skill-md.md) (`to-spec`, `to-tickets`, `implement-spec`)
- [Uncle Bob e Matt Pocock — live sobre fundamentos na era da IA](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md) (visão cética)
- [Matt Pocock — How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): plano multifase com itens marcados numa GitHub issue, usado como contexto da fase seguinte (out/2025). Ligação do mantenedor (**interpretação**): lembra a spec em checklist; Matt não usa o termo SDD.
- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): PRD em JSON com flag `passes` como lista de tarefas verificável (jan/2026); mesma ressalva de interpretação.

## Conceitos Relacionados

- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [rules-e-skills](./rules-e-skills.md)
- [agentes-de-ia](./agentes-de-ia.md)
- [mcp](./mcp.md)
- [harness](./harness.md)

## Questões Não Resolvidas

- ~~**Spec Driven Development na prática**: qual ferramenta, estrutura de arquivo e convenções são usadas?~~ → **Parcialmente resolvida no módulo Ferramentas Agênticas (Aula 05)**: pasta `specs/changes/<nome>/spec.md`, checkboxes de tarefa, orientações embutidas na spec, execução sequencial ou em paralelo com subagentes; specs concluídas movidas para `specs/archive/`. Limites de tasks antes do context rot: ainda não formalizados.
- ~~**Conflitos em subagentes paralelos**: como evitar conflitos quando múltiplos subagentes escrevem nos mesmos arquivos em paralelo dentro de uma spec.~~ → **Parcialmente respondida** na aula de estratégias do projeto Organizador de E-mails ([fonte](../sources/2026-11-12_source-organizador-emails-sequencial-paralelo.md)): prever o paralelismo desde o projeto, dando a cada agente dados e **arquivos próprios** (ex.: um CSV por grupo de 50 threads); consolidação dos resultados definida no planejamento. Mecanismos de lock/merge quando o isolamento não é possível: ainda em aberto.

## Notas de Atualização

- 2026-11-15: adicionado em "Ceticismo de Uncle Bob" o registro de Matt sobre planejar por tarefa (vídeo sobre plan mode, ingestão), sem a comparação interpretativa.

- 2026-11-15: adicionado o antecedente de jan/2026 (PRD em JSON com `passes`, vídeo Ralph Wiggum), como ligação do mantenedor (ingestão).

- 2026-11-15: adicionado em Fontes de Suporte o vídeo de Matt sobre Claude Code em engenharia real, como ligação do mantenedor (ingestão).
- 2026-11-15: questão dos conflitos em subagentes paralelos parcialmente respondida (arquivos separados por agente — Organizador de E-mails); registrado que o "arquivo de fluxo" desse projeto (`organizacao-gmail.md` com tarefas em checkbox chamando Skills e MCPs) é o mesmo padrão da spec aplicado a automação pessoal ([fonte](../sources/2026-11-12_source-organizador-emails-planejamento.md)).
- 2026-11-14: adicionada a versão de Matt em skills (`to-spec`, `to-tickets`, `implement-spec`) (ingestão).
- 2026-11-12: adicionada a posição cética de Uncle Bob (ingestão da live).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
