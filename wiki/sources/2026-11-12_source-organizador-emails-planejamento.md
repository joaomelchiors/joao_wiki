---
title: "Organizador de E-mails — Planejamento da solução (fluxo em 6 fases)"
type: source
status: active
created: 2026-11-15
updated: 2026-11-15
tags: ["formacao-dev", "agentes", "fluxo", "skills", "mcp", "gmail", "hitl", "organizador-emails"]
source_files:
  - raw/sources/2026-11-12_transcricao-formacaoDEV-planejamento-organizando-email.md
related_pages:
  - ../entities/formacao-dev.md
  - ../concepts/agentes-de-ia.md
  - ../concepts/skills-na-pratica.md
  - ../concepts/mcp.md
  - ../concepts/spec-driven-development.md
  - ./2026-11-12_source-organizador-emails-sequencial-paralelo.md
tipo_conteudo: explicacao
captura: automatica
---

# Organizador de E-mails — Planejamento da solução (fluxo em 6 fases)

## Resumo

Aula de 25 min do projeto **Organizador de E-mails** (curso Profissional AI, formacao.dev; instrutor Leo), posterior à aula de estratégias sequencial/paralela. O instrutor desenha (em ferramenta de diagrama, sem código) a solução completa: um **fluxo** de organização do Gmail em **6 fases**, com camadas Fluxo → Skill → MCP, processamento por grupos de 50 threads e um único agente ("Full Agent") executando tudo, paralelizável em várias instâncias. Legenda automática em pt, **revisada em 2026-11-13**.

## Pontos-Chave

- **"Fluxo"** = arquivo no diretório de fluxos (ex.: `organizacao-gmail.md`) que centraliza objetivos, instruções, lista de tarefas (checkboxes ou passos numerados), chamadas a Skills e acessos a MCPs — o ponto central de organização do processo. Estruturalmente é o mesmo padrão da spec em [spec-driven-development](../concepts/spec-driven-development.md).
- **As 6 fases**:
  1. **Coleta** — metadados via MCP do Gmail (assunto, remetente, destinatários…); persistir em arquivos (TXT/JSON/CSV; dados "ativos" × "arquivados") para não repetir trabalho.
  2. **Classificação** — por Skills: remetente (importância de quem envia), relevância (nota 0–10 pelo contexto, não só assunto) e **risco** (fraude: domínio desconhecido, remetente suspeito). Resultados gravados como novas colunas **no mesmo CSV** da coleta; a classificação já registra a **ação planejada** por mensagem (ex.: `ARQUIVAR_E_MARCAR_COMO_LIDO`, aplicar rótulo, encaminhar para revisão humana).
  3. **Revisão** — agente confere o trabalho (coleta adequada? classificações consistentes?); "um agente revisar o trabalho de outro" citado como útil em fluxos complexos.
  4. **Confirmação do usuário** (opcional) — ponto de controle *human-in-the-loop* antes de ações com consequência (arquivar, marcar como lido): o agente resume o que pretende fazer e espera aprovação.
  5. **Execução** — só executa as ações já planejadas e registradas na fase 2; não decide de novo.
  6. **Relatório final** — totais processados/arquivados/marcados, mensagens importantes, riscos.
- **Camadas Fluxo → Skill → MCP**: em vez de o fluxo chamar o MCP do Gmail diretamente, uma **Skill intermediária** concentra as regras (quais colunas, formato, pasta, nomenclatura) e é reutilizável por outros fluxos. "O fluxo define o que precisa ser feito, a Skill organiza como, o MCP dá o acesso."
- **Coleta fragmentada em grupos de 50**: um arquivo por grupo (limite por chamada do MCP) prepara a arquitetura para paralelismo — cada agente classifica exclusivamente o seu arquivo, sem conflito (liga com a aula anterior).
- **Thread ≠ mensagem**: 50 threads (conversas) podem conter muito mais mensagens individuais.
- **Organização dos agentes**: começar com **um único agente (Full Agent)** executando as 6 fases por grupo de 50 threads; paralelizar depois rodando ~5 instâncias do mesmo fluxo sobre grupos distintos. Grupos de 50 mantêm os testes rápidos (3–4 min por execução).
- **Adaptabilidade**: a confirmação poderia virar fluxo separado; o lote poderia ser 500; "a solução de um problema pode assumir diferentes formas — você é quem conduz o projeto". Construir, testar, corrigir e refinar iterativamente; valor dos agentes está em resolver problemas específicos que soluções genéricas de mercado não atendem.

## Afirmações/Observações Principais

- A fase 2 separar **decisão** (ação planejada, registrada em arquivo) da fase 5 **execução** é o ponto arquitetural mais claro da aula: a execução vira determinística/burra, e a revisão + confirmação humana acontecem entre decisão e efeito.
- O desenho inteiro é planejamento em diagrama; nenhuma execução é demonstrada (por isso `explicacao`, não `demonstrado`). A implementação fica para o capítulo seguinte do curso.

## Impacto na Wiki Existente

- [agentes-de-ia.md](../concepts/agentes-de-ia.md): o fluxo em 6 fases entra como exemplo de arquitetura de fluxo com HITL e revisão entre agentes.
- [spec-driven-development.md](../concepts/spec-driven-development.md): o "arquivo de fluxo" com checkboxes chamando Skills é o mesmo padrão de spec; registrado como aplicação.
- Reforça [skills-na-pratica](../concepts/skills-na-pratica.md) (Skill como camada de regras reutilizável) e [mcp](../concepts/mcp.md) (MCP como acesso; tabela Skill × MCP).

## Questões Não Resolvidas

- Formato final escolhido (TXT/JSON/CSV) e nomenclatura dos arquivos ficam para as aulas de implementação.
- Como a confirmação do usuário será implementada tecnicamente (bloqueio do fluxo? fluxo separado?).
- Se a revisão (fase 3) será feita pelo mesmo agente ou por um agente distinto — o instrutor deixa em aberto para testes.

## Páginas Relacionadas

- [Estratégias de execução: sequencial e paralelo (aula anterior)](./2026-11-12_source-organizador-emails-sequencial-paralelo.md)
- [formacao.dev](../entities/formacao-dev.md)
- [Agentes de IA](../concepts/agentes-de-ia.md)
- [Skills na prática](../concepts/skills-na-pratica.md)
- [MCP](../concepts/mcp.md)
- [Spec-Driven Development](../concepts/spec-driven-development.md)
