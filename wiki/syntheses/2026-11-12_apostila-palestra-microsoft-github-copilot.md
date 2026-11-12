---
title: "Apostila — Palestra Microsoft/GitHub sobre Copilot (visão geral e modernização)"
type: synthesis
status: draft
created: 2026-11-12
updated: 2026-11-12
tags: ["apostila", "github-copilot", "agentes", "mcp", "instructions", "coding-agent", "code-review", "modernizacao", "copilot-cli", "copilot-spaces", "custom-agents"]
source_files:
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot.md
  - raw/sources/2026-05-07_transcricao_VisualStudio+Copilot_Pratica.md
related_pages:
  - ../sources/2026-05-07_source-palestra-github-copilot.md
  - ../entities/github-copilot.md
  - ../concepts/mcp.md
  - ../concepts/ia-generativa.md
---

# Apostila — Palestra Microsoft/GitHub sobre Copilot

## Pergunta

Como estudar e explicar a um colega, com mais profundidade que o resumo de fonte, o conteúdo das duas sessões da palestra Microsoft/GitHub sobre o GitHub Copilot (teoria + aula prática)?

## Conclusão

Esta página é uma **apostila**: reorganiza todo o conteúdo das duas transcrições em capítulos didáticos, na ordem em que as ideias se constroem (do básico ao avançado), com exemplos, tabelas comparativas, glossário, perguntas de revisão e um roteiro de explicação. O resumo enxuto continua em [sources/2026-05-07_source-palestra-github-copilot.md](../sources/2026-05-07_source-palestra-github-copilot.md).

## Como ler esta apostila (e o que é fato × interpretação)

- **Fonte**: palestra de **fornecedor** (`tipo_conteudo: fornecedor`). Tudo o que está nos capítulos 1 a 15 é o que os apresentadores **afirmaram** (Jean, CSM, e Caio Queiroz, CSA, ambos do GitHub/Microsoft, para desenvolvedores da Caixa Econômica Federal). São descrições do produto feitas pelo próprio vendedor; números de ganho (como "70–90% menos tempo") são alegações da palestra, não medições independentes.
- **Blocos "Para explicar ao colega"**: são acréscimos didáticos do mantenedor (**interpretação**), não vêm da palestra.
- **Qualidade da transcrição**: a captura é automática e tem ruído. Exemplos: "Claude Sonic 4.5/4.6" = provavelmente *Claude Sonnet 4.5/4.6*; "modo alto" = *modo Auto*; "Alf" = provavelmente *OAuth* (autenticação). Onde a transcrição estava ambígua, isto é dito no texto.
- **Contexto da palestra**: 3º de uma série de encontros. Os dois primeiros foram de nivelamento. Esta sessão tem duas partes: **(A) teoria**, para dar a base; **(B) prática**, que já entra na **modernização de código legado**. A segunda parte da gravação termina no começo da demo de COBOL, então essa demo está incompleta na fonte.

---

## Mapa geral: o que existe dentro do "Copilot"

```
GitHub Copilot  (assistente de IA que usa vários LLMs como motor)
│
├── Formas de interagir (no IDE)
│     ├── Code Completion  → sugestão dentro do arquivo
│     ├── Chat: Ask / Plan / Agent
│     └── Inline Chat      → chat dentro do arquivo
│
├── Personalização
│     ├── Instructions     → regras fixas, 100% das vezes
│     ├── Spaces           → contexto curado e compartilhável
│     └── Custom Agents    → "funcionários" especializados (arquivo .md)
│
├── Agentes nativos
│     ├── Coding Agent     → trabalha sozinho, em background, no GitHub.com
│     └── Code Review      → revisa pull requests
│
├── Integração
│     └── MCP              → conecta o Copilot a ferramentas externas
│
├── Outras superfícies
│     ├── Copilot CLI      → o Copilot no terminal
│     └── GitHub.com       → chat, painel de agentes, resumo de PR
│
└── Extensão GitHub Copilot Modernization → upgrade/refactor/replatform/cloud
```

**Ordem didática da palestra**: Code Completion → Chat → Inline Chat → Instructions → Modo Agente → Coding Agent → Code Review → MCP → (extras) CLI, issues, Spaces, Custom Agents → Modernização com demos.

---

## Capítulo 1 — O que é o GitHub Copilot

**Definição dada**: um **assistente de inteligência artificial** que usa modelos de linguagem (LLMs) como motor. Os apresentadores insistiram que o Copilot **não é "uma IA"**: é uma plataforma que reúne vários modelos.

- **Modelos citados**: OpenAI (GPT/ChatGPT), Google (Gemini), Anthropic (Claude Sonnet, Claude Opus), entre outros.
- **Vantagem declarada**: um único lugar para usar diferentes IAs, e quando sai um modelo novo ele fica disponível lá.
- **Onde roda**: como **extensão do IDE**. IDEs citados: Visual Studio Code, Visual Studio, JetBrains (IntelliJ), Eclipse, Neovim.
- **Requisitos práticos**: licença do Copilot e IDE de preferência na **última versão** (há muitas atualizações).

> **Para explicar ao colega** (interpretação): comece desfazendo o equívoco "Copilot = ChatGPT". Copilot é a *embalagem* (integração com IDE, GitHub, regras, agentes); o modelo por baixo pode ser escolhido.

