# Leo Template Project

## 簡介

基於 Vue3 和 Vite 的前端共用範例專案。

## Getting Started

### Install

確保你已經安裝了

- node: 18.16.0
- npm : 9.5.1

### Command

```bash
# clone the project
git clone https://github.com/ziku10121/vite-vue-template.git

# enter the project directory
cd vite-vue-template

# install the required packages for the project
npm install

# start local develop server
npm run dev

# build the project, and the built files will be output to the "dist" directory
npm run build
```

## 目錄結構

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── public/                         靜態資源目錄
    ├── src/                            原始碼目錄
    │   ├── assets/                     靜態資源(例如圖片、文字、icon)
    │   ├── components/                 可重複使用 Vue 組件
    │   ├── layouts/                    布局組件資料夾
    │   ├── router/                     路由相關設定
    │   ├── store/                      全局狀態管理(Pinia)
    │   ├── styles/                     全局樣式資料夾
    │   ├── utils/                      常用工具函數(日期、字串處理、數字格式化、API請求、驗證...)
    │   ├── views/                      頁面的 Vue 組件
    │   ├── App.vue                     根組件
    │   └── main.js                     入口檔案，初始化 Vue 應用
    ├── .env.development         # 開發環境配置
    ├── .env.production          # 生產環境配置
    ├── .eslintignore            # 指定 ESLint 忽略的文件
    ├── .eslintrc-auto-import.json # ESLint 自動導入插件的配置
    ├── .eslintrc.js             # ESLint 配置文件
    ├── jsconfig.json            # JavaScript 項目配置（適用於 VSCode）
    ├── .gitignore               # 忽略的文件設定
    ├── index.html               # Vue 應用的入口 HTML 文件
    ├── babel.config.js          # Babel 設定文件
    ├── package.json             # 專案的元數據和依賴關係
    ├── README.md           # 專案說明文件
    └── vue.config.js       # Vue CLI 的配置文件

## 撰寫規範

### 目錄結構

- `components` 裡，資料夾與檔案名使用大駝峰命名（upper camel case）
- `views` 裡，資料夾與檔案名使用大駝峰命名（lower camel case）

### 變數

- **小駝峰命名法（camelCase）**：變量名和函數名應使用小駝峰命名法。例如：`myVariable`、`fetchData`。
- **常量**：常量應使用全大寫，並以 `_` 分隔。例如：`MAX_COUNT`、`API_URL`。
- **布林值**：布林值變量名應以 `is`、`has` 開頭。例如：`isActive`、`hasPermission`。

### 函數

- **點擊事件** `handle{動作/功能}`。例如：`handleOnClick`
- **其他事件** `{動作}{名詞}`。例如：`getValue`
- **布林** `is{名詞/動詞/功能}`。例如：`isExcel`

  ```javascript
  const handleOnClick = () => {};

  const getValue = () => {};

  const isExcel = () => {};
  ```

#### 函數註解

`function` 應用開頭加入註解，說明傳入方式目的、參數、回傳值。例如：

```javascript
/**
 * 計算方式
 * @param num1
 * @param num2
 * @returns
 */
const getSumTotal = (num1: number, num2: number) => {
  return num1 + num2;
};
```
