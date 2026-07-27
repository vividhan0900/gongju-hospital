function copyPrompt(btn) {
  const box = btn.closest(".prompt-box");
  const textEl = box.querySelector(".prompt-text");
  const text = textEl.innerText;

  function showCopied() {
    const original = btn.textContent;
    btn.textContent = "✅ 복사됨";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  }

  function fallbackCopy() {
    const range = document.createRange();
    range.selectNodeContents(textEl);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    selection.removeAllRanges();

    if (ok) {
      showCopied();
    } else {
      const original = btn.textContent;
      btn.textContent = "직접 선택 후 Ctrl+C";
      setTimeout(() => {
        btn.textContent = original;
      }, 2000);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}
