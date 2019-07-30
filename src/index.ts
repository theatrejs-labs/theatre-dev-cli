import program from 'commander'

program
  .version('0.1.0')

program
  .command('*')
  .action((env) => {
    console.log('deploying "%s"', env)
  })
 
program.parse(process.argv)