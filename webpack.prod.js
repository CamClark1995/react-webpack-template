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

const prodVersion = `*Site Name* (${commitHash}) v${Package.version}`.replace(
    /(\r\n|\n|\r)/gm,
    ""
);

const baseUrl = "/template/"; // This should be replaced with name of site

module.exports = merge(common, {
    mode: "production",
    // This will give each js file a unique name to prevent caching
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        // Clears the wwwroot/ folder before rebuilding
        new CleanWebpackPlugin(),
        // This plugin creates our wwwroot/index.html file
        new HtmlWebpackPlugin({
            baseUrl: baseUrl, // Set base url for site
            template: "index.ejs", // Use index.ejs as template
            version: prodVersion, // This string can be used for the footer tag
        }),
    ],
});