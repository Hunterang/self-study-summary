数据库初始化
#考虑到全栈开发的必然趋势，所以最近对数据进行了操作，费了半天劲总算有了门道，配置起来对于新手真的有些难受。

window下的实际操作
1.下载适合个人电脑版本的mysql数据库。
2. 如果zip就直接解压，找到相应的bin目录 ，mis版本的话，按提示操作，且记住密码
3.配置 my.ini文件放入bin目录，主要设置的是端口号，连接数，数据库位置等等

4.mysqld-initialize-insecure //在bin目录下执行，为了生成data文件，存储数据库数据。

5.输入mysqld --install 安装服务//在register下的mysql中创建命令，为了net start mysql

6.net start mysql 如果报错，mysqld --console 查看启动失败原因，排除之后执行如下
    a. mysqld-remove
    b. mysqld --install
    c. net start mysql

7.在bin目录下 执行mysql -h 主机 -u 名称 -p；

PASSWORD: 此处输入密码成功；

认识：mysql是一个程序，作用是为了链接数据库。
    类比于浏览器一样，不过mysql需要启动它，才能使用它，它就像一个中转站一样，可以连接不同主机下的数据库
