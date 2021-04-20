const Discord = require("discord.js")
require('dotenv').config()

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL"] })

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

const array = ['command', 'event']

array.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.DISCORD_TOKEN)

