const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#"
const edwarddev = ["389136174154907651","476503634411257858","",""]
console.log("TURNED ON !")
client.on('message', async message => {
  let working = client.emojis.find(r => r.name === 'Working');
    var command = message.content.toLowerCase().split(" ")[0];
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
       
    var subChannel = message.guild.channels.find(c => c.name === 'submites');
   
  if(message.content.startsWith(prefix + 'buy')) {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
       
               let embed = new Discord.RichEmbed()
        message.channel.send(` ${working} **Select your kit. 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:one:  [ FULL KIT ] 
:two:  [ MED KIT ]
:three:  [ LOW KIT ] 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:**
${message.author} `).then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
              let evon = client.emojis.find(r => r.name === 'Evon');
                msgS.edit(`${evon} **Right Now Write Your Bot/s Name.** ${message.author} `).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(` ${evon} **What do you want to be a Prefix ?** ${message.author}`).then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(` ${evon} **Do you have any note ?** ${message.author}`).then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       let evon = client.emojis.find(r => r.name === 'Evon');
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription(`**\n ${evon} Are you sure about your order?**`)
                                        .setColor('GREEN')
                                        .addField('⚪ Order Number', name, true)
                                        .addField('⚪ Bot/s Name', age, true)
                                        .addField('⚪ Bot/s Perfix/s', fromwhere, true)
                                        .addField('⚪ More Information', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark:  **| Your request has been submitted. **')
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('رقم الطلبيه', name)
                                                .addField('اسم البوت,اسامي البوتات', age)
                                                .addField('برفكس البوت,برفكسات البوتات', fromwhere)
                                                .addField('اشياء اضافية', fa2dh)
                                                .addField('حسابه', message.author)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('👌').then(() => msgS.react('❎'))
                                                   

                                                   
                                                   
                                                   
                                                 
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                 msgS.delete();
                                                message.channel.send(':negative_squared_cross_mark:  **| the request has been canceled. **');
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
  }
});



client.on('ready' , async ready => {
 client.user.setActivity("You", {type:'WATCHING'});
});



client.login(process.env.token)
