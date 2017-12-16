"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var reducers_1 = require("./reducers");
var effects_2 = require("./effects");
var currency_routing_1 = require("./currency.routing");
var currency_list_component_1 = require("./containers/currency-list.component");
var currency_item_component_1 = require("./components/currency-item.component");
var CurrencyModule = (function () {
    function CurrencyModule() {
    }
    CurrencyModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                currency_routing_1.CurrencyRoutingModule,
                store_1.StoreModule.forFeature('currency', reducers_1.reducers),
                effects_1.EffectsModule.forFeature([effects_2.CurrencyEffects]),
            ],
            declarations: [currency_list_component_1.CurrencyListComponent, currency_item_component_1.CurrencyItemComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], CurrencyModule);
    return CurrencyModule;
}());
exports.CurrencyModule = CurrencyModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVuY3kubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxQ0FBMEM7QUFDMUMseUNBQThDO0FBRTlDLHVDQUFzQztBQUN0QyxxQ0FBNEM7QUFFNUMsdURBQTJEO0FBQzNELGdGQUE2RTtBQUM3RSxnRkFBNkU7QUFZN0U7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFWMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsd0NBQXFCO2dCQUNyQixtQkFBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsbUJBQVEsQ0FBQztnQkFDNUMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyx5QkFBZSxDQUFDLENBQUM7YUFDNUM7WUFDRCxZQUFZLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSwrQ0FBcUIsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IEN1cnJlbmN5RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cyc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vY3VycmVuY3kucm91dGluZyc7XG5pbXBvcnQgeyBDdXJyZW5jeUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lcnMvY3VycmVuY3ktbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVuY3lJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1cnJlbmN5LWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBDdXJyZW5jeVJvdXRpbmdNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnY3VycmVuY3knLCByZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtDdXJyZW5jeUVmZmVjdHNdKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VycmVuY3lMaXN0Q29tcG9uZW50LCBDdXJyZW5jeUl0ZW1Db21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5TW9kdWxlIHt9XG4iXX0=