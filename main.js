// الدالة لتغيير الكلاس بين الوضع الفاتح والداكن
function toggleMode() {
    document.body.classList.toggle("light");
}

// إضافة حدث عند الضغط على الزر
document.querySelector(".toggle-theme").addEventListener("click", toggleMode);


function updateThemeColor() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkMode) {
      metaThemeColor.setAttribute("content", "#333"); // لون الوضع الداكن
    } else {
      metaThemeColor.setAttribute("content", "##89CFF0"); // لون الوضع الفاتح
    }
  }

  // استدعاء الدالة عند تحميل الصفحة
  updateThemeColor();

  // مراقبة تغيّر الوضع تلقائيًا
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeColor);
