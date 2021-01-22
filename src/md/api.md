
# 將完成的 React 專案發佈在 Github Pages

> 參考來源：[Deployment · Create React App](https://facebook.github.io/create-react-app/docs/deployment)

### 1. 將 _homepage_ 新增到 _package.json_

`"homepage": "https://enter3017sky.github.io/github-pages-example",`

### 2. 將 gh-pages 部屬的指令添加到 _package.json_

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

### 3. 安裝 gh-pages

用 npm 安裝 _gh-pages_ `npm install --save gh-pages`

或 yarn，也可以使用這個 `yarn add gh-pages`

### 4. github 開新的專案，然後 vscode 就輸入指令推上 Github

```
git init
git add .
git commit -m "first commit"
git remote add origin <https://github.com/enter3017sky/github-pages-example.git>
git push -u origin master
```

### 5. 部屬，執行第二個步驟加入的指令，`npm run deploy`

![image](https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/github-pages.png)

但在公開的項目上可以在 `Settings -> Branches -> Default branch` 設定顯示為 **master** 或 **gh-pages**
