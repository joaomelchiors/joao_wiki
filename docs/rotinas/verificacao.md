---
title: 'Rotina de verificação'
descricao: 'Procedimento detalhado do §9 do CLAUDE.md, lido só quando a rotina é executada.'
type: maintenance
status: active
created: 2026-11-15
updated: 2026-11-15
tags: [rotina, esquema]
source_files: []
related_pages: []
---

> Extraído do `CLAUDE.md` (§9) em 2026-11-15, para que cada rotina carregue só o que usa. Na mesma data, as referências a `index.md` e `log.md` foram ajustadas ao índice gerado (§10) e ao log por mês (§11); o resto do texto é o original. O `CLAUDE.md` continua valendo para tudo o que não está aqui.

## 9. Procedimento de Verificação

Durante revisões periódicas, sempre verifique o seguinte:

- Há afirmações contraditórias persistindo em múltiplas páginas?
- Novos materiais tornaram obsoletas conclusões anteriores?
- Estão se acumulando páginas órfãs?
- Conceitos importantes estão espalhados em resumos de fonte em vez de promovidos para páginas de conceito?
- Há problemas significativos ainda não promovidos para páginas de entidade, conceito ou síntese?
- Questões estão se acumulando sem serem abordadas em `open-questions.md`?
- Todo resumo de fonte tem `tipo_conteudo` e `captura` preenchidos?
- Alguma página lista em `source_files` a versão original de uma fonte que já tem versão corrigida (§5.2)?
- Algum arquivo em `raw/` apareceu fora das duas situações permitidas (§3, regra 2)?
- Todo arquivo corrigido em `raw/` tem o cabeçalho completo do §16, inclusive "Não resolvido" e "Prováveis"?
- Há conceitos `active` sustentados apenas por fontes `opiniao`, `fornecedor` ou `conversa-llm`?
- Há afirmações de fonte única apresentadas como fato, sem atribuição?
- Há interpretações do mantenedor dentro de conceitos que deveriam estar em `wiki/syntheses/`?

Salve resultados de verificação em `wiki/maintenance/lint-reports/` e reflita em `open-questions.md` conforme necessário; rode `node scripts/indice.ts --checar` para achar páginas com frontmatter incompleto e regenere o índice ao final.
