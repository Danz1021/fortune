// 顯示 Toast 訊息
export function showToastMsg(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const span = toast.querySelector('span');
    if (span) span.innerText = msg;
    
    toast.classList.remove('translate-y-[150%]');
    setTimeout(() => {
        toast.classList.add('translate-y-[150%]');
    }, 3000);
}

// 複製文字到剪貼簿 (含 Fallback)
export function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToastMsg('已複製分享文字！'))
            .catch(() => fallbackCopyTextToClipboard(text));
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        if (successful) showToastMsg('已複製分享文字！');
    } catch (err) {
        console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
}

// 通用：生成 9:16 匯出圖片 Blob
async function generateExportImage(data) {
    const template = document.getElementById('export-template');
    if (!template) return null;

    // 1. Fill Data
    document.getElementById('export-keyword').innerText = data.title;
    document.getElementById('export-desc').innerText = data.desc;
    document.getElementById('export-product-name').innerText = data.productName;
    document.getElementById('export-product-copy').innerText = data.productCopy;
    const imgEl = document.getElementById('export-product-img');
    imgEl.src = data.img;

    // Wait for image to load (important for screenshot)
    await new Promise((resolve) => {
        if (imgEl.complete) resolve();
        else imgEl.onload = resolve;
    });

    // 2. Generate Canvas
    // @ts-ignore
    if (typeof html2canvas === 'undefined') return null;

    // @ts-ignore
    const canvas = await html2canvas(template, {
        useCORS: true,
        scale: 1, // Already high res (1080px width)
        backgroundColor: '#b93c37',
        logging: false
    });

    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

// 下載圖片 (使用新的 Template)
export async function downloadImage(data, btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    const originalHTML = btn.innerHTML;
    
    // UI Feedback
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> 圖片生成中...';
    btn.disabled = true;
    btn.classList.add('opacity-70', 'cursor-not-allowed');

    try {
        const blob = await generateExportImage(data);
        if (!blob) throw new Error("Image generation failed");

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `spidercard_fortune_2026_${new Date().getTime()}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        showToastMsg('圖片下載成功！');
    } catch (err) {
        console.error("Download Error:", err);
        alert('圖片生成失敗，請嘗試直接使用手機截圖。');
    } finally {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        btn.classList.remove('opacity-70', 'cursor-not-allowed');
    }
}

// 分享圖片 (嘗試喚起原生分享選單 -> IG Story)
export async function shareImage(data, btnId) {
    // 檢查瀏覽器是否支援 Web Share API Level 2 (File Share)
    if (!navigator.canShare) {
        // Fallback: 下載圖片並提示
        alert('您的瀏覽器不支援直接分享圖片，將為您下載圖片，請手動上傳至 Instagram。');
        downloadImage(data, btnId || 'share-btn'); // Assuming there's a button ID passed or fallback
        return;
    }

    const btn = btnId ? document.getElementById(btnId) : null;
    const originalHTML = btn ? btn.innerHTML : '';

    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> 處理中...';
        btn.disabled = true;
    }

    try {
        const blob = await generateExportImage(data);
        if (!blob) throw new Error("Image generation failed");

        const file = new File([blob], "fortune_2026.png", { type: "image/png" });
        const shareData = {
            files: [file],
            title: 'SPIDERCARD 2026 開運關鍵字',
            text: `我的2026關鍵字是：${data.title}！`
        };

        if (navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            throw new Error("Sharing files not supported");
        }
    } catch (err) {
        console.error("Share Error:", err);
        if (err.name !== 'AbortError') { // Ignore user cancel
             alert('分享失敗，將為您下載圖片。');
             downloadImage(data, btnId);
        }
    } finally {
        if (btn) {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    }
}