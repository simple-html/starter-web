const {
  fusebox,
  pluginPostCSS,
  sparky,
  pluginMinifyHtmlLiterals,
} = require("fuse-box");
const { pluginTypeChecker } = require("fuse-box-typechecker");
const { task, rm } = sparky(class Context {});

task("dev", async (ctx) => {
  await rm("./cache");
  await rm("./dist");

  // start bundle
  await fusebox({
    target: "browser",
    entry: "./src/index.ts",
    webIndex: {
      publicPath: "./",
      template: "./src/index.html",
    },
    hmr: { plugin: "./fuseboxHmrPlugin.ts" },
    devServer: true,
    plugins: [
      pluginTypeChecker({
        name: "dev build",
        basePath: `./`,
        tsConfig: "./tsconfig",
      }),
      pluginPostCSS(/\.css$/, {
        stylesheet: {
          postCSS: {
            plugins: [require("tailwindcss")("./tailwindcss.dev.config.js")],
          },
        },
      }),
    ],
  }).runDev();
});

task("prod", async (ctx) => {
  await rm("./cache");
  await rm("./dist");

  // start bundle
  await fusebox({
    target: "browser",
    entry: "./src/index.ts",
    webIndex: { publicPath: "./", template: "./src/index.html" },
    plugins: [
      pluginTypeChecker({
        name: "dev build",
        basePath: `./`,
        tsConfig: "./tsconfig",
      }),
      pluginPostCSS(/\.css$/, {
        stylesheet: {
          postCSS: {
            plugins: [require("tailwindcss")("./tailwindcss.prod.config.js")],
          },
        },
      }),
      pluginMinifyHtmlLiterals(),
    ],
  }).runProd({
    uglify: true,
    bundles: { distRoot: "dist/", app: "app.js" },
  });
});
