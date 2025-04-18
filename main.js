// تحديد العنصر meta
const themeMeta = document.querySelector('meta[name="theme-color"]');

// تحديد الزر المسؤول عن تبديل الوضع
const toggleButton = document.querySelector('.toggle-theme');

// تحديد الوضع الحالي
let isLightMode = document.body.classList.contains('light');

// تحديث لون theme-color بناءً على الوضع الحالي
function updateThemeColor() {
  if (isLightMode) {
    themeMeta.setAttribute('content', '#ffffff'); // لون الوضع الفاتح
  } else {
    themeMeta.setAttribute('content', '#121212'); // لون الوضع الداكن
  }
}

// تبديل الوضع بين الفاتح والداكن
function toggleMode() {
  isLightMode = !isLightMode;
  document.body.classList.toggle('light');
  updateThemeColor();
}

// إضافة مستمع للزر
toggleButton.addEventListener('click', toggleMode);

// تحديث اللون عند تحميل الصفحة
updateThemeColor();
