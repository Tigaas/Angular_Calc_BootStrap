import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calc_BS';
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;

  

  onClicksum(){
    this.sum = this.num1 + this.num2;
  }
  op1(){
    this.sum = this.num1 - this.num2;
  }
  op2(){
    this.sum = this.num1 * this.num2;
  }
  op3(){
    this.sum = this.num1 / this.num2;
  }
  op4(){
     this.num1 = 0 ;
      this.num2 = 0;
      this.sum = 0;
  }
  op5(){
    this.sum = this.num1 ** this.num2
    ;
  }
}
