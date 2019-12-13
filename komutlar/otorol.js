const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));


exports.run = async (bot, message, args) =>
{
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("**Otomatik Rol Sistemi Bilgi** \n\n <a:uyar:638802527034408960> Kullanım: `.otorol @Verilecek Rol #Otorol #Mesaj Kanalı` ");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("<:yesilyuklenior:619244353759477782> **Doğru Kullanım = .otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	
		message.channel.send("<a:ugen:638702179623895050> ◆ **Otorol Ayarlandı** ◆ <a:solok:639082196145274880> \n\n┏╋━━━━◥◣◆◢◤━━━━╋┓ \n\nOtorol bu sunucuda aktif edildi. \n\nKapatmak için `.otorol-kapat` yazabilirsin.\n\n┗╋━━━━◥◣◆◢◤━━━━╋┛")
        
		
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}//emoji olan yerler sizde undefiened sa silin