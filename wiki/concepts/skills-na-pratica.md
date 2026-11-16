---
title: "Skills na Prática (pastas, instalação e criação)"
descricao: 'Pastas por ferramenta, `SKILL.md`, chamada explícita/implícita, instalação, plugins e Skill com código.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-14
tags: ["skills", "claude-code", "codex", "skill-md", "plugins", "ia-generativa"]
source_files:
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-01-PastasDasSkills.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-02-SkillBasica copy.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-03-.SkillComCodigo.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-04-SkillNoCodex.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-05-EspecificacaoSimples.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-11-07_transcricao_AgentesDeIa_UsandoSkill.md
  - raw/sources/2026-11-07-transcricap_AgentsDeIa_CirandoSkill.md
  - raw/sources/2026-11-07_transcricao_AgentesDeIa_SkillComCodigo.md
related_pages:
  - ../sources/2026-11-14_source-matt-pocock-repo-skills.md
  - ./ia-generativa.md
  - ./rules-e-skills.md
  - ./tipos-de-skill.md
  - ./mcp.md
  - ./harness.md
  - ../sources/2026-07-17_source-ferramentas-agenticas.md
  - ../sources/2026-11-07_source-agentes-ia-usando-skill.md
  - ../sources/2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md
---

# Skills na Prática (pastas, instalação e criação)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Aspectos operacionais de Skills: pastas por ferramenta (`.claude/skills`, `.agents/skills`), estrutura mínima do arquivo, chamada explícita e implícita, instalação de Skills e plugins, criação do zero e Skill com código.

## Compreensão Atual

### Infraestrutura Prática de Skills por Ferramenta (Módulo Ferramentas Agênticas)
**Pastas de Skills** — onde as ferramentas procuram Skills no projeto:

| Ferramenta | Pasta |
|---|---|
| **Claude Code** | `.claude/skills/<nome-da-skill>/skill.md` |
| **Codex** | `.agents/skills/<nome-da-skill>/skill.md` |

> Nota: pastas com ponto (`.claude`, `.agents`) são ocultas no macOS/Linux; no Windows aparecem normalmente no VS Code. Para compartilhar Skills entre projetos, usar **git submodules**.

**Estrutura mínima de um arquivo `skill.md`**:

```markdown
---
name: nome-da-skill
description: Descrição detalhada usada como gatilho automático e resumo da Skill.
---

Corpo da Skill: instruções, exemplos few-shot, padrões a seguir, passos.
```

**Formas de acionar uma Skill**:

| Forma | Como funciona | Recomendação do instrutor |
|---|---|---|
| **Explícita** | `/nome-da-skill` no chat | Preferida — sem ambiguidade |
| **Implícita** | Palavras-chave da `description` são detectadas e a Skill é chamada automaticamente | Útil para disparo contextual; cuidado com falsos positivos |

A `description` serve tanto de resumo da Skill quanto de gatilho implícito. Se a description contém "estilo do Seu Lunga", qualquer mensagem com essa expressão pode acionar a Skill automaticamente.

**Skills com múltiplos arquivos (determinísticas)**:

Uma pasta de Skill pode conter qualquer arquivo além do `skill.md`. O instrutor demonstrou adicionar `index.js` para criar uma Skill que instrui o agente a executar o script e retornar o resultado:

```
.claude/skills/executar-codigo/
├── skill.md       ← ponto de entrada obrigatório
└── index.js       ← script executado pelo agente via Node.js
```

**Analogia central**: Skill = **função/procedure** na programação procedural. O maior divisor de águas não foi o OOP, mas a *procedure* — trecho de código reutilizável e acionável. Skills são o equivalente para LLMs.

**Comportamento no Codex**: idêntico ao Claude Code. Skills na pasta `.agents/skills/` têm o mesmo comportamento de frontmatter, gatilho e chamada explícita.

### Usando e Instalando Skills Prontas (Profissional AI — Agentes)
Segunda aula do mesmo curso ([Usando Skills](../sources/2026-11-07_source-agentes-ia-usando-skill.md)): aprender a **usar** antes de **criar**.

