const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const BodyConditionEl = document.getElementById("Body Condition")
function calculateBMI(){
    const HeightValue = document.getElementById("Height").value / 100
    const WeightValue = document.getElementById("Weight").value 

    const bmiValue = WeightValue / (HeightValue * HeightValue)

    bmiInputEl.value = bmiValue;
    
    if(bmiValue < 18.5)
        {
        BodyConditionEl.innerText = "Under weight & Weak";
    }
    else if (bmiValue >= 18.5 && bmiValue <=24.9)
        {
            BodyConditionEl.innerText ="Normal & Healthy";
        }
        else if (bmiValue >=25 && bmiValue <= 29.9)
            {
            BodyConditionEl.innerText = "Over weight";
            }
            else if (bmiValue >=30)
                {
                BodyConditionEl.innerText = "Obesity";
                }
}

btnEl.addEventListener("click",calculateBMI)