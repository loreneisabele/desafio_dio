class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if (this.tipo === "mago") {
            return `o ${this.tipo} atacou usando magia`
        }
        else if (this.tipo === "guerreiro") {
            return `o ${this.tipo} atacou usando espada`
        }
        else if (this.tipo === "monge") {
            return `o ${this.tipo} atacou usando artes marciais`
        }
        else if (this.tipo === "ninja") {
            return `o ${this.tipo} atacou usando shuriken`
        }
    }

}



let tipoMago = new Hero("Harry", 30, "mago")
let tipoGuerreiro = new Hero("Stark", 17, "guerreiro")
let tipoMonge = new Hero("Zen", 17, "monge")
let tipoNinja = new Hero("Naruto", 20, "ninja")


console.log(tipoMago.atacar())
console.log(tipoGuerreiro.atacar())
console.log(tipoMonge.atacar())
console.log(tipoNinja.atacar())