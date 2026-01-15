# 🔮 SPIDERCARD 2026 開運關鍵字

> 測出你的靈魂頻率，找到 2026 年的專屬開運秘訣。

這是一個互動式的心理測驗 Web App，旨在推廣 SPIDERCARD 品牌形象。使用者透過回答 8 個情境問題，分析出個人的年度關鍵字，並獲得專屬的開運小物推薦。

![專案截圖](https://via.placeholder.com/800x400?text=SPIDERCARD+2026+Demo)

## ✨ 特色功能

- **沉浸式測驗體驗**: 流暢的問答介面與過場動畫。
- **精美結果生成**: 自動產生包含個人關鍵字與解籤的精美圖片。
- **一鍵分享**: 支援將結果下載為圖片，或複製連結分享給好友。
- **響應式設計**: 專為行動裝置優化，同時兼容桌面瀏覽器。

## 🚀 快速開始 (Quick Start)

### 1. 取得專案
```bash
git clone <repository-url>
cd prototype
```

### 2. 啟動本地伺服器
由於專案使用 ES Modules，**不能**直接雙擊 `index.html` 開啟（會出現 CORS 錯誤）。請使用任何靜態網頁伺服器：

**方法 A: 使用 Python (macOS 內建)**
```bash
python3 -m http.server 8000
# 然後在瀏覽器開啟 http://localhost:8000
```

**方法 B: 使用 Node.js (推薦)**
```bash
npx http-server .
# 然後在瀏覽器開啟顯示的網址
```

**方法 C: VS Code**
安裝 "Live Server" 擴充套件，右鍵點擊 `index.html` 選擇 "Open with Live Server"。

## 🛠 開發指南

請參閱 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) 以了解詳細的程式碼架構與檔案職責。

- **修改題目**: 編輯 `src/js/data.js`
- **修改樣式**: 編輯 `src/css/style.css`
- **修改邏輯**: 編輯 `src/js/app.js`

## 📦 專案結構

```
prototype/
├── index.html          # 入口檔案
├── src/                # 原始碼
│   ├── css/            # 樣式表
│   └── js/             # 邏輯腳本 (ES Modules)
└── docs/               # 開發文件
```

## 📄 版權說明
本專案為 SPIDERCARD 內部專案。圖片素材版權歸原作者所有。
