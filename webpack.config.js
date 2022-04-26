const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // devtool inline source map for mapping errors to file
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name].[ext]' // added for images
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/, // added for images
                type: 'asset/resource' 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
};