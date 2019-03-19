var path = require('path');
module.exports = [
{
    context: __dirname,
	entry: {
		reduxlabreduxhello:'./ReduxLab/ReduxHello/app.js',
	},
    output: {
        path: path.resolve(__dirname, '../bundle/'),
        filename: (chunkData) => (chunkData.chunk.name.split('~')[0]).concat('.js'),
		chunkFilename: '[name].[id].js',
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['babel-preset-env','babel-preset-react'],
						plugins:['transform-object-rest-spread']
                    }
                }
            },
            {
				test: /\.css$/,
				use: [
					{ 
						loader: 'style-loader' 
					}, 
					{
						loader: 'css-loader',
						options: {
							modules: false, // CSS Modules 模式 --- 暫不打開，因影響現有套入css的方法。
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
				]
            }
        ]
    },
    resolve: {
        alias: {
            Common: path.resolve(__dirname, 'Common/'),
            CommonFF: path.resolve(__dirname, 'CommonFF/'),
			CommonMA: path.resolve(__dirname, 'CommonMA/')
        }
    }
}, 
]
