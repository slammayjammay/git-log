#!/usr/bin/env node

const execSync = require('child_process').execSync
const pager = require('node-pager')

let log = execSync('git -c color.ui=always log').toString('utf8')
pager(log)
