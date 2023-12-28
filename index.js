const TelegramBot = require('node-telegram-bot-api');
const token = '6827778871:AAEJqA_nisdF_9h-ymo1uC_gO_1UgyNGL2Y';
const Pool = require("pg").Pool
const bot = new TelegramBot(token, {polling: true});

const pool = new Pool({
    'host':'localhost',
    'user':'postgres',
    'password':'Onlasbek1',
    'port': 5432,
    'database':'almatyng5571'
})



bot.on('message', async  (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(msg)
    switch(text){
        case '/start':
            await bot.sendMessage(chatId, `${msg.from.first_name}====${chatId}`)
            await bot.sendMessage(chatId, "Я бот") 
            break;
        case '⭐️Командование':
            await getData(chatId,  1); 
            break; 
        case '⭐️Штаб':
            await getData(chatId,  2); 
            break;   
       
    }
    
      
});