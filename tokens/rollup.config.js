import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";


const peerDependencies = Object.keys(pkg.peerDependencies || {})
const extensions = ['.jsx', '.js', '.tsx', '.ts'];

export default {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: 'named',
    },
    {
      file: pkg.module,
      format: "esm",
      exports: 'named',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve({
      extensions: extensions
    }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    commonjs(),
  ],
  external: peerDependencies
};