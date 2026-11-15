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
- `wiki/index.md`: Tabela de conteúdo de toda a wiki; um índice baseado em conteúdo
- `wiki/log.md`: Log cronológico de ingestões, consultas e verificações
- `wiki/open-questions.md`: Perguntas não resolvidas, candidatos de pesquisa, problemas adiados
- `wiki/sources/`: Uma página de resumo e avaliação por material bruto
- `wiki/concepts/`: Páginas para conceitos, temas, problemas e debates
- `wiki/entities/`: Páginas para pessoas, empresas, produtos, organizações, sistemas, etc.
- `wiki/syntheses/`: Comparações, análises, conclusões, relatórios — resultados de consultas de alto reuso
- `wiki/maintenance/lint-reports/`: Relatórios de revisão periódica

## 3. Regras Absolutas

1. Nunca mova, edite, delete ou sobrescreva arquivo que já existe em `raw/`
2. Criar arquivo **novo** em `raw/` é permitido em apenas duas situações, as duas a pedido explícito do mantenedor humano: **capturar o material** da fonte (baixar a legenda, salvar o artigo, gravar o anexo) e a **rotina de correção de transcrição** (§16).
3. Nunca confunda especulação com fato; sempre indique a força da evidência
4. Escreva todo conteúdo em português
5. Gerencie tudo em Markdown
6. Ao adicionar novo conhecimento, priorize refletir em páginas relacionadas
7. Atualize `wiki/index.md` e `wiki/log.md` a cada mudança
8. Se você puder anexar a uma página existente, não crie uma nova página desnecessariamente
9. Quando encontrar contradições, não sobrescreva silenciosamente — registre o que cada fonte diz
10. Mantenha citações ao mínimo necessário; evite longos trechos verbatim
11. Em caso de dúvida, leia `index.md` e páginas relacionadas primeiro para verificar duplicações e conflitos de nomenclatura

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

Ao processar novo material, sempre siga esta sequência:

1. Leia `wiki/index.md` e `wiki/log.md` para entender o trabalho recente
2. Leia o material alvo de `raw/sources/` — se a fonte tiver versão corrigida, leia **essa** e não a original (§5.2). Se o material for uma captura automática ruidosa e ainda não houver versão corrigida, proponha a rotina do §16 ao mantenedor antes de ingerir; não corrija por conta própria no meio da ingestão
3. Crie uma página de resumo em `wiki/sources/` usando `templates/source-summary-template.md` como guia, preenchendo `tipo_conteudo` e `captura` (ver 5.1)
4. Verifique se `concepts/`, `entities/` existentes ou `overview.md` precisam de atualizações
5. Se surgirem contradições significativas ou novos problemas, reflita em `open-questions.md`
6. Adicione a nova página a `wiki/index.md` com um resumo e data de atualização
7. Anexe uma entrada de log de ingestão a `wiki/log.md`

### Critérios de Decisão Durante Ingestão

- Se reforçar um conceito existente, anexe à página de conceito
- Se um novo nome próprio aparecer e provavelmente for recorrente, crie uma página de entidade
- Se o tópico for importante mas ainda aproximado, crie uma página de conceito e deixe partes incertas marcadas
- Se for uma nota única, apenas um resumo de fonte pode ser suficiente

## 8. Procedimento de Consulta

Ao responder perguntas, consulte a wiki antes do histórico de conversa.

1. Leia `wiki/index.md` primeiro para identificar páginas candidatas
2. Leia páginas candidatas; volte ao resumo de fonte se necessário
3. Organize informações em ordem de força de evidência (considerando o `tipo_conteudo` das fontes) e responda
4. Cite as páginas específicas da wiki em que você se apoia e coloque links para elas na resposta quando possível
5. Na resposta, diferencie entre fato e interpretação
6. Se a resposta for uma comparação, análise ou resumo reutilizável, salve em `wiki/syntheses/`
7. Se salva, atualize `index.md` e `log.md`

### Conteúdo que Vale a Pena Salvar como Síntese

- Tabelas de comparação
- Material organizado para tomada de decisão
- Análises de formato longo
- Conclusões abrangendo múltiplas fontes
- Respostas em estilo de FAQ que provavelmente serão reutilizadas

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

Salve resultados de verificação em `wiki/maintenance/lint-reports/` e reflita em `open-questions.md` e `index.md` conforme necessário.

## 10. Regras de Atualização de index.md

- Cada entrada de página deve transmitir a essência em uma linha única
- Organize por categoria
- Sempre adicione uma entrada ao criar uma nova página
- Quando o status de uma página se torna `superseded`, observe isso explicitamente
- Inclua a data de atualização quando possível

Formato recomendado:

