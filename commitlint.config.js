/**
 * commit 验证配置文件
 */

module.exports = {
  // 忽略命令
  ignores: [(commit) => commit.includes('init')],
  // 使用的规则包
  extends: ['@commitlint/config-conventional'],
  // 自定义的规则
  // rule由name和配置数组组成
  // 数组中第一位为level，可选0:disable, 1:warning, 2:error
  // 第二位为应用与否，可选 always | never
  // 第三位该rule的值
  rules: {
    // body为空
    'body-leading-blank': [2, 'always'],
    // footer为空
    'footer-leading-blank': [1, 'always'],
    // header最大长度
    'header-max-length': [2, 'always', 108],
    //subject为空
    'subject-empty': [0],
    //type为空
    'type-empty': [0],
    //subject 单词格式
    'subject-case': [0],
    //scope为空
    'scope-empty': [0],
    //type类型
    'type-enum': [
      2,
      'always',
      [
        ':tada: init',
        ':zap: feat',
        ':bug: fix',
        ':lipstick: style',
        ':recycle: refactor',
        ':bookmark: release',
        ':rocket: deploy',
        ':memo: docs',
        ':white_check_mark: test',
        ':wrench: chore',
        ':rewind: revert',
        ':package: add',
        ':fire: del',
      ],
    ],
  },
}
