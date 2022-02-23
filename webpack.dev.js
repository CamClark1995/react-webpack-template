// Generates HTML5 file that includes all webpack bundles in the body using script tags
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Removes all files inside webpack's output.path directory before rebuild
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const Package = require("./package.json");


const commitHash = require("child_process")
    .execSync("git rev-parse --short=8 HEAD")
    .toString();
const branchName = require("child_process")
    .execSync("git show -s --pretty=%D HEAD")
    .toString()
    .split(",")
    .pop()
    .trim();

const devVersion = `*Site Name* ${branchName} (${commitHash}) - v${Package.version}`.replace(
    /(\r\n|\n|\r)/gm,
    ""
);

const baseUrl = "/";

module.exports = merge(common, {
    mode: "development",
    watch: true, // After initial build, webpack will continue to watch for changes
    // A source map is a file that maps from the transformed source to the original source
    // This enables the browser to reconstruct the original source and present it in the debugger
    devtool: "inline-source-map",
    plugins: [
        // This plugin creates our wwwroot/index.html file
        new HtmlWebpackPlugin({
            baseUrl: baseUrl, // Set base url for site
            template: "index.ejs", // Use index.ejs as template
            version: devVersion, // This string can be used for the footer tag
        }),
        // Clears the wwwroot/ folder before rebuilding
        // Added clean: false because wwwroot/index.html was being deleted
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
});