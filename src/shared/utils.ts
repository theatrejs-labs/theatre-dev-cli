import { spawn } from 'child_process'

export const run = (command: string) => {
    spawn(command, {
        cwd: process.cwd(),
        detached: true,
        shell: true,
        stdio: "inherit"
    })
}
