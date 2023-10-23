/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const message_module_1 = __webpack_require__(6);
const common_module_1 = __webpack_require__(29);
const group_module_1 = __webpack_require__(50);
const authentication_module_1 = __webpack_require__(56);
const user_module_1 = __webpack_require__(65);
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
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
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
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
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
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__(3);
const message_service_1 = __webpack_require__(7);
const common_module_1 = __webpack_require__(29);
const resolvers_1 = __webpack_require__(38);
const group_service_1 = __webpack_require__(43);
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
/* 7 */
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
const src_1 = __webpack_require__(8);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(13);
const src_2 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
const auth_service_1 = __webpack_require__(24);
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
    __param(0, (0, mongoose_1.InjectModel)(src_2.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(src_2.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_2.Group.name)),
    __param(3, (0, mongoose_1.InjectModel)(src_2.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object, typeof (_f = typeof src_1.AwsService !== "undefined" && src_1.AwsService) === "function" ? _f : Object])
], MessageService);


/***/ }),
/* 8 */
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
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsModule = void 0;
const common_1 = __webpack_require__(3);
const aws_service_1 = __webpack_require__(10);
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
/* 10 */
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
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(11);
const aws_sdk_1 = __webpack_require__(12);
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.client = new aws_sdk_1.S3({
            accessKeyId: configService.get('AWS_ACCESS_KEY'),
            secretAccessKey: configService.get('AWS_SECRET_KEY'),
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
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 14 */
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
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 15 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(17);
const mongoose_2 = __webpack_require__(13);
const constants_1 = __webpack_require__(18);
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
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 18 */
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
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 21 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(17);
const group_entity_1 = __webpack_require__(22);
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
/* 22 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(17);
const user_entity_1 = __webpack_require__(21);
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
/* 23 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(17);
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
/* 24 */
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
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(25);
const bcrypt = __webpack_require__(26);
const message_service_1 = __webpack_require__(7);
const config_1 = __webpack_require__(11);
const jwt_util_1 = __webpack_require__(27);
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
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode = exports.signJwt = exports.publicKey = exports.privateKey = void 0;
const jwt = __webpack_require__(28);
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
/* 28 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(3);
const graphql_module_1 = __webpack_require__(30);
const config_module_1 = __webpack_require__(32);
const mongo_module_1 = __webpack_require__(33);
const auth_module_1 = __webpack_require__(34);
const src_1 = __webpack_require__(8);
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.ConfigModule, graphql_module_1.GraphqlModule, mongo_module_1.MongoModule, auth_module_1.AuthModule, src_1.AwsModule],
        exports: [config_module_1.ConfigModule, graphql_module_1.GraphqlModule, mongo_module_1.MongoModule, auth_module_1.AuthModule, src_1.AwsModule],
    })
], CommonModule);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphqlModule = void 0;
const apollo_1 = __webpack_require__(31);
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(16);
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
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(11);
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
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(11);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
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
                    name: src_1.User.name,
                    schema: src_1.UserSchema,
                },
                {
                    name: src_1.Message.name,
                    schema: src_1.MessageSchema,
                },
                {
                    name: src_1.Group.name,
                    schema: src_1.GroupSchema,
                },
                {
                    name: src_1.GroupMember.name,
                    schema: src_1.GroupMemberSchema,
                },
            ]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], MongoModule);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const config_module_1 = __webpack_require__(32);
const message_module_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(25);
const config_1 = __webpack_require__(11);
const auth_service_1 = __webpack_require__(24);
const jwt_strategy_service_1 = __webpack_require__(35);
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
/* 35 */
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
const passport_1 = __webpack_require__(36);
const passport_jwt_1 = __webpack_require__(37);
const config_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const message_service_1 = __webpack_require__(7);
const jwt_util_1 = __webpack_require__(27);
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
/* 36 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 38 */
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
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 39 */
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
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(11);
const graphql_1 = __webpack_require__(16);
const src_1 = __webpack_require__(14);
const graphql_subscriptions_1 = __webpack_require__(40);
const jwt_auth_guard_1 = __webpack_require__(41);
const current_user_decorator_1 = __webpack_require__(42);
const group_service_1 = __webpack_require__(43);
const message_service_1 = __webpack_require__(7);
const input_1 = __webpack_require__(44);
const graphql_upload_ts_1 = __webpack_require__(48);
const src_2 = __webpack_require__(8);
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
    (0, graphql_1.Mutation)(() => src_1.Message),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('addNewMessageInput')),
    __param(2, (0, graphql_1.Args)('media', { type: () => graphql_upload_ts_1.GraphQLUpload, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _e : Object, typeof (_f = typeof input_1.AddNewMessageInput !== "undefined" && input_1.AddNewMessageInput) === "function" ? _f : Object, typeof (_g = typeof graphql_upload_ts_1.FileUpload !== "undefined" && graphql_upload_ts_1.FileUpload) === "function" ? _g : Object]),
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
    (0, graphql_1.Subscription)(() => src_1.Message, {
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
    (0, graphql_1.Subscription)(() => src_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "newUser", null);
__decorate([
    (0, graphql_1.Subscription)(() => src_1.User, {
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
    (0, graphql_1.Resolver)(() => src_1.User),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _a : Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof src_2.AwsService !== "undefined" && src_2.AwsService) === "function" ? _d : Object])
], MessageResolver);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("graphql-subscriptions");

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(36);
const graphql_1 = __webpack_require__(16);
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
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(16);
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const context = graphql_1.GqlExecutionContext.create(ctx);
    return context.getContext().req.user;
});


/***/ }),
/* 43 */
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
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
const auth_service_1 = __webpack_require__(24);
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
    __param(0, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(src_1.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_1.Group.name)),
    __param(3, (0, mongoose_1.InjectModel)(src_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], GroupService);


