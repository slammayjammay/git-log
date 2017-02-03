#!/usr/bin/env node

const execSync = require('child_process').execSync
const minimist = require('minimist')
const pager = require('node-pager')

let argv = minimist(process.argv.slice(2), {
  alias: {
    p: 'pager'
  }
})

let options = {
  pager: argv.pager
}

let text = execSync('git -c color.ui=always log').toString('utf8')
options.pager ? pager(text) : console.log(text)
