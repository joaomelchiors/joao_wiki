fonte: https://escola.formacao.dev/arquiteto-dev/sala/imersao-ddd-arq-limpa?aula=d76ce28e-35ee-455f-af6f-db256e2cda31
# Transcrição ProjetoEAD Tratamento de Erros

Eu vou rodar aqui o projeto NPM run dev pra gente ter o projeto rodando e veja tudo funcionando. De ontem para hoje não mexi em nada que pudesse quebrar o projeto. Na verdade, não mexi em nada. E aqui a gente vai acessar na porta 3000 o nosso projeto e a gente tem um projeto vazio. A gente vai começar a trabalhar aqui o projeto agora. Beleza, gente, no primeiro dia a gente falou sobre, nós falamos sobre começamos a configurar o projeto, falamos sobre a ideia de chamar um caso de uso independente se você está no front-end ou no back-end. A gente pode imaginar que a programação orientada a objetos, ela é flexível o suficiente pra te ajudar a modelar a tua aplicação, tanto sendo front-end como back-end. Até porque hoje em dia o front-end tem como persistir dados no front-end, você tem como ter aplicação rica no front-end, você tem como aplicar praticamente tudo o que você faz numa aplicação full stack, você consegue fazer no front-end. E no back-end, também, a ideia de aplicar programação orientada a objetos é algo extremamente usado e aplicado pra que você possa dividir a tua aplicação de uma forma que faça sentido. Então, o nosso objetivo hoje é talvez tentar andar um pouquinho mais rápido pra que a gente possa realmente implementar aqueles fluxos que a gente se propõe a implementar, que são os fluxos de autenticação e depois os fluxos lá de créditos e débitos e tal. Então vamos lá. Dentro da parte de autenticação, nós terminamos o dia ontem trabalhando a ideia do modelo. Nós criamos uma É, nós criamos aqui uma classe de modelo, né, de usuário e a partir dessa classe aqui de usuário, a gente fez aqui, não foi exatamente testes, né, a gente colocou aqui só pra criar uma classe, colocamos aqui um OK e a gente viu que ele validou casos de a gente colocasse, por exemplo, o usuário sem o sobrenome, ele aplicaria a validação, quebraria, tá, mostrando aqui a mensagem de erro e a gente ficou numa situação que a gente poderia eventualmente querer trabalhar a ideia de ter múltiplos erros sendo executado ao mesmo tempo, tá? Então, eventualmente a gente poderia fazer de uma forma que, sei lá, a gente poderia tratar o erro e eventualmente ter vários erros ao mesmo tempo ali na na nossa classe de usuário e não apenas um único erro, que é uma demanda que eventualmente a galera acaba comentando, porque dessa forma, quando você encontra um objeto de valor que está errado e ele já joga uma exceção, meio que você não vai conseguir ter uma visão geral de todos os erros que possam acontecer. Eu até coloquei lá na parte compartilhada a ideia de ter uma classe chamada resultado, certo? E essa classe resultado, ela poderia executar aqui uma função e a gente poderia ter uma, sei lá, uma função que representasse um dado bem sucedido. Na verdade, eu poderia fazer um pouquinho diferente, ó. Eu poderia colocar aqui o OK para ser uma função estática, certo? Que nem eu eu fiz no outro sistema aqui que que eu trabalhei, ó. A gente fez... eu poderia criar um resultado OK, então, por exemplo, OK recebe um valor e aí eu simplesmente crio um resultado com aquele valor que foi colocado. E eu posso ter também um resultado de falha, que eu posso receber uma lista de erros e eventualmente passar um valor nulo ou undefined para o meu resultado. Talvez pode ser um undefined, ou seja, nem foi definido o valor, tá? E você passa aqui um erro, caso você queira falhar ali num cenário específico. E aí o que a gente poderia fazer aqui é se ele funcionar, a gente poderia criar aqui um resultado OK passando o resultado da função. Se der certo, ele vai voltar um resultado bem-sucedido. Se der errado, ele vai cair aqui num caso de exceção e a gente pode ter um resultado de falha, que é basicamente você passar aqui a lista de erros, né? Então, um resultado que falhou e aí você passa a lista de erros como parâmetro pra função. E a partir daqui, você consegue ter, por exemplo, se ele falhou, né? Se for um resultado que falhou, um resultado que deu sucesso, né? Então, por exemplo, a suceeded, eu acho que é assim, acho que não está, acho que tem um mais aqui, não sei se pronuncia assim, mas resolve já aqui o problema. Ou seja, um resultado que deu bem-sucedido e um resultado que eventualmente falhou, caso eu queira saber, né, ou get failed, se ele não foi bem-sucedido ou se a lista de erros for maior do que 0. Beleza, aí a ideia é que a gente pode pegar um resultado. Combinar esse resultado juntando tudo aquilo que foi gerado e a gente sabe se tem algum erro em algum dos resultados que foram feitos. Então pegamos resultados, a gente vai pegando aqui um flat mapping de cada um dos resultados e pegando apenas os erros. Se os erros forem, digamos assim, maior do que zero, a gente vai eventualmente ter um resultado que deu falha, né? Então, por exemplo, se erro ponto length for maior do que zero, a gente vai ter opa, a gente vai ter aqui um resultado que falha e caso dê certo, a gente pode ter um resultado OK, entendeu? E a gente sabe se eventualmente funcionou ou não. Como é que a gente poderia usar isso aqui nesse caso? A gente poderia colocar aqui, por exemplo, um possível nome recebe um resultado results. Eu não sei se eu exportei ele lá, mas a gente poderia importar aqui o resultado e exportar. É uma classe. O que que é esse resultado? É uma classe que encapsula o resultado de uma operação. Basicamente isso, né? E aí eu posso colocar results.try e eu vou tentar criar o nome da pessoa, possível e-mail, um possível senha. Beleza. No final, eu posso colocar aqui se for um resultado, por exemplo, usuário válido, pode ser um resultado.combine, possível nome, e-mail e senha. Se ele for for um resultado válido, né? ou eu posso colocar simplesmente resultado aqui ó resultado e aí eu posso colocar se resultado falhou, eu jogo não só essa exceção, mas eu posso jogar tipo todas as exceções, entendeu ó Então ou então eu posso fazer até uma uma questão aqui ó dentro de resultado. eu poderia criar uma função que lança uma exceção caso tenha algum erro. Então eu posso colocar, por exemplo, eh uma função throw. Ah, seria uma função tipo assim ó throw error failed, por exemplo. E aí, se ele falhou, eu jogaria a exceção ou eu posso simplesmente jogar tipo tudo aqui ó desde ponto erros. Posso jogar todos os erros de uma vez só e ele vai mostrar eventualmente eh todos os erros lá na na hora de executar, porque ele vai lançar uma rede de erros nesse caso, né? Então aí eu posso colocar aqui ó resultado. Ele vai lançar se falhar alguma coisa. Se der tudo certo, o que eu posso pegar é um possível nome ponto valor, porque eu sei que ele criou o nome, um possível e-mail vai ter um valor e a possível senha vai ter um valor. E aí eu posso pegar os os resultados que eu tentei aqui, se deu certo, aqui embaixo eu vou conseguir pegar esse resultado. Se tudo der certo, o que eu tentei fazer aqui, fiz de uma forma um pouco mais rápida, né? Mas só pra vocês entenderem, porque não é o foco específico do nosso treinamento. eh ó, ele jogou aqui um erro. Ah, não pode ler o try. Resultado deu um problema antes de realmente fazer aqui a execução de ver o que aconteceu. Resultado.try. Deixa eu ver aqui se executa na função. Vamos ver lá o resultado se a gente tem aqui ó um combine. Static não sei se ele deu problema aqui no no build. Deixa eu ver aqui se deu tudo certo. Em teoria tá dando certo aqui o build. Vou executar aqui pra ver se. Build do. O João disse aqui que precisa instanciar o result Léo. Precisa instanciar. Acho que ele é. É estático, é o ele é um método estático, né? Então ó result ponto executado. Vamos ver se. Ó. Cannot read property of undefined, reading try. Resultado. Será que eu estou importando o resultado errado? Não, tá aqui o resultado. O valor estático. Não sei exatamente o que pode estar acontecendo no default class results. Construtor é criado aqui, aqui. E resultado ponto OK, eu retorno o resultado. OK tá retornando o resultado exatamente. Estou instanciando aqui uma função está aqui. Não sei exatamente porque que está acontecendo isso. Result ponto try. Não sei se tem a ver com o fato de estar rodando no NodeRead. Property of undefined. tá tentando new try aqui não possível, não new try. Mostrar isso aqui. Não tem problema, não. A gente dá um rollback aqui e depois eu vejo o que é que tá acontecendo com esse com essa função aqui results.try. Deixa eu ver se eu exportei direito lá. Ah, Index estou exportando aqui o resultado. Ah, sim. Eu estou exportando como type, né? Mas é o export, o export normal, né? Porque é uma classe. Eu não posso exportar como se fosse uma interface, entendeu? Então é isso. Vou executar. Pronto. Agora, eventualmente funcionou aqui o nosso a nossa é o nosso método. Vamos ver agora se ele consegue eh detectar tipo vários erros aqui ao mesmo tempo. Eu tenho um erro no nome, tenho um erro no e-mail e tenho um erro na senha, certo? Então, executando aqui, ó, ele deu um erro, ele retornou uma rede de erros, ó, Person name, surname missing, que é o primeiro erro que deu. O outro erro foi e-mail inválido. E o outro erro foi um hash password invalid, ou seja, retornou uma rede de erros em vez de retornar um erro só. E eu poderia encapsular esses vários erros dentro de uma exceção da minha aplicação, tipo um Validation Exception, alguma coisa do tipo. Então, por mais que você tenha Eventualmente, um objeto que qualquer coisa que aconteça, ele gera um erro, você não é obrigado a parar no primeiro erro e você pode usar essa classe de resultado para te ajudar a fazer as validações, né? Mesmo que tenha erros lá, ele vai combinar tudo. Se tiver um erro apenas, ele já joga o erro e lança, mas se der tudo certo, você consegue instanciar o objeto. Então o que é uma forma simples, né? Não é muito poluída, digamos assim, que você tem de mesmo que tiver erros, você continuar ali executando o teu código. E e essa função Try serve pra qualquer coisa, né? Serve pra você fazer uma chamada no backend, uma coisa que pode dar um erro e ver se realmente deu certo ou se não deu. Você poderia tentar eventualmente encapsular aqui. 11 questão de tentar mais de uma vez. Ah, o tem é um método que falha muito, né? Então eh tente uma vez se falhar, dê um intervalo de tantos segundos e tente novamente. Se falhar, tente novamente tal. E aí você poderia encapsular também até uma uma tentativa de fazer uma chamada, por exemplo, para uma API e ficar encapsulado aqui dentro, pode ser 11 coisa interessante.

