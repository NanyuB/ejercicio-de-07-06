import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  radio;
  num: number = 0;

  decrement(dcr: number): void {
    this.num -= dcr;
  }
  multiply(mul: number): void {
    this.num *= mul;
  }
  suma(sum: number): void {
    this.num += sum;
  }
  divir(dv: number): void {
    this.num /= dv;
  }
  cuadrado(): void {
    this.num *= this.num;
  }
  cubo(): void {
    this.num *= this.num *= this.num;
  }
  raiz(): void {
    this.num = Math.sqrt(this.num);
  }
}
