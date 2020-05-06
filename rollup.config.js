import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
// import alias from 'rollup-plugin-alias';

import packageJson from './package.json';

const getPlugins = (platform) => [
  json(),
  babel({
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
    exclude: 'node_modules/**',
  }),
  resolve({
    extensions: ['.mjs', `.${platform}.js`, `.${platform}.jsx`, `.${platform}.ts`, `.${platform}.tsx`, '.js', '.ts', '.jsx', '.tsx', '.json'],
  }),
  commonjs(),
];

const output = {
  // file: 'dist/bundle.esm.js',
  file: packageJson.module,
  format: 'esm',
  name: packageJson.name,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    'styled-components/primitives': 'styledP',
    'react-primitives': 'reactPrimitives',
    'styled-system': 'styledSystem',
    'react-primitives-svg': 'reactPrimitivesSvg',
  },
  // plugins: getPlugins('web'),
};

export default [
  // Web export
  {
    input: 'src/index.ts',
    output: [
      {
        ...output,
        file: packageJson.main,
        format: 'umd',
      },
      output
    ],
    external: ['react', 'react-native-web', 'react-dom', 'react-is', 'styled-components', 'styled-system', 'react-primitives', 'react-primitives-svg'],
    plugins: getPlugins('web')
  },
  // Sketch export
  {
    input: 'src/index.ts',
    output: [
      {
        ...output,
        file: packageJson.sketch,
        // plugins: getPlugins('sketch'),
      }
    ],
    external: ['react', 'react-native-web', 'react-dom', 'react-is', 'styled-components', 'styled-components/primitives', 'styled-system', 'react-primitives', 'react-primitives-svg'],
    plugins: getPlugins('sketch')
  },
  // React Native export
  {
    input: 'src/index.ts',
    output: [
      {
        ...output,
        file: packageJson['react-native'],
        // plugins: getPlugins('sketch'),
      }
    ],
    external: ['react', 'react-native-web', 'react-native', 'react-dom', 'react-is', 'styled-components', 'styled-components/primitives', 'styled-system', 'react-primitives', 'react-primitives-svg'],
    plugins: getPlugins('native')
  },
  // Figma export
  {
    input: 'src/index.ts',
    output: [
      {
        ...output,
        format: 'umd', // Figma doesn't support ES imports
        file: packageJson.figma,
        // plugins: getPlugins('sketch'),
      }
    ],
    external: ['react', 'react-native-web', 'react-dom', 'react-is', 'styled-components', 'styled-components/primitives', 'styled-system', 'react-primitives', 'react-primitives-svg'],
    plugins: getPlugins('figma')
  },
]
