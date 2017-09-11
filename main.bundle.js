webpackJsonp([0,5],Array(20).concat([
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_base_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageRfidService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageRfidService = (function (_super) {
    __extends(ManageRfidService, _super);
    function ManageRfidService(_http, configService, _manageStoreservice) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._manageStoreservice = _manageStoreservice;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this._applicationUserId = "";
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        _this._options = configService.getRequestOptions();
        _this._applicationUserId = configService.getApplicationUserID();
        return _this;
    }
    //http
    ManageRfidService.prototype.JoinDevicetoAnagrafica = function (device) {
        return this._http.post(this.baseUrl + "/RfidDevice/JoinDeviseToAnagrafica", JSON.stringify(device), this._options);
    };
    ManageRfidService.prototype.createRfid = function (anagraficaRfidDeviceModel) {
        anagraficaRfidDeviceModel.device.ApplicationUserID = this._applicationUserId;
        return this._http.post(this.baseUrl + "/RfidDevice/create", JSON.stringify(anagraficaRfidDeviceModel), this._options);
    };
    ManageRfidService.prototype.getRfidByCode = function () {
        return this._http.get(this.baseUrl + '/RfidDevice/code/' + this.rfid.RfidDeviceCode, this._options);
    };
    ManageRfidService.prototype.paidAction = function (paidModel) {
        paidModel.StoreId = this._manageStoreservice.GetlocalStoreid();
        paidModel.OperatorID = this._manageStoreservice.GetStoreOperatorID();
        return this._http.post(this.baseUrl + '/RfidDevice/paidByDevice', JSON.stringify(paidModel), this._options);
    };
    ManageRfidService.prototype.getAllTransactionsToPaydOff = function (rfidCode) {
        var paidModel = new __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__["a" /* PaidModel */]();
        paidModel.RfidCode = rfidCode;
        paidModel.Price = 0;
        paidModel.Descrizione = "";
        paidModel.StoreId = this._manageStoreservice.GetlocalStoreid();
        paidModel.OperatorID = this._manageStoreservice.GetStoreOperatorID();
        paidModel.StoreId = this._manageStoreservice.GetlocalStoreid();
        return this._http.post(this.baseUrl + '/RfidDevice/getAllTransactionsToPaydOff', JSON.stringify(paidModel), this._options);
    };
    ManageRfidService.prototype.getUserDetailByEmail = function (email) {
        return this._http.get(this.baseUrl + '/RfidDevice/userdetailbymail/' + email, this._options);
    };
    ManageRfidService.prototype.getUserDetailByRfidCode = function (code) {
        return this._http.get(this.baseUrl + '/RfidDevice/userdetailbyrfidcode/' + code, this._options);
    };
    // esetRfid : dissassOcia il disposistivo dall'utente
    ManageRfidService.prototype.paidTotalReset = function (paidModel) {
        paidModel.Descrizione = "";
        paidModel.StoreId = this._manageStoreservice.GetlocalStoreid();
        paidModel.OperatorID = this._manageStoreservice.GetStoreOperatorID();
        paidModel.StoreId = this._manageStoreservice.GetlocalStoreid();
        console.log(paidModel);
        return this._http.post(this.baseUrl + '/RfidDevice/paidTotalReset', JSON.stringify(paidModel), this._options);
    };
    // paga il totale  Per anagrafica
    // 
    ManageRfidService.prototype.totalPaid = function (email) {
        return this._http.post(this.baseUrl + '/paidTotal/' + email, this._options);
    };
    // get mail likes 
    ManageRfidService.prototype.getMailLikes = function (email) {
        var storeid = this._manageStoreservice.GetlocalStoreid();
        console.log(this.baseUrl + '/Anagrafica/emailLikes/' + storeid + '/' + email);
        return this._http.get(this.baseUrl + '/Anagrafica/emailLikes/' + storeid + '/' + email, this._options);
    };
    ManageRfidService.prototype.getDevicesByApplicationUser = function () {
        return this._http.get(this.baseUrl + '/RfidDevice/GetByApplicationUser/', this._options);
    };
    ManageRfidService.prototype.getStoreDevices = function () {
        var storeid = this._manageStoreservice.GetlocalStoreid();
        return this._http.get(this.baseUrl + '/Store/GetStoreDevices/' + storeid, this._options);
    };
    ManageRfidService.prototype.getDeviceHistory = function (deviceCode) {
        return this._http.get(this.baseUrl + '/RfidDevice/getDeviceHistory/' + deviceCode, this._options);
    };
    return ManageRfidService;
}(__WEBPACK_IMPORTED_MODULE_4__shared_services_base_service__["a" /* BaseService */]));
ManageRfidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _c || Object])
], ManageRfidService);

var _a, _b, _c;
//# sourceMappingURL=manage-rfid.service.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_models__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(_router) {
        this._router = _router;
        this.notificationmodel = new __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_models__["a" /* NotificationModel */]();
    }
    NotificationService.prototype.CreateNotification = function () {
        this._router.navigate(['/notification',
            this.notificationmodel.notificationType,
            this.notificationmodel.notificationMessage]);
    };
    NotificationService.prototype.setSucess = function () {
        this.notificationmodel.notificationType = __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_models__["b" /* NotificationType */].success;
    };
    NotificationService.prototype.setError = function () {
        this.notificationmodel.notificationType = __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_models__["b" /* NotificationType */].error;
    };
    NotificationService.prototype.setMessage = function (message) {
        this.notificationmodel.notificationMessage = message;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService, _router) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this._router = _router;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, role) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, role: role });
        return this.http.post(this.baseUrl + "/accounts/register", body, this.configService.getRequestOptions())
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (email, firstName, lastName, role) {
        var body = JSON.stringify({ email: email, firstName: firstName, lastName: lastName, role: role });
        return this.http.post(this.baseUrl + "/accounts/updateUser", body, this.configService.getRequestOptions())
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ userName: userName, password: password }), this.configService.getRequestOptions())
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('userMail', res.userMail);
            localStorage.setItem('Rfid_AppliactionUserID', res.Rfid_AppliactionUserID);
            localStorage.setItem('auth_token', res.auth_token);
            localStorage.setItem('userRoles', res.userRoles);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('userMail');
        localStorage.removeItem('Rfid_AppliactionUserID');
        localStorage.removeItem('userRoles');
        if (localStorage.getItem('store_id'))
            localStorage.removeItem('store_id');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
        this._router.navigate(['/login']);
        return false;
    };
    UserService.prototype.createOperator = function (operatorModel) {
        operatorModel.storeId = +localStorage.getItem('store_id');
        return this.http.post(this.configService.getApiURI() + '/accounts/createOperator', JSON.stringify(operatorModel), this.configService.getRequestOptions());
        // id of 
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl + '/accounts/allusers', this.configService.getRequestOptions());
        // .map((res:ApplicationUserVM[])=>res.json())
    };
    UserService.prototype.getUsersDetail = function (email) {
        return this.http.get(this.baseUrl + '/accounts/userDetail/' + email, this.configService.getRequestOptions())
            .map(function (res) { return res.json(); });
        // .map((res:ApplicationUserVM[])=>res.json())
    };
    UserService.prototype.DeleteUser = function (email) {
        return this.http.post(this.baseUrl + '/accounts/DeleteUser', JSON.stringify(email), this.configService.getRequestOptions());
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.getAvailableRoles = function () {
        var allroles = ["Default", "Administrator", "StoreAdministrator", "StoreOperator"];
        if (this.isAdministrator)
            return allroles = allroles.filter(function (i) { return i != "StoreOperator"; });
        else if (this.isStoreAdministrator)
            return allroles = allroles.filter(function (i) { return i != "Administrator" && i != "Default"; });
        else
            return [];
    };
    UserService.prototype.isAdministrator = function () {
        return this.haveUserRole(["Administrator"]);
    };
    UserService.prototype.isStoreAdministrator = function () {
        return this.haveUserRole(["StoreAdministrator"]);
    };
    UserService.prototype.isStoreOperator = function () {
        return this.haveUserRole(["StoreOperator"]);
    };
    UserService.prototype.isDefaultuser = function () {
        return this.haveUserRole(["Default"]);
    };
    UserService.prototype.CurrentUserEmail = function () {
        if (localStorage.getItem('userMail')) {
            return localStorage.getItem('userMail');
        }
        else {
            return 'non definito';
        }
    };
    UserService.prototype.haveUserRole = function (roles) {
        var result;
        result = false;
        if (!localStorage.getItem('userRoles')) {
            result = false;
            return result;
        }
        var uresRoles = localStorage.getItem('userRoles').split(',');
        roles.slice().forEach(function (item) {
            if (uresRoles.indexOf(item) > -1) {
                result = true;
            } // esiste
        });
        return result;
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Anagrafica; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RfidDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaidModel; });
/* unused harmony export RfidDeviceTransaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserDetailViewModel; });
/* unused harmony export AnagraficaRfidDeviceModel */
var Anagrafica = (function () {
    function Anagrafica() {
    }
    return Anagrafica;
}());

var RfidDevice = (function () {
    function RfidDevice() {
    }
    return RfidDevice;
}());

var PaidModel = (function () {
    function PaidModel() {
    }
    return PaidModel;
}());

var RfidDeviceTransaction = (function () {
    function RfidDeviceTransaction() {
    }
    return RfidDeviceTransaction;
}());

var UserDetailViewModel = (function () {
    function UserDetailViewModel() {
    }
    return UserDetailViewModel;
}());

var AnagraficaRfidDeviceModel = (function () {
    function AnagraficaRfidDeviceModel() {
    }
    return AnagraficaRfidDeviceModel;
}());

//# sourceMappingURL=manage-refid.models.js.map

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStoreService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageStoreService = (function (_super) {
    __extends(ManageStoreService, _super);
    function ManageStoreService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        return _this;
    }
    ManageStoreService.prototype.CreateStore = function (storemodel) {
        if (localStorage.getItem("Rfid_AppliactionUserID")) {
            storemodel.AdministratorID = localStorage.getItem("Rfid_AppliactionUserID");
            return this.http.
                post(this.configService.getApiURI() + "/Store/create", JSON.stringify(storemodel), this.configService.getRequestOptions())
                .map(function (res) { return res.json(); });
        }
    };
    ManageStoreService.prototype.GetStoreDetails = function () {
        return this.http.
            post(this.configService.getApiURI() + "/Store/GetStoreDetails", JSON.stringify(this.GetlocalStoreid()), this.configService.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    ManageStoreService.prototype.GetStoreOperators = function () {
        return this.http.
            post(this.configService.getApiURI() + "/Store/GetOperators", JSON.stringify(this.GetlocalStoreid()), this.configService.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    ManageStoreService.prototype.GetStoreID = function (email) {
        return this.http.
            post(this.configService.getApiURI() + "/Store/GetStoreID", JSON.stringify(email), this.configService.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    ManageStoreService.prototype.HasID = function () {
        if (!localStorage.getItem('store_id')) {
            return false;
        }
        else {
            return true;
        }
    };
    ManageStoreService.prototype.SetStoreID = function (id) {
        localStorage.setItem("store_id", id);
    };
    ManageStoreService.prototype.GetlocalStoreid = function () {
        return +localStorage.getItem("store_id");
    };
    ManageStoreService.prototype.GetStoreOperatorID = function () {
        return localStorage.getItem("Rfid_AppliactionUserID");
    };
    return ManageStoreService;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__["a" /* BaseService */]));
ManageStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], ManageStoreService);

var _a, _b;
//# sourceMappingURL=manage-store.service.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService() {
        //this._apiURI = 'http://localhost:5000/api';
        this._apiURI = 'http://rfiddeviceapi.azurewebsites.net/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService.prototype.getRequestOptions = function () {
        var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]({ 'Content-Type': 'application/json' }); // old Accept 
        if (localStorage.getItem('auth_token')) {
            var authToken = localStorage.getItem('auth_token');
            _headers.append('Authorization', "Bearer " + authToken);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: _headers });
        return options;
    };
    ConfigService.prototype.getApplicationUserID = function () {
        if (localStorage.getItem('Rfid_AppliactionUserID')) {
            return localStorage.getItem('Rfid_AppliactionUserID');
        }
        return "";
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        console.log('Server Error ' + serverError);
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreGuard = (function () {
    function StoreGuard(router, storeService) {
        this.router = router;
        this.storeService = storeService;
    }
    StoreGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (!localStorage.getItem("store_id")) {
            var id = localStorage.getItem("Rfid_AppliactionUserID");
            this.storeService.GetStoreID(id)
                .subscribe(function (res) {
                localStorage.setItem("store_id", res.store_id);
                console.log(res);
                return true;
            }, function (err) {
                _this.router.navigate(["/manage-store/create"]);
                return false;
            });
            // console.log("canActivate false");
            this.router.navigate(["/manage-store/create"]);
            return false;
        }
        else {
            return true;
        }
    };
    return StoreGuard;
}());
StoreGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _b || Object])
], StoreGuard);

