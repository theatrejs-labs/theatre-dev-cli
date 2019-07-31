#!/usr/bin/env node
import program from './shared/program'

import registerScripts from './commands/run';

registerScripts([
  [`t`, `Runs the package's test script`, `test`],
  [`s`, `Runs the package's start script`, `start`],
  [`sw`, `Runs the package's start script and watch`, `run start:watch`],
  [`b`, `Builds the package`, `run build`],
  [`bw`, `Builds and watches the package`, `run build:watch`],
  [`v`, `Package version patch`, `version patch`],
  [`vm`, `Package version minor`, `version minor`],
  [`vM`, `Package version major`, `version major`],
])
 
program.parse(process.argv)