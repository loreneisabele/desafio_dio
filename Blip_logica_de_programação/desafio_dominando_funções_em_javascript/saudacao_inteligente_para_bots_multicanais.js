/*
Desafio
Você foi contratado como desenvolvedor júnior em uma startup que está criando uma plataforma de inteligência conversacional para automatizar conversas entre marcas e clientes em múltiplos canais digitais. Seu primeiro desafio é ajudar a equipe a construir uma função que simule o comportamento de um bot de saudação. O bot deve receber uma mensagem do usuário e responder de acordo com o canal digital informado. Cada canal tem uma saudação personalizada: para "whatsapp", o bot responde "Ola, este e o WhatsAppBot!"; para "telegram", responde "Ola, este e o TelegramBot!"; para "webchat", responde "Ola, este e o WebChatBot!". Se o canal informado não for reconhecido, o bot deve responder "Canal nao suportado". Sua tarefa é implementar uma função que, dado o nome do canal, retorne a saudação correta. Não utilize bibliotecas externas e implemente a lógica em apenas uma função com retorno.

Entrada
Uma única string representando o nome do canal digital. Os valores possíveis são: whatsapp, telegram, webchat ou qualquer outro valor não listado.

Saída
Uma única string contendo a saudação personalizada para o canal informado, ou "Canal nao suportado" caso o canal não seja reconhecido.

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

|Entrada	 |Saída                       |
|------------|----------------------------|
|whatsapp    |Ola, este e o WhatsAppBot!  |
|telegram    |Ola, este e o TelegramBot!  |
|webchat	 |Ola, este e o WebChatBot!   |
|email	     |Canal nao suportado         |

*/
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Função que retorna a saudação personalizada conforme o canal informado
function saudacaoBot(canal) {
    // TODO: Retorne a saudação correta para cada canal ou "Canal nao suportado" se não reconhecido
    if (canal === "whatsapp") {
        console.log("Ola, este e o WhatsAppBot!")
    }
    else if (canal === "telegram") {
        console.log("Ola, este e o TelegramBot!")
    }
    else if (canal === "webchat") {
        console.log("Ola, este e o WebChatBot!")
    }
    else {
        console.log("Canal nao suportado")
    }
}

// Entrada do usuário
const canal = gets();

// Chama a função e imprime a resposta
// print(saudacaoBot(canal));
saudacaoBot(canal)