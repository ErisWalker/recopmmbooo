const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
    

        process.exit(0);
    });

};

exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [],
  permLevel: 5//bu kalsın değiştirmeyin
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};