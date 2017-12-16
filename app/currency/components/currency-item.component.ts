import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Currency } from '../models/currency.model';

@Component({
  moduleId: module.id,
  selector: 'app-currency-item',
  templateUrl: 'currency-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyItemComponent {
  @Input() currency: Currency;
}
