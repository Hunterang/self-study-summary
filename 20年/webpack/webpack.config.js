let px2rem = require('postcss-pxtorem') //将px转换为rem的插件
module.exports =  {
  entry: '',
  output: '',
  modules: {
    rules: [//一下都是打包过程中的指挥官，webpack将整理的文件依次交给下面的loader(指挥官)，来交由相应的【插件处理】
      {
        test: /\.jsx?$/,
        use: ['babel-laoder',{
          loader: '',
          options: []
        }],
        exclude: /node_modules/
      },
      {
        test: /\.less$/, //需要下载less less-loader postcss-loader || loader,有各自的options
        use:[ 'style-loader', 'css-loader','less-loader', {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        px2rem({
                            rootValue: 16,
                            propList: ["*"] 
                        })
                    ]
                }
            }
        }],
        exclude: /node_modules/
    },
    ]
  },
  devSever: {

  }


}
//后续填充，并且就react，vue等方面的东西进行额外的补充