var _a, _b;
//# sourceMappingURL=store.guard.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_shorten__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_focus_directive__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_notification_notification_module__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_notification_notification_module__["a" /* NotificationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_shorten__["a" /* ShortenPipe */],
            __WEBPACK_IMPORTED_MODULE_3__directives_focus_directive__["a" /* myFocus */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_component__["a" /* SpinnerComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_component__["a" /* SpinnerComponent */]],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_account_account_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_account_change_password_change_password_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_account_account_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_routing_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_account_registration_form_registration_form_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__account_routing_module__["a" /* AccountRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_account_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_account_account_service__["a" /* AccountService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_8_app_account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */]]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user_registration_interface__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router, _notificationService, route, fb, _location) {
        this.userService = userService;
        this.router = router;
        this._notificationService = _notificationService;
        this.route = route;
        this.fb = fb;
        this._location = _location;
        this.submitted = false;
        this.isAdministrator = false;
        this.EditMode = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userRegistration = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_registration_interface__["a" /* UserRegistration */]();
        this.initForm();
        this.isAdministrator = this.userService.isAdministrator();
        this.optionsRoles = this.userService.getAvailableRoles();
        this.route.params
            .subscribe(function (params) {
            console.log("Params");
            console.log(params);
            _this.EditMode = params['email'] != null;
            console.log(params['email']);
            console.log(_this.EditMode);
            if (_this.EditMode) {
                _this.isRequesting = true;
                _this.userService.getUsersDetail(params['email'])
                    .finally(function () {
                    _this.isRequesting = false;
                })
                    .subscribe(function (res) {
                    console.log(res);
                    _this._userRegistration = res;
                    console.log(_this._userRegistration);
                    _this.initForm();
                }, function (err) {
                    console.log(err);
                    _this.errors = "Errore durante il caricamento, Riprovare!";
                });
            }
        });
    };
    RegistrationFormComponent.prototype.initForm = function () {
        this.RegistrationForm = this.fb.group({
            'firstname': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormControl */](this._userRegistration.FirstName),
            'lastname': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormControl */](this._userRegistration.LastName),
            'email': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormControl */](this._userRegistration.Email),
            'password': '',
            'role': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormControl */](this._userRegistration.Role)
        });
    };
    RegistrationFormComponent.prototype.registerUser = function () {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        var role = "Default";
        var userRegistration = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_registration_interface__["a" /* UserRegistration */]();
        if (this.userService.isAdministrator()) {
            role = this.RegistrationForm.get('role').value;
            console.log(role);
        }
        else if (this.userService.isStoreAdministrator())
            role = "StoreOperator";
        if (this.RegistrationForm.valid) {
            userRegistration.FirstName = this.RegistrationForm.get('firstname').value;
            userRegistration.LastName = this.RegistrationForm.get('lastname').value;
            userRegistration.Email = this.RegistrationForm.get('email').value;
            userRegistration.Password = this.RegistrationForm.get('password').value;
            userRegistration.Role = role;
            if (this.EditMode) {
                this.updateUser(userRegistration);
            }
            else {
                this.createNewUser(userRegistration);
            }
        }
    };
    RegistrationFormComponent.prototype.createNewUser = function (value) {
        var _this = this;
        this.userService.register(value.Email, value.Password, value.FirstName, value.LastName, value.Role)
            .finally(function () {
            _this.isRequesting = false;
            _this._notificationService.CreateNotification();
        })
            .subscribe(function (result) {
            if (result) {
                _this._notificationService.setSucess();
                _this._notificationService.setMessage("Operazione è andata a buon fine");
                _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.Email } });
            }
        }, function (errors) {
            _this.errors = errors;
        });
    };
    RegistrationFormComponent.prototype.updateUser = function (value) {
        var _this = this;
        this.userService.updateUser(value.Email, value.FirstName, value.LastName, value.Role)
            .finally(function () {
            _this.isRequesting = false;
            _this._notificationService.CreateNotification();
        })
            .subscribe(function (result) {
            if (result) {
                _this._notificationService.setSucess();
                _this._notificationService.setMessage("Operazione è andata a buon fine");
                _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.Email } });
            }
        }, function (errors) {
            _this.errors = errors;
        });
    };
    RegistrationFormComponent.prototype.goBack = function () {
        this._location.back();
    };
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration-form',
        template: __webpack_require__(361),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _f || Object])
], RegistrationFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesService = (function () {
    function DevicesService(_manageRfidDevicesSeriveices) {
        this._manageRfidDevicesSeriveices = _manageRfidDevicesSeriveices;
    }
    DevicesService.prototype.getDevices = function () {
        return this._manageRfidDevicesSeriveices.getStoreDevices();
    };
    return DevicesService;
}());
DevicesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _a || Object])
], DevicesService);

var _a;
//# sourceMappingURL=devices.service.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationType; });
var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["success"] = 1] = "success";
    NotificationType[NotificationType["info"] = 2] = "info";
    NotificationType[NotificationType["error"] = 3] = "error";
})(NotificationType || (NotificationType = {}));
//# sourceMappingURL=notification.models.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this._userService.isLoggedIn())
            return true;
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guards.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoleGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthRoleGuard = (function () {
    function AuthRoleGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AuthRoleGuard.prototype.canActivate = function (route, state) {
        var roles = route.data["roles"];
        if (this._userService.haveUserRole(roles))
            return true;
        this._router.navigate(['/login']);
        return false;
    };
    return AuthRoleGuard;
}());
AuthRoleGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthRoleGuard);

var _a, _b;
//# sourceMappingURL=auth.role.guard.js.map

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(357),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationUserVM; });
var ChangePassword = (function () {
    function ChangePassword() {
    }
    ChangePassword.prototype.clear = function () {
        this.newPassword = '';
        this.oldPassword = '';
    };
    return ChangePassword;
}());

var ApplicationUserVM = (function () {
    function ApplicationUserVM() {
    }
    return ApplicationUserVM;
}());

//# sourceMappingURL=account.models.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_utils_config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function (_super) {
    __extends(AccountService, _super);
    function AccountService(_http, _conf) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._conf = _conf;
        return _this;
    }
    AccountService.prototype.changePassword = function (changePassword) {
        console.log(JSON.stringify(changePassword));
        return this._http
            .post(this._conf.getApiURI() + '/Accounts/ChangePassword', JSON.stringify(changePassword), this._conf.getRequestOptions());
    };
    return AccountService;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__["a" /* BaseService */]));
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], AccountService);

var _a, _b;
//# sourceMappingURL=account.service.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_account_account_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_account_account_models__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_notification_notification_models__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(fb, _accountService, _notificationSevice, _router) {
        this.fb = fb;
        this._accountService = _accountService;
        this._notificationSevice = _notificationSevice;
        this._router = _router;
        this.isRequesting = false;
        this.errorMessage = '';
        this.nm = new __WEBPACK_IMPORTED_MODULE_6_app_shared_notification_notification_models__["a" /* NotificationModel */]();
        this.changPasswordModel = new __WEBPACK_IMPORTED_MODULE_3_app_account_account_models__["b" /* ChangePassword */]();
        this.initForm();
    }
    ;
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.change = function () {
        var _this = this;
        this.isRequesting = true;
        this.changPasswordModel.clear();
        this.errorMessage = '';
        this.changPasswordModel.newPassword = this.ChangePasswordForm.get('newPassword').value;
        this.changPasswordModel.oldPassword = this.ChangePasswordForm.get('oldPassword').value;
        this._accountService.changePassword(this.changPasswordModel)
            .finally(function () { return _this.isRequesting = false; })
            .subscribe(function (res) {
            ///fare redirect errore generico 
            _this._notificationSevice.setSucess();
            _this._notificationSevice.setMessage("Cambio Password è andata a buon fine");
            _this._notificationSevice.CreateNotification();
        }, function (err) {
            if (err.status == 400) {
                if (err._body == '2') {
                    _this.errorMessage = "La password non è valida";
                }
                else {
                    ///fare redirect errore generico 
                    _this._notificationSevice.setError();
                    _this._notificationSevice.setMessage("si sono verificati dei errori");
                    _this._notificationSevice.CreateNotification();
                }
            }
        });
    };
    ChangePasswordComponent.prototype.initForm = function () {
        this.ChangePasswordForm = this.fb.group({
            'oldPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'newPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'rpPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        }, {
            validator: this.repeatePasswordValidator
        });
    };
    ChangePasswordComponent.prototype.repeatePasswordValidator = function (AC) {
        var newPassword = AC.get('newPassword').value;
        var rpPassword = AC.get('rpPassword').value;
        if (newPassword != rpPassword) {
            AC.get('rpPassword').setErrors({ 'MatchPassword': true });
        }
        else {
            return null;
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(358),
        styles: [__webpack_require__(306)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_account_account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-password.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute, fb) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event 
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
        this.initForm();
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent.prototype.initForm = function () {
        this.LoginForm = this.fb.group({
            "email": ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            "password": ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
        });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(359),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], LoginFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login-form.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(360),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmUserComponent = (function () {
    function AdmUserComponent() {
    }
    AdmUserComponent.prototype.ngOnInit = function () {
    };
    return AdmUserComponent;
}());
AdmUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adm-user',
        template: __webpack_require__(362),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [])
], AdmUserComponent);

//# sourceMappingURL=adm-user.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminMainComponent = (function () {
    function AdminMainComponent() {
    }
    AdminMainComponent.prototype.ngOnInit = function () {
    };
    return AdminMainComponent;
}());
AdminMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-main',
        template: __webpack_require__(363),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [])
], AdminMainComponent);

//# sourceMappingURL=admin-main.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdministrationComponent = (function () {
    function AdministrationComponent() {
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    return AdministrationComponent;
}());
AdministrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-administration',
        template: __webpack_require__(364),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [])
], AdministrationComponent);

//# sourceMappingURL=administration.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_account_account_models__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllUsersComponent = (function () {
    function AllUsersComponent(_userServices, _notification, route, router) {
        this._userServices = _userServices;
        this._notification = _notification;
        this.route = route;
        this.router = router;
        this.isRequesting = true;
        this.loadingError = false;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userServices.getAllUsers()
            .finally(function () {
            _this.isRequesting = false;
        })
            .subscribe(function (res) {
            var appUser = new __WEBPACK_IMPORTED_MODULE_2_app_account_account_models__["a" /* ApplicationUserVM */]();
            _this.applicationUsers = res.json();
            _this.loadingError = false;
        }, function (err) {
            console.log(err);
            _this.loadingError = true;
        });
    };
    AllUsersComponent.prototype.editUser = function (email) {
        this.router.navigate(['../' + email + '/edit'], { relativeTo: this.route });
    };
    AllUsersComponent.prototype.DeleteUser = function (email) {
        var _this = this;
        if (confirm("Are you sure to delete " + email)) {
            this.isRequesting = true;
            this._userServices.DeleteUser(email)
                .finally(function () {
                _this.isRequesting = false;
                _this._notification.CreateNotification();
            })
                .subscribe(function (res) {
                _this._notification.setMessage("Eliminazione è avvenuta con succeso"),
                    _this._notification.setSucess();
            }, function (err) {
                _this._notification.setMessage("l'operazioneNon è andata a buon fine. Riprovare!"),
                    _this._notification.setError();
            });
        }
    };
    return AllUsersComponent;
}());
AllUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-users',
        template: __webpack_require__(365),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], AllUsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=all-users.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(367),
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllOperatorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllOperatorsComponent = (function () {
    function AllOperatorsComponent(_manageStoreService) {
        this._manageStoreService = _manageStoreService;
        this.isRequesting = false;
        this.loadingError = false;
    }
    AllOperatorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRequesting = true;
        this._manageStoreService.GetStoreOperators()
            .finally(function () { return _this.isRequesting = false; })
            .subscribe(function (res) {
            _this.applicationUsers = res;
        }, function (err) {
            _this.loadingError = true;
        });
    };
    return AllOperatorsComponent;
}());
AllOperatorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-operators',
        template: __webpack_require__(368),
        styles: [__webpack_require__(316)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _a || Object])
], AllOperatorsComponent);

var _a;
//# sourceMappingURL=all-operators.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_operator_models__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOperatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditOperatorComponent = (function () {
    function EditOperatorComponent(fb, _userService, route) {
        this.fb = fb;
        this._userService = _userService;
        this.route = route;
    }
    EditOperatorComponent.prototype.ngOnInit = function () {
        this._operatorModel = new __WEBPACK_IMPORTED_MODULE_4__manage_operator_models__["a" /* OperatorModel */]();
        this._operatorModel.storeId;
        this.infitForm();
    };
    EditOperatorComponent.prototype.infitForm = function () {
        this.OperatorForm = this.fb.group({
            'email': [this._operatorModel.email],
            'name': [this._operatorModel.name],
            'password': [this._operatorModel.password]
        });
    };
    EditOperatorComponent.prototype.submit = function () {
        this._operatorModel.email = this.OperatorForm.value.email;
        this._operatorModel.name = this.OperatorForm.value.name;
        this._operatorModel.password = this.OperatorForm.value.password;
        console.log(this.OperatorForm);
        this._userService.createOperator(this._operatorModel).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    return EditOperatorComponent;
}());
EditOperatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-operator',
        template: __webpack_require__(369),
        styles: [__webpack_require__(317)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditOperatorComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-operator.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageOperatorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageOperatorsComponent = (function () {
    function ManageOperatorsComponent() {
    }
    ManageOperatorsComponent.prototype.ngOnInit = function () {
    };
    return ManageOperatorsComponent;
}());
ManageOperatorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-operators',
        template: __webpack_require__(370),
        styles: [__webpack_require__(318)]
    }),
    __metadata("design:paramtypes", [])
], ManageOperatorsComponent);

