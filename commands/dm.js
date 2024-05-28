
const log = console.log;
const config = require('../config.json');
module.exports = {
    name: 'mdm',
    description: 'dm everyone in selected server w the message in config.json',
    execute(message, args) {
        message.guild.members.fetch().then(members => {
            members.forEach(member => {
               if (member) {
                let msg = member.send(config.MESSAGE)
                if (msg.content) {
                    log(`Sent message to ${member.name}`)
                }
               }
            });
        })
    },
};