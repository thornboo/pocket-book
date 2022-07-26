import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { resolve } from 'path'
import moment from 'moment'
import pkg from './package.json'

/**
 * 新增别名
 * @param dir
 * process.cwd() 该方法返回Node.js进程的当前工作目录
 */
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// package信息
const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

// vite配置
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {}
}
