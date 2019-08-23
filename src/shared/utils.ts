import chalk from 'chalk'
import execa from 'execa'

export const run = (command: string) => {
    const exec = execa.command(command)
    exec.catch(e => {
        console.error(chalk.red(e.stderr))
    })
    if (exec.stdout) {
        exec.stdout.pipe(process.stdout);
    }
}