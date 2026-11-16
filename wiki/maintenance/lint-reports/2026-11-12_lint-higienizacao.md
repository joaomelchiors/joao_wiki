---
title: "Lint — Higienização e classificação de fontes (2026-11-12)"
descricao: 'Higienização: classificação das 37 fontes por tipo de conteúdo, 3 conceitos em draft, decisões do chat marcadas, interpretações movidas para sínteses, 0 links quebrados; pendências: verificar afirmações do chat, CQRS, seção ErroValidacao fora do lugar.'
type: maintenance
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["lint", "manutenção", "classificacao-de-fontes", "higienizacao"]
source_files: []
related_pages:
  - ../../index.md
  - ../../log.md
  - ../../open-questions.md
  - ./2026-11-04_lint-completo.md
  - ../../syntheses/2026-11-12_home-repo-nesta-wiki.md
  - ../../syntheses/2026-11-12_camadas-rule-skill-mcp-sdd.md
---

# Lint — Higienização e classificação de fontes (2026-11-12)

## Escopo

- **Diretórios**: `wiki/sources/` (37), `wiki/concepts/` (22), `wiki/entities/` (6), `wiki/syntheses/` (2, criadas nesta revisão), `wiki/maintenance/`, mais `CLAUDE.md` e `templates/`.
- **Motivação**: o usuário apontou o risco de fontes de qualidade desigual alimentarem a wiki sem distinção. Houve primeiro uma revisão da regra de classificação, depois a aplicação dela.
- **Execução**: sete etapas aprovadas uma a uma pelo usuário em 2026-11-12, cada uma registrada no [log](../../log.md).

## O que foi feito

| Etapa | Resultado |
|---|---|
| 1. Regra no esquema | `CLAUDE.md` §5.1: campos `tipo_conteudo` e `captura`, quatro regras de uso e quatro checagens novas no §9. A captura automática não rebaixa a fonte. |
| 2. Classificar fontes | 37 resumos classificados: 17 `explicacao`, 13 `demonstrado`, 2 `opiniao`, 2 `referencia`, 1 `fornecedor`, 1 `conversa-llm`, 1 `obsoleta`. Corrigido o caminho IA-08 → IA-09. |
| 3. Auditar conceitos | `tdd`, `ai-driven-development` e `deep-learning` passaram a `draft`. Atribuições acrescentadas em `engenharia-de-contexto`, `mcp` e `tdd`; uma interpretação corrigida em `melhores-praticas-claude-code`. |
| 4. Dependência do chat | Seções vindas só da conversa com LLM marcadas como decisão de projeto em `arquitetura-limpa`, `ddd` e `objeto-de-valor`. |
| 5. Interpretações → sínteses | Duas sínteses criadas (home repo nesta wiki; camadas Rule/Skill/MCP/SDD). |
| 6. Pendências antigas | 26 resumos reapontados para as páginas derivadas; questões de DDD consolidadas em `open-questions.md`. |
| 7. Este relatório | Mais duas páginas órfãs corrigidas (ver abaixo). |

## Principais Descobertas

### Checagens novas do §9 (CLAUDE.md)

- **Todo resumo tem `tipo_conteudo` e `captura`?** Sim, 37 de 37.
- **Conceitos `active` sustentados só por fontes fracas?** Após a etapa 3, nenhum. Três conceitos estão em `draft`. `home-repo` se apoia só em `referencia` (artigo do próprio autor do padrão) e continua `active`, com o padrão atribuído a ele.
- **Afirmações de fonte única sem atribuição?** Corrigidas nas páginas com fontes `opiniao`, `fornecedor` e `conversa-llm`. **Não revisadas linha a linha**: quatro conceitos com uma única fonte `explicacao` (`seguranca-de-agentes`, `claude-api-parametros-e-custo`, `system-prompt-e-guardrails`, `contexto-delimitado`).
- **Interpretações do mantenedor em conceitos?** As duas substanciais foram movidas para sínteses. **Exceção aceita**: quatro observações de uma linha, marcadas "Interpretação", ficaram nos conceitos (`deep-learning`, `skills-na-pratica`, `tipos-de-skill`, `melhores-praticas-claude-code`), porque uma síntese para cada uma não se justifica. A regra 3 do §5.1 pede link para síntese nesses casos; vale decidir se a regra deve admitir essa exceção.

### Contradições

