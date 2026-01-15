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

// 下載圖片 (使用 html2canvas)
export function downloadImage(resultPageId, btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    const originalHTML = btn.innerHTML;
    
    // 1. UI Feedback
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> 圖片生成中...';
    btn.disabled = true;
    btn.classList.add('opacity-70', 'cursor-not-allowed');

    const resultPage = document.getElementById(resultPageId);
    
    // 2. Execute html2canvas
    // @ts-ignore
    if (typeof html2canvas === 'undefined') {
        console.error("html2canvas not loaded");
        resetBtn(btn, originalHTML);
        return;
    }

    // @ts-ignore
    html2canvas(resultPage, {
        useCORS: true, 
        allowTaint: true, 
        scale: 2, 
        backgroundColor: '#E44C46', 
        logging: false,
        onclone: (clonedDoc) => {
            const clonedPage = clonedDoc.getElementById(resultPageId);
            if (clonedPage) {
                clonedPage.style.height = 'auto';
                clonedPage.style.overflow = 'visible';
                clonedPage.scrollTop = 0; 
                
                const buttons = clonedPage.querySelectorAll('button');
                buttons.forEach(b => b.style.display = 'none');
            }
        }
    }).then(canvas => {
        try {
            canvas.toBlob(function(blob) {
                if (!blob) {
                    alert('圖片生成失敗 (可能受限於 Pinterest 圖片保護)，請嘗試直接使用手機截圖功能。');
                    resetBtn(btn, originalHTML);
                    return;
                }
                
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `spidercard_fortune_2026_${new Date().getTime()}.png`;
                link.href = url;
                document.body.appendChild(link);
                link.click();
                
                document.body.removeChild(link);
                setTimeout(() => URL.revokeObjectURL(url), 100);
                
                showToastMsg('圖片下載成功！');
                resetBtn(btn, originalHTML);
            }, 'image/png');
        } catch (e) {
            console.error("Canvas Security Error:", e);
            alert('由於圖片版權保護，無法自動生成圖片，請您直接使用手機截圖保存結果！');
            resetBtn(btn, originalHTML);
        }
    }).catch(err => {
        console.error("Screenshot failed:", err);
        alert('圖片生成失敗，可能是圖片來源限制，請嘗試直接使用手機截圖功能。');
        resetBtn(btn, originalHTML);
    });
}

function resetBtn(btn, originalHTML) {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    btn.classList.remove('opacity-70', 'cursor-not-allowed');
}
