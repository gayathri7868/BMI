document.getElementById("slider1").addEventListener("input", () => {
    document.getElementById("box1").textContent =
        document.getElementById("slider1").value;
});
document.getElementById("slider2").addEventListener("input", () => {
    document.getElementById("box2").textContent =
        document.getElementById("slider2").value;
});

let g = "chuyhedhf"

let j = "gayathriiiiiiiiiiiiiiii";
let s = "sangeethaaaaaaaaaaaaaa";
function calculate() {
    let h = Number(document.getElementById("slider2").value) / 100;
    let weight = Number(document.getElementById("slider1").value);
    bmi = (weight / (h * h)).toFixed(2);
    document.getElementById("box3").textContent = bmi;
    if (bmi <= 18.4) {
        result = "under weight";
    } else if (bmi > 18.4 && bmi <= 24.9) {
        result = "normal weight";
    } else if (bmi >= 25 && bmi <= 39.9) {
        result = "over weight";
    } else {
        result = "obese";
    }
    document.getElementById("result2").textContent = "You are " + result + "!!!";
}
