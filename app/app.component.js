"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var currency_service_1 = require("./currency/services/currency.service");
var AppComponent = (function () {
    function AppComponent(currencyService) {
        this.currencyService = currencyService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currencies$ = this.currencyService.getCurrencyData();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html',
        }),
        __metadata("design:paramtypes", [currency_service_1.CurrencyService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQseUVBQXVFO0FBT3ZFO0lBR0Usc0JBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBUFUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDO3lDQUlxQyxrQ0FBZTtPQUh6QyxZQUFZLENBUXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi9jdXJyZW5jeS9zZXJ2aWNlcy9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeS9tb2RlbHMvY3VycmVuY3kubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW5jaWVzJCA9IHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEN1cnJlbmN5RGF0YSgpO1xuICB9XG59XG4iXX0=