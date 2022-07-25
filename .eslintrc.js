/**
 * 使用基于 eslint-define-config 依赖的 defineConfig 方法来配置 .eslintrc.js
 */
const {defineConfig} = require('eslint-define-config')
module.exports = defineConfig({
    // 是否开启eslint
    root: true,
    // 配置编译器宏环境，指定你的脚本在哪种环境中运行
    env: {
        browser: true,
        node: true,
        es6: true
    },
    // 配置解析器
    parser: 'vue-eslint-parser',
    // 若使用 @typescript-eslint/parser 依赖包作为自定义的解析器，需要配置 parserOptions 属性来设置解析器选项
    parserOptions: {
        parser: '@typescript-eslint/parser',    // 自定义解析器，可选
        ecmaVersion: "latest",  // 指定ECMAScript语法版本
        sourceType: 'module',   // 默认是 “script”。当代码在 ECMAScript 模块中时其值需设为 “module”
        jsxPragma: 'React', // 编译指令；表示把JSX表达式编译为JS的函数
        ecmaFeatures: { // 指示您想使用哪些附加语言功能
            jsx: true
        }
    },
    // 添加更多通用规则集
    extends: [
        'plugin:vue-pug/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    // 在此处覆盖或添加规则设置
    rules: {}

})