O código final da classe Result
``` typescript
export class Result<T> {
    constructor(
        private readonly _instance?: T | null,
        private _errors?: string[],
    ) {}

    static ok<T>(instance?: T): Result<T> {
        return new Result<T>(instance ?? null);
    }

    static fail<T>(e: string | string[]): Result<T> {
        const erro = typeof e === 'string' ? [e] : e;
        return new Result<T>(undefined, Array.isArray(erro) ? erro : [erro]);
    }

    static async try<T>(fn: () => Promise<Result<T>>): Promise<Result<T>> {
        try {
            return await fn();
        } catch (e: any) {
            return Result.fail<T>(e);
        }
    }

    static trySync<T>(fn: () => T): Result<T> {
        try {
            return Result.ok<T>(fn());
        } catch (e: any) {
            return Result.fail<T>(e);
        }
    }
  
    throwIfFailed(): never | void {
        if (this.isFailure) {
            throw this.errors;
        }
    }

    get instance(): T {
        return this._instance!;
    }
  
    get errors(): string[] | undefined {
        const semErros = !this._errors || this._errors.length === 0;
        if (semErros && this._instance === undefined) {
            return ['RESULT_UNDEFINED'];
        }
        return this._errors;
    }

    get isOk(): boolean {
        return !this.errors;
    }
  
    get isFailure(): boolean {
        return !!this.errors;
    }
  
    get withFail(): Result<any> {
        return Result.fail<any>(this.errors!);
    }
  
    static combine<const R extends readonly Result<any>[]>(
        results: R,
    ): Result<{ [K in keyof R]: R[K] extends Result<infer T> ? T : never }> {
        const errors = results.filter((r) => r.isFailure);
        if (errors.length) {
            return Result.fail(errors.flatMap((r) => r.errors!));
        }
 
        const instances = results.map((r) => r._instance) as unknown as {
            [K in keyof R]: R[K] extends Result<infer T> ? T : never;
        };
        return Result.ok(instances);
    }

    static async combineAsync<T>(results: Promise<Result<T>>[]): Promise<Result<T[]>> {
        const rs = await Promise.all(results);
        return Result.combine(rs);
    }
 
    toString(): string {
        if (this.isOk) {
            return `Result.ok(${JSON.stringify(this._instance)})`;
        } else {
            return `Result.fail(${JSON.stringify(this._errors)})`;
        }
    }
}
```