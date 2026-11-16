---
title: "Lint Completo — 2026-11-04"
descricao: 'Verificação completa da wiki — 37 páginas analisadas; index.md e log.md desatualizados desde set/2026; 2 páginas ausentes do index (fonte + entidade); 2 fontes brutas não ingeridas; open-questions.md vazio.'
type: maintenance
status: active
created: 2026-11-04
updated: 2026-11-04
tags: ["lint", "manutenção"]
source_files: []
related_pages:
  - ../../index.md
  - ../../log.md
  - ../../open-questions.md
---

# Lint Completo — 2026-11-04

## Escopo

Verificação de toda a wiki em 2026-11-04. Cobertura: `wiki/sources/` (28 arquivos), `wiki/concepts/` (6), `wiki/entities/` (4), `wiki/maintenance/` (5), `raw/sources/` (49 arquivos brutos).

---

## 1. Páginas Presentes em Disco mas Ausentes do `index.md`

### 🔴 Alta Prioridade — `index.md` desatualizado

O `index.md` não foi atualizado desde **2026-07-19** e não reflete as adições de setembro/2026:

| Arquivo em disco | Tipo | Data criação | Status no index.md |
|---|---|---|---|
| `wiki/sources/2026-09-07_source-chat-ddd-express-ports-and-adapters.md` | source | 2026-09-07 | **AUSENTE** |
| `wiki/entities/joao-marcos-melchiors.md` | entity | 2026-09-07 | **AUSENTE** |

**Contagens reais vs. declaradas no index.md:**

| Tipo | Declarado em index.md | Real em disco |
|---|---|---|
| Resumos de fonte | 26 | **27** |
| Páginas de conceito | 6 | 6 ✅ |
| Páginas de entidade | 3 | **4** |
| Páginas de síntese | 0 | 0 ✅ |

---

## 2. Entrada de Log Faltando

O `log.md` não possui entrada para:

- **Ingestão de `2026-09-07_chat-DDD-Express-PortsAndAdapters.md`**: a fonte foi processada (resumo existe em `wiki/sources/`, conceitos e entidade foram atualizados), mas nenhuma entrada de log foi registrada.
- **Criação de `entities/joao-marcos-melchiors.md`**: nova entidade criada sem entrada de log.

---

## 3. Fonte Bruta Essencialmente Vazia (IA-14)

| Arquivo bruto | Tamanho | Conteúdo |
|---|---|---|
| `raw/sources/2026-07-19_transcrição-IA-14-SkillModulos-Skill-CriarUmNovoProjeto.md` | 178 bytes | Apenas URL de fonte + título. Sem transcrição. |

**Diagnóstico**: transcrição não foi capturada. Não há conteúdo para ingerir. Não deve ser processado.

**Recomendação**: manter em `raw/` como está; anotar no `open-questions.md` como pendência de captura.

---

## 4. Fontes Brutas Novas Ainda Não Ingeridas

| Arquivo bruto | Tamanho | Natureza |
|---|---|---|
| `raw/sources/2026-08-03_transcrição-ModelagemDeDominio-48-ErrorDeValidacao.md` | 9 322 bytes | Aula sobre classe `ErroValidacao` — nova série de modelagem de domínio (formacao.dev) |
| `raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md` | 489 119 bytes | Vídeo completo do curso de certificação "Claude Certified Developer Foundations" (Andrew Brown, em inglês) |

**Prioridade de ingestão:**
1. **Alta** — `2026-08-03_ModelagemDeDominio-48`: pequeno, relacionado a conceitos DDD já estabelecidos.
2. **Alta** — `2026-11-04_Curso_Certificacao_ClaudeCode`: grande, mas tópico estratégico (Claude Code) altamente relevante para o tema da wiki; provavelmente exigirá uma página de resumo nova e atualização em `ia-generativa.md`.

---

## 5. Arquivo Obsoleto (`2026-04-20_transcricoes-projetoEAD.md`)

| Arquivo | Status | Situação |
|---|---|---|
| `wiki/sources/2026-04-20_transcricoes-projetoEAD.md` | `active` (deveria ser `superseded`) | Substituído por `2026-04-20_source-imersao-ddd-arq-limpa.md`. Detectado no lint anterior (2026-04-28) mas **não corrigido**. |

**Recomendação**: alterar frontmatter `status: superseded`. Não deletar (preservar histórico).

---

## 6. `open-questions.md` Continua Vazio

O arquivo `wiki/open-questions.md` tem estrutura mas sem nenhuma questão real. Há **dezenas de questões abertas** espalhadas pelas páginas de conceito:

**Amostra de questões pendentes de consolidação:**

- `ddd.md` → escalabilidade de modelos ricos com ORMs modernos; Linguagem Ubíqua bilíngue; Validator fluente genérico
- `objeto-de-valor.md` → serialização de VOs via Prisma; Validator fluente genérico
- `arquitetura-limpa.md` → `usuario.queries.ts` (CQS); presenters/DTOs de resposta; `CriptografiaProvider` concreto com bcrypt; erros HTTP mistos
- `ia-generativa.md` → muitas (Sand Castle, doc rot, multi-agentes, Push vs Pull, etc.)
- `2026-09-07_source-chat-...` → status HTTP global para erros mistos; OAuth; eventos de domínio; migração TypeScript 7