- **Chamada**: digitar `/` lista comandos e Skills; digitar parte do nome filtra; selecionar faz o agente referenciar a Skill. O harness injeta o conteúdo da Skill no contexto — por isso o pedido do usuário pode ser curto (ex.: "crie um GIF de uma bola de futebol na pasta X").
- **Instalação** (app desktop do Claude Code): *Personalizar* → *Habilidades* → buscar e adicionar Skills publicadas pela Anthropic (ex.: `skill creator`, `Slack gif creator`); cada Skill instalada exibe seus arquivos e pode ser desinstalada.
- **Plugins**: pacote de **conector/aplicativo (e MCP) + uma ou mais Skills**. Exemplos citados: plugin Gmail (conector + Skills de Gmail e triagem de caixa de entrada); plugin de uso do computador (servidor MCP + Skill `computer use`). Confirma na prática a definição de plugin como pacote já registrada em [Claude Code](../entities/claude-code.md).
- **Distribuição multiferramenta (exemplo real)**: o repositório [mattpocock/skills](../sources/2026-11-14_source-matt-pocock-repo-skills.md) publica 27 Skills como plugin instalável no Claude Code, Codex e GitHub Copilot, e por cópia manual (`npx skills@latest add`) em Cursor, Gemini CLI e outras — na prática, a independência de ferramenta registrada em [rules-e-skills](./rules-e-skills.md).
- **Skills com código**: a Skill de GIF traz arquivos Python — razão prática do pré-requisito Python.
- **Skill instalada e invisível no `/`**: contorno sugerido pelo instrutor, em tom de humor — `Reload Skills`, repetir, fechar/reabrir a ferramenta, reiniciar o computador. É o segundo relato de instabilidade de recarregamento (o primeiro, em Ferramentas Agênticas).
- **Qualidade**: o GIF gerado foi fraco e variável entre execuções; o instrutor atribui a prompt pouco descritivo. Interpretação: Skill reduz variabilidade (ver Engenharia de Contexto), não a elimina.
- Ressalva: a transcrição é automática e chama a segunda ferramenta de "ChatGPT" sem identificá-la inequivocamente (não verificado).

### Criando uma Skill do zero (Profissional AI — Agentes)
Aulas 3 e 4 do mesmo curso ([Criando Skill e Skill com Código](../sources/2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md)).

- **Pastas**: Claude lê `.claude/skills/`; Codex lê `.agents/skills/`. Copiar a pasta da Skill de um lado para o outro funciona (um único teste ao vivo).
- **Estrutura mínima**: pasta em minúsculas com hífens (ex.: `curto-e-grosso`) com `SKILL.md` (maiúsculas, segundo o instrutor, que nunca testou minúsculas) contendo frontmatter `name:` (igual à pasta) e `description:`, seguido do prompt. Em fontes anteriores da wiki o arquivo aparece como `skill.md`; possível variação, não verificada.
- **`description` com gatilhos**: expressões que ativam a Skill sem chamada explícita ("seu lunga"). Chamada explícita com `/nome` pode vir no início, meio ou fim do pedido, e várias Skills podem ser chamadas juntas.
- **Skill com código** (`inverter-texto`): `SKILL.md` + `inverter-texto.js`, gerado pela própria IA; exige Node.js. `SKILL.md` é só a porta de entrada; a pasta pode ter outros arquivos (código, `exemplos.md`).
- **Determinístico × probabilístico**: a inversão só pelo modelo pode errar; o código dá o mesmo resultado para a mesma entrada. Vale também para contas. Orientação do curso: usar a IA no que é forte e código no que exige precisão.
- **Recarga**: `reload skills` no Claude Code; no Codex, uma aula diz que é preciso fechar e abrir, a outra mostra a Skill carregando sem reiniciar (**fontes discordam**).

## Fontes de Suporte

- [Dev AI — Ferramentas Agênticas (Aulas 01–07)](../sources/2026-07-17_source-ferramentas-agenticas.md)
- [Agentes de IA (Profissional AI) — Usando Skills](../sources/2026-11-07_source-agentes-ia-usando-skill.md)
- [Agentes de IA (Profissional AI) — Criando uma Skill do zero e Skill com Código](../sources/2026-11-07_source-agentes-ia-criando-skill-e-skill-com-codigo.md)

## Conceitos Relacionados

- [rules-e-skills](./rules-e-skills.md)
- [tipos-de-skill](./tipos-de-skill.md)
- [mcp](./mcp.md)
- [harness](./harness.md)

## Questões Não Resolvidas

- **Recarregamento de Skills**: Claude Code apresentou instabilidade ao recarregar Skills após edição de arquivo (instrutor precisou fechar/abrir o app ou executar `/reload skills`). Comportamento esperado em produção não documentado. (Segundo relato na aula "Usando Skills" do curso Profissional AI: Skill instalada não aparece no `/` mesmo após `Reload Skills`; contorno do instrutor = reabrir a ferramenta ou reiniciar o computador. Causa ainda desconhecida.)
- **Skills entre projetos**: como compartilhar Skills via git submodules — mencionado mas não demonstrado. → **Parcialmente resolvida**: o padrão [Home Repo](./home-repo.md) propõe um repo único com skills e ponteiros; submodules seriam opcionais.
- **Codex e recarga de Skills**: as aulas 3 e 4 do curso Profissional AI se contradizem (uma diz que é preciso reabrir a ferramenta; a outra mostra a Skill carregando sem reiniciar).
- **Maiúsculas/minúsculas em `SKILL.md`**: o curso usa maiúsculas sem ter testado minúsculas; fontes anteriores usam `skill.md`.

## Notas de Atualização

- 2026-11-14: adicionado o exemplo de distribuição multiferramenta do repositório mattpocock/skills (revisão da ingestão).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
