const execSync = require('child_process').execSync
const pager = require('node-pager')

let log = execSync('git log').toString('utf8')
pager(log)