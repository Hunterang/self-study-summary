## npm 常用命令
 ```
  npm -v 查看npm版本命令
 ```
  <font color="red"> ★ </font> 查看npm所用有用信息 
 ```
  npm config list -l 
 ```

## 初始化文件
  ```
  npm init
 ```

## npm search 搜索模块 

```
$ npm search <pkg> [-g] 全局搜索某个模块
```

 ```
  npm install [name?] 安装模块
 ```
  ```
  npm uninstall [name?] 卸载模块
 ```
  ```
  npm update [name?] 更新模块
 ```
  ```
  > npm list 列出所有安装的模块
  > npm list -g --depth 0 [--depth 0] 只列出第一层的包
 ```

 ## npm link 引用模块
 - 将当前的包放到全局，类似于全局安装，但是文件需要响应的格式设置，在cli_gry种有解释

 ## npm 启动命令

```
npm run  启动package.json中script下的脚本命令
```

```
npm publish 

需要首先
npm login 等陆 npm
```

```
npm info | view <pkg> 查看是否存在某个包
npm ls <pkg> 产看是否安装某个包
npm info <pkg> versions 查看某个包所有的versions
```
