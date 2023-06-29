import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-import-css';
import copy from 'rollup-plugin-copy';

const extensions = ['.jsx', '.js', '.tsx', '.ts'];

function isInternal(id) {
  return (
    id.startsWith('.') &&
    id.includes(path.join(process.cwd(), 'src')) &&
    id.includes(path.join(process.cwd(), 'modules')) &&
    id.includes(path.join(process.cwd(), 'typings')) &&
    id.includes('@norges-domstoler/') &&
    !id.includes('@norge-domstoler/dds-design-tokens') // dds-tokens skal være ekstern dependency
  );
}

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      interop: 'compat',
    },
    {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    resolve({
      extensions: extensions,
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        exclude: [
          '**/*.spec.ts*',
          '**/setupTests.ts',
          '**/storybook',
          '**/helpers',
        ],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions,
      plugins: ['babel-plugin-styled-components'],
    }),
    commonjs(),
    image(),
    css(),
    copy({
      targets: [
        { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
        { src: 'src/styles/*', dest: 'dist/styles' },
      ],
    }),
  ],
  external: id => !isInternal(id),
};
