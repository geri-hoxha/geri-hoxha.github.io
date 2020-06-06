document.querySelector(".calc-btn").addEventListener("click", function () {
    var weight = document.querySelector(".weight-input").value;
    var height = document.querySelector(".height-input").value;
    var res = weight / Math.pow(height, 2);
    res = res.toFixed(2);
    document.querySelector(".result").style.display = "block";
    document.querySelector(".result").innerHTML = "Your BMI result is " + res;
})
document.querySelector(".calc-btn-2").addEventListener("click", function () {
    var weight = document.querySelector(".weight-input-2").value;
    var height = document.querySelector(".height-input-2").value;
    height *= 12;
    var res = (weight / height / height) * 703;
    res = res.toFixed(2);
    document.querySelector(".result-2").style.display = "block";
    document.querySelector(".result-2").innerHTML = "Your BMI result is " + res;
})
document.querySelector(".cls-btn").addEventListener("click", function () {
    document.querySelector(".age").value = "";
    document.querySelector(".weight-input").value = "";
    document.querySelector(".height-input").value = "";
})
document.querySelector(".cls-btn-2").addEventListener("click", function () {
    document.querySelector(".age-2").value = "";
    document.querySelector(".weight-input-2").value = "";
    document.querySelector(".height-input-2").value = "";
})