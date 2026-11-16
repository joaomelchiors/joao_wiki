---
title: "Agentes de IA (Profissional AI) — Usando Skills: instalação, chamada com / e plugins"
descricao: 'Aula "Usando Skills" do curso Profissional AI — Agentes — instalação (Personalizar → Habilidades/Plugins), chamada com `/`, plugin = conector/MCP + Skills, demos (GIF e imagem) e contorno para Skill não recarregada. Transcrição ruidosa.'
type: source
status: active
created: 2026-11-07
updated: 2026-11-12
tags: ["ia-generativa", "skill", "agentes", "formacao-dev", "claude-code", "plugins", "mcp", "skill-creator"]
source_files:
  - raw/sources/2026-11-07_transcricao_AgentesDeIa_UsandoSkill.md
related_pages:
  - ../concepts/ia-generativa.md
  - ../entities/formacao-dev.md
  - ../entities/claude-code.md
  - ./2026-11-06_source-agentes-ia-estilos-de-skill.md
  - ./2026-07-17_source-ferramentas-agenticas.md
  - ../concepts/skills-na-pratica.md
tipo_conteudo: demonstrado
captura: automatica
---

# Agentes de IA (Profissional AI) — Usando Skills: instalação, chamada com / e plugins

**Classificação** (`tipo_conteudo: demonstrado`, `captura: automatica`): instala e executa Skills prontas ao vivo.

## Resumo

Segunda aula do curso "Profissional AI — Agentes" (formacao.dev), continuação de [Estilos de Skill](./2026-11-06_source-agentes-ia-estilos-de-skill.md). O instrutor (provavelmente Leonardo; o arquivo não traz o nome — não verificado) ensina a **usar** Skills prontas antes de criá-las: onde instalar (menu "Personalizar" → Habilidades, e Plugins), como chamá-las com `/`, e demonstra duas execuções — um GIF de bola de futebol e uma imagem de robô — gerados por Skills pré-existentes, em duas ferramentas diferentes.

**Aviso sobre a transcrição**: é automática e com ruído. "Cloud Code" = Claude Code; "Untropic/1 Tropic" = Anthropic; "escalidrall" provavelmente = Excalidraw (inferência). O que o texto chama de "ChatGPT" / "ChatGPT Desktop" é uma segunda ferramenta com área de Plugins e geração de imagem própria; o instrutor não a identifica de forma inequívoca (pode ser o app desktop da OpenAI/Codex — **não verificado**). A seção que mistura as duas ferramentas é ambígua em alguns trechos.

## Pontos-Chave

- **Definição coloquial**: Skill = "habilidade empacotada dentro de um comando", chamado com `/` no Claude Code ou na outra ferramenta. Ao digitar `/`, a lista mistura comandos e Skills (na outra ferramenta as habilidades aparecem em seção separada).
- **Instalação (Claude Code, app desktop)**: menu lateral → **Personalizar** → aba **Habilidades** (= skills) → buscar e adicionar Skills publicadas pela Anthropic. Exemplos citados: `skill creator` (Skill que ajuda a criar Skills) e `Slack gif creator`. Cada Skill instalada mostra seus arquivos, pode ser aberta e **desinstalada**.
- **Skills com código**: a Skill de GIF contém arquivos Python; por isso o pré-requisito de ter Python instalado (já anunciado na aula anterior), mesmo sem o aluno entender Python.
- **Skill não aparece no `/`?** Sequência sugerida (tom de humor): chamar `Reload Skills`; repetir; fechar e reabrir o Claude Code; reiniciar o computador. Depois de carregada, digitar parte do nome (ex.: `gif`) filtra as Skills.
- **Plugins**: na outra ferramenta, **Personalizar → Plugins**; instalar um plugin (ex.: Gmail) instala também **um aplicativo/conector e uma ou mais Skills** (Gmail e uma de triagem de caixa de entrada, "inbox triage"). Há plugin de uso do computador com **servidor MCP + Skill `computer use`**. Também se mencionam plugins de vendas e Figma.
- **Demonstrações**: (1) Claude Code + Skill de GIF → `bola.gif` na pasta `01-usando-skills`, ~1–2 min, resultado feio mas funcional (o instrutor diz ser a pior de várias tentativas e que descrever melhor ajudaria); (2) outra ferramenta + Skill `imagegen` → `robo.png` (robô, cores vibrantes, estilo Excalidraw). O agente anuncia qual Skill vai usar e salva no caminho pedido via menção `@pasta`.
- **Por que Skills**: não é preciso escrever instruções enormes a cada vez; a Skill já as contém e pode ser reutilizada em fluxos diferentes. "Por baixo", o harness injeta o conteúdo da Skill no **contexto** — o instrutor reforça que contexto é uma das coisas mais importantes.
- **Casos de uso falados**: gerar página de produto (texto + imagem + organização) com um clique; acessar sistema da empresa; processar planilha mensal. São ideias, não implementadas na aula.
- **Próxima aula**: criar Skills dentro do projeto.

