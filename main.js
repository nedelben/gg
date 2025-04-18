theme-color
const themeMeta = document.createElement('meta');
themeMeta.name = "theme-color";

// دالة لتحديث اللون حسب الوضع
const updateThemeColor = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  themeMeta.content = isDark ? "#121212" : "#ffffff"; // غيّر الألوان حسب رغبتك
};

// تنفيذ الدالة أولاً
updateThemeColor();

// إضافة الوسم إلى <head>
document.head.appendChild(themeMeta);

// الاستماع لتغيّر الوضع وتحديث اللون
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener("change", updateThemeColor);
