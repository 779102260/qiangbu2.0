const path=require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports={
	mode:'development',

	entry:'./src/index.js',
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'./dist')
	},

	devtool:'inline-source-map',
	devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
	    rules: [{
	        test: /\.css$/,
	        use:['style-loader','css-loader','postcss-loader']
	    },
	    {
		    test: /\.jsx?$/,
		    exclude: /(node_modules|bower_components)/,//这些文件夹内的js不会被打包
		    use: {
	            loader: 'babel-loader',
	            options: {
	            	presets: ['env','react']
	            }
		    }
		},
		{
		    test: /\.(png|jpg|gif)$/,
		    use: [{ 
		        loader: "url-loader",
		        options:{
		            limit: 8192, //单位byte，小于8KB的图片都会被编码(base64)放打包在js中
		            name: 'images/[name].[ext]' //图片复制到指定位置
		        }
		    }]
		}]
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin(),
		//hot
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	]
}