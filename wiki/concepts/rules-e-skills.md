---
title: "Rules e Skills"
descricao: 'Rule (declarativa) × Skill (ativa), arquivo global mínimo, *instruction budget* e hooks/lint no lugar de regras segundo Matt Pocock, formato prático no Cursor e ciclo de criação por engenharia reversa.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["rules", "skills", "few-shot", "engenharia-de-contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md
  - raw/sources/2026-05-04_transcrição-IA-11-ContextoRulesSkill-exemploSkill.md
  - raw/sources/2025-10-22_most-devs-don-t-understand-how-context-windows-work_en-corrigida_-uW5-TaVXu4.md
  - raw/sources/2025-10-27_how-i-use-claude-code-for-real-engineering_en-corrigida_kZ-zzHVUrO4.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
  - raw/sources/2026-01-15_i-was-an-ai-skeptic-then-i-tried-plan-mode_en-corrigida_WNx-s-RxVxk.md
  - raw/sources/2026-02-24_never-run-claude-init_en-corrigida_9tmsq-Gvx6g.md
  - raw/sources/2026-02-25_how-to-actually-force-claude-code-to-use-the-right-cli-don_en-corrigida_3CSi8QAoN-s.md
related_pages:
  - ../sources/2026-01-15_source-matt-pocock-plan-mode.md
  - ../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md
  - ../sources/2026-02-25_source-matt-pocock-hooks-cli.md
  - ./verificacao-deterministica.md
  - ../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md
  - ../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md
  - ./ia-generativa.md
  - ./tipos-de-skill.md
  - ./skills-na-pratica.md
  - ./engenharia-de-contexto.md
  - ./mcp.md
  - ../sources/2026-04-29_source-dev-ai-rule-skill.md
  - ../sources/2026-05-04_source-dev-ai-exemplo-skill.md
---

# Rules e Skills

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

**Rule** é declarativa (convenção ou restrição, "o quê"); **Skill** é ativa (processo ordenado, "como"). Esta página traz as definições canônicas da aula IA-10, o formato prático de uma Skill (exemplo no Cursor) e o ciclo de criação por engenharia reversa.

## Compreensão Atual

### Rule vs. Skill
Dois instrumentos de engenharia de contexto com natures distintas (definições canônicas da Aula IA-10, refinadas via Claude Code e corrigidas pelo instrutor):

| Instrumento | Natureza | Foco | Exemplo |
|---|---|---|---|
| **Rule** (Regra) | *Declarativa* — convenção/restrição passiva | *O quê* deve ser respeitado | "Arquivos de entidade devem seguir este padrão de nomenclatura" |
| **Skill** (Habilidade) | *Ativa* — processo ordenado passo a passo | *Como* executar uma tarefa de ponta a ponta | "Para criar uma entidade: 1. faça X, 2. faça Y, 3. faça Z" |

**Definição formal de Rule**:
> "Uma Rule é uma convenção ou restrição que o agente deve respeitar quando o contexto for relevante. O que define uma Rule não é a sua abrangência, mas sim que ela é declarativa e descreve restrições sem necessariamente definir como um determinado padrão é aplicado."

**Definição formal de Skill**:
> "Uma Skill tem capacidade de executar uma tarefa complexa de ponta a ponta, seguindo um processo definido e ordenado. Ela é ativa, descreve como fazer algo passo a passo. Internamente, uma Skill sabe quais são as Rules relevantes para aquela tarefa e as aplica automaticamente."

**Propriedades adicionais**:
- Rules são *contextuais*, não globais — uma regra de nomenclatura de entidades só se aplica quando se cria/modifica entidades.
- Skills *referenciam* Rules internamente — a Skill é o processo ativo que ativa Rules passivas no momento certo.
- Uma Skill é, na prática, um arquivo Markdown com descrição do processo + exemplos de código (**few-shot**).
- **Few-shot**: técnica de incluir exemplos de código dentro do prompt ou da Skill para guiar o modelo com padrões concretos.
- Ambos podem ser usados simultaneamente; a documentação deve ser amigável para humanos e para IA.

