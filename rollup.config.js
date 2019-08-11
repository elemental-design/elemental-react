import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import packageJson from './package.json';

const output = {
  // file: 'dist/bundle.esm.js',
  file: './dist/webBundle.js',
  format: 'esm',
  name: packageJson.name,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
};

export default {
  input: 'src/index.js',
  output: [
    output, {
      ...output,
      file: './dist/sketchBundle.js',
    }],
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.sketch.js', '.js', '.jsx', '.json'],
    }),
    commonjs(),
  ],
  external: ['react', 'react-native-web', 'react-dom', 'react-is', 'styled-components', 'styled-system', 'react-primitives'],
};
