#!/usr/bin/env node
import program from './shared/program'

import { registerScripts } from './commands/scripts';

registerScripts('yarn', [
  [`t`, `Runs the package's test script`, `test`],
  [`s`, `Runs the package's start script`, `start`],
  [`i`, `Installs dependencies`, `install`],
  [`sw`, `Runs the package's start script and watch`, `run start:watch`],
  [`b`, `Builds the package`, `run build`],
  [`bw`, `Builds and watches the package`, `run build:watch`],
  [`v`, `Package version patch`, `version patch`],
  [`vm`, `Package version minor`, `version minor`],
  [`vM`, `Package version major`, `version major`],

  [`r <script>`, `Installs dependencies`, `run <script>`],

])
 
program.parse(process.argv)