import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { CurrencyService } from '../currency/services/currency.service';

@NgModule({
  imports: [NativeScriptHttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [CurrencyService],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. It can only be imported inside of the AppModule!`,
      );
    }
  }
}
