# 🏗 技術架構說明書 (Technical Architecture)

## 📌 專案概述
**SPIDERCARD 2026 開運關鍵字** 是一個基於純靜態網頁技術 (Vanilla JS + HTML5 + CSS3) 開發的互動式心理測驗應用程式。專案旨在提供輕量、快速且易於部署的解決方案，無需後端伺服器即可運行。

## 📂 目錄結構
本專案採用 **關注點分離 (Separation of Concerns)** 原則進行組織：

```text
prototype/
├── src/
│   ├── css/
│   │   └── style.css       # 🎨 樣式層：所有視覺樣式定義
│   ├── js/
│   │   ├── app.js          # 🧠 邏輯層：核心應用程式邏輯、狀態管理
│   │   ├── data.js         # 💾 資料層：題庫與結果資料 (Static Data)
│   │   └── utils.js        # 🛠 工具層：共用函式 (複製、下載、Toast)
├── docs/                   # 📚 文件：架構與開發說明
├── index.html              # 🖥 視圖層：主要入口與 DOM 結構
├── package.json            # ⚙️ 設定：專案資訊與開發腳本
└── README.md               # 📖 說明：專案首頁
```

## 🛠 技術堆疊 (Tech Stack)

### 核心技術
- **HTML5**: 語意化標籤結構。
- **CSS3**: 使用 CSS Variables 定義主題色，結合 Tailwind CSS 進行快速排版。
- **JavaScript (ES6+)**: 使用 ES Modules (`import`/`export`) 進行模組化開發。

### 外部依賴 (CDN)
為了保持輕量化，本專案直接透過 CDN 引入必要的第三方庫，無需複雜的 Build Process：
- **[Tailwind CSS](https://tailwindcss.com)**: 用於快速開發響應式 UI。
- **[html2canvas](https://html2canvas.hertzen.com/)**: 用於將 DOM 節點轉換為圖片 (截圖功能)。
- **[FontAwesome](https://fontawesome.com)**: 用於 UI 圖示。
- **[Google Fonts](https://fonts.google.com)**: 使用 Noto Serif TC (襯線體) 與 Noto Sans TC (無襯線體)。

## 🔄 資料流與邏輯

1.  **初始化**: `app.js` 載入後，隱藏 Landing Page，顯示 Quiz Page。
2.  **測驗過程**: 
    - 使用 `currentStep` 追蹤進度。
    - 使用 `userAnswers` 陣列儲存使用者選擇。
    - 透過 DOM 操作動態更新題目與進度條。
3.  **結果計算**: 
    - 根據使用者選擇計算四大元素 (Fire, Earth, Wind, Water) 的得分。
    - 取最高分者為主要屬性，並結合最後一題的選擇，映射至 `data.js` 中的 8 種結果。
4.  **結果展示**: 
    - 動態渲染結果頁面的標題、描述、推薦產品與圖片。
    - 提供「截圖下載」與「複製連結」功能。

## ⚠️ 注意事項
- **ES Modules**: 由於使用了 `<script type="module">`，本專案必須透過 HTTP Server (如 `http-server` 或 VS Code Live Server) 運行，無法直接透過檔案路徑 (`file://`) 開啟，否則會遇到 CORS 錯誤。
- **圖片跨域**: `html2canvas` 截圖功能受限於 CORS 政策。專案中的圖片需確保伺服器支援 `Access-Control-Allow-Origin: *`，或使用同源圖片。

## 🚀 未來擴充建議
- 若需增加題目，請直接修改 `src/js/data.js`。
- 若需更換視覺風格，請修改 `src/css/style.css` 中的 CSS 變數。
