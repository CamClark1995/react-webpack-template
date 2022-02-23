const path = require('path');

module.exports = {
    output: { // Define where to output our bundled files
        path: `${__dirname}/../react-webpack-template.api/wwwroot`,
    },
    module: {
        rules: [
            { // Tells webpack to bundle all .ts/.tsx files under the src directory
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    { // Must define specific loader for TS files
                        loader: "ts-loader"
                    }
                ]
            },
            { // Tells webpack to include our woff files under src/assets/fonts
                test: /\.(woff|woff2)$/,
                use: [
                    { // Url-loader is used to transform files into base64 URIs
                        loader: "url-loader",
                    },
                ],
            },
            { // Tells webpack to include our css files
                test: /\.css$/i,
                // css-loader interprets @import/url() like import/require() and resolves them
                // style-loader takes CSS and actually inserts it into the page
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    entry: { // Define where webpack should look to start the bundle
        main: './src/index.tsx'
    },
    resolve: {
        // Attempt to resolve these extensions in this order
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        // Tell webpack what directories should be searched when resolving modules
        modules: ["./src", "./node_modules"]
    }
};