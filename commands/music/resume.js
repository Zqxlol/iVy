module.exports = {
  name: "resume",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'There is nothing playing right now to resume!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.react('▶')
    message.channel.send('Resumed The music!')
   
}
}
module.exports.help = {
    name: "resume",
    description: "Will resume the paused song",
    usage: "resume",
    type: "Music" 
}