- **Nova, interna à conversa com LLM**: `restore()` chama `tryCreate()` ou o inverso? A conversa traz as duas formas. Registrada em [DDD](../../concepts/ddd.md) e em `open-questions.md`.
- **Correção ao lint anterior**: o [lint de 2026-11-04](./2026-11-04_lint-completo.md) diz que a distinção `create()`/`restore()` atribuída a Eric Evans é "consistente com fontes anteriores". Ela vem só da conversa com LLM e não foi verificada no livro. As contradições já conhecidas (Codex e recarga de Skills, SDD × "specs to code", dumb zone 100k/150k) continuam registradas nas páginas.

### Conteúdo Obsoleto

- `sources/2026-04-20_transcricoes-projetoEAD.md`: `status: superseded` e `tipo_conteudo: obsoleta`. Nenhum link aponta para ela; é o esperado.

### Páginas Órfãs

- **Corrigidas**: `sources/2026-04-20_source-imersao-ddd-arq-limpa-qa-01.md` (agora linkada de `arquitetura-limpa` e `formacao-dev`) e `sources/2026-04-28_source-dev-ai-objetivo-das-trilhas.md` (linkada de `formacao-dev`).
- **Esperadas**: relatórios de lint antigos (só no index) e a fonte obsoleta.
- **Links internos quebrados**: 0 no corpo das páginas. No frontmatter, os 6 caminhos de `related_pages` da fonte obsoleta `transcricoes-projetoEAD` estão quebrados (formato antigo `./concepts/...`, e três páginas nunca existiram: `domain-driven-design`, `entidade`, `caso-de-uso`). Foram mantidos como histórico.

### Estrutura

- Em [Objeto de Valor](../../concepts/objeto-de-valor.md), a seção "Classe ErroValidacao como Base do Pipeline de Validação" está dentro de "Questões Não Resolvidas". O conteúdo está certo, mas fora do lugar.
- 19 imagens em `raw/assets/` não são citadas por nenhuma página da wiki (por exemplo `useTracerBullets.png`, `tipoDeSkill.png`, `harnessComoSequenciaDePassos.png`). Provavelmente são citadas dentro das transcrições brutas.

### Conceitos-Chave Não Promovidos

- **CQRS**: ainda espalhado em `ddd` e `agregado` (pendente desde 2026-04-28).
- **ErroValidacao**: tem fonte própria e seção dentro de `objeto-de-valor`; candidato a promoção se a série Modelagem de Domínio continuar.

## Ações Recomendadas

- **Prioridade alta**
  - Verificar as três afirmações vindas do chat: distinção atribuída a Evans, `crypto.randomUUIDv7()` no Node e direção `restore()` ↔ `tryCreate()` (só o usuário sabe a última).
- **Prioridade média**
  - Mover a seção ErroValidacao de "Questões Não Resolvidas" para "Compreensão Atual" em `objeto-de-valor`.
  - Revisar linha a linha os quatro conceitos de fonte única `explicacao`.
  - Decidir se o §5.1 admite interpretações de uma linha nos conceitos sem síntese.
- **Prioridade baixa**
  - Criar `concepts/cqrs.md`.
  - Citar as imagens de `raw/assets/` nos resumos ou conceitos correspondentes.

## Candidatos de Pesquisa

- Fontes de tipo `referencia` (documentação oficial) para sustentar os conceitos hoje apoiados só em aulas: MCP, Claude Code, Skills.
- Material sobre deep learning que permita tirar o conceito de `draft`.
- Uma segunda fonte, além de Matt Pocock, sobre TDD com agentes de IA.

## Estatísticas

| Métrica | Valor |
|---|---|
| Arquivos em `raw/sources/` | 62 |
| Resumos de fonte | 37 (todos classificados) |
| Conceitos | 22 (19 `active`, 3 `draft`) |
| Entidades | 6 |
| Sínteses | 2 (1 `active`, 1 `draft`) |
| Links internos quebrados | 0 (exceto 6 no frontmatter da fonte obsoleta) |
| Órfãs não esperadas | 0 (2 corrigidas) |

## Saúde Geral

🟢 **Boa**. Cada fonte agora declara o tipo de conteúdo, e os conceitos distinguem fato, opinião atribuída, decisão de projeto e interpretação. O ponto fraco que resta é a verificação externa: várias afirmações dependem de uma única aula ou da conversa com LLM e não foram conferidas em documentação oficial.

## Próxima Verificação Recomendada

Após a próxima ingestão grande (aulas práticas de MCP do curso Profissional AI), ou em 2027-02-12.