---

## Capítulo 2 — Como uma requisição funciona (contexto, proxy, LLM)

Todo uso do Copilot segue o mesmo fluxo básico, e entendê-lo explica o resto:

1. **Gatilho**: você escreve um comentário, digita código ou manda uma mensagem de chat. Isso é o **prompt**.
2. **Contexto**: junto com o prompt vai o **contexto**, que é "o que está aberto na tela": o arquivo atual e as outras abas abertas no IDE.
3. **Proxy de validação** (no meio do caminho). Segundo a palestra, ele:
   - valida **informações pessoais identificáveis (PII)**;
   - verifica **linguagem não ética/não profissional** e se o pedido é **relacionado a código** (no chat é possível mandar mensagens fora do tema, e o proxy rejeita o que não deve passar);
   - identifica e bloqueia algumas **vulnerabilidades comuns**.
4. **LLM**: recebe prompt + contexto e gera a sugestão.
5. **Volta pelo proxy**, que faz mais validações, e a sugestão aparece no IDE.

Esse processo se repete "sempre e diversas vezes" durante o desenvolvimento.

**Ideia central do curso inteiro**: *contexto + prompt* determinam o resultado. Os capítulos seguintes são, em boa parte, formas de **melhorar o contexto** (Instructions, Spaces, MCP, `#`/`@`) ou de **automatizar o ciclo** (agentes).

> A palestra não detalha as heurísticas do proxy (ver "Incertezas").

---

## Capítulo 3 — Code Completion (modo básico)

O "autocompletar" dentro do arquivo.

- **Comentário vira prompt.** Exemplo da palestra: o comentário `Get average runtime of successful runs in seconds` (em Go) faz o Copilot sugerir a função que calcula a média. Na demo prática: comentário pedindo um *endpoint de health check* → sugestão completa, aceita com **Tab**; depois ele ainda sugeriu `timestamp` e `uptime` no retorno.
- **Contexto usado**: arquivos abertos, comentários, funções já escritas.
- **Três coisas para guardar**: (1) comentário descrevendo o que quer = prompt; (2) completa automaticamente código repetitivo, **mesmo sem comentário**; (3) oferece **alternativas** para você escolher.
- **Disponibilidade**: todos os IDEs suportados.

---

## Capítulo 4 — Copilot Chat

Janela de chat dentro do IDE (normalmente à direita). Faz mais que sugerir código: entende o código, lê erros do terminal ou do arquivo e responde.

**O que dá para fazer** (exemplos da palestra): explicar um trecho; **gerar testes unitários** (ex.: `write a unit test for this function` gerou `sentiment.test.ts` com base no contexto); sugerir correção de bugs; **traduzir** idiomas e **converter** código entre linguagens.

### Os três modos do chat

| Modo | Função | Altera código? | Como a palestra descreve |
|---|---|---|---|
| **Ask** | Perguntas e respostas | Não: você copia/insere o resultado | "Chat normal"; explica ou sugere código |
| **Plan** | Analisa e **gera um plano** | Não (ferramentas de edição desabilitadas) | Mesmos poderes do agente, mas só planeja |
| **Agent** | Execução autônoma em ciclo | Sim: cria, edita, executa | "Onde o Copilot brilha" |

**Detalhe técnico do Plan**: ele é impedido de alterar arquivos porque as ferramentas de edição (ex.: *Edit Files*) ficam **desabilitadas**. Isso aparece em *Configure Tools*.

### Atalhos de contexto

| Símbolo | Para que serve | Exemplo da palestra |
|---|---|---|
| `/` (slash) | Comandos prontos | `/tests` (gera testes), `/explain` (explica a seleção) |
| `@` | Define **de onde** buscar contexto | `@workspace /explain` (olha o projeto todo); `@terminal`; `@vscode` |
| `#` | Filtra contexto específico | `#terminalSelection`, `#terminalLastCommand` |

**Exemplo prático**: selecionar um erro no terminal integrado → no chat, `#terminalSelection` + "me ajude a resolver esse problema".

Além disso: há uma página de *tips and tricks* do Copilot (links prometidos à turma depois).

### Inline Chat

Unifica Code Completion + Chat: abre uma janelinha de chat **dentro do arquivo** (botão direito num bloco selecionado → *Inline Chat*, ou *Explain*). Aceita `/` e `#` também.

**Demo**: ao pedir *Explain* num bloco de health check, o Copilot, sem ser pedido, apontou problemas no código e ofereceu uma versão corrigida.

---

## Capítulo 5 — Copilot Instructions

**Ideia**: em vez de o Copilot responder só pelo código, você escreve **instruções fixas** que guiam as respostas do projeto ou da organização. Funciona como "transformar o Copilot num assistente personalizado".

### Arquivo global

```
.github/copilot-instructions.md
```

- **Obrigatório estar em `.github/`** (na raiz do repositório) para ser lido.
- Escrito em **Markdown, em linguagem natural**.
- Considerado **100% das vezes**, em qualquer tipo de requisição (Code Completion, Chat, Code Review...).
- **Escopo**: o repositório. Também é possível definir instruções **no nível da organização GitHub**, mas isso é gerenciado pela organização (a Caixa), não pelo dev.

