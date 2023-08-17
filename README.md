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
