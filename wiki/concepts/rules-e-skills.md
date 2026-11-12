---
title: "Rules e Skills"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["rules", "skills", "few-shot", "engenharia-de-contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-04-27_transcrição-IA-10-ContextoRulesSkill-ruleSkill.md
  - raw/sources/2026-05-04_transcrição-IA-11-ContextoRulesSkill-exemploSkill.md
related_pages:
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

## Conceitos Relacionados

- [tipos-de-skill](./tipos-de-skill.md)
- [skills-na-pratica](./skills-na-pratica.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [mcp](./mcp.md)

## Questões Não Resolvidas

- ~~**Rule vs. Skill**: qual é a diferença formal com exemplos concretos?~~ → **Resolvida na Aula IA-10**: Rule = declarativa (convenção/restrição contextual passiva); Skill = ativa (processo passo a passo com few-shot); Skill pode referenciar Rules internamente.
- ~~**Skill na prática**: qual formato exato de Markdown? Quantos exemplos few-shot são suficientes?~~ → **Parcialmente resolvida na Aula IA-11**: Skill = arquivo `.cursor/skills/<nome>.md` com frontmatter (nome, descrição) + seções "Quando usar" e "Processo" ordenado. Skills sem few-shot funcionam mas são fracas; o ideal é partir de código existente via engenharia reversa para obter exemplos ricos.
- ~~**Referência Rule→Skill por ferramenta**: como uma Skill referencia uma Rule no Cursor vs. Claude Code vs. Codex?~~ → **Parcialmente resolvida na Aula IA-11 (Cursor)**: no Cursor, a Skill pode mencionar explicitamente o arquivo de Rule (ex.: `cursorRulesNomenclaturaEestrutura.md`); isso é redundante no Cursor (que já lê Rules automaticamente) mas portável para outras ferramentas. Comportamento no Claude Code e Codex ainda não documentado.
- **Skill no Cursor**: quais metadados são obrigatórios vs. opcionais no frontmatter? Como o Cursor injeta a Skill no contexto — automaticamente ou via `@skill`?

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
