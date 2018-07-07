const rollup = require('rollup')
const vue = require('rollup-plugin-vue').default
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const uglify = require('rollup-plugin-uglify')
const compList = require('./components')
const minify = require('uglify-es').minify
const css = require('rollup-plugin-css-only')
const autoprefixer = require('autoprefixer')

compList.forEach(item => {
  var plugins = [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    vue({
      css: false,
      style: { postcssPlugins: [autoprefixer] }
    }),
    css({ output: 'lib/style.css' }),
    resolve({
      extensions: ['.js', '.vue']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
  if (item.min) plugins.push(uglify({}, minify))

  rollup.rollup({
    input: item.entry,
    external: id => /^numerify/.test(id),
    plugins
  }).then(bundle => {
    bundle.write({
      format: item.type,
      name: item.name,
      file: item.dist,
      globals: { 'numerify': 'numerify' }
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
})
