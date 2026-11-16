---
title: "Segurança de Agentes: Prompt Injection, Jailbreak e Higiene de Sessão"
descricao: 'Prompt injection, jailbreak, defesas em camadas e higiene de sessão (CCDV-F).'
type: concept
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["seguranca", "prompt-injection", "jailbreak", "sessoes", "ia-generativa"]
source_files:
  - raw/sources/2026-11-04_Curso_Certificacao_ClaudeCode.md
related_pages:
  - ./ia-generativa.md
  - ./system-prompt-e-guardrails.md
  - ./agentes-de-ia.md
  - ./mcp.md
  - ./harness.md
  - ../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md
---

# Segurança de Agentes: Prompt Injection, Jailbreak e Higiene de Sessão

> Página derivada de [IA Generativa](./ia-generativa.md), dividida em 2026-11-12. O conteúdo foi movido das seções originais sem reescrita substancial; o histórico de atualizações anteriores está no hub.

> Fonte do material: curso de Andrew Brown para a certificação Claude Certified Developer Foundations (CCDV-F), 2026-11; fonte em inglês, síntese em português. Material de instrutor, parte opinião e parte fatos do exame.

## Definição

Riscos e defesas ao usar LLMs e agentes: prompt injection (direta e indireta), jailbreak e higiene de sessão. Fonte principal: curso CCDV-F (instrutor Andrew Brown; parte opinião, parte fatos do exame).

## Compreensão Atual

### Segurança: Prompt Injection e Jailbreak
- **Prompt injection**: instrução inserida para o modelo obedecer no lugar da original (direta, ou indireta via e-mail/documento/arquivo). **Jailbreak**: caso específico que tenta burlar as regras de segurança do modelo.
- Defesas em camadas: triagem por modelo leve, validação determinística de entrada, system prompt com limites e instrução de recusa, detecção/throttle/ban de reincidentes.

### Higiene de Sessão
Isolar histórico por usuário/conversa; instruções no *system prompt*; nunca permitir que o usuário gere mensagens system/assistant; remover turnos e resultados de ferramenta obsoletos; compactar; não incluir credenciais/PII; nova sessão ao mudar o escopo de autorização; expirar sessões antigas. (Sugestão do instrutor — o guia oficial não define o termo.)

## Fontes de Suporte

- [Curso de Certificação Claude Developer Foundations (CCDV-F)](../sources/2026-11-04_source-curso-certificacao-claude-developer-foundations.md)

## Conceitos Relacionados

- [system-prompt-e-guardrails](./system-prompt-e-guardrails.md)
- [agentes-de-ia](./agentes-de-ia.md)
- [mcp](./mcp.md)
- [harness](./harness.md)

## Questões Não Resolvidas

- ~~Prompt injection e prompt insufficiency — mencionados mas não detalhados.~~ → **Prompt injection parcialmente resolvida** no curso CCDV-F (definição, jailbreak, injeção direta/indireta, defesas em camadas). Prompt insufficiency segue em aberto.

## Notas de Atualização

- 2026-11-12: página criada ao dividir [ia-generativa.md](./ia-generativa.md) em conceitos menores.
