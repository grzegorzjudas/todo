const path = require('path');
const { readdirSync } = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function getEnvironment () {
    const env = process.env.NODE_ENV;
    const options = [ 'development', 'production', 'none' ];

    return options.includes(env) ? env : 'development';
}

function createAliases () {
    const dir = path.resolve(__dirname, './src');
    const files = readdirSync(dir, { withFileTypes: true });
    const folders = files
        .filter((file) => file.isDirectory())
        .map((folder) => folder.name);

    return folders.reduce((all, folder) => {
        all[folder] = path.resolve(__dirname, `./src/${folder}`);

        return all;
    }, {});
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    mode: getEnvironment(),
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ],
        alias: {
            ...createAliases()
        }
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /(.ts|tsx|js)$/,
                exclude: [ /node_modules/ ],
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            scriptLoading: 'defer'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/global.css', to: './style.css' }
            ]
        })
    ]
};
