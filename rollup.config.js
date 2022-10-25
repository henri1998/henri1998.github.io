import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "examples/prod/app.js",
  output: [
    {
      format: "esm",
      file: "examples/prod/bundle.js",
    },
  ],
  plugins: [resolve()],
};
