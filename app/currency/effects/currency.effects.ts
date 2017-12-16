import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

import * as currencyActions from '../actions';
import { CurrencyService } from '../services/currency.service';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
  ) {}

  @Effect()
  loadCurrencies = this.actions$
    .ofType(currencyActions.LOAD_CURRENCY)
    .pipe(
      switchMap(() => this.currencyService.getCurrencyData()),
      map(currencies => new currencyActions.LoadCurrencySuccess(currencies)),
      catchError(error => of(new currencyActions.LoadCurrencyFail(error))),
    );
}
