import chalk from 'chalk'
import program from '../../shared/program'
import { run } from '../../shared/utils'

const ARG_REGEX = (/<\w+>/g);

const getAction = (command: string, alias: string) => {
    const variables = alias.match(ARG_REGEX);
    if (variables) {
        variables.forEach((variable, i) => command = command.replace(variable, '#'+i))
    }
    return (...args: []) => {
        args.forEach((value, i) => command = command.replace('#'+i, value))
        console.log(command)
        console.log(chalk`{yellow Running} {grey ${command}}`)
        run(command)
    }
}

export const registerScripts = (packageManager: PackageManager, commands: Command[]) => {
    for (const command of commands) {
        const [alias, description, script] = command
        const fullCommand = `${packageManager} ${script}`
        program
            .command(alias)
            .description(description)
            .action(getAction(fullCommand, alias))
    }
}
