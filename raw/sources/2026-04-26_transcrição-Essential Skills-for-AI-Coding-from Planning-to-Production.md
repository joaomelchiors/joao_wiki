fonte: https://www.youtube.com/watch?v=-QFHIoCo-Ko
github: mattpocock/course-video-manager
paletrante: - [https://x.com/mattpocockuk](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazV4Ty1uTkRmSFpLejhpT0ViSzdFQW1EZk55UXxBQ3Jtc0trdWFkcER2SnExa1dGcG54VEFxTVhUaklYZlVMRU5hTjhuQjZ2VDRCcjBHUnNQS0xuTmdoNW9oNGkwNG9DX2hLLWlFM0R6cTZBMHBEWEpUcTRUNktmLXY4elFJaHVyZ3p4Vmdid0UzRzdqZGx4UnlIYw&q=https%3A%2F%2Fx.com%2Fmattpocockuk&v=-QFHIoCo-Ko)
# Transcrição Essential Skills for AI Coding from Planning to Production

**A tese central** do vídeo é que os fundamentos clássicos da engenharia de software continuam sendo cruciais e funcionam muito bem na era da inteligência artificial. O palestrante destaca que uma base de código ruim sempre resultará em agentes de IA ruins.

# Transcrição

"Então, eu quero falar primeiro sobre o tipo de restrições estranhas que os LLMs têm, e essas restrições estranhas são a base para grande parte do nosso trabalho. Há um cara chamado Dex Hy, que dirige uma empresa chamada Human Layer, e ele surgiu com essa ideia de que, **quando você está trabalhando com LLMs, eles têm uma zona inteligente (****smart zone****) e uma zona burra (****dumb zone****)**.

Quando você está começando a trabalhar com um LLM e acaba de iniciar uma nova conversa, você começa do nada. É aí que o LLM fará o seu melhor trabalho porque, nessa situação, as relações de atenção são as menos tensionadas. **Toda vez que você adiciona um token a um LLM, é como se estivesse adicionando um time a uma liga de futebol.** O número de partidas simplesmente escala quadraticamente. Isso ocorre porque você tem relações de atenção indo essencialmente de cada token para o outro, que são posicionais e o próprio significado do token individual. E isso significa que, ao redor de 40% (ou eu diria que cerca de 100k tokens é minha nova marca para isso, não importa se você usa uma janela de contexto de 1 milhão ou 200k), ele começa a ficar mais burro. Então, **à medida que você continua adicionando continuamente informações à mesma janela de contexto, ele fica cada vez mais burro até começar a tomar decisões estúpidas**.

Isso significa que **queremos dimensionar nossas tarefas de uma forma que elas permaneçam dentro da zona inteligente**; não queremos que a IA dê um passo maior que a perna. Isso remete a conselhos antigos... O livro _O Programador Pragmático_ fala sobre isso: mantenha suas tarefas pequenas para que você, como um desenvolvedor humano, não enlouqueça e não comece a agir e a entrar na zona burra.

Mas como você lida com tarefas grandes? Como você pega uma tarefa grande... e a divide em tarefas pequenas para que todas se encaixem na zona inteligente? A forma natural que as empresas de IA talvez queiram que você faça é simplesmente continuar adicionando. Você acaba na zona burra sendo cobrado milhares de tokens por requisição. Você então compacta, e continua, continua... E eu acho que isso não funciona muito bem por causa do acúmulo de resíduos.

A teoria era então criar planos de múltiplas fases, dividindo em seções pequenas para que possamos trabalhar em cada pedacinho dentro da zona inteligente. Qualquer desenvolvedor olharia para isso e diria: 'Isso é um loop. Por que não temos apenas a fase _n_, onde essencialmente dizemos que temos um plano operando em segundo plano e iteramos sobre ele até terminar?'. É aqui que entra a ideia chamada Ralph Wiggum... onde tudo o que você precisa fazer é especificar o fim da jornada criando um PRD (Documento de Requisitos do Produto) para descrever aonde estamos indo e então dizer à IA: 'faça uma pequena mudança que nos aproxime cada vez mais de lá'. Isso funciona bem, mas eu prefiro um pouco mais de estrutura.

**Outra restrição estranha dos LLMs é que eles são como o cara do filme** **Amnésia** **(****Memento****): eles esquecem continuamente. Eles poderiam simplesmente continuar sendo redefinidos para o estado base**.

Em todo diagrama de sessão com um LLM você passa pelos mesmos estágios. Primeiro você tem o prompt do sistema. Você quer que isso seja o menor possível, porque se tiver uma tonelada de coisas ali (como 250k tokens)... você vai direto para a zona burra sem sequer conseguir fazer nada. Você então entra em uma fase exploratória... depois vai para a implementação e depois para o teste. **Quando você limpa o contexto, você volta direto para o prompt do sistema. Você deleta tudo o que veio antes**.

Existe essa linha de status minúscula que me diz exatamente quantos tokens eu estou usando, para eu saber quão perto estou da zona burra. É absolutamente essencial em toda sessão de codificação. Eu tenho duas opções: posso limpar e voltar ao nada, ou posso compactar. Quando eu compacto, isso vai espremer toda a conversa em um espaço muito menor, criando um registro histórico escrito do que aconteceu. Os desenvolvedores adoram compactar por algum motivo, mas eu odeio isso. **Eu prefiro muito mais que minha IA se comporte como o cara do filme** **Amnésia****, porque esse estado é sempre o mesmo. Toda vez que você faz isso, você limpa e volta ao início**.

Então, essas são as duas restrições com as quais estamos trabalhando: eles têm uma zona inteligente e uma zona burra. E eles são como o cara do filme _Amnésia_.

Vamos agora realmente começar e fazer um pouco de codificação... Vamos começar usando uma habilidade que é muito próxima ao meu coração. É a habilidade _Grill Me_ (me interrogue)

Grill-me
```
Interview me relentlessly about every aspect od tihs plan until we reach a shared understanding. Walk donw each branch of the design tree, resolving dependencies between decisions on-by-one. For each question, provider your recomemended answer. Ask the questions one at a time. If a question can be answered by exploring the codebase, explore the codebase instead.
```

"E essa habilidade _Grill Me_ (Me interrogue) é maravilhosamente pequena e minúscula. Ela ajuda a prevenir um dos problemas que considero ser o principal ao trabalhar com IA, que é a falta de alinhamento. A ideia contra a qual estou argumentando aqui é o movimento _specs to code_ (especificações para código).

O que as pessoas dizem é: 'ok, você quer construir um aplicativo. A melhor maneira é pegar algumas especificações, escrever algum tipo de documento e transformar isso em código'. Como você faz isso? Você passa isso para a IA, e se houver algo errado com o código resultante, você não olha o código; você olha de volta para as especificações, altera as especificações e simplesmente continua assim. É como um _vibe coding_ com outro nome, onde você essencialmente ignora o código. Eu tentei isso, tentei de verdade, e é uma porcaria, não funciona. Você precisa ter o controle do código, entender o que há nele e moldá-lo, porque o código é o seu campo de batalha.

_(Ele mostra um exemplo de briefing de um cliente pedindo para adicionar gamificação na plataforma)_

Vou invocar uma habilidade que é o _Grill Me_ e vou passar o briefing do cliente para ela. O que essa habilidade faz é instruir a IA: '==Entreviste-me implacavelmente sobre cada aspecto deste plano até alcançarmos um entendimento compartilhado. Percorra cada ramificação da árvore de design resolvendo as dependências uma por uma=='. O que percebi trabalhando com o Claude foi que eu precisava alcançar um entendimento compartilhado. Eu não precisava de um ativo ou de um plano pronto, eu precisava estar na mesma sintonia que a IA, o meu agente. E esta é uma maneira extremamente eficaz de fazer isso.

_(Ele mostra a IA fazendo várias perguntas sobre economia de pontos, níveis e funcionalidades retrativas)_

Essa habilidade _Grill Me_ pode durar bastante tempo. Já tive sessões em que a IA me fez 40 perguntas, 80 ou até 100 perguntas; você fica literalmente sentado por uma hora conversando com a IA. O que você obtém no final é essencialmente um histórico de conversa que funciona muito bem como um ativo do conceito de design que você está criando.

**Pergunta:** "Muitas das perguntas feitas pela habilidade _grill me_ não são necessariamente apropriadas para um desenvolvedor, mas sim para um PO (_Product Owner_) em equipes maiores. Quem deveria usá-la?"

**Resposta do palestrante:** "Sim. Hum, levantem a mão se... vocês já fizeram _pair programming_ (programação em pares). Alguém já fez _pair programming_? Certo. Abaixem as mãos e levantem a mão novamente se vocês já fizeram uma sessão de _pair programming_ com uma IA. Certo. Como foi? Foi bom? Vocês gostaram?

Eu acho que sessões de _pair programming_ com IA são uma ótima ideia porque você tem uma terceira pessoa na sala que vai te interrogar implacavelmente e te fazer perguntas. Se você não sabe a resposta, deveria ser você, o especialista do domínio, e a IA na mesma sala. Se você tem uma pergunta sobre implementação, deveria ser você, um colega desenvolvedor, e a IA na mesma sala. Sabe, você pode ir trabalhando nessas questões na sua equipe.

**Então, alguém acabou de dizer**: 'Ok, aplique um loop de Ralph nisso'. Mas isso é crucial, porque eu não posso fazer um loop sobre isso, certo? 

**Resposta**: Eu penso que existem dois tipos de tarefas na era da IA, onde você tem tarefas com 'humano no ciclo' (_human in the loop_), nas quais um humano precisa sentar e atuar, que é isso aqui (nós somos o humano no ciclo com múltiplos humanos no ciclo). E existem tarefas AFK (_Away From Keyboard_ - longe do teclado), que são tarefas onde o humano pode estar ausente do teclado e isso não importa. **A implementação, como veremos, pode ser transformada em uma tarefa AFK, mas o planejamento, essa fase de alinhamento, tem obrigatoriamente que manter o humano no ciclo**. Então eu infelizmente tenho que fazer isso."

**Palestra retomada**: "Hum, não sei. Ah, me dê uma longa lista de todas as suas recomendações. Estou conduzindo um workshop agora mesmo, então preciso artificialmente que você assuma mais do trabalho pesado. Então vamos ver o que ele faz.

Certo, com o que ele retornou? Oh, caramba. Ah, não. Então, enquanto isso continua processando, deixem-me ensinar um pouco nesse meio tempo. O plano aqui é pegar nossa habilidade _grill me_ (me interrogue) e precisamos essencialmente encontrar alguma maneira de transformá-la em um destino. Nós precisamos ir até o... nós essencialmente precisamos... estamos descobrindo a forma disso![[HITL_multi-Phase_Plans.png]]. É isso que estamos fazendo, descobrindo a forma das tarefas durante a sessão de interrogatório. E para ==transformar isso em um conjunto de ações executáveis== para a IA, nós essencialmente precisamos descobrir o destino. Precisamos saber para onde estamos indo. Precisamos saber a forma dessa coisa toda.

Então, eu penso que existem dois documentos essenciais que precisamos. Precisamos de um documento que registre o ==destino==. _(Ajustando o brilho da tela)_ Oh não, isso não está claro o suficiente. Aí está. Ainda não está claro o suficiente. Aí está. Precisamos de algo para documentar o destino e precisamos de algo para documentar a ==jornada==. Em outras palavras, precisamos de algo, um documento que vai definir com o que isso se parece em todas as suas histórias de usuário e definir uma 'definição de pronto' (_definition of done_). E então precisamos descobrir como será a divisão disso. Então é para lá que vamos em seguida.

Então, assim que terminamos com a sessão de interrogatório... Sim, parece ótimo. Fantástico, eu adorei. Ele respondeu... ele respondeu a 22 das suas próprias perguntas! Aí está. Isso é bem representativo de como se parece uma sessão de interrogatório."

Então, neste ponto agora, eu usei 25 mil tokens e tudo isso, ou grande parte dessas coisas, é ouro. Eu quero guardar isso. Tenho 25k de ótimos tokens ali. E o que quero fazer é resumir isso em algum tipo de documento de destino. Então, este é o próximo exercício, onde vamos escrever um Documento de Requisitos de Produto (PRD). E o Documento de Requisitos de Produto, ou PRD, é essencialmente essa a sua função: ele é o documento de destino. E meio que não importa qual o formato dele. Eu tenho um formato que prefiro e do qual gosto bastante, mas você pode simplesmente escolher o seu formato ou o que a sua empresa usa. Tudo o que estamos realmente fazendo é resumir o conceito de design que temos até agora.

Então, vamos tentar isso. Vou iniciar e apenas dizer 'escreva um PRD'.
Podemos dar uma olhada nessa habilidade agora (Escrevar um PRD). 

```
This skill will be invoked when the user wants to create a PRD. You may skip steps if tou dont consider them necessary.

1. Ask the user for a long, detailed description od the problem they want to solve and any potential ideas for solutions.

2. Esplore the repo to verify their assertions and understand the current state of codebase.

3. Interview the user relentlessly about every aspect of this plan until you reach a shared understanfing. Walk down each branch od the design tree, resolving dependencies between decisions one-by-one.

4. Sketch out the major modules you will need to build or modify to compete the implementation. 
   - Actively look for opportunities to extract deep modules that can be tested in isolation.
   - A deep module (as opposes to a shallow module) is one which encapsulates a lot of functionality ina a simple testable interface which rarely changes.
  - Check with user that these modules match their expectations. Check with the user which modules they want test written for.

5. Once you have a compelte undestanding of the problem and solution, use the template below to write the PRD. The PRD should be written as a local markdown file at `issues/prd.md`. Create the `issues/` directory if it doesn't exist. Do NOT submit a GitHub issue or call any external service.

<prd-template>

## Problem Statement
The problem that the user is facing, from the user's prespective.

## Solution
The solution to the problem, from the user's prespective

## User Stories
A long, numbered list of user stories. Each user story, should be in the format of:
1. As an <actor>, I want a <feature>, so that <benefit>

<user-story-example>
1. As a mobile bank customer, i quant to see balance on my accounts, so that i can make a better informed decisions about my spending.
</user-story-example>

This list of user stories should be extremely extensive and cover all aspects of the feature.

## Implementation Descisions

A list of implementations decisions that were made. This can include:
- The modules that will be build/modified
- the interfaces os those modules that will be modified.
- Technical calrifications from the developer.
- Architectural decisions
- API contracts
- Specific interactions
  
Do NOT include specific file path or code snippets. They mau end being outdate very quickly.

## Testing Decisions

A list of testing decisions that were made. Include:
- A description of what makes a good test (only test external behavior, not implementation details)
- Which modules will be tested
- Prior art for the test (i.e. similar types of testes in the codebase)
  
## Out of Scope

A description of the things that are out of scope for this PRD.

## Future notes

Any further notes about feature.

</prd-template>
```

Essa habilidade faz algumas coisas: primeiro, pede ao usuário uma descrição longa e detalhada do problema. Você pode usar 'escrever um PRD' sem o interrogatório (_grill_) antes, mas eu gosto de ser interrogado primeiro e depois escrever o PRD. Em seguida, você pode pedir que ele explore o repositório, o que já fizemos. Depois, que entreviste o usuário implacavelmente – tendo novamente uma espécie de sessão de interrogatório. E então começamos a montar um modelo de PRD.

Isso está disponível no repositório se você quiser dar uma olhada. Essencialmente, é assim que ele se parece: temos algumas declarações de problema, o problema que o usuário está enfrentando, a solução para o problema e um conjunto de histórias de usuário. E essas histórias de usuário meio que definem o que é isso. Como desenvolvedores, vocês provavelmente já viram coisas assim; o _Cucumber_ é uma linguagem que você pode usar para escrevê-las, ou nós mesmos apenas as escrevemos essencialmente. Depois temos uma lista de decisões de implementação que foram tomadas e, crucialmente, uma lista de decisões de teste também.

Então, vou rodar isso. (...) A primeira coisa que ele vai me dar é um conjunto de módulos propostos que ele quer modificar. Agora, há um motivo profundo para eu estar pensando nisso. Neste estágio, temos uma ideia. Nós detalhamos a ideia. Alcançamos uma espécie de entendimento do que estamos tentando fazer. E então precisamos começar a pensar no código, porque neste ponto, isso não é _specs to code_ (especificações para código). Isso não é onde ignoramos o código. Na verdade, mantemos o código em mente durante todo o processo. E a maneira como gosto de fazer isso é pensar num conjunto de módulos propostos para modificar. Vamos voltar a essa ideia de desenhar continuamente o seu sistema e manter o seu sistema em mente.

Ele está dizendo: 'recomenda-se teste para o serviço de gamificação, que é o único módulo profundo com lógica significativa'. Esses módulos parecem certos? Sim, isso é bom. E ele vai gerar um PRD. Agora, para facilitar a configuração, fiz com que ele crie um conjunto de _issues_ localmente. (...) Então, vou dizer 'sim' e gerar essa _issue_.

Vamos ver. Está aqui. Temos a declaração do problema: as pessoas se inscrevem em cursos; a solução; as histórias de usuário — 18 histórias de usuário, parece bom —, algumas decisões de implementação, limites de nível, etc. Isso é informação suficiente. Nós meio que esclarecemos para onde estamos indo e o que estamos fazendo. Então é isso que fazemos. Nós essencialmente temos uma sessão de interrogatório e criamos um ativo a partir disso.

**Agora, levantem a mão: Eu deveria estar revisando este documento?** Levanta a mão quem acha que eu deveria revisar o documento. Sim. Eu não leio. Eu não olho para essas coisas. A razão pela qual não olho para isso é: o que estou testando neste ponto? Como, quando eu leio, o que estou testando? Quais são os modos de falha que estou tentando testar? Eu sei que LLMs são ótimos em sumarização, porque eles são, eles são realmente bons em sumarização. Eu alcancei a mesma sintonia que o LLM, certo, usando a habilidade _grill me_, nós temos um conceito de design compartilhado. Então, se eu tenho um conceito de design compartilhado, tudo o que estou fazendo é essencialmente checar a capacidade do LLM de resumir. 

Por isso não costumo ler isso. Vamos fazer uma sessão de Q&A (perguntas e respostas) porque sinto que vocês estão ansiosos por isso. E depois acho que teremos uma pausa de cinco minutos para eu descansar a voz e vocês acompanharem os exercícios, se estiver tudo bem. [...]"

_(Após responder brevemente a perguntas sobre o Claude Code, a importância de entender o código profundamente e o limite da "zona inteligente" das IAs, ele retorna da pausa)_

"Certo. Agora temos o nosso destino. Como realmente chegamos lá? Como dividimos nosso PRD vago de forma que não coloquemos coisas na zona burra (_dumb zone_), ou seja, como dividimos naquele plano de múltiplas fases? ![[HITL_multi-Phase_Plans.png]]O que você provavelmente faria neste ponto é dizer: 'Claude, me dê um plano de múltiplas fases que me leve a este destino'. Isso faz sentido. Isso é o que vínhamos fazendo antes, mas eu tenho uma maneira melhor agora: gosto de criar um quadro Kanban a partir disso.

```
Executou /prd-to-issues
```

Um quadro Kanban é essencialmente um conjunto de tickets que você coloca na parede com relações de bloqueio entre si. [...] Você poderia se perguntar por que simplesmente não entregamos a geração das _issues_ nas mãos da IA e por que preciso me envolver aqui, revisando isso, já que ela nos deu uma boa seleção de tarefas? Minha visão é que isso é muito barato e rápido de se fazer depois do PRD. E eu já consigo ver alguns problemas aqui. Existe uma técnica muito, muito importante quando você está decidindo qual deve ser a forma dessa jornada. E isso remete a essa ideia clássica do livro _O Programador Pragmático_ chamada **'balas traçantes' (****tracer bullets****) ou fatias verticais**. Isso realmente transformou a maneira como penso em fazer a IA escolher suas próprias tarefas.

![[systemHaveLayers.png]]

Sistemas têm camadas, certo? Podem ser diferentes unidades implantáveis. Você pode ter um banco de dados que vive em algum lugar. Pode ter uma API que vive perto do banco de dados, mas em uma parte separada. Pode ter um front-end que vive em um lugar totalmente diferente. Como uma CDN. Ou, dentro dessas unidades implantáveis, você pode ter diferentes camadas dentro delas. Por exemplo, na base de código em que estamos trabalhando, temos uma tonelada de diferentes servidores de serviços. Temos um serviço de questionários, um serviço de equipe, serviço de usuário, serviço de cupons, serviço de cursos. E esses serviços têm dependências uns dos outros. Então eles são meio que camadas individuais. Bem. O que notei é que **a IA adora programar horizontalmente**. Ela adora programar camada por camada. Em outras palavras, na fase um, ela fará todas as coisas do banco de dados, todo o esquema... Então ela irá para a fase dois e fará toda a parte da API. E então ela adicionará o front-end por cima disso.

Alguém pode me dizer o que há de errado com essa imagem? Por que não é uma boa coisa a se fazer? [...] Exatamente. **Você não obtém feedback do seu trabalho até que tenha começado ou completado a fase três**. Até chegar à fase três, você não está testando se todas as camadas funcionam juntas. Você não tem um sistema integrado para testar.

![[useTracerBullets.png]]

Em vez disso, você precisa pensar em fatias verticais. **Você precisa pensar em fatias finas de funcionalidade que cruzam todas as camadas que você precisa**. E essa é uma forma muito melhor de trabalhar, muito melhor para a IA trabalhar também, porque significa que no final da fase um, ou durante a fase um, ela consegue obter feedback de todo o seu fluxo.

[...] Dividimos o PRD em _issues_ de balas traçantes (_tracer bullets_). Uma bala traçante, a propósito... é quando você é um atirador antiaéreo olhando para o céu à noite, se estiver apenas atirando balas normais, não faz ideia no que está atirando. Balas traçantes têm um pouco de fósforo para brilhar enquanto voam. Isso significa que a cada seis balas, mais ou menos, você realmente vê uma linha no céu. Você tem feedback de onde está mirando. A ideia aqui é que **aumentamos nosso nível de feedback e obtemos feedback quase instantâneo do que estamos construindo**, porque, sem isso, a IA está programando às cegas até chegar às fases finais.


```
<prd-to-issues>

# PRD to Issues

Break a PRD into independently-grabbable issues using vertical slices (tracer bullets), written as local markdown files.

## Process

### 1. Locate the PRD

Ask the user for the PRD file path (e.g. `issues/prd.md`).

If the PRD is not already in your context window, read it from the file.

### 2. Explore the codebase (optinal)

If you have not already explored the code base, so so to understand the current state of the code.

### 3. Draft vertical slices

Brask the PRD into **tracer bullet** issues. Each issue is a thin vertical slece that cuts through ALL integrations layers end-to-end, NOT a horizontal slcie of one layer.

Slices mau be 'HITL' or 'AFK'. HITL slices require a human interaction, such as an architectural decision or a design review. AFK slices can be implemented and merged without human interaction. Prefer AFK over HITL where possible.

<vertical-slice-rules>
- Each slice delivers a narrow but COMPLETE path through every layer (schema, API, UI, tests)
- A completed slice is demoable or verifiable on its own
- Prefer many thin slices over a few thick ones
</vertical-slices-rules>

### 4. Quiz the user

Present the proposed breakdown as numbered list. For each slice, show:

- **Title**: short descripitive name
- **Type**: HITL / AFK
- **Blocked by**: which other slices (if any) must complete frist
- **User stories convered**: Which user stories from the PRD this addresses
  
Ask the user:

- Does the granularity feel right? (too coarse / too fine)
- Are the dependecy relationships correct?
- Sould any slices be merged or split further?
- Are the correct slices marked as HITL and AFK? 
  
Iterate until the user approves the breakdown.

### 5. Create the issue files

For each aprroved slice, write a markdown file in `issues/` using the naming pattern `issues/NNN-short-title.md` (e.g. `issues/001-add-user-auth.md`).

Number issues starting from the next available number (check what files already exist in `issues/`).

Create files in dependency order (blockers frist) so you can reference real filenames in the "Blocked by" field.

...
```

[...] O que vejo aqui é que, mesmo tendo mandado fazer fatias verticais, a IA está propondo criar o serviço de gamificação primeiro, por conta própria. Isso me parece uma fatia horizontal. O que eu quero ver na primeira fatia vertical, especialmente, é ver algumas mudanças no esquema, quero ver um novo serviço sendo criado e quero uma representação mínima disso no front-end. Quero que ela atravesse as fatias verticais, e não apenas as horizontais.

Isso faz sentido? Ok. Então, vou dar uma bronca na IA. 'Garoto mau!' Não, não vou gastar tokens apenas fazendo piada. Hum, então escreverei apenas: 'a primeira fatia é muito horizontal', vou começar com isso e ver se ela entende.

Isso faz sentido como conceito? O que eu realmente gosto em voltar a esses livros antigos é que estamos tentando, na época atual, verbalizar as melhores práticas de software em inglês. E esses livros, livros de 20 anos atrás, já fizeram isso. É uma mina de ouro absoluta se você quiser jogar isso nos seus prompts.

Mas, mesmo com isso, a IA não fará um trabalho perfeito todas as vezes. Então (analisando outra sugestão da IA): 'conceder pontos pela conclusão da lição, visível no painel'. Sim, essa é uma bela fatia vertical, porque definitivamente é um grande volume de trabalho. Ela vai abranger várias histórias ali, mas vamos ver algo visível no final, e a IA poderá simplesmente adicionar mais coisas a partir disso. Entendem por que isso é preferível à primeira opção? Legal. Parece ótimo.

Então estamos chegando mais perto agora... _(Ele abre para algumas perguntas rápidas da plateia enquanto aguarda o processamento das issues)_...

Ok. Então, após algumas aprovações, devemos acabar com um conjunto de _issues_. Agora, essas _issues_ que estamos criando são projetadas para serem capturadas de forma independente, o que significa que o quadro Kanban acaba ficando mais ou menos assim![[ticketsComRelacaoIndenpendente.png]], onde você tem essencialmente um conjunto de tickets com um monte de relações independentes. Essa precisa ser feita antes daquela... mas isso significa que você pode começar a **paralelizar**.

**Você pode começar a ter vários agentes trabalhando ao mesmo tempo nessas tarefas**. Porque sim, esta primeira tarefa precisa ser feita primeiro, mas então essas duas próximas podem ser capturadas ao mesmo tempo por agentes independentes. Levantem a mão se vocês já fizeram algum tipo de trabalho de paralelização com agentes. Certo. Isso permite que você transforme esses planos de maneira otimizada em Grafos Acíclicos Direcionados, essencialmente, onde você pode ter três fases ocorrendo.

Onde você tem a fase um. Deixe-me pegar e mover isso... acima desta linha aqui, você faz essa. Então, na fase dois, você faz essas duas abaixo dela. E então, na fase três, você faz essa terceira e a adiciona lá. E quando você pensa que poderia haver... esse é um plano relativamente simples, mas você poderia ter muitos planos diferentes operando todos de uma vez. Isso significa que você pode fazer uma paralelização muito legal, e falaremos mais sobre isso daqui a pouco.

**Mas é por isso que prefiro uma configuração de quadro Kanban como esta a um plano sequencial, porque um plano sequencial só pode realmente ser pego por um agente**. Então, esse... para onde foi, aqui? Sim, este plano aqui, este é realmente apenas um loop, certo? Apenas um agente pode trabalhar neles porque temos fases numeradas e elas não são paralelizáveis. Faz sentido? Legal.

Então, temos nossas _issues_. Ah, qual é. Pare de me pedir para... Ah, não. Ele está criando no GitHub. Eu realmente não quero isso. Ah não. Seu tolo! Crie-as em _issues_ em vez disso. Não, isso não é preciso o suficiente. Uh, seu tolo. Crie-as em arquivos markdown locais, referenciando a versão local. Desculpem por isso.

Então, uma vez que chegamos a este ponto, temos um monte de _issues_ localmente sobre as quais podemos começar a iterar e implementar. **E é neste ponto que o humano sai do ciclo (****leaves the loop****).**

Então, até agora, deixe-me abrir uma visão geral adequada desse tipo de fluxo que estamos explorando aqui.
![[fluxoOverview.png]]
Até agora, pegamos uma ideia... dar um zoom nisso um pouco para o pessoal no fundo... e nós nos interrogamos sobre a ideia. Podemos pular a parte de pesquisa e protótipo, mas transformamos isso em um PRD, em um documento de destino. Em seguida, transformamos esse PRD em um quadro Kanban, e todas essas etapas são revisadas por humanos. **E agora, na fase de implementação, nós damos um passo atrás e deixamos um agente trabalhar através desse quadro Kanban, ou múltiplos agentes trabalharem através do quadro Kanban.**

O que isso significa é que, sim, passamos muito tempo planejando aqui, mas isso significa que enfileiramos muito trabalho para o agente. **Podemos pensar nisso meio que como o turno do dia e o turno da noite. Este é o turno do dia para o humano, certo? Planejando tudo, deixando tudo pronto, e então, uma vez que passamos isso para o turno da noite, a IA pode simplesmente trabalhar longe do teclado (AFK).**

Mas como isso se parece? Bem, então eu vou apenas... Oh sim. Apenas permitir. É perfeito. Então, isso se parece com o seguinte, se formos para o próximo exercício, que é, na verdade, o último exercício aqui: rodar o seu agente AFK. Agora, eu chamei isso de, hum, Ralph, na verdade, porque é essencialmente um loop de Ralph, e esse prompt aqui, eu quero examinar bem de perto.

[prompt]
``` 
# ISSUES  
  
Local issue files from `issues/` are provided at start of context. Parse them to understand the open issues.  
  
You will work on the AFK issues only, not the HITL ones.  
  
You've also been passed a file containing the last few commits. Review these to understand what work has been done.  
  
If all AFK tasks are complete, output <promise>NO MORE TASKS</promise>.  
  
# TASK SELECTION  
  
Pick the next task. Prioritize tasks in this order:  
  
1. Critical bugfixes  
2. Development infrastructure  
  
Getting development infrastructure like tests and types and dev scripts ready is an importan

3. Tracer bullets for new features

Tracer bullets are small slices of functionality that go through all layers of the system, allowing you to test and validate your approach early. This helps in identifying potential issues and ensures that the overall architecture is sound before investing significant time in development.

4. Polish and quick wins
5. Refactors
   
# Explorations

Explore the repo.

# Implementation

Use `/tdd` to complete the task.

# FEEDBACK LOOPS

Before committing, run the feedback loops:

- `npm run test` to run the tests  
- `npm run typecheck` to run the type checker

# COMMIT

Make a git commit. The commit message must:

1. Include key decisions made
2. Include files changed
3. Blockers or notes for next iteration
   
# THE ISSUE

If the taks is complete, move te issues to `issues/done`.

If teha task is not complete, add a note to the issues file with what was done.

# FINAL RULES

ONLY WORK ON A SINGLE TASK.
```

A primeira coisa que ele faz aqui é que essencialmente vamos rodar o Claude e vamos basicamente tentar encorajá-lo a trabalhar, hum, de forma completamente AFK.

Eu mostrarei a vocês como é o script para isso em um minuto, mas você diz: ok, arquivos locais de _issues_ da pasta _issues_ são fornecidos no início do contexto. A maneira como fazemos isso é, se você olhar dentro de `once.sh`

``` bash
once.sh
#!/bin/bash

issues=$(cat issues/*.md 2>/dev/null || echo "No issues found")
commits=$(git log -n 5 --format="%H%n%ad%n%B---" --date=short 2>/dev/null || echo "No commits")
prompt=$(cat ralph/prompt.md)

claude --permission-mode acceptEdits \
  "Previous commits: $commits Issues: $issues $prompt"
```

aqui dentro do repositório, nós temos, hum, é essencialmente apenas um script bash onde pegamos todas as _issues_, hum, que estão dentro de arquivos _markdown_ e as concatenamos em uma variável local. Então, essa variável de _issues_ contém todas as _issues_ que estão em todo o nosso backlog. Depois pegamos os últimos cinco commits (explicarei o porquê em um minuto). E então pegamos o prompt e simplesmente rodamos o Claude Code com o modo de permissão de aceitar edições e então essencialmente passamos a ele toda a informação.

É assim que a implementação se parece. Então é assim que uma versão muito, muito simples desse tipo de loop se parece. E, claro, isso não é um loop. Isso é apenas executá-lo uma vez. O loop está na versão AFK
``` bash
afk.sh
#!/bin/bash  
set -eo pipefail  
  
if [ -z "$1" ]; then  
echo "Usage: $0 <iterations>"  
exit 1  
fi  
  
# jq filter to extract streaming text from assistant messages  
stream_text='select(.type == "assistant").message.content[]? | select(.type == "text").text // empty'  
  
# jq filter to extract final result  
final_result='select(.type == "result").result // empty'  
  
for ((i=1; i<=$1; i++)); do  
	tmpfile=$(mktemp)  
	trap "rm -f $tmpfile" EXIT  
	  
	commits=$(git log -n 5 --format="%H%n%ad%n%B---" --date=short 2>/dev/null || echo "No commits")  
	issues=$(cat issues/*.md 2>/dev/null || echo "No issues found")  
	prompt=$(cat ralph/prompt.md)  
	  
	docker sandbox run claude . -- \
		--verbose \  
		--print \  
		--output-format stream-json \  
		"Previous commits: $commits Issues: $issues prompt" \  
	| grep --line-buffered '^{\' \  
	| tee "$tmpfile" \  
	| jq --unbuffered -rj "$stream_text"  
	  
	result=$(jq -r "$final_result" "$tmpfile")
	if [[ "$result" == *"<promise>NO MORE TASKS</promise>"* ]]; then
	  echo "Ralph complete after $i iterations."
	  exit 0
	fi
done

```

aqui em cima, que é, hum, um pouco mais complicada. E a parte crucial aqui é que estamos rodando isso em um sandbox do Docker também. Então, eu não quero que vocês instalem o Docker em seus laptops porque seria tipo, você precisa baixar uma imagem especial e nós acabaríamos com o Wi-Fi da conferência se fizéssemos isso. Então, eu vou demonstrar isso para vocês, mas vocês, hum, não precisarão rodar isso vocês mesmos. Falarei sobre isso em um minuto. Mas essencialmente esse loop 'once' (único) aqui, estamos apenas rodando uma versão da coisa que vamos repetir de novo, e de novo, e de novo.

Então, essa é meio que a versão com o 'humano no ciclo' (_human in the loop_). E isso é essencial. Executar isso de novo e de novo é essencial porque você vai ver o que o agente faz e como ele acaba trabalhando. E qualquer ajuste que você precise adicionar ao prompt, você poderá fazer. Vamos para o ==prompt==. Hum, então, os arquivos de _issues_ locais estão sendo passados. Você vai trabalhar apenas nas tarefas AFK. Isso faz sentido. Se todas as tarefas AFK estiverem completas, exiba aquela mensagem de 'sem mais tarefas'. E então, a próxima coisa, pegue a próxima tarefa.

Então, o que estamos fazendo aqui é essencialmente rodar um backlog, ou curar um backlog que o nosso agente AFK vai pegar. Esse é o propósito de todas essas, hum, configurações no início, desde aquilo até este quadro Kanban aqui. Estamos essencialmente criando um backlog de tarefas para o turno da noite pegar, e o turno da noite, esse tipo de prompt do Ralph aqui, tem sua própria ideia sobre o que é uma boa tarefa. Então, a seguir, pegue... Eu falei sobre paralelização, vou mostrar isso mais tarde, mas isso aqui é essencialmente um loop sequencial; vamos rodar apenas um agente de codificação por vez. Esta é uma boa maneira de, essencialmente, começar a se familiarizar com a coisa.

Ele prioriza correções críticas de bugs, infraestrutura de desenvolvimento, depois balas traçantes (_tracer bullets_), polimento, ganhos rápidos e refatorações. E então temos uma instrução muito simples sobre como completar a tarefa. Então, exploramos o repositório, usamos TDD para completar a tarefa (chegarei a isso mais tarde). E então rodamos alguns ciclos de feedback. Vamos tentar isso e ver o que acontece. Muito bem. Ele criou os arquivos de _issues_. Devemos estar prontos para começar. Vou cancelar isso, limpar, e vou rodar... onde está? `ralph once.sh`. E fiquem à vontade, se estiverem acompanhando, para fazer a mesma coisa.

Podemos ver que ele está apenas rodando o Claude aqui dentro, com o prompt e com todas as _issues_ que foram passadas. E enquanto ele está fazendo o que tem que fazer, vocês provavelmente têm algumas perguntas sobre essa configuração e sobre as decisões que tomei para essencialmente delegar toda a minha programação para a IA, certo?. Então vamos fazer um Q&A rápido enquanto ele, hum, se estabelece. Ok, vou apenas remover esses. 'Como você retém decisões negativas, coisas que você decidiu contra e a justificativa ao persistir os resultados da sessão do _Grill Me_?'.

Uma ótima pergunta. Essa tem uma resposta muito simples, que é, no PRD, hum, na seção de escrever um PRD, há algo no final, uma seção de coisas que estão fora do escopo. Então, as coisas que não vamos abordar neste PRD, o que é muito importante para fornecer uma 'definição de pronto' (_definition of done_). Sintam-se à vontade para enviar no Slido se tiverem mais perguntas. 'Qual é o meu fluxo de trabalho para front-end?' Ok, essa é uma ótima pergunta. Vou responder a isso em um minuto, eu acho. 'Como lidar com agentes produzindo mais código do que podemos revisar, como paralelizar adequadamente e usar múltiplos agentes de forma separada?' Ok, há... hum, há duas perguntas aí.

Hum, levantem a mão se vocês sentem que estão fazendo mais revisão de código agora do que costumavam fazer. Sim, definitivamente. Hum, eu não acho que haja uma maneira de evitar isso. Se delegamos toda a nossa programação a agentes, notem que a implementação aqui é realmente a única parte AFK. Depois, precisamos também fazer QA do trabalho e revisar o código do trabalho, certo?. E se estamos rodando esses loops onde essencialmente ele vai implementar quatro _issues_ em uma, é difícil combinar isso com o ditame de que você deve manter os _pull requests_ pequenos e autocontidos, certo?. Tipo, _pull requests_ pequenos e autocontidos significam que você precisa fazer menos loops, ou loops mais curtos, ou algo assim.

Ou talvez você faça uma grande pilha de PRs, mas isso parece horrível também. Ainda é apenas mais código separado para revisar. Sinceramente, eu ainda não sei qual é a resposta para isso. Acho que precisamos apenas estar preparados para fazer mais revisão de código essencialmente, o que não é divertido. Não é algo divertido de se dizer. Não é, não sei, não me sinto bem dizendo isso, mas acho que é provavelmente a direção em que as coisas estão indo. É uma ótima pergunta. Hum, podemos pegar algumas perguntas da plateia também?. Não vamos usar o microfone, mas, hum, levante a mão se você tem uma pergunta para mim agora mesmo.

**Pergunta**: Então, a abordagem parece muito linear, de uma ideia até o QA. Claro que o mundo real é muito mais confuso. Então você tem todas essas ideias que estão em paralelo e o quadro geral, e enquanto você está trabalhando em algo, outra coisa aparece". Sim. "Como você lida com a bagunça, como você dá feedback?".
**Resposta**: Ótima pergunta. Então a pergunta foi: se isso tudo parece ótimo se você for um desenvolvedor solo, mas, na verdade, como você implementa isso em uma equipe, como você reúne o feedback da equipe sobre isso?. E minha resposta para isso é que se você tem uma ideia lá em cima, e essencialmente o tipo de jornada da ideia até o destino é algo que você precisa descobrir com a equipe, certo?. Então todas essas coisas aqui em cima, isso é meio que coisa de equipe, entende o que quero dizer?. Então, se você tem uma ideia e faz uma sessão de interrogatório (_grill me_) sobre ela, e você tem uma pergunta que não sabe responder, então você precisa envolver sua equipe no ciclo, como descrevemos antes.

Então você pode precisar dizer: "Ok, nós só precisamos construir um protótipo disso. Precisamos realmente discutir isso. Precisamos de algo com o qual os especialistas do domínio possam brincar". Oh, ok. Podemos precisar integrar uma biblioteca de terceiros nisso. Podemos precisar fazer algumas pesquisas. Podemos precisar realmente bater uma bola de um lado para o outro sobre isso e encontrar um serviço de terceiros do qual possamos tirar o máximo proveito. Podemos precisar voltar com a informação que reunimos ali para a fase de ideia. Então, todo o caminho até a espécie de PRD e a jornada, isso é algo em que você precisa envolver a sua equipe.

É aí que esses ativos serão compartilhados e debatidos, e você terá pedidos de comentários sobre eles, e esse ciclo vai continuar moendo e moendo até você descobrir para onde está indo. Uma vez que você descubra para onde está indo, então você pode começar a fazer o quadro Kanban, a implementação. Mas isso é essencialmente super discutível e você ficará saltando para frente e para trás entre as fases. Isso faz sentido? Sim.

"Você não precisaria de um PR para o seu protótipo?". Diga de novo. Desculpe. "Você não gostaria de ter um PR para o seu protótipo?". A pergunta foi: "Você quer passar por toda essa sessão apenas para criar um tipo de protótipo?. Você não precisa de um PRD para o seu protótipo também?". Vamos falar rapidamente sobre protótipos por um segundo.

Houve uma pergunta sobre como fazer isso funcionar para o front-end, tipo, como você faz, porque o front-end é muito sensível aos olhos humanos. Você precisa de olhos humanos olhando para o front-end o tempo todo para ter certeza de que está bom. A IA realmente não tem olhos. Ela pode olhar para o código, mas o front-end é multimodal. E assim, minhas experiências tentando conectar a IA em, digamos, um _agent browser_ ou Playwright MCP para dar a ela ferramentas que a permitam olhar através de um front-end e meio que olhar para imagens, mas na minha experiência, hum, ela ainda não é muito boa nisso e não consegue criar um front-end legal em uma base de código madura. Ela meio que consegue cuspir um.

Mas o que ela pode fazer é, você diz: "Ok, hum, eu quero algumas ideias sobre como, hum, esse front-end pode parecer. Me dê três protótipos, hum, entre os quais eu possa clicar em uma rota descartável, que eu possa decidir qual parece melhor". E você pega o ativo desse protótipo e então o alimenta de volta na sessão de interrogatório, ou você obtém feedback sobre ele. Blá blá blá blá blá. Responde à sua pergunta, tipo, o protótipo é apenas, sabe, é bagunçado, o objetivo dele é te dar feedback no início do processo. Então essa é uma ótima maneira de trabalhar com código front-end. Ótima maneira de olhar para a arquitetura de software em geral.

Vamos para mais uma pergunta, sim. "Sim, no seu sistema. Como você integra o respeito a uma arquitetura, um design com contratos de API e o encaixe com as restrições de segurança de um sistema maior, todos os tipos de restrições como essa?". Sim, tem muita coisa nessa pergunta.

A pergunta foi: "Como você se adequa à arquitetura existente, como você faz, hum, como você faz com que esteja em conformidade com os padrões de código da sua base de código, ou...". "Sim, arquitetura, design, API, regras de segurança que restringem seus designs". Sim, vou responder a isso daqui a pouco, se estiver tudo bem.

Então, espero que tenhamos começado a cozinhar algumas coisas. Ele está apenas apitando na fase de exploração aqui. Tentado a apenas começar a rodar isso AFK. Talvez eu vá, talvez não. Hum, o que ele está essencialmente fazendo é explorar o repositório. Ele vai então começar a implementar com base no que queríamos. Vamos na verdade pegar mais uma pergunta enquanto ele está rodando. Sim. Sim.

Então a pergunta foi: "Por que você não coloca a IA para fazer QA?". IA para fazer QA, eu acabei de ter uma sobrecarga de jargões por um segundo. "Hum, por que você não coloca a IA para testar seu próprio código?". Agora, é claro que você absolutamente pode. E eu acho que, enquanto ele está fazendo, enquanto está cozinhando aqui, ok, ele tem uma imagem clara da base de código. Ele está avaliando as issues. Está fazendo a issue 02 ser a próxima tarefa. Eu, novamente, vou mostrar isso a vocês daqui a pouco. Eu acho que... hum, porque você definitivamente deveria ter uma etapa de revisão automatizada como parte da implementação.

Então, você tem a sua implementação. Você deve então, já que os tokens são bem baratos e a IA é, na verdade, muito boa em revisar coisas, pedir que ela revise seu próprio código antes de você fazer o QA (_Quality Assurance_ - garantia de qualidade) dele. Eu descobri que isso captura uma tonelada de bugs diferentes.

E a maneira como isso funciona... vou apenas fazer um pequeno diagrama... é que se você tiver, digamos, uma implementação que meio que usou um monte de tokens na zona inteligente (_smart zone_), se você pedir para ela tentar fazer a revisão ali, ela estará fazendo a revisão na zona burra (_dumb zone_). E assim, a IA revisora será mais burra do que a que realmente implementou o código.

Se imaginarmos que esta é a... vamos ser consistentes, essa é a revisão. Aquela ali é a implementação. Considerando que, se você limpar o contexto, estará essencialmente apto a apenas fazer a revisão na zona inteligente, que é onde você deseja estar.

Vamos ver como está a nossa implementação. Ok, bom. Ela está gerando uma migração. Parece muito bom. Estamos vendo algum código sendo cuspido. E enquanto isso eu penso tipo, 'aha, aqui vamos nós': TDD.

Vamos falar sobre TDD e então acho que teremos mais uma pequena pausa. Eu descobri que o TDD é absolutamente essencial para tirar o máximo proveito dos agentes. Levantem a mão se vocês sabem o que é TDD. Legal. Ok. TDD é _Test-Driven Development_ (Desenvolvimento Guiado por Testes).

O que ele faz, essencialmente, é algo chamado vermelho, verde, refatorar (_red, green, refactor_). E se você olhar na base de código, será capaz de encontrar uma habilidade que descreve muito bem como fazer esse ciclo e ensina a IA a fazer isso.

Então, o que ela faz é escrever primeiro um teste que falha. Ela diz: 'ok, detalhei a ideia do que estou fazendo e vou apenas escrever um único teste que falhe, e então preciso fazer com que a implementação passe'. Descobri que, antes de mais nada, isso adiciona testes à base de código, e tende a adicionar bons testes a ela.

E assim temos esse tipo de serviço de gamificação. Parece que ele está usando alguns elementos já existentes para criar um banco de dados de teste. O teste falha porque o módulo ainda não existe. Ok, confirmamos o vermelho. E então ela vai, e com sorte roda e passa.

Eu descobri que... levantem a mão se vocês já viram a IA escrever testes ruins. Sim, ela tende a tentar trapacear nos testes porque faz as coisas em camadas: fará toda a implementação e depois fará toda a camada de testes logo em seguida.

Hum, vou apenas dizer sim, você tem permissão para usar [npx vitest]. E usando essa técnica, geralmente é muito mais difícil de trapacear, porque você está essencialmente instrumentando o código antes de escrevê-lo. Por isso, acho que o TDD é muito, muito bom para os lugares onde você consegue utilizá-lo. Na verdade, é tão bom que eu meio que adaptei toda a minha técnica para conseguir fazer o TDD funcionar melhor. 

Consigo ver algumas pálpebras caindo. Está muito quente aqui dentro. Vocês podem imaginar como está quente aqui em cima. Vamos fazer mais uma pausa de cinco minutos. Acho que voltaremos às quinze para a hora, faremos uma pausa generosa. E voltaremos em cerca de seis ou sete minutos, e vou falar sobre como, hum, eu penso sobre os módulos, penso sobre como construir uma base de código para tornar isso possível.

_(Após a pausa)_ Eu estive dando uma mexida com a IA aqui e acabamos com um _commit_. Então, temos algo para testar. A _issue_ número dois está concluída. Aqui está o que foi feito. É mais ou menos isso que acontece quando um 'loop de Ralph' termina, você acaba com um pequeno resumo. Hum, e agora temos algo em que podemos fazer QA (Garantia de Qualidade), porque rodamos os ciclos de feedback, ou porque fizemos as balas traçantes (_tracer bullets_), já que dissemos: 'ok, nos dê algo revisável no final disso'. Nós podemos imediatamente ir lá e fazer o QA.

Agora, não há nada menos empolgante do que assistir outra pessoa fazendo QA em algo, mas espero que possamos brincar um pouco. Vamos apenas verificar se, hum, se funciona de alguma forma. Na verdade, antes de ir para lá, eu só quero meio que repassar o que acabou de acontecer: vemos que ela criou algumas coisas no painel e depois rodou os ciclos de feedback. Então, ela rodou os testes e a checagem de tipos.

Agora, o TDD é obviamente muito importante e é muito importante porque esses ciclos de feedback são essenciais para a IA; essenciais para fazer com que a IA produza qualquer coisa razoável. Porque sem isso a IA está programando totalmente às cegas, certo? Você tem que ter... hum, se a sua base de código não tem ciclos de feedback, você nunca, nunca, nunca vai obter uma IA decente, ou um resultado decente da IA. E, muitas vezes, o que você vai descobrir é que a qualidade dos seus ciclos de feedback influencia o quão bem a sua IA consegue programar. Essencialmente, esse é o teto. Então, se você está obtendo resultados ruins da sua IA, frequentemente você precisa aumentar a qualidade dos seus ciclos de feedback. Falaremos sobre como fazer isso em um minuto.

Então, ela rodou, hum, `npm run test`, `npm run type check`. Ela encontrou um erro de tipo e precisou consertar isso com um pouco de mágica do TypeScript. Muito bom. Sim. Um erro de digitação (typo), nos limiares de nível (_level thresholds_), um número. Ok. Vocês veem por que eu parei de ensinar TypeScript? Porque agora a IA simplesmente sabe tudo. Hum, então, ela rodou os testes e passou, e parece estar tudo bem.

Então agora acabamos com 284 testes neste repositório. Muito bom. Eu acho, hum, o front-end muito difícil de testar aqui. Estamos testando essencialmente apenas o serviço. Então, criamos um serviço de gamificação, se olharmos aqui em cima, e então temos um teste para esse serviço. Vocês podem ver o serviço e o teste em si.

Agora, se eu estivesse fazendo uma revisão de código aqui, eu iria primeiro revisar os testes, me certificar de que os testes estão testando coisas razoáveis, e depois eu iria meio que revisar o código em si, apenas para garantir que não está fazendo nada muito louco. O essencial é que eu preciso de fato, hum, olhar para o painel. Vou fazer login como estudante.

Oh, se ele me permitir. Talvez não me permita. Vamos lá, garoto. Aí está. Vamos entrar como Emma Wilson. Entrar em cursos. Hum, digamos que eu tenha uma introdução ao TypeScript. Continuar aprendendo. Hum, sim, eu completei esta lição. Algo deu errado. Imagino que seja porque eu não tenho, hum, ocorreu um erro de SQLite. Não tenho a tabela correta. Então, preciso de uma tabela de _point events_ (eventos de pontos). _Point events_ é um nome estranho para uma tabela. Não tenho certeza do que ela estava pensando lá.

Hum, vamos suspender. Vamos rodar, hum, `npm db migrate` ou push, acho. Não consigo me lembrar qual era, mas vocês meio que pegaram a ideia, certo? Eu não vou submeter vocês a me assistir fazendo QA porque é muito chato. Hum, mas neste ponto eu essencialmente voltaria. Eu iria, hum... deixem-me abrir o projeto novamente. Hum, e eu... este, este é um momento crucial.

Hum, e é tão importante, hum, fazer o QA manualmente aqui porque o QA... Oh céus. Oh céus. O que está dando errado? Aí está. O QA é a forma como eu, então, hum, imponho as minhas opiniões de volta na base de código, a forma como imponho o meu 'bom gosto' (_taste_). O que você descobrirá com frequência é que, hum, há equipes por aí que estão tentando automatizar tudo, tipo, todas as partes desse processo. E eles tendem a... se você tentar meio que automatizar a criação da ideia, automatizar o QA, automatizar a pesquisa, automatizar o protótipo, você acaba com aplicativos que, eu sinto, simplesmente não têm personalidade/gosto e são ruins. Talvez eles simplesmente não funcionem, ou nem funcionem como planejado, ou simplesmente não pareçam feitos com IA. Você precisa de um toque humano ao construir essas coisas, porque sem isso, você acaba com um trabalho genérico e malfeito (_slop_), e nós não estamos produzindo lixo aqui. Estamos tentando produzir algo de alta qualidade, e é para isso que o QA serve.

Então, vou fazer duas coisas nesta seção final, a primeira será dizer a vocês como... provavelmente há uma pergunta na mente de vocês que é: =="digamos que eu tenha uma base de código na qual estou trabalhando e seja uma base de código ruim. É uma base de código muito complicada, onde a IA simplesmente nunca faz um bom trabalho e, na verdade, talvez a maioria dos humanos que entram nessa base também não faça um bom trabalho==". Como eu melhoro essa base de código? E a segunda coisa é que vou mostrar a vocês a minha configuração para paralelização. Então, vamos começar com o código ruim primeiro.

Agora, onde está? Onde está o diagrama? Aqui está.
![[tipoIdealDeModulo_filosofiaDoDesignDeSoftware_JohnOusterhout.png]]
Em seu livro, _A Filosofia do Design de Software_, John Ousterhout fala sobre o tipo ideal de módulo. E vamos imaginar que você tem uma base de código que se parece com isso: cada um desses blocos aqui são arquivos individuais. E esses arquivos exportam coisas deles. Sabe, eles têm coisas que você puxa dos arquivos e depois usa em outras coisas. E assim, você pode ter essas dependências estranhas onde este arquivo aqui pode depender deste arquivo, ou pode depender daquele outro arquivo, por exemplo.

Ora, se esses arquivos são pequenos e não exportam muitas coisas, então John os chamaria essencialmente de "módulos rasos" (_shallow modules_), onde eles não são muito... eles se parecem meio que com isso. Se eu... na verdade, não, não consigo fazer um bom diagrama disso. Eles são essencialmente muitos e muitos pedaços pequenos. Isso é difícil para a IA navegar porque ela não entende muito bem as dependências entre tudo. Ela não consegue descobrir onde tudo está. Sabe, ela tem que meio que rastrear manualmente por todo o grafo e dizer "ok, este depende deste, que depende deste". 
![[iAtentandoRastrearOsModulos_Rasos.png]]
E então também é difícil testar isso, porque onde você desenha seus limites de teste aqui? Você testa cada módulo individualmente, tipo apenas literalmente desenhando um limite de teste? Não, não faça isso.

Ao redor deste, e depois talvez outro limite de teste ao redor do próximo, e depois do próximo? Ou você deveria fazer grandes grupos disso, deveria dizer "ok, vamos testar todos esses módulos relacionados juntos e apenas, sabe, torcer e rezar para que funcionem"? Isso significa que eu acho que testes ruins geralmente se parecem com isso, onde a IA essencialmente tenta envolver cada pequena função em seu próprio limite de teste e então apenas testa se elas funcionam individualmente.

Mas o que isso faz é significar que quando, digamos, este módulo aqui chama aqueles dois (então ele depende de ambos), este módulo pode ordenar as funções incorretamente ou pode haver coisas dentro desse pobre módulo que valem a pena ser testadas por conta própria. E se você então envolve isso em um limite de teste, o que você faz? Você faz o _mock_ (simulação) dos outros dois módulos.

Como isso funciona? Portanto, descobrir como construir uma base de código que seja fácil de testar é essencial aqui, porque se nossa base de código for fácil de testar, então nossos ciclos de feedback serão melhores e a IA fará um trabalho melhor nela. Faz sentido?
![[mockDosOutrosDoisModulosParaTestes.png]]
Então, com o que se parece uma boa base de código? Bem, não se parece com aquilo. Ela se parece com isso, 
![[comoUmaBoaCodeBaseDeveSer.png]]
onde você tem o que John Ousterhout chama de "módulos profundos" (_deep modules_). Módulos que têm uma pequena interface ali que expõe uma interface pequena e simples, mas que têm muita funcionalidade dentro deles. Agora, o que isso significa é que eles são fáceis de testar, porque você apenas... digamos que haja uma dependência entre este e aquele. Minha seta está funcionando? Sim, aí está. Então, o que você faz é apenas envolver um grande limite de teste ao redor daquele único módulo, ao redor deste aqui em cima.

E você vai capturar muitas coisas boas, porque há muita funcionalidade que você está testando e, na verdade, o chamador, a pessoa que chama o módulo, terá uma interface simples para trabalhar. Então não é tão complicado. Isso faz sentido. Módulos profundos versus módulos rasos. Isso é bom. Essa versão rasa é ruim. **E o que eu percebo é que sem ajuda, ou se você não vigiar a IA com cuidado, ela vai produzir uma base de código que se parece com a rasa**. Então você precisa ser muito, muito cuidadoso ao direcioná-la.

E é por isso também que, se olharmos dentro do PRD... para onde foi o PRD? Está dentro das issues. Está dentro do sistema de gamificação. Não encontrado. Claro que não. Aqui está. Então, eu tenho aqui dentro o modelo de dados, os módulos. Ele está especificamente dizendo: "ok, este serviço de gamificação é um novo módulo profundo em torno do qual vamos testar". Ele terá essa interface em particular e terá... ok, estamos modificando o serviço de progresso também. Estamos modificando a rota da lição, modificando as rotas do painel, etc. Então eu estou sendo bem específico sobre os módulos que estou editando e estou me certificando de manter esse mapa de módulos em mente o tempo todo durante o planejamento e, depois, durante a implementação.

Isso faz sentido? Muito, muito útil. É útil por um outro motivo também. Não só torna seu aplicativo mais testável, mas você também pode fazer um pequeno truque mental. Deixem-me pegar uma pergunta de vocês. Levantem as mãos se sentem que estão trabalhando mais duro do que nunca com a IA. Sim. Levantem as mãos se sentem que conhecem a base de código de vocês menos do que costumavam conhecer. Sim. Isso é algo real; como estamos nos movendo rápido, como estamos delegando mais coisas, acabamos perdendo a noção da nossa base de código.

E se perdemos a noção da nossa base de código, não seremos capazes de melhorá-la. E estamos essencialmente delegando a forma dela para a IA. Eu não acho que isso seja bom. Mas então, como fazemos para nos mover rápido enquanto ainda mantemos espaço suficiente em nossos cérebros? Eu acho que essa é uma maneira de fazer isso, porque o que você está fazendo aqui não é apenas pensar em criar grandes formas em sua base de código, grandes serviços. O que acho que você deve fazer é desenhar a interface para esses módulos, mas depois delegar a implementação. Em outras palavras, esses módulos podem se tornar como caixas cinzas, onde você apenas precisa saber a forma deles. Você precisa saber o que eles fazem e como se comportam, mas pode delegar a implementação deles. Descobri que isso é muito bom.

Eu não preciso necessariamente revisar todo o código (_co-review_) dentro daquele módulo. Não preciso necessariamente saber tudo o que ele está fazendo. Só preciso saber que ele se comporta de uma certa maneira sob certas condições e que faz o que tem que fazer. Então é como: 'ok, tenho uma visão geral da minha base de código e entendo meio que as formas dentro dela, entendo o que todas as interfaces fazem, mas posso delegar o que está dentro'. Descobri que essa tem sido uma maneira muito boa de manter o meu controle sobre a base de código preservando a minha sanidade. Faz sentido? E então você pode perguntar: como pego uma base de código que se parece com isso e a transformo...![[iAtentandoRastrearOsModulos_Rasos.png]]

...em uma base de código que se parece com aquilo?![[comoUmaBoaCodeBaseDeveSer.png]] Como eu aprofundo os módulos? Bem, nós temos (espero que esteja aqui, tenho quase certeza que sim) uma habilidade e essa habilidade se chama 'melhorar a arquitetura da base de código' (_improve codebase architecture_). Simples e direto. Vamos rodá-la.

O que essa habilidade vai fazer é, essencialmente, fazer uma varredura na nossa base de código procurando o que está disponível aqui. E fiquem à vontade para rodar isso vocês mesmos se estiverem acompanhando os exercícios. E ela está explorando a arquitetura, explorando, essencialmente, como trabalhar dentro dessa base de código, e vai tentar encontrar lugares para aprofundar os módulos. Bem simples.

Uma coisa muito legal que ela encontrou aqui faz parte do meu aplicativo gerenciador de vídeos de cursos, é um editor de vídeo. Um editor de vídeo construído no navegador, o que é bem _hardcore_. É um bom pedaço de engenharia. E eu queria uma forma de envolver todo o front-end até o back-end em uma espécie de módulo único e grande, para que eu pudesse testar o fato de eu apertar algo no front-end e isso ir até o back-end.

E então encontrei uma maneira, essencialmente, usando uma espécie de união discriminada (_discriminated union_) entre os dois tipos aqui. Eu consegui usar essa habilidade para ter um módulo enorme que apenas testava a partir de fora, ou tornava testável a partir de fora, essa infraestrutura de editor de vídeo. E isso significou que a IA podia ver todo o fluxo, agir sobre todo o fluxo e testar todo o fluxo.

E, honestamente, foi da água para o vinho em termos de capacidade da IA de realmente fazer mudanças, porque uma IA trabalhando em um editor de vídeo é bem brutal se você não der bons testes a ela. Então, honestamente, se vocês levarem uma coisa de hoje, apenas tentem rodar essa habilidade no seu repositório e vejam o que acontece.

Vamos para o Slido. Vamos checar algumas perguntas só enquanto isso está rodando. Então, vejamos: 'Você já tentou o _auto mode_ do Claude com _claude enable auto mode_? Assim você pode evitar muitas das verificações de permissão óbvias'. Falaremos sobre verificações de permissão em um segundo.

**Pergunta**: 'Eu devo manter os planos em markdown e as _issues_ para referência futura?'
**Resposta**: Ok, essa é uma ótima pergunta. Digamos que você teve uma ótima ideia, transformou isso em um PRD e então você implementou aquele PRD, e o PRD está essencialmente finalizado. Levantem a mão se vocês mantêm essa informação no repositório. Então, você transforma isso em um arquivo markdown. Levantem a mão se vocês querem manter isso por perto. Legal. Ok. E levantem a mão se vocês não querem manter isso. Se vocês querem se livrar disso o mais rápido possível. Sim. Essa é, eu acho, uma pergunta que não tem uma resposta clara.

Do que eu tenho muito medo com qualquer decisão de documentação é que, digamos que tenhamos um PRD para este sistema de gamificação. Nós o mantemos no repositório. Continuamos, continuamos, continuamos. Digamos que, um mês depois, queremos algumas edições no sistema de gamificação. E entramos com o Claude e ele encontra este PRD antigo e diz 'Sim, encontrei a documentação original do sistema de PRD'. Bem, acontece que o código real mudou tanto desde o PRD original que ele está quase irreconhecível. Os nomes das coisas mudaram. A estrutura de arquivos mudou. Até os requisitos podem ter mudado. Podemos ter realmente testado com usuários.

Isso é apodrecimento de documentação (_doc rot_), onde a documentação de algo está apodrecendo no seu repositório e influenciando mal o Claude ou agentes do Claude. Então, eu tendo a não manter isso. Eu tendo a me livrar disso. E, para mim, porque minha configuração usa GitHub Issues, eu simplesmente as marco como fechadas. Ele pode buscar isso se quiser, mas tem um indicador visual de que está concluído. Então, eu prefiro descartar essas coisas.

Deixe-me dar uma checada rápida na configuração aqui. Vamos pegar algumas perguntas da plateia. Alguém tem alguma pergunta neste ponto sobre qualquer coisa que cobrimos até agora, especialmente esta última parte? Sim... 

Pergunta do público: 'como lidar com migrações, com os arquivos de migração que podemos meio que comprimir, como migrações de banco de dados?'. Sim, eu não sei. Espero que isso responda à sua pergunta. Me desculpe. Não, não. Eu acho que migrações de banco de dados são algo diferente, porque você tem uma espécie de registro contínuo do que exatamente mudou e é mais determinístico, e eu acho que, sim, é uma analogia interessante. Não tenho certeza. Vamos falar sobre isso depois. Essa é uma boa maneira de dizer 'não faço a menor ideia'. Sim, sim. Desculpem, pessoal. Estou apenas tentando ouvir a pergunta desse rapaz aqui. Sim.

A pergunta... a pergunta aqui é: eu deveria, nessa espécie de estágio inicial de planejamento, tentar otimizar o plano? Isso é algo que vejo muitas pessoas fazendo e é uma ideia muito boa. Então, quando você... vamos voltar às fases. Digamos que você tenha todas essas fases aqui e você chegue ao ponto em que meio que resolveu tudo com o LLM, você entende para onde está indo, você criou esse documento de jornada/destino aqui. Como você então... tipo, você deveria tentar otimizar, otimizar e otimizar esse PRD até que seja o PR perfeito que você possa imaginar?

Eu não acho que haja muito valor nisso, porque acredito que a jornada é, na verdade, apenas uma espécie de dica de para onde você quer ir, e o lugar onde você precisa colocar o esforço é no QA, e você pode meio que fazer isso AFK (longe do teclado), suponho. Mas, na minha experiência, você não vai tirar muito proveito disso. Tipo, a coisa que realmente importa é conseguir o alinhamento com a IA, que é o que você faz inicialmente na sessão de interrogatório (_grill me_).

Vamos para mais uma pergunta. Você tem mais alguma? Sim. [Pergunta: 'Como você faz no seu fluxo de trabalho para que ela programe do jeito que você quer, de modo que quando chegue na revisão de código as coisas sejam pelo menos familiares e ela use as bibliotecas que você queria usar?']. Sim. Nós já tivemos essa pergunta antes, na verdade, que era algo como: 'como você impõe seus padrões de código ao agente, essencialmente, como você faz ele programar como você quer?'. Bem, existem essencialmente duas maneiras diferentes de fazer isso. Você tem o _Push_ (empurrar/enviar) e o _Pull_ (puxar/buscar).

O que quero dizer com _push_ e _pull_? _Push_ é quando você envia instruções para o LLM. Então você diz 'ok', e se você colocar algo no seu `claude.md` como 'fale como um pirata', essa instrução sempre será enviada (_push_) para o agente, certo? Então essa é uma ação de _push_. Você está empurrando tokens para ele. _Pull_ é quando você dá ao agente a oportunidade de buscar mais informações. E isso é, por exemplo, o caso das habilidades (_skills_). Uma habilidade é algo que pode ficar no repositório e tem um pequeno cabeçalho de descrição que diz 'ok, agente, você pode puxar (_pull_) isso quando quiser'.

Meu pensamento, meu pensamento atual sobre revisão de código e sobre padrões de código é mais ou menos assim: quando você tem um implementador... o que está acontecendo aqui? Aí está... Implementador. Vou deixar isso menos vermelho em um segundo. Então você quer que os padrões de código estejam disponíveis via _pull_. Se ele tiver uma dúvida, você quer que ele consiga meio que respondê-la. Mas se depois você tiver um revisor automatizado, então você quer fazer um _push_. Você quer enviar (_push_) essa informação para o revisor. Você quer dizer 'Estes são os nossos padrões de código, certifique-se de que este código os siga'.

Então, se você tem habilidades, por exemplo, você quer enviar (_push_) essas coisas para o revisor para que o revisor tenha tanto o código que foi escrito quanto os padrões de código para comparar. Espero que isso responda à sua pergunta. Eu posso mostrar uma versão automatizada disso também. Na verdade, sim, vamos fazer isso agora enquanto está fresco na minha mente.

Recentemente, eu passei talvez uma semana ou algo assim construindo uma coisa chamada _Sand Castle_. E o _Sand Castle_ é... eu estava meio descontente com as opções por aí para rodar agentes AFK (longe do teclado). E o que ele faz é ser essencialmente uma biblioteca TypeScript para rodar esses loops. Então você tem uma função `run` que cria uma árvore de trabalho, coloca ela numa _sandbox_ (ambiente isolado) dentro de um contêiner Docker e, em seguida, permite que você rode um prompt lá dentro. E nessa árvore de trabalho, há apenas uma branch do git e você tem o código ali, e depois pode fazer o merge dele.

Se eu abrir aqui... há umas maneiras muito, muito legais de visualizar isso e ele essencialmente permite que você rode esse tipo de loop automatizado e permite paralelizar entre vários agentes diferentes de forma bem simples. Então, vou entrar no meu arquivo do _Sand Castle_, ir para `main.ts` aqui, e vamos apenas dar uma olhada nisso. Isso é um pouco parecido com aquela versão do loop do Ralph que mostrei mais cedo. É aqui que passamos do sequencial para o paralelo.

Temos aqui, antes de tudo, um planejador (_planner_) que tem um prompt de plano e que analisa o backlog, escolhendo um certo número de _issues_ para trabalhar em paralelo. Lembram que mostrei aquele quadro Kanban onde havia todas as relações de bloqueio? Ele resolve todas as fases.

Então, este vai dizer "ok", digamos que temos... vocês podem ignorar todo esse código de cola (_glue code_) aqui. Isso é essencialmente apenas um conjunto de _issues_ do GitHub com um título e uma _branch_ para você trabalhar. E então, para cada _issue_, criamos uma _sandbox_ (ambiente isolado) e rodamos um implementador nessa _sandbox_, passando o número da _issue_, o título da _issue_ e a _branch_. Este é como o loop que rodamos agora há pouco.

Em seguida, se ele criou alguns commits, nós revisamos esses commits. Este é essencialmente o loop. O que fazemos com esses commits? Nós os passamos para um agente mesclador (_merger agent_), que recebe um prompt de _merge_, pega as _branches_ que foram criadas, pega as _issues_ e simplesmente as mescla. Se houver algum problema com o _merge_, sabe, com os tipos, os testes e esse tipo de coisa, ele os resolve.

E este tem sido o meu fluxo por um bom tempo agora para trabalhar na maioria dos projetos. Funciona super, super bem. E, sim, recomendo que vocês deem uma olhada no _Sand Castle_ se quiserem aprender mais.

E para responder à sua pergunta adequadamente: no revisor, eu faria o _push_ (enviaria) dos padrões de código; no implementador, eu permitiria que ele fizesse o _pull_ (buscasse). E, na verdade, estou usando o Claude Sonnet para implementação e o Opus para a revisão, porque considero que para a revisão eu preciso da inteligência maior (_the smarts_). Então, mais alguma pergunta... na verdade, deixe-me, antes de fazermos mais perguntas, vamos voltar aqui.

Ok, onde estamos? Estamos meio que indo para todos os lados nesta palestra porque estou tendo que rodar as coisas em paralelo. Então, vamos voltar para o 'melhorar a arquitetura da base de código' (_improve codebase architecture_). Ele finalmente terminou de rodar e encontrou um monte de candidatos a melhoria arquitetônica. Ele essencialmente pegou um cluster de módulos diferentes que são todos meio que relacionados e que provavelmente poderiam ser testados como uma unidade. Temos o número um, o serviço de pontuação de questionários. Há também uma extração lógica de reordenação.

Ele tem argumentos do porquê eles estão acoplados e também tem uma categoria de dependência. Então, _local substitutable_ em SQLite dentro do banco de dados de teste em memória. O serviço de pontuação de questionário atualmente não tem nenhum teste; esta é a maior lacuna. Então, é isso que aparece quando voltamos do 'melhorar a arquitetura da base de código'.

Ok. Então, teoricamente, temos cerca de 17 minutos restantes. Não sei vocês, mas eu estou exausto. Eu quero meio que resumir para vocês, porque acho que estamos quase chegando ao fim da nossa energia. Eu estarei disponível o tempo todo se vocês quiserem vir me fazer perguntas. Talvez eu faça mais uma verificação no Slido, mas vamos resumir aonde chegamos.

Este é essencialmente o fluxo onde, ao longo de todo esse processo![[fluxoOverview.png]], estamos mantendo em mente a forma da nossa base de código. Este não é um compilador de _specs-to-code_ (especificações para código). Esta não é uma IA que está apenas cuspindo código. Nós estamos sendo muito intencionais com o tipo de módulos e com a forma da base de código que queremos.

Nós nos certificamos de estar o mais alinhados possível usando a sessão de interrogatório (_grill me_), realmente definindo bem a nossa ideia. Não estamos focando excessivamente no PRD. Não estamos tentando ler todas as partes dele nem estamos pensando muito sobre ele. Em seguida, simplesmente transformamos isso em um conjunto de _issues_ paralelizáveis, nas quais agentes podem trabalhar em paralelo. Nós implementamos isso, e nós fazemos QA (Garantia de Qualidade) e revisão de código pra caramba, e depois continuamos voltando para essa implementação.

Uma coisa que eu não mencionei muito é que a função da fase de QA é essencialmente criar mais _issues_ (tarefas) para aquele quadro Kanban. Então, mesmo enquanto a IA está implementando, você pode ir fazendo o QA do que já foi feito e voltando para adicionar mais _issues_. E o quadro Kanban permite que você adicione tarefas bloqueadoras meio que infinitamente, na verdade.

E então, assim que tudo isso estiver feito, assim que você tiver um código e um trabalho com os quais esteja satisfeito, você pode compartilhar isso com sua equipe e obter uma revisão completa. Então, chegar até essa fase é basicamente o trabalho de um desenvolvedor, ou talvez um par de desenvolvedores, gerenciando o processo; e depois cabe a vocês descobrirem como fazer o _merge_ (mesclar) disso de volta no projeto principal.

É claro que todo esse processo pode ser personalizado por você. Isso é apenas algo que eu descobri que funciona bem; não estou tentando 'vender' uma única abordagem aqui. **O que eu recomendo, se vocês puderem levar apenas uma lição desta sessão, é que vocês devem ir à Amazon e simplesmente comprar um monte daqueles livros antigos de desenvolvimento de software, porque eu achei muito esclarecedor lê-los**. A escrita da era pré-IA é sempre muito divertida de ler, de qualquer forma, e em cada página eu percebi que havia algo útil e interessante para absorver.

Então, muito obrigado a todos. Obrigado por aguentarem o calor aqui. Espero que a temperatura do corpo de vocês se normalize em breve. Muito obrigado!

