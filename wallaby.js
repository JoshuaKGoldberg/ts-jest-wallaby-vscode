module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts'
    ],
    tests: [
      { pattern: "tests/**/*.test.ts", load: false }
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        typescript: require('typescript'),
      })
    },

    testFramework: 'jest',

    debug: true
  }
}