"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/Observable/of");
var currencyActions = require("../actions");
var currency_service_1 = require("../services/currency.service");
var CurrencyEffects = (function () {
    function CurrencyEffects(actions$, currencyService) {
        var _this = this;
        this.actions$ = actions$;
        this.currencyService = currencyService;
        this.loadCurrencies = this.actions$
            .ofType(currencyActions.LOAD_CURRENCY)
            .pipe(operators_1.switchMap(function () { return _this.currencyService.getCurrencyData(); }), operators_1.map(function (currencies) { return new currencyActions.LoadCurrencySuccess(currencies); }), operators_1.catchError(function (error) { return of_1.of(new currencyActions.LoadCurrencyFail(error)); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CurrencyEffects.prototype, "loadCurrencies", void 0);
    CurrencyEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            currency_service_1.CurrencyService])
    ], CurrencyEffects);
    return CurrencyEffects;
}());
exports.CurrencyEffects = CurrencyEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBQ2hELDRDQUE0RDtBQUM1RCx5Q0FBd0M7QUFFeEMsNENBQThDO0FBQzlDLGlFQUErRDtBQUcvRDtJQUNFLHlCQUNVLFFBQWlCLEVBQ2pCLGVBQWdDO1FBRjFDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFJMUMsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTthQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQzthQUNyQyxJQUFJLENBQ0gscUJBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBdEMsQ0FBc0MsQ0FBQyxFQUN2RCxlQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxFQUN0RSxzQkFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBRSxDQUFDLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FDckUsQ0FBQztJQVRELENBQUM7SUFHSjtRQURDLGdCQUFNLEVBQUU7OzJEQU9MO0lBYk8sZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUdTLGlCQUFPO1lBQ0Esa0NBQWU7T0FIL0IsZUFBZSxDQWMzQjtJQUFELHNCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzL09ic2VydmFibGUvb2YnO1xuXG5pbXBvcnQgKiBhcyBjdXJyZW5jeUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jdXJyZW5jeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5RWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VycmVuY2llcyA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKGN1cnJlbmN5QWN0aW9ucy5MT0FEX0NVUlJFTkNZKVxuICAgIC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEN1cnJlbmN5RGF0YSgpKSxcbiAgICAgIG1hcChjdXJyZW5jaWVzID0+IG5ldyBjdXJyZW5jeUFjdGlvbnMuTG9hZEN1cnJlbmN5U3VjY2VzcyhjdXJyZW5jaWVzKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBjdXJyZW5jeUFjdGlvbnMuTG9hZEN1cnJlbmN5RmFpbChlcnJvcikpKSxcbiAgICApO1xufVxuIl19