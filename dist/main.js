/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const message_module_1 = __webpack_require__(/*! ./message/message.module */ "./src/message/message.module.ts");
const common_module_1 = __webpack_require__(/*! ./common/common.module */ "./src/common/common.module.ts");
const group_module_1 = __webpack_require__(/*! ./group/group.module */ "./src/group/group.module.ts");
const authentication_module_1 = __webpack_require__(/*! ./authentication/authentication.module */ "./src/authentication/authentication.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            message_module_1.MessageModule,
            common_module_1.CommonModule,
            group_module_1.GroupModule,
            authentication_module_1.AuthenticationModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/authentication/authentication.module.ts":
/*!*****************************************************!*\
  !*** ./src/authentication/authentication.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_module_1 = __webpack_require__(/*! src/common/common.module */ "./src/common/common.module.ts");
const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/authentication/authentication.service.ts");
const authenticaton_resolver_1 = __webpack_require__(/*! ./authenticaton.resolver */ "./src/authentication/authenticaton.resolver.ts");
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule],
        providers: [authenticaton_resolver_1.AuthenticationResolver, authentication_service_1.AuthenticationService],
        exports: [authentication_service_1.AuthenticationService],
    })
], AuthenticationModule);


/***/ }),

/***/ "./src/authentication/authentication.service.ts":
/*!******************************************************!*\
  !*** ./src/authentication/authentication.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const auth_service_1 = __webpack_require__(/*! src/common/auth/services/auth.service */ "./src/common/auth/services/auth.service.ts");
let AuthenticationService = class AuthenticationService {
    constructor(authService, userModel, messageModel, roomModel) {
        this.authService = authService;
        this.userModel = userModel;
        this.messageModel = messageModel;
        this.roomModel = roomModel;
    }
    async login(loginUserInput) {
        const user = await this.authService.validateUser(loginUserInput.email, loginUserInput.password);
        if (!user) {
            throw new common_1.BadRequestException('Email or password are invalid');
        }
        else {
            return this.authService.generateUserCredentials(user);
        }
    }
    async signup(signUpInput) {
        const isEmailExist = await this.userModel.findOne({
            email: signUpInput.email,
        });
        if (isEmailExist) {
            throw new common_1.ConflictException('This email already used!');
        }
        const saltOrRounds = 10;
        const password = signUpInput.password;
        signUpInput.password = await (0, bcrypt_1.hash)(password, saltOrRounds);
        const user = new this.userModel(signUpInput);
        return user.save();
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    __param(1, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object])
], AuthenticationService);


/***/ }),

/***/ "./src/authentication/authenticaton.resolver.ts":
/*!******************************************************!*\
  !*** ./src/authentication/authenticaton.resolver.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ "graphql-subscriptions");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const schema_1 = __webpack_require__(/*! src/common/schema */ "./src/common/schema/index.ts");
const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/authentication/authentication.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/authentication/dto/index.ts");
const pubSub = new graphql_subscriptions_1.PubSub();
let AuthenticationResolver = class AuthenticationResolver {
    constructor(authenticationService, configService, userModel) {
        this.authenticationService = authenticationService;
        this.configService = configService;
        this.userModel = userModel;
    }
    async signup(signUpUserInput) {
        const user = await this.authenticationService.signup(signUpUserInput);
        pubSub.publish('newUser', {
            newUser: user,
        });
        return user;
    }
    async login(loginUserInput) {
        const token = await this.authenticationService.login(loginUserInput);
        return token;
    }
};
exports.AuthenticationResolver = AuthenticationResolver;
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.User),
    __param(0, (0, graphql_1.Args)('signUpUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.SignUpUserInput !== "undefined" && dto_1.SignUpUserInput) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Mutation)(() => dto_1.LoginUserOutput),
    __param(0, (0, graphql_1.Args)('loginUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.LoginUserInput !== "undefined" && dto_1.LoginUserInput) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "login", null);
exports.AuthenticationResolver = AuthenticationResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], AuthenticationResolver);


/***/ }),

/***/ "./src/authentication/dto/index.ts":
/*!*****************************************!*\
  !*** ./src/authentication/dto/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./input */ "./src/authentication/dto/input/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./output */ "./src/authentication/dto/output/index.ts"), exports);


/***/ }),

/***/ "./src/authentication/dto/input/index.ts":
/*!***********************************************!*\
  !*** ./src/authentication/dto/input/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./signup-user.input */ "./src/authentication/dto/input/signup-user.input.ts"), exports);
__exportStar(__webpack_require__(/*! ./login-user.input */ "./src/authentication/dto/input/login-user.input.ts"), exports);


/***/ }),

/***/ "./src/authentication/dto/input/login-user.input.ts":
/*!**********************************************************!*\
  !*** ./src/authentication/dto/input/login-user.input.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let LoginUserInput = class LoginUserInput {
};
exports.LoginUserInput = LoginUserInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Email of the user' }),
    __metadata("design:type", String)
], LoginUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Password of the user' }),
    __metadata("design:type", String)
], LoginUserInput.prototype, "password", void 0);
exports.LoginUserInput = LoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], LoginUserInput);


/***/ }),

/***/ "./src/authentication/dto/input/signup-user.input.ts":
/*!***********************************************************!*\
  !*** ./src/authentication/dto/input/signup-user.input.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpUserInput = exports.Message = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Message of a user ' }),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Sender email' }),
    __metadata("design:type", String)
], Message.prototype, "senderMail", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Receiver email' }),
    __metadata("design:type", String)
], Message.prototype, "receiverMail", void 0);
exports.Message = Message = __decorate([
    (0, graphql_1.InputType)()
], Message);
let SignUpUserInput = class SignUpUserInput {
};
exports.SignUpUserInput = SignUpUserInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Email of the user' }),
    __metadata("design:type", String)
], SignUpUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Password of the user' }),
    __metadata("design:type", String)
], SignUpUserInput.prototype, "password", void 0);
exports.SignUpUserInput = SignUpUserInput = __decorate([
    (0, graphql_1.InputType)()
], SignUpUserInput);


/***/ }),

/***/ "./src/authentication/dto/output/index.ts":
/*!************************************************!*\
  !*** ./src/authentication/dto/output/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./login-user.output */ "./src/authentication/dto/output/login-user.output.ts"), exports);


/***/ }),

