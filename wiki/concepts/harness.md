---
title: "Harness (infraestrutura do agente)"
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["harness", "agentes", "claude-code", "contexto", "ia-generativa"]
source_files:
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-06-HarnessParte1.md
  - raw/sources/2026-07-17_transcrição-FerramentasAgenticas-07-HarnessParte2.md
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
related_pages:
  - ./ia-generativa.md
  - ./melhores-praticas-claude-code.md
  - ./agentes-de-ia.md
  - ./spec-driven-development.md
  - ./engenharia-de-contexto.md
  - ./seguranca-de-agentes.md
  - ../sources/2026-07-17_source-ferramentas-agenticas-harness.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
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
- Usar subagente diferente para criar testes (contexto limpo evita viés de confirmação)

**Distinção importante**: harness ≠ arquivo ou técnica. A técnica é **Skills + Spec-Driven Development**; o harness é a infraestrutura. As verificações inseridas nas Skills e specs **fortalecem o harness**.

### Autonomia e Isolamento no Claude Code
Modos de permissão, *auto mode* (meio-termo entre aprovar tudo e `--dangerously-skip-permissions`; segurança real **não verificada**), sandbox (`/sandbox`), plugins e hooks pré/pós ferramenta. Detalhes em [Claude Code](../entities/claude-code.md) e no [resumo do curso](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md).

## Fontes de Suporte

- [Dev AI — Ferramentas Agênticas: Harness (Partes 1 e 2)](../sources/2026-07-17_source-ferramentas-agenticas-harness.md)
- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)

## Conceitos Relacionados

- [melhores-praticas-claude-code](./melhores-praticas-claude-code.md)
- [agentes-de-ia](./agentes-de-ia.md)
- [spec-driven-development](./spec-driven-development.md)
- [engenharia-de-contexto](./engenharia-de-contexto.md)
- [seguranca-de-agentes](./seguranca-de-agentes.md)

## Questões Não Resolvidas

- ~~**Harness**: conceito mencionado como próximo tema após Spec-Driven Development, mas Aula 06 (Harness Parte 1) estava vazia — sem conteúdo disponível.~~ → **Resolvida nas Aulas 06 e 07**: harness = camada de software que envolve o LLM (ferramentas como Claude Code, Codex, Cursor são harnesses); loop de execução detalhado; compressão automática de contexto; responsabilidade do desenvolvedor via verificações em Skills e specs.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
