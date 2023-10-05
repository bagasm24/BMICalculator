let weight = document.getElementById("weight")
let height = document.getElementById("height")
let btnSubmit = document.getElementById("btn-bmi")
let contentResult = document.getElementById("content-result");

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    function rumusBMI(weight, height){
        let bmi = weight / ((height / 100)**2)
        return bmi
    }

    function categoriesBMI(hasIlBMI) {
        if(hasIlBMI < 18.5){
            return "Underweight"
        }else if(hasIlBMI >= 18.5 && hasIlBMI <= 24.9){
            return "Normal"
        }else if(hasIlBMI >= 25 && hasIlBMI <= 29.9){
            return "Overeweight"
        }else if(hasIlBMI >= 30){
            return "Obesity"
        }
    }
    let bmiResult = rumusBMI(weight.value, height.value);
    let bmiCategory = categoriesBMI(bmiResult);
    contentResult.innerHTML = `Your BMI is ${bmiResult.toFixed(2)} which mean You are ${bmiCategory}`;
})
