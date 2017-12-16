import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../models/currency.model';

import * as fromCurrency from '../reducers';
import * as currencyActions from '../actions';

@Component({
  moduleId: module.id,
  selector: 'app-currency-list',
  templateUrl: 'currency-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent implements OnInit {
  currency$: Observable<Currency[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromCurrency.State>) {
    this.currency$ = store.select(fromCurrency.getAllCurrencies);
    this.loading$ = store.select(fromCurrency.getCurrenciesLoading);
  }

  ngOnInit() {
    this.store.dispatch(new currencyActions.LoadCurrency());
  }
}
