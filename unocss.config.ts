import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 默认 wind 预设
    presetAttributify(), // class拆分属性预设
    presetTypography(), // 排版预设
    presetIcons({ // 图标库预设
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({ // 网络字体预设
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(), // windi CSS的变体组功能
    transformerDirectives(), // @apply @screen theme()转换器
  ],
  preflights: [
    {
      getCSS: () => `
        .el-button {
          background-color: var(--el-button-bg-color, var(--el-color-white))
        }
      `,
    },
  ],
})
