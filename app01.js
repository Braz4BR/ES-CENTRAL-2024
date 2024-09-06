
let frutas = ['laranja', 'melância', 'morango'];
let vegetais = ['batata doce', 'cenoura', 'milho'];
let feira = frutas.concat(vegetais);

//exibindo o vetor
console.log(feira)
console.log()

let frutas2 = ['banana', 'maça','pera','uva','tomate','caju']

console.log("")
console.log("Selecionando apenas alguns elementos do array")
console.log("")

let frutas2_sel = frutas2.slice(0,4);
console.log(frutas2_sel)
console.log("")

//Alterando ou removendo elementos da array
console.log("frutas")
console.log("")

frutas2.splice(1,1,'manga')
//primeiro parametro é onde esta o index, o seguinte é quantos elementos devem apagar, quando for acompanhada de um "" é o que deve ser escrito no lugar apagado.
console.log(frutas2)
console.log()

//Varificando se elemento está contido no Array falidando-os
let nomes = frutas2.includes('josé');
let nanana = frutas2.includes('banana');
console.log(nomes);
console.log(nanana);