/***/ "./src/authentication/dto/output/login-user.output.ts":
/*!************************************************************!*\
  !*** ./src/authentication/dto/output/login-user.output.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserOutput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let LoginUserOutput = class LoginUserOutput {
};
exports.LoginUserOutput = LoginUserOutput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Generated access_token of the user' }),
    __metadata("design:type", String)
], LoginUserOutput.prototype, "access_token", void 0);
exports.LoginUserOutput = LoginUserOutput = __decorate([
    (0, graphql_1.ObjectType)()
], LoginUserOutput);


/***/ }),

/***/ "./src/common/auth.module.ts":
/*!***********************************!*\
  !*** ./src/common/auth.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_module_1 = __webpack_require__(/*! ./config.module */ "./src/common/config.module.ts");
const message_module_1 = __webpack_require__(/*! ../message/message.module */ "./src/message/message.module.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_service_1 = __webpack_require__(/*! ./auth/services/auth.service */ "./src/common/auth/services/auth.service.ts");
const jwt_strategy_service_1 = __webpack_require__(/*! ./auth/strategies/jwt.strategy.service */ "./src/common/auth/strategies/jwt.strategy.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule,
            (0, common_1.forwardRef)(() => message_module_1.MessageModule),
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_service_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/common/auth/guards/jwt-auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/common/auth/guards/jwt-auth.guard.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/common/auth/services/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/common/auth/services/auth.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const message_service_1 = __webpack_require__(/*! src/message/message.service */ "./src/message/message.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_util_1 = __webpack_require__(/*! ../../utils/jwt.util */ "./src/common/utils/jwt.util.ts");
let AuthService = class AuthService {
    constructor(messageService, configService, jwtTokenService) {
        this.messageService = messageService;
        this.configService = configService;
        this.jwtTokenService = jwtTokenService;
    }
    async validateUser(email, password) {
        const user = await this.messageService.findOneByEmail(email);
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                delete user.password;
                return user;
            }
        }
        return null;
    }
    async generateUserCredentials(user) {
        const payload = {
            email: user.email,
            sub: user._id,
        };
        return {
            access_token: (0, jwt_util_1.signJwt)(payload),
        };
    }
    async decodeToken(token) {
        if (!token)
            return null;
        try {
            const decoded = this.jwtTokenService.verify(token, {
                secret: this.configService.get('JWT_SECRET'),
            });
            return decoded;
        }
        catch (error) {
            console.error(`error`, error);
            return null;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => message_service_1.MessageService))),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./src/common/auth/strategies/jwt.strategy.service.ts":
/*!************************************************************!*\
  !*** ./src/common/auth/strategies/jwt.strategy.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const message_service_1 = __webpack_require__(/*! src/message/message.service */ "./src/message/message.service.ts");
const jwt_util_1 = __webpack_require__(/*! src/common/utils/jwt.util */ "./src/common/utils/jwt.util.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(configService, messageService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwt_util_1.publicKey,
            algorithms: ['RS256'],
        });
        this.configService = configService;
        this.messageService = messageService;
    }
    async validate(payload) {
        return this.messageService.findOneByEmail(payload.email);
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/common/aws.module.ts":
/*!**********************************!*\
  !*** ./src/common/aws.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const aws_service_1 = __webpack_require__(/*! ./aws/aws.service */ "./src/common/aws/aws.service.ts");
let AwsModule = class AwsModule {
};
exports.AwsModule = AwsModule;
exports.AwsModule = AwsModule = __decorate([
    (0, common_1.Module)({
        providers: [aws_service_1.AwsService],
        exports: [aws_service_1.AwsService],
    })
], AwsModule);


/***/ }),

/***/ "./src/common/aws/aws.service.ts":
/*!***************************************!*\
  !*** ./src/common/aws/aws.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.client = new aws_sdk_1.S3({
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS_SECRET_KEY_ID_ID'),
            region: configService.get('AWS_REGION'),
        });
        this.bucket = configService.get('AWS_BUCKET_NAME');
        this.s3Url = configService.get('AWS_S3_URL');
    }
    async uploadFileToS3(file, key, contentType) {
        const params = {
            Bucket: this.bucket,
            Key: key,
            Body: file,
            ContentType: contentType,
        };
        try {
            const url = await this.client.upload(params).promise();
            return url;
        }
        catch (error) {
            throw new Error(`Error uploading file to S3: ${error.message}`);
        }
    }
    getFullPath(path) {
        return `${this.s3Url}/${path}`;
    }
};
exports.AwsService = AwsService;
exports.AwsService = AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AwsService);


/***/ }),

/***/ "./src/common/common.module.ts":
/*!*************************************!*\
  !*** ./src/common/common.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_module_1 = __webpack_require__(/*! ./graphql.module */ "./src/common/graphql.module.ts");
const config_module_1 = __webpack_require__(/*! ./config.module */ "./src/common/config.module.ts");
const mongo_module_1 = __webpack_require__(/*! ./mongo.module */ "./src/common/mongo.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth.module */ "./src/common/auth.module.ts");
const aws_module_1 = __webpack_require__(/*! ./aws.module */ "./src/common/aws.module.ts");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.ConfigModule, graphql_module_1.GraphqlModule, mongo_module_1.MongoModule, auth_module_1.AuthModule, aws_module_1.AwsModule],
        exports: [config_module_1.ConfigModule, graphql_module_1.GraphqlModule, mongo_module_1.MongoModule, auth_module_1.AuthModule, aws_module_1.AwsModule],
    })
], CommonModule);


/***/ }),

/***/ "./src/common/config.module.ts":
/*!*************************************!*\
  !*** ./src/common/config.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let ConfigModule = class ConfigModule {
};
exports.ConfigModule = ConfigModule;
exports.ConfigModule = ConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
                isGlobal: true,
            }),
        ],
    })
], ConfigModule);


/***/ }),

/***/ "./src/common/constants/index.ts":
/*!***************************************!*\
  !*** ./src/common/constants/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.constant */ "./src/common/constants/user.constant.ts"), exports);
__exportStar(__webpack_require__(/*! ./message.constant */ "./src/common/constants/message.constant.ts"), exports);


/***/ }),

/***/ "./src/common/constants/message.constant.ts":
/*!**************************************************!*\
  !*** ./src/common/constants/message.constant.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/common/constants/user.constant.ts":
/*!***********************************************!*\
  !*** ./src/common/constants/user.constant.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/common/decorators/current-user.decorator.ts":
/*!*********************************************************!*\
  !*** ./src/common/decorators/current-user.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const context = graphql_1.GqlExecutionContext.create(ctx);
    return context.getContext().req.user;
});


/***/ }),

