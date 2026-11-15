# Planejamento da solução: organizador de e-mails com agentes de IA

- **Canal:** FormacaoDEV (Instrutor Leo)
- **Link:** [Acessar aula](https://escola.formacao.dev/sala/profissional-ai-projeto-organizador-emails?trilha=automacao-agentes-de-ia&aula=3855ba33-13ed-4b1c-8558-bccd241df1b0)
- **Publicado em:** 2026
- **Duração:** 25:35
- **Legenda:** pt-orig, gerada automaticamente (pode conter erros, principalmente em nomes próprios)
- **Revisada:** 13/11/2026

---

# 1. A importância de aprender a resolver problemas

Pessoal, esta aula é importantíssima e estratégica, pois vai influenciar praticamente tudo o que faremos daqui para frente.

Se você quiser pensar em como resolver o problema antes de conhecer a solução que imaginei, esta é a oportunidade. Assim, você poderá exercitar seu raciocínio sem receber spoilers da solução.

Acredito que esse exercício seja bastante interessante.

Vou contar uma experiência pessoal. Fiz faculdade de Engenharia Elétrica e, naquela época, tinha até pesadelos com os problemas de lógica e matemática que precisava resolver. A faculdade foi uma experiência bastante desafiadora nesse sentido.

Entretanto, uma das coisas mais importantes que aprendi durante esse período foi justamente a resolver problemas.

E você só aprende a resolver problemas resolvendo problemas. Da mesma forma que só aprende a tocar guitarra praticando, só vai aprender a resolver problemas do mundo real enfrentando situações reais.

É claro que entender as técnicas que vamos utilizar é importante, mas também é fundamental colocar esse conhecimento em prática.

Uma das partes mais importantes da resolução de um problema é definir estrategicamente como você pretende resolvê-lo.

É por isso que esta aula é tão importante.

# 2. Estruturando a solução: fluxo de organização do Gmail

Vou criar um arquivo chamado **Solução – Draw** para representar visualmente a solução. Vou utilizar um fundo escuro para facilitar a visualização e uma cor branca para os textos.

Vamos começar.

O fluxo que imaginei é um fluxo de organização do Gmail.

Quando falo em fluxo, estou me referindo ao arquivo que construiremos dentro do diretório de fluxos. Nele ficarão centralizadas as etapas, as chamadas às Skills, os acessos aos MCPs e as demais operações necessárias.

Será o ponto central de organização de todo o processo.

## 2.1. Fase 1: coleta dos e-mails

A primeira fase será responsável pela coleta dos e-mails.

É importante esclarecer que, neste momento, não estamos falando necessariamente do conteúdo completo das mensagens, mas das informações que o MCP do Gmail disponibiliza, como:

- Assunto do e-mail.
- Remetente.
- Destinatários.
- Se a mensagem foi enviada somente para você ou também para outras pessoas.
- Outras informações disponíveis nos metadados da mensagem.

Essa coleta é importante porque fornecerá os dados necessários para as próximas etapas.

Mas surge uma questão: onde vamos armazenar essas informações?

Poderíamos manter os dados apenas em memória, mas faz mais sentido salvá-los em algum local persistente. Afinal, a coleta demanda tempo e processamento. Se os e-mails já foram coletados e armazenados, podemos avançar para as próximas etapas sem precisar repetir esse trabalho.

Dentro da estrutura de dados, podemos imaginar duas categorias:

1. **Dados ativos:** grupos de e-mails que estão sendo processados naquele momento.
2. **Dados arquivados:** grupos que já foram processados e cujos resultados queremos preservar.

Também precisamos decidir qual será o formato desses arquivos.

Podemos trabalhar com:

- TXT: arquivos de texto simples.
- JSON: formato estruturado para armazenamento de dados.
- CSV: arquivos separados por vírgulas, bastante utilizados em planilhas.

Essa decisão fará parte do planejamento da primeira fase.

## 2.2. Como acessar o MCP do Gmail: diretamente ou por meio de uma Skill?

Outro ponto importante é definir como essa etapa fará a comunicação com o MCP do Gmail.

Temos duas possibilidades.

**Opção 1: chamar o MCP diretamente pelo fluxo**

Podemos colocar no próprio arquivo do fluxo as instruções para chamar o MCP do Gmail e obter a lista de mensagens.

Imagine que temos um arquivo chamado:

`organizacao-gmail.md`

Esse arquivo poderá conter:

- Objetivos.
- Instruções de execução.
- Lista de tarefas.
- Passos que precisam ser executados.

Podemos organizar as tarefas com uma lista de marcação, utilizando checkboxes para indicar o que já foi concluído, ou simplesmente numerar os passos:

- Passo 1: executar determinada tarefa.
- Passo 2: executar outra tarefa.
- Passo 3: executar a próxima tarefa.

Nesse modelo, uma das instruções poderia ser: chame o MCP do Gmail para obter a lista de e-mails, seguindo os parâmetros estabelecidos.

Ou seja, o próprio fluxo faria a chamada diretamente.

**Opção 2: utilizar uma Skill intermediária**

Outra possibilidade é criar uma Skill responsável por realizar essa operação.

Nesse caso, em vez de o fluxo chamar diretamente o MCP, ele chamaria uma Skill, e essa Skill seria responsável por acessar o MCP do Gmail.

Essa Skill poderia conter instruções mais detalhadas, como:

- Quais informações devem ser obtidas.
- Quais colunas precisam ser coletadas.
- Qual formato deve ser utilizado.
- Em qual pasta os arquivos devem ser salvos.
- Qual nomenclatura deve ser utilizada.
- Como organizar os dados coletados.

Assim, em vez de colocar todas essas regras diretamente no fluxo, podemos simplesmente instruí-lo a utilizar a Skill responsável pela coleta.

Essa é uma abordagem interessante porque centraliza as regras de execução em um componente reutilizável.

Se quisermos construir outros fluxos que também precisem acessar o Gmail, poderemos reutilizar a mesma Skill.

Dessa forma, mantemos uma separação mais organizada entre as responsabilidades:

**Fluxo → Skill → MCP do Gmail**

O fluxo define o que precisa ser feito, a Skill organiza como a operação será realizada e o MCP fornece o acesso às funcionalidades do Gmail.

## 2.3. Coleta fragmentada: trabalhando com grupos de 50 e-mails

Vamos considerar que o MCP consiga obter até 50 e-mails por chamada.

Podemos criar um arquivo para cada grupo de 50 e-mails coletados.

Mas por que fazer isso?

Lembre-se da aula anterior, quando discutimos as estratégias de execução sequencial e paralela.

Imagine que, depois da coleta, exista uma etapa responsável pela classificação dos e-mails.

Se organizarmos a coleta em grupos separados, poderemos executar várias classificações em paralelo.

Por exemplo:

- Um agente coleta 50 e-mails e salva em um arquivo CSV.
- Outro agente coleta outros 50 e-mails e salva em outro arquivo CSV.
- Um terceiro agente faz o mesmo, utilizando um terceiro arquivo.

Cada agente terá seu próprio arquivo de trabalho.

Assim, quando a classificação começar, cada agente trabalhará exclusivamente sobre o arquivo que recebeu.

Isso permite um paralelismo real, pois os agentes estarão trabalhando com conjuntos distintos de informações, sem interferir diretamente no trabalho uns dos outros.

Essa separação é importante para evitar conflitos, como um agente sobrescrever ou apagar informações que outro agente está processando.

Portanto, fragmentar a coleta de acordo com os limites disponíveis no MCP já ajuda a preparar a arquitetura para a execução paralela.

Além disso, as regras definidas na Skill serão determinantes para padronizar:

- Como os arquivos serão nomeados.
- Onde serão armazenados.
- Quais informações serão coletadas.
- Quais colunas estarão presentes.
- Como os dados serão organizados.

Isso garante uma padronização na coleta das informações.

# 3. Fase 2: classificação dos e-mails

A segunda fase será responsável por classificar os e-mails coletados.

Essa classificação também poderá utilizar Skills.

Podemos criar uma ou várias habilidades responsáveis por analisar diferentes características das mensagens.

Por exemplo, podemos criar uma Skill para avaliar a relevância de cada e-mail, atribuindo uma nota de zero a dez.

Para fazer essa análise, teremos informações como:

- Remetente.
- Assunto.
- Fragmento do corpo do e-mail.
- Outras informações relevantes da mensagem.

Podemos imaginar três tipos de classificação.

## 3.1. Classificação do remetente

A primeira análise pode considerar quem enviou o e-mail.

Podemos identificar se o remetente é uma pessoa importante para você, se pertence a uma empresa conhecida ou se costuma enviar mensagens relevantes.

Essa informação ajuda a determinar a importância da mensagem.

## 3.2. Classificação de relevância

Outra análise será responsável por avaliar o conteúdo do e-mail e determinar seu nível de relevância.

Podemos atribuir uma nota de zero a dez.

Por exemplo, imagine uma mensagem informando que uma conta de energia está atrasada e precisa ser paga.

Esse tipo de mensagem merece atenção, pois pode gerar consequências caso seja ignorada.

Por outro lado, uma propaganda de um produto ou uma promoção antiga provavelmente terá uma relevância menor.

A classificação deverá considerar o contexto da mensagem e não apenas o assunto.

## 3.3. Classificação de risco

Também podemos criar uma classificação de risco.

A ideia é identificar mensagens potencialmente perigosas, como tentativas de fraude ou e-mails falsos.

Por exemplo:

- Domínio desconhecido.
- Remetente suspeito.
- Empresa que não parece confiável.
- Mensagem com características de tentativa de fraude.

Imagine um e-mail informando que existe uma conta atrasada, mas que apresenta um domínio desconhecido e não confiável.

Nesse caso, podemos atribuir uma classificação de risco maior.

Portanto, teremos diferentes análises que poderão trabalhar em conjunto para determinar o que fazer com cada mensagem.

## 3.4. Armazenamento dos resultados da classificação

Uma questão importante é definir onde essas classificações serão armazenadas.

Podemos utilizar o mesmo arquivo criado na fase de coleta.

Imagine que a coleta tenha gerado um arquivo chamado:

`emails-XYZ.csv`

Esse arquivo conterá os dados obtidos pelo MCP do Gmail.

Por exemplo:

| Remetente         | Assunto        | Corpo                         | Data       |
| ----------------- | -------------- | ----------------------------- | ---------- |
| contato@email.com | Conta atrasada | Sua conta precisa ser paga... | 2026-12-25 |

Quando a etapa de classificação for executada, podemos acrescentar novas colunas ao mesmo arquivo.

Por exemplo:

| Remetente         | Assunto        | Relevância | Risco |
| ----------------- | -------------- | ---------: | ----: |
| contato@email.com | Conta atrasada |         10 |     0 |

Nesse exemplo, o e-mail recebeu:

- Relevância 10: representa uma mensagem que merece atenção máxima.
- Risco 0: representa uma mensagem considerada segura após a análise.

Em outro cenário, poderíamos ter uma mensagem com risco 2, indicando que existe algum sinal de alerta e que precisamos ter cuidado.

A classificação, portanto, não precisa gerar um novo arquivo. Ela pode atualizar o arquivo existente, acrescentando as informações produzidas durante a análise.

# 4. Fase 3: revisão dos dados

A terceira fase será responsável por revisar os dados produzidos nas etapas anteriores.

Precisamos verificar se tudo foi executado corretamente.

Será que as informações foram coletadas de maneira adequada? Será que as classificações fazem sentido? Será que os resultados estão consistentes?

Essa etapa funciona como uma verificação do trabalho realizado pela IA.

Em fluxos mais complexos, ter um agente responsável por revisar o trabalho de outro agente pode ser bastante útil para garantir a qualidade dos resultados.

Essa revisão é especialmente importante quando estamos trabalhando com múltiplas etapas e diferentes agentes.

# 5. Fase 4: confirmação do usuário

A quarta fase será opcional.

Podemos incluir uma etapa de confirmação do usuário antes de permitir que o agente execute determinadas ações.

Por exemplo, imagine que o agente tenha classificado os e-mails e esteja prestes a executar uma operação no Gmail, como marcar uma mensagem como lida ou arquivá-la.

Essas operações podem ter consequências importantes para a organização da caixa de entrada.

Por isso, podemos exigir uma confirmação formal do usuário antes de continuar.

Nesse momento, o agente apresentaria um pequeno resumo do que pretende fazer e solicitaria a aprovação do plano de execução.

Somente depois da confirmação o fluxo avançaria para a próxima etapa.

Essa fase funcionaria como um ponto de controle humano (_human-in-the-loop_), permitindo que o usuário valide as ações planejadas antes de sua execução.

# 6. Fase 5: execução das ações planejadas

A quinta fase será responsável por executar as ações definidas durante a classificação.

Uma observação importante: a própria etapa de classificação já poderá determinar qual ação deverá ser realizada posteriormente.

Por exemplo, durante a classificação, o agente poderá identificar que determinado e-mail é uma propaganda antiga, com pouca relevância.

Nesse caso, poderá registrar no arquivo que a ação planejada será:

`ARQUIVAR_E_MARCAR_COMO_LIDO`

Essa nomenclatura é apenas um exemplo de padronização.

A ideia é registrar no arquivo qual ação deverá ser executada para cada mensagem.

Podemos ter diferentes possibilidades:

- Arquivar.
- Marcar como lido.
- Manter na caixa de entrada.
- Aplicar um rótulo específico.
- Encaminhar para revisão humana.

No exemplo da propaganda antiga, faz sentido arquivar e marcar como lido.

Arquivar significa retirar o e-mail da caixa de entrada do Gmail, sem necessariamente excluí-lo.

Assim, quando chegarmos à quinta fase, o agente não precisará tomar todas as decisões novamente. Ele simplesmente executará as ações que já foram planejadas e registradas durante a classificação.

O fluxo será:

1. Coletar os e-mails.
2. Classificar as mensagens.
3. Registrar as ações necessárias.
4. Revisar os resultados.
5. Solicitar confirmação, se configurado.
6. Executar as ações planejadas.

# 7. Fase 6: relatório final

A última fase será responsável por apresentar o resultado do processamento.

Podemos gerar um resumo ou relatório final informando o que foi realizado.

Esse relatório poderá apresentar:

- Quantidade de e-mails processados.
- Quantidade de mensagens arquivadas.
- Quantidade de mensagens marcadas como lidas.
- Quantidade de mensagens classificadas como importantes.
- Quantidade de mensagens que precisam de atenção.
- Mensagens que apresentaram algum risco.
- Outras informações relevantes sobre a execução.

Dessa forma, o usuário terá uma visão geral do que aconteceu durante o fluxo.

# 8. Organização dos agentes e processamento por grupos

Essas são as seis fases que imaginei para construir nosso fluxo de organização do Gmail.

Agora precisamos decidir como distribuir essas responsabilidades entre os agentes.

Uma possibilidade seria utilizar múltiplos agentes diferentes, cada um responsável por uma fase.

Entretanto, acredito que, para esse cenário, podemos começar utilizando um único agente (_Full Agent_) responsável por executar todas as seis fases.

Esse agente seria responsável por:

1. Coleta.
2. Classificação.
3. Revisão.
4. Confirmação do usuário.
5. Execução das ações.
6. Relatório final.

Vamos imaginar que ele trabalhe com grupos de 50 threads.

É importante lembrar que uma thread representa uma conversa, e não necessariamente uma única mensagem.

Podemos ter, por exemplo, dez mensagens dentro de uma única thread. Portanto, quando falamos em 50 threads, não estamos necessariamente falando de apenas 50 mensagens individuais.

O agente receberá um grupo de 50 threads e executará todo o processo:

- Coletará as informações.
- Criará o arquivo correspondente.
- Classificará as mensagens.
- Revisará os resultados.
- Aguardará a confirmação do usuário, se necessário.
- Executará as ações.
- Gerará o relatório final daquele grupo.

Esse é o modelo inicial que imagino para nossa implementação.

## 8.1. Possibilidade de paralelizar os fluxos

Se quisermos paralelizar o processamento, podemos solicitar a execução de cinco instâncias desse mesmo fluxo, cada uma trabalhando com um grupo diferente de 50 threads.

Assim, teremos cinco agentes executando o mesmo conjunto de etapas, mas trabalhando sobre informações distintas.

Isso permitirá aumentar a velocidade do processamento.

Além disso, quando estivermos utilizando esse sistema no dia a dia, poderemos manter nossa caixa de entrada organizada por meio de processamentos periódicos.

Trabalhar com grupos de 50 threads pode ser uma quantidade interessante para esse cenário.

Inclusive, podemos definir ações diferentes para mensagens importantes.

Em vez de simplesmente arquivar e marcar como lido, podemos aplicar um rótulo (_label_) específico, como:

- Importante.
- Revisão humana.
- Atenção.

Dessa maneira, os e-mails que realmente precisam da sua atenção permanecerão identificados e organizados para uma análise posterior.

# 9. A solução pode ser adaptada conforme a necessidade

Talvez você esteja pensando que a etapa de confirmação do usuário poderia ficar em outro fluxo, separado dos demais.

Isso também é possível.

Podemos ter vários fluxos de processamento de 50 threads e um fluxo separado responsável por apresentar as ações planejadas e solicitar a confirmação do usuário.

Outra possibilidade seria aumentar a quantidade de mensagens processadas.

Em vez de trabalhar com grupos de 50, poderíamos configurar o sistema para obter 500 e-mails e processá-los em um único fluxo.

Existem diferentes possibilidades.

Você define a estratégia de acordo com aquilo que precisa resolver.

Estou apresentando uma possível solução porque ela será interessante para nossos testes iniciais.

Como estamos trabalhando com apenas 50 threads por execução, mesmo que o processamento demore três ou quatro minutos, conseguiremos testar o comportamento do sistema sem precisar esperar muito tempo para processar centenas ou milhares de mensagens de uma só vez.

Mas quero deixar uma coisa clara: a solução de um problema pode assumir diferentes formas.

A escolha depende da necessidade e dos objetivos de cada projeto.

Você tem liberdade para definir como deseja construir seu fluxo. A IA seguirá as orientações estabelecidas no planejamento.

Você é quem conduz o projeto.

# 10. Testar, ajustar e evoluir a solução

Passamos bastante tempo discutindo a solução, as etapas e as estratégias que vamos utilizar.

Mas é importante entender que esse processo de planejamento vai ajudar você a pensar em soluções para diferentes problemas.

Por exemplo, talvez você queira que uma determinada etapa seja verificada por um agente diferente daquele que a executou.

Isso é possível.

Podemos modificar a estrutura do fluxo e distribuir as responsabilidades de outra maneira.

Neste primeiro momento, vamos seguir com a solução que apresentei. Posteriormente, poderemos avaliar se vale a pena utilizar múltiplos agentes em cada fase.

Será que isso vai melhorar o resultado? Será que conseguiremos economizar tempo? Será que o custo será menor?

Podemos realizar diferentes testes até chegar à versão final do fluxo.

Por quê?

Porque, quando construímos fluxos como esse, precisamos testar, corrigir e ajustar a rota.

Não é necessariamente algo que ficará perfeito na primeira tentativa.

Vamos refinando e melhorando a solução até chegarmos a um fluxo bem construído, que funcione corretamente e realmente ajude no nosso dia a dia de trabalho.

Estamos construindo um sistema bastante específico, direcionado à resolução de um problema particular.

Isso é muito interessante porque os sistemas disponíveis no mercado geralmente procuram resolver problemas comuns a muitas pessoas.

Entretanto, existem problemas específicos da sua rotina de trabalho que essas soluções genéricas não conseguem atender completamente.

É justamente nesse cenário que os agentes de IA podem ajudar: permitindo construir soluções direcionadas às necessidades reais de cada pessoa.

# 11. Próxima etapa: implementação

Agora vamos passar para uma nova fase.

Finalmente começaremos a construir o sistema e colocar a mão na massa para vê-lo ganhar forma.

Precisaremos fazer isso passo a passo, testando o fluxo à medida que ele for sendo construído.

Primeiro, vamos verificar se o fluxo está funcionando corretamente. Depois, poderemos testar sua execução de maneira automatizada.

Um grande abraço e continuamos na próxima aula e no próximo capítulo!
