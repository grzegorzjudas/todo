const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function getEnvironment () {
    const env = process.env.NODE_ENV;
    const options = [ 'development', 'production', 'none' ];

    return options.includes(env) ? env : 'development';
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    mode: getEnvironment(),
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
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