/***/ "./src/common/graphql.module.ts":
/*!**************************************!*\
  !*** ./src/common/graphql.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphqlModule = void 0;
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let GraphqlModule = class GraphqlModule {
};
exports.GraphqlModule = GraphqlModule;
exports.GraphqlModule = GraphqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: './schema.gql',
                driver: apollo_1.ApolloDriver,
                playground: true,
                installSubscriptionHandlers: true,
            }),
        ],
    })
], GraphqlModule);


/***/ }),

/***/ "./src/common/mongo.module.ts":
/*!************************************!*\
  !*** ./src/common/mongo.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
let MongoModule = class MongoModule {
};
exports.MongoModule = MongoModule;
exports.MongoModule = MongoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URL'),
                }),
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.User.name,
                    schema: schema_1.UserSchema,
                },
                {
                    name: schema_1.Message.name,
                    schema: schema_1.MessageSchema,
                },
                {
                    name: schema_1.Group.name,
                    schema: schema_1.GroupSchema,
                },
                {
                    name: schema_1.GroupMember.name,
                    schema: schema_1.GroupMemberSchema,
                },
            ]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], MongoModule);


/***/ }),

/***/ "./src/common/schema/group-member.entity.ts":
/*!**************************************************!*\
  !*** ./src/common/schema/group-member.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMemberSchema = exports.GroupMember = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let GroupMember = class GroupMember {
};
exports.GroupMember = GroupMember;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], GroupMember.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Id member' }),
    __metadata("design:type", String)
], GroupMember.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Id group' }),
    __metadata("design:type", String)
], GroupMember.prototype, "group_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => Boolean, { description: 'Identify a user is admin of a group' }),
    __metadata("design:type", Boolean)
], GroupMember.prototype, "is_admin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], GroupMember.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], GroupMember.prototype, "updated_at", void 0);
exports.GroupMember = GroupMember = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'group_members',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            currentTime: () => Math.floor(Date.now()),
        },
        versionKey: false,
    }),
    (0, graphql_1.ObjectType)('group_member')
], GroupMember);
exports.GroupMemberSchema = mongoose_1.SchemaFactory.createForClass(GroupMember);


/***/ }),

/***/ "./src/common/schema/group.entity.ts":
/*!*******************************************!*\
  !*** ./src/common/schema/group.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupSchema = exports.Group = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/schema/user.entity.ts");
let Group = class Group {
};
exports.Group = Group;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Group.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Group name' }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Group description' }),
    __metadata("design:type", String)
], Group.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User Id create a group' }),
    __metadata("design:type", String)
], Group.prototype, "create_by", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User], { nullable: true }),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Group.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Group.prototype, "updated_at", void 0);
exports.Group = Group = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'groups',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            currentTime: () => Math.floor(Date.now()),
        },
        versionKey: false,
    }),
    (0, graphql_1.ObjectType)('group')
], Group);
exports.GroupSchema = mongoose_1.SchemaFactory.createForClass(Group);


/***/ }),

/***/ "./src/common/schema/index.ts":
/*!************************************!*\
  !*** ./src/common/schema/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./message.entity */ "./src/common/schema/message.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.entity */ "./src/common/schema/user.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./group-member.entity */ "./src/common/schema/group-member.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./group.entity */ "./src/common/schema/group.entity.ts"), exports);


/***/ }),

/***/ "./src/common/schema/message.entity.ts":
/*!*********************************************!*\
  !*** ./src/common/schema/message.entity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageSchema = exports.Message = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const constants_1 = __webpack_require__(/*! src/common/constants */ "./src/common/constants/index.ts");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_b = typeof mongoose_1.Schema !== "undefined" && (_a = mongoose_1.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Message.prototype, "_id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Content of a message ', nullable: true }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, {
        description: 'Group id. If chat is 1:1 then group_id is null',
        nullable: true,
    }),
    __metadata("design:type", String)
], Message.prototype, "group_id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, {
        description: 'Message parent id use when a user reply a message of another user',
        nullable: true,
    }),
    __metadata("design:type", String)
], Message.prototype, "message_parent_id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Sender id' }),
    __metadata("design:type", String)
], Message.prototype, "sender_id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, {
        description: 'Receiver id. If chat in a group then recipient_id is null',
        nullable: true,
    }),
    __metadata("design:type", String)
], Message.prototype, "recipient_id", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string' }),
    (0, graphql_1.Field)(() => String, { description: 'Message type' }),
    __metadata("design:type", typeof (_c = typeof constants_1.MESSAGE_TYPE !== "undefined" && constants_1.MESSAGE_TYPE) === "function" ? _c : Object)
], Message.prototype, "message_type", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string' }),
    (0, graphql_1.Field)(() => String, { description: 'Message reply type' }),
    __metadata("design:type", typeof (_d = typeof constants_1.REPLY_TYPE !== "undefined" && constants_1.REPLY_TYPE) === "function" ? _d : Object)
], Message.prototype, "reply_type", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, {
        description: 'Media url. If message type is image/video',
    }),
    __metadata("design:type", String)
], Message.prototype, "media_url", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Message.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Message.prototype, "updated_at", void 0);
exports.Message = Message = __decorate([
    (0, mongoose_2.Schema)({
        collection: 'messages',
        versionKey: false,
    }),
    (0, graphql_1.ObjectType)('message')
], Message);
exports.MessageSchema = mongoose_2.SchemaFactory.createForClass(Message);


/***/ }),

