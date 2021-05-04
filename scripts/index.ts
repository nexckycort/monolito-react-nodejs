import colors from 'colors'
import fse from 'fs-extra'
import path from 'path'
import util from 'util'
const exec = util.promisify(require('child_process').exec)

export const build = async (destination = 'build') => {
  console.log(colors.bold.italic.magenta('compiling api'))
  const { stdout: stdoutApi } = await exec('cd api && npm run build')
  console.log(stdoutApi)

  console.log(colors.bold.italic.magenta('compiling client'))
  const { stdout: stdoutClient } = await exec('cd client && npm run build')
  console.log(stdoutClient)

  const destinationBuild = path.join(__dirname, '..', destination)
  fse.removeSync(destinationBuild)

  console.log(colors.bold.italic.magenta('copying api and client compiled'))
  const copyCompiledForMergeToBuild = () => {
    const sourceApi = path.join(__dirname, '..', 'api', 'build')
    const destinationApi = path.join(__dirname, '..', destination)
    fse.copySync(sourceApi, destinationApi, { filter: (src: string, _dest: string) => !src.includes('pages') && !src.includes('public') })

    const sourceClient = path.join(__dirname, '..', 'client', 'build')
    const destinationClient = path.join(__dirname, '..', destination, 'public')
    fse.copySync(sourceClient, destinationClient)

    const sourcePages = path.join(__dirname, '..', 'client', 'build', 'index.html')
    const destinationPages = path.join(__dirname, '..', destination, 'pages', 'index.html')
    fse.copySync(sourcePages, destinationPages)
  }
  copyCompiledForMergeToBuild()
  console.log(colors.bold.italic.green('the api and client compiled was copied to build'))

  const fileIndex = path.join(__dirname, '..', destination, 'public', 'index.html')
  fse.removeSync(fileIndex)

  console.log(colors.bold.italic.green('compiled successful'))
}
