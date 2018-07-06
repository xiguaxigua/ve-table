module.exports = [
  {
    entry: 'src/index.es.js',
    dist: 'lib/index.esm.js',
    type: 'es',
    min: false,
    css: 'lib/style.css'
  },
  {
    entry: 'src/index.js',
    dist: 'lib/index.common.js',
    type: 'cjs',
    min: false,
    css: 'lib/style.css'
  },
  {
    entry: 'src/index.js',
    dist: 'lib/index.common.min.js',
    type: 'cjs',
    min: true,
    css: 'lib/style.min.css'
  },
  {
    entry: 'src/index.js',
    dist: 'lib/index.js',
    type: 'umd',
    min: false,
    css: 'lib/style.css',
    name: 'componentGlobalName'
  },
  {
    entry: 'src/index.js',
    dist: 'lib/index.min.js',
    type: 'umd',
    min: true,
    css: 'lib/style.min.css',
    name: 'componentGlobalName'
  }
]
