#### json-server
安装
``` shell
npm install json-server -g
```
监听文件
``` shell
json-server --watch .\base\test.json
```
直接暴露在JSON对象根目录下的每个键都被视为json-server中的单独URL

例如:
```json
{
  "getUser": {
    "name": "yan",
    "age": 27
  }
}
```
监听后会被映射成  http://localhost:3000/getUser url

#### vue-cli(新项目不建议使用)
安装
```shell
npm install -g @vue/cli
#OR
yarn global add @vue/cli
```
升级
```shell
#管理员身份运行
npm update -g @vue/cli
#OR
npm uninstall -g @vue/cli --force
npm install -g @vue/cli
```
使用
```shell
vue create projectName
```

#### vue-persistedstate 持久化插件
```shell
npm install --save vuex-persistedstate
```

#### pinia安装
```shell
npm install pinia --save
```

##### 创建项目
```shell
npm create vite@latest 
```
##### 运行项目
```shell
cd vite-voa
npm install
npm run dev
```

#### 安装依赖并保存到package.json
```shell
npm install axios --save
```

#### 安装路由模块
```shell
npm install vue-router@4 --save
```

#### 安装saas
```shell
npm install sass --save
```
#### 安装 vuex
```shell
 npm install vuex@next --save
```

#### 安装vitest
```shell
#-D开发时使用
npm i vitest -D --save
```
使用
```shell
npm test
```
组件测试依赖

```shell
npm i -D @testing-library/vue jsdom
```