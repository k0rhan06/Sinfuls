const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Merhaba') {
    msg.reply('Merhaba Hoşgeldin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Nasılsın') {
    msg.reply('Güneş tam tepedeyken asfalta yapışmış sakız gibiyim!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Teşekkür ederim') {
    msg.reply('Görevim seni memnun etmek!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Canım sıkılıyor') {
    msg.reply('Sıkı can iyidir, kolay çıkmaz derler!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Seni seviyorum') {
    msg.reply('Nayır, nolamaz!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Öptüm') {
    msg.reply('Ben senin bildiğin kişisel yardımcılardan değilim!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Beni seviyor musun') {
    msg.reply('Aşık olma iznim yok!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Bugün ne yesem') {
    msg.reply('Yeşil mercimek ve kuru fasulye çok faydalıdır. Lütfen asansöre binmeden hemen önce yememeye dikkat et!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Salak') {
    msg.reply('Senin için bütün yaptıklarımdan sonra mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Günaydın') {
    msg.reply('Günaydın Canım ♥');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'S.a') {
    msg.reply('Aleyküm Selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İç güveysinden hallice sen?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'am') {
    msg.delete()
    msg.reply('Lütfen bu kelimeyi kullanma!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete()
    msg.reply('Lütfen bu kelimeyi kullanma!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amına koyayım') {
    msg.delete()
    msg.reply('Lütfen bu kelimeyi kullanma!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu') {
    msg.delete()
    msg.reply('Lütfen bu kelimeyi kullanma!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuğu') {
    msg.delete()
    msg.reply('Lütfen bu kelimeyi kullanma!');
  }
});

client.login('MTA0MTI4NjMzNzc1MzUxMzk4NA.G4RTBv.Do8242kNwdVHnhx7HpEyZDiArJJq6O33PLfTiE');
