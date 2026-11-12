---
title: "Agentes de IA (Profissional AI) — Criando uma Skill do zero e Skill com Código"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["ia-generativa", "skill", "agentes", "formacao-dev", "claude-code", "codex", "skill-md", "nodejs"]
source_files:
  - raw/sources/2026-11-07-transcricap_AgentsDeIa_CirandoSkill.md
  - raw/sources/2026-11-07_transcricao_AgentesDeIa_SkillComCodigo.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../entities/claude-code.md
  - ./2026-11-07_source-agentes-ia-usando-skill.md
  - ./2026-11-06_source-agentes-ia-estilos-de-skill.md
  - ./2026-07-17_source-ferramentas-agenticas.md
  - ../concepts/skills-na-pratica.md
tipo_conteudo: demonstrado
captura: automatica
---

# Agentes de IA (Profissional AI) — Criando uma Skill do zero e Skill com Código

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): cria e executa duas Skills ao vivo no Claude Code e no Codex.

## Resumo

Terceira e quarta aulas do curso "Profissional AI — Agentes" (formacao.dev), em sequência a [Usando Skills](./2026-11-07_source-agentes-ia-usando-skill.md). O instrutor (provavelmente Leonardo; o arquivo não traz o nome, não verificado) cria **à mão** duas Skills para mostrar que uma Skill é simples:

1. **`curto-e-grosso`**: Skill só de prompt (muda o estilo de resposta para curto, ácido e sarcástico).
2. **`inverter-texto`**: Skill que chama um script JavaScript (`inverter-texto.js`) para inverter um texto de forma determinística.

Ele cria a Skill no Claude Code e copia a pasta para a pasta equivalente do Codex, mostrando que o mesmo arquivo funciona nas duas ferramentas. A transcrição é automática e tem ruído ("rabungento", "SKILL.md" com variações).

## Pontos-Chave

- **Pastas por ferramenta**: Claude lê `.claude/skills/`; Codex lê `.agents/skills/` (nome no plural nos dois casos). No Mac, pastas com ponto são tratadas como ocultas (Command + Shift + `.` as mostra); no VS Code aparecem normalmente em Windows e Mac.
- **Estrutura mínima**: uma pasta com o nome da Skill em minúsculas e hífens (`curto-e-grosso`) contendo `SKILL.md` em maiúsculas. O instrutor diz que nunca testou minúsculas, mas que os exemplos de mercado usam maiúsculas.
- **Formato do `SKILL.md`**: frontmatter entre `---` com `name:` (igual ao nome da pasta) e `description:`, seguido do prompt reutilizável.
- **`description` com gatilhos**: o texto inclui expressões que ativam a Skill sem chamada explícita (ex.: "seu lunga", "curto e grosso"). Chamada **implícita** (pela fala) ou **explícita** (`/curto-e-grosso`, no início, meio ou fim do pedido); é possível chamar várias Skills juntas.
- **Demonstração (Skill só de prompt)**: a mesma pergunta ("o que é uma skill?") gera resposta longa sem a Skill e resposta curta e sarcástica com ela, tanto por `/curto-e-grosso` quanto por um gatilho no texto após `/clear`. No Codex o resultado foi menos humorado; o instrutor sugere detalhar o estilo e dar exemplos, usando técnicas de engenharia de prompt (personagem, roleplay, exemplos).
- **Skill com código**: `inverter-texto/` tem `SKILL.md` e `inverter-texto.js`. O instrutor pediu à própria IA para gerar o script e não se preocupou com o conteúdo. A Skill precisa de **Node.js** instalado. Resultado: resposta sobre a Dinamarca entregue com o texto invertido, nas duas ferramentas.
- **`SKILL.md` é a porta de entrada**: obrigatório, mas pode haver outros arquivos na pasta (código, exemplos em `exemplos.md` referenciados pelo `SKILL.md`). Nenhum limite prático é apontado ("poderia ter 50 mil arquivos").
- **Markdown**: `.md` é Markdown, texto simples com marcação para títulos, negrito etc.
- **Probabilístico × determinístico**: só com o modelo, a inversão pode sair errada; o código dá o mesmo resultado para a mesma entrada. Vale para contas matemáticas: calcular por código é mais preciso. Recomendação do instrutor: usar a IA no que é forte e código no que exige precisão, e ter os dois nas Skills.

## Afirmações e Evidências

| Afirmação do instrutor | Evidência na fonte | Força |
|---|---|---|
| A mesma Skill funciona em Claude Code e Codex copiando a pasta | Demonstração ao vivo com duas Skills | Moderada (um único teste, sem versões informadas) |
| Skill de código é mais precisa que o modelo para inverter texto/contas | Argumento conceitual; a demonstração só mostra o caso de sucesso | Fraca a moderada (consistente com [limitações do modelo](./2026-04-27_source-dev-ai-limitacoes-do-modelo.md)) |
| O Codex só carrega Skill nova se for fechado e aberto | Na aula "Criando", sem comando de recarga; na aula "Skill com Código", o Codex carregou a Skill sem reiniciar | **Fontes discordam entre as duas aulas** (mesmo curso) |
| O Claude Code carrega Skills pelo comando `reload skills` | Usado na aula "Skill com Código" | Fraca (instabilidade já registrada em outras aulas) |

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Skills na Prática (pastas, instalação e criação)](../concepts/skills-na-pratica.md).

- [IA Generativa](../concepts/ia-generativa.md): nova subseção "Criando uma Skill do zero (Profissional AI — Agentes)" com o procedimento, gatilhos na `description` e Skill com código.
- Nuance sobre nomenclatura: a wiki registra `skill.md` em minúsculas em fontes anteriores; esta fonte usa `SKILL.md` em maiúsculas. Possível variação entre ferramentas ou versões (não verificado).
- Reforça a taxonomia de [Estilos de Skill](./2026-11-06_source-agentes-ia-estilos-de-skill.md): `curto-e-grosso` = só modelo; `inverter-texto` = determinística.
- [formacao.dev](../entities/formacao-dev.md) e [Claude Code](../entities/claude-code.md): aulas 3 e 4 do curso ingeridas.

## Questões Não Resolvidas

- O Codex recarrega Skills sozinho ou exige reinício? As duas aulas se contradizem.
- Maiúsculas ou minúsculas em `SKILL.md`: algum efeito prático? O instrutor não testou.
- Como o agente decide executar o script em vez de só seguir o texto (pergunta já aberta em [Skills na Prática](../concepts/skills-na-pratica.md)).
- Segurança de executar scripts gerados por IA no computador do aluno: não discutida pela fonte.
- Existe método para manter uma só cópia da Skill para as duas ferramentas? O instrutor diz que existe, mas adia a explicação ("detalhe técnico do sistema operacional").
