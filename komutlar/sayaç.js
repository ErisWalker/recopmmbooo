const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
 
exports.run = async (client, message, args) => {
        if(!args[0]) {
     
                        message.channel.send(`<a:x:638330843626078217> | Lütfen geçerli bir sayı belirtiniz! \n\n> <a:ok_hand:638330859254054916>  Örnek Kullanım: .sayaç sayı #sayaç #Kanalı`)
            
                return
  }
 
        let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.RichEmbed()
  .setDescription('Sayaç kanalı belirtmelisiniz!')
  .setColor("AEDD13")
                        .setTimestamp()
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(s1);
 
 
        if(args[0] === "sıfırla") {
                if(!profil[message.guild.id]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription(`<a:x:638330843626078217> | **Sayaç ayarlanmadığından dolayı sıfırlanamaz!**`)
                                .setColor("AEDD13")
                                .setTimestamp()
                        message.channel.send({embed})
                        return
                }
                delete profil[message.guild.id]
                fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
                        console.log(err)
                })
               
                        message.channel.send(`<a:white_check_mark:638330840224628776> | **Sayaç başarılı bir şekilde sıfırlandı!**`)
                    
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:x:638330843626078217> | **Lütfen geçerli bir sayı belirtiniz!**`)
                        .setColor("AEDD13")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= message.guild.memberCount) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<a:x:638330843626078217> | Lütfen, [${message.guild.memberCount}] **rakamlı sayıdan daha yüksek bir değer belirtiniz!**`)
                        .setColor("AEDD13")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(!profil[message.guild.id]){
                profil[message.guild.id] = {
                        sayi: args[0],
      kanal: mentionedChannel.id
                };
        }
       
        profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
       
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
                console.log(err)
        })
 

                message.channel.send(`<a:white_check_mark:638702179623895050> ◆ **Sayaç Ayarlandı** ◆ <a:white_check_mark:638330840224628776> \n\n┏╋━━━━◥◣◆◢◤━━━━╋┓ \n\nAyarlanan Hedef: \`${args[0]}\`  \n\nSayaç Kanalı: ${mentionedChannel} \n\n┗╋━━━━◥◣◆◢◤━━━━╋┛`)
        
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayaç'],
        permLevel: 2,
        kategori: "moderasyon"
}
 
exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sayaç, ayarlar!',
        usage: 'sayaç-ayarla [sayı/sıfırla] [kanal]'
}
//Salty Destek Sunucu Küçük Altyapı