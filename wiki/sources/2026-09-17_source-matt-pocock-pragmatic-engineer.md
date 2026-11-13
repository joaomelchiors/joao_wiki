---
title: "Matt Pocock no The Pragmatic Engineer — AI Skills (entrevista)"
type: source
status: active
created: 2026-11-12
updated: 2026-11-12
tags: ["matt-pocock", "entrevista", "skills", "grill-me", "wayfinder", "leading-words", "ddd", "tdd", "fundamentos", "ai-coding"]
source_files:
  - raw/sources/2026-09-17_ai-skills-with-matt-pocock_en-revisada_4DhcSPkEbwI.md
related_pages:
  - ../entities/matt-pocock.md
  - ../concepts/ai-driven-development.md
  - ../concepts/tdd.md
  - ../concepts/engenharia-de-contexto.md
  - ../concepts/spec-driven-development.md
  - ../concepts/ddd.md
  - ../concepts/rules-e-skills.md
  - ./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md
  - ./2026-07-16_source-matt-pocock-shorts.md
  - ./2026-11-12_source-matt-pocock-home-repo.md
tipo_conteudo: opiniao
captura: automatica
---

# Matt Pocock no The Pragmatic Engineer — AI Skills (entrevista)

## Resumo

Entrevista de 1h36 (publicada em 2026-09-17, em inglês) de Gergely Orosz com Matt Pocock no podcast *The Pragmatic Engineer*. Matt conta a trajetória (professor de canto, desenvolvedor, XState, Vercel, Total TypeScript) e explica como chegou às suas Skills (Grill Me, Wayfinder, spec → tickets, TDD, grill with docs) ao testar fundamentos clássicos de engenharia de software com agentes. A segunda metade trata de estratégia vs. tática, SDD, TDD, dívida técnica, agentes na nuvem e conselhos para juniores.

**Classificação**: `opiniao`, porque é conversa com posições e heurísticas pessoais, sem execução ao vivo. Há trechos de relato factual do próprio entrevistado (carreira, receita, estrelas no GitHub) que não foram verificados. A legenda é automática, mas foi **revisada manualmente** em duas passagens no arquivo `-revisada` (nomes próprios e termos técnicos); restam poucos trechos duvidosos listados no cabeçalho do arquivo. Há também trechos de patrocinadores (Linear, WorkOS, Turbopuffer) que não fazem parte do conteúdo técnico.

## Pontos-Chave

