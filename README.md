
# 將完成的 React 專案發佈在 Github Pages

> 參考來源：[Deployment · Create React App](https://facebook.github.io/create-react-app/docs/deployment)

---

## Step 1 建立一個 React app

> 如果有現有的，就將 Github 的專案 git clone <repo_url> 下來。跳過 Step. 1 的以下步驟。
>
> 或者開一個新的專案並在本地建立 React app。

1. 任選一個方式建立 app

```
npx create-react-app my-app
npm init react-app my-app
yarn create react-app my-app
```

2. `cd my-app`

3. 將本地與 Github 連結

```
git init
git add .
git commit -m "first commit"
git remote add origin <https://github.com/enter3017sky/github-pages-example.git>
git push -u origin master
```

## Step 2 安裝與設定 gh-pages

### 1. 將 _homepage_ 新增到 _package.json_

`"homepage": "https://enter3017sky.github.io/{repo-name}",`

### 2. 安裝 gh-pages

用 npm 安裝 _gh-pages_ `npm install gh-pages --save-dev`

或 yarn，也可以使用這個 `yarn add gh-pages`

### 3. 將 gh-pages 部屬的指令添加到 _package.json_

執行兩個

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

或一起做完

```
  "scripts": {
+   "deploy": "npm run build && gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

### 4. 部屬

執行第二個步驟加入的指令，`npm run deploy`，待指令執行完成後。

查看 Github，就會多一個 gh-pages 的分之，以及 _setting_ 中有 Github Pages 的專案網址等。

![image](https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/github-pages.png)

---

# 使用 react-markdown

> 參考 [react-markdown 使用总结](https://segmentfault.com/a/1190000020294373)

1. 安裝，`npm install --save react-markdown`

2. 安裝 md 的 loader，`npm install -D raw-loader`

3. 在 webpack 中加入 md loader 的設定。

> 要更改 webpack 的設定，看來除了使用 [craco](https://github.com/gsoft-inc/craco) 覆蓋設定之外，只有使用 `npm run eject` 了。
>
> 這邊使使用 `npm run eject`

4. config/webpack.config.js 中加入 loader

```javascript
// ...(略)
    module: {
      strictExportPresence: true,
      rules: [
        // Disable require.ensure as it's not a standard language feature.
        { parser: { requireEnsure: false }},
        {
          // "oneOf" will traverse all following loaders until one will
          // match the requirements. When no loader matches it will fall
          // back to the "file" loader at the end of the loader list.
          oneOf: [
            // ...(略)

            // 在最後的 loader 之前，加入 md 的設定，剩下的檔案都會被 file-loader 處理掉。
            // https://zhuanlan.zhihu.com/p/85839264
            {
              test: /\.md$/,
              // loader: require.resolve('raw-loader'),
              use: 'raw-loader',
            },


            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            // This loader doesn't use a "test" so it will catch all modules
            // that fall through the other loaders.
            {
              loader: require.resolve('file-loader'),
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise be processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
          ],
        },
      ],
    },
```
