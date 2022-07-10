const {EventEmitter} = require('events')
const ev = new EventEmitter()

//ouvir os eventos
// on = ouvir sempre
// once = ouvir uma única vez
ev.on('Mensagem', (message) => {
  console.log('Eu ouvi você', message)
})

//disparando evento
ev.emit('Mensagem', "Lucas")



