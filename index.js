const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;

const presser = String.raw` DISCORD SERVER NUKER`

console.log(red(presser));

client.on("ready", () => {
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                      Logged in as: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                                      Prefix: ${prefix}`));
    console.log(greenBright(`                                      DisableEveryone: ${disableEveryone}`));
    console.log(greenBright(`                                      Permission Required: ADMINISTRATOR`));
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "PLAYING", name: "presser" }); // Delete this if you wish.
});


