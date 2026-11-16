---
title: "Verificação Completa da Wiki — Abril 2026"
descricao: 'Verificação completa da wiki — 28 páginas analisadas; 1 arquivo obsoleto detectado; 4 conceitos não promovidos identificados; open-questions.md vazio (50+ questões espalhadas).'
type: maintenance
status: active
created: 2026-04-28
updated: 2026-04-28
tags: ["lint", "verificacao", "manutencao"]
source_files: []
related_pages:
  - ../../index.md
  - ../../open-questions.md
---

# Verificação Completa da Wiki — Abril 2026

## Escopo

- **Diretórios alvo**: `wiki/` (completo — concepts, entities, sources, maintenance)
- **Temas alvo**: DDD + Arquitetura Limpa, IA Generativa, AI-Driven Development
- **Data realizada**: 2026-04-28
- **Total de arquivos analisados**: 33 arquivos .md (excluindo READMEs de scaffold)

## Principais Descobertas

### Contradições

**Nenhuma contradição significativa detectada.**

Todas as fontes estão alinhadas. O material de Matt Pocock reforça e complementa (não contradiz) as aulas da formacao.dev.

### Conteúdo Obsoleto

#### 1. Arquivo Duplicado/Supersedido (Prioridade: Alta)

**`wiki/sources/2026-04-20_transcricoes-projetoEAD.md`**

- **Problema**: Este arquivo é um resumo inicial da série de 14 transcrições da imersão DDD + Arquitetura Limpa. Ele foi **supersedido** pelo resumo mais detalhado `2026-04-20_source-imersao-ddd-arq-limpa.md`.
- **Evidência**:
  - Ambos cobrem o mesmo material (`raw/sources/2026-04-20_transcrição-projetoEAD-01` até `13`)
  - O arquivo mais recente (`source-imersao-ddd-arq-limpa.md`) tem mais detalhes e está **listado no index.md**
  - O arquivo antigo (`transcricoes-projetoEAD.md`) **não está listado no index.md** → órfão
- **Impacto**: Confusão sobre qual resumo usar; risco de informações desatualizadas
- **Ação recomendada**: Marcar como `status: superseded` e adicionar nota indicando o arquivo substituto, ou deletar completamente

#### 2. Links Quebrados no Arquivo Obsoleto (Prioridade: Média)

**`wiki/sources/2026-04-20_transcricoes-projetoEAD.md`** contém links para páginas que nunca foram criadas:

- `./concepts/domain-driven-design.md` → deveria ser `ddd.md`
- `./concepts/entidade.md` → não existe (conceito não foi promovido)
- `./concepts/caso-de-uso.md` → não existe (conceito não foi promovido)

**Ação recomendada**: Se arquivo for mantido, corrigir links; caso contrário, marcar como superseded.

### Páginas Órfãs

#### 1. Resumo de Fonte Órfão (Prioridade: Alta)

**`wiki/sources/2026-04-20_transcricoes-projetoEAD.md`**

- Não está listado em `index.md`
- Não está referenciado em nenhuma outra página
- Supersedido por `2026-04-20_source-imersao-ddd-arq-limpa.md`

#### 2. READMEs de Scaffold (Prioridade: Baixa)

Vários diretórios contêm `README.md` de scaffold:
- `wiki/README.md`
- `wiki/concepts/README.md`
- `wiki/entities/README.md`
- `wiki/sources/README.md`
- `wiki/syntheses/README.md`
- `wiki/maintenance/README.md`
- `wiki/maintenance/lint-reports/README.md`

**Observação**: Estes são provavelmente parte da estrutura inicial do projeto e não precisam ser documentados no index.md, mas vale verificar se têm conteúdo útil ou se são apenas placeholders vazios.

### Conceitos-Chave Não Promovidos

#### 1. Result/Either Pattern (Prioridade: Alta)

**Situação atual**: Conceito mencionado extensivamente em múltiplas fontes; implementação detalhada na Aula 15; aparece apenas como subseção em `concepts/objeto-de-valor.md`.

**Evidência de importância**:
- Implementação completa da classe `Result<T>` com `ok`, `fail`, `try`, `trySync`, `combine`, `combineAsync`, `throwIfFailed`
- Usado para tratamento de múltiplos erros em VOs e entidades
- Padrão central para modelagem funcional de erros em TypeScript
- Mencionado em 4+ fontes

**Ação recomendada**: Criar `concepts/result-pattern.md` ou `concepts/tratamento-de-erros.md` com:
- Definição do padrão Result/Either
- API completa (`ok`, `fail`, `try`, `combine`, etc.)
- Comparação com exceções tradicionais
- Uso em VOs, Entidades e Casos de Uso

#### 2. CQRS (Command Query Responsibility Segregation) (Prioridade: Média)

**Situação atual**: Mencionado em múltiplas fontes (imersão DDD, aula IA-06) mas não tem página própria.

