---
title: 'Rotina de ingestão'
descricao: 'Procedimento detalhado do §7 do CLAUDE.md, lido só quando a rotina é executada.'
type: maintenance
status: active
created: 2026-11-15
updated: 2026-11-15
tags: [rotina, esquema]
source_files: []
related_pages: []
---

> Extraído do `CLAUDE.md` (§7) em 2026-11-15, para que cada rotina carregue só o que usa. Na mesma data, as referências a `index.md` e `log.md` foram ajustadas ao índice gerado (§10) e ao log por mês (§11); o resto do texto é o original. O `CLAUDE.md` continua valendo para tudo o que não está aqui.

## 7. Procedimento de Ingestão

Ao processar novo material, sempre siga esta sequência:

1. Entenda o trabalho recente lendo o fim do log do mês (`wiki/log/AAAA-MM.md`, §11) e verifique o que já existe buscando no frontmatter das páginas (`title:`, `descricao:`); não é preciso ler o `index.md` nem o log inteiros
2. Leia o material alvo de `raw/sources/` — se a fonte tiver versão corrigida, leia **essa** e não a original (§5.2). Se o material for uma captura automática ruidosa e ainda não houver versão corrigida, proponha a rotina do §16 ao mantenedor antes de ingerir; não corrija por conta própria no meio da ingestão
3. Crie uma página de resumo em `wiki/sources/` usando `templates/source-summary-template.md` como guia, preenchendo `tipo_conteudo` e `captura` (ver 5.1)
4. Verifique se `concepts/`, `entities/` existentes ou `overview.md` precisam de atualizações
5. Se surgirem contradições significativas ou novos problemas, reflita em `open-questions.md`
6. Preencha `descricao` e `updated` nas páginas criadas ou alteradas e regenere o índice com `node scripts/indice.ts` (§10)
7. Anexe uma entrada de log de ingestão ao log do mês (`wiki/log/AAAA-MM.md`, §11)

### Critérios de Decisão Durante Ingestão

- Se reforçar um conceito existente, anexe à página de conceito
- Se um novo nome próprio aparecer e provavelmente for recorrente, crie uma página de entidade
- Se o tópico for importante mas ainda aproximado, crie uma página de conceito e deixe partes incertas marcadas
- Se for uma nota única, apenas um resumo de fonte pode ser suficiente
