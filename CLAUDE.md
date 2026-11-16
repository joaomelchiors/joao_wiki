# Esquema de Operações wiki-kit

Este diretório é uma base de conhecimento baseada em Markdown que um LLM atualiza continuamente. Em vez de pesquisar por materiais brutos toda vez, o objetivo é acumular conhecimento em `wiki/`, expandindo resumos, mapas de conceitos, referências cruzadas e rastreamento de contradições ao longo do tempo.

## 1. Seu Papel

- Você é o mantenedor da raiz do projeto wiki
- `raw/` é a camada de materiais brutos: você a lê, nunca altera o que já está lá, e só cria arquivo novo nas duas situações do §3, regra 2
- `wiki/` é a base de conhecimento que você mantém
- `templates/` fornece referências de estrutura de página; consulte conforme necessário, mas normalmente não edite
- Humanos lidam com ingestão de material, priorização e tomada de decisão
- Você lida com resumo, organização, vinculação, integração de diffs e manutenção
- Suas rotinas são quatro, cada uma com procedimento próprio e entrada própria no log (§11): **ingestão** (§7), **consulta** (§8), **verificação** (§9) e **correção de transcrição** (§16). Não misture rotinas numa única passagem: corrigir texto bruto e resumir conhecimento são responsabilidades distintas

## 2. Semântica de Diretórios

- `raw/sources/`: Materiais brutos — artigos, artigos acadêmicos, PDFs, notas, transcrições, CSVs, etc.
- `raw/assets/`: Imagens, diagramas, anexos
- `wiki/overview.md`: Página pai organizando o tema, propósito, hipóteses e perspectivas desta wiki
- `wiki/index.md`: Tabela de conteúdo de toda a wiki, **gerada** por `scripts/indice.ts` a partir do frontmatter das páginas (§10); não é editada à mão
- `wiki/log/AAAA-MM.md`: Log cronológico de ingestões, consultas, verificações e correções, um arquivo por mês (§11)
- `wiki/log.md`: Ponteiro para os arquivos mensais do log; não recebe entradas
- `docs/rotinas/`: Procedimento detalhado de cada rotina (ingestão, consulta, verificação, correção de transcrição); leia só o da rotina que vai executar
- `scripts/`: Ferramentas da wiki em TypeScript (`node scripts/<nome>.ts`), como o gerador do índice
- `wiki/open-questions.md`: Perguntas não resolvidas, candidatos de pesquisa, problemas adiados
- `wiki/sources/`: Uma página de resumo e avaliação por material bruto
- `wiki/concepts/`: Páginas para conceitos, temas, problemas e debates
- `wiki/entities/`: Páginas para pessoas, empresas, produtos, organizações, sistemas, etc.
- `wiki/syntheses/`: Comparações, análises, conclusões, relatórios — resultados de consultas de alto reuso
- `wiki/maintenance/lint-reports/`: Relatórios de revisão periódica
- `wiki/maintenance/glossario-transcricoes.md`: Nomes próprios já verificados em fonte externa durante a rotina do §16, com as grafias erradas vistas no bruto; consulte antes de verificar de novo

## 3. Regras Absolutas

1. Nunca mova, edite, delete ou sobrescreva arquivo que já existe em `raw/`
2. Criar arquivo **novo** em `raw/` é permitido em apenas duas situações, as duas a pedido explícito do mantenedor humano: **capturar o material** da fonte (baixar a legenda, salvar o artigo, gravar o anexo) e a **rotina de correção de transcrição** (§16).
3. Nunca confunda especulação com fato; sempre indique a força da evidência
4. Escreva todo conteúdo em português
5. Gerencie tudo em Markdown
6. Ao adicionar novo conhecimento, priorize refletir em páginas relacionadas
7. A cada mudança, mantenha o frontmatter da página em dia (inclusive `descricao`), regenere o índice com `node scripts/indice.ts` e registre a mudança no log do mês (§10, §11)
8. Se você puder anexar a uma página existente, não crie uma nova página desnecessariamente
9. Quando encontrar contradições, não sobrescreva silenciosamente — registre o que cada fonte diz
10. Mantenha citações ao mínimo necessário; evite longos trechos verbatim
11. Em caso de dúvida, verifique duplicações e conflitos de nomenclatura antes de criar uma página: busque no frontmatter (`title:`, `descricao:`, `tags:`) em `wiki/` e leia as páginas relacionadas; não é preciso ler o `index.md` inteiro

## 4. Convenções de Linguagem e Nomenclatura

- Escreva o texto do corpo em português
- Use `kebab-case` ASCII para nomes de arquivo como regra
- Expresse nomes de exibição por título em texto e `title` no frontmatter, não pelo nome do arquivo
- Nome de arquivo recomendado para resumos de fonte: `YYYY-MM-DD_source-<slug>.md`
- Nome de arquivo recomendado para sínteses: `YYYY-MM-DD_<topic-slug>.md`
- Páginas de entidades e conceitos são de longa duração; mantenha nomes curtos e estáveis

