import fs from 'fs'
import path from 'path'

export const findNearestPackageJsonSync = (directoryPath: string): any => {
  try {
    const packageJsonPath = path.join(directoryPath, 'package.json')
    const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    return {
      data: packageJsonData,
      path: packageJsonPath
    }
  } catch (error) {
    const parentDirectoryPath = path.dirname(directoryPath)
    if (parentDirectoryPath === directoryPath) {
      throw new Error('No package.json files found')
    }
    return findNearestPackageJsonSync(parentDirectoryPath)
  }
}

const nearestPackageJSON = findNearestPackageJsonSync(path.resolve());

export const packageJSON = nearestPackageJSON.data

const rootPath = nearestPackageJSON.path.slice(0, -1 * 'package.json'.length)
const resolveFromRoot = (newPath: string): string => path.resolve(rootPath, newPath)
export const root = {
  path: rootPath,
  resolve: resolveFromRoot
}