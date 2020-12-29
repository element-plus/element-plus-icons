const path = require("path");
const rollup = require("rollup");
const esbuild = require("rollup-plugin-esbuild");

const p = process.argv[2]; // node this.js compName
const exportName = `${p.split("/").pop().split(".").shift()}.js`;

const root = path.resolve(__dirname, "..");

const esm = {
  file: path.resolve(root, "build/es", exportName),
  format: "esm",
  sourcemap: false,
};

const cjs = {
  file: path.resolve(root, "build/lib", exportName),
  format: "cjs",
  exports: "named",
  sourcemap: false,
};

rollup
  .rollup({
    input: path.resolve(root, p),
    plugins: [
      esbuild({
        // target: "browser",
      }),
    ],
    external: ["vue"],
  })
  .then(async (bundle) => {
    await Promise.all([bundle.write(esm), bundle.write(cjs)]);
    console.log(" \u001b[32m", exportName, "done");
  });
