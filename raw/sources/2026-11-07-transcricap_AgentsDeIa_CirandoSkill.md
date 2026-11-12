fonte: https://escola.formacao.dev/sala/profissional-ai-agentes?trilha=automacao-agentes-de-ia&aula=2cd0abfb-2641-4ff2-a7b8-bb5fd2457746

Primeira Skill

Pessoal, nós vamos agora criar uma pasta para que a gente possa armazenar as nossas skills. Se você tentar criar essa pasta diretamente no Mac (isso não vai acontecer no Windows, só no Mac), ele vai reclamar. E o nome é .claude. Se você criar uma pasta que começa com um ponto na frente, ele vai dizer o seguinte: “Olha, tem certeza que deseja criar uma pasta com um ponto?”. E aí ele eventualmente pode criar essa pasta, porque pastas com ponto são pastas de sistema, tá? São pastas usadas internamente pelo sistema.

Então, tem hora que ele vai fazer essa pergunta e tem alguns momentos que ele vai dizer que não pode criar, que nem essa mensagem: “Você não pode usar um nome que comece com ponto, porque esses nomes são reservados para o sistema. Escolha outro nome.” Se você usar a tecla Command + Shift + ponto (isso aqui é só para o Mac; se você estiver no Windows, não precisa se preocupar com isso), ele vai permitir você criar a pasta .claude, certo?

E aí eu vou dizer “usar ponto”, sem problema. Só que ele vai criar como se a pasta estivesse apagada, está vendo? E se eu aperto Command + Shift + ponto, ele esconde essa pasta; se eu aperto Command + Shift + ponto de novo, ele mostra as pastas que são ocultas, digamos assim, tá?

O fato é que não importa onde você criou: na nossa ferramenta, dentro do Visual Studio Code, ela vai aparecer normalmente, de boa, e você não vai ter nenhum problema para criar essa pasta .claude aqui dentro. Perfeito, vai funcionar no Windows e no Mac. Por isso a gente vai usar o Visual Studio Code para criar essas pastas, tá?

“Léo, aqui no meu computador não fica bonitinho assim com esse ícone.” Se você quiser ter esses ícones, você pode vir aqui onde tem Extensões e procurar pela palavra “material”, tá? O primeiro que aparece aqui na minha lista é esse, o Material Icon Theme, um tema de ícones do Material. Vai aparecer um botão de Instalar. Se você clicar, automaticamente vão aparecer para vocês ícones diferentes nas pastas, tá?

Beleza. Então, usando o Claude, a gente vai usar essa pasta para ele ler as skills, só que você tem que colocar uma outra pasta dentro dela chamada skills. Ou seja, esse é o nome oficial do lugar onde você vai armazenar as skills. “Léo, mas se eu estiver usando o Codex, qual é a pasta que ele vai ler?” Ele vai ler uma pasta parecida.

A gente vai criar aqui uma pasta chamada .agents, tá? E dentro dessa pasta .agents você vai criar uma nova pasta com o mesmo nome da que eu coloquei lá no Claude: skills, no plural. Então o Codex vai ler dentro de .agents/skills e o Claude vai ler dentro de .claude/skills. Se você estiver usando um, cria uma pasta; se estiver usando o outro, cria a outra, certo?

Vamos lá. Nós vamos criar uma habilidade chamada “curto e grosso”, certo? E aí tem uma forma de criar essa skill, essa habilidade. Dentro da pasta skills, a gente vai criar uma pasta, e eu vou usar nomes com letras minúsculas e, sempre que tiver uma nova palavra, coloco um hífen. Então vai ficar assim: curto-e-grosso.

E aí, dentro dessa pasta curto-e-grosso, eu vou criar um arquivo chamado SKILL.md, com letras maiúsculas. Deixa eu te dizer uma coisa: nós não vamos ficar criando isso de forma manual, mas eu quero te mostrar pelo menos uma vez para você entender que criar uma skill não é algo complicado, é algo simples. E eu te garanto que a gente vai entender alguns princípios importantes no momento em que estiver criando as skills aqui, tá?

Eu vou diminuir aqui o máximo possível o Claude, para focar mais especificamente no nosso código. A mesma coisa a gente pode fazer lá na outra pasta, né? A gente cria uma pasta chamada curto-e-grosso e, dentro dela, de novo, um arquivo chamado SKILL.md.

