let buttonByClass = document.getElementsByClassName("button");
let firstOpById = document.getElementById("first-op");
let resultById = document.getElementById("result");
let numberByClass = document.querySelectorAll(".number");
let operatorByClass = document.querySelectorAll(".operator");
let logBtnById = document.getElementById("log-btn");
let LogById = document.getElementById("log");
let operand;

for (let i = 0; i < buttonByClass.length; i++) {
  buttonByClass[i].addEventListener("click", () => {
    if (buttonByClass[i].innerHTML == "AC") {
      firstOpById.innerHTML = "";
      resultById.innerHTML = "";
    } else if (buttonByClass[i].innerHTML == "±") {
      if (resultById.innerHTML[0] == "-") {
        resultById.innerHTML = resultById.innerHTML.replace("-", "");
      } else {
        resultById.innerHTML = `-${resultById.innerHTML}`;
      }
    } else if (buttonByClass[i].innerHTML == "%") {
      if (resultById.innerHTML[0] == "0") {
        resultById.innerHTML = resultById.innerHTML * 100;
      } else {
        resultById.innerHTML = resultById.innerHTML / 100;
      }
    }
  });
}
for (let n = 0; n < numberByClass.length; n++) {
  numberByClass[n].addEventListener("click", () => {
    resultById.innerHTML += numberByClass[n].innerHTML;
  });
}
for (let o = 0; o < operatorByClass.length; o++) {
  operatorByClass[o].addEventListener("click", () => {
    if (operatorByClass[o].innerHTML == "=") {
      switch (operand) {
        case "+":
          firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
          LogById.innerHTML += `\n ${firstOpById.innerHTML} + ${resultById.innerHTML} `;
          resultById.innerHTML =
            parseInt(firstOpById.innerHTML) + parseInt(resultById.innerHTML);
            LogById.innerHTML += `= ${resultById.innerHTML}`;
          firstOpById.innerHTML = "";
          break;
        case "-":
          firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
          LogById.innerHTML += `\n ${firstOpById.innerHTML} - ${resultById.innerHTML} `;
          resultById.innerHTML =
            parseInt(firstOpById.innerHTML) - parseInt(resultById.innerHTML);
            LogById.innerHTML += `= ${resultById.innerHTML}`;
          firstOpById.innerHTML = "";
          break;
        case "÷":
          firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
          LogById.innerHTML += `\n ${firstOpById.innerHTML} ÷ ${resultById.innerHTML} `;
          resultById.innerHTML =
            parseInt(firstOpById.innerHTML) / parseInt(resultById.innerHTML);
            LogById.innerHTML += `= ${resultById.innerHTML}`;
          firstOpById.innerHTML = "";
          break;
        case "x":
          firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
          LogById.innerHTML += `\n ${firstOpById.innerHTML} x ${resultById.innerHTML} `;
          resultById.innerHTML =
            parseInt(firstOpById.innerHTML) * parseInt(resultById.innerHTML);
            LogById.innerHTML += `= ${resultById.innerHTML}`;
          firstOpById.innerHTML = "";
          break;
      }
    } else if (
      resultById.innerHTML.length > 0 &&
      firstOpById.innerHTML.length == 0
    ) {
      switch (operatorByClass[o].innerHTML) {
        case "+":
          firstOpById.innerHTML = `${resultById.innerHTML}${operatorByClass[o].innerHTML}`;
          resultById.innerHTML = "";
          operand = "+";
          break;
        case "-":
          firstOpById.innerHTML = `${resultById.innerHTML}${operatorByClass[o].innerHTML}`;
          resultById.innerHTML = "";
          operand = "-";
          break;
        case "÷":
          firstOpById.innerHTML = `${resultById.innerHTML}${operatorByClass[o].innerHTML}`;
          resultById.innerHTML = "";
          operand = "÷";
          break;
        case "x":
          firstOpById.innerHTML = `${resultById.innerHTML}${operatorByClass[o].innerHTML}`;
          resultById.innerHTML = "";
          operand = "x";
          break;
      }
    } else if (firstOpById.innerHTML.length > 0) {
      if (resultById.innerHTML.length > 0) {
        switch (operand) {
          case "+":
            firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
            firstOpById.innerHTML =
              parseInt(firstOpById.innerHTML) + parseInt(resultById.innerHTML);
            operand = operatorByClass[o].innerHTML;
            firstOpById.innerHTML += operand;
            resultById.innerHTML = "";

            break;
          case "-":
            firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
            firstOpById.innerHTML =
              parseInt(firstOpById.innerHTML) - parseInt(resultById.innerHTML);
            operand = operatorByClass[o].innerHTML;
            firstOpById.innerHTML += operand;
            resultById.innerHTML = "";
            break;
          case "÷":
            firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
            firstOpById.innerHTML =
              parseInt(firstOpById.innerHTML) / parseInt(resultById.innerHTML);
            operand = operatorByClass[o].innerHTML;
            firstOpById.innerHTML += operand;
            resultById.innerHTML = "";
            break;
          case "x":
            firstOpById.innerHTML = firstOpById.innerHTML.slice(0, -1);
            firstOpById.innerHTML =
              parseInt(firstOpById.innerHTML) * parseInt(resultById.innerHTML);
            operand = operatorByClass[o].innerHTML;
            firstOpById.innerHTML += operand;
            resultById.innerHTML = "";
            break;
        }
      }
    }
  });
}
logBtnById.addEventListener("click", () => {
  LogById.style.display = "inline-block";
  logBtnById.innerHTML = "Hide Log"
  logBtnById.addEventListener("click", ()=>{
      LogById.style.display ="none";
      logBtnById.style.display = "none";
  })
});
