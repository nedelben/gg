// الدالة لتغيير الكلاس بين الوضع الفاتح والداكن
function toggleMode() {
  document.body.classList.toggle("light");

  // تحديث اللون داخل الوسم meta حسب الوضع الحالي
  const meta = document.getElementById("theme-color-meta");
  const isLightMode = document.body.classList.contains("light");
  meta.setAttribute("content", isLightMode ? "#89CFF0" : "#333");
}

// إضافة حدث عند الضغط على الزر
document.querySelector(".toggle-theme").addEventListener("click", toggleMode);