**Independência de ferramenta**: Rule e Skill são conceitos agnósticos. Cursor, Claude Code, Codex e Antigravity implementam os mesmos princípios com nomes ou mecanismos ligeiramente diferentes. O conceito importa mais que a ferramenta.

**Tamanho das rules (opinião)**: segundo Matt Pocock (out/2025), ele evita Cursor rules ou Claude rules muito grandes por medo do lost in the middle ([vídeo sobre janela de contexto](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md)). A posição converge com a de Uncle Bob na [live de ago/2026](../sources/2026-08-19_source-uncle-bob-live-fundamentos-na-era-da-ia.md): regras longas no prompt "viram diretrizes". Ver [Engenharia de Contexto](./engenharia-de-contexto.md).

**Exemplo de rules de usuário curtas (demonstrado, out/2025)**: na memória do usuário do Claude Code (`/memory`), Matt mantém cerca de 43 linhas, entre elas "seja extremamente conciso e sacrifique a gramática pela concisão" e "liste as questões não resolvidas no fim de cada plano". Na demo, o efeito aparece no formato do plano, curto e fechado com as questões em aberto ([How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md)). O caso é coerente com a cautela dele com rules longas.

**As mesmas regras, três meses depois (opinião, jan/2026)**: no [vídeo sobre plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md), Matt reafirma as linhas para planos — "faça o plano extremamente conciso; sacrifique a gramática pela concisão" e "no fim de cada plano, dê uma lista de questões não resolvidas, se houver" — e recomenda copiá-las. Segundo ele, a primeira leva planos de ~2.000 para ~400 palavras (estimativa, sem medição) e a segunda põe o agente num modo "exploratório, um pouco paranoico". Justifica o arquivo curto com a heurística do ***instruction budget***: o arquivo de regras entra em toda sessão, e quanto menos instruções, mais orçamento sobra ao modelo. A heurística não é desenvolvida no vídeo (ele promete outro sobre o tema). Local das regras: o vídeo cita o `CLAUDE.md` e, no fim, um `agents.md` (inconsistência do próprio vídeo ou da legenda), enquanto em out/2025 elas estavam na memória do usuário; não resolvido.

**Skill como "AGENTS.md sob demanda" (opinião/explicação)**: segundo Matt Pocock (jan/2026), uma skill é algo como o que iria no `AGENTS.md`, mas que o agente puxa só quando precisa. Exemplo mínimo dele: uma skill de "Chrome debugging" que manda lançar o Chrome headless com depuração remota antes de usar o MCP de navegador ([vídeo sobre front-end](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md)). Converge com a definição canônica acima (instrução ativa, carregada no contexto relevante); é a definição de um autor, não formal.

**Arquivo global mínimo e *instruction budget* com números (opinião, fev/2026)**: no vídeo [Never Run claude /init](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md), Matt Pocock desenvolve a heurística anunciada em jan/2026. Segundo ele, além da janela de contexto o LLM tem um orçamento de quantas instruções segue de uma vez, de **~300 a 400**, que cresce com modelos maiores mas chega a "uns 500"; cada frase de um `CLAUDE.md`/`AGENTS.md` conta como instrução, e o arquivo entra em toda requisição. Os números são dele, **sem fonte citada**. Daí as recomendações, todas opinião atribuída: não gerar o arquivo com `/init`; não acrescentar regras a cada comportamento indesejado do agente, porque o escopo é global e regras de React, por exemplo, pesam numa sessão só de API; levar a direção de comportamento para **skills**, que o agente descobre sem gastar o orçamento logo de início (exemplo dele: orientar o uso de reducers no front-end). O `CLAUDE.md` dele passou a ter **uma linha** ("você está no WSL no Windows"). **Mudança de posição datada**: a regra de concisão que em out/2025 ele "nunca ia tirar" e em jan/2026 mantinha no `CLAUDE.md` agora, segundo ele, "cabe melhor numa skill", que ele ainda não usa. É evolução do mesmo autor, não contradição entre fontes.

