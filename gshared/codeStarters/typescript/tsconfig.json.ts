export default {
  compilerOptions: {
    skipLibCheck: true,
    target: "es5",
    module: "commonjs",
    declaration: true,
    outDir: "./lib",
    rootDir: "./src",
    strict: true,
    strictNullChecks: true,
    esModuleInterop: true,
  },
  include: ["./src/**/*"],
  exclude: ["node_modules"],
};