/***/ "./src/common/schema/user.entity.ts":
/*!******************************************!*\
  !*** ./src/common/schema/user.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const group_entity_1 = __webpack_require__(/*! ./group.entity */ "./src/common/schema/group.entity.ts");
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'Nick name', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User normal name', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    (0, graphql_1.Field)(() => String, { description: 'User email' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User phone', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User address', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User language', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lang", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'User avatar', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => [group_entity_1.Group], { description: 'The groups that user belong to' }),
    __metadata("design:type", Array)
], User.prototype, "groups", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], User.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', default: () => Date.now() }),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], User.prototype, "updated_at", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'users',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            currentTime: () => Math.floor(Date.now()),
        },
        versionKey: false,
    }),
    (0, graphql_1.ObjectType)('user')
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./src/common/utils/jwt.util.ts":
/*!**************************************!*\
  !*** ./src/common/utils/jwt.util.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode = exports.signJwt = exports.publicKey = exports.privateKey = void 0;
const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
exports.privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAi+7opqOwGkDUHDuD5l75zMxprIjos1MdzrXvhJNbGCnMl0bh
AbSMoywFRtolD1de9vhGWNCGkfl/cRXMplTPxmdO7nnT6koPvbnqU8lLMbVMoZUN
zhxhuPGFWKAgfmueaqdByzDwvgse/0eUnjl1bqAHa6LLqX/V7ZJbHk372yvRfbLi
1h54IIeSU/8hK9cpJkhRwDjrCAw16trdD5z/3UWk/Wl7W1ul4zQUm9XdtlddAxN7
3NoVwdlCIAKg7bp4fEe3kZViiIt1zn+fkdD0PxWRrbcZnziSe6FU5QOufx0rxK7I
5T/gRHKB0vmb6v2lzmcPaRoIxHgcGGjqDi4vZQIDAQABAoIBAF9s6NLaxXjhxMQM
AgLTud3jeBzksGu5vpX8k/4AzxpHRvHSsBaNnWqY1nBeyu8PUf9xh+eBLIPXdQUV
LJ4xMA/I25bdFZqsLtffNOE2YEThsgRutR9dU3bfnWO2rvIHSdzJeqCqG0I+K0FC
+yJ7ZI2wK99HAUPxnV2JdQHRhHMNBzWi81k5dHyImYRRzdqUYFvEAzsem1RWy8dm
cHhd8jmarq+tA3B2nnOZanBTaNqFY0l+asx4VIc3IPD+QnGHDj8s2qXDa1+mGHq6
bY/2oyXKchvy0qGh9ebFOEqFnDhyazvJNPu6snBRX0shC2btLCOyymFNiTGN33vM
P92bkvECgYEA0WHebGg1461d7brCwMGt/cm2YIwxGI8JzgxJoEJqD0bkxWYTTclZ
Hb4DIpZxv+3mAqJ8AX599GjTOvumw0PmU4dyhligycLVBr2D8eNBbrZvuvBZui9r
iKdbvcfJvpcwQsUTrQnSdruzMpoF8g31aJo0U7dWBRXjE6ehFRFtks8CgYEAqxap
isZG5nzZL5RtmlXBivODw+M1RCuB73PIbyWaoFnQ2DMqWgjp0MmoMVFnXPbZtWRF
VeAj/T2Nts9++Ipz+36/Xoc2WUmWfkaDP9OEZCvAfIr5ntUpclnsvdCM9LStoMQZ
lKsy29OmIYhFxFmsF0GKEDHYqsOk3Abbsu3LN4sCgYEAjmlRnkxW8u905n/TfMV+
8RHkUNCph/mqApJK9YyWlKN0cGrYEF01lswpV7oZziAiBIK9c0q0oqs1mHWXXFJv
czq6A3R+kBxLRhVajAg09fdyESTu8nrUWhLyjCc6Kb6tXYyrsFLw6j8KSA2Io7Uo
yKexlYsqH7VeSH0IS8sZyvMCgYBiB38ni8puIFUVRRez2bUm17bFE7eekstFl3Ld
9I7vl+bpKg/3PKo0PoeHkpwGEU7W91gfB2m3nYBIogWfhT1Fee9Oy2yhpl97hQ2J
EboG52bINZ0nm/2+jrXuYMOTJr9hoVsC60Ed4dyL1BgdlD/dp2jjNJxv49/fTnKt
yECrVwKBgQCvyAGVWLkgTaP4f7Ut46UhzK61mPCiZnGzTa4gUhvEaXeC9vqjdRcD
o+pYIhojDFT15sx3/IB/3O3g33tp8rpHuHYDSzCdgCHVqf/dJ2NB2pp7wQg0CIqa
r6iNa0d5DAmZ6Oip8oTWDk0UTcTZARBW/CUvWkiJY4/XQwyn6IqDeQ==
-----END RSA PRIVATE KEY-----`;
exports.publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi+7opqOwGkDUHDuD5l75
zMxprIjos1MdzrXvhJNbGCnMl0bhAbSMoywFRtolD1de9vhGWNCGkfl/cRXMplTP
xmdO7nnT6koPvbnqU8lLMbVMoZUNzhxhuPGFWKAgfmueaqdByzDwvgse/0eUnjl1
bqAHa6LLqX/V7ZJbHk372yvRfbLi1h54IIeSU/8hK9cpJkhRwDjrCAw16trdD5z/
3UWk/Wl7W1ul4zQUm9XdtlddAxN73NoVwdlCIAKg7bp4fEe3kZViiIt1zn+fkdD0
PxWRrbcZnziSe6FU5QOufx0rxK7I5T/gRHKB0vmb6v2lzmcPaRoIxHgcGGjqDi4v
ZQIDAQAB
-----END PUBLIC KEY-----`;
function signJwt(payload) {
    return jwt.sign(payload, exports.privateKey, { algorithm: 'RS256' });
}
exports.signJwt = signJwt;
function decode(token) {
    if (!token)
        return null;
    try {
        const decoded = jwt.verify(token, exports.publicKey);
        return decoded;
    }
    catch (error) {
        console.error(`error`, error);
        return null;
    }
}
exports.decode = decode;


/***/ }),

/***/ "./src/group/dto/index.ts":
/*!********************************!*\
  !*** ./src/group/dto/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./input */ "./src/group/dto/input/index.ts"), exports);


/***/ }),

/***/ "./src/group/dto/input/group-chat.input.ts":
/*!*************************************************!*\
  !*** ./src/group/dto/input/group-chat.input.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupChatInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let GroupChatInput = class GroupChatInput {
};
exports.GroupChatInput = GroupChatInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group name' }),
    __metadata("design:type", String)
], GroupChatInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group description' }),
    __metadata("design:type", String)
], GroupChatInput.prototype, "description", void 0);
exports.GroupChatInput = GroupChatInput = __decorate([
    (0, graphql_1.InputType)()
], GroupChatInput);


/***/ }),

/***/ "./src/group/dto/input/index.ts":
/*!**************************************!*\
  !*** ./src/group/dto/input/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./group-chat.input */ "./src/group/dto/input/group-chat.input.ts"), exports);


/***/ }),