**Terceiro destino: hooks e lint para o que é determinístico (fev/2026)**: no dia seguinte, no [vídeo sobre hooks](../sources/2026-02-25_source-matt-pocock-hooks-cli.md), Matt Pocock acrescenta um destino para o que sai do arquivo global. Regras do tipo "use pnpm, não npm" ou "nunca dê `git push`" viram **hooks** do Claude Code, que bloqueiam o comando e orientam o agente (demonstrado); regras de estilo viram regras de **ESLint**. Os motivos são opinião dele: a regra só importa em algumas tarefas, mas o arquivo a torna global; gasta o *instruction budget*; e não garante nada, só reduz a chance. Instruções **negativas** ("nunca faça X") ele considera especialmente ruins. Aqui o orçamento aparece como "uns 500", um dia depois de ~300–400 (até ~500) — mesmo autor, números próximos, ainda sem fonte. Ver [Verificação determinística](./verificacao-deterministica.md).

### Formato Prático de uma Skill (Aula IA-11 — Cursor)
No Cursor, uma Skill é um arquivo Markdown salvo em `.cursor/skills/<nome-da-skill>.md`. Estrutura mínima observada na aula:

```markdown
---
nome: criar-entidade-completa
descricao: Cria a estrutura completa de entidade (Entity + DTO + Repository + Service + Controller)
---

# Criar Entidade Completa

## Quando usar
Quando o usuário pedir para criar uma nova entidade no sistema.

## Processo
Executar nessa ordem:
1. Criar classe entidade que estende BaseEntity (propriedades e tipagem, zero lógica)
2. Criar DTO com campos de entrada
3. Criar repositório com `findById` e `findAll`
4. Criar service com lógica de negócio
5. Criar controller com rotas HTTP
6. Aplicar todas as Rules de nomenclatura e estrutura
```

**Observações da demonstração**:
- Uma Skill **sem exemplos few-shot** funciona, mas produz resultado menos preciso — o instrutor admite que a Skill do exemplo é intencionalmente fraca.
- A Skill pode referenciar explicitamente uma Rule (`cursorRulesNomenclaturaEestrutura.md`); no Cursor isso é redundante (o Cursor já lê as Rules), mas a referência explícita é válida e portável para ferramentas que não têm separação automática Rule/Skill.
- Ao executar a Skill, o Cursor criou a hierarquia de pastas, seguiu as nomenclaturas definidas nas Rules e até gerou um `BaseEntity` ausente no projeto — porque a Skill referenciava um arquivo inexistente.

### Ciclo de Criação de Skills
**Método preferido (engenharia reversa de código existente)**:
1. Ter exemplos reais de código já implementados no projeto.
2. Pedir ao LLM: *"Baseado nestes arquivos de entidade, faça engenharia reversa e gere uma Skill que captura a estrutura básica de uma entidade do meu projeto."*
3. O LLM gera uma Skill com vários exemplos few-shot ricos.
4. Usar a Skill para criar novas entidades mantendo consistência.

**Criação do zero** (alternativa): descrever o processo ao LLM e pedir exemplos; funciona, mas produz Skill com menos contexto.

**Heurística de granularidade**: Skills específicas são mais reutilizáveis. Skills que fazem "tudo de uma vez" funcionam para CRUDs simples, mas dificultam reutilização — Spec Driven Development é mais adequado para composição de Skills parciais em fluxos complexos.

## Fontes de Suporte

