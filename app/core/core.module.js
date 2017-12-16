"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var currency_service_1 = require("../currency/services/currency.service");
var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. It can only be imported inside of the AppModule!");
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [currency_service_1.CurrencyService],
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [http_client_1.NativeScriptHttpClientModule],
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUt1QjtBQUV2QixnRUFBZ0Y7QUFFaEYsMEVBQXdFO0FBS3hFO0lBUUUsb0JBR0UsWUFBd0I7UUFFeEIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUNiLGdGQUFnRixDQUNqRixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7bUJBbEJVLFVBQVU7SUFDZCxrQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQztJQU5VLFVBQVU7UUFIdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsMENBQTRCLENBQUM7U0FDeEMsQ0FBQztRQVVHLFdBQUEsZUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUNHLFVBQVU7T0FYZixVQUFVLENBbUJ0QjtJQUFELGlCQUFDOztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5cbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbmN5L3NlcnZpY2VzL2N1cnJlbmN5LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtDdXJyZW5jeVNlcnZpY2VdLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlLFxuICApIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBjYW4gb25seSBiZSBpbXBvcnRlZCBpbnNpZGUgb2YgdGhlIEFwcE1vZHVsZSFgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==