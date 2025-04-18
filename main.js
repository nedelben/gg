// إنشاء أو جلب وسم meta لتحديث لون التبويب في الهواتف
let themeMeta = document.querySelector('meta[name="theme-color"]');
if (!themeMeta) {
  themeMeta = document.createElement('meta');
  themeMeta.name = "theme-color";
  document.head.appendChild(themeMeta);
}

// تحديث meta حسب الوضع الحالي
function updateThemeColor(mode) {
  if (mode === "dark") {
    themeMeta.setAttribute("content", "#333");
  } else {
    themeMeta.setAttribute("content", "#89CFF0");
  }
}

// تطبيق الوضع على <body>
function applyTheme(mode) {
  document.body.classList.remove("light", "dark");
  if (mode === "dark") {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
  updateThemeColor(mode);
}

// استرجاع الوضع المفضل أو النظام
function getInitialMode() {
  const savedMode = localStorage.getItem("theme-mode");
  if (savedMode) return savedMode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// عند التحميل
let currentMode = getInitialMode();
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentMode);
});

// تبديل الوضع عند الضغط
document.querySelector(".toggle-theme").addEventListener("click", () => {
  currentMode = currentMode === "dark" ? "light" : "dark";
  applyTheme(currentMode);
  localStorage.setItem("theme-mode", currentMode);
});