/***/ "./src/group/group-user.resolver.ts":
/*!******************************************!*\
  !*** ./src/group/group-user.resolver.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupUserResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let GroupUserResolver = class GroupUserResolver {
    constructor(userModel, groupModel, groupMemberModel) {
        this.userModel = userModel;
        this.groupModel = groupModel;
        this.groupMemberModel = groupMemberModel;
    }
    async users(group) {
        const userMembers = await this.groupMemberModel.find({
            group_id: group._id,
        });
        const userIds = userMembers.map((item) => item.user_id);
        console.log(userIds);
        const users = await this.userModel.find({
            _id: { $in: userIds },
        });
        return users;
    }
};
exports.GroupUserResolver = GroupUserResolver;
__decorate([
    (0, graphql_1.ResolveField)('users', () => [schema_1.User]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof schema_1.Group !== "undefined" && schema_1.Group) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], GroupUserResolver.prototype, "users", null);
exports.GroupUserResolver = GroupUserResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.Group),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], GroupUserResolver);


/***/ }),

/***/ "./src/group/group.module.ts":
/*!***********************************!*\
  !*** ./src/group/group.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_module_1 = __webpack_require__(/*! src/common/common.module */ "./src/common/common.module.ts");
const group_resolver_1 = __webpack_require__(/*! ./group.resolver */ "./src/group/group.resolver.ts");
const group_service_1 = __webpack_require__(/*! ./group.service */ "./src/group/group.service.ts");
const group_user_resolver_1 = __webpack_require__(/*! ./group-user.resolver */ "./src/group/group-user.resolver.ts");
let GroupModule = class GroupModule {
};
exports.GroupModule = GroupModule;
exports.GroupModule = GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule],
        providers: [group_resolver_1.GroupResolver, group_service_1.GroupService, group_user_resolver_1.GroupUserResolver],
        exports: [group_service_1.GroupService],
    })
], GroupModule);


/***/ }),

/***/ "./src/group/group.resolver.ts":
/*!*************************************!*\
  !*** ./src/group/group.resolver.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const jwt_auth_guard_1 = __webpack_require__(/*! src/common/auth/guards/jwt-auth.guard */ "./src/common/auth/guards/jwt-auth.guard.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/group/dto/index.ts");
const group_service_1 = __webpack_require__(/*! ./group.service */ "./src/group/group.service.ts");
let GroupResolver = class GroupResolver {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async createGroupChat(user, groupChatInput) {
        return await this.groupService.createGroupChat(user, groupChatInput);
    }
    async getAllGroups(user) {
        return await this.groupService.getGroupHasCurrentUser(user);
    }
};
exports.GroupResolver = GroupResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => schema_1.Group),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('groupChatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _b : Object, typeof (_c = typeof dto_1.GroupChatInput !== "undefined" && dto_1.GroupChatInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupResolver.prototype, "createGroupChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [schema_1.Group]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], GroupResolver.prototype, "getAllGroups", null);
exports.GroupResolver = GroupResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _a : Object])
], GroupResolver);


/***/ }),

/***/ "./src/group/group.service.ts":
/*!************************************!*\
  !*** ./src/group/group.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const auth_service_1 = __webpack_require__(/*! src/common/auth/services/auth.service */ "./src/common/auth/services/auth.service.ts");
let GroupService = class GroupService {
    constructor(userModel, messageModel, groupModel, groupMemberModel, authService) {
        this.userModel = userModel;
        this.messageModel = messageModel;
        this.groupModel = groupModel;
        this.groupMemberModel = groupMemberModel;
        this.authService = authService;
    }
    async createGroupChat(user, groupChatInput) {
        const groupNameExist = await this.groupModel.findOne({
            name: groupChatInput.name,
        });
        if (groupNameExist) {
            throw new common_1.ConflictException('This group name already exists');
        }
        const newGroup = await this.groupModel.create({
            name: groupChatInput.name.trim(),
            description: groupChatInput.description.trim(),
            create_by: user._id,
        });
        const newGroupMember = await this.groupMemberModel.create({
            user_id: user._id,
            group_id: newGroup._id,
            is_admin: true,
        });
        return newGroup;
    }
    async getAllGroup(user) {
        const groups = await this.groupModel.find();
        return groups;
    }
    async getGroupHasCurrentUser(currentUser) {
        console.log(currentUser);
        const groupMemberHasCurrentUser = await this.groupMemberModel.find({
            user_id: currentUser._id.toString(),
        });
        if (!this.getGroupHasCurrentUser) {
            throw new common_1.NotFoundException("This user don't belong to any thing group!");
        }
        const groupIds = groupMemberHasCurrentUser.map((item) => item.group_id);
        const groups = this.groupModel.find({
            _id: {
                $in: groupIds,
            },
        });
        return groups;
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], GroupService);


/***/ }),

/***/ "./src/message/dto/input/add-new-message.input.ts":
/*!********************************************************!*\
  !*** ./src/message/dto/input/add-new-message.input.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddNewMessageInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const constants_1 = __webpack_require__(/*! src/common/constants */ "./src/common/constants/index.ts");
let AddNewMessageInput = class AddNewMessageInput {
};
exports.AddNewMessageInput = AddNewMessageInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Content of a message', nullable: true }),
    __metadata("design:type", String)
], AddNewMessageInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'GroupId', nullable: true }),
    __metadata("design:type", String)
], AddNewMessageInput.prototype, "groupId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: 'Parent message id if it has',
        nullable: true,
    }),
    __metadata("design:type", String)
], AddNewMessageInput.prototype, "parentMessageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Recipient Id', nullable: true }),
    __metadata("design:type", String)
], AddNewMessageInput.prototype, "recipientId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Reply type' }),
    __metadata("design:type", typeof (_a = typeof constants_1.REPLY_TYPE !== "undefined" && constants_1.REPLY_TYPE) === "function" ? _a : Object)
], AddNewMessageInput.prototype, "replyType", void 0);
exports.AddNewMessageInput = AddNewMessageInput = __decorate([
    (0, graphql_1.InputType)()
], AddNewMessageInput);


/***/ }),

/***/ "./src/message/dto/input/create-message.input.ts":
/*!*******************************************************!*\
  !*** ./src/message/dto/input/create-message.input.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMessageInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const constants_1 = __webpack_require__(/*! src/common/constants */ "./src/common/constants/index.ts");
