import execa from 'execa'

export const run = (command: string) => {
    const exec = execa.command(command)
    exec.catch(console.error)
    if (exec.stdout) {
        exec.stdout.pipe(process.stdout);
    }
}