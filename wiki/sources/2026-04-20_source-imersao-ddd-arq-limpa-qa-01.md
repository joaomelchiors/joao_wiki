---
title: "Imersão DDD + Arquitetura Limpa — Sessão Q&A 01"
descricao: 'Resumo da sessão Q&A 01 — cobre regras de unicidade, Serviço de Domínio, Inversão vs. Injeção de Dependência, VOs vs. Zod e validação no front-end.'
type: source
status: active
created: 2026-04-20
updated: 2026-11-12
tags: ["ddd", "arquitetura-limpa", "inversão-de-dependência", "serviço-de-domínio", "caso-de-uso", "objeto-de-valor", "typescript", "qa"]
source_files:
  - raw/sources/2026-04-20_transcrição-projetoEAD-14-perguntas&respostas-01.md
related_pages:
  - ../sources/2026-04-20_source-imersao-ddd-arq-limpa.md
  - ../concepts/ddd.md
  - ../concepts/arquitetura-limpa.md
  - ../concepts/objeto-de-valor.md
  - ../entities/formacao-dev.md
tipo_conteudo: explicacao
captura: automatica
---

# Imersão DDD + Arquitetura Limpa — Sessão Q&A 01

**Classificação** (`tipo_conteudo: explicacao`, `captura: automatica`): sessão de perguntas e respostas: o instrutor responde e argumenta, sem implementar código na sessão.

## Resumo

Sessão de perguntas e respostas ao vivo da imersão "Arquiteto Dev: DDD + Arquitetura Limpa" (formacao.dev), conduzida pelo instrutor Leonardo. Cobre seis tópicos respondidos a alunos: onde colocar regras de unicidade, validação composta em VOs, uso de VOs em substituição ao Zod, quem chama o Serviço de Domínio, diferença entre inversão e injeção de dependência, e se Serviços de Domínio podem acessar repositórios. Material complementar direto à série de 14 transcrições já ingerida.

## Pontos-Chave

- **Regra de unicidade (nome duplicado)**: não cabe em VO nem em Entidade; vai no Serviço de Domínio, que pode receber uma interface de repositório para verificar.
- **Validator fluente (Fluent API)**: é possível criar um `Validator` reutilizável com métodos encadeados (`notNull`, `minLength`, `maxLength`...) para uso dentro de VOs.
- **VOs como substituto ao Zod no front-end**: instanciar o objeto rico diretamente no formulário (antes de chamar a API) valida os dados sem duplicar regras — o módulo compartilhado garante a mesma lógica em ambos os lados.
- **Quem chama o Serviço de Domínio**: o Caso de Uso — ele é o coordenador do fluxo e o único com acesso às interfaces de infraestrutura.
- **Diferença UseCase × Serviço de Domínio/Aplicação**: UseCase orquestra fluxo (regras + infraestrutura); Serviço de Domínio implementa uma regra que não cabe em VO nem Entidade, geralmente sem acesso direto ao banco.
- **Inversão ≠ Injeção de Dependência**: injeção é passar a dependência de fora; inversão é mudar a direção da dependência via interface — o princípio D do SOLID, coração da Arquitetura Limpa.
- **Seta de dependência da Arquitetura Limpa**: sempre de fora para dentro. Infraestrutura → Adaptadores → Casos de Uso → Domínio. O Domínio não depende de ninguém.
- **Serviço de Domínio e repositório**: normalmente não acessa; quando acessa, é via interface (não implementação concreta). Útil para regras reutilizadas por múltiplos casos de uso, evitando que um caso de uso chame outro diretamente.
- **Front-end com regras de negócio**: o front-end é uma aplicação rica com processamento e regras próprias; a distinção correta não é front vs. back, mas **regras vs. framework**.

## Afirmações/Observações Principais

- *"O caso de uso é o coordenador do fluxo"* — é quem integra chamadas de regras com chamadas de infraestrutura; não implementa regra de negócio diretamente.
- *"A inversão de dependência é a alma da Arquitetura Limpa"* — é o princípio D do SOLID que permite ao domínio não depender da infraestrutura.
- *"Regras vs. framework — não front vs. back"* — a divisão mental correta é separar regras de negócio puras do framework que as envolve, em qualquer camada.
- *Lib simples (ex.: UUID) pode ser usada diretamente no domínio* — nível de acoplamento aceitável depende de julgamento; não é dogma absoluto.

## Notas de Evidência

- Pergunta Reinaldo (nome duplicado): Serviço de Domínio com interface de repositório injetada pelo Caso de Uso — linhas 5 e 11.
- Pergunta José (validações desacopladas): Fluent API / Validator reutilizável — linha 7.
- Pergunta João (Zod vs. VOs): instanciar `new User(formData)` no front-end como validação — linha 10.
- Pergunta Anthony (lib UUID no domínio): acoplamento aceitável para libs simples — linha 14.
- Pergunta Mário (duas linguagens): padronizar forma de modelar, independente de linguagem — linha 16.
- Pergunta Marcel (UseCase vs. Service): distinção fluxo × regra — linha 18.
- Pergunta (inversão vs. injeção): explicação via diagramas — linha 20.
- Pergunta (Serviço de Domínio e repositório): normalmente não, mas pode via interface — linha 21.

## Impacto na Wiki Existente

- **`concepts/ddd.md`**: adicionada distinção precisa UseCase × Serviço de Domínio × Serviço de Aplicação; esclarecido que o Caso de Uso é quem chama o Serviço de Domínio; regra de unicidade como caso de uso de Serviço de Domínio.
- **`concepts/objeto-de-valor.md`**: adicionada estratégia de uso de VOs para substituir Zod; menção a Validator com Fluent API.
- **`concepts/arquitetura-limpa.md`**: adicionada explicação precisa de Inversão de Dependência (≠ Injeção); princípio D do SOLID; seta de dependência confirmada; acoplamento de libs simples no domínio.

## Questões Não Resolvidas

- Implementação concreta do padrão Ports & Adapters para o módulo `auth` (prometida para o dia seguinte da imersão — não ingerida ainda).
- Como estruturar o `Validator` fluente de forma genérica e reutilizável entre VOs?

## Páginas Relacionadas

- [ddd.md](../concepts/ddd.md): conceitos DDD — Serviço de Domínio, Caso de Uso
- [arquitetura-limpa.md](../concepts/arquitetura-limpa.md): Inversão de Dependência, Portas e Adaptadores
- [objeto-de-valor.md](../concepts/objeto-de-valor.md): Validator fluente, VOs no front-end
- [Série principal de transcrições](../sources/2026-04-20_source-imersao-ddd-arq-limpa.md)
