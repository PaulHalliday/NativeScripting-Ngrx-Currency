import { Currency } from '../models/currency.model';
import * as currencyActions from '../actions';

export interface State {
  loading: boolean;
  data: Currency[];
}

const initialState: State = {
  loading: false,
  data: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: '1',
      price_usd: '18482.5',
      price_btc: '1.0',
      '24h_volume_usd': '10659900000.0',
      market_cap_usd: '309489462500',
      available_supply: '16745000.0',
      total_supply: '16745000.0',
      max_supply: '21000000.0',
      percent_change_1h: '1.84',
      percent_change_24h: '2.95',
      percent_change_7d: '22.12',
      last_updated: '1513431252',
    },
  ],
};

export function reducer(
  state = initialState,
  action: currencyActions.Actions,
): State {
  switch (action.type) {
    case currencyActions.LOAD_CURRENCY: {
      return {
        loading: true,
        ...state,
      };
    }

    case currencyActions.LOAD_CURRENCY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case currencyActions.LOAD_CURRENCY_FAIL: {
      return {
        loading: false,
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrencies = (state: State) => state.data;
export const getCurrenciesLoading = (state: State) => state.loading;