- **Conhecimento × sabedoria**: Matt separa a sintaxe/conhecimento (o "quê", hoje barato de obter) da sabedoria (o "porquê"), que a IA não torna mais fácil de aprender. A receita dos cursos de TypeScript caiu; ele migrou para a camada estratégica.
- **Tático × estratégico** (distinção que ele atribui a John Ousterhout): a IA "comeu" a programação tática; cabe ao humano a estratégica. O ciclo de feedback da programação estratégica é longo (meses); a IA acelera, e os erros estratégicos voltam mais rápido.
- **Smart zone**: cerca de **150 mil tokens** em modelos de fronteira, independentemente do tamanho da janela (ideia que ele credita a Dex Horthy). O resto da janela degrada aos poucos. Trabalho maior que isso deve ser fatiado em várias sessões.
- **Do Ralph loop às Skills**: loops de "menor mudança possível rumo ao objetivo, depois limpar o contexto" (Ralph, de Geoffrey Huntley) levaram à ideia de dois documentos: **destino** (spec/PRD) e **tickets**, um por sessão. Skills viraram o mecanismo de distribuição.
- **Grill Me**: skill pequena em que o agente entrevista o usuário sem parar; Matt diz ter pegado a ideia de Thariq (equipe do Claude Code). Efeito: força decisões do humano, alinha valores e escopo ("o agente não lê a sua mente").
- **Wayfinder**: para trabalho grande demais para uma sessão de grilling. Um **mapa** central com tickets de vários tipos (grilling, protótipo, pesquisa, tarefa arbitrária) e uma "névoa de guerra" que vai se abrindo; descrito por ele como grafo dirigido. Ele usa também fora de código (planejar curso, construir um escritório no jardim).
- **Leading words** (palavras-guia): termos de livros clássicos (*tracer bullet*, vertical slice, deep modules, *don't outrun your headlights*) que, repetidos no prompt, o modelo devolve e usa no raciocínio. Matt minerou *The Pragmatic Programmer*, *A Philosophy of Software Design* e *Domain-Driven Design* atrás dessas palavras.
- **DDD e linguagem ubíqua**: skill "grill with docs" (nome que ele mesmo critica) constrói uma linguagem de domínio durante o planejamento. Exemplo dele: "materialization cascade" (lição fantasma → seção e curso fantasmas viram reais). Benefício declarado: descrever mudanças com muito menos palavras e navegar o código por `grep`.
- **Otimizar para o "Memento"**: o agente começa do zero a cada sessão; por isso a base de código precisa ser a mais saudável possível. Ele relaciona com entropia de software (*Pragmatic Programmer*).
- **Quando usar o quê**: se dá para alinhar depois (correção pequena), não use Grill Me; se cabe numa sessão, Grill Me; se cobre várias sessões, Wayfinder. "Desloque para a direita o máximo possível."
- **Waterfall**: protótipos baratos feitos pela IA antes da spec; Matt aceita o rótulo de "cautionary tale" e prefere o fluxo ágil, dado o baixo custo de mudar.
- **TDD**: ele reconhece que TDD otimiza uma memória de trabalho pequena (humana), que agentes não têm. O que vale para agentes é o **feedback loop** e a prova do funcionamento ("dê-me evidência de TDD"). Alerta para testes tautológicos escritos por agentes.
- **Dívida técnica**: agentes produzem rubbish até em bases pequenas; ele usa agente de implementação mais agente de revisão automática, e reconhece que a revisão também precisa de vigilância.
- **Agentes na nuvem**: Matt está saindo do setup local (agente em máquina remota acessível por Discord/Slack, rotina diária agendada, depuração local só do bot). Cita, como relato, que empresas com times de plataforma veem adoção maior dos agentes em nuvem, exceto front-end.
- **Observabilidade e processo em organizações**: medir sucesso e falha de cada agente, conjunto comum de skills, testes A/B de processos; ele cita um loop diário que roda a skill "improve codebase architecture" e propõe melhorias.
- **Conselhos**: para juniores, usar agentes ao máximo e ser curioso e introspectivo; para engenheiros, o atributo que ele mais valoriza é a **introspecção** (colocar o próprio processo em palavras para a IA).
- **Livros recomendados**: *The Pragmatic Programmer*, *A Philosophy of Software Design* (Ousterhout) e os três primeiros capítulos de *Domain-Driven Design* (Evans).

## Afirmações/Observações Principais

- "Grill Me" é a skill mais popular dele; a história de uso do entrevistador (35 perguntas num endpoint de API) é relato anedótico.
- Números ditos por Matt, **não verificados**: skills repo com ~230 mil estrelas (segundo mais estrelado do tipo), palestra "Software Fundamentals Still Matter" com ~1,2 milhão de visualizações; Total TypeScript passou de sete dígitos de receita.
- Posição mantida: spec como destino é útil, mas ele relata resultado pior que codar à mão quando só edita a spec e regenera o código. Ver tensão com a aula de SDD em [SDD](../concepts/spec-driven-development.md).
- Opinião sobre TDD **mudou de tom** em relação à palestra de abril/2026 (onde TDD era essencial): agora "mixed relationship", mantém por confiança e prova de feedback. Ver [TDD](../concepts/tdd.md).

## Notas de Evidência

- Seções da transcrição: 0–10% (carreira), 25% (IA, Ralph, origem das Skills, Grill Me), 50% (fundamentos, leading words, DDD, estratégia), 75% (planejamento, waterfall, TDD, dívida técnica), 90% (ensino, conselhos, jardinagem, livros).
- Fonte única de um autor; as posições valem como "segundo Matt Pocock". Trechos de patrocinadores foram ignorados.

## Impacto na Wiki Existente

- [AI-Driven Development](../concepts/ai-driven-development.md): ganhou seção "Posições da entrevista" (Wayfinder, spec/tickets, leading words, quando usar Grill Me). Continua `draft`: ainda é um único autor, agora em três tipos de fonte.
- [TDD](../concepts/tdd.md): nova seção com a posição matizada da entrevista.
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md): confirma o limite de ~150 mil tokens e a origem (Dex Horthy).
- [Matt Pocock](../entities/matt-pocock.md): cronologia, skills e posições atualizadas.
- Convergência com [DDD](../concepts/ddd.md): linguagem ubíqua usada como instrumento de comunicação com agentes (uso de Matt, não definição do conceito).

## Questões Não Resolvidas

- Onde estão publicadas as skills Wayfinder e "grill with docs" (o repositório é citado, mas o endereço não aparece na entrevista).
- Trechos duvidosos da legenda: "Sandals", "Lauren" (autora do post sobre jardineiros), "Peter break", "Opus 5".
- Estatísticas sobre adoção de agentes na nuvem (70–80%) vêm de relato de empresas, sem fonte citada.
- Não há comparação em dados entre Grill Me e planejamento sem entrevista.

## Páginas Relacionadas

- [Matt Pocock](../entities/matt-pocock.md)
- [AI-Driven Development](../concepts/ai-driven-development.md)
- [TDD](../concepts/tdd.md)
- [Engenharia de Contexto](../concepts/engenharia-de-contexto.md)
- [Palestra Essential Skills (abril/2026)](./2026-04-28_source-matt-pocock-essential-skills-ai-coding.md)
- [Quatro shorts](./2026-07-16_source-matt-pocock-shorts.md)
- [Home Repo](./2026-11-12_source-matt-pocock-home-repo.md)
