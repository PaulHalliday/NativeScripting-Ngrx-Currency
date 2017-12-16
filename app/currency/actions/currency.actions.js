"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_CURRENCY = '[Currency] Load Currency';
exports.LOAD_CURRENCY_FAIL = '[Currency] Load Currency Failure';
exports.LOAD_CURRENCY_SUCCESS = '[Currency] Load Currency Success';
var LoadCurrency = (function () {
    function LoadCurrency() {
        this.type = exports.LOAD_CURRENCY;
    }
    return LoadCurrency;
}());
exports.LoadCurrency = LoadCurrency;
var LoadCurrencyFail = (function () {
    function LoadCurrencyFail(payload) {
        this.payload = payload;
        this.type = exports.LOAD_CURRENCY_FAIL;
    }
    return LoadCurrencyFail;
}());
exports.LoadCurrencyFail = LoadCurrencyFail;
var LoadCurrencySuccess = (function () {
    function LoadCurrencySuccess(payload) {
        this.payload = payload;
        this.type = exports.LOAD_CURRENCY_SUCCESS;
    }
    return LoadCurrencySuccess;
}());
exports.LoadCurrencySuccess = LoadCurrencySuccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHYSxRQUFBLGFBQWEsR0FBRywwQkFBMEIsQ0FBQztBQUMzQyxRQUFBLGtCQUFrQixHQUFHLGtDQUFrQyxDQUFDO0FBQ3hELFFBQUEscUJBQXFCLEdBQUcsa0NBQWtDLENBQUM7QUFFeEU7SUFBQTtRQUNXLFNBQUksR0FBRyxxQkFBYSxDQUFDO0lBQ2hDLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0NBQVk7QUFJekI7SUFHRSwwQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFGdEIsU0FBSSxHQUFHLDBCQUFrQixDQUFDO0lBRUQsQ0FBQztJQUNyQyx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksNENBQWdCO0FBTTdCO0lBR0UsNkJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLDZCQUFxQixDQUFDO0lBRUcsQ0FBQztJQUM1QywwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi9tb2RlbHMvY3VycmVuY3kubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DVVJSRU5DWSA9ICdbQ3VycmVuY3ldIExvYWQgQ3VycmVuY3knO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VSUkVOQ1lfRkFJTCA9ICdbQ3VycmVuY3ldIExvYWQgQ3VycmVuY3kgRmFpbHVyZSc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVJSRU5DWV9TVUNDRVNTID0gJ1tDdXJyZW5jeV0gTG9hZCBDdXJyZW5jeSBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDdXJyZW5jeSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVUlJFTkNZO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1cnJlbmN5RmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVUlJFTkNZX0ZBSUw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDdXJyZW5jeVN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVJSRU5DWV9TVUNDRVNTO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDdXJyZW5jeVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gTG9hZEN1cnJlbmN5IHwgTG9hZEN1cnJlbmN5RmFpbCB8IExvYWRDdXJyZW5jeVN1Y2Nlc3M7XG4iXX0=