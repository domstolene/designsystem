import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";

import pkg from "./package.json";

const peerDependencies = Object.keys(pkg.peerDependencies || {});
const extensions = [".jsx", ".js", ".tsx", ".ts"];

export default {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: extensions,
    }),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    commonjs(),
    copy({
      targets: [
        { src: "dds/build/css/**.css", dest: "dist/css" },
        { src: "dds/build/scss/**.scss", dest: "dist/scss" },
      ],
    }),
  ],
  external: peerDependencies,
};
