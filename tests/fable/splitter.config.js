function resolve(path) {
    return require("path").join(__dirname, path);
}
module.exports = {
    entry: resolve("./Fable.Elmish.UrlBuilder.Tests.fsproj"),
    outDir: resolve("./bin"),
    babel: {
        plugins: ["transform-es2015-modules-commonjs"],
    }
};