let CreateMessageInput = class CreateMessageInput {
};
exports.CreateMessageInput = CreateMessageInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Content of a message ' }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'GroupId', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "groupId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: 'Message parent id if it has',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "messageParentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Recipient Id', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "recipientId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Message type' }),
    __metadata("design:type", typeof (_a = typeof constants_1.MESSAGE_TYPE !== "undefined" && constants_1.MESSAGE_TYPE) === "function" ? _a : Object)
], CreateMessageInput.prototype, "messageType", void 0);
exports.CreateMessageInput = CreateMessageInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMessageInput);


/***/ }),

/***/ "./src/message/dto/input/index.ts":
/*!****************************************!*\
  !*** ./src/message/dto/input/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user-typing.input */ "./src/message/dto/input/user-typing.input.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-message.input */ "./src/message/dto/input/create-message.input.ts"), exports);
__exportStar(__webpack_require__(/*! ./add-new-message.input */ "./src/message/dto/input/add-new-message.input.ts"), exports);


/***/ }),

/***/ "./src/message/dto/input/user-typing.input.ts":
/*!****************************************************!*\
  !*** ./src/message/dto/input/user-typing.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTypingInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UserTypingInput = class UserTypingInput {
};
exports.UserTypingInput = UserTypingInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Email of the user' }),
    __metadata("design:type", String)
], UserTypingInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Receiver email' }),
    __metadata("design:type", String)
], UserTypingInput.prototype, "receiverMail", void 0);
exports.UserTypingInput = UserTypingInput = __decorate([
    (0, graphql_1.InputType)()
], UserTypingInput);


/***/ }),

/***/ "./src/message/message.module.ts":
/*!***************************************!*\
  !*** ./src/message/message.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const message_service_1 = __webpack_require__(/*! ./message.service */ "./src/message/message.service.ts");
const common_module_1 = __webpack_require__(/*! src/common/common.module */ "./src/common/common.module.ts");
const resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/message/resolvers/index.ts");
const group_service_1 = __webpack_require__(/*! src/group/group.service */ "./src/group/group.service.ts");
let MessageModule = class MessageModule {
};
exports.MessageModule = MessageModule;
exports.MessageModule = MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule],
        providers: [
            resolvers_1.MessageResolver,
            message_service_1.MessageService,
            resolvers_1.UsersMessagesResolver,
            group_service_1.GroupService,
        ],
        exports: [message_service_1.MessageService],
    })
], MessageModule);


/***/ }),

/***/ "./src/message/message.service.ts":
/*!****************************************!*\
  !*** ./src/message/message.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const auth_service_1 = __webpack_require__(/*! src/common/auth/services/auth.service */ "./src/common/auth/services/auth.service.ts");
const aws_service_1 = __webpack_require__(/*! src/common/aws/aws.service */ "./src/common/aws/aws.service.ts");
let MessageService = class MessageService {
    constructor(userModel, messageModel, groupModel, groupMemberModel, authService, awsService) {
        this.userModel = userModel;
        this.messageModel = messageModel;
        this.groupModel = groupModel;
        this.groupMemberModel = groupMemberModel;
        this.authService = authService;
        this.awsService = awsService;
    }
    async createMessage(user, createMessageInput) {
        const newMessage = await this.messageModel.create({
            content: createMessageInput.content,
            group_id: createMessageInput.groupId,
            message_type: createMessageInput.messageType,
            recipient_id: createMessageInput.recipientId,
        });
        return newMessage;
    }
    async findOneByEmail(email) {
        return this.userModel.findOne({
            email,
        });
    }
    findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        const user = await this.userModel.findOne({ _id: id }).exec();
        if (!user) {
            throw new common_1.NotFoundException(`User ${id} not found`);
        }
        return user;
    }
    async remove(id) {
        const user = await this.userModel.findOneAndDelete({ _id: id });
        if (!user) {
            throw new common_1.NotFoundException(`User ${id} not found`);
        }
        return user;
    }
    async createNewMessage(user, uploadMediaInput, path) {
        if (uploadMediaInput.recipientId === user._id.toString()) {
            throw new common_1.BadRequestException('User cannot send message for yourself');
        }
        if (!uploadMediaInput.groupId && !uploadMediaInput.recipientId) {
            throw new common_1.BadRequestException('Message has no the destination');
        }
        if (uploadMediaInput.groupId) {
            const isGroupHasCurrentUser = await this.groupMemberModel.findOne({
                group_id: uploadMediaInput.groupId,
                user_id: user._id,
            });
            if (!isGroupHasCurrentUser) {
                throw new common_1.BadRequestException(`This current user don\'t belong to a groupId: ${uploadMediaInput.groupId}`);
            }
        }
        if (uploadMediaInput.groupId &&
            uploadMediaInput.replyType === 'reply' &&
            uploadMediaInput.recipientId) {
            throw new common_1.BadRequestException(`Cannot send message to a specific user in group chat`);
        }
        if ((uploadMediaInput.replyType === 'quote' ||
            uploadMediaInput.replyType === 'thread') &&
            !uploadMediaInput.parentMessageId) {
            throw new common_1.BadRequestException('Quote message or thread message must has the parentId');
        }
        if (uploadMediaInput.replyType === 'reply' &&
            uploadMediaInput.parentMessageId) {
            throw new common_1.BadRequestException("Normal reply don't need the parentId");
        }
        const newMessage = await this.messageModel.create({
            content: uploadMediaInput.content || null,
            group_id: uploadMediaInput.groupId || null,
            message_parent_id: uploadMediaInput.parentMessageId || null,
            sender_id: user._id,
            recipient_id: uploadMediaInput.recipientId,
            message_type: path ? 'media' : 'text',
            media_url: path || null,
        });
        return newMessage;
    }
    async uploadMediaMessage(media) {
        const keyFile = `messages/${media.filename}`;
        try {
            const uploaded = await this.awsService.uploadFileToS3(media.createReadStream(), keyFile, media.mimetype);
            return uploaded.key;
        }
        catch (error) {
            throw new Error('Upload failed!');
        }
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object, typeof (_f = typeof aws_service_1.AwsService !== "undefined" && aws_service_1.AwsService) === "function" ? _f : Object])
], MessageService);


/***/ }),

/***/ "./src/message/resolvers/index.ts":
/*!****************************************!*\
  !*** ./src/message/resolvers/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./message.resolver */ "./src/message/resolvers/message.resolver.ts"), exports);
