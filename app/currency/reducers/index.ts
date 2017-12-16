import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromCurrency from './currency.reducer';

export interface State {
  currency: fromCurrency.State;
}

export const reducers: ActionReducerMap<State> = {
  currency: fromCurrency.reducer,
};

export const getFeatureState = createFeatureSelector<State>('currency');

export const getCurrencyState = createSelector(
  getFeatureState,
  (state: State) => state.currency,
);

export const getAllCurrencies = createSelector(
  getCurrencyState,
  fromCurrency.getCurrencies,
);

export const getCurrenciesLoading = createSelector(
  getCurrencyState,
  fromCurrency.getCurrenciesLoading,
);
