const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');


client.on('ready', () => {
    console.log(`Logged in as Blitz Bot!`);
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});




client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;

    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
                /**
                 * Kick the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 */
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        // We let the message author know we were able to kick the person
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to kick the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to kick the member');
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
            // Otherwise, if no user was mentioned
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
});

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
});

//client.on('message', message => {
// if (message.content === '!rip') {
//const attachment = new MessageAttachment('https://media1.tenor.com/images/7f1c665957166b155747e5df67f8b6f5/tenor.gif?itemid=8043951');
// message.channel.send(attachment);
//}
//});   

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
});



client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    if (msg.content === 'nigger') {
        msg.reply('Hold up are you black?');
    }
    if (msg.content === 'Nigger') {
        msg.reply('Hold up are you black?');
    }
    if (msg.content === 'fuck') {
        msg.reply('Watch it');
    }
    if (msg.content === 'Fuck') {
        msg.reply('Watch it');
    }
    if (msg.content === 'Shit') {
        msg.reply('Dont say that');
    }
    if (msg.content === 'shit') {
        msg.reply('Dont say that');
    }
    if (msg.content === 'Bitch') {
        msg.reply('Are you talking about a female dog');
    }
    if (msg.content === 'bitch') {
        msg.reply('Do you type to your mother with that keyboard');
    }
    if (msg.content === 'Dick') {
        msg.reply('Do you have one');
    }
    if (msg.content === 'dick') {
        msg.reply('Dont say that');
    }
    if (msg.content === 'Pussy') {
        msg.reply('do you eat it');
    }
    if (msg.content === 'pussy') {
        msg.reply('do you eat it');
    }
    if (msg.content === 'Whore') {
        msg.reply('Is that what your mother is');
    }
    if (msg.content === 'whore') {
        msg.reply('Is that what your mother is');
    }
});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using MessageAttachment
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
});
client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('A slick little embed')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('Hello, this is a slick embed!');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
});


client.login(process.env.XnQ8HyJ7e7LtILsOVI_WV0Oq1uDLe6kE);
