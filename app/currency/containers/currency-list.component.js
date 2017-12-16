"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromCurrency = require("../reducers");
var currencyActions = require("../actions");
var CurrencyListComponent = (function () {
    function CurrencyListComponent(store) {
        this.store = store;
        this.currency$ = store.select(fromCurrency.getAllCurrencies);
        this.loading$ = store.select(fromCurrency.getCurrenciesLoading);
    }
    CurrencyListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new currencyActions.LoadCurrency());
    };
    CurrencyListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-currency-list',
            templateUrl: 'currency-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], CurrencyListComponent);
    return CurrencyListComponent;
}());
exports.CurrencyListComponent = CurrencyListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW5jeS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxxQ0FBb0M7QUFJcEMsMENBQTRDO0FBQzVDLDRDQUE4QztBQVE5QztJQUlFLCtCQUFvQixLQUFnQztRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBWFUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBSzJCLGFBQUs7T0FKckIscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uL21vZGVscy9jdXJyZW5jeS5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGZyb21DdXJyZW5jeSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgKiBhcyBjdXJyZW5jeUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jdXJyZW5jeS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdjdXJyZW5jeS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGN1cnJlbmN5JDogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbUN1cnJlbmN5LlN0YXRlPikge1xuICAgIHRoaXMuY3VycmVuY3kkID0gc3RvcmUuc2VsZWN0KGZyb21DdXJyZW5jeS5nZXRBbGxDdXJyZW5jaWVzKTtcbiAgICB0aGlzLmxvYWRpbmckID0gc3RvcmUuc2VsZWN0KGZyb21DdXJyZW5jeS5nZXRDdXJyZW5jaWVzTG9hZGluZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBjdXJyZW5jeUFjdGlvbnMuTG9hZEN1cnJlbmN5KCkpO1xuICB9XG59XG4iXX0=