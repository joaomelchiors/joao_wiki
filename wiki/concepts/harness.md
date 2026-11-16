---
title: "Harness (infraestrutura do agente)"
descricao: 'Harness — loop de execução, compressão de contexto, responsabilidades do desenvolvedor, autonomia e isolamento.'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-15
tags: ["harness", "agentes", "claude-code", "contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-07-HarnessParte2.md
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
  - raw/sources/2025-10-08_most-devs-don-t-understand-what-agents-are_en-corrigida_AtYtuVTZCQU.md
  - raw/sources/2026-01-05_ship-working-code-while-you-sleep-with-the-ralph-wiggum_en-corrigida__IK18goX4X8.md
  - raw/sources/2026-01-12_frontend-is-harder-for-ai-than-backend-here-s-how-to-fix-it_en-corrigida_pSritFeoYFo.md
related_pages:
  - ./ia-generativa.md
  - ./melhores-praticas-claude-code.md
  - ./agentes-de-ia.md
  - ./spec-driven-development.md
  - ./engenharia-de-contexto.md
  - ./seguranca-de-agentes.md
  - ../sources/2026-07-17_source-ferramentas-agenticas-harness.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
  - ../sources/2025-10-08_source-matt-pocock-agentes-workflows.md
  - ../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md
  - ../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md
  - ./ralph-loop.md
---

# Harness (infraestrutura do agente)

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

## Definição

Harness (arreios) é a camada de software que envolve o LLM e o transforma em um agente: loop de execução, ferramentas, gestão e compressão de contexto, permissões e memória. Claude Code, Codex e Cursor são exemplos. Inclui autonomia e isolamento no Claude Code (CCDV-F).

## Compreensão Atual

### Harness: A Infraestrutura do Agente
**Harness** (arreios): camada de software que **envolve o LLM** e o transforma em um agente capaz de perceber o ambiente, tomar decisões e agir. O LLM sozinho é apenas um preditor de texto stateless; o harness é tudo ao redor que dá a ele "pernas, braços e olhos".

**Analogia central**: cavalo + arreios. O arreio conduz o cavalo (LLM) pelo caminho correto; sem arreios, o cavalo vai em qualquer direção.

**Exemplos de harnesses**: Claude Code, Codex, Cursor, Antigravity, LangChain, AutoGPT, Claude Agent SDK.

#### Componentes do Harness
| Componente | Função |
|---|---|
| **LLM** (stateless) | Recebe contexto, decide próxima ação |
| **Contexto** | Prompt atual + histórico + memória + ferramentas disponíveis + Skills carregadas |
| **Ferramentas** | Sistema de arquivos (FS), terminal (Bash), APIs externas, MCP, Skills |
| **Loop de execução** | Ciclo: LLM decide → ferramenta executa → resultado vai pro contexto → LLM decide novamente |
| **Gestão de contexto** | Montagem, compressão (quando janela excede limite), injeção de system prompt |
| **Memória/Estado** | Histórico de sessão, arquivos de memória |

#### Loop de Execução
```
Prompt do usuário
     ↓
Montagem do Contexto:
  [prompt + histórico + memória + ferramentas disponíveis + Skills]
     ↓
LLM (stateless) → toma decisão:
  → "preciso ler a pasta X"
  → "preciso executar o arquivo Y"
  → "preciso chamar a Skill Z"
     ↓
Harness executa a ferramenta solicitada
     ↓
Resultado da ferramenta → volta para o contexto
     ↓
[LOOP: monta novo contexto → LLM → ação → resultado → ...]
     ↓
LLM decide: "já tenho tudo, posso dar resposta final"
     ↓
Resumo final para o usuário
```

Matt Pocock descreve o mesmo loop (LLM pede a tool → sistema executa → resultado volta ao LLM) e cita o Claude Code como exemplo; reforço de fonte `explicacao` ([resumo](../sources/2025-10-08_source-matt-pocock-agentes-workflows.md)).

**Laço por fora do harness**: no [laço Ralph](./ralph-loop.md) (Matt Pocock, jan/2026, `demonstrado`, fonte única; [resumo](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md)), um script bash envolve a CLI do agente e a reinvoca a cada tarefa. O loop interno acima continua dentro de cada iteração; a memória **entre** iterações não fica no contexto, e sim em arquivos (PRD em JSON com flag `passes`, `progress.txt`) e no histórico do git.

**A ordem do contexto importa**: itens mais recentes (final do contexto) têm mais peso na tomada de decisão do LLM. Por isso carregar uma Skill no final de cada passo de uma spec aumenta sua relevância.

#### Compressão de Contexto
Quando o contexto excede a **janela de contexto** (limite de tokens do modelo), o harness realiza compressão automática:
- Remove informações não relevantes para os próximos passos
- Sumariza o conteúdo anterior (analogia: resumir reunião de 8h em meia hora)
- No Claude Code: `/context` mostra o percentual da janela já utilizado na sessão atual
- Subagentes: cada subagente tem uma janela de contexto independente (com algum compartilhamento da sessão)

#### Responsabilidades Embutidas vs. Responsabilidade do Desenvolvedor
**Embutidas na ferramenta** (já entregues pelo harness):
1. Loop de execução — recebe saída do modelo, executa ação, devolve resultado, chama o modelo novamente
2. Exposição de ferramentas — passa lista de ferramentas disponíveis para o LLM decidir
3. Gestão de contexto — monta prompt, injeta system prompt, comprime quando necessário
4. Permissões e confirmação — decide o que o agente executa autonomamente vs. o que pede confirmação
5. Roteamento — interpreta chamadas de ferramentas e direciona para o código correto
6. Memória e estado — mantém histórico, arquivos de memória, sessões

**Responsabilidade do desenvolvedor** — adicionar "sensores" via Skills e specs:
- Pedir cobertura de testes ≥ 90% ao criar uma classe (instrução na Skill)
- Adicionar passo de "execute os testes do projeto" após passos críticos nas specs
- Pedir testes de integração em pontos estratégicos da especificação
- Instruir o agente a abrir browser interno para validar UI (Claude Code tem browser embutido)
  - Convergência: Matt Pocock (jan/2026, `demonstrado`) dá ao Claude Code um navegador via **Chrome DevTools MCP**, com uma skill que sobe o Chrome headless antes do uso, e o agente faz QA visual ad hoc ([resumo](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md)). A fonte não confirma nem contradiz o "browser embutido" acima: usa MCP e cita a extensão de Chrome do Claude como outra via.
- Usar subagente diferente para criar testes (contexto limpo evita viés de confirmação)

**Distinção importante**: harness ≠ arquivo ou técnica. A técnica é **Skills + Spec-Driven Development**; o harness é a infraestrutura. As verificações inseridas nas Skills e specs **fortalecem o harness**.

### Autonomia e Isolamento no Claude Code
Modos de permissão, *auto mode* (meio-termo entre aprovar tudo e `--dangerously-skip-permissions`; segurança real **não verificada**), sandbox (`/sandbox`), plugins e hooks pré/pós ferramenta. Detalhes em [Claude Code](../entities/claude-code.md) e no [resumo do curso](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md).

## Fontes de Suporte

- [Dev AI — Ferramentas Agênticas: Harness (Partes 1 e 2)](../sources/2026-07-17_source-ferramentas-agenticas-harness.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)
- [Matt Pocock — Most devs don't understand what agents are](../sources/2025-10-08_source-matt-pocock-agentes-workflows.md): mesmo loop LLM → tool → resultado
- [Matt Pocock — Ship working code while you sleep with the Ralph Wiggum technique](../sources/2026-01-05_source-matt-pocock-ralph-wiggum.md): laço bash sobre a CLI do agente, com estado em arquivos e git (jan/2026)
- [Matt Pocock — Frontend is HARDER for AI than backend](../sources/2026-01-12_source-matt-pocock-frontend-feedback-visual.md): navegador via MCP como sensor visual (jan/2026)

## Conceitos Relacionados

- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)
- [agentes-de-ia](./agentes-de-ia.md)
- [spec-driven-development](./spec-driven-development.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)
- [verificacao-deterministica](./verificacao-deterministica.md): portões de qualidade (CRAP, mutation testing, regras de dependência) que um harness pode executar em laço, segundo Uncle Bob (opinião, uma fonte).

## Questões Não Resolvidas

- ~~**Harness**: conceito mencionado como próximo tema após Spec-Driven Development, mas Aula 06 (Harness Parte 1) estava vazia — sem conteúdo disponível.~~ → **Resolvida nas Aulas 06 e 07**: harness = camada de software que envolve o LLM (ferramentas como Claude Code, Codex, Cursor são harnesses); loop de execução detalhado; compressão automática de contexto; responsabilidade do desenvolvedor via verificações em Skills e specs.

## Notas de Atualização

- 2026-11-15: em "Loop de Execução", reforço de Matt Pocock (vídeo de out/2025).
- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
