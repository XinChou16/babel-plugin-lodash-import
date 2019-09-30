# `babel-plugin-lodash-import`

> A babel plugin for lodash import optimization


## 使用

1. `yarn add`

2. 将 `lib` 文件夹重命名为 `babel-plugin-lodash-import`

3. 将 `babel-plugin-lodash-import/` 文件夹复制到 `node_modules/`文件夹下

4. 配置文件：[webpack配置](./webpack.config.js)

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['lodash-import', {}]
        }
      }
    ]
  }
}
```

5. 打包：`yarn start`

## 打包对比

**不使用插件**
![不使用插件](https://ae01.alicdn.com/kf/H24bbba1bee89400ca597daed7092824an.png)

**使用插件打包后**
![使用插件](https://ae01.alicdn.com/kf/H24d69487d35f45509041a4b4897f5c5c8.png)