## Afirmações/Observações Principais

- "Skills são um dos fundamentos das automações" — afirmação do instrutor, coerente com o restante da wiki (Skill como bloco de contexto reutilizável).
- O instrutor afirma que a Anthropic ainda não tem gerador de imagem próprio, ao contrário da outra ferramenta, e ressalva que isso pode ter mudado — **afirmação datável, não verificada**.
- O instrutor pretende criar Skills "na mão" primeiro e depois usar o `skill creator`, para o aluno saber como é uma Skill por dentro.
- A Skill de GIF teve qualidade fraca e variável entre execuções — evidência prática de que Skill ≠ resultado garantido; o prompt do usuário continua importando.

## Notas de Evidência

- Tudo vem de uma única transcrição de aula demonstrativa (~12 KB); não há código nem conteúdo de `skill.md` exibido em texto — só descrição falada.
- Nomes de comandos e Skills (`Reload Skills`, `skill creator`, `Slack gif creator`, `imagegen`, `computer use`) podem estar levemente distorcidos pela transcrição automática; conferir na interface oficial antes de citar.

## Impacto na Wiki Existente

> **Nota (2026-11-12)**: `ia-generativa.md` foi dividido e virou hub. As seções citadas abaixo como "ia-generativa" estão hoje em: [Skills na Prática (pastas, instalação e criação)](../concepts/skills-na-pratica.md).

- `concepts/ia-generativa.md`: nova subseção sobre **uso e instalação de Skills** (Personalizar → Habilidades/Plugins; plugin = conector/MCP + Skills; filtro por `/`; recarregamento). Atualizar a questão "Recarregamento de Skills" (agora há segundo relato de instabilidade e passos de contorno).
- `entities/claude-code.md`: registrar instalação de Skills via app desktop e relação plugin ↔ Skill ↔ MCP.
- `entities/formacao-dev.md`: segunda aula ingerida do curso Profissional AI — Agentes.
- Convergência: a ideia de plugin como pacote (já registrada na entidade Claude Code a partir do curso CCDV-F: "skills + agentes + hooks + MCP + LSP") é confirmada aqui na prática (plugin Gmail traz app + Skills; plugin de computer use traz MCP + Skill).
- Sem contradições com fontes anteriores.

## Questões Não Resolvidas

- Qual é exatamente a segunda ferramenta chamada de "ChatGPT" e qual a relação com Codex? (confirmar nas próximas aulas)
- Por que Skills recém-instaladas não aparecem no `/` até recarregar/reiniciar? Há comando documentado para recarregar? (mesmo sintoma da aula Ferramentas Agênticas)
- Segurança: Skills de terceiros incluem scripts (Python) executados no computador do aluno; o curso não discute revisão/confiança dessas Skills (lacuna, não afirmação da fonte).
- Como os plugins de conectores (Gmail, computer use) tratam permissões e dados sensíveis? Não abordado.

## Páginas Relacionadas

- [IA Generativa (conceito)](../concepts/ia-generativa.md) — seções "Tipos de Skill" e "Infraestrutura Prática de Skills por Ferramenta"
- [Estilos de Skill (aula anterior)](./2026-11-06_source-agentes-ia-estilos-de-skill.md)
- [Dev AI — Ferramentas Agênticas (Aulas 01–05)](./2026-07-17_source-ferramentas-agenticas.md) — pastas de Skills e recarregamento
- [Claude Code (entidade)](../entities/claude-code.md)
- [formacao.dev (entidade)](../entities/formacao-dev.md)
