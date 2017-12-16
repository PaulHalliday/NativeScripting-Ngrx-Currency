import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CurrencyListComponent } from './containers/currency-list.component';

const routes: Routes = [{ path: '', component: CurrencyListComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CurrencyRoutingModule {}
