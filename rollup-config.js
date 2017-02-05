import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: 'output/app/main-aot.js',
  dest: 'oscars.min.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/eventemitter3/**'
      ],
      namedExports: {
        'node_modules/eventemitter3/index.js': [ 'EventEmitter' ]
      }
    }),
    uglify()
  ]
}