//# sourceMappingURL=manage-operators.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperatorComponent = (function () {
    function OperatorComponent() {
    }
    OperatorComponent.prototype.ngOnInit = function () {
    };
    return OperatorComponent;
}());
OperatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-operator',
        template: __webpack_require__(371),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [])
], OperatorComponent);

//# sourceMappingURL=operator.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperatorsMainComponent = (function () {
    function OperatorsMainComponent() {
    }
    OperatorsMainComponent.prototype.ngOnInit = function () {
    };
    return OperatorsMainComponent;
}());
OperatorsMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-operators-main',
        template: __webpack_require__(372),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [])
], OperatorsMainComponent);

//# sourceMappingURL=operators-main.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsComponent = (function () {
    function ActionsComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent.prototype.createNew = function () {
        this._router.navigate(['new'], { relativeTo: this._route });
    };
    ActionsComponent.prototype.paid = function () {
        this._router.navigate(['paid'], { relativeTo: this._route });
    };
    ActionsComponent.prototype.totalAmount = function () {
        this._router.navigate(['total'], { relativeTo: this._route });
    };
    ActionsComponent.prototype.manageUser = function () {
        this._router.navigate(['manage-user'], { relativeTo: this._route });
    };
    return ActionsComponent;
}());
ActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-actions',
        template: __webpack_require__(373),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ActionsComponent);

var _a, _b;
//# sourceMappingURL=actions.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceHistoryComponent = (function () {
    function DeviceHistoryComponent() {
    }
    DeviceHistoryComponent.prototype.ngOnInit = function () {
    };
    return DeviceHistoryComponent;
}());
DeviceHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-history',
        template: __webpack_require__(376),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [])
], DeviceHistoryComponent);

//# sourceMappingURL=device-history.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesComponent = (function () {
    function DevicesComponent(_devicesService) {
        this._devicesService = _devicesService;
        this._currentViewDevices = 'active';
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._devicesService.getDevices()
            .subscribe(function (res) {
            _this._countActive = 0;
            _this._countAll = 0;
            _this._countNotActive = 0;
            _this._totalDebit = 0;
            _this._allDevices = res.json();
            _this._countAll = _this._allDevices.length;
            _this._allDevices.forEach(function (element) {
                if (element.Active == true) {
                    _this._countActive++;
                    //calcolo il debito totale
                    _this._totalDebit += element.Credit;
                }
                else
                    _this._countNotActive++;
            });
            _this.viewActiveDevices();
        });
    };
    DevicesComponent.prototype.viewAllDevices = function () {
        this._devicesList = this._allDevices;
        this._currentViewDevices = 'all';
    };
    DevicesComponent.prototype.viewActiveDevices = function () {
        this._devicesList = this._allDevices.filter(function (item) { return item.Active == true; });
        this._currentViewDevices = 'active';
    };
    DevicesComponent.prototype.viewNotActiveDevices = function () {
        this._devicesList = this._allDevices.filter(function (item) { return item.Active == false; });
        this._currentViewDevices = 'notActive';
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__(379),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__["a" /* DevicesService */]) === "function" && _a || Object])
], DevicesComponent);

var _a;
//# sourceMappingURL=devices.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageRfidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageRfidComponent = (function () {
    function ManageRfidComponent() {
    }
    ManageRfidComponent.prototype.ngOnInit = function () {
    };
    return ManageRfidComponent;
}());
ManageRfidComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-rfid',
        template: __webpack_require__(380),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [])
], ManageRfidComponent);

//# sourceMappingURL=manage-rfid.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageUserComponent = (function () {
    function ManageUserComponent(_manageRfidService, _fb, _router, _cd) {
        this._manageRfidService = _manageRfidService;
        this._fb = _fb;
        this._router = _router;
        this._cd = _cd;
        this.userDetailModel = new __WEBPACK_IMPORTED_MODULE_4_app_shared_models_manage_refid_models__["d" /* UserDetailViewModel */]();
        this.total = 0;
        this._totalDevice = 0;
        this.rfidCodeDetail = '';
        this.rfidLogoPath = '../../assets/images/device_rfid_logo.jpg';
        this.userInfoView = false;
        this.readView = true;
        this.noDeviceUserView = false;
        this.viewRfidDetail = false;
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.ReadRfidForm = this._fb.group({
            'rfidCode': '',
            'email': ''
        });
        this.total = 0;
    };
    ManageUserComponent.prototype.getUserByDetail = function (form) {
        var email = '';
        var rfidCode = '';
        if (this.ReadRfidForm.value.email != '') {
            this.getuserDetailByEmail(this.ReadRfidForm.value.email);
        }
        else if (this.ReadRfidForm.value.rfidCode != '') {
            console.log(this.ReadRfidForm.value.rfidCode);
            this.getuserDetailByCode(this.ReadRfidForm.value.rfidCode);
        }
    };
    ManageUserComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.userDetailModel.Dispositivi.forEach(function (dis) {
            _this.total += dis.Credit;
        });
    };
    ManageUserComponent.prototype.viewDetail = function (code) {
        this.viewRfidDetail = false;
        this.rfidCodeDetail = '';
        this.rfidCodeDetail = code;
        this.viewRfidDetail = true;
    };
    ManageUserComponent.prototype.totalPaid = function () {
        this._manageRfidService.totalPaid(this.userDetailModel.Anagrafica.Email)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    // events 
    ManageUserComponent.prototype.NotificationPaidTotal = function () {
        this.getuserDetailByEmail(this.userDetailModel.Anagrafica.Email);
        this.viewRfidDetail = false;
    };
    // methods 
    // restituisce i dispositivi associati all'utente
    ManageUserComponent.prototype.getuserDetailByCode = function (code) {
        var _this = this;
        this._manageRfidService.getUserDetailByRfidCode(code)
            .subscribe(function (res) {
            _this.userDetailModel = res.json();
            _this.userInfoView = true;
            _this.readView = false;
            _this.calculateTotal();
        }, function (err) {
            _this.readView = false;
            _this.noDeviceUserView = true;
        });
    };
    ManageUserComponent.prototype.getuserDetailByEmail = function (email) {
        var _this = this;
        this._manageRfidService.getUserDetailByEmail(email)
            .subscribe(function (res) {
            _this.userDetailModel = res.json();
            _this.userInfoView = true;
            _this.readView = false;
            _this.calculateTotal();
            _this._cd.markForCheck();
        }, function (err) {
            _this.readView = false;
            _this.noDeviceUserView = true;
        });
    };
    return ManageUserComponent;
}());
ManageUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-user',
        template: __webpack_require__(381),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], ManageUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-user.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaidComponent = (function () {
    function PaidComponent(_router, _route, manageRfidService, fb, _notificationService) {
        this._router = _router;
        this._route = _route;
        this.manageRfidService = manageRfidService;
        this.fb = fb;
        this._notificationService = _notificationService;
        this._rfid = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["b" /* RfidDevice */]();
        this._paidModel = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["a" /* PaidModel */]();
        this.isProcessing = false;
    }
    PaidComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    PaidComponent.prototype.paid = function (form) {
        var _this = this;
        this._paidModel = this.PaidForm.value;
        if (form.valid) {
            /// StoreID viene settato all'interno del servizzio
            var price = this.PaidForm.get('price').value;
            var clearPrice = parseFloat(price.toString().replace(',', '.').replace(' ', ''));
            this._paidModel.RfidCode = this.PaidForm.get('rfidCode').value;
            this._paidModel.Price = clearPrice;
            this._paidModel.Descrizione = this.PaidForm.get('descrizione').value;
            this.isProcessing = true;
            this.manageRfidService.paidAction(this._paidModel)
                .finally(function () {
                _this.isProcessing = false;
                _this._notificationService.CreateNotification();
            })
                .subscribe(function (result) {
                _this._notificationService.setSucess();
                _this._notificationService.setMessage("Il pagamento è andato a buon fine");
            }, function (err) {
                _this._notificationService.setError();
                _this._notificationService.setMessage("Si sono verificati dei errori durnte il pagamento!");
                if (err._body == "NoDevice") {
                    _this._notificationService.setMessage("Il dispositivo no è stato trovato");
                    if (err._body == "NoAnagrafica")
                        _this._notificationService.setMessage("Questo Disposistivo NON è assiciato a nessun utente!!");
                }
            });
        }
    };
    PaidComponent.prototype.back = function () {
        this.clearForm();
    };
    PaidComponent.prototype.clearForm = function () {
        this.PaidForm = this.fb.group({
            "price": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            "descrizione": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            "rfidCode": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    return PaidComponent;
}());
PaidComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paid',
        template: __webpack_require__(382),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], PaidComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=paid.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_SharedModels__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RfidFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RfidFormComponent = (function () {
    function RfidFormComponent(fb, manageRfidFormService, manageStoreService, _configServices, _elemRef, _notificationservice) {
        this.fb = fb;
        this.manageRfidFormService = manageRfidFormService;
        this.manageStoreService = manageStoreService;
        this._configServices = _configServices;
        this._elemRef = _elemRef;
        this._notificationservice = _notificationservice;
        this._notificationMessage = "";
        this._notificationType = __WEBPACK_IMPORTED_MODULE_6__shared_models_SharedModels__["a" /* NotificationType */].info;
        this._rfidDevice = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["b" /* RfidDevice */]();
        this._rfidDevice.Anagrafica = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["c" /* Anagrafica */]();
    }
    RfidFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.watchEmilField();
    };
    RfidFormComponent.prototype.initForm = function () {
        this.RfidForm = this.fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this._rfidDevice.Anagrafica.Email),
            'nome': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this._rfidDevice.Anagrafica.Nome),
            'cognome': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this._rfidDevice.Anagrafica.Cognome),
            'telefono': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this._rfidDevice.Anagrafica.Telefono),
            'rfidCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this._rfidDevice.RfidDeviceCode),
        });
    };
    RfidFormComponent.prototype.loadByEmail = function (mail) {
        var _this = this;
        this._rfidDevice.Anagrafica = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["c" /* Anagrafica */]();
        this.manageRfidFormService.getUserDetailByEmail(mail)
            .subscribe(function (data) {
            _this._rfidDevice.Anagrafica = data.json().Anagrafica;
            _this.initForm();
            _this._tipsMail = [];
            _this.watchEmilField();
        });
    };
    RfidFormComponent.prototype.submit = function () {
        var _this = this;
        var storeId = this.manageStoreService.GetlocalStoreid();
        var applicationUserID = this._configServices.getApplicationUserID();
        this._rfidDevice.Anagrafica.Email = this.RfidForm.value.email;
        this._rfidDevice.Anagrafica.Nome = this.RfidForm.value.nome;
        this._rfidDevice.Anagrafica.Cognome = this.RfidForm.value.cognome;
        this._rfidDevice.Anagrafica.Telefono = this.RfidForm.value.telefono;
        this._rfidDevice.StoreID = storeId;
        this._rfidDevice.Anagrafica.ApplicationUserID = applicationUserID;
        this._rfidDevice.RfidDeviceCode = this.RfidForm.value.rfidCode;
        this._rfidDevice.ApplicationUserID = applicationUserID;
        this._rfidDevice.StoreID = storeId;
        this.manageRfidFormService.JoinDevicetoAnagrafica(this._rfidDevice)
            .finally(function () {
            _this._notificationservice.CreateNotification();
        })
            .subscribe(function (res) {
            _this._notificationservice.setMessage("Operazione e termita con successo !!!");
            _this._notificationservice.setSucess();
        }, function (err) {
            _this._notificationservice.setMessage("Operazione non è andata a buon fine !!!");
            if (err._body == "inUse")
                _this._notificationservice.setMessage("Questo disposistivo è già assegnato ad un altro utente !!!");
            _this._notificationservice.setError();
        });
    };
    RfidFormComponent.prototype.clearForm = function () {
        this.ngOnInit();
        this._rfidDevice = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["b" /* RfidDevice */]();
        this._rfidDevice.Anagrafica = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["c" /* Anagrafica */]();
        this.initForm();
    };
    RfidFormComponent.prototype.watchEmilField = function () {
        var _this = this;
        this.RfidForm.controls['email'].valueChanges
            .debounceTime(400)
            .subscribe(function (mail) {
            _this.manageRfidFormService.getMailLikes(mail)
                .subscribe(function (data) {
                _this._tipsMail = data.json();
            }, function (err) { _this._tipsMail = []; console.log(err); });
        });
        this.RfidForm.controls['rfidCode'].valueChanges
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return RfidFormComponent;
}());
RfidFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rfid-form',
        template: __webpack_require__(384),
        styles: [__webpack_require__(332)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_config_service__["a" /* ConfigService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], RfidFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=rfid-form.component.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalAmountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TotalAmountComponent = (function () {
    function TotalAmountComponent(_manageRfidService, _fb, _route, _router, _notificationService) {
        this._manageRfidService = _manageRfidService;
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._notificationService = _notificationService;
        this.readRfidView = false;
        this.TotalInfoView = false;
        this.rfidCode = "";
        this.Totale = 0;
        this.allTransactions = [];
    }
    TotalAmountComponent.prototype.ngOnInit = function () {
        var _this = this;
        // controlla i parametri 
        this._route.params
            .subscribe(function (params) {
            if (params['code'] != null) {
                _this.readRfidView = false;
                _this.getAllTransaztion(params['code']);
            }
            else {
                _this.readRfidView = true;
                _this.ReadRfidForm = _this._fb.group({
                    'rfidCode': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
                });
            }
        });
    };
    TotalAmountComponent.prototype.getTotal = function () {
        if (this.ReadRfidForm.value.rfidCode != '') {
            this.getAllTransaztion(this.ReadRfidForm.value.rfidCode);
            this.rfidCode = this.ReadRfidForm.value.rfidCode;
        }
    };
    TotalAmountComponent.prototype.paidTotalReset = function () {
        var _this = this;
        var paidModel = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_manage_refid_models__["a" /* PaidModel */]();
        paidModel.RfidCode = this.rfidCode;
        paidModel.Price = this.Totale;
        this._manageRfidService.paidTotalReset(paidModel)
            .subscribe(function (res) {
            _this._notificationService.setSucess();
            _this._notificationService.setMessage("L'operazione è andata a buon fine");
            _this._notificationService.CreateNotification();
            _this.TotalInfoView = false;
            _this.readRfidView = false;
        }, function (err) {
            _this._notificationService.setError();
            _this._notificationService.setMessage("L'operazione NON è andata a buon fine!");
            _this._notificationService.CreateNotification();
        });
    };
    TotalAmountComponent.prototype.getAllTransaztion = function (rfideCode) {
        var _this = this;
        this._manageRfidService.getAllTransactionsToPaydOff(rfideCode)
            .subscribe(function (res) {
            _this.allTransactions = res.json();
            _this.allTransactions.forEach(function (operation) {
                _this.Totale += operation.Importo;
                _this.Totale = parseFloat(_this.Totale.toFixed(2));
            });
        }, function (err) {
            // this._notificationService.setError();
            //  if (err.status == 404) {
            //  this._notificationService.setMessage("Questo disositivo non e associato a nessun utente!");
            //  }
            //  else {
            //  this._notificationService.setMessage("Si è verificato un errore!");
            //  }
            // this._notificationService.CreateNotification()
        });
        this.TotalInfoView = true;
        this.readRfidView = false;
    };
    return TotalAmountComponent;
}());
TotalAmountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-total-amount',
        template: __webpack_require__(385),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], TotalAmountComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=total-amount.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_manage_store_manage_store_models__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateStoreComponent = (function () {
    function CreateStoreComponent(_manageStoreService, notificationService, fb) {
        this._manageStoreService = _manageStoreService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.storeModel = new __WEBPACK_IMPORTED_MODULE_2_app_manage_store_manage_store_models__["a" /* StoreModel */]();
        this.isRequesting = false;
    }
    CreateStoreComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CreateStoreComponent.prototype.submit = function () {
        var _this = this;
        this.storeModel.Name = this.StoreForm.value.nome;
        this.storeModel.Telefono = this.StoreForm.value.telefono;
        this.storeModel.Address = this.StoreForm.value.address;
        this.isRequesting = true;
        // store adrministrator from localstorage called by service
        this._manageStoreService.CreateStore(this.storeModel)
            .finally(function () {
            _this.isRequesting = false;
            _this.notificationService.CreateNotification();
        })
            .subscribe(function (res) {
            _this._manageStoreService.SetStoreID(res.store_id);
            _this.notificationService.setSucess();
            _this.notificationService.setMessage("Operazione è andata a buon fine");
        }, function (err) {
            _this.notificationService.setError();
            _this.notificationService.setMessage("Operazione NON è andata a buon fine Riprovare");
        });
    };
    CreateStoreComponent.prototype.initForm = function () {
        this.StoreForm = this.fb.group({
            'nome': '',
            'telefono': '',
            'address': '',
        });
    };
    return CreateStoreComponent;
}());
CreateStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-store',
        template: __webpack_require__(387),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], CreateStoreComponent);