**Evidência de importância**:
- Identificado como **pilar #3** do AI-Driven Development (aula IA-06)
- Separação prática: repositório (comandos) vs. queries (consultas com SQL cru)
- 1 repositório por agregado; queries separadas para leitura complexa
- Mencionado como perspectiva a explorar em `overview.md`

**Ação recomendada**: Criar `concepts/cqrs.md` ou adicionar seção dedicada em `concepts/arquitetura-limpa.md`.

#### 3. Inversão de Dependência (Dependency Inversion) (Prioridade: Média)

**Situação atual**: Conceito mencionado em múltiplas fontes; explicado na Q&A 01 (vs. Injeção); aparece como subseção em `concepts/arquitetura-limpa.md`.

**Evidência de importância**:
- Princípio D do SOLID
- Fundamental para Ports & Adapters (Arquitetura Hexagonal)
- Diferenciação clara entre Inversão (princípio) e Injeção (técnica)
- Usado para `UsuarioRepositorio`, `CriptografiaProvider`

**Ação recomendada**: Manter em `arquitetura-limpa.md` mas expandir com exemplos concretos, ou criar página própria se crescer muito.

#### 4. TDD (Test-Driven Development) (Prioridade: Média)

**Situação atual**: Muito enfatizado por Matt Pocock como essencial para AI-Driven Development; aparece apenas em `concepts/ia-generativa.md`.

**Evidência de importância**:
- Matt Pocock: "TDD é absolutamente essencial para tirar o máximo proveito dos agentes"
- Ciclo red-green-refactor
- Previne "trapaça" da IA (implementação → testes que validam o feito)
- Ciclos de feedback = teto de qualidade da IA
- Habilidade `/tdd` do Claude Code

**Observação**: TDD não é um conceito específico de IA; é um conceito de engenharia de software que se torna especialmente importante no contexto de AI-Driven Development.

**Ação recomendada**: Considerar criar `concepts/tdd.md` independente ou mover conteúdo de TDD para seção de engenharia de software em `arquitetura-limpa.md`.

#### 5. Entidade e Caso de Uso (Prioridade: Baixa)

**Situação atual**: Mencionados extensivamente nas fontes; não têm página de conceito própria.

**Evidência de importância**:
- **Entidade**: objetos com identidade única (ID); segundo melhor local para regras de negócio; modelo rico
- **Caso de Uso**: implementam regras de aplicação; maior cliente do domínio; interface `execute(input): output`
- Ambos são padrões táticos fundamentais do DDD

**Ação recomendada**: Baixa prioridade porque:
- Entidade está bem explicada em `concepts/agregado.md` (agregados são entidades raiz)
- Caso de Uso está bem documentado em `concepts/ddd.md` (seção de ferramentas táticas)
- Se houver mais material sobre esses temas, considerar páginas próprias no futuro

### open-questions.md Está Vazio

#### Problema (Prioridade: Alta)

**`wiki/open-questions.md`** está completamente vazio (apenas scaffold), mas há **50+ questões não resolvidas** espalhadas pelas páginas de conceito.

**Exemplos de questões importantes não promovidas**:

De `concepts/ia-generativa.md`:
- Como contornar limitações de contagem de caracteres?
- Prompt injection e prompt insufficiency — detalhamento
- Como escrever system prompts eficazes para aplicações customizadas?
- Sand Castle: como configurar? Documentação disponível?
- Skills: onde obter as Skills mencionadas por Matt Pocock?
- Doc rot: como preservar decisões arquiteturais sem apodrecimento?
- Limite prático de paralelização de agentes?
- Push vs. Pull: como implementar sistema de Pull na prática? MCP?

De `concepts/ddd.md`, `arquitetura-limpa.md`, etc.:
- Implementação concreta do `CriptografiaProvider` (bcrypt)
- Presenters/DTOs de resposta HTTP
- Mapeamento Entidade ↔ modelo Prisma
- Testes de integração do adaptador com banco real
- Quando instanciar modelos no UC vs. na camada de adaptadores

De `concepts/contexto-delimitado.md`:
- Como definir o mapa de contexto completo para o sistema financeiro?
- Qual estratégia de integração entre contextos `auth` e `financeiro`?

**Impacto**: Perda de rastreabilidade de questões importantes; dificuldade de priorizar pesquisa futura.

**Ação recomendada**: Consolidar questões mais importantes de todas as páginas em `open-questions.md`, organizadas por tema (DDD/Arquitetura, IA Generativa, AI-Driven Development, Implementação Prática).

## Ações Recomendadas

### Prioridade Alta

1. **Marcar arquivo obsoleto como supersedido ou deletar**:
   - `wiki/sources/2026-04-20_transcricoes-projetoEAD.md` → marcar `status: superseded` com nota indicando `2026-04-20_source-imersao-ddd-arq-limpa.md` como substituto, ou deletar completamente

