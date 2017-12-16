import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { CurrencyEffects } from './effects';

import { CurrencyRoutingModule } from './currency.routing';
import { CurrencyListComponent } from './containers/currency-list.component';
import { CurrencyItemComponent } from './components/currency-item.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CurrencyRoutingModule,
    StoreModule.forFeature('currency', reducers),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  declarations: [CurrencyListComponent, CurrencyItemComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CurrencyModule {}