var _a, _b, _c;
//# sourceMappingURL=create-store.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageStoreComponent = (function () {
    function ManageStoreComponent() {
    }
    ManageStoreComponent.prototype.ngOnInit = function () {
    };
    return ManageStoreComponent;
}());
ManageStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-store',
        template: __webpack_require__(388),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [])
], ManageStoreComponent);

//# sourceMappingURL=manage-store.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreHomeComponent = (function () {
    function StoreHomeComponent(_ManageStoreService) {
        this._ManageStoreService = _ManageStoreService;
        this.operators = [];
    }
    StoreHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ManageStoreService.GetStoreDetails()
            .subscribe(function (res) {
            _this.store = res;
            res.storeUsers.forEach(function (item) {
                _this.operators.push(item.ApplicationUser);
            });
            console.log(_this.store);
            console.log(_this.operators);
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    return StoreHomeComponent;
}());
StoreHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-home',
        template: __webpack_require__(389),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__["a" /* ManageStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_manage_store_service__["a" /* ManageStoreService */]) === "function" && _a || Object])
], StoreHomeComponent);

var _a;
//# sourceMappingURL=store-home.component.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(390),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_notification_notification_models__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationComponent = (function () {
    function NotificationComponent(_notificationService, _router, _route, _location) {
        this._notificationService = _notificationService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationmodel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_notification_notification_models__["a" /* NotificationModel */]();
        this._route.params.subscribe(function (params) {
            _this.notificationmodel.notificationType = +params['type'];
            _this.notificationmodel.notificationMessage = params['message'];
        });
    };
    NotificationComponent.prototype.goBack = function () {
        this._location.back();
    };
    NotificationComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    NotificationComponent.prototype.getAlertStyle = function () {
        var style = "";
        switch (this.notificationmodel.notificationType) {
            case __WEBPACK_IMPORTED_MODULE_2_app_shared_notification_notification_models__["b" /* NotificationType */].error:
                style = "alert alert-danger";
                break;
            case __WEBPACK_IMPORTED_MODULE_2_app_shared_notification_notification_models__["b" /* NotificationType */].info:
                style = "alert alert-info";
                break;
            case __WEBPACK_IMPORTED_MODULE_2_app_shared_notification_notification_models__["b" /* NotificationType */].success:
                style = "alert alert-info";
                break;
            default:
                style = "alert alert-info";
                break;
        }
        return style;
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(391),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_notification_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], NotificationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=notification.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_notification_notification_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__notification_component__["a" /* NotificationComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_shared_notification_notification_service__["a" /* NotificationService */]]
    })
], NotificationModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(393),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [])
], StatisticsComponent);

//# sourceMappingURL=statistics.component.js.map

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 194;


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(246);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_guards__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_account_account_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_account_change_password_change_password_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_account_profile_profile_component__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var accountRoutes = [
    { path: 'account', canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_guards__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_guards__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3_app_account_account_component__["a" /* AccountComponent */] },
            { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_4_app_account_change_password_change_password_component__["a" /* ChangePasswordComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5_app_account_profile_profile_component__["a" /* ProfileComponent */] },
        ]
    },
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    return AccountRoutingModule;
}());
AccountRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(accountRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AccountRoutingModule);

//# sourceMappingURL=account-routing.module.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_auth_role_guard__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_administration_administration_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_administration_adm_user_adm_user_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_account_registration_form_registration_form_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_administration_all_users_all_users_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_administration_admin_main_admin_main_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'administration', canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_auth_role_guard__["a" /* AuthRoleGuard */]], data: { roles: ['Administrator', 'altro'] },
        component: __WEBPACK_IMPORTED_MODULE_4_app_administration_administration_component__["a" /* AdministrationComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8_app_administration_admin_main_admin_main_component__["a" /* AdminMainComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5_app_administration_adm_user_adm_user_component__["a" /* AdmUserComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7_app_administration_all_users_all_users_component__["a" /* AllUsersComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_6_app_account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
                    { path: ':email/edit', component: __WEBPACK_IMPORTED_MODULE_6_app_account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
                ] },
        ] },
];
var AdministrationRouterModule = (function () {
    function AdministrationRouterModule() {
    }
    return AdministrationRouterModule;
}());
AdministrationRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], AdministrationRouterModule);

//# sourceMappingURL=administration-router.module.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_administration_administration_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_administration_administration_router_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_account_account_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adm_user_adm_user_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_users_all_users_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_shared_module__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_main_admin_main_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdministrationModule = (function () {
    function AdministrationModule() {
    }
    return AdministrationModule;
}());
AdministrationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_administration_administration_router_module__["a" /* AdministrationRouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_account_account_module__["a" /* AccountModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_administration_administration_component__["a" /* AdministrationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__adm_user_adm_user_component__["a" /* AdmUserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__all_users_all_users_component__["a" /* AllUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_main_admin_main_component__["a" /* AdminMainComponent */],
        ]
    })
], AdministrationModule);

//# sourceMappingURL=administration.module.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_rfid_manage_rfid_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_rfid_rfid_form_rfid_form_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_rfid_paid_paid_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistics_statistics_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_rfid_actions_actions_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_rfid_total_amount_total_amount_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_rfid_manage_user_manage_user_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_registration_form_registration_form_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_login_form_login_form_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_notification_notification_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_manage_rfid_devices_devices_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_manage_rfid_device_history_device_history_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_shared_services_auth_guards__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_shared_services_store_guard__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'manage-rfid', canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_shared_services_auth_guards__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17_app_shared_services_store_guard__["a" /* StoreGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__manage_rfid_manage_rfid_component__["a" /* ManageRfidComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__manage_rfid_actions_actions_component__["a" /* ActionsComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__manage_rfid_rfid_form_rfid_form_component__["a" /* RfidFormComponent */] },
            { path: 'paid', component: __WEBPACK_IMPORTED_MODULE_4__manage_rfid_paid_paid_component__["a" /* PaidComponent */] },
            { path: 'detail/:code', component: __WEBPACK_IMPORTED_MODULE_9__manage_rfid_total_amount_total_amount_component__["a" /* TotalAmountComponent */] },
            { path: 'total', component: __WEBPACK_IMPORTED_MODULE_9__manage_rfid_total_amount_total_amount_component__["a" /* TotalAmountComponent */] },
            { path: 'manage-user', component: __WEBPACK_IMPORTED_MODULE_10__manage_rfid_manage_user_manage_user_component__["a" /* ManageUserComponent */] },
            { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_14_app_manage_rfid_devices_devices_component__["a" /* DevicesComponent */] },
            { path: 'device-history', component: __WEBPACK_IMPORTED_MODULE_15_app_manage_rfid_device_history_device_history_component__["a" /* DeviceHistoryComponent */] }
        ] },
    { path: 'notification/:type/:message', component: __WEBPACK_IMPORTED_MODULE_13__shared_notification_notification_component__["a" /* NotificationComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_6__statistics_statistics_component__["a" /* StatisticsComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__account_login_form_login_form_component__["a" /* LoginFormComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(366),
        styles: [__webpack_require__(314)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistics_statistics_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_rfid_manage_rfid_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_rfid_rfid_form_rfid_form_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_rfid_paid_paid_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_rfid_actions_actions_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_rfid_manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manage_rfid_total_amount_total_amount_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_rfid_manage_user_manage_user_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manage_rfid_user_info_user_info_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_rfid_rfid_detail_rfid_detail_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_login_form_login_form_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_email_validator_directive__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_utils_config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_authenticate_xhr_backend__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_directives_device_code_input_directive__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_manage_rfid_devices_devices_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_manage_rfid_device_history_device_history_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_administration_administration_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_shared_services_auth_guards__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_shared_services_auth_role_guard__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_shared_directives_dropdown_directive__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_account_account_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_shared_notification_notification_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_shared_module__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_manage_store_manage_store_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_manage_operators_manage_operators_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_app_template_template_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_shared_services_store_guard__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__statistics_statistics_component__["a" /* StatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manage_rfid_manage_rfid_component__["a" /* ManageRfidComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manage_rfid_rfid_form_rfid_form_component__["a" /* RfidFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__manage_rfid_paid_paid_component__["a" /* PaidComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__manage_rfid_actions_actions_component__["a" /* ActionsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__manage_rfid_total_amount_total_amount_component__["a" /* TotalAmountComponent */],
            __WEBPACK_IMPORTED_MODULE_15__manage_rfid_manage_user_manage_user_component__["a" /* ManageUserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__manage_rfid_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__manage_rfid_rfid_detail_rfid_detail_component__["a" /* RfidDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_19__directives_email_validator_directive__["a" /* EmailValidator */],
            __WEBPACK_IMPORTED_MODULE_18__account_login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shared_directives_device_code_input_directive__["a" /* DeviceCodeInputDirective */],
            __WEBPACK_IMPORTED_MODULE_29_app_shared_directives_dropdown_directive__["a" /* DropdownDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_30_app_account_account_module__["a" /* AccountModule */],
            __WEBPACK_IMPORTED_MODULE_32__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_24_app_manage_rfid_devices_devices_module__["a" /* DevicesModule */],
            __WEBPACK_IMPORTED_MODULE_25_app_manage_rfid_device_history_device_history_module__["a" /* DeviceHistoryModule */],
            __WEBPACK_IMPORTED_MODULE_26_app_administration_administration_module__["a" /* AdministrationModule */],
            __WEBPACK_IMPORTED_MODULE_33_app_manage_store_manage_store_module__["a" /* ManageStoreModule */],
            __WEBPACK_IMPORTED_MODULE_34_app_manage_operators_manage_operators_module__["a" /* ManageOperatorsModule */],
            __WEBPACK_IMPORTED_MODULE_31_app_shared_notification_notification_module__["a" /* NotificationModule */],
            __WEBPACK_IMPORTED_MODULE_35_app_template_template_module__["a" /* TemplateModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__manage_rfid_manage_rfid_service__["a" /* ManageRfidService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_27_app_shared_services_auth_guards__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_28_app_shared_services_auth_role_guard__["a" /* AuthRoleGuard */],
            __WEBPACK_IMPORTED_MODULE_36_app_shared_services_store_guard__["a" /* StoreGuard */],
            __WEBPACK_IMPORTED_MODULE_21__shared_utils_config_service__["a" /* ConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */],
                useClass: __WEBPACK_IMPORTED_MODULE_22__shared_services_authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */]
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = EmailValidator_1 = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EmailValidator;
}());
EmailValidator = EmailValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEmail][ngModel],[validateEmail][formControl]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], EmailValidator);

