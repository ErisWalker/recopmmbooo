const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`<a:x:638330843626078217> | Sayaç, ayarlanmadığından dolayı sıfırlanamaz!`)
        .setFooter('Salty, Sayaç sıfırlama sistemi', client.user.avatarURL)
                .setColor("1ED760")
                .setTimestamp()
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`<a:ok_hand:638330859254054916> | Sayaç, başarılı bir şekilde sıfırlandı!`)
      .setFooter('Salty, iyi eğlenceler diler!', client.user.avatarURL)
            .setColor("1ED760")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sayaç-kapat'],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-sıfırla', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};