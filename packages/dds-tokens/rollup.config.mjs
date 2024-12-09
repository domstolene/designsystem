import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';

function isBareModuleId(id) {
  return (
    !id.startsWith('.') &&
    !id.includes(path.join(process.cwd(), 'src')) &&
    !id.includes(path.join(process.cwd(), 'dds'))
  );
}

const extensions = ['.jsx', '.js', '.tsx', '.ts'];

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
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
    }),
    commonjs(),
    copy({
      targets: [
        { src: 'dds/build/css/**/**.css', dest: 'dist/css' },
        { src: 'dds/build/scss/**/**.scss', dest: 'dist/scss' },
      ],
    }),
  ],
  external: isBareModuleId,
};
