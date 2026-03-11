const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Host_Family.aternos.me (https://host_family.aternos.me/)',
  port: 56622,
  username: 'AFK_Bot'
})

bot.on('spawn', () => {
  console.log('Бот зашел')

  setInterval(() => {
    bot.chat('/rtp')
  }, 100000) // каждые 5 минут
})