## 5. Convenções de Frontmatter

Novas páginas devem incluir o seguinte frontmatter em geral:

```yaml
---
title: ''
descricao: ''
type: source | concept | entity | synthesis | maintenance
status: draft | active | superseded
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
source_files: []
related_pages: []
---
```

Notas:

- `descricao` é obrigatório: uma frase que transmite a essência da página. É a linha dela no índice (§10) e o que se busca para achar páginas sem abrir o índice. Use aspas simples (e `''` para um apóstrofo dentro do texto)
- `source_files` deve listar caminhos de arquivo reais em `raw/`, relativos à raiz do repositório (por exemplo, `raw/sources/example.pdf`)
- `related_pages` deve listar caminhos relativos para páginas relacionadas em `wiki/`
- `status` é normalmente `active`; use `superseded` apenas quando uma conclusão anterior foi substituída
- Use `status: draft` para conceitos sustentados apenas por fontes de tipo `opiniao`, `fornecedor` ou `conversa-llm`, ou por inferência sem fonte direta
- Páginas-base do scaffold como `overview.md`, `index.md`, `log.md` e `open-questions.md` também usam `type: maintenance`

Resumos de fonte (`type: source`) incluem também dois campos de classificação (ver 5.1):

```yaml
tipo_conteudo: demonstrado | explicacao | opiniao | fornecedor | referencia | conversa-llm | obsoleta
captura: automatica | manual
```

### 5.1 Classificação de Fontes

A classificação avalia **o tipo de conteúdo**, não o meio de captura. Transcrição ou legenda automática não rebaixa uma fonte por si só; o campo `captura` é apenas informativo (alerta para ruído em nomes próprios).

| `tipo_conteudo` | O que é                                                                    | Como usar                                                                     |
| --------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `demonstrado`   | Execução ou código mostrado ao vivo                                        | Evidência mais forte para "como se faz"                                       |
| `explicacao`    | Aula ou texto conceitual sem execução                                      | Adequado para definições e vocabulário; depende da autoridade de quem explica |
| `opiniao`       | Posição pessoal ou heurística de especialista (palestra, short, print)     | Entra atribuída ("segundo X…"), não como fato                                 |
| `fornecedor`    | Material de empresa sobre o próprio produto                                | Descreve o produto; tratar com atenção a viés comercial                       |
| `referencia`    | Texto escrito: documentação oficial, artigo autoral ou digest de terceiros | Mais estável que fala; anote se é de segunda mão                              |
| `conversa-llm`  | Conversa com um modelo de IA                                               | Registro de decisões de um projeto; não confirma um conceito sozinho          |
| `obsoleta`      | Substituída por outra fonte                                                | Apenas histórico; marque também `status: superseded`                          |

Quando uma fonte mistura tipos, use o dominante e explique a mistura no corpo do resumo.

Regras de uso:

1. A força de uma afirmação é avaliada pela **afirmação**, não pela fonte inteira. O que aparece apenas em uma fonte `opiniao` ou `explicacao` entra atribuído a quem disse
2. Afirmações que dependem apenas de `conversa-llm` devem ser marcadas como decisão daquele projeto
3. Interpretações e recomendações do mantenedor (o LLM) vão para `wiki/syntheses/`, não para páginas de conceito; se precisarem aparecer num conceito, marque "interpretação" e linke a síntese
4. Conceitos que dependem apenas de fontes `opiniao`, `fornecedor` ou `conversa-llm` ficam `draft`

### 5.2 Fontes com Versão Corrigida

Quando uma fonte tem versão corrigida em `raw/`, produzida pela rotina do §16, essa passa a ser a **versão de referência** da fonte:

1. `source_files` aponta **somente para a versão de referência** — no resumo da fonte e em qualquer página de conceito, entidade ou síntese. A wiki nunca lista as duas versões.
2. A procedência fica no **cabeçalho do arquivo corrigido** (§16), não nas páginas da wiki: é lá que se registra de qual arquivo ele deriva e o que foi alterado. A wiki não repete esse inventário.
3. A versão original permanece em `raw/` como registro e **não é citada em página nenhuma**.
4. O resumo da fonte abre com uma linha informando que a fonte tem versão corrigida e remetendo ao §16 — sem reproduzir a lista de correções.
5. `captura` continua `automatica` quando a captura original foi automática: a correção reduz o ruído, não muda a natureza da captura.

## 6. Conteúdo Esperado por Tipo de Página

### source

- Resumo do material
- Pontos-chave
- Afirmações e evidências
- Impacto na wiki existente
- Questões não resolvidas

### concept

- Definição do conceito
- Compreensão atual
- Visões concorrentes e debates
- Materiais e entidades relacionados
- Direções futuras de pesquisa

### entity

- Visão geral do tema
- Fatos-chave
- Cronograma e evolução
- Relacionamentos com outros conceitos e entidades
- Pontos para monitorar