__exportStar(__webpack_require__(/*! ./users-messages.resolver */ "./src/message/resolvers/users-messages.resolver.ts"), exports);


/***/ }),

/***/ "./src/message/resolvers/message.resolver.ts":
/*!***************************************************!*\
  !*** ./src/message/resolvers/message.resolver.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ "graphql-subscriptions");
const graphql_upload_ts_1 = __webpack_require__(/*! graphql-upload-ts */ "graphql-upload-ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/common/auth/guards/jwt-auth.guard */ "./src/common/auth/guards/jwt-auth.guard.ts");
const aws_service_1 = __webpack_require__(/*! src/common/aws/aws.service */ "./src/common/aws/aws.service.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const schema_1 = __webpack_require__(/*! src/common/schema */ "./src/common/schema/index.ts");
const group_service_1 = __webpack_require__(/*! src/group/group.service */ "./src/group/group.service.ts");
const input_1 = __webpack_require__(/*! ../dto/input */ "./src/message/dto/input/index.ts");
const message_service_1 = __webpack_require__(/*! ../message.service */ "./src/message/message.service.ts");
const pubSub = new graphql_subscriptions_1.PubSub();
let MessageResolver = class MessageResolver {
    constructor(messageService, groupService, configService, awsService) {
        this.messageService = messageService;
        this.groupService = groupService;
        this.configService = configService;
        this.awsService = awsService;
    }
    async addNewMessage(user, addNewMessageInput, media) {
        console.log(media);
        if (media) {
            const path = await this.messageService.uploadMediaMessage(media);
            const newMessage = await this.messageService.createNewMessage(user, addNewMessageInput, path);
            pubSub.publish('newMessage', {
                newMessage,
            });
            return newMessage;
        }
        else {
            const newMessage = await this.messageService.createNewMessage(user, addNewMessageInput);
            pubSub.publish('newMessage', {
                newMessage,
            });
            return newMessage;
        }
    }
    userTyping(userTypingInput) {
        pubSub.publish('userTyping', {
            email: userTypingInput.email,
            receiverMail: userTypingInput.receiverMail,
        });
        return true;
    }
    newMessage(groupId) {
        return pubSub.asyncIterator('newMessage');
    }
    newUser() {
        return pubSub.asyncIterator('newUser');
    }
    currentUserTyping(receiverMail) {
        return pubSub.asyncIterator('currentUserTyping');
    }
};
exports.MessageResolver = MessageResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => schema_1.Message),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('addNewMessageInput')),
    __param(2, (0, graphql_1.Args)('media', { type: () => graphql_upload_ts_1.GraphQLUpload, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _e : Object, typeof (_f = typeof input_1.AddNewMessageInput !== "undefined" && input_1.AddNewMessageInput) === "function" ? _f : Object, typeof (_g = typeof graphql_upload_ts_1.FileUpload !== "undefined" && graphql_upload_ts_1.FileUpload) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "addNewMessage", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('userTypingInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof input_1.UserTypingInput !== "undefined" && input_1.UserTypingInput) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "userTyping", null);
__decorate([
    (0, graphql_1.Subscription)(() => schema_1.Message, {
        filter: (payload, variables) => {
            return payload.newMessage.group_id === variables.groupId;
        },
    }),
    __param(0, (0, graphql_1.Args)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "newMessage", null);
__decorate([
    (0, graphql_1.Subscription)(() => schema_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "newUser", null);
__decorate([
    (0, graphql_1.Subscription)(() => schema_1.User, {
        filter: (payload, variables) => {
            return payload.newMessage.receiverMail === variables.receiverMail;
        },
    }),
    __param(0, (0, graphql_1.Args)('receiverMail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "currentUserTyping", null);
exports.MessageResolver = MessageResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.User),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _a : Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof aws_service_1.AwsService !== "undefined" && aws_service_1.AwsService) === "function" ? _d : Object])
], MessageResolver);


/***/ }),

/***/ "./src/message/resolvers/users-messages.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/message/resolvers/users-messages.resolver.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersMessagesResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const schema_1 = __webpack_require__(/*! src/common/schema */ "./src/common/schema/index.ts");
let UsersMessagesResolver = class UsersMessagesResolver {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
};
exports.UsersMessagesResolver = UsersMessagesResolver;
exports.UsersMessagesResolver = UsersMessagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.User),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Message.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersMessagesResolver);


/***/ }),

/***/ "./src/user/dto/index.ts":
/*!*******************************!*\
  !*** ./src/user/dto/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./input */ "./src/user/dto/input/index.ts"), exports);


/***/ }),

/***/ "./src/user/dto/input/index.ts":
/*!*************************************!*\
  !*** ./src/user/dto/input/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-user.input */ "./src/user/dto/input/update-user.input.ts"), exports);
__exportStar(__webpack_require__(/*! ./invite-someone.input */ "./src/user/dto/input/invite-someone.input.ts"), exports);


/***/ }),

/***/ "./src/user/dto/input/invite-someone.input.ts":
/*!****************************************************!*\
  !*** ./src/user/dto/input/invite-someone.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InviteSomeoneInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let InviteSomeoneInput = class InviteSomeoneInput {
};
exports.InviteSomeoneInput = InviteSomeoneInput;
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: 'Another UserId that is invited by current user',
    }),
    __metadata("design:type", String)
], InviteSomeoneInput.prototype, "invitedUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: 'Group id that user is invited!',
    }),
    __metadata("design:type", String)
], InviteSomeoneInput.prototype, "willJoinGroupId", void 0);
exports.InviteSomeoneInput = InviteSomeoneInput = __decorate([
    (0, graphql_1.InputType)()
], InviteSomeoneInput);


/***/ }),

/***/ "./src/user/dto/input/update-user.input.ts":
/*!*************************************************!*\
  !*** ./src/user/dto/input/update-user.input.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const constants_1 = __webpack_require__(/*! src/common/constants */ "./src/common/constants/index.ts");
let UpdateUserInput = class UpdateUserInput {
};
exports.UpdateUserInput = UpdateUserInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Nick name', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'User name', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'User phone', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'User address', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'User language', nullable: true }),
    __metadata("design:type", typeof (_a = typeof constants_1.COUNTRY_CODE !== "undefined" && constants_1.COUNTRY_CODE) === "function" ? _a : Object)
], UpdateUserInput.prototype, "lang", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'User avatar', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "avatar", void 0);
exports.UpdateUserInput = UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);


