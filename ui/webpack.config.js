const path = require('path');

function getEnvironment () {
    const env = process.env.NODE_ENV;
    const options = [ 'development', 'production', 'none' ];

    return options.includes(env) ? env : 'development';
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    mode: getEnvironment()
};
