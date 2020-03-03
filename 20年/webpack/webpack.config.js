module.exports =  {
  entry: '',
  output: '',
  modules: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-laoder',{
          loader: '',
          options: []
        }],
        exclude: /node_modules/
      }
    ]
  },
  devSever: {

  }


}
//后续填充，并且就react，vue等方面的东西进行额外的补充