var EmailValidator_1;
//# sourceMappingURL=email.validator.directive.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myFocus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    return myFocus;
}());
myFocus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[tmFocus]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], myFocus);

var _a, _b;
//# sourceMappingURL=focus.directive.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_manage_operators_manage_operators_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_operators_edit_operator_edit_operator_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_store_guard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_manage_operators_operators_main_operators_main_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_manage_operators_all_operators_all_operators_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_manage_operators_operator_operator_component__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageOperatorRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'manage-operator',
        component: __WEBPACK_IMPORTED_MODULE_3_app_manage_operators_manage_operators_component__["a" /* ManageOperatorsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_store_guard__["a" /* StoreGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6_app_manage_operators_operators_main_operators_main_component__["a" /* OperatorsMainComponent */] },
            { path: 'operator', component: __WEBPACK_IMPORTED_MODULE_8_app_manage_operators_operator_operator_component__["a" /* OperatorComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6_app_manage_operators_operators_main_operators_main_component__["a" /* OperatorsMainComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4_app_manage_operators_edit_operator_edit_operator_component__["a" /* EditOperatorComponent */] },
                    { path: ':mail/edit', component: __WEBPACK_IMPORTED_MODULE_4_app_manage_operators_edit_operator_edit_operator_component__["a" /* EditOperatorComponent */] },
                ] },
            { path: 'operators', component: __WEBPACK_IMPORTED_MODULE_7_app_manage_operators_all_operators_all_operators_component__["a" /* AllOperatorsComponent */] },
        ] },
];
var ManageOperatorRouterModule = (function () {
    function ManageOperatorRouterModule() {
    }
    return ManageOperatorRouterModule;
}());
ManageOperatorRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], ManageOperatorRouterModule);

//# sourceMappingURL=manage-operator-router.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorModel; });
var OperatorModel = (function () {
    function OperatorModel() {
    }
    return OperatorModel;
}());

;
//# sourceMappingURL=manage-operator.models.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_operators_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_manage_operators_manage_operator_router_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_account_account_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_requesting_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_operator_edit_operator_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_store_guard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operators_main_operators_main_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_operators_all_operators_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__operator_operator_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_shared_module__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageOperatorsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ManageOperatorsModule = (function () {
    function ManageOperatorsModule() {
    }
    return ManageOperatorsModule;
}());
ManageOperatorsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_app_manage_operators_manage_operator_router_module__["a" /* ManageOperatorRouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_account_account_module__["a" /* AccountModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12_app_shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__manage_operators_component__["a" /* ManageOperatorsComponent */], __WEBPACK_IMPORTED_MODULE_6__edit_operator_edit_operator_component__["a" /* EditOperatorComponent */], __WEBPACK_IMPORTED_MODULE_9__operators_main_operators_main_component__["a" /* OperatorsMainComponent */], __WEBPACK_IMPORTED_MODULE_10__all_operators_all_operators_component__["a" /* AllOperatorsComponent */], __WEBPACK_IMPORTED_MODULE_11__operator_operator_component__["a" /* OperatorComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_requesting_service__["a" /* RequestingService */], __WEBPACK_IMPORTED_MODULE_8_app_shared_services_store_guard__["a" /* StoreGuard */]]
    })
], ManageOperatorsModule);

//# sourceMappingURL=manage-operators.module.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceHistoryListItemComponent = (function () {
    function DeviceHistoryListItemComponent() {
    }
    DeviceHistoryListItemComponent.prototype.ngOnInit = function () {
    };
    return DeviceHistoryListItemComponent;
}());
DeviceHistoryListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-history-list-item',
        template: __webpack_require__(374),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [])
], DeviceHistoryListItemComponent);

//# sourceMappingURL=device-history-list-item.component.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceHistoryListComponent = (function () {
    function DeviceHistoryListComponent() {
    }
    DeviceHistoryListComponent.prototype.ngOnInit = function () {
    };
    return DeviceHistoryListComponent;
}());
DeviceHistoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-history-list',
        template: __webpack_require__(375),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [])
], DeviceHistoryListComponent);

//# sourceMappingURL=device-history-list.component.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_history_list_device_history_list_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_history_list_device_history_list_item_device_history_list_item_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_rfid_device_history_device_history_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_manage_rfid_device_history_device_history_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DeviceHistoryModule = (function () {
    function DeviceHistoryModule() {
    }
    return DeviceHistoryModule;
}());
DeviceHistoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__device_history_list_device_history_list_component__["a" /* DeviceHistoryListComponent */], __WEBPACK_IMPORTED_MODULE_3__device_history_list_device_history_list_item_device_history_list_item_component__["a" /* DeviceHistoryListItemComponent */], __WEBPACK_IMPORTED_MODULE_4_app_manage_rfid_device_history_device_history_component__["a" /* DeviceHistoryComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_manage_rfid_device_history_device_history_service__["a" /* DeviceHistoryService */]]
    })
], DeviceHistoryModule);

//# sourceMappingURL=device-history.module.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceHistoryService = (function () {
    function DeviceHistoryService(_manageRfidService) {
        this._manageRfidService = _manageRfidService;
    }
    DeviceHistoryService.prototype.getDevicesHistory = function (deviceCode) {
        return this._manageRfidService.getDeviceHistory(deviceCode);
    };
    return DeviceHistoryService;
}());
DeviceHistoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _a || Object])
], DeviceHistoryService);

var _a;
//# sourceMappingURL=device-history.service.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceListItemComponent = (function () {
    function DeviceListItemComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    DeviceListItemComponent.prototype.ngOnInit = function () {
    };
    DeviceListItemComponent.prototype.viewHistory = function (deviceCode) {
        this._router.navigate(['device-history'], {
            queryParams: { code: deviceCode },
            relativeTo: this._route
        });
    };
    return DeviceListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__["b" /* RfidDevice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__["b" /* RfidDevice */]) === "function" && _a || Object)
], DeviceListItemComponent.prototype, "_device", void 0);
DeviceListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-list-item',
        template: __webpack_require__(377),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DeviceListItemComponent);

var _a, _b, _c;
//# sourceMappingURL=device-list-item.component.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesListComponent = (function () {
    function DevicesListComponent(_devicesService) {
        this._devicesService = _devicesService;
    }
    DevicesListComponent.prototype.ngOnInit = function () {
    };
    return DevicesListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DevicesListComponent.prototype, "_devicesList", void 0);
DevicesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices-list',
        template: __webpack_require__(378),
        styles: [__webpack_require__(326)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_rfid_devices_devices_service__["a" /* DevicesService */]) === "function" && _a || Object])
], DevicesListComponent);

var _a;
//# sourceMappingURL=devices-list.component.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_manage_rfid_devices_devices_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_manage_rfid_devices_devices_list_devices_list_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_rfid_manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_manage_rfid_devices_devices_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devices_list_device_list_item_device_list_item_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_popover__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_popover__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DevicesModule = (function () {
    function DevicesModule() {
    }
    return DevicesModule;
}());
DevicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_popover__["PopoverModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_manage_rfid_devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_manage_rfid_devices_devices_list_devices_list_component__["a" /* DevicesListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__devices_list_device_list_item_device_list_item_component__["a" /* DeviceListItemComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5_app_manage_rfid_devices_devices_service__["a" /* DevicesService */],
            __WEBPACK_IMPORTED_MODULE_4_app_manage_rfid_manage_rfid_service__["a" /* ManageRfidService */]
        ]
    })
], DevicesModule);

//# sourceMappingURL=devices.module.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RfidDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RfidDetailComponent = (function () {
    function RfidDetailComponent(_manageRfidService) {
        this._manageRfidService = _manageRfidService;
        this.NotificationPaidTotal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ViewDeatail = true;
        this.ViewOperationMessages = false;
        this.ViewOperationMessagesSuccessed = false;
        this.ViewOperationMessagesFaliure = false;
        this.totalToPay = 0;
        this.allTransactions = [];
    }
    RfidDetailComponent.prototype.ngOnChanges = function (changes) {
        this.getAllTransaztion();
    };
    RfidDetailComponent.prototype.ngOnInit = function () {
        this.getAllTransaztion();
    };
    RfidDetailComponent.prototype.getAllTransaztion = function () {
        var _this = this;
        this._manageRfidService.getAllTransactionsToPaydOff(this.rfidCode)
            .subscribe(function (res) {
            _this.totalToPay = 0;
            _this.allTransactions = [];
            _this.allTransactions = res.json();
            console.log(_this.allTransactions);
            _this.allTransactions.forEach(function (el) {
                _this.totalToPay += el.Importo;
                console.log(_this.totalToPay);
            });
        }, function (err) {
            console.log(err);
        });
    };
    RfidDetailComponent.prototype.paidTotalReset = function () {
        var _this = this;
        var paidModel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models_manage_refid_models__["a" /* PaidModel */]();
        paidModel.RfidCode = this.rfidCode;
        paidModel.Price = this.totalToPay;
        this._manageRfidService.paidTotalReset(paidModel)
            .subscribe(function (res) {
            _this.ViewOperationMessagesSuccessed = true;
        }, function (err) {
            _this.ViewDeatail = false;
            _this.ViewOperationMessages =
                true;
            _this.ViewOperationMessagesFaliure = true;
        });
    };
    RfidDetailComponent.prototype.okclick = function () {
        this.ViewOperationMessagesSuccessed = false;
        this.NotificationPaidTotal.emit();
    };
    return RfidDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RfidDetailComponent.prototype, "rfidCode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RfidDetailComponent.prototype, "NotificationPaidTotal", void 0);
RfidDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rfid-detail',
        template: __webpack_require__(383),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__manage_rfid_service__["a" /* ManageRfidService */]) === "function" && _a || Object])
], RfidDetailComponent);

var _a;
//# sourceMappingURL=rfid-detail.component.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    return UserInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__["c" /* Anagrafica */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_models_manage_refid_models__["c" /* Anagrafica */]) === "function" && _a || Object)
], UserInfoComponent.prototype, "Anagrafica", void 0);
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__(386),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponent);

var _a;
//# sourceMappingURL=user-info.component.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_manage_store_manage_store_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_store_create_store_create_store_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_manage_store_store_home_store_home_component__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStoreRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'manage-store',
        component: __WEBPACK_IMPORTED_MODULE_2_app_manage_store_manage_store_component__["a" /* ManageStoreComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5_app_manage_store_store_home_store_home_component__["a" /* StoreHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4_app_manage_store_create_store_create_store_component__["a" /* CreateStoreComponent */] }
        ] },
];
var ManageStoreRouterModule = (function () {
    function ManageStoreRouterModule() {
    }
    return ManageStoreRouterModule;
}());
ManageStoreRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
    })
], ManageStoreRouterModule);

//# sourceMappingURL=manage-store-router.module.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModel; });
var StoreModel = (function () {
    function StoreModel() {
    }
    return StoreModel;
}());

//# sourceMappingURL=manage-store.models.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_store_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_store_create_store_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_store_manage_store_router_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_manage_store_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_home_store_home_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_store_guard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ManageStoreModule = (function () {
    function ManageStoreModule() {
    }
    return ManageStoreModule;
}());
ManageStoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_manage_store_manage_store_router_module__["a" /* ManageStoreRouterModule */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__manage_store_component__["a" /* ManageStoreComponent */], __WEBPACK_IMPORTED_MODULE_3__create_store_create_store_component__["a" /* CreateStoreComponent */], __WEBPACK_IMPORTED_MODULE_7__store_home_store_home_component__["a" /* StoreHomeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_shared_services_manage_store_service__["a" /* ManageStoreService */], __WEBPACK_IMPORTED_MODULE_8_app_shared_services_store_guard__["a" /* StoreGuard */]]
    })
], ManageStoreModule);

//# sourceMappingURL=manage-store.module.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceCodeInputDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceCodeInputDirective = (function () {
    function DeviceCodeInputDirective(_elRef, renderer) {
        this._elRef = _elRef;
        this.renderer = renderer;
    }
    DeviceCodeInputDirective.prototype.ngOnInit = function () {
        this.renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    DeviceCodeInputDirective.prototype.keyEnterDown = function (eventData) {
        event.preventDefault();
        //  this.renderer.setAttribute(this._elRef.nativeElement,'disabled','');
    };
    DeviceCodeInputDirective.prototype.change = function (eventData) {
    };
    return DeviceCodeInputDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.enter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeviceCodeInputDirective.prototype, "keyEnterDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeviceCodeInputDirective.prototype, "change", null);
DeviceCodeInputDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDeviceCodeInput]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], DeviceCodeInputDirective);

