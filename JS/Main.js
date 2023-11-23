let $ = document;
let HeightRange = $.querySelector(".HeightRange");
let WeightRange = $.querySelector(".WeightRange");
let HeightValue = $.querySelector(".HeightValue");
let WeightValue = $.querySelector(".WeightValue");
let ResultBody = $.querySelector(".ResultBody");

function CalculateBMI() {
  let heightRangeValue = HeightRange.value;
  let weightRangeValue = WeightRange.value;
  let BMIResult = (weightRangeValue / (Math.pow(heightRangeValue/100 , 2))).toFixed(1);
  HeightValue.innerHTML = `${heightRangeValue} سانتی متر`;
  WeightValue.innerHTML = `${weightRangeValue}  کیلوگرم`;
  switch (true) {
    case BMIResult < 18.5:
      console.log(BMIResult);
      ResultBody.style.color = "#f43f5e";
      ResultBody.innerHTML = `با مقدار ${BMIResult} بیش از حد نرمال لاغر هستید.`;
      break;
    case BMIResult >= 18.5 && BMIResult <= 25:
      ResultBody.innerHTML = `با مقدار ${BMIResult} نتیجه نرمال است.`;
      ResultBody.style.color = "#10b981";
      break;
    case BMIResult > 25 && BMIResult <= 30:
      ResultBody.innerHTML = `با مقدار ${BMIResult}  دچار اضافه وزن هستید.`;
      ResultBody.style.color = "#f59e0b";
      break;
    case BMIResult > 30:
      ResultBody.innerHTML = `با مقدار ${BMIResult}  بیش از اندازه اضافه وزن دارید.`;
      ResultBody.style.color = "#dc2626";
      break;
    default:
      ResultBody.innerHTML = "لطفا قد و وزن خود را انتخاب نمایید.";
      break;
  }
}

HeightRange.addEventListener("input", CalculateBMI);
WeightRange.addEventListener("input", CalculateBMI);
