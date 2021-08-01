# node-express-coverage

只是针对istanbul-middleware 再做了一些额外的处理了，将test目录的server也封装到了一起来而已。然使用者更加无感的得到覆盖率


### 安装

```
npm i node-express-coverage --save
```

### 使用
在express的项目的入口文件中添加
```
require('node-express-coverage')
```

### 注意
该覆盖率工具会额外监听8787的端口，若想要与自定义端口可直接在启动服务的命令后面添加 --port  xxx进行修改


完成测试以后，即可通过访问xx.xx.xx.xx:8787/coverage 访问覆盖率的结果了