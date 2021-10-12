import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';

import pkg from './package.json';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled'
};

const peerDependencies = Object.keys(pkg.peerDependencies || {});
const extensions = ['.jsx', '.js', '.tsx', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      globals
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      globals
    }
  ],
  plugins: [
    resolve({
      extensions: extensions
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        exclude: [
          '**/*.spec.ts*',
          '**/*.stories.ts*',
          '**/setupTests.ts',
          '**/storybook',
          '**/helpers'
        ]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions,
      plugins: ['babel-plugin-styled-components']
    }),
    commonjs(),
    image()
  ],
  external: peerDependencies
};
