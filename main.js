// جلب أو إنشاء وسم meta لتغيير لون التبويب في الهواتف
let themeMeta = document.querySelector('meta[name="theme-color"]');
if (!themeMeta) {
  themeMeta = document.createElement('meta');
  themeMeta.name = "theme-color";
  document.head.appendChild(themeMeta);
}

// تحديث لون الـ meta حسب الوضع الحالي
function updateThemeColor(mode) {
  if (mode === "light") {
    themeMeta.setAttribute("content", "#89CFF0"); // لون الوضع الفاتح
  } else {
    themeMeta.setAttribute("content", "#333"); // لون الوضع الداكن
  }
}

// تطبيق كلاس الوضع على <body>
function applyTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light"); // الوضع الداكن = بدون كلاس light
  }
  updateThemeColor(mode);
}

// استرجاع الوضع من localStorage أو من إعدادات النظام
function getInitialMode() {
  const savedMode = localStorage.getItem("theme-mode");
  if (savedMode) return savedMode;

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemPrefersDark ? "dark" : "light";
}

// تنفيذ عند تحميل الصفحة
let currentMode = getInitialMode();
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentMode);
});

// عند الضغط على زر التبديل
document.querySelector(".toggle-theme").addEventListener("click", () => {
  currentMode = currentMode === "light" ? "dark" : "light";
  applyTheme(currentMode);
  localStorage.setItem("theme-mode", currentMode);
});
