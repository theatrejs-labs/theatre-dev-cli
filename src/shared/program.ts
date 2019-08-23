import program from 'commander'

program
  .version('0.1.0', '-v, --version')
  .description(`Theatre's Developers CLI Kit`)

program.command('', `Theatre's Developers CLI Kit`).action(console.log)

export default program