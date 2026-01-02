/*
Desafio
2 / 3 - Saudação Personalizada Para Plataforma De Conversa Multicanal

Você foi contratado como desenvolvedor júnior em uma startup que está criando uma plataforma de inteligência conversacional para automatizar conversas entre marcas e clientes em múltiplos canais digitais. Seu primeiro desafio é ajudar a equipe a padronizar as saudações automáticas enviadas aos usuários. Para isso, você deve criar uma função que receba o nome do canal digital (por exemplo, "WhatsApp", "Instagram", "Webchat") e o nome do cliente, e retorne uma mensagem personalizada de saudação no formato correto. A plataforma precisa garantir que cada saudação siga o padrão: "Ola, [nome do cliente]! Bem-vindo ao canal [nome do canal]." Certifique-se de implementar a função de forma que ela possa ser facilmente adaptada para outros canais no futuro, utilizando parâmetros para os nomes. Não utilize bibliotecas externas.

Implemente uma função que receba dois parâmetros: o nome do canal e o nome do cliente, ambos como strings. A função deve retornar a mensagem de saudação personalizada conforme o padrão especificado acima.

Entrada
Duas strings separadas por uma quebra de linha: a primeira representa o nome do canal digital, e a segunda representa o nome do cliente.

Saída
Uma única string contendo a mensagem de saudação personalizada, exatamente no formato especificado.

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

|Entrada	        |Saída                                      |
|-------------------|-------------------------------------------|
|WhatsApp Lucas	    |Ola, Lucas! Bem-vindo ao canal WhatsApp.   |
|Instagram Ana	    |Ola, Ana! Bem-vindo ao canal Instagram.    |
|Webchat Joao	    |Ola, Joao! Bem-vindo ao canal Webchat.     |
|Telegram Maria	    |Ola, Maria! Bem-vindo ao canal Telegram.   |

*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Lê as entradas do usuário
const canal = gets();
const cliente = gets();

// TODO: Imprima a mensagem de saudação personalizada no formato solicitado usando os valores lidos

function msgAuto(cliente, canal) {
    console.log(`Ola, ${cliente}! Bem-vindo ao canal ${canal}.`)
}

msgAuto(cliente, canal)
