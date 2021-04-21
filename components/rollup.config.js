import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

const peerDependencies = Object.keys(pkg.peerDependencies ?? {})
const extensions = ['.jsx', '.js', '.tsx', '.ts'];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: 'named',
      globals
    },
    {
      file: pkg.module,
      format: "esm",
      exports: 'named',
      sourcemap: true,
      globals
    }
  ],
  plugins: [
    resolve({
      extensions: extensions
    }),
    typescript(),
    commonjs(),
  ],
  external: peerDependencies
};