### O que colocar

Tech stack obrigatória (ex.: "Java"), versões, boas práticas, guia de revisão, segurança, idioma da resposta (ex.: "sempre em português brasileiro"). Na demo, o arquivo tinha título, visão geral da arquitetura e um *General Review Guidance* em **oito passos** de como revisar código.

> **Regra de ouro dita na palestra**: dizer **o que NÃO fazer** é "talvez mais importante" que dizer o que fazer. Em vez de "use sempre Java", escreva "não use outras linguagens além de Java".

> **Critério para o que entra**: só o que deve valer sempre. O resto vai para instruções específicas.

### Instruções específicas por arquivo/pasta

```
.github/instructions/<nome-que-quiser>.instructions.md
```

- Pasta `instructions/` dentro de `.github/` e sufixo `.instructions.md` são **obrigatórios**.
- O arquivo tem um **cabeçalho (frontmatter)**, que é a única parte que não é linguagem natural:
  - `description`: o que o guia faz (ex.: "guia para editar e revisar mudanças de código na API");
  - `applyTo`: padrões de arquivos onde se aplica (ex.: `src/**/*.ts`, `package.json`, pastas `migrations` e `seed`, arquivo Swagger).
- Abaixo do cabeçalho, linguagem natural.

**Como se combinam**: **não são excludentes, são complementares**. O global vale sempre; se o Copilot toca um arquivo que casa com `applyTo`, o específico é somado. Isso vale quando o toque vem de um prompt, de uma indicação sua ou do agente lendo o código.

**Prova na demo**: ao planejar o carrinho de compras, o chat mostrou que leu `front-end.instructions.md` sozinho, porque tocou em arquivos do front-end.

**Por quê dividir** (argumento do palestrante): "quanto mais específico, mais detalhe, mais clareza, melhor o resultado". Manter o global enxuto e jogar o resto para os específicos é aplicar esse mantra.

