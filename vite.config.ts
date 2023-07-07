import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postcssImport from 'postcss-pxtorem'
import Unocss from 'unocss/vite'
import transformerDirective from '@unocss/transformer-directives'

const baseSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '~': baseSrc,
        '~@': baseSrc,
        '@': baseSrc
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 导入 element-plus 的配置项目
        resolvers: [VantResolver()],
        // 生成到的地址
        dts: 'types/auto-imports.d.ts',
        vueTemplate: true,
        // 配置需要自动导入的库
        imports: [
          'vue',
          'vue/macros',
          'vue-router',
          'vue-i18n',
          '@vueuse/core',
          'pinia',
          { vant: ['showToast', 'showConfirmDialog', 'showSuccessToast', 'showFailToast '] }
        ],
        dirs: [
          // pinia状态管理目录
          'src/store'
        ]
      }),
      Components({
        // 导入 element-plus 的配置项目
        resolvers: [VantResolver()],
        // 生成类型的地址
        dts: 'types/components.d.ts',
        dirs: ['src/components']
      }),
      Unocss({
        transformers: [transformerDirective()]
      })
    ],
    server: {
      port: 3000,
      host: '0.0.0.0',
      // 是否开启 https
      https: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          ws: false,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        // less
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/assets/style/global.less')}";`
          },
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [
          postcssImport({
            // 这里的rootValue就是你的设计稿大小
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
})
