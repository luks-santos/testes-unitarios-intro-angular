import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
})
export class BankingComponent {
  
  private poupanca: number = 10;
  private carteira: number = 50;

  setSacar(value: string): number | undefined {
    const sacar = Number(value);

    if (isNaN(sacar) || this.poupanca < sacar) { 
      return;
    }

    this.poupanca -= sacar;
    return (this.carteira += sacar);
  }

  setDepositar(value: string): number | undefined {
    const depositar = Number(value);

    if (isNaN(depositar) || this.carteira < depositar) { 
      return;
    }

    this.carteira -= depositar;
    return (this.poupanca += depositar);
  }

  get getPoupanca() {
    return this.poupanca;
  }

  get getCarteira() { 
    return this.carteira;
  }
}
