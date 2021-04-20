module.exports = (Discord, client, message) => {
  if (!message.content.startsWith("!" || message.author.bot)) return

  const args = message.content.slice("!".length).split(/ +/)
  const command_name = args.shift().toLowerCase()

  const command = client.commands.get(command_name) ||
                  client.commands.find(a => a.aliases && a.aliases.includes(command_name))

  try {
    command.execute(message, args, command, client, Discord)
  }
  catch (error) {
    console.log(error)
  }
}