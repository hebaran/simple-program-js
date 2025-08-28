const NOTAS = []
let media = 0

while (true) {
    let input = window.prompt("Digite a nota: ").replace(",", ".")

    if (input == "exit"){
        console.log("Encerrando o programa.")
        break
    }

    input = Number(input)

    if (!Number.isNaN(input)) {
        NOTAS.push(input)
    }
    else {
        console.log("Valor inválido, digite um número")
    }
}

for (let posicao = 0; posicao < NOTAS.length; posicao++) {
    let nota = NOTAS[posicao]
    media += nota

    console.log(`${posicao + 1}º Nota -  ${nota}`)
}

media /= NOTAS.length
console.log(`A média do aluno foi: ${media.toFixed(2).replace(".", ",")}`)

if (media >= 7) {
    console.log("Parabéns! Aluno aprovado!")
}
else {
    console.log("Que pena! Aluno reprovado!")
}
