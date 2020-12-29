const path = require("path");
const rollup = require("rollup");
const typescript = require("rollup-plugin-typescript2");
const { terser } = require("rollup-plugin-terser");

const root = path.resolve(__dirname, "..");
const esm = {
  file: path.resolve(root, "./build/es/index.js"),
  format: "esm",
  name: "icons",
  sourcemap: false,
};

const cjs = {
  file: path.resolve(root, "./build/lib/index.js"),
  format: "cjs",
  exports: "named",
  sourcemap: false,
};

const minified = {
  file: path.resolve(root, "./build/lib/index.min.js"),
  format: "cjs",
  exports: "named",
  plugins: [terser({
    output: {
      comments: () => false,
    }
  })],
  sourcemap: false,
};

rollup
  .rollup({
    input: path.resolve(root, "./packages/index.ts"),
    plugins: [typescript()],
    external: ["vue"],
  })
  .then(async (bundle) => {
    await Promise.all([
      bundle.write(esm),
      bundle.write(cjs),
      bundle.write(minified),
    ]);
    console.log("full bundle built success");
  });