var _a, _b;
//# sourceMappingURL=device-code-input.directive.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationType; });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["success"] = 1] = "success";
    NotificationType[NotificationType["info"] = 2] = "info";
    NotificationType[NotificationType["warning"] = 3] = "warning";
    NotificationType[NotificationType["danger"] = 4] = "danger";
})(NotificationType || (NotificationType = {}));
//# sourceMappingURL=SharedModels.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistration; });
var UserRegistration = (function () {
    function UserRegistration() {
    }
    return UserRegistration;
}());

//# sourceMappingURL=user.registration.interface.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenPipe = (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (value, limit) {
        if (value.length > limit) {
            return value.substring(0, limit) + ' ...';
        }
        return value;
    };
    return ShortenPipe;
}());
ShortenPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'shorten'
    })
], ShortenPipe);

//# sourceMappingURL=shorten.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateXHRBackend; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                console.log('Error ' + error);
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                //window.location.href = window.location.href + '?' + new Date().getMilliseconds();             
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* XHRBackend */]));
AuthenticateXHRBackend = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BrowserXhr */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BrowserXhr */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* ResponseOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* ResponseOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* XSRFStrategy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* XSRFStrategy */]) === "function" && _c || Object])
], AuthenticateXHRBackend);

var _a, _b, _c;
//# sourceMappingURL=authenticate-xhr.backend.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestingService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestingService = (function (_super) {
    __extends(RequestingService, _super);
    function RequestingService(_http, _config) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._config = _config;
        _this._baseUrl = _this._config.getApiURI();
        _this._options = _this._config.getRequestOptions();
        return _this;
    }
    // #Region MANAGE OPERATORS **
    // solo AdminStore
    RequestingService.prototype.createOperator = function (userRegistration) {
        this._http.post(this._baseUrl + '/store/createoperator', JSON.stringify(userRegistration), this._options);
    };
    // #endREGION MANAGE OPERATORS
    RequestingService.prototype.changePassword = function (changePassword) {
        console.log(JSON.stringify(changePassword));
        return this._http
            .post(this._baseUrl + '/Accounts/ChangePassword', JSON.stringify(changePassword), this._options);
    };
    return RequestingService;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__["a" /* BaseService */]));
RequestingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], RequestingService);

var _a, _b;
//# sourceMappingURL=requesting.service.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinnerComponent.prototype, "isRunning", null);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(392),
        styles: [__webpack_require__(347)]
    })
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlSidebarComponent = (function () {
    function ControlSidebarComponent() {
    }
    ControlSidebarComponent.prototype.ngOnInit = function () {
    };
    return ControlSidebarComponent;
}());
ControlSidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-control-sidebar',
        template: __webpack_require__(394),
        styles: [__webpack_require__(341)]
    }),
    __metadata("design:paramtypes", [])
], ControlSidebarComponent);

//# sourceMappingURL=control-sidebar.component.js.map

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(395),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.authNavStatus$.subscribe(function (res) {
            _this.UserEmail = _this.userService.CurrentUserEmail();
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(396),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    return MainHeaderComponent;
}());
MainHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-header',
        template: __webpack_require__(397),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [])
], MainHeaderComponent);

//# sourceMappingURL=main-header.component.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_role_guard__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(_userService, _roleGuard) {
        this._userService = _userService;
        this._roleGuard = _roleGuard;
        this.isAdministrator = false;
        this.isStoreAdministrator = false;
        this.isOperator = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._userService.authNavStatus$.subscribe(function (status) {
            _this.isAdministrator = _this._userService.isAdministrator();
            _this.isStoreAdministrator = _this._userService.isStoreAdministrator();
            _this.isOperator = _this._userService.isStoreOperator();
            _this.status = status;
        });
    };
    SidebarComponent.prototype.logout = function () {
        this._userService.logout();
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(398),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_role_guard__["a" /* AuthRoleGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_role_guard__["a" /* AuthRoleGuard */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateComponent = (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    return TemplateComponent;
}());
TemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-template',
        template: __webpack_require__(399),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [])
], TemplateComponent);

//# sourceMappingURL=template.component.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_template_template_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_template_header_header_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_template_main_header_main_header_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__control_sidebar_control_sidebar_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TemplateModule = (function () {
    function TemplateModule() {
    }
    return TemplateModule;
}());
TemplateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2_app_template_template_component__["a" /* TemplateComponent */], __WEBPACK_IMPORTED_MODULE_3_app_template_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4_app_template_main_header_main_header_component__["a" /* MainHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__control_sidebar_control_sidebar_component__["a" /* ControlSidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4_app_template_main_header_main_header_component__["a" /* MainHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__control_sidebar_control_sidebar_component__["a" /* ControlSidebarComponent */]]
    })
], TemplateModule);