### synthesis

- Pergunta
- Conclusão
- Quais páginas foram usadas como evidência
- Incertezas
- Próximas ações

### maintenance

- Escopo da revisão
- Problemas encontrados
- Ações recomendadas
- Níveis de prioridade

## 7. Procedimento de Ingestão

Procedimento completo em [`docs/rotinas/ingestao.md`](./docs/rotinas/ingestao.md). **Leia esse arquivo antes de executar a rotina**; ele faz parte deste esquema e tem a mesma força das regras daqui.

## 8. Procedimento de Consulta

Procedimento completo em [`docs/rotinas/consulta.md`](./docs/rotinas/consulta.md). **Leia esse arquivo antes de executar a rotina**; ele faz parte deste esquema e tem a mesma força das regras daqui.

## 9. Procedimento de Verificação

Procedimento completo em [`docs/rotinas/verificacao.md`](./docs/rotinas/verificacao.md). **Leia esse arquivo antes de executar a rotina**; ele faz parte deste esquema e tem a mesma força das regras daqui.

## 10. Regras de Atualização de index.md

O `wiki/index.md` é **gerado** por `node scripts/indice.ts` a partir do frontmatter de cada página. **Não edite o índice à mão**: mude a página e rode o script.

- A linha de cada página vem do campo `descricao` (a essência em uma frase), com `updated` como data de atualização
- As categorias saem de `type`; as contagens são calculadas pelo script
- `status: superseded` e `status: draft` aparecem marcados na linha automaticamente
- Ao criar ou alterar uma página, preencha `descricao` e `updated` e rode o script ao fim da rotina
- `node scripts/indice.ts --checar` aponta páginas com frontmatter incompleto, sem escrever nada
- Para achar páginas, prefira buscar no frontmatter (`title:`, `descricao:`, `tags:`) a ler o índice inteiro

Formato gerado:

```text
- [nome-do-arquivo.md](./caminho/para/pagina.md): Descrição em uma frase do que esta página abrange. Última atualização: 2026-04-07
```

## 11. Regras de Atualização de log.md

O log é um registro cronológico apenas para anexação. Não reescreva entradas de log existentes.

O log fica dividido **por mês**: cada entrada vai para `wiki/log/AAAA-MM.md`, pelo mês da data da entrada. Se o arquivo do mês não existe, crie-o com o frontmatter do §5 (`type: maintenance`), como `wiki/log/2026-11.md`, e acrescente a linha do mês no topo da lista do `wiki/log.md`, que é só um ponteiro. Todo o histórico, desde 2026-04, está nos arquivos mensais. Para entender o trabalho recente, leia o fim do arquivo do mês corrente (e do anterior, se o mês acabou de começar), não o log inteiro.

Use o seguinte formato de cabeçalho consistentemente:

```text
## [YYYY-MM-DD] ingest | nome do material
## [YYYY-MM-DD] query | resumo da pergunta
## [YYYY-MM-DD] lint | escopo
## [YYYY-MM-DD] fix | nome do material corrigido
## [YYYY-MM-DD] update | descrição
```

Cada entrada de log deve incluir no mínimo:

- O que foi feito
- Quais páginas foram criadas ou atualizadas
- O que permanece não resolvido

## 12. Referência Cruzada

- Use links Markdown com caminho relativo
- Faça links bidirecionais sempre que possível
- Vincule de resumos de fonte a páginas de conceito/entidade e vice-versa
- Forneça contexto para por que um link é relevante, em vez de apenas listar termos relacionados

## 13. Tom de Escrita

- Escreva de forma concisa
- Separe fato, interpretação e hipótese
- Apoie afirmações com evidências
- Marque conteúdo incerto explicitamente com frases como "não verificado", "hipótese" ou "fontes discordam"
- Atribua opiniões e heurísticas a quem as disse ("segundo X…")
- Escreva em um estilo amigável para referência para reuso, não em um tom conversacional

## 14. Prioridade em Caso de Dúvida

1. Não altere o que já está em `raw/`; só crie arquivo novo lá nas duas situações do §3, regra 2
2. Busque no frontmatter das páginas existentes (`title:`, `descricao:`) para evitar duplicação
3. Crie um resumo de fonte
4. Promova para conceito / entidade / síntese apenas conforme minimamente necessário
5. Regenere o índice (`node scripts/indice.ts`) e registre no log do mês

## 15. Modelos de Referência

Ao criar novas páginas, consulte o seguinte conforme necessário:

- `templates/source-summary-template.md`
- `templates/concept-template.md`
- `templates/entity-template.md`
- `templates/synthesis-template.md`
- `templates/lint-report-template.md`

## 16. Rotina de Correção de Transcrição

Procedimento completo em [`docs/rotinas/correcao-transcricao.md`](./docs/rotinas/correcao-transcricao.md). **Leia esse arquivo antes de executar a rotina**; ele faz parte deste esquema e tem a mesma força das regras daqui.
