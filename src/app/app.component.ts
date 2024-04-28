import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankingComponent } from './shared/banking/banking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BankingComponent],
  template: `<app-banking />`
})
export class AppComponent {
  title = 'testes-unitarios-intro-angular';
}
