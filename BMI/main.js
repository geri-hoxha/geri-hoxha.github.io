document.querySelector(".calc-button").addEventListener("click", function () {
    var weight = document.querySelector(".weight-input").value;
    var height = document.querySelector(".height-input").value;
    var res = weight / Math.pow(height, 2);
    res = res.toFixed(1);
    document.querySelector(".result").innerHTML = "Your BMI result is " + res;
})
document.querySelector(".cls-button").addEventListener("click", function () {
    document.querySelector(".weight-input").value = "0";
    document.querySelector(".height-input").value = "0";
})