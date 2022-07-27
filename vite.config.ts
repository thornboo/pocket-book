import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import moment from 'moment'

/**
 * 新增别名
 * @param dir
 * process.cwd() 该方法返回Node.js进程的当前工作目录
 */
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// 获取package信息
const pkg = require('./package.json')
const { dependencies, devDependencies, name, version } = pkg

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

// vite配置
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: '/',
    root,
    resolve: {
      alias: [
        // src设置别名@
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // types设置别名#
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        // 解决vue-i18n的警告
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      ],
    },
    server: {
      // 监听所有本地ip
      host: true,
      port: 3000,
    },
    plugins: [vue()],
    optimizeDeps: {
      include: [],
      exclude: [],
    },
  }
}
