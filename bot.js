const Discord = require("discord.js");

const TOKEN = "MzczNDAyNTY4NzExMjA4OTc1.DNSyQA.sbgrlx_vf4u6mpKDt1HjkccMe6k";
const PREFIX = "!"
var bot = new Discord.Client();


    bot.on("ready", function() {

        console.log("Ready");
        
    });

    bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    

    if (message.content == "hello") {
        message.channel.sendMessage("Welcome Back!");
    }

    if (message.content == "jesos u real?") {
        message.channel.sendMessage("Yes, my child");
    }

    if (message.content == "ALLAHU AKBHAR") {
        message.channel.sendMessage("LOL nigga, there are plenty of terrorists here, better shut the fuck up");
        message.channel.sendMessage("Before this place explodes");
    }

    

  
   
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0])  {
        case "imgay":
        message.channel.sendMessage("lol, really?");
        break;
        
        case "gaylist" :
        message.channel.sendMessage("----------------------");
        message.channel.sendMessage("The following niggas are gay");
        message.channel.sendMessage("Cassadin, Umayr");
        message.channel.sendMessage("----------------------");
        break;

    }
    
});

client.login(process.env.BOT_TOKEN);
