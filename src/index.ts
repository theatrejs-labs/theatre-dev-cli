#!/usr/bin/env node
import { create } from './commands/scripts/sampler'
import program from './shared/program'

import { registerScripts } from './commands/scripts';

registerScripts('yarn', [
  [`s`, `Runs the package's start script`, `start`],
  [`sw`, `Runs the package's start script and watch`, `run start:watch`],
  
  [`t`, `Runs the package's test script`, `test`],

  [`b`, `Builds the package`, `run build`],
  [`bw`, `Builds and watches the package`, `run build:watch`],
  
  [`v`, `Package version patch`, `version patch`],
  [`vm`, `Package version minor`, `version minor`],
  [`vM`, `Package version major`, `version major`],
  
  [`r <script>`, `Runs custom script`, `run <script>`],
  
  [`i`, `Installs dependencies`, `install`],
  [`i <package>`, `Installs a dependency`, `add <package>`],
  [`id <package>`, `Installs a devDependency`, `add -D <package>`],
  [`ig <package>`, `Installs a global dependency`, `global add <package>`]
])

program
  .command(`c <sample>`)
  .description(`Creates a partial based on your existing sample directories`)
  .action(create)
 
program.parse(process.argv)