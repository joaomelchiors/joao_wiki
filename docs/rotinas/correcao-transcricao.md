---
title: 'Rotina de correção de transcrição'
descricao: 'Procedimento detalhado do §16 do CLAUDE.md, lido só quando a rotina é executada.'
type: maintenance
status: active
created: 2026-11-15
updated: 2026-11-15
tags: [rotina, esquema]
source_files: []
related_pages: []
---

> Extraído do `CLAUDE.md` (§16) em 2026-11-15, para que cada rotina carregue só o que usa. Na mesma data, as referências a `index.md` e `log.md` foram ajustadas ao índice gerado (§10) e ao log por mês (§11); o resto do texto é o original. O `CLAUDE.md` continua valendo para tudo o que não está aqui.

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
6. Anexe ao log do mês (`wiki/log/AAAA-MM.md`) uma entrada `fix` (§11) com o volume de alterações, os nomes verificados e o que ficou sem solução.
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
