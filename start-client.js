const child = require('child_process')

const args = [ 'start' ]
const opts = { stdio: 'inherit', cwd: 'app', shell: true }

child.spawn('npm', args, opts)
