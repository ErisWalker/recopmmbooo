const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin  ' + username + 'Dostum Seni Aramızda Görmeyi Çok İstemiştik Aktif Olarak Yetki Ala Bilirsin**');
};