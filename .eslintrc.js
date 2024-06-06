module.exports = {
  root : true,
  //指定程式碼的運行環境
  env  : {
    browser : true,
    node    : true,
    es2021  : true
  },
  extends: [
    'plugin:vue/vue3-essential',     // 使用 Vue 官方提供的 ESLint 規則
    '@vue/standard',                 // 使用標準的 ESLint 規則
    '@vue/typescript/recommended',   // 使用 Vue 官方提供的 TypeScript 規則
    './.eslintrc-auto-import.json'
  ],
  globals : {
    defineProps  : 'readonly',
    defineEmits  : 'readonly',
    defineExpose : 'readonly',
    withDefaults : 'readonly'
  },
  rules: {
    // 其他规则...
    "no-undef": "off",          //禁止使用未宣告的變數
    "camelcase": "error",       //強制使用駝峰命名法（camelCase）
    "no-unused-vars": "off",    //禁止定義未使用的變數
    "indent": ["error","tab"],  //使用指定的縮排風格
    "quotes": ["error","double"], //使用指定的引號風格
    "semi": ["error","always"]    //強制使用分號
  }
};