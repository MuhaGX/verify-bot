  const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`You have been verified!`, true)
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('ready', () => {
    console.log('The bot is online!')
})

client.on('message', async (message) => {
    if (message.content.startsWith('.verify')) {
        const embed = new MessageEmbed()
            .setTitle('Welcome To Respect Da Hood')
            .setColor('#2f3136')
            .setImage('https://cdn.discordapp.com/attachments/914599504089604096/914604656250998864/a15ac462f70a30f1399bf346755f088f.gif')
            .setDescription('**server is currently private**\n**follow [tos](https://discordapp.com/terms) and [guideline](https://discordapp.com/guidelines)**')
            
        const add = new MessageButton()
            .setStyle("grey")
            .setLabel("Verify")
            .setID("AddVerifiedRole")

        const row = new MessageActionRow()
            .addComponent([add])


        message.channel.send({ component: row, embed: embed })
    }
})
keepAlive();
client.login(process.env.TOKEN);
