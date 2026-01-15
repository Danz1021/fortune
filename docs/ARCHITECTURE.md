# 🏗 技術架構說明書 (Technical Architecture)

## 📌 專案概述
**SPIDERCARD 2026 開運關鍵字** 是一個基於純靜態網頁技術 (Vanilla JS + HTML5 + CSS3) 開發的互動式心理測驗應用程式。專案旨在提供輕量、快速且易於部署的解決方案，無需後端伺服器即可運行。

## 📂 目錄結構
本專案採用 **關注點分離 (Separation of Concerns)** 原則進行組織：

```text
prototype/
├── src/
│   ├── assets/
│   │   └── images/     # 🖼 圖片資源：本地化圖片，確保跨域截圖功能正常
│   ├── css/
│   │   └── style.css   # 🎨 樣式層：所有視覺樣式定義
│   ├── js/
│   │   ├── app.js      # 🧠 邏輯層：核心應用程式邏輯、狀態管理
│   │   ├── data.js     # 💾 資料層：題庫與結果資料 (Static Data)
│   │   └── utils.js    # 🛠 工具層：共用函式 (複製、下載、Toast)
├── docs/               # 📚 文件：架構、資安與開發說明
├── index.html          # 🖥 視圖層：主要入口與 DOM 結構
├── package.json        # ⚙️ 設定：專案資訊與開發腳本
└── README.md           # 📖 說明：專案首頁
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
2.  **圖片載入**: 
    - 圖片資源皆指向 `src/assets/images/`。
    - 使用相對路徑，支援子網域 (Sub-domain) 部署，無需修改程式碼。
3.  **測驗過程**: 
    - 使用 `currentStep` 追蹤進度。
    - 透過 DOM 操作動態更新題目與進度條。
4.  **結果計算**: 
    - 根據四大元素 (Fire, Earth, Wind, Water) 得分計算結果。
5.  **結果展示**: 
    - 動態渲染結果頁面。
    - **截圖功能**: 由於圖片同源 (Same-Origin)，`html2canvas` 可直接讀取並產生高品質圖片，無 CORS 錯誤。

## ⚠️ 部署須知
- **HTTP Server**: 必須透過 Web Server 運行 (如 Nginx, Apache, Vercel)，不可直接開啟檔案。
- **子網域**: 支援任意層級的 Sub-domain (如 `fortune.spidercard.com`)，上傳即可使用。

## 🚀 未來擴充建議
- 若需增加題目，請直接修改 `src/js/data.js` 並將新圖片放入 `src/assets/images/`。
- 若需更換視覺風格，請修改 `src/css/style.css` 中的 CSS 變數。