> **Para explicar ao colega** (interpretação): é o análogo do "arquivo de regras do projeto" em outras ferramentas de IA. A palestra mesma não faz essa comparação, mas ver o quadro em [Mapeamento de vocabulário](#mapeamento-de-vocabulário-com-outras-ferramentas-interpretação) no fim.

---

## Capítulo 6 — Modo Agente (o "inner loop")

**Metáfora da palestra**: um programador autônomo fazendo **programação em par (pair programming)** com você.

### O ciclo

```
Prompt
  ↓
LÊ contexto (código, workspace, Instructions)
  ↓
PLANEJA
  ↓
AGE   (cria/edita arquivos, roda comandos, abre browser…)
  ↓
OBSERVA (compilou? testes passaram? o pedido foi atendido?)
  ↓
Atingiu o objetivo?  não → volta ao PLANEJAR
                     sim → resume o que fez e sugere próximos passos
```

**Diferença para o chat comum**: no chat é "walkie-talkie" (você fala, ele responde, você responde de novo). No agente, ele **itera sozinho** até chegar ao resultado do prompt.

### Ferramentas (tools)

O agente trabalha **chamando ferramentas**: ler código, criar diretório, editar arquivos, executar comandos de terminal, abrir browser (via Playwright/MCP) e as de servidores MCP ativos. Lista visível em **Configure Tools**. Nomes citados: *Create Directory*, *Edit Files*, *Browser* etc. As ferramentas "Built-in" vêm por padrão.

### Descoberta automática de contexto

Você **não precisa apontar arquivos**. Exemplo: "melhore o tratamento de erros no meu back-end" → ele lê o projeto, descobre qual pasta/tecnologia é o back-end e atua. Ressalva da palestra: quanto mais específico o prompt, melhor ainda.

### Exemplo do ciclo (demo do slide)

Prompt: "site de página única com análises de frequência usando WebAudio, design estilo Apple".
1. **Plano**: HTML, CSS, JS (WebAudio API).
2. **Age**: verifica que não existem os arquivos e cria `index.html`, `style.css`, `main.js` ("three files changed").
3. **Observa**: abre/testa; se o JS estiver quebrado, volta ao plano e corrige.
4. **Fecha** sugerindo próximos passos (testes, melhorias de design, documentação).

### Comparativo Ask × Agent (tabela da palestra)

| Critério | Chat (Ask) | Modo Agente |
|---|---|---|
| Propósito | Perguntas, explicações, sugestões | Edição autônoma de ponta a ponta |
| Interação | Você aplica as sugestões manualmente | Mínima: ele cria/altera/move arquivos |
| Contexto | Você indica (`/`, `@`, `#`, arquivos abertos) | Descobre sozinho a partir do prompt (e ainda usa os atalhos e arquivos abertos) |
| Autonomia | Baixa | Alta (planejamento e execução em várias etapas) |
| Terminal | Você clica para executar | Ele executa comandos e verifica os resultados |

### Benefícios apontados

**Produtividade** (planejamento, testes, debug, documentação, APIs); **qualidade e segurança** (o loop valida o funcionamento: build, testes); **foco** (menos carga cognitiva, delega o repetitivo e fica com arquitetura e dívida técnica); **inovação** (testar várias abordagens rapidamente).

### Permissões de execução

Quando o agente quer rodar comando fora do escopo dos arquivos, ele **pede confirmação**. Opções vistas: permitir só nesses comandos, na sessão, no workspace, ou **todos os comandos na sessão**.

---

## Capítulo 7 — Coding Agent (agente autônomo em background)

**Atenção: não confundir** com o modo agente.

> O **modo agente** é um **modo da extensão** (roda no seu IDE). O **Coding Agent** é **um agente que o GitHub disponibiliza**, e roda **no GitHub.com**.

| | Modo Agente (extensão) | Coding Agent |
|---|---|---|
| Onde roda | No seu IDE/máquina | No GitHub.com |
| Ambiente | O seu ambiente real | **Efêmero**: criado para a tarefa e destruído depois |
| Interação | Interativa | Background/assíncrona |
| Paralelismo | Uma conversa por vez | **Várias sessões em paralelo** |
| Resultado | Edições locais | **Pull requests** |

### Como funciona

- Usa o **GitHub Actions** como infraestrutura: sobe um runner temporário e seguro (pode ser **GitHub-hosted** ou **self-hosted**).
- Faz *checkout* do código, instala dependências, builda, roda comandos, altera/cria arquivos, valida (mesmo processo do modo agente).
- Pode ser disparado pelo **IDE** (via MCP do GitHub), pelo **GitHub.com** ou por uma **issue** atribuída ao Copilot (ver cap. 10).
- Novidade citada: **self-hosted runners agora funcionam** com o Coding Agent. Antes, restrições de firewall impediam que ele acessasse o código; a palestra não explica como isso foi resolvido.
- **Model Picker** (anunciado em meados de fevereiro, segundo a palestra): escolher o modelo ou deixar em **auto**.

### Segurança embutida

**Code Scanning com CodeQL** roda durante a sessão: se houver vulnerabilidade no código novo, ele identifica e corrige.

### Por que um ambiente efêmero importa

Valida fora da máquina do dev, o que "ajuda a evitar o clássico *na minha máquina funciona*". Também permite **customizar o ambiente** (imagem pré-pronta, dependências instaladas) por ser GitHub Actions.

### Browser próprio (Playwright)

O Coding Agent abre um navegador nesse ambiente via **servidor MCP do Playwright**. Serve para **validar** (abrir a app, ver se algo quebrou, iterar) e para **documentar**: a PR traz um **resumo do que foi feito com screenshots** provando o funcionamento (na demo, itens validados com ✔ e print).

### Mission Control

Painel no GitHub.com para **acompanhar as sessões**: checkout, build, instalação, arquivos alterados, preview. Dá para **conversar com a sessão em andamento**, como no chat do agente (ex.: "esqueci de pedir X").

### A ideia de "equipe de agentes"

- Delegar 3 abordagens diferentes de uma implementação → 3 PRs em paralelo para comparar.
- O dev vira "**gerente de uma equipe de agentes**"; "é como ter um funcionário a mais".
- Pode haver "Coding Agents" de teste, documentação, troubleshooting, implementação, design (isso vira Custom Agents, cap. 13).
- Argumento dos apresentadores: delegar o repetitivo melhora também o ânimo do time. (Opinião dos palestrantes.)

---

## Capítulo 8 — Code Review Agent

Revisa **pull requests** com o Copilot.

- **Como acionar**: na PR, escolha o **Copilot como revisor**. Pode ser configurado para ser **automático** em toda PR.
- **Resultado**: comentários na PR, autoria "Copilot", com **blocos de código sugeridos** que podem ser **commitados direto** na PR.
- **Contexto completo do projeto**, não só os commits da PR. Isso permite ver arquitetura e histórico. Foi apresentado como evolução (no início não era tão eficaz).
- **Análise de segurança** automática (CodeQL).
- **Etapas visíveis**: Prepare → Validate Agent → Auto Validate → análise CodeQL → publica os resultados.
- **Personalização**: no `copilot-instructions.md`, uma seção chamada **Code Review** diz como o Copilot deve revisar (práticas, segurança, qualidade, frameworks).
- **Ressalva dos palestrantes**: revisar o que o Copilot faz é **obrigatório**; a vantagem é que o humano revisa "a revisão", o que acelera.

**Dica relacionada**: na tela de uma PR, o ícone do Copilot → **Summary** gera a descrição da PR com base nas mudanças. Simples e útil para histórico e revisão.

---

## Capítulo 9 — MCP (Model Context Protocol)

### O que é

**Padrão aberto** que define como recursos de IA interagem com sistemas externos (acessar dados, usar ferramentas, executar ações) de forma padronizada. Slogan dos apresentadores: o **"USB-C da IA"**, um conector universal para ferramentas de terceiros.

### Linha do tempo (analogia)

API (padroniza como apps web falam com back-end) → **LSP** (Language Server Protocol, padroniza IDEs com ferramentas de linguagem: navegação, análise estática) → **MCP** (mesma lógica, para IA e agentes; 2024). *Nota*: a transcrição das datas está truncada/confusa ("API 2020, MCP 2016, MCP 2024"); só o 2024 do MCP é claro.

### Por que importa

- **Contexto mais preciso** (ferramentas externas refinam o contexto) e, com isso, **menos alucinação**.
- **Compartilhar informações** com o time via ferramentas externas (Jira, Zendesk, Azure, Slack, Teams...).
- **Reduz o tempo de integração** (padrão único em vez de integrações proprietárias).

### Interação em linguagem natural

Não é GET/POST: você diz "traga a conversa do Slack" ou "liste os pull requests do repo" e o agente escolhe a ferramenta certa.

### Os três componentes

| Componente | Papel | Exemplos |
|---|---|---|
| **Host** | O ambiente onde você desenvolve | VS Code, Visual Studio, Eclipse |
| **Client** | Quem consome o MCP (dentro do host) | Agent Mode, Coding Agent |
| **Server** | Expõe ferramentas/sistemas externos | GitHub, Azure, Playwright, Jira |

### Tools: o ponto que mais confunde

Cada servidor expõe **ferramentas** com nomes técnicos (ex.: `create_pull_request`, `create_issue`). **Esse nome não é um comando que você digita.** Você escreve "crie uma pull request no meu repositório" e a IA, vendo que há ferramenta para isso, a chama.

### Dois tipos de servidor (demo)

| | Local (ex.: Playwright) | Remoto (ex.: GitHub) |
|---|---|---|
| Autenticação | Nenhuma: abre browser local | Sim (a transcrição diz "Alf", provavelmente **OAuth**); abre o browser para login |
| Permissões | — | **As do usuário autenticado**: se você pode criar PR, o MCP pode |
| Hospedagem | Local | Na nuvem; não precisa rodar local |

### Como instalar e ver (VS Code)

- Arquivo **`.vscode/mcp.json`** no repositório com a definição dos servidores.
- Há botão para **Start**; **More → Show Output** mostra o log (útil quando falha).
- Em **Configure Tools** aparecem todas as ferramentas do servidor (do GitHub: comentar, atribuir o Copilot a uma issue, criar/atualizar arquivo, criar PR, listar commits...).
- Na organização, costuma haver **governança**: a empresa define quais MCPs podem ser usados e como instalar.

### Demo

Prompt "liste as issues do meu repositório" → o chat detectou o servidor MCP do GitHub, identificou o repositório (porque o dev estava nele) e listou a issue com labels e datas.

> Mais sobre MCP na wiki: [mcp.md](../concepts/mcp.md).

---

## Capítulo 10 — Coding Agent + MCP, painel de agentes e issues

- **Integração nativa**: o Coding Agent já vem com os servidores **GitHub** e **Playwright**, sem instalar nada. Exemplos dados:
  - "Garanta que a aplicação funciona em dark mode e modo normal" → usa Playwright.
  - "Consulte outro repositório da organização" → usa o MCP do GitHub.
- **Delegar do IDE**: com o MCP do GitHub instalado, no chat do agente você escreve "abra uma pull request no meu repositório para criar o arquivo X" e o Coding Agent assume. Você volta a trabalhar e valida depois (também dá para checar o andamento pelo MCP).
- **Painel de agentes no GitHub.com**: inicia sessões do Coding Agent por chat; clicar numa sessão abre o Mission Control. Também há o **Copilot chat no GitHub.com** com funções parecidas com as do IDE.
- **Issues como prompt**: crie uma issue descrevendo a tarefa e **atribua ao Copilot** (como no Code Review). O Copilot trata a issue como prompt, cria uma PR e executa no ambiente efêmero.

---

## Capítulo 11 — Copilot CLI

O Copilot no **terminal** (modo agente, modo plan, vários modelos, delegar ao Coding Agent, usar MCP, ler Instructions).

- **Instalação** (citada): Homebrew (macOS), Winget (Windows), NPM (Linux/Mac). Para usar: abrir o terminal e digitar `copilot`.
- **Login**: `/login` (usa a licença do Copilot). A ferramenta foi dita **gratuita** (integra-se à licença).
- **Comandos vistos**: `/mcp` (lista servidores; vem o do GitHub por padrão), `/plugin` (gerencia plugins), `/agent` (escolhe o agente: o padrão ou um personalizado, como `Modernize .NET`).
- **Modos**: `/allow-all` ou **`/yolo`**: aprova tudo sem perguntar (use só sabendo o que faz; a proteção é a branch/PR). **`/fleet`**: habilita **subagentes em paralelo** para o mesmo prompt, "sem custo adicional" (segundo a palestra).
- **Recebe atualizações quase diárias**, segundo o apresentador, que declarou preferir o CLI ao IDE.

---

## Capítulo 12 — Copilot Spaces

**Objetivo**: dar ao Copilot um **conjunto curado de contexto** compartilhável entre times.

- **O que se adiciona**: instruções em linguagem natural; repositórios inteiros (ex.: de documentação); arquivos ou pastas; texto como fonte; GitHub URLs (issues, discussions, PRs).
- **Exemplo da palestra**: um Space "API Caixa" com o padrão de arquitetura de APIs; qualquer time que for desenvolver API consulta o mesmo contexto.
- **Demo**: Space "Copilot Metrics" com instruções e 4 arquivos; a pergunta "qual a métrica que mede o uso dos agentes?" foi respondida com base neles.
- **Dentro do IDE**: via **MCP do GitHub**, pede-se no chat "traga o contexto do Space de arquitetura de API" e depois a implementação.
- **Valor declarado**: padronizar o contexto usado pelos times.
- **Dúvida aberta**: como o Space se mantém sincronizado quando os repositórios-fonte mudam (não respondido).

---

## Capítulo 13 — Custom Agents

Agentes personalizados definidos em **arquivo Markdown** (`.agent.md`, em `.github/agents/`), usando o Coding Agent/modo agente como **motor**.

- **Estrutura**: bloco de parâmetros no topo (nome, descrição, **modelo**, **ferramentas**) + instruções em linguagem natural.
- **Seções típicas** vistas no agente de modernização: *Upgrade success criteria* (objetivo: compilar, testar) e *Anti-exclusive rules* (o que **não** fazer).
- **Exemplos**: `Modernize Java`, `Modernize .NET`, `Modernize Azure Java/.NET`; nos slides, `Rails API Developer`, `UI Engineer`, `Debugger`.
- **Como usar**: selecionar no seletor de agentes ou chamar com `@nome`.
- **`/create-agent`**: descreva em linguagem natural o que o agente deve fazer e o Copilot cria o arquivo. Dois usos na demo:
  1. "Crie um agente que demonstre e execute a funcionalidade deste projeto (HTML → PDF)": gerou o `DocRaptor Demo`, que converteu um HTML de *invoice* em PDF;
  2. "Analise o upgrade que fizemos e crie um agente que execute o mesmo": gerou um agente que repete o processo Java 8 → 21 em outros projetos.
- **Pegadinha da demo**: o agente não aparecia na lista até existir a **pasta `agents/`**; depois funcionou.
- **Ideia**: "um batalhão de agentes especializados", cada dev com vários trabalhando em paralelo.

---

## Capítulo 14 — GitHub Copilot Modernization

### O problema

Modernizar código legado é **demorado, caro e muito manual**; a análise leva semanas ou meses, o que traz riscos de **tempo**, de **mudança de escopo/contexto** e de **troca de pessoas** no meio do caminho.

### O que é

Uma **extensão separada** (GitHub Copilot Modernization) para VS Code, Visual Studio e IntelliJ, que funciona junto com a extensão do Copilot e usa o modo agente. Detecta sozinha se o projeto é **Java** ou **.NET** (só essas duas linguagens têm a extensão; as demais vão pelo modo agente "manual", ver cap. 15).

### Quatro pilares

**Descoberta → Planejamento → Execução → Validação.**

### As quatro modalidades

| Modalidade | Muda o quê | Exemplo |
|---|---|---|
| **Replatform** | **Onde** a app roda (sem mexer no código) | VM → containers |
| **Refactor** | O **código**: padrões legados → modernos | — |
| **Upgrade** | A **versão** de runtime/framework | Java 8 → 21; .NET 4.8 → moderno |
| **Cloud enablement** | Prepara para a **nuvem** | AKS, App Service, Container Apps; RabbitMQ → Azure Service Bus |

Eles são **complementares e cumulativos**: refactor e upgrade costumam vir no mesmo plano; depois replatform, junto com cloud enablement, para ir ao Azure.

### Passo a passo do processo

1. **Assessment**: analisa código, dependências e configuração; aponta versões legadas, vulnerabilidades, APIs depreciadas, padrões legados. Há também o **cloud readiness**, com itens classificados em *mandatório / potencial / opcional* (ex.: "nenhum Dockerfile encontrado"; "migração de banco Microsoft SQL") e botão **Run task** para o agente resolver.
2. **Plano** (`plan.md`): gerado na pasta `.github/` (na demo, `java-upgrade`), com objetivos, tech stack, **dependências a atualizar** (ex.: JUnit 4 → 5, cliente HTTP 1 → 3), **passos** e *key challenges*.
3. **Revisão do plano pelo humano**: é editável; o agente pergunta se pode executar ou se você quer revisar. Dá para atacar os *key challenges* via chat antes.
4. **Execução incremental** por passos. Na demo: **14 passos**, em etapas (Java 11 → 17 → 21), cada uma com **verificação**.
5. **Acompanhamento**: `progress.md` (cada passo marcado como completo/sucesso) e o **log** (gigante; mostra atividade mesmo quando o chat parece parado).
6. **Validação final**: versões atingidas, compilação ok, **testes 100%**.

**Escolhas pedidas ao dev na demo**: versão alvo (Java 21, "recomendada para produção"; a palestra recomenda preferir **LTS**), ferramenta de build (Maven, Gradle ou SBT), **rodar testes antes e depois** do upgrade (porque senão um problema pré-existente é levado para a versão nova). Também pediu para inicializar um repositório Git.

**Tempo**: ~**18 minutos** para o upgrade completo na API de exemplo (pequena). Alegação geral da palestra: **70% a 90% de redução de tempo** frente ao processo manual. Alerta: "tenha paciência"; por isso a demo usou um repositório já pronto.

> **Para explicar ao colega** (interpretação): o valor didático aqui é o **plano revisável + passos pequenos + teste antes e depois**. Isso é uma boa prática independente do produto. A cifra de 70–90% é afirmação do fornecedor.

---

## Capítulo 15 — Demos da aula prática

### Demo 1 — Loja virtual (modo Plan → Agent)

Aplicação web de baixa/média complexidade sem página de carrinho. Prompt: *"adicione uma página de carrinho de compras e um ícone na navbar que mostre o número de itens"* **no modo Plan**.

- O Plan leu o projeto, aplicou o `front-end.instructions.md` e **fez perguntas** (como persistir o carrinho? só carrinho ou também checkout?). Respostas: `localStorage`; apenas carrinho com totais e frete.
- Gerou um plano de **9 passos**, que pode ser executado passo a passo, ou dividido entre pessoas em paralelo.
- Botão **Start Implementation** muda para o modo Agent e implementa.
- Lição dita: **planejar antes** gera perguntas melhores e contexto mais específico do que pedir direto.

**Seleção de modelo**: o seletor mostra o **multiplicador de premium requests** (1x gasta 1). Escolheu-se o modo **Auto**, que escolhe o melhor modelo pelo prompt e dá **10% de desconto** (1x vira 0,9x).

### Demo 2 — Java 8 → 21 (extensão de Modernization)

API que converte HTML em PDF/XLSX (DocRaptor), em Java 8. Fluxo: *Start Assessment* (cloud readiness com alvo AKS) → *Upgrade Java runtime and frameworks* → perguntas → `plan.md` → execução → `progress.md`. Detalhes no cap. 14.

### Demo 3 — Agentes customizados com `/create-agent`

Ver cap. 13.

### Demo 4 — .NET 4.8 → .NET 8 pelo Copilot CLI

Instalar o plugin: adicionar o *marketplace* de modernização .NET e o plugin `modernize-dotnet` (comandos `/plugin marketplace add ...` e depois o plugin); `/agent` → `Modernize .NET`; prompt: *"atualize minha solução para .NET 8"*. Mostrou `/allow-all`/`/yolo` e `/fleet`. A demo **não foi esperada até o fim** por falta de tempo. Também existe `Modernize Java` no CLI. A mesma extensão do IDE identifica sozinha se o repositório é .NET ou Java.

### Demo 5 — COBOL → Node.js (linguagem sem extensão)

Aplicação bancária simples (consulta de saldo, crédito, débito). Como **não há extensão** para COBOL, o processo é **manual com o modo agente**:

1. **Primeiro passo**: criar **documentação** do sistema legado (justificativa: a doc existente costuma estar desatualizada ou inexistente). Prompt: criar um README em `/docs` documentando o propósito de cada arquivo COBOL, funcionalidades e **regras de negócio** das operações bancárias.
2. Os passos seguintes (planejamento e conversão para Node.js) **não aparecem na gravação**, que termina aqui.

> **Interpretação**: o padrão "documentar o legado → planejar → migrar em passos" é o mesmo da extensão, feito à mão. Isso é inferência; a palestra só mostra o primeiro passo.

---

## Licenciamento e custos (como dito na palestra)

- **Premium requests**: Business = **300**; Enterprise = **1000** (visível na licença). Cada modelo tem um **multiplicador**.
- **Modo Auto**: 10% de desconto nas premium requests.
- O treinamento técnico gratuito de preparação para a **certificação GitHub Copilot** foi recomendado pelo CSM.

---

## Quadros de revisão rápida

### Qual recurso usar?

| Quero... | Use |
|---|---|
| Sugestão enquanto digito | Code Completion |
| Tirar dúvida / explicar / gerar teste | Chat (Ask) |
| Planejar sem mexer no código | Chat (Plan) |
| Implementar de ponta a ponta no meu IDE | Chat (Agent) |
| Delegar tarefa em background, em paralelo, e receber PR | Coding Agent |
| Revisão automática de PR | Code Review Agent |
| Regras fixas do repositório | `copilot-instructions.md` |
| Regras só para certas pastas/arquivos | `*.instructions.md` com `applyTo` |
| Contexto curado e compartilhado entre times | Copilot Spaces |
| Especialista reutilizável (modernizar, depurar, UI) | Custom Agent (`.agent.md`) |
| Ligar o Copilot a Jira, Slack, GitHub, browser | MCP |
| Usar tudo no terminal | Copilot CLI |
| Upgrade/refactor/replatform/cloud de Java ou .NET | Extensão Modernization |

### Arquivos e pastas citados

| Caminho | Função |
|---|---|
| `.github/copilot-instructions.md` | Instruções globais (obrigatório em `.github/`) |
| `.github/instructions/<x>.instructions.md` | Instruções por padrão `applyTo` |
| `.github/agents/<x>.agent.md` | Custom agent |
| `.vscode/mcp.json` | Servidores MCP no VS Code |
| `.github/java-upgrade/.../plan.md`, `progress.md`, log | Plano, progresso e log do upgrade Java |

### Mapeamento de vocabulário com outras ferramentas (interpretação)

Comparação com o curso formacao.dev, já feita no resumo de fonte (o conteúdo é do mantenedor, não da palestra):

| Conceito | formacao.dev | Microsoft/GitHub |
|---|---|---|
| Instruções fixas | Rules (`.claude/rules/`) | `copilot-instructions.md` |
| Capacidades reutilizáveis | Skills (`.claude/skills/`) | Custom Agents (`.github/agents/*.md`) |
| Especificação/plano | `specs/changes/*.md` | Modo Plan / issues como prompt / `plan.md` |
| Harness | Conceito nomeado | Implícito: "inner loop"/"agent loop" |

---

## Glossário

- **LLM**: modelo de linguagem grande (GPT, Claude, Gemini...).
- **Prompt**: o pedido enviado ao modelo.
- **Contexto**: o material enviado junto com o prompt (arquivos abertos, instruções, dados externos).
- **PII**: informações pessoais identificáveis.
- **IDE**: ambiente onde se desenvolve (VS Code, Visual Studio, IntelliJ...).
- **Inner loop / agent loop**: ciclo ler → planejar → agir → observar → repetir.
- **Tool (ferramenta)**: capacidade que o agente pode chamar (ler arquivo, rodar comando, abrir browser).
- **MCP**: Model Context Protocol; padrão aberto para ligar IA a ferramentas externas.
- **Runner**: máquina que executa jobs do GitHub Actions (hospedado pelo GitHub ou próprio).
- **Efêmero**: criado para a tarefa e descartado depois.
- **CodeQL / Code Scanning**: análise estática de segurança do GitHub.
- **Premium request**: unidade de consumo da licença ligada ao uso de modelos.
- **LTS**: versão de suporte de longo prazo (ex.: Java 21).
- **Assessment**: análise inicial de dependências, versões e prontidão para nuvem.
- **Playwright**: ferramenta que automatiza navegadores.
- **Mission Control**: painel do GitHub.com para acompanhar sessões do Coding Agent.

---

## Perguntas de revisão (para estudar e para testar o colega)

1. Que dois ingredientes sempre vão ao modelo em uma requisição do Copilot? O que faz o proxy?
2. Qual a diferença entre Code Completion, Chat e Inline Chat?
3. O que distingue Ask, Plan e Agent? Como o Plan é impedido de editar?
4. Para que servem `/`, `@` e `#`? Dê um exemplo com o terminal.
5. Por que é obrigatório que `copilot-instructions.md` esteja em `.github/`? Como o global e o específico se combinam?
6. Por que a palestra diz que "o que não fazer" é tão importante nas instruções?
7. Descreva o ciclo do modo agente com um exemplo em que o teste falha.
8. Quais as diferenças entre modo agente e Coding Agent (onde roda, ambiente, paralelismo, resultado)?
9. Por que o ambiente efêmero ajuda contra o "na minha máquina funciona"? Qual o papel do Playwright e do CodeQL ali?
10. Como acionar o Code Review? Que seção do arquivo de instruções o personaliza?
11. Explique Host, Client e Server no MCP. Por que `create_pull_request` não é um comando digitado?
12. Qual a diferença de autenticação entre o MCP do Playwright e o do GitHub?
13. Cite as quatro modalidades de modernização e dê um exemplo de cada.
14. Por que o upgrade deve começar com testes passando? Quais os passos do processo (assessment, plano, execução, validação)?
15. Como modernizar COBOL sem extensão específica? Qual o primeiro passo, e por quê?

---

## Roteiro sugerido para explicar a um colega (interpretação)

1. **O quadro geral (5 min)**: Copilot = plataforma, não uma IA. Mostrar o mapa do início.
2. **Do simples ao autônomo (10 min)**: Code Completion → Chat → Plan → Agent. Enfatizar contexto + prompt.
3. **Personalização (5 min)**: Instructions (global × específico), "o que não fazer", Spaces.
4. **Agentes (10 min)**: modo agente × Coding Agent (tabela) + Code Review.
5. **MCP (5 min)**: USB-C da IA; host/client/server; ferramenta × comando; permissões do usuário.
6. **Modernização (10 min)**: quatro modalidades; processo assessment → plano → passos → validação; demos.
7. **Fechamento**: tabela "Qual recurso usar?" e as perguntas de revisão.

**Dica de explicação**: use sempre o mesmo exemplo (a loja virtual e o carrinho) para ilustrar vários capítulos: Code Completion (endpoint de health check), Instructions (`front-end.instructions.md`), Plan → Agent, e depois o Coding Agent com Playwright validando o resultado.

---

## Incertezas

- **Todo o conteúdo é de fornecedor** e de uma única palestra; não há comparação com concorrentes nem verificação independente dos ganhos (70–90%, 18 minutos).
- **Transcrição automática**: nomes de modelos, siglas e datas do MCP aparecem truncados ou errados em alguns pontos (ver "Como ler esta apostila").
- **Sem resposta na fonte**: conflito de merge entre sessões paralelas do Coding Agent; critério do modo Auto para escolher o modelo; heurísticas do proxy para PII/linguagem; funcionamento de self-hosted runners com firewall; sincronização de Spaces com os repositórios.
- **Produto muda rápido**: a própria palestra diz que o Copilot CLI recebe atualização quase diária; nomes de comandos, planos e limites (premium requests) podem ter mudado desde maio de 2026. Não verificado.
- **Demo de COBOL incompleta** na gravação; a demo do .NET não foi concluída ao vivo.

## Próximas ações

- Se precisar de mais detalhe de algum capítulo, ampliar só ele (por exemplo, um guia passo a passo da Modernization).
- Quando houver a sessão seguinte da série (demo de modernização), ingerir e ligar a esta apostila.
- Verificar na documentação oficial o que mudou (comandos do CLI, nomes de arquivos, limites).
