import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CurrencyService } from './currency/services/currency.service';
import { Currency } from './currency/models/currency.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  currencies$: Observable<Currency[]>;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencies$ = this.currencyService.getCurrencyData();
  }
}
