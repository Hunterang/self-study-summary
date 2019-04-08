1、sass是由ruby语言写的，最开始使用sass的方法是，下载ruby，之后再安装sass，为了防止编译中断，需要将source从新下载，命令行有watch的方法可以一直编译。这个方法是官方的方法。

2、我采用的是webpack编译的方法，需要webpack（基于node的所以node必须下载），下载style-loader/css-loader/sass-loader,npm install node-sass,用淘宝镜像下载不然下载的包不够完善，打包的时候会出错。配置好webpack.config.js就可以编译成css了，需要注意的是安装extract-text-webpack-plugin插件可以把css单独打包出来。

语法部分基本都是一些简单的方法，多看几遍。
