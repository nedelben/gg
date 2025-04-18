// نحصل على الوسم الموجود فعلاً
const themeMeta = document.getElementById("theme-color-meta");

// تحديث اللون حسب الوضع
function updateThemeColor(mode) {
  if (mode === "light") {
    themeMeta.setAttribute("content", "#89CFF0");
  } else {
    themeMeta.setAttribute("content", "#333");
  }
}

// تطبيق الوضع
function applyTheme(mode) {
  document.body.classList.remove("light", "dark");
  if (mode === "light") {
    document.body.classList.add("light");
  } else {
    // لو حاب تسمي الكلاس الخاص بالوضع الداكن "dark"، ضيفه هنا
    // بس حالياً أنت ما عندك كلاس "dark"، فنبقي فقط الوضع العادي
  }
  updateThemeColor(mode);
}

// استرجاع الوضع المحفوظ أو النظامي
function getInitialMode() {
  const saved = localStorage.getItem("theme-mode");
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
}

// تغيير الوضع عند الضغط على الزر
function toggleTheme() {
  currentMode = currentMode === "dark" ? "light" : "dark";
  applyTheme(currentMode);
  localStorage.setItem("theme-mode", currentMode);
}

// تشغيل عند تحميل الصفحة
let currentMode = getInitialMode();
window.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentMode);
});

// زر التبديل
document.querySelector(".toggle-theme").addEventListener("click", toggleTheme);

