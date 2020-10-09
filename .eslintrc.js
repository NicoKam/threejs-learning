module.exports = {
  extends: '@whalecloud/eslint-config/configurations/typescript',
  rules: {
    'no-await-in-loop': 'off',
    // require parens in arrow function arguments
    // 要求箭头函数的参数使用圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],

    'react/destructuring-assignment': ['error', 'always'],

    // 注释块在第一行的时候，允许不空行
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
      },
    ],

    'react/prefer-stateless-function': 'warn',

    'no-mixed-operators': 'off',
    // 临时调整
    'no-tabs': 'off',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'no-empty': ['error', { allowEmptyCatch: true }],
    'default-case': 'warn',
    'no-console': ['error', { allow: ['error'] }],
    'react/jsx-no-target-blank': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/label-has-for': 'warn',

    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],

    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    'guard-for-in': 'off',

    'no-shadow': 'warn',

    /**
     * 关于 react/no-did-update-set-state
     * 禁止在didUpdate周期中执行setState
     * 原本是error的，我将它调整为warn级别
     * 本意是不允许在didUpdate的时候再进行setState，因为会导致重复渲染，消耗性能
     * 如果在didUpdate中不加条件地进行setState，就会直接导致死循环
     * 通常在didUpdate中执行setState的目的是，根据某个状态的变化，同步修改另一个状态，这种场景建议使用getDerivedStateFromProps实现
     *
     * 事实上，将setState的操作单独提取到独立的函数中，这条规则就无法检测到了，所以规则本身比较鸡肋，它能只能检测表象，但换个写法就不行了
     */
    'react/no-did-update-set-state': 'warn',

    /* 优化jsx换行的排版 */
    'react/jsx-wrap-multilines': 'error',

    /* 禁止使用已过时的生命周期 */
    'react/no-deprecated': 'error',

    /* 禁止使用this.refs */
    'react/no-string-refs': 'error',

    /* 禁止在成员方法中，出现没有引用this的无意义成员方法 */
    'react/no-this-in-sfc': 'error',

    /* 禁止直接对state赋值，需要使用setState */
    'react/no-direct-mutation-state': 'error',

    /* 防止关键属性大小写拼错 */
    'react/no-typos': 'error',

    /* 禁止给DOM节点添加不存在的属性 */
    'react/no-unknown-property': 'error',

    /* 禁止在内容中直接使用保留字符 */
    'react/no-unescaped-entities': 'error',

    /* 强制要求style属性的类型为object */
    'react/style-prop-object': 'error',

    /* 强制要求jsx中嵌入js表达式时，大括号需要换行 */
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': ['error', { children: true }],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-one-expression-per-line': ['error'],

    /**
     * 降低这个规则级别的原因是，本身规则作用不大，一般很少有重复export的情况。
     * 但是该规则导致合并定义interface且export时报错。
     * https://github.com/benmosher/eslint-plugin-import/issues/1549
     */
    'import/export': 'warn',
  },
  globals: {
    document: true,
    navigator: true,
    fetch: true,
    FormData: true,
    sessionStorage: true,
    localStorage: true,
  },
};