//# sourceMappingURL=template.module.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn-sq-lg {\r\n  width: 200px !important;\r\n  height: 200px !important;\r\n}\r\n\r\n.btn-sq {\r\n  width: 100px !important;\r\n  height: 100px !important;\r\n  font-size: 10px;\r\n}\r\n\r\n.btn-sq-sm {\r\n  width: 50px !important;\r\n  height: 50px !important;\r\n  font-size: 10px;\r\n}\r\n\r\n.btn-sq-xs {\r\n  width: 25px !important;\r\n  height: 25px !important;\r\n  padding:2px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".item-code {\r\n    position: absolute;\r\n    top: -20px;\r\n}\r\n.cursor:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".pointer:hover{\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "textarea {\r\n    resize: none;\r\n}\r\n.list-tipMail  {\r\nmargin-top:5px;\r\n}\r\n.list-tipMail li {\r\nlist-style-type: none;\r\nbackground-color: #fff;\r\nborder-radius: 3px;\r\nborder: 1px solid #fff;\r\n}\r\n.list-tipMail li:hover {\r\n  cursor: pointer;\r\n  border-color:  #5bc0de;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  account works!\r\n</p>\r\n"

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1 \">  \r\n    <h3> Cambio Password</h3>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-block\">\r\n\t\t\t\t<form #f=\"ngForm\" [formGroup]=\"ChangePasswordForm\"  novalidate (ngSubmit)=\"change()\">\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"oldPassword\">Vecchia password</label>\r\n\t\t\t\t\t\t<input id=\"oldPassword\" type=\"password\"\r\n\t\t\t\t\t\trequired name=\"oldPassword\" formControlName=\"oldPassword\"\r\n\t\t\t\t\t\t tmFocus  class=\"form-control\"\t>\r\n\t\t\t\t\t\t  <div *ngIf=\"errorMessage != ''\">\r\n\t\t\t\t\t\t<small  class=\"text-danger\">{{errorMessage}}</small>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t \r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"newPassword\">Nuova password</label>\r\n\t\t\t\t\t\t<input id=\"newPassword\" type=\"password\" required name=\"newPassword\" formControlName=\"newPassword\" tmFocus  class=\"form-control\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\"  [ngClass]=\"{'has-error': (ChangePasswordForm.controls.rpPassword.errors && ChangePasswordForm.controls.rpPassword.touched) }\">\r\n\t\t\t\t\t\t<label for=\"rpPassword\">Ripeti password</label>\r\n\t\t\t\t\t\t<input id=\"rpPassword\" type=\"password\" required name=\"rpPassword\" formControlName=\"rpPassword\" tmFocus  class=\"form-control\">\r\n\t\t\t\t\t\t<div *ngIf=\"ChangePasswordForm.controls.rpPassword.errors && ChangePasswordForm.controls.rpPassword.touched\">\r\n\t\t\t\t\t\t<small  class=\"text-danger\">Password non coincidono</small>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\"  >\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Cabia</button>\r\n\t\t\t\t\t\t<app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t</form>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6 col-md-offset-3 \">  \r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-block\">\r\n\r\n\t\t\t\t<div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n\t\t\t\t\t<strong>All set!</strong> Please login with your account\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<h4>Login</h4>\r\n\r\n\t\t\t\t<form #f=\"ngForm\" [formGroup]=\"LoginForm\"  novalidate (ngSubmit)=\"login(f)\">\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t\t\t\t<input id=\"email\" type=\"text\" required name=\"email\" formControlName=\"email\" tmFocus validateEmail class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"Email\">\r\n\r\n\t\t\t\t\t\t<!--<small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">\r\n            Please enter a valid email\r\n          </small>-->\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"password\">Password</label>\r\n\t\t\t\t\t\t<input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\"\tplaceholder=\"Password\" formControlName=\"password\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Login</button>\r\n\t\t\t\t\t\t<app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n\t\t\t\t\t\t<strong>Oops!</strong> {{errors}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">\r\n\r\n\t<div class=\"box-header with-border\">\r\n\r\n\t\t<h4 class=\"box-title\">Registrazine</h4>\r\n\r\n\t</div>\r\n\t<form  [formGroup]=\"RegistrationForm\"  #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser()\">\r\n\r\n\t\t<div class=\"box-body\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"first-name\" class=\"col-lg-2 control-label\">First name</label>\r\n\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t<input id=\"first-name\" type=\"text\"  name=\"firstName\"\r\n\t\t\t\t\t class=\"form-control\" placeholder=\"First name\"  \r\n\t\t\t\t\t  formControlName=\"firstname\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<br/>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"last-name\" class=\"col-lg-2 control-label\">Last name</label>\r\n\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t<input id=\"last-name\" type=\"text\"  name=\"lastName\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastname\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<br/>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email\" class=\"col-lg-2 control-label\">Email</label>\r\n\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t<input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n\t\t\t\t\t<small [hidden]=\"RegistrationForm.controls.email.valid || (RegistrationForm.controls.email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<br/>\r\n\r\n\t\t\t<div class=\"form-group\" *ngIf=\"!EditMode\">\r\n\t\t\t\t<label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\r\n\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t<input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\"  formControlName=\"password\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<br *ngIf=\"!EditMode\" /> \r\n\r\n\t\t\t<div class=\"form-group\" *ngIf=\"isAdministrator\">\r\n\t\t\t\t<label for=\"choiseRole\" class=\"col-lg-2 control-label\">Ruolo</label>\r\n\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t<select id=\"choiseRole\" formControlName=\"role\" class=\"form-control\" >\r\n                         <option *ngFor=\"let opt of optionsRoles, let i=index\" >{{opt}}</option>\r\n\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<br/>\r\n\r\n\r\n\t\t</div>\r\n\r\n\r\n\r\n\t\t<div class=\"box-footer\">\r\n\t\t<button type=\"buttone\" class=\"btn btn-primary btn-flat pull-left\" *ngIf=\"EditMode\" (click)=\"goBack();$event.preventDefault()\">Torna</button>\r\n\t\t\t<button *ngIf=\"EditMode\" type=\"submit\" class=\"btn btn-primary btn-flat pull-right\" [disabled]=\"f.invalid || isRequesting\">Aggiorna</button>\r\n\t\t\t<button *ngIf=\"!EditMode\" type=\"submit\" class=\"btn btn-primary btn-flat pull-right\" [disabled]=\"f.invalid || isRequesting\">Crea</button>\r\n\t\t\t <app-spinner [isRunning]=\"isRequesting\"></app-spinner> \r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n\t\t\t<strong>Oops!</strong> {{errors}}\r\n\t\t</div>\r\n\r\n\t</form>\r\n</div>"

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\r\n <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports = "<h3>Area admin</h3>\r\n"

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports = "\r\n <router-outlet></router-outlet>\r\n"

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n    <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Lista utenti</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered\">\r\n                \r\n                <tbody>\r\n                  <tr>\r\n                    <th style=\"width: 10px\">#</th>\r\n                    <th>Email</th>\r\n                    <th>Nome</th>\r\n                    <th>Cognome</th>\r\n                    <th>Ruolo</th>\r\n                    <th>Azioni</th>\r\n                </tr>\r\n                <tr *ngFor=\"let user of applicationUsers; let i= index\">\r\n\r\n                  <td style=\"width: 10px\">{{i +1}}</td>\r\n                  <td>{{user.Email}}</td>\r\n                  <td>{{user.FirstName}}</td>\r\n                   <td>{{user.LastName}}</td>\r\n                   <td>{{user.Roles}}</td>\r\n\r\n                   <td>\r\n                     <button class=\"btn btn-primary btn-xs btn-flat\" (click)=\"editUser(user.Email)\">\r\n                       <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                     </button>\r\n                      <button class=\"btn btn-danger btn-xs btn-flat\" (click)=\"DeleteUser(user.Email)\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                     </button>\r\n\r\n                    \r\n\r\n                   </td>\r\n                </tr>\r\n        \r\n          \r\n           \r\n              </tbody></table>\r\n\r\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n              <div>\r\n                 <p *ngIf=\"loadingError\"> Errore durente il caricamento </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n"

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <app-main-header></app-main-header>\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <!-- <section class=\"content-header\">\r\n      <h1>\r\n        Page Header\r\n        <small>Optional description</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\r\n        <li class=\"active\">Here</li>\r\n      </ol>\r\n    </section> -->\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content container-fluid\">\r\n <router-outlet></router-outlet>\r\n      <!--------------------------\r\n        | Your Page Content Here |\r\n        -------------------------->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n  <!-- /.content-wrapper -->\r\n\r\n  \r\n\r\n<!-- <app-header></app-header>\r\n<div class=\"containe-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n     \r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<app-footer></app-footer>\r\n<app-control-sidebar></app-control-sidebar>\r\n</div>\r\n"

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n\r\n\r\n\r\n    <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Lista Operatori</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <table class=\"table table-bordered\">\r\n                \r\n                <tbody>\r\n                  <tr>\r\n                    <th style=\"width: 10px\">#</th>\r\n                    <th>Email</th>\r\n                    <th>Nome</th>                    \r\n                    <th>Azioni</th>\r\n                </tr>\r\n                <tr *ngFor=\"let user of applicationUsers; let i= index\">\r\n\r\n                  <td style=\"width: 10px\">i</td>\r\n                  <td>{{user.Email}}</td>\r\n                  <td>{{user.FirstName}}</td>\r\n\r\n                   <td>\r\n                     <button class=\"btn btn-primary btn-xs btn-flat\">\r\n                       <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                     </button>\r\n                      <button class=\"btn btn-danger btn-xs btn-flat\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                     </button>\r\n\r\n          \r\n                   </td>\r\n                </tr>\r\n        \r\n          \r\n           \r\n              </tbody></table>\r\n\r\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n              <div>\r\n                 <p *ngIf=\"loadingError\"> Errore durente il caricamento </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports = "\r\n        <div class=\"box box-info\">\r\n            <div class=\"box-header\" >\r\n                <h4 class=\"box-title\">Grea operatore</h4>\r\n            </div>\r\n            <form class=\"form-group\" (ngSubmit)=\"submit()\" [formGroup]=\"OperatorForm\" autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"nome\" class=\"col-lg-2 control-label\">Email</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"email\"  required class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\">\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nome\" class=\"col-lg-2 control-label\">Name</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\"    class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\">\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"password\" required class=\"form-control\" id=\"password\" name=\"password\" formControlName=\"password\">\r\n                        </div>\r\n                    </div>\r\n\r\n               </div>\r\n                \r\n              \r\n                <div class=\"box-footer\">\r\n                    <button class=\"btn btn-success btn-flat\" [disabled]=\"!OperatorForm.valid\" type=\"submit\">Salva</button>\r\n                    <button class=\"btn btn-danger btn-flat pull-right\" type=\"button\" >Ripulisci</button>\r\n\r\n                </div>\r\n\r\n\r\n            </form>\r\n     \r\n\r\n</div>"

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports = "<h4>Gestione operatori</h4>"

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n\r\n\r\n                <div class=\"box\">\r\n                        <div class=\"box-header\">\r\n                                <h3 class=\"box-title\">Azioni</h3>\r\n                        </div>\r\n                        <div class=\"box-content\">\r\n\r\n\r\n                                <div class=\"row\">\r\n                                        <div class=\"col-md-10 col-md-offset-1\">\r\n                                                <button class=\"btn btn-block btn-success\" (click)=\"paid()\">\r\n                                                <i class=\"fa fa-money fa-5x\" aria-hidden=\"true\"></i><br>\r\n                                                Paga Rfid</button>\r\n\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div><br>\r\n                                <div class=\"row\">\r\n                                        <div class=\"col-md-5 col-md-offset-1\">\r\n                                                <button (click)=\"createNew()\" class=\"btn btn-primary btn-block\">\r\n                                               Nuovo\r\n                                             </button>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                                <button class=\"btn btn-primary btn-block\" (click)=\"totalAmount()\">\r\n                                                        Salda il conto\r\n                                                </button>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div><br>\r\n                                  <div class=\"row\">\r\n                                        <div class=\"col-md-5 col-md-offset-1\">\r\n                                                <button  (click)=\"manageUser()\" class=\"btn btn-primary btn-block\">\r\n                                               Gestione <br>utenti\r\n                                             </button>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                                <button class=\"btn btn-primary btn-block\"[routerLink]=\"['/manage-rfid/devices']\">\r\n                                                        Dispositivi\r\n                                                </button>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div><br>\r\n\r\n                        </div>\r\n                </div>\r\n                \r\n\r\n     \r\n     \r\n     \r\n    \r\n"

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  device-history-list-item works!\r\n</p>\r\n"

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  device-history-list works!\r\n</p>\r\n"

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  device-history works!\r\n</p>\r\n"

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports = "\r\n<!--(click)=\"viewHistory(_device.RfidDeviceCode)\"-->\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"item-code\">\r\n    <h5 class=\"text-center \"><span class=\"label label-success\">{{_device.RfidDeviceCode}}</span></h5>\r\n   \r\n    </div>\r\n   <h6 *ngIf=\"_device.Active\" class=\"text-center\">Debito : <span class=\"label  label-success\">€ {{_device.Credit}}</span></h6>\r\n   \r\n   <h5 *ngIf=\"_device.Active\" class=\"text-center\"> <span class=\"label label-success\">Attivo</span></h5>\r\n  <h5 *ngIf=\"!_device.Active\" class=\"text-center\"> <span class=\"label label-danger\">Non Attivo</span></h5>\r\n  \r\n    <button\r\n     class=\"btn\" \r\n      popover=\"Clicca pr vedere i dettagli\" \r\n      [popoverOnHover]=\"true\"\r\n       popoverPlacement=\"left\"\r\n     routerLink=\"/manage-rfid/device-history\" \r\n     ><i class=\"fa fa-history\" aria-hidden=\"true\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div *ngFor=\"let deviceEl of _devicesList\">\r\n    <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div>\r\n    <div class=\"col-md-2\">\r\n      <app-device-list-item [_device]=\"deviceEl\">\r\n      </app-device-list-item>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-10 col-md-offset-1\">\r\n    <h4 class=\"text-center\">Gestione Dispositivi</h4>\r\n\r\n    <ul class=\"nav nav-pills\">\r\n      <li class=\"pointer\" [class.active]=\"_currentViewDevices =='active'\" (click)=\"viewActiveDevices()\">\r\n        <a class=\"pointer\">\r\n           Attivi \r\n      <span class=\"badge\">{{_countActive}}</span>\r\n      </a>\r\n      </li>\r\n\r\n       <li class=\"pointer\" [class.active]=\"_currentViewDevices =='all'\" (click)=\"viewAllDevices()\">\r\n        <a class=\"pointer\">\r\n           Tutti \r\n      <span class=\"badge\">{{_countAll}}</span>\r\n      </a>\r\n      </li>\r\n       <li class=\"pointer\" [class.active]=\"_currentViewDevices =='notActive'\" (click)=\"viewNotActiveDevices()\">\r\n        <a class=\"pointer\">\r\n           Non Attivi\r\n      <span class=\"badge\">{{_countNotActive}}</span>\r\n      </a>\r\n      </li>\r\n\r\n\r\n  <li class=\"pull-right\">\r\n        \r\n          Debito totale\r\n      <span class=\"badge\">€ {{_totalDebit}}</span>\r\n     \r\n      </li>\r\n\r\n    </ul>\r\n\r\n\r\n    <!--<button class=\"btn btn-primary\" [class.active]=\"_currentViewDevices =='active'\" (click)=\"viewActiveDevices()\">  Attivi <span class=\"badge\">{{_countActive}}</span></button>\r\n    <button class=\"btn btn-primary\" [class.active]=\"_currentViewDevices =='all'\" (click)=\"viewAllDevices()\">Tutti  <span class=\"badge\">{{_countAll}}</span></button>\r\n    <button class=\"btn btn-primary\" [class.active]=\"_currentViewDevices =='notActive'\" (click)=\"viewNotActiveDevices()\"> Non Attivi <span class=\"badge\">{{_countNotActive}}</span></button>-->\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-10 col-md-offset-1\">\r\n    <app-devices-list [_devicesList]=\"_devicesList\"></app-devices-list>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">  \r\n    <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n      <div class=\"well\" *ngIf=\"readView\">\r\n\r\n        <form [formGroup]=\"ReadRfidForm\" (ngSubmit)=\"getUserByDetail(f)\" #f=\"ngForm\">\r\n          <fieldset>\r\n            <legend>Codice</legend>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" appDeviceCodeInput class=\"form-control\" id=\"rfidCode\" name=\"rfidCode\" formControlName=\"rfidCode\">\r\n            </div>\r\n          </fieldset>\r\n          <fieldset>\r\n            <legend>Email</legend>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\">\r\n            </div>\r\n          </fieldset>\r\n          <button class=\"btn btn-success\">leggi</button>\r\n        </form>\r\n      </div>\r\n   \r\n  \r\n\r\n\r\n\r\n  <div class=\"row\" *ngIf=\"userInfoView\">\r\n\r\n    <div class=\"col-md-3\">\r\n      <app-user-info [Anagrafica]=\"userDetailModel.Anagrafica\"></app-user-info>\r\n      <br>\r\n      <button class=\"btn btn-success\" routerLink=\"/manage-rfid\">Menu prinipale</button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <h3>Elenco Dispositivi</h3>\r\n<ul class=\"list-group\">\r\n<li class=\"list-group-item\"  *ngFor=\"let rfid of userDetailModel.Dispositivi; let i = index\">\r\n      <div class=\"media\">\r\n        <div class=\"media-left\">\r\n\r\n          <img class=\"media-object\" [src]=\"rfidLogoPath\" alt=\"...\" width=\"80\">\r\n\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h5  class=\"media-heading\">Data :\r\n            \r\n          <span class=\"label label-success\">{{rfid.LastModifiedDate | date:'dd/MM/y H:mm'}}</span></h5>\r\n            <h5>Debito  \r\n          <span class=\"label label-danger\"> € {{rfid.Credit}}</span></h5>\r\n   \r\n        \r\n          <button class=\"btn btn-info btn-md pull-right\" (click)=\"viewDetail(rfid.RfidDeviceCode)\">Dettagli</button>\r\n        </div>\r\n      </div>\r\n</li>\r\n</ul>\r\n    \r\n    <h5 class=\"text-right\">Totoale: €{{total}} </h5>\r\n\r\n      <button class=\"btn btn-success\" (click)=\"totalPaid()\"> Paga il totale  </button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-5\" *ngIf=\"viewRfidDetail\">\r\n      <app-rfid-detail [rfidCode]=\"rfidCodeDetail\" (NotificationPaidTotal)=\"NotificationPaidTotal()\"></app-rfid-detail>\r\n    </div>\r\n\r\n\r\n\r\n"

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <div class=\"box box-primary\">\r\n      <div class=\"box-header\">\r\n        <h3 class=\"box-title\">Paga con il dispositivo </h3>\r\n      </div>\r\n\r\n    \r\n        <form [formGroup]=\"PaidForm\" (ngSubmit)=\"paid(f)\" #f=\"ngForm\">\r\n          <div class=\"box-body\">\r\n            <fieldset>\r\n              <div class=\"form-group\">\r\n                <label for=\"importo\" class=\"col-lg-2 control-label\">Importo</label>\r\n                <div class=\"col-lg-10\">\r\n                  <!--pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" step=\"0.01\"-->\r\n                  <input type=\"number\" step=\"0.01\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\" placeholder=\"€\">\r\n                  <span class=\"help-block allertMessage\" *ngIf=\"PaidForm.controls.price.invalid && PaidForm.controls.price.touched\">Inserisci l'importo corretto!</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <br />\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"descrizione\" class=\"col-lg-2 control-label\">Descrizione</label>\r\n                <div class=\"col-lg-10\">\r\n                  <textarea class=\"form-control\" id=\"descrizione\" name=\"descrizione\" formControlName=\"descrizione\"></textarea>\r\n                  <span class=\"help-block allertMessage\" *ngIf=\"PaidForm.controls.descrizione.invalid && PaidForm.controls.descrizione.touched\">Inserisci la descrizione</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <br /><br />\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"rfidCode\" class=\"col-lg-2 control-label\">Codice</label>\r\n                <div class=\"col-lg-10\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"rfidCode\" appDeviceCodeInput name=\"rfidCode\" formControlName=\"rfidCode\">\r\n                  <span class=\"help-block allertMessage\" *ngIf=\"PaidForm.controls.rfidCode.invalid && PaidForm.controls.rfidCode.touched\">Scansiona il dispositivo</span>\r\n                </div>\r\n              </div>\r\n\r\n            </fieldset>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"box-footer\">\r\n\r\n            <button class=\"btn btn-success\" [disabled]=\"!PaidForm.valid\" type=\"submit\">Paga</button>\r\n            <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"clearForm()\">Ripulisci</button>\r\n\r\n          </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <app-spinner [isRunning]=\"isProcessing\"></app-spinner>\r\n\r\n\r\n\r\n\r\n   \r\n\r\n"

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = " \r\n \r\n\r\n <div class=\"wells\" *ngIf=\"ViewDeatail\">\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Descrizione</th>\r\n      <th>DAta Ora </th>\r\n      <th class=\"col-md-1\">Prezzo</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let transaction of allTransactions; let i = index\">\r\n      <td scope=\"row\">{{1+ i}}</td>\r\n      <td >{{transaction.Descrizione}}</td>\r\n      <td>{{transaction.TransactionDate | date:'dd/MM/y H:mm'}}</td>\r\n      <td><label>€ {{transaction.Importo}}</label></td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot>\r\n              <tr>\r\n            <td></td>\r\n            \r\n            <td><b>Totale:</b> </td>\r\n            <td colspan=\"2\"><b>€ {{totalToPay}}</b></td>\r\n          </tr>\r\n  </tfoot>\r\n</table>\r\n<button class=\"btn btn-success btn-xs\" type=\"button\" (click)=\"paidTotalReset()\">Restituisci il Dispositivo e salda il Conto</button>\r\n\r\n\r\n  <!-- Modal -->\r\n  <div \r\n  class=\"modal fade\"\r\n  [ngClass]=\"{'in': 'ViewOperationMessagesSuccessed'}\"\r\n   id=\"myModal\"\r\n    role=\"dialog\" \r\n    *ngIf=\"ViewOperationMessagesSuccessed\"\r\n    [ngStyle]=\"{'display': 'ViewOperationMessagesSuccessed' ? 'block' : 'none'}\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n       \r\n        <div class=\"modal-body\">\r\n          <p> L'operazione' è andata a buon fine!</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"okclick()\">Close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row\" *ngIf=\"ViewOperationMessages\">\r\n  <div class=\"col-md-12\" *ngIf=\"ViewOperationMessagesSuccessed\">\r\n    <p>\r\n    L'operazione' è andata a buon fine!</p> <br />\r\n    <button class=\"btn btn-success\"  routerLink=\"/manage-rfid\">ok</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"ViewOperationMessagesFaliure\">\r\n  <div class=\"col-md-12\">\r\n    <p>\r\n    Ci sono stati dei errori riprovare </p> <br />\r\n    <button class=\"btn btn-success\"  routerLink=\"/manage-rfid\">ok</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = "\r\n        <div class=\"box box-primary\">\r\n             <div class=\"box-header\"> \r\n                    <h3 class=\"box-title\">Assiciazione Dispositivo</h3>\r\n                  </div>\r\n            <form class=\"form-group\" (ngSubmit)=\"submit()\" [formGroup]=\"RfidForm\" autocomplete=\"off\">\r\n               \r\n                <div class=\"box-body\">\r\n                <fieldset>\r\n                    <legend>Dati utente</legend>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\" class=\"col-lg-2 control-label\">Email</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"email\" email required class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\">\r\n                           \r\n                            <span class=\"help-block allertMessage\" *ngIf=\"RfidForm.controls.email.invalid && RfidForm.controls.email.touched\">Campo Email è obbligatorio</span>\r\n                            <ul *ngFor=\"let tipMail of _tipsMail\" class=\"list-tipMail\">\r\n                                <li (click)=\"loadByEmail(tipMail)\">{{tipMail}}</li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"telefono\" class=\"col-lg-2 control-label\">Telefono</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"telefono\" name=\"telefono\" formControlName=\"telefono\">\r\n                   \r\n                        </div>\r\n                    </div>\r\n\r\n                   \r\n                    <div class=\"form-group\">\r\n                        <label class=\"nome\" for=\"nome\" class=\"col-lg-2 control-label\">Nome</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\" class=\"form-control \" id=\"nome\" name=\"nome\" formControlName=\"nome\">\r\n                        </div>\r\n\r\n                    </div>\r\n                   \r\n                    <div class=\"form-group\">\r\n\r\n                        <label for=\"cognome\" class=\"col-lg-2 control-label\">Cognome</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\" class=\"form-control \" id=\"cognome\" name=\"cognome\" formControlName=\"cognome\">\r\n                        </div>\r\n                    </div>\r\n                 \r\n\r\n                </fieldset>\r\n                <fieldset class=\"form-group\">\r\n                    <legend>Dispositivo</legend>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rfidCode\" class=\"col-lg-2 control-label\">Codice</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\"\r\n                             appDeviceCodeInput required \r\n                             class=\"form-control\" id=\"rfidCode\" name=\"rfidCode\"\r\n                             formControlName=\"rfidCode\"\r\n                            />\r\n                            <span class=\"help-block allertMessage\" *ngIf=\"RfidForm.controls.rfidCode.invalid && RfidForm.controls.rfidCode.touched\">Scansiona il dispositivo</span>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n             \r\n                </div>\r\n           \r\n                <div class=\"box-footer\">\r\n                    <button class=\"btn btn-success btn-xs btn-flat\" [disabled]=\"!RfidForm.valid\" type=\"submit\">Salva</button>\r\n                    <button class=\"btn btn-danger pull-right btn-xs btn-flat\" type=\"button\" (click)=\"clearForm()\">Ripulisci</button>\r\n\r\n                </div>\r\n\r\n\r\n            </form>\r\n        </div>\r\n "

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"box box-primary\" *ngIf=\"readRfidView\">\r\n\r\n      <form [formGroup]=\"ReadRfidForm\" (ngSubmit)=\"getTotal(f)\" #f=\"ngForm\">\r\n        <fieldset>\r\n          <legend>Dispositivo</legend>\r\n          <div class=\"form-group\">\r\n            <label for=\"importo\" class=\"col-lg-2 control-label\">Codice</label>\r\n            <div class=\"col-lg-10\">\r\n              <input type=\"text\" appDeviceCodeInput class=\"form-control\" id=\"rfidCode\" name=\"rfidCode\" formControlName=\"rfidCode\">\r\n\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        <button class=\"btn btn-success\">leggi</button>\r\n      </form>\r\n  \r\n  </div>\r\n\r\n    <div class=\"box box-primary\" *ngIf=\"TotalInfoView\">\r\n\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Descrizione</th>\r\n            <th>DAta Ora </th>\r\n            <th>Prezzo</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let transaction of allTransactions; let i = index\">\r\n            <td scope=\"row\">{{i}}</td>\r\n            <td>{{transaction.Descrizione}}</td>\r\n            <td>{{transaction.TransactionDate | date:'dd/MM/y H:mm'}}</td>\r\n            <td>€ {{transaction.Importo}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td><b>Totale:</b> </td>\r\n            <td><b>€ {{Totale}}</b></td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n\r\n    \r\n\r\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"paidTotalReset()\">Restituisci il dispositivo </button>\r\n  </div>\r\n"

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports = " <div  class=\"well\" >\r\n      <h3>Dettagli Utente</h3>\r\n      <label> Email : <b>{{Anagrafica.Email}}</b></label> <br />\r\n      <label> Nome : <b>{{Anagrafica.Nome}}</b></label><br />\r\n      <label> Cognome : <b>{{Anagrafica.Cognome}}</b></label><br />\r\n      <label> Telefino :<b> {{Anagrafica.Telefono}}</b></label><br />\r\n    </div>"

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"box box-info\">\r\n\r\n\t<div class=\"box-header with-border\">\r\n\r\n\t\t<h4 class=\"box-title\">Crea Attività</h4>\r\n\r\n\t</div>\r\n            <form class=\"form-group\" (ngSubmit)=\"submit()\" [formGroup]=\"StoreForm\" autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nome\" class=\"col-lg-2 control-label\">Nome</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\"  required \r\n                            class=\"form-control\" id=\"nome\" name=\"nome\" formControlName=\"nome\">\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"telefono\" class=\"col-lg-2 control-label\">Telefono</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"telefono\" name=\"telefono\" formControlName=\"telefono\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"clearfix\"></div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"address\" class=\"col-lg-2 control-label\">Address</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input type=\"text\" class=\"form-control \" id=\"address\" name=\"address\" formControlName=\"address\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <br>\r\n                    \r\n\r\n               </div>\r\n                \r\n             \r\n                <div class=\"box-footer\">\r\n                    <button class=\"btn btn-success\" [disabled]=\"!StoreForm.valid\" type=\"submit\">Salva</button>\r\n                    <button class=\"btn btn-danger pull-right\" type=\"button\">Ripulisci</button>\r\n\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n            <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n    \r\n\r\n</div>"

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\r\n            <div class=\"box-body box-profile\">\r\n             \r\n              <h3 class=\"profile-username text-center\">{{store.Name}}</h3>\r\n\r\n\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>"

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n\r\n  \r\n <div [ngClass]=\"getAlertStyle()\">\r\n     <p>{{notificationmodel.notificationMessage}}</p>\r\n      <br />\r\n           \r\n    </div>\r\n\r\n     <p>\r\n         <button class=\"btn btn-info btn-flat pull-left\" (click)=\"goHome()\"> Home  </button>\r\n      <button class=\"btn btn-info btn-flat pull-right\" (click)=\"goBack()\"> Indietro  </button>\r\n     </p>\r\n\r\n      </div>\r\n</div>\r\n"

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \r\n    <div class=\"double-bounce1\"></div>\r\n    <div class=\"double-bounce2\"></div>\r\n</div> "

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  statistics works!\r\n</p>\r\n"

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\r\n  <aside class=\"control-sidebar control-sidebar-dark\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <!-- Home tab content -->\r\n      <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\r\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:;\">\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:;\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Custom Template Design\r\n                <span class=\"pull-right-container\">\r\n                    <span class=\"label label-danger pull-right\">70%</span>\r\n                  </span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n      <!-- Stats tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n      <!-- /.tab-pane -->\r\n      <!-- Settings tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n        <form method=\"post\">\r\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Some information about this general settings option\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n        </form>\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n    </div>\r\n  </aside>\r\n  <!-- /.control-sidebar -->\r\n  <!-- Add the sidebar's background. This div must be placed\r\n  immediately after the control sidebar -->\r\n  <div class=\"control-sidebar-bg\"></div>"

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = "  <!-- Main Footer -->\r\n  <footer class=\"main-footer\">\r\n    <!-- To the right -->\r\n    <div class=\"pull-right hidden-xs\">\r\n      Anything you want\r\n    </div>\r\n    <!-- Default to the left -->\r\n    <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\r\n  </footer>\r\n\r\n"

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports = "   <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n      <!-- Sidebar toggle button-->\r\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n      <!-- Navbar Right Menu -->\r\n      <div class=\"navbar-custom-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n         \r\n\r\n        \r\n          <!-- User Account Menu -->\r\n          <li class=\"dropdown user user-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <!-- The user image in the navbar-->\r\n              <!-- <img src=\"assest/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\"> -->\r\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n              <span class=\"hidden-xs\">{{UserEmail}}</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- The user image in the menu -->\r\n              <li class=\"user-header\">\r\n                <img src=\"assest/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                <p>\r\n                  Alexander Pierce - Web Developer\r\n                  <small>Member since Nov. 2012</small>\r\n                </p>\r\n              </li>\r\n              <!-- Menu Body -->\r\n              <li class=\"user-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Followers</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Sales</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Friends</a>\r\n                  </div>\r\n                </div>\r\n                <!-- /.row -->\r\n              </li>\r\n              <!-- Menu Footer-->\r\n              <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                  <a routerLink=\"/account/profile\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                  <a class=\"btn btn-default btn-flat\" (click)=\"logout()\">Sign out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Control Sidebar Toggle Button -->\r\n          <li>\r\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>"

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- Main Header -->\r\n  <header class=\"main-header\">\r\n\r\n    <!-- Logo -->\r\n    <a href=\"index2.html\" class=\"logo\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini\"><b>A</b>LT</span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar -->\r\n    <app-header></app-header>\r\n \r\n  </header>\r\n  <!-- Left side column. contains the logo and sidebar -->"

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\r\n  \r\n  \r\n  <aside class=\"main-sidebar\">\r\n\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n\r\n\r\n      <!-- Sidebar Menu -->\r\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"header\">Navigazione</li>\r\n\r\n         <li routerLinkActive=\"active\" *ngIf=\"isStoreAdministrator || isOperator\"\r\n         [routerLinkActiveOptions]=\"{exact:true}\">\r\n         <a routerLink=\"/manage-rfid\">\r\n          <i class=\"fa fa-cubes\"></i><span>\r\n          Area Lavoro</span></a>\r\n      </li>\r\n\r\n\r\n       \r\n       <!-- Administrator -->\r\n           <li class=\"treeview\" >\r\n          <a routerLinkActive=\"active\" *ngIf=\"isAdministrator\"\r\n           [routerLinkActiveOptions]=\"{exact:true}\"\r\n           routerLink=\"/administration\">\r\n           <i class=\"fa fa-link\"></i> \r\n           <span>Amministrazione</span>\r\n            <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a routerLink=\"/administration/users/new\">Crea Utente</a></li>\r\n            <li><a routerLink=\"/administration/users\">Utenti</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li routerLinkActive=\"active\" *ngIf=\"isStoreAdministrator\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a routerLink=\"/manage-store\">\r\n         <i class=\"fa fa-cubes\"></i><span>\r\n         Gestion Attività</span></a>\r\n     </li>\r\n\r\n        \r\n\r\n\r\n\r\n\r\n        <!--- Store Administrator -->\r\n          <li class=\"treeview\" >\r\n          <a routerLinkActive=\"active\" *ngIf=\"isStoreAdministrator\"\r\n           [routerLinkActiveOptions]=\"{exact:true}\"\r\n           routerLink=\"/manage-operator\">\r\n           <i class=\"fa fa-link\"></i> \r\n           <span>Operatori</span>\r\n            <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a routerLink=\"/manage-operator/operator/new\">Crea Operatore</a></li>\r\n            <li><a routerLink=\"/manage-operator/operators\">Tutti</a></li>\r\n          </ul>\r\n        </li>\r\n     \r\n      </ul>\r\n      <!-- /.sidebar-menu -->\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>\r\n"

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  template works!\r\n</p>\r\n"

/***/ }),
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(195);


/***/ })
]),[675]);
//# sourceMappingURL=main.bundle.js.map