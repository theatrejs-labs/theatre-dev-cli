const PACKAGE_MANAGER: string = 'npm'

export default (script: string) => {
    const command = `${PACKAGE_MANAGER} run ${script}`
    return () => {
        console.log(command)
    }
}