Dá para você simplesmente gerar de um lado e copiar no outro, que vai ser exatamente o mesmo arquivo, tá? Eu vou criar aqui no Claude, depois a gente cria no Codex. Então vamos lá: o que nós vamos escrever dentro dessa skill? Existe um formato que a gente tem que seguir para que a skill possa de fato ser entendida como skill.

A gente vai colocar três traços: ---. Não é o underline, que fica embaixo; é o traço, o hífen, né? Três traços em cima e três traços embaixo. E no meio a gente vai colocar name: e, embaixo, description:, em inglês, tá? Name e description.

O nome a gente já sabe: curto-e-grosso, tem que ser exatamente o nome da pasta. E na description a gente vai colocar a descrição do que essa skill vai fazer. E aqui embaixo, depois dos três tracinhos, a gente vai colocar o que seria o nosso prompt, o prompt que será reutilizado dentro da nossa aplicação.

Então, qual vai ser o prompt? Eu vou dizer o seguinte: “Responda de forma curta e grossa, sem rodeios, usando um estilo de humor ácido e sarcástico, como um velho rabugento que não tem paciência para bobagens.” Pronto, esse aqui vai ser o nosso prompt.

E o que eu vou colocar na description? Não tem um formato específico, tá? Basicamente algo assim: “Skill responsável por fornecer respostas curtas e diretas, com um toque ácido e sarcástico, ideal para quem não tem tempo para rodeios e prefere honestidade brutal. Chame essa skill sempre que for mencionado, por exemplo, ‘estilo Seu Lunga’ ou apenas ‘Seu Lunga’.” Seu Lunga é um personagem real, meio folclórico. O que eu estou colocando aqui, gente? Estou colocando na descrição gatilhos, formas de chamar essa skill sem que necessariamente eu a chame de forma explícita.

Eu posso chamar uma skill de forma implícita, através do meu próprio texto, ou de forma explícita, colocando barra e o nome do comando. E eu quero mostrar isso para vocês. Acabei de criar a skill, ela está pronta: basicamente você tem esse cabeçalho com esses dois atributos, nome e descrição, e aqui o prompt que vai mudar o contexto para ela responder de uma forma diferente, certo?

Então vamos lá. Lembra que eu estou aqui na pasta do Claude; eu preciso jogar essa skill também lá para a pasta do Codex. Então eu posso copiar o mesmo conteúdo e jogar para cá, certo? “Léo, tem como a gente ter isso em um lugar só?” Tem, mas eu não vou me preocupar em explicar isso agora, porque seria um detalhe técnico: nem é de IA, é mais do próprio Windows e do Mac. Depois a gente pode falar um pouco sobre isso, mas por hora copia, que não tem problema nenhum.

Aí eu vou pedir para ele dar um reload nas skills, certo? É possível que ele não ache de primeira, mas vou procurar aqui: curto-e-grosso. Ele achou, certo? O que é um bom sinal. Como eu falei para vocês, se não aparecer, fecha o Claude e abre de novo que vai dar certo.

Então vou fazer o seguinte: “O que é uma skill no contexto de agentes de IA?” Vou fazer uma pergunta normal, sem pedir nada especial. Ele vai lá e diz: “Olha, uma skill no contexto de agentes de IA, como no Claude Code, é isso, isso e aquilo.” Normalmente são respostas mais longas.

Apertando a seta para cima, a gente consegue acessar o histórico das últimas perguntas, né? Eu posso ir subindo e descendo. E aí eu posso colocar aqui /curto-e-grosso, ou seja, agora estou colocando no meu contexto uma skill que vai modificar a resposta, já que eu carreguei essa skill dentro do contexto.

Se eu faço a mesma pergunta referenciando essa skill, ele vai responder de uma forma diferente. Vamos ver o resultado, para ver se ele vai ser realmente bruto ou não. Executando a skill curto-e-grosso: “Skill é um manual de instruções que você dá para o agente para ele parar de improvisar toda vez, feito estagiário no primeiro dia. São regrinhas, mais talvez uns scripts empacotados, com a etiqueta escrito ‘quando vir isso, faça assim’. Sem isso, o bicho reinventa a roda cada vez que você pede a mesma coisa; com isso, ele para de te decepcionar de forma diferente a cada tentativa.” Então ele já foi muito mais curto e mais grosso.

