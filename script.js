document.getElementById("feeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let courses = document.querySelectorAll('input[name="courses"]:checked');
    let total = 0;
    courses.forEach(function (course) {
        total += parseInt(course.value);
    });
    // Apply a discount of 10% if more than 2 courses selected
    if (courses.length > 2) {
        total = total * 0.9;
    }
    // Add 15% VAT
    total = total * 1.15;
    document.getElementById("totalFee").innerHTML = "Total Fee: R" + total.toFixed(2);
});
