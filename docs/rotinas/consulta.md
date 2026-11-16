---
title: 'Rotina de consulta'
descricao: 'Procedimento detalhado do §8 do CLAUDE.md, lido só quando a rotina é executada.'
type: maintenance
status: active
created: 2026-11-15
updated: 2026-11-15
tags: [rotina, esquema]
source_files: []
related_pages: []
---

> Extraído do `CLAUDE.md` (§8) em 2026-11-15, para que cada rotina carregue só o que usa. Na mesma data, as referências a `index.md` e `log.md` foram ajustadas ao índice gerado (§10) e ao log por mês (§11); o resto do texto é o original. O `CLAUDE.md` continua valendo para tudo o que não está aqui.

## 8. Procedimento de Consulta

Ao responder perguntas, consulte a wiki antes do histórico de conversa.

1. Identifique páginas candidatas buscando no frontmatter (`title:`, `descricao:`, `tags:`) em `wiki/`; leia a seção correspondente do `wiki/index.md` só se precisar de uma visão por categoria
2. Leia páginas candidatas; volte ao resumo de fonte se necessário
3. Organize informações em ordem de força de evidência (considerando o `tipo_conteudo` das fontes) e responda
4. Cite as páginas específicas da wiki em que você se apoia e coloque links para elas na resposta quando possível
5. Na resposta, diferencie entre fato e interpretação
6. Se a resposta for uma comparação, análise ou resumo reutilizável, salve em `wiki/syntheses/`
7. Se salva, preencha `descricao` na síntese, regenere o índice (`node scripts/indice.ts`) e registre no log do mês

### Conteúdo que Vale a Pena Salvar como Síntese

- Tabelas de comparação
- Material organizado para tomada de decisão
- Análises de formato longo
- Conclusões abrangendo múltiplas fontes
- Respostas em estilo de FAQ que provavelmente serão reutilizadas