Vou limpar o contexto aqui, vou dar um /clear, certo? E aí vou fazer a mesma pergunta: “O que é uma skill no contexto de agentes de IA, Seu Lunga?”, com uma interrogação no final.

O fato de ter colocado “Seu Lunga” é para ele entender que isso é um disparador: ele vai perceber que aquela skill atende a esse requisito de “Seu Lunga” e vai chamá-la. Executando... skill executada, curto-e-grosso: “Skill é a IA aprendendo um truque novo sem precisar reescrever o cérebro inteiro. Na prática, é modularizar conhecimento procedural para não depender da sua paciência, que já é curta, nem da memória do modelo, que é zero entre sessões.” Então ele entendeu: eu não disse de forma explícita que queria chamar a skill, mas o fato de ter escrito “Seu Lunga” fez com que ele carregasse essa skill automaticamente e mudasse a resposta por conta dessa palavrinha.

Então é possível chamar uma skill através de uma chamada direta, usando barra e o comando, e você pode colocar no início ou no fim. Se você colocar aqui /curto-e-grosso, der um Enter e fizer a pergunta embaixo, ou pedir qualquer coisa para ele fazer, ele vai usar essa skill. Tanto faz carregar no início, no final ou no meio do seu comando, não faz diferença, certo?

“Ah, Léo, posso carregar mais de uma?” Pode. Você pode chamar múltiplas skills, ele vai colocar todas dentro do contexto; ou, se você usar alguma palavra que serve para disparar as skills, ele vai lá e faz esse processo. A ideia de chamar skill aqui dentro do Codex é a mesma coisa.

Você coloca a barra e escreve curto-e-grosso. Ele ainda não carregou essa skill, certo? Não sei se aqui tem algum comando para recarregar as habilidades; não tem. O que a gente pode fazer? Fechar o Codex e abrir novamente; ao carregar a aplicação de novo, ele carrega essas skills, tá?

Vamos ver ele carregando. Vou jogar isso aqui para cá, beleza? Deixa eu só trazer a minha câmera para cá para a gente interagir com ele.

Vou escolher o projeto, “fundamentos-skills”, tá? Que foi o projeto que a gente carregou. E aqui eu vou usar a skill curto-e-grosso. Está aqui, olha, e ele já mostra a descrição: “Skill responsável por fornecer respostas curtas e diretas...” e tal.

Então, com curto-e-grosso, vou perguntar: “O que é skill no contexto de agentes de IA?” Com essa pergunta, ele usa a skill, muda o contexto e responde: “É um conjunto de instruções que ensina o agente de IA a executar uma tarefa específica. É como dar uma especialidade ao agente: sem skill ele é generalista; com skill, sabe o procedimento em vez de ficar inventando moda.”

Beleza, ele não está usando tanto humor assim, mas o que você pode fazer? Pode ir lá na skill e dizer: “Quero que você seja sempre ácido”, e dar vários exemplos de formas como ele pode ser ácido e engraçado a partir da sua skill.

Ou seja, todas as técnicas que a gente usou lá na engenharia de prompt (aquela ideia de ter um personagem, de fazer roleplay, né? “Eu sou um advogado que é assim, assim e assado; responda dessa forma; aqui estão alguns exemplos”), você pode colocar aqui dentro.

O meu objetivo era só mostrar um exemplo simples, para que você entenda como uma skill é feita do zero. Você não vai ficar criando skills do zero, porque tem ferramentas para criá-las com inteligência artificial, mas aqui foi um exemplo de como você modifica a resposta, modifica o contexto, e pode até executar coisas incríveis através de um comando que fica à sua disposição dentro do Claude e também dentro do Codex, certo?

Usamos a mesma skill em duas ferramentas diferentes. Na próxima aula, nós vamos construir outra skill para executar um código, e também vamos construí-la do zero, para você entender que executar um código dentro do computador não é tão complicado quanto pode parecer. Então é isso, um grande abraço e até a próxima aula.

```SKILL.md
---
name: curto-e-grosso
description: Skill responsável por fornecer respostas curtas, diretas e com um toque de humor ácido e sarcástico. Ideal para quem não tem tempo para rodeios e prefere a honestidade brutal. Chame essa skill sempre que for mencionado "curto e grosso", "estilo seu lunga" ou "seu lunga".
---

Responda de forma curta e direta, sem rodeios. Usando um estilo de humor ácido e sarcástico. Como um velho rabungento que não tem paciência para bobagens.
```
