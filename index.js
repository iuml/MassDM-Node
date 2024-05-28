
console.clear()
const { Discord, Collection, Client, MessageAttachment } = require('discord.js-selfbot-v13');
const config = require('./config.json');
const fs = require('fs');
const client = new Client({

  checkUpdate: false

})
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const log = console.log;

function setTerminalTitle(title) {
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  );
}

const Ascii = ((`

██████╗ ███╗   ███╗██████╗  ██████╗ ████████╗
██╔══██╗████╗ ████║██╔══██╗██╔═══██╗╚══██╔══╝
██║  ██║██╔████╔██║██████╔╝██║   ██║   ██║   
██║  ██║██║╚██╔╝██║██╔══██╗██║   ██║   ██║   
██████╔╝██║ ╚═╝ ██║██████╔╝╚██████╔╝   ██║   
╚═════╝ ╚═╝     ╚═╝╚═════╝  ╚═════╝    ╚═╝   
                                             

`))
client.on('ready', (ready) => {
  process.stdout.write('\x1Bc')

  setTerminalTitle(`Logged in as ${client.user.username}.`)
  log(Ascii)
  log(`> Hello, ${client.user.username}!`)
  log(`> Current prefix: "${config.PREFIX}"`)
})

client.on('messageCreate', message => {
  if (!message.content.startsWith(config.PREFIX) || message.author.username !== client.user.username) return;

  const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    
  }
});

process.on('uncaughtException', function (error) {
 
  if (error == "TypeError: channel.send is not a function") {
    
  } else {
    
  }
});

client.login(config.TOKEN)