/***/ }),
/* 44 */
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
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 45 */
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
const graphql_1 = __webpack_require__(16);
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
/* 46 */
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
const graphql_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(18);
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
/* 47 */
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
const graphql_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(18);
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
/* 48 */
/***/ ((module) => {

module.exports = require("graphql-upload-ts");

/***/ }),
/* 49 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
let UsersMessagesResolver = class UsersMessagesResolver {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
};
exports.UsersMessagesResolver = UsersMessagesResolver;
exports.UsersMessagesResolver = UsersMessagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => src_1.User),
    __param(0, (0, mongoose_1.InjectModel)(src_1.Message.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersMessagesResolver);


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const common_1 = __webpack_require__(3);
const common_module_1 = __webpack_require__(29);
const group_resolver_1 = __webpack_require__(51);
const group_service_1 = __webpack_require__(43);
const group_user_resolver_1 = __webpack_require__(55);
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
/* 51 */
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
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(16);
const src_1 = __webpack_require__(14);
const jwt_auth_guard_1 = __webpack_require__(41);
const current_user_decorator_1 = __webpack_require__(42);
const group_service_1 = __webpack_require__(43);
const dto_1 = __webpack_require__(52);
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
    (0, graphql_1.Mutation)(() => src_1.Group),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('groupChatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _b : Object, typeof (_c = typeof dto_1.GroupChatInput !== "undefined" && dto_1.GroupChatInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupResolver.prototype, "createGroupChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [src_1.Group]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], GroupResolver.prototype, "getAllGroups", null);
exports.GroupResolver = GroupResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _a : Object])
], GroupResolver);


/***/ }),
/* 52 */
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
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 53 */
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
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
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
const graphql_1 = __webpack_require__(16);
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
/* 55 */
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
const graphql_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
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
    (0, graphql_1.ResolveField)('users', () => [src_1.User]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof src_1.Group !== "undefined" && src_1.Group) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], GroupUserResolver.prototype, "users", null);
exports.GroupUserResolver = GroupUserResolver = __decorate([
    (0, graphql_1.Resolver)(() => src_1.Group),
    __param(0, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(src_1.Group.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], GroupUserResolver);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationModule = void 0;
const common_1 = __webpack_require__(3);
const common_module_1 = __webpack_require__(29);
const authentication_service_1 = __webpack_require__(57);
const authenticaton_resolver_1 = __webpack_require__(58);
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
/* 57 */
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
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
const bcrypt_1 = __webpack_require__(26);
const auth_service_1 = __webpack_require__(24);
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
    __param(1, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(src_1.Group.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object])
], AuthenticationService);


/***/ }),
/* 58 */
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
const graphql_1 = __webpack_require__(16);
const src_1 = __webpack_require__(14);
const authentication_service_1 = __webpack_require__(57);
const config_1 = __webpack_require__(11);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(17);
const graphql_subscriptions_1 = __webpack_require__(40);
const dto_1 = __webpack_require__(59);
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
    (0, graphql_1.Mutation)(() => src_1.User),
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
    __param(2, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], AuthenticationResolver);


/***/ }),
/* 59 */
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
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 60 */
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
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 61 */
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
const graphql_1 = __webpack_require__(16);
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
/* 62 */
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
const graphql_1 = __webpack_require__(16);
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
/* 63 */
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
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
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
const graphql_1 = __webpack_require__(16);
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
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const common_module_1 = __webpack_require__(29);
const user_resolver_1 = __webpack_require__(66);
const user_service_1 = __webpack_require__(67);
const user_helper_1 = __webpack_require__(68);
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
/* 66 */
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
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(16);
const src_1 = __webpack_require__(14);
const jwt_auth_guard_1 = __webpack_require__(41);
const current_user_decorator_1 = __webpack_require__(42);
const user_service_1 = __webpack_require__(67);
const dto_1 = __webpack_require__(70);
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
    (0, graphql_1.Query)(() => src_1.User),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => src_1.User),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _c : Object, typeof (_d = typeof dto_1.UpdateUserInput !== "undefined" && dto_1.UpdateUserInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => src_1.GroupMember),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('inviteSomeoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof src_1.User !== "undefined" && src_1.User) === "function" ? _e : Object, typeof (_f = typeof dto_1.InviteSomeoneInput !== "undefined" && dto_1.InviteSomeoneInput) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "inviteSomeoneToGroup", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => src_1.User),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserResolver);


/***/ }),
/* 67 */
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
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(17);
const auth_service_1 = __webpack_require__(24);
const user_helper_1 = __webpack_require__(68);
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
    __param(0, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(src_1.Group.name)),
    __param(4, (0, mongoose_1.InjectModel)(src_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof user_helper_1.UserHelper !== "undefined" && user_helper_1.UserHelper) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _f : Object])
], UserService);


/***/ }),
/* 68 */
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
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(13);
const src_1 = __webpack_require__(14);
const libphonenumber_js_1 = __webpack_require__(69);
const mongoose_2 = __webpack_require__(17);
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
    __param(0, (0, mongoose_1.InjectModel)(src_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(src_1.Group.name)),
    __param(2, (0, mongoose_1.InjectModel)(src_1.GroupMember.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], UserHelper);


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("libphonenumber-js");

/***/ }),
/* 70 */
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
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
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
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 72 */
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
const graphql_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(18);
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
/* 73 */
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
const graphql_1 = __webpack_require__(16);
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
/* 74 */
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const cookieParser = __webpack_require__(74);
const graphql_upload_ts_1 = __webpack_require__(48);
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