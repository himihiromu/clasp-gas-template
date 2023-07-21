const babel = require('@rollup/plugin-babel');
const gas = require('rollup-plugin-gas');
const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require("@rollup/plugin-typescript");
const path = require("path");

module.exports = (env) => {
  return {
    input: path.resolve(__dirname, env.project, 'src', 'index.ts'),
    output: {
      file: path.resolve(__dirname, env.project, 'dist', 'index.js'),
      format: 'es',
    },
    plugins: [
      typescript({
        noEmitOnError: true,
        tsconfig: './tsconfig.json',
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      nodeResolve({
        jsnext: true
      }),
      gas(),
    ],
  }
}