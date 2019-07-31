import program from '../../shared/program'

const PACKAGE_MANAGER: string = 'npm'

export const run = (script: string) => {
    const command = `${PACKAGE_MANAGER} run ${script}`
    return () => {
        console.log(command)
    }
}

export const registerScripts = (commands: Command[]) => {
    for (const command of commands) {
        const [alias, description, script] = command
        program
            .command(alias)
            .description(description)
            .action(run(script))
    }
}
