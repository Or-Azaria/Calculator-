//------------- DOM -------------//
let totalValue = document.querySelector("#totalValue");
let currentValue = document.querySelector("#currentValue");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equalTo = document.querySelector(".equalTo");

//------------- class -------------//
class Calculator {
  constructor(currentValue, totalValue) {
    this.currentValue = currentValue;
    this.totalValue = totalValue;
    this.deleteAll();
  }
  number(num) {
    if (num == "." && this.num.includes(".")) return;

    this.num += num;
  }
  operators(oper) {
    if (this.num == "") return;
    this.oper = oper;
    console.log(oper);
    this.totalNum = this.num;
    this.num = "";
  }

  evaluation() {
    let x = "";
    switch (this.oper) {
      case "%":
        x = Number(this.totalNum) * (Number(this.num) / 100);
        break;
      case "+":
        x = Number(this.totalNum) + Number(this.num);
        break;
      case "−":
        x = Number(this.totalNum) - Number(this.num);
        break;
      case "×":
        x = Number(this.totalNum) * Number(this.num);
        break;
      case "÷":
        x = Number(this.totalNum) / Number(this.num);
        break;
    }
    this.totalNum = "";
    this.num = x;
    this.oper = "";
  }

  delete() {}

  deleteAll() {
    this.num = "";
    this.oper = "";
  }
  display() {
    this.currentValue.textContent = `${this.num}`;
    this.totalValue.textContent =
      this.oper !== "" ? `${this.totalNum} ${this.oper}` : "";
  }
}

let calculator1 = new Calculator(currentValue, totalValue);
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator1.number(button.textContent);
    calculator1.display();
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator1.operators(operator.textContent);
    calculator1.display();
  });
});
equalTo.addEventListener("click", () => {
  calculator1.evaluation();
  calculator1.display();
});
