//console.log = print
console.log("Ola mundo");

//não precisa do ponto e vírgula no final da linha de comando, a não ser que estejam na mesma linha

//let inicia variável
let nome = "Davi Barbosa Nunes";
let idade = 19;
let altura = 1.73;

console.log("info do Reizinh:", nome, idade, altura, false, true, null);

//instanciando um obj
/*let objeto = {
    "nome" : "Davi B. B. Nunes",
    "idade" : 19,
    "altura" : 1.73,
}
*/

//usando variáveis no objeto
let objeto2 ={
    nome,
    idade,
    altura
}
console.log(objeto2);

console.log("");
//Usando VETORES

//usando conchetes
let modelos = ['gol','corsa','fusca'];

//usando o construtor Array()
let marcas = Array('chevrolet','ford','fiat');

//definindo um valor fixo atraves da Array
let acessorios = new Array(5);

//criando um vetor vazio
let cores = [];

// ou
let categorias = new Array();

/*
console.log(modelos);
console.log(marcas);
console.log(acessorios);
console.log(cores);
*/
/*
console.log(modelos[0]);
console.log(modelos[1]);
console.log(modelos[2]);
*/
console.log("")
console.log("")
console.log("MANIPULANDO ARRAYS")

//Adcionando elementos ao fim do array
console.log(modelos)
console.log("adicionando elementos ao fim do array")
modelos.push ('HB20');
console.log(modelos)

//Adcionando elementos ao ínicio do Array
console.log("Adicionando moto aos modelos de carro Erroniamente")
modelos.unshift ('pop100','logan')
console.log(modelos);

//removendo o primeiro elemento do array
console.log("removendo o modelo da moto")
modelos.shift ();
console.log(modelos);

//removendo o último elemento do array
console.log("removendo o último elemento do array")
modelos.pop();
console.log(modelos);

