let listaAlunos = ["leonardo", "Robson", "Rafael", "Raiane"]

let quantidadeAlunos = 5;

for (let contador = 0; contador < listaAlunos.length; contador++) {


if (contador == 0) {
    console.log(`o aluno ${listaAlunos[contador]} é o número zero`)
 } else if (contador % 2 == 0){
     console.log("o aluno" + listaAlunos [contador] + " é número" + contador + ": par")
 } else if (contador % 2 == 1) {
    console.log(`o aluno ${listaAlunos[contador]} é número ${contador}: impar`)
 }
 }