```text
- [título-da-página](./caminho/para/pagina.md): Descrição em uma frase do que esta página abrange. Última atualização: 2026-04-07
```

## 11. Regras de Atualização de log.md

O log é um registro cronológico apenas para anexação. Não reescreva entradas de log existentes.

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
2. Verifique `index.md` e páginas existentes para evitar duplicação
3. Crie um resumo de fonte
4. Promova para conceito / entidade / síntese apenas conforme minimamente necessário
5. Atualize `index.md` e `log.md`

## 15. Modelos de Referência

Ao criar novas páginas, consulte o seguinte conforme necessário:

- `templates/source-summary-template.md`
- `templates/concept-template.md`
- `templates/entity-template.md`
- `templates/synthesis-template.md`
- `templates/lint-report-template.md`

## 16. Rotina de Correção de Transcrição

Rotina independente, no mesmo nível de ingestão (§7), consulta (§8) e verificação (§9). Existe porque corrigir o texto de uma captura automática **produz material, não conhecimento**: é responsabilidade distinta de resumir e organizar. Por isso nunca acontece dentro de uma ingestão — primeiro corrige, depois ingere, cada etapa com sua entrada no log.

É a única rotina que deriva um arquivo novo em `raw/` a partir de outro que já está lá (§3, regra 2).

**Quando executar**: apenas a pedido explícito do mantenedor humano. Se durante outra rotina o ruído de uma transcrição atrapalhar, **proponha** a correção e registre a pendência; não corrija por iniciativa própria.

### Procedimento

1. Leia o arquivo bruto **inteiro**, em blocos, sem amostragem. O objetivo é localizar erro, e erro não aparece em resumo.
2. Monte a lista de correções candidatas: trecho como está, correção proposta, razão.
3. Para todo nome próprio cuja troca mude o sentido técnico, **verifique em fonte externa** (documentação, repositório, página oficial). Sem verificação, não corrija.
4. Aplique as correções de forma **auditável**: lista explícita de substituições aplicada por script, não reescrita manual do texto. Confira que nenhuma regra ficou sem casar (indica padrão errado) e que não sobrou resíduo da grafia antiga.
5. Grave o arquivo corrigido em `raw/sources/` com o cabeçalho obrigatório abaixo. Não toque no arquivo de origem; confirme ao final que ele está intacto.
6. Anexe ao `wiki/log.md` uma entrada `fix` (§11) com o volume de alterações, os nomes verificados e o que ficou sem solução.
7. A ingestão, se for o caso, é passo separado e posterior, e usa só a versão corrigida (§5.2).

### Nomenclatura

Mantenha o nome do arquivo de origem e troque apenas o marcador de captura por `corrigida`, para que as duas versões fiquem lado a lado na listagem:

```text
2026-04-17_<slug>_en-orig_<id>.md        → origem, intocada
2026-04-17_<slug>_en-corrigida_<id>.md   → versão de referência
```

### Atributos obrigatórios do arquivo corrigido

Além dos campos que o arquivo de origem já traz (título, canal/autor, link, data, duração), o cabeçalho **deve** conter:

| Atributo                  | Conteúdo                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `Origem`                  | caminho do arquivo de origem relativo à raiz do repositório, com a nota de que permanece intacto   |
| `Legenda`                 | idioma e natureza da captura original (automática ou revisada), preservados da origem              |
| `Correção`                | data, quem corrigiu (LLM ou humano) e volume (número de substituições e de regras)                 |
| `Natureza das alterações` | em uma linha, o que foi corrigido — com a declaração explícita de que o conteúdo não foi reescrito |
| `Verificados`             | nomes próprios confirmados em fonte externa, com a fonte                                           |
| `Não resolvido`           | passagens que continuam ilegíveis ou ambíguas, citadas literalmente como aparecem                  |
| `Prováveis`               | correções aplicadas por contexto, sem confirmação, para que quem citar saiba que são frágeis       |

Os dois últimos campos não são opcionais: se nada ficou sem solução, escreva "nenhuma". Omitir equivale a afirmar que o arquivo está inteiramente confiável.

### O que pode e o que não pode mudar

**Pode**: erro de reconhecimento de fala; grafia de nome próprio (verificada); termo técnico trocado por homófono; pontuação e caixa quando o erro de reconhecimento as quebrou.

**Não pode**: reescrever frase para ficar mais clara; remover hesitação, repetição ou interjeição (são evidência de como a pessoa falou); resumir, cortar ou reordenar; traduzir; completar o que o falante não disse; "consertar" afirmação que você julga errada — divergência de conteúdo é nota na página da fonte, nunca alteração no bruto.

O teste é simples: a contagem de palavras do corpo deve ficar praticamente igual à da origem. Diferença grande significa que você reescreveu, não corrigiu.
