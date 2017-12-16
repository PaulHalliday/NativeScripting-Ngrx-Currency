"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.ROOT_URL = "https://api.coinmarketcap.com/v1";
    }
    CurrencyService.prototype.getCurrencyData = function () {
        return this.http.get(this.ROOT_URL + "/ticker");
    };
    CurrencyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CurrencyService);
    return CurrencyService;
}());
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBTWxEO0lBR0UseUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsYUFBUSxHQUFHLGtDQUFrQyxDQUFDO0lBRWYsQ0FBQztJQUV4Qyx5Q0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixJQUFJLENBQUMsUUFBUSxZQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBUFUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUllLGlCQUFVO09BSHpCLGVBQWUsQ0FRM0I7SUFBRCxzQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uL21vZGVscy9jdXJyZW5jeS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIFJPT1RfVVJMID0gYGh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL3YxYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0Q3VycmVuY3lEYXRhKCk6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1cnJlbmN5W10+KGAke3RoaXMuUk9PVF9VUkx9L3RpY2tlcmApO1xuICB9XG59XG4iXX0=