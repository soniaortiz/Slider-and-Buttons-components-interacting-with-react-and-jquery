let path = require('path');
let webpack = require('webpack');
module.exports={
    entry: './tsx/script.tsx',
    output:{
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.tsx', '.tsc', '.ts'],
    },
    module:{
        rules:[
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            "window.jQuery":"jquery"
          })
        ]
}