import execa from 'execa'
import chalk from 'chalk'

export const run = (command: string) => {
    const exec = execa.command(command)
    exec.catch(e => {
        console.error(chalk`{bgRed.white  ERROR } ${e.command} {grey ${e.stderr}}`)
    })
    if (exec.stdout) {
        exec.stdout.pipe(process.stdout);
    }
}