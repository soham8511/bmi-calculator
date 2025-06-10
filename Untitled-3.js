document.getElementById("bmiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let height = parseFloat(document.getElementById("height").value) / 100;
  let weight = parseFloat(document.getElementById("weight").value);
  let resultBox = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultBox.innerHTML = "Please enter valid values!";
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight 😟";
  else if (bmi < 25) category = "Normal ✅";
  else if (bmi < 30) category = "Overweight ⚠️";
  else category = "Obese 🚨";

  resultBox.innerHTML = `Your BMI is <b>${bmi}</b><br>Category: <b>${category}</b>`;
});
