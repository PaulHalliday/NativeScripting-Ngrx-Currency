import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Currency } from '../models/currency.model';

@Injectable()
export class CurrencyService {
  private ROOT_URL = `https://api.coinmarketcap.com/v1`;

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.ROOT_URL}/ticker`);
  }
}