/***/ }),

/***/ "./src/user/helpers/user.helper.ts":
/*!*****************************************!*\
  !*** ./src/user/helpers/user.helper.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserHelper = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! ../../common/schema */ "./src/common/schema/index.ts");
const libphonenumber_js_1 = __webpack_require__(/*! libphonenumber-js */ "libphonenumber-js");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let UserHelper = class UserHelper {
    constructor(userModel, groupModel, groupMemberModel) {
        this.userModel = userModel;
        this.groupModel = groupModel;
        this.groupMemberModel = groupMemberModel;
    }
    validatePhoneNumber(phoneNumber, countryCode) {
        try {
            const isValid = (0, libphonenumber_js_1.isValidPhoneNumber)(phoneNumber, countryCode);
            return isValid;
        }
        catch (e) {
            return false;
        }
    }
    async checkConditionsToInviteSome(currentUserId, invitedUserId, willJoinGroupId) {
        const [groupExist, isGroupHasCurrentUser, isInviteUserExistInGroup, isUserInvitedExist,] = await Promise.all([
            this.groupModel.findOne({
                _id: willJoinGroupId,
            }),
            this.groupMemberModel.findOne({
                user_id: currentUserId,
                group_id: willJoinGroupId,
            }),
            this.groupMemberModel.findOne({
                user_id: invitedUserId,
                group_id: willJoinGroupId,
            }),
            this.userModel.findOne({
                _id: invitedUserId,
            }),
        ]);
        if (!groupExist) {
            throw new common_1.BadRequestException(`This groupId: ${willJoinGroupId} is not exist!`);
        }
        if (!isUserInvitedExist) {
            throw new common_1.BadRequestException(`This invited userId: ${invitedUserId} is not exist!`);
        }
        if (!isGroupHasCurrentUser) {
            throw new common_1.BadRequestException(`This current user don\'t belong to groupId: ${willJoinGroupId}`);
        }
        if (isInviteUserExistInGroup) {
            throw new common_1.BadRequestException(`This invited user has already belong to groupId: ${willJoinGroupId}`);
        }
    }
};
exports.UserHelper = UserHelper;
exports.UserHelper = UserHelper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], UserHelper);


/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_module_1 = __webpack_require__(/*! src/common/common.module */ "./src/common/common.module.ts");
const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./src/user/user.resolver.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const user_helper_1 = __webpack_require__(/*! ./helpers/user.helper */ "./src/user/helpers/user.helper.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService, user_helper_1.UserHelper],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./src/user/user.resolver.ts":
/*!***********************************!*\
  !*** ./src/user/user.resolver.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/common/auth/guards/jwt-auth.guard */ "./src/common/auth/guards/jwt-auth.guard.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/user/dto/index.ts");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    getCurrentUser(user) {
        return this.userService.getCurrentUser(user);
    }
    updateProfile(user, updateUserInput) {
        return this.userService.updateProfile(user, updateUserInput);
    }
    inviteSomeoneToGroup(user, inviteSomeoneInput) {
        return this.userService.inviteSomeoneToGroup(user, inviteSomeoneInput);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => schema_1.User),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => schema_1.User),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _c : Object, typeof (_d = typeof dto_1.UpdateUserInput !== "undefined" && dto_1.UpdateUserInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => schema_1.GroupMember),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('inviteSomeoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof schema_1.User !== "undefined" && schema_1.User) === "function" ? _e : Object, typeof (_f = typeof dto_1.InviteSomeoneInput !== "undefined" && dto_1.InviteSomeoneInput) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "inviteSomeoneToGroup", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.User),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserResolver);


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const auth_service_1 = __webpack_require__(/*! src/common/auth/services/auth.service */ "./src/common/auth/services/auth.service.ts");
const schema_1 = __webpack_require__(/*! ../common/schema */ "./src/common/schema/index.ts");
const user_helper_1 = __webpack_require__(/*! ./helpers/user.helper */ "./src/user/helpers/user.helper.ts");
let UserService = class UserService {
    constructor(userModel, userHelper, messageModel, groupModel, groupMemberModel, authService) {
        this.userModel = userModel;
        this.userHelper = userHelper;
        this.messageModel = messageModel;
        this.groupModel = groupModel;
        this.groupMemberModel = groupMemberModel;
        this.authService = authService;
    }
    async updateProfile(user, updateUserInput) {
        const isValid = this.userHelper.validatePhoneNumber(updateUserInput.phone, updateUserInput.lang);
        if (!isValid) {
            throw new common_1.BadRequestException('This input is not correct!');
        }
        const updateUser = await this.userModel.findByIdAndUpdate({
            _id: user._id,
        }, {
            $set: {
                ...updateUserInput,
            },
        }, {
            new: true,
        });
        console.log(updateUser);
        return updateUser;
    }
    async getCurrentUser(user) {
        const currentUser = await this.userModel.findOne({
            _id: user._id,
        });
        return currentUser;
    }
    async inviteSomeoneToGroup(user, inviteSomeoneInput) {
        await this.userHelper.checkConditionsToInviteSome(user._id.toString(), inviteSomeoneInput.invitedUserId, inviteSomeoneInput.willJoinGroupId);
        const newGroupMember = await this.groupMemberModel.create({
            user_id: inviteSomeoneInput.invitedUserId,
            group_id: inviteSomeoneInput.willJoinGroupId,
            is_admin: false,
        });
        return newGroupMember;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.Group.name)),
    __param(4, (0, mongoose_1.InjectModel)(schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof user_helper_1.UserHelper !== "undefined" && user_helper_1.UserHelper) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _f : Object])
], UserService);


/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("graphql-subscriptions");

/***/ }),

/***/ "graphql-upload-ts":
/*!************************************!*\
  !*** external "graphql-upload-ts" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("graphql-upload-ts");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "libphonenumber-js":
/*!************************************!*\
  !*** external "libphonenumber-js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("libphonenumber-js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const graphql_upload_ts_1 = __webpack_require__(/*! graphql-upload-ts */ "graphql-upload-ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    };
    app.enableCors(options);
    app.use(cookieParser());
    app.use('/graphql', (0, graphql_upload_ts_1.graphqlUploadExpress)({ maxFileSize: 1000000, maxFiles: 10 }));
    await app.listen(5000);
}
bootstrap();

})();

/******/ })()
;