- [Dev AI — Aula 10: Rule vs. Skill — Definições Canônicas](../sources/2026-04-29_source-dev-ai-rule-skill.md)
- [Dev AI — Aula 11: Exemplo Prático de Skill (Cursor)](../sources/2026-05-04_source-dev-ai-exemplo-skill.md)
- [Matt Pocock — Most devs don't understand how context windows work](../sources/2025-10-22_source-matt-pocock-janela-de-contexto.md): evitar rules longas (opinião).
- [Matt Pocock — How I use Claude Code for real engineering](../sources/2025-10-27_source-matt-pocock-claude-code-engenharia-real.md): exemplo de memória de usuário curta que muda o formato do plano (demonstrado).
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): skill como `AGENTS.md` sob demanda e skill mínima de setup (opinião/demonstrado).
- [Matt Pocock — I was an AI skeptic. Then I tried plan mode](../sources/2026-01-15_source-matt-pocock-plan-mode.md): as três linhas de regra para planos e a heurística do *instruction budget* (opinião, jan/2026).
- [Matt Pocock — Never Run claude /init](../sources/2026-02-24_source-matt-pocock-never-run-claude-init.md): *instruction budget* com números (~300–400, até ~500), arquivo global de uma linha e direção de comportamento em skills (opinião, fev/2026).
- [Matt Pocock — How to actually force Claude Code to use the right CLI](../sources/2026-02-25_source-matt-pocock-hooks-cli.md): hooks e ESLint no lugar de regras no arquivo global (demonstrado com opinião, fev/2026).

## Conceitos Relacionados

- [tipos-de-skill](./tipos-de-skill.md)
- [skills-na-pratica](./skills-na-pratica.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [mcp](./mcp.md)
- [verificacao-deterministica](./verificacao-deterministica.md): impor por hook ou lint o que a regra em texto só pede.

## Questões Não Resolvidas

- ~~**Rule vs. Skill**: qual é a diferença formal com exemplos concretos?~~ → **Resolvida na Aula IA-10**: Rule = declarativa (convenção/restrição contextual passiva); Skill = ativa (processo passo a passo com few-shot); Skill pode referenciar Rules internamente.
- ~~**Skill na prática**: qual formato exato de Markdown? Quantos exemplos few-shot são suficientes?~~ → **Parcialmente resolvida na Aula IA-11**: Skill = arquivo `.cursor/skills/<nome>.md` com frontmatter (nome, descrição) + seções "Quando usar" e "Processo" ordenado. Skills sem few-shot funcionam mas são fracas; o ideal é partir de código existente via engenharia reversa para obter exemplos ricos.
- ~~**Referência Rule→Skill por ferramenta**: como uma Skill referencia uma Rule no Cursor vs. Claude Code vs. Codex?~~ → **Parcialmente resolvida na Aula IA-11 (Cursor)**: no Cursor, a Skill pode mencionar explicitamente o arquivo de Rule (ex.: `cursorRulesNomenclaturaEestrutura.md`); isso é redundante no Cursor (que já lê Rules automaticamente) mas portável para outras ferramentas. Comportamento no Claude Code e Codex ainda não documentado.
- **Skill no Cursor**: quais metadados são obrigatórios vs. opcionais no frontmatter? Como o Cursor injeta a Skill no contexto — automaticamente ou via `@skill`?

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
- 2026-11-15: adicionada a opinião de Matt Pocock sobre o tamanho das rules em Rule vs. Skill (ingestão).
- 2026-11-15: adicionado o exemplo das rules de usuário curtas de Matt Pocock em Rule vs. Skill (ingestão).
- 2026-11-15: adicionadas as regras de plano reafirmadas em jan/2026 e a heurística do *instruction budget* (ingestão do vídeo sobre plan mode).
- 2026-11-15: adicionado o parágrafo sobre arquivo global mínimo e *instruction budget* com números, e a mudança de posição sobre a regra de concisão (ingestão do vídeo "Never Run claude /init").
- 2026-11-15: adicionado o parágrafo sobre hooks e lint como terceiro destino das regras (ingestão do vídeo sobre hooks e CLI).
