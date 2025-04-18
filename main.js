 // الدالة لتغيير الكلاس بين الوضع الفاتح والداكن
function toggleMode() {
    // تبديل الكلاس light على body
    document.body.classList.toggle("light");
  
    // الحصول على وسم meta الذي يتحكم في لون شريط العنوان في الهاتف
    const meta = document.getElementById("theme-color-meta");
  
    // التحقق إذا كنا في الوضع الفاتح الآن
    const isLightMode = document.body.classList.contains("light");
  
    // تغيير قيمة content في meta حسب الوضع الحالي
    meta.setAttribute("content", isLightMode ? "#89CFF0" : "#333");
  }
  
  // ربط الزر بحدث الضغط لتنفيذ التبديل
  document.querySelector(".toggle-theme").addEventListener("click", toggleMode);
  
