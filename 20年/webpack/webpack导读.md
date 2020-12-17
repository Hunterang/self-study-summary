### 1.webpack是什么
>webpack是javascript应用程序的静态模块打包器，当webpack处理应用程序时，构建相应的依赖关系，其中包括程序需要的每个模块，然后将这些模块打包成一个或者多个bundle.

### 2 webpack的核心概念
* enty: 入口
* output: 输出位置，包括文件名等等
* laoder: 模块转换器，用于将相应的文件转换为需求的内容。
* resolve: alisa | extensions
* webpack-dev-server
* sourse-map
* externals 将文件以外部链接的方式引入
* mode webpack4之后需要的
* 插件plugin，通过plugin来完成对模块相应的改进等等。


### 项目的开始
> 使用webpack需要安装webpack，webpack-li
> bable-loader 将js转义为低版本的
>>安装babel-loader
>>安装babel-loader的依赖

* npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

* npm install @babel/runtime @babel/runtime-corejs3

```javascript
//webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/ //排除 node_modules 目录
            }
        ]
    }
}

```
loader 都放在module下面，根据rules来分配规则。exclude表示不转义的文件夹。
>创建.banelrc文件
```
{
    "presets": [
        "@babel/preset-env",
        {
            "targets": {
                    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"],
                    "ie": 11
                },
                "useBuiltIns": "usage", //babel 就可以按需加载 polyfill ，且不需要手动引入 @babel/polyfill
                "corejs": 3,
        }
        ],  
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ]
    ]
}
该配置也可以放到use下面的options中进行配置
module -> rules -> [test, use[loader, options],exclude ]
```
### mode
*  mode配置项。告知webpack使用相应的模式。
### html-webpack-plugin
```javascript
//首先引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //...
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            // hash: true //是否加上hash，默认是 false
        })
    ]
}

```
