#!/usr/bin/env node
import program from './shared/program'

import run from './commands/run';

program
  .command('t')
  .description('Runs `npm test`')
  .action(run('test'))

program
  .command('b')
  .description('Runs `npm build`')
  .action(run('build'))
 
program.parse(process.argv)