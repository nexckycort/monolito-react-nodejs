import ghpages from 'gh-pages'
import colors from 'colors'
import fse from 'fs-extra'
import path from 'path'

import { build } from '.'

const deploy = async () => {
  await build('deploy')

  const projectRoot = path.join(__dirname, '..', 'deploy', 'package.json')
  const packageJSON = fse.readJSONSync(projectRoot)
  packageJSON.scripts = {
    start: 'node ./server.js'
  }
  Reflect.deleteProperty(packageJSON, 'bin')
  Reflect.deleteProperty(packageJSON, 'pkg')
  fse.writeFileSync(projectRoot, JSON.stringify(packageJSON, null, '  '))

  ghpages.publish(path.resolve(__dirname, '../deploy'), {
    branch: 'deploy',
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/nexckycort/monolito-reactjs-nodejs.git',
    silent: true
  })
  console.log(colors.bold.italic.green('published branch'))
}

deploy()
