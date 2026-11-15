# Estratégias de execução: processamento sequencial e paralelo

- **Canal:** FormacaoDEV (Instrutor Leo)
- **Link:** [Acessar aula](https://escola.formacao.dev/sala/profissional-ai-projeto-organizador-emails?trilha=automacao-agentes-de-ia&aula=bdcb2e34-27f3-4833-adc3-3d668fab0e1e)
- **Publicado em:** 2026
- **Duração:** 12:12
- **Legenda:** pt-orig, gerada automaticamente (pode conter erros, principalmente em nomes próprios)
- **Revisada:** 12/11/2026

---
![[processamento-sequencial-paralelo.png]]
## Estratégias de solução: processamento sequencial e paralelo

Temos uma questão relacionada ao desenvolvimento do sistema. Vou aproveitar esta última pergunta para não deixar nenhum ponto do nosso planejamento passar em branco.

Quero apresentar algumas estratégias de solução. Tudo o que vou explicar aqui pode ser aplicado a diferentes cenários. Portanto, procure absorver essas ideias e dicas para ter, pelo menos, uma estratégia inicial em mente na hora de planejar suas próprias soluções.

### 1. Estratégia sequencial

Podemos começar imaginando uma estratégia de execução sequencial.

Considere que temos um fluxo composto por várias etapas: passo 1, passo 2, passo 3 e assim por diante.

Imagine que uma dessas etapas seja responsável por acessar o Gmail e obter mensagens. Vamos supor que ela consiga buscar 50 e-mails por chamada.

Se tivermos 10 mil e-mails para processar, precisaremos realizar:

**10.000 ÷ 50 = 200 chamadas**

Ou seja, serão necessárias 200 chamadas ao Gmail para obter todas as mensagens.

Se executarmos essas chamadas sequencialmente, uma depois da outra, teremos um processo bastante demorado.

Vale observar que o problema não está necessariamente no Gmail. Trata-se de um sistema extremamente robusto, para o qual obter 10 mil mensagens não representa um grande desafio. Uma chamada para recuperar 50 mensagens pode levar apenas alguns milissegundos.

O gargalo provavelmente estará em outra parte do processo: no modelo de IA, que precisa analisar as informações, tomar decisões, identificar os MCPs disponíveis, definir os parâmetros necessários e executar as chamadas.

Imagine que cada uma das 200 etapas leve de um a dois minutos. Nesse cenário, poderemos ter um processamento de várias horas.

Portanto, quando temos um problema com potencial para exigir centenas de etapas, pensar em uma solução exclusivamente sequencial pode não ser a melhor estratégia.

### 2. Estratégia paralela

Uma alternativa é executar várias etapas simultaneamente.

Voltando ao exemplo anterior, temos uma etapa responsável por obter 50 mensagens por chamada. Nada impede que executemos essa mesma etapa em paralelo, utilizando diferentes agentes.

Poderíamos iniciar:

- Agente A: processa 50 mensagens.
- Agente B: processa outras 50 mensagens.
- Agente C: processa outras 50 mensagens.
- Agente D: processa outras 50 mensagens.
- Agente E: processa outras 50 mensagens.

Com cinco agentes trabalhando simultaneamente, conseguimos processar 250 mensagens por rodada, em vez de apenas 50.

Isso reduz significativamente o tempo total de execução.

É importante entender que o tempo gasto na comunicação com o Gmail provavelmente será muito menor do que o tempo consumido pelo modelo de IA durante o planejamento e a execução das tarefas.

Por isso, distribuir o trabalho entre diferentes agentes pode ser uma estratégia bastante interessante.

### 3. Escolha dos modelos: planejamento e execução

Outro ponto importante é pensar na escolha dos modelos de IA desde o início do desenvolvimento da solução.

Podemos dividir o problema em duas grandes responsabilidades:

**Planejamento:** momento em que o modelo precisa compreender o problema, analisar os cenários disponíveis, avaliar as possibilidades e definir uma estratégia de execução.

**Execução:** momento em que o modelo coloca em prática o planejamento, seguindo as etapas e instruções previamente estabelecidas.

Essas duas responsabilidades podem exigir capacidades diferentes.

Na etapa de planejamento, normalmente queremos utilizar modelos mais avançados, com maior capacidade de raciocínio e análise. No caso do ChatGPT, por exemplo, podemos recorrer a modelos de última geração. Também existem alternativas avançadas de outros provedores, como os modelos Opus.

Esses modelos tendem a ter custos mais elevados, mas podem oferecer maior qualidade na elaboração da estratégia.

Já na etapa de execução, podemos utilizar modelos mais simples e econômicos, desde que tenham capacidade suficiente para realizar as tarefas estabelecidas.

Por exemplo, em vez de utilizar um modelo avançado durante todo o processo, podemos utilizar um modelo mais robusto para planejar a solução e outro mais econômico para executar as etapas.

Isso permite otimizar os custos sem necessariamente comprometer a qualidade do resultado.

É claro que essa escolha depende da natureza do problema e da criticidade das operações envolvidas.

A lógica, entretanto, permanece: modelos mais avançados podem ser utilizados no planejamento, enquanto modelos mais econômicos podem assumir a execução.

### 4. Comparando as estratégias: sequencial versus paralela

Vamos voltar às duas estratégias que apresentamos.

**Execução sequencial**

Quando executamos as tarefas sequencialmente, existe uma tendência de economia de tokens.

Isso acontece porque o raciocínio realizado em uma etapa pode ajudar nas etapas seguintes. O modelo já compreendeu o contexto, conhece as ferramentas disponíveis e entende melhor o que precisa fazer.

Assim, quando precisa repetir uma operação semelhante, pode aproveitar parte desse conhecimento, reduzindo a necessidade de reconstruir todo o raciocínio.

Por outro lado, o tempo total de processamento tende a aumentar, pois cada etapa precisa aguardar a conclusão da anterior.

Essa estratégia pode ser interessante quando:

- A economia de tokens é uma prioridade.
- O tempo de processamento não é um fator crítico.
- As etapas dependem dos resultados das etapas anteriores.
- Podemos deixar o processamento acontecer durante várias horas, por exemplo, durante a madrugada.

**Execução paralela**

Na execução paralela, conseguimos reduzir consideravelmente o tempo de processamento, pois várias tarefas acontecem simultaneamente.

Entretanto, existe uma contrapartida: cada agente pode precisar realizar novamente parte do raciocínio necessário para compreender o contexto, identificar os MCPs conectados, conhecer as funcionalidades disponíveis e verificar suas limitações.

Consequentemente, podemos ter um consumo maior de tokens.

Em compensação, o tempo de execução pode cair significativamente.

Imagine cinco tarefas que levariam individualmente de um a dois minutos. Em uma execução sequencial, poderíamos levar de cinco a dez minutos. Executando-as em paralelo, poderíamos concluir o trabalho em aproximadamente um a dois minutos, dependendo das condições de execução.

Portanto, a escolha depende do objetivo:

- Se queremos economizar tokens e não temos pressa, a execução sequencial pode ser mais interessante.
- Se queremos velocidade e aceitamos um possível aumento no consumo de tokens, a execução paralela pode ser a melhor alternativa.

### 5. Uma abordagem híbrida: sequencial e paralela

Também podemos combinar as duas estratégias.

Não precisamos escolher exclusivamente entre execução sequencial ou paralela. Podemos construir uma solução que utilize ambas, aproveitando as vantagens de cada abordagem.

Algumas etapas podem ser executadas sequencialmente, principalmente quando existe dependência entre elas. Outras podem ser distribuídas entre diferentes agentes e executadas simultaneamente.

Entretanto, essa possibilidade precisa ser considerada desde o nascimento da solução.

Por quê?

Porque, quando trabalhamos com paralelismo, precisamos garantir que os agentes estejam trabalhando com partes distintas das informações e, quando necessário, com arquivos separados.

Se vários agentes trabalharem simultaneamente sobre o mesmo arquivo ou recurso, existe o risco de um agente sobrescrever ou apagar o trabalho realizado por outro.

Esse tipo de conflito precisa ser previsto durante o planejamento da arquitetura da solução.

Portanto, pensar em paralelismo não significa simplesmente iniciar vários agentes ao mesmo tempo. É necessário definir como o trabalho será distribuído, quais informações cada agente poderá acessar e como os resultados serão consolidados.

### 6. Planejar antes de implementar

Na próxima aula, quero apresentar a solução que imaginei para esse problema.

Se você quiser, pode parar um pouco e colocar no papel como resolveria essa situação. Será interessante comparar as diferentes estratégias na próxima aula e, posteriormente, começar a executar o plano.

Quero também ser totalmente transparente com vocês: eu já havia pensado sobre esse problema e realizado alguns testes práticos.

Quando comecei a planejar a solução, tinha aproximadamente 6 mil e-mails não lidos. Agora tenho cerca de 10 mil.

Por quê?

Porque aproximadamente 6 mil mensagens já foram resolvidas durante meus experimentos e planejamentos.

Isso significa que aquilo que estou apresentando aqui já é resultado de algumas reflexões e testes realizados na prática.

Ainda assim, quero destacar que as questões que discutimos são importantes para ajudar você a resolver problemas semelhantes no seu dia a dia.

Faz sentido parar para pensar. Faz sentido fazer perguntas, compreender melhor o problema, analisar os cenários disponíveis e construir uma resposta bem fundamentada.

Tudo isso faz parte do processo de resolução de problemas.

Precisamos identificar atividades que hoje são realizadas manualmente e avaliar quais delas podem ser automatizadas por agentes de IA.

Mas existe um requisito fundamental: esses agentes precisam receber um plano claro e bem descritivo, especificando exatamente o que devem fazer.

Caso contrário, poderão executar ações fora do esperado, comprometendo o funcionamento de todo o fluxo.

Na próxima aula, vamos discutir a solução que será implementada. No capítulo seguinte, começaremos efetivamente a implementação do plano.