**Recomendação prioridade alta**: consolidar as 10–15 mais relevantes nesta página.

---

## 7. Conceitos Não Promovidos (herdados do lint anterior)

Do lint de 2026-04-28, os seguintes ainda não possuem páginas próprias:

| Conceito | Urgência | Localização atual |
|---|---|---|
| **ErroValidacao** (classe custom) | Média — nova fonte disponível | Nenhuma; fonte ainda não ingerida |
| **CQRS** | Média | Espalhado em `ddd.md` e `agregado.md` |
| **TDD** | Média | `ia-generativa.md` (seção Matt Pocock) |
| **Result/Either pattern** | Baixa (bem coberto em `objeto-de-valor.md`) | `objeto-de-valor.md` já cobre bem |

---

## 8. Verificação de Contradições

**Nenhuma contradição detectada.** As fontes mais recentes (chat DDD+Express, 2026-09-07) reforçam e aprofundam os conceitos das fontes anteriores sem contradizer nenhuma afirmação estabelecida.

Pontos de atenção (evoluções, não contradições):

- **UUID v4 → v7**: `objeto-de-valor.md` já reflete a evolução corretamente.
- **`id?` → `id` obrigatório**: `ddd.md` reflete a evolução corretamente.
- **`create()` vs `restore()`**: nova distinção (Eric Evans) adicionada em `ddd.md`; consistente com fontes anteriores.

---

## 9. Verificação de Páginas Órfãs

| Página | Links apontando para ela? | Status |
|---|---|---|
| `2026-04-20_transcricoes-projetoEAD.md` | Nenhum | Órfã + obsoleta — ver item 5 |
| `wiki/entities/joao-marcos-melchiors.md` | Sim — `ddd.md`, `arquitetura-limpa.md`, `objeto-de-valor.md`, `2026-09-07_source-chat-...` | Não é órfã; apenas ausente do index |

---

## 10. Referências Cruzadas Quebradas

| Localização | Referência | Status |
|---|---|---|
| `ddd.md` → `related_pages` | `../entities/joao-marcos-melchiors.md` | Arquivo existe ✅ — apenas ausente do index |
| `objeto-de-valor.md` → `source_files` | `raw/sources/2026-09-07_chat-DDD-Express-PortsAndAdapters.md` | Arquivo existe ✅ |

**Nenhuma referência cruzada quebrada encontrada.**

---

## Ações Recomendadas

### 🔴 Prioridade Alta (fazer agora)

1. **Atualizar `index.md`**: adicionar `2026-09-07_source-chat-ddd-express-ports-and-adapters.md` e `entities/joao-marcos-melchiors.md`; corrigir contagens (27 fontes, 4 entidades).
2. **Atualizar `log.md`**: adicionar entrada retrospectiva para a ingestão de setembro/2026.
3. **Marcar `2026-04-20_transcricoes-projetoEAD.md` como `superseded`** no frontmatter.
4. **Ingerir `2026-08-03_ModelagemDeDominio-48-ErrorDeValidacao.md`**: pequeno e relacionado a DDD.

### 🟡 Prioridade Média (próxima sessão)

5. **Ingerir `2026-11-04_Curso_Certificacao_ClaudeCode.md`**: grande; exige sessão dedicada.
6. **Consolidar questões abertas em `open-questions.md`**: selecionar 10–15 mais relevantes.

### 🟢 Prioridade Baixa (quando conveniente)

7. **Promover CQRS para página de conceito própria** (`concepts/cqrs.md`).
8. **Anotar IA-14 como pendência de captura** em `open-questions.md`.

---

## Estatísticas

| Métrica | Valor |
|---|---|
| Arquivos brutos em `raw/sources/` | 49 |
| Resumos de fonte em `wiki/sources/` | 27 (26 no index) |
| Páginas de conceito | 6 |
| Páginas de entidade | 4 (3 no index) |
| Páginas de síntese | 0 |
| Páginas de manutenção | 6 (incluindo este relatório) |
| **Total de páginas ativas** | 37 |
| Contradições detectadas | **0** |
| Referências cruzadas quebradas | **0** |
| Arquivos obsoletos | **1** (transcricoes-projetoEAD) |
| Fontes brutas não ingeridas | **3** (IA-14 vazia; ModelagemDominio-48; CertificacaoClaudeCode) |

## Saúde Geral

🟡 **Atenção** — Nenhuma contradição ou referência quebrada. O problema principal é o `index.md` e o `log.md` desatualizados desde setembro/2026 (a ingestão do chat DDD+Express foi feita sem atualizar os metadados da wiki). `open-questions.md` continua vazio. Dois materiais novos aguardam ingestão.

## Próxima Verificação Recomendada

Após ingestão dos dois materiais pendentes, ou em 2027-02-04 (3 meses).
</Parameter>
</invoke>
