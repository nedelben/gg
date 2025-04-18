// الدالة لتغيير الكلاس بين الوضع الفاتح والداكن
function toggleMode() {
    document.body.classList.toggle("light");
}

// إضافة حدث عند الضغط على الزر
document.querySelector(".toggle-theme").addEventListener("click", toggleMode);

function updateThemeColor() {
    const meta = document.getElementById("theme-color-meta");
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    meta.setAttribute("content", darkMode ? "#333" : "##89CFF0");
  }

  updateThemeColor(); // تشغيله أول مرة

  // إعادة التشغيل إذا تغير الوضع
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeColor);
