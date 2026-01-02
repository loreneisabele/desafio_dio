/*
Desafio 2 / 3 - Chatbot Corporativo: Núcleo De Decisão

Você foi contratado pela ChatBotX, uma startup inovadora que desenvolve assistentes virtuais para empresas de diversos setores. Seu primeiro desafio é criar o núcleo de decisão de um chatbot corporativo, responsável por responder rapidamente a comandos básicos dos usuários. Cada comando recebido pelo chatbot corresponde a uma ação específica, como mostrar o horário de funcionamento, informar o telefone de contato, listar serviços ou encerrar a conversa. Para garantir respostas rápidas e precisas, a equipe de desenvolvimento decidiu que a lógica de decisão deve ser implementada utilizando a estrutura switch case. Sua tarefa é construir essa lógica, garantindo que o chatbot responda corretamente a cada comando reconhecido e retorne uma mensagem padrão para comandos desconhecidos.

Implemente um programa que leia uma string representando o comando enviado ao chatbot e utilize uma estrutura de decisão para determinar a resposta apropriada. Os comandos reconhecidos são: "horario", "telefone", "servicos" e "sair". Para qualquer outro comando, o chatbot deve responder com "Comando invalido". Não utilize bibliotecas externas e siga exatamente os textos especificados para as respostas.

Entrada
Uma única string representando o comando enviado ao chatbot. Os comandos são sensíveis a letras minúsculas e não possuem espaços.

Saída
Uma única string com a resposta do chatbot, de acordo com o comando recebido. Para comandos não reconhecidos, imprima "Comando invalido".

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

|Entrada	|Saída                                      |
|-----------|-------------------------------------------|
|horario	|Atendemos das 8h as 18h                    |
|telefone	|Nosso telefone e 4002-8922                 |
|servicos	|Oferecemos suporte, vendas e consultoria   |
|ajuda	    |Comando invalido                           | 
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

// Lê o comando do usuário
const comando = gets();

// TODO: Implemente a estrutura switch case para decidir a resposta do chatbot com base no comando recebido

mensagemRecebida = comando


if (mensagemRecebida === "horario") {
    console.log("Atendemos das 8h as 18h")
}
else if (mensagemRecebida === "telefone") {
    console.log("Nosso telefone e 4002-8922")
}
else if (mensagemRecebida === "servicos") {
    console.log("Oferecemos suporte, vendas e consultoria")
}
else if (mensagemRecebida === "ajuda") {
    console.log("Comando invalido")
}
else {
    console.log("unknown command")
}