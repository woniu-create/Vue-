const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const htmlPlugin=new HtmlWebpackPlugin({
 template:'./src/index.html',
 filename:'index.html'
})
const VueLoderPlugin=require('vue-loader/lib/plugin')

module.exports={
    //编译模式
    mode:'development',//development production
    entry:path.join(__dirname,'./src/index.js'),//打包入口文件的路径
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的存放路径
        filename:'boundle.js'//输出文件的名称
    },
    plugins:[htmlPlugin,new VueLoderPlugin()],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.jpg|png|gif|bmp|ttf|eof|svg|woff|woff25$/, use:'url-loader?limit=16940'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,loader:'vue-loader'}

        ]
    }

}