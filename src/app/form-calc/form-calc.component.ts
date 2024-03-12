import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  switchNum : number = 0;
  num1 : number = 0;
  num2 : number = 0;
  output : number = 0;

  onClickOperation(event: any) {
    switch (event.target.value) {
      case "+":
        this.output = this.num1 + this.num2;
        break;
      case "-":
        this.output = this.num1 - this.num2;
        break;
      case "X":
        this.output = this.num1 * this.num2;
        break;
      case "/":
        this.output = this.num1 / this.num2;
        break;
      case "1/x":
        this.output = 1 / this.num1;
        break;
      case "x^2":
        this.output = Math.pow(this.num1, 2);
        break;
      case "x^y":
        this.output = Math.pow(this.num1, this.num2);
        break;
      case "sqrt(x)":
        this.output = Math.sqrt(this.num1);
        break;
    }
  }
}
