const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

CFonts.say('[ROOT] STARTING BOT...', {
font: 'console',
align: 'left',
gradient: ['magenta', 'red']
})

CFonts.say('----------------- AMBYARBOT -----------------', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'yellow']
})
CFonts.say('Welcome In\nVPS Bot Wa', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
function start() {
  let args = [path.join('hamma.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}
start('hamma.js')
