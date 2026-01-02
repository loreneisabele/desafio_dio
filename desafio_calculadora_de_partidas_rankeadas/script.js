let nivel = ""

let ganhou = false//true

let vitorias = 25
let derrotas = 2


if (ganhou) {
    vitorias += 1
}
else {
    derrotas += 1
}

let saldoVitorias = vitorias - derrotas


if (saldoVitorias < 10) {
    nivel = "Ferro"
}
else if (saldoVitorias <= 20) {
    nivel = "Bronze"
}
else if (saldoVitorias <= 50) {
    nivel = "Prata"
}
else if (saldoVitorias <= 80) {
    nivel = "Ouro"
}
else if (saldoVitorias <= 90) {
    nivel = "Diamante"
}
else if (saldoVitorias <= 100) {
    nivel = "Lendário"
}
else if (saldoVitorias >= 101) {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel + ".")