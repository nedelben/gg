// الدالة لتغيير الكلاس بين الوضع الفاتح والداكن
function toggleMode() {
    document.body.classList.toggle("light");
}

// إضافة حدث عند الضغط على الزر
document.querySelector(".toggle-theme").addEventListener("click", toggleMode);