2. **Promover conceito Result/Either para página própria**:
   - Criar `concepts/result-pattern.md` ou `concepts/tratamento-de-erros.md`
   - Documentar API completa, padrões de uso, comparação com exceções

3. **Consolidar questões não resolvidas em open-questions.md**:
   - Extrair 10-15 questões mais importantes de todas as páginas
   - Organizar por tema e prioridade
   - Indicar quais materiais/pesquisas poderiam responder cada questão

### Prioridade Média

4. **Promover conceito CQRS para página própria ou seção dedicada**:
   - Criar `concepts/cqrs.md` ou expandir seção em `arquitetura-limpa.md`
   - Cobrir separação comando/query, repositório vs. queries, 1 repositório por agregado

5. **Considerar promover TDD para página própria**:
   - Avaliar se faz sentido ter `concepts/tdd.md` separado ou integrar em `arquitetura-limpa.md`
   - TDD não é específico de IA, mas é essencial para AI-Driven Development

6. **Expandir seção de Inversão de Dependência**:
   - Adicionar exemplos concretos (`UsuarioRepositorio`, `CriptografiaProvider`)
   - Clarificar diferença Inversão (princípio) vs. Injeção (técnica)

### Prioridade Baixa

7. **Verificar conteúdo dos READMEs de scaffold**:
   - Confirmar se são apenas placeholders ou contêm informação útil
   - Se vazios, considerar deletar ou adicionar descrição breve do diretório

8. **Considerar páginas para Entidade e Caso de Uso**:
   - Apenas se houver mais material a adicionar no futuro
   - Por enquanto, estão bem documentados em páginas existentes

9. **Revisar tags no frontmatter**:
   - Verificar consistência de tags entre páginas relacionadas
   - Considerar adicionar tags faltantes para facilitar busca futura

## Candidatos de Pesquisa

### Material Adicional Desejável

1. **Sand Castle (Matt Pocock)**:
   - Documentação oficial da biblioteca
   - Exemplos de configuração e uso
   - Repositório no GitHub

2. **Skills para Claude Code**:
   - Repositório de Skills de Matt Pocock (Grill Me, PRD, TDD, improve architecture)
   - Documentação de como criar Skills customizadas
   - Exemplos de Skills em produção

3. **Implementação de CQRS com TypeScript**:
   - Exemplos práticos de separação comando/query
   - Bibliotecas/frameworks para CQRS em Node.js
   - Integração com Prisma

4. **Result/Either libraries para TypeScript**:
   - Comparação entre bibliotecas (neverthrow, ts-results, etc.)
   - Integração com Zod para validação
   - Performance vs. exceções tradicionais

5. **Prisma com DDD**:
   - Mapeamento de VOs para tipos Prisma
   - Aggregate roots e relações no Prisma
   - Repositories pattern com Prisma

6. **System Prompt Engineering**:
   - Melhores práticas para system prompts customizados
   - Exemplos de prompts de produção
   - Balanceamento guardrails vs. utilidade

### Temas para Aprofundamento Futuro

1. **Multi-agentes**: estruturação, limites práticos, custo/latência
2. **Doc rot**: estratégias para preservar decisões arquiteturais
3. **Push vs. Pull**: implementação de Skills consultáveis (MCP?)
4. **Frontend com IA**: protótipos descartáveis, ferramentas multimodais
5. **Revisão de código com IA**: técnicas para lidar com volume crescente

## Estatísticas da Wiki

- **Resumos de fonte**: 16 (15 no index + 1 órfão)
- **Páginas de conceito**: 6 (ddd, arquitetura-limpa, objeto-de-valor, agregado, contexto-delimitado, ia-generativa)
- **Páginas de entidade**: 2 (formacao-dev, matt-pocock)
- **Páginas de síntese**: 0
- **Páginas de manutenção**: 4 (index, log, overview, open-questions)
- **Total de páginas ativas**: 28 (excluindo READMEs e este lint report)

## Saúde Geral da Wiki

**Status**: 🟢 **Saudável** com oportunidades de melhoria

**Pontos fortes**:
- Nenhuma contradição detectada
- Boa cobertura dos temas principais (DDD, Arquitetura Limpa, IA Generativa)
- Convergência clara entre materiais de diferentes fontes (formacao.dev + Matt Pocock)
- Frontmatter consistente e bem estruturado
- Log cronológico completo e detalhado

**Áreas de atenção**:
- Arquivo obsoleto precisa ser marcado como supersedido
- Conceitos importantes não promovidos (Result, CQRS, TDD)
- `open-questions.md` vazio apesar de 50+ questões não resolvidas nas páginas
- Links quebrados no arquivo obsoleto

**Recomendação**: Executar ações de prioridade alta nas próximas 1-2 semanas; revisar prioridade média em 1 mês; verificar novamente em 3 meses ou após ingestão de 10+ novos materiais.

---

**Próxima verificação recomendada**: 2026-07-28 (3 meses) ou após ingestão de novo bloco significativo de materiais.
