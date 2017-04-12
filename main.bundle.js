webpackJsonp([1,5],{

/***/ 287:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 287;


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(306);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(394),
        styles: [__webpack_require__(361)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__console_log_console_log_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rules_rules_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questions_questions_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cards_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipeModule__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_compare_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_log_service__ = __webpack_require__(32);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_7__console_log_console_log_component__["a" /* ConsoleLogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rules_rules_component__["a" /* RulesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__questions_questions_component__["a" /* QuestionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__pipes_pipeModule__["a" /* PipeModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_cards_service__["a" /* CardsService */], __WEBPACK_IMPORTED_MODULE_12__services_compare_service__["a" /* CompareService */], __WEBPACK_IMPORTED_MODULE_13__services_log_service__["a" /* LogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsoleLogComponent = (function () {
    function ConsoleLogComponent(logService) {
        this.logService = logService;
    }
    ConsoleLogComponent.prototype.ngOnInit = function () {
        this.logs = this.logService.getLogs();
    };
    return ConsoleLogComponent;
}());
ConsoleLogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-console-log',
        template: __webpack_require__(395),
        styles: [__webpack_require__(362)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]) === "function" && _a || Object])
], ConsoleLogComponent);

var _a;
//# sourceMappingURL=console-log.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionsPipes__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = PipeModule_1 = (function () {
    function PipeModule() {
    }
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: []
        };
    };
    return PipeModule;
}());
PipeModule = PipeModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__questionsPipes__["a" /* SecondQuestionPipe */], __WEBPACK_IMPORTED_MODULE_1__questionsPipes__["b" /* ThirdQuestionPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__questionsPipes__["a" /* SecondQuestionPipe */], __WEBPACK_IMPORTED_MODULE_1__questionsPipes__["b" /* ThirdQuestionPipe */]]
    })
], PipeModule);

var PipeModule_1;
//# sourceMappingURL=pipeModule.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cards_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_questionsPipes__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_questions_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_compare_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_log_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionsComponent = (function () {
    function QuestionsComponent(genratedCards, questionService, compareService, logService) {
        this.genratedCards = genratedCards;
        this.questionService = questionService;
        this.compareService = compareService;
        this.logService = logService;
        this.showThirdQuestion = false;
        this.showFouthAndFifthQuestion = false;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getCardsOrSumQuestions().then(function (x) { return _this.cardsOrSumDropDown = x; });
        this.questionService.getHowManyOrWhatQuestions().then(function (x) { return _this.howManyDropDown = x; });
        this.questionService.getAreOrQuestionMark().then(function (x) { return _this.areOrQuestion = x; });
        this.questionService.getOperations().then(function (x) { return _this.operation = x; });
        this.questionService.getCards().then(function (x) { return _this.card = x; });
        // this.genratedCards.getCards().then(x => this.cards = x);
    };
    QuestionsComponent.prototype.changeValue = function (ele, val) {
        // console.log("ele.value = " + ele.value + ", val = " + val);
        // ele.value = val;
    };
    QuestionsComponent.prototype.enableThirdQuestion = function (value) {
        console.log('enable Third Question: ' + value);
        switch (parseInt(value)) {
            case 1:
            case 3:
            case 4: {
                this.setShowOrHideQuestions(true, false);
                break;
            }
            case 2: {
                this.setShowOrHideQuestions(true, true);
                break;
            }
            case 0: {
                this.setShowOrHideQuestions(false, false);
                break;
            }
            default:
                this.setShowOrHideQuestions(false, false);
                break;
        }
    };
    QuestionsComponent.prototype.resetThirdQuestion = function (thirdQuestion) {
        console.log('reset');
        console.log(typeof thirdQuestion);
        if (typeof thirdQuestion !== 'undefined') {
            console.log('Third Question: ' + thirdQuestion.value);
            thirdQuestion.value = '';
        }
    };
    QuestionsComponent.prototype.setShowOrHideQuestions = function (thirdQuestion, fourthAndFifthQuestion) {
        this.showThirdQuestion = thirdQuestion;
        this.showFouthAndFifthQuestion = fourthAndFifthQuestion;
    };
    QuestionsComponent.prototype.askQuestion = function (q1, q2, q3, q4, q5) {
        /*this function should call two services
          one service should update the console log,
          the other should call the questionService,
          the question service will analyze the question,
          will call the CardsService and compare the results.
        */
        if (typeof q1 !== 'undefined' && typeof q2 !== 'undefined' && typeof q3 !== 'undefined') {
            if ((typeof q4 !== 'undefined' && typeof q5 !== 'undefined') && (q4.selectedOptions[0].innerText !== '' && q5.selectedOptions[0].innerText !== '')) {
                // console.log('Asking 5 Qs');
                this.logService.addQuestion(q1.selectedOptions[0].innerText + " " + q2.selectedOptions[0].innerText + " " + q3.selectedOptions[0].innerText + " " + q4.selectedOptions[0].innerText + " " + q5.selectedOptions[0].innerText + " ?");
                this.compareService.ask(q1, q2, q3, q4, q5);
            }
            else {
                // console.log('Asking 3 Qs');
                this.logService.addQuestion(q1.selectedOptions[0].innerText + " " + q2.selectedOptions[0].innerText + " " + q3.selectedOptions[0].innerText);
                this.compareService.ask(q1, q2, q3);
            }
        }
        else {
            // It means there isnt selections
            return;
        }
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-questions',
        template: __webpack_require__(396),
        styles: [__webpack_require__(363)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipes_questionsPipes__["a" /* SecondQuestionPipe */], __WEBPACK_IMPORTED_MODULE_3__services_questions_service__["a" /* QuestionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_questions_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_questions_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_compare_service__["a" /* CompareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_log_service__["a" /* LogService */]) === "function" && _d || Object])
], QuestionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cards_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_cards__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_mock_questions__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(cardsService) {
        this.cardsService = cardsService;
        this.cardOptions = __WEBPACK_IMPORTED_MODULE_3__objects_mock_questions__["b" /* cards */];
        this.shapes = __WEBPACK_IMPORTED_MODULE_3__objects_mock_questions__["c" /* cardsOrSumQuestions */].filter(function (x) { return x.value === 1; });
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.guessCards = [new __WEBPACK_IMPORTED_MODULE_2__objects_cards__["c" /* Card */], new __WEBPACK_IMPORTED_MODULE_2__objects_cards__["c" /* Card */], new __WEBPACK_IMPORTED_MODULE_2__objects_cards__["c" /* Card */], new __WEBPACK_IMPORTED_MODULE_2__objects_cards__["c" /* Card */], new __WEBPACK_IMPORTED_MODULE_2__objects_cards__["c" /* Card */]];
    };
    ResultComponent.prototype.guess = function (s1, n1, s2, n2, s3, n3, s4, n4, s5, n5) {
        // console.log(this.guessCards);
        this.guessCards = [{
                number: n1,
                shape: s1
            }, {
                number: n2,
                shape: s2
            }, {
                number: n3,
                shape: s3
            }, {
                number: n4,
                shape: s4
            }, {
                number: n5,
                shape: s5
            }];
        console.log(this.guessCards);
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__(397),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]) === "function" && _a || Object])
], ResultComponent);

var _a;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    return RulesComponent;
}());
RulesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-rules',
        template: __webpack_require__(398),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [])
], RulesComponent);

//# sourceMappingURL=rules.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {} from '../objects/mock-questions';
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.getAreOrQuestionMark = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__["a" /* areOrQuestionMark */]);
    };
    QuestionService.prototype.getCards = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__["b" /* cards */]);
    };
    QuestionService.prototype.getCardsOrSumQuestions = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__["c" /* cardsOrSumQuestions */]);
    };
    QuestionService.prototype.getHowManyOrWhatQuestions = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__["d" /* howManyOrWhatQuestions */]);
    };
    QuestionService.prototype.getOperations = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__objects_mock_questions__["e" /* operations */]);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], QuestionService);

//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ 306:
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_cards__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsService = (function () {
    function CardsService() {
        this.didGenerateCards = false;
        this.generatedCards = [];
    }
    CardsService.prototype.getCards = function () {
        if (!this.didGenerateCards) {
            var randomCards = [];
            var isThere_1 = false;
            var _loop_1 = function () {
                var card = this_1.generateRandomCard();
                randomCards.map(function (x) {
                    if (x === card) {
                        isThere_1 = true;
                    }
                });
                if (!isThere_1) {
                    randomCards.push(card);
                }
                isThere_1 = false;
            };
            var this_1 = this;
            while (randomCards.length < 5) {
                _loop_1();
            }
            this.didGenerateCards = true;
            this.generatedCards = randomCards;
            return Promise.resolve(randomCards);
        }
        else {
            return Promise.resolve(this.generatedCards);
        }
    };
    CardsService.prototype.getCardsContainingStrings = function () {
        return Promise.resolve(this.generatedCards.map(function (x) {
            x.color = __WEBPACK_IMPORTED_MODULE_0__objects_cards__["b" /* Color */][x.color];
            x.shape = __WEBPACK_IMPORTED_MODULE_0__objects_cards__["a" /* Shapes */][x.shape];
            return x;
        }));
    };
    CardsService.prototype.generateRandomCard = function () {
        var randomCard = { number: 1, shape: 2, color: 1 };
        randomCard.number = this.randomIntFromInterval(1, 13);
        randomCard.shape = this.randomIntFromInterval(1, 4);
        randomCard.color = this.randomIntFromInterval(1, 2);
        // console.log(randomCard.number + " " + randomCard.shape + " " + randomCard.color);
        return randomCard;
    };
    CardsService.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return CardsService;
}());
CardsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CardsService);

//# sourceMappingURL=cards.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogService = (function () {
    function LogService() {
        this.log = [{
                answer: '',
                question: ''
            }];
        this.question = '';
    }
    LogService.prototype.getLogs = function () {
        return this.log;
    };
    LogService.prototype.addQuestion = function (q) {
        this.question = q;
    };
    LogService.prototype.addAnswer = function (a) {
        this.log.unshift({
            answer: a,
            question: this.question
        });
        // this.log.unshift(a);
        // this.log.unshift(this.question);
    };
    return LogService;
}());
LogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LogService);

//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "body {\n    padding-bottom: 40px;\n    padding-top: 60px;\n}\n\n.sidebar-nav-fixed {\n\twidth:14%;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".addPadding {\n    padding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 106,
	"./af.js": 106,
	"./ar": 113,
	"./ar-dz": 107,
	"./ar-dz.js": 107,
	"./ar-kw": 108,
	"./ar-kw.js": 108,
	"./ar-ly": 109,
	"./ar-ly.js": 109,
	"./ar-ma": 110,
	"./ar-ma.js": 110,
	"./ar-sa": 111,
	"./ar-sa.js": 111,
	"./ar-tn": 112,
	"./ar-tn.js": 112,
	"./ar.js": 113,
	"./az": 114,
	"./az.js": 114,
	"./be": 115,
	"./be.js": 115,
	"./bg": 116,
	"./bg.js": 116,
	"./bn": 117,
	"./bn.js": 117,
	"./bo": 118,
	"./bo.js": 118,
	"./br": 119,
	"./br.js": 119,
	"./bs": 120,
	"./bs.js": 120,
	"./ca": 121,
	"./ca.js": 121,
	"./cs": 122,
	"./cs.js": 122,
	"./cv": 123,
	"./cv.js": 123,
	"./cy": 124,
	"./cy.js": 124,
	"./da": 125,
	"./da.js": 125,
	"./de": 128,
	"./de-at": 126,
	"./de-at.js": 126,
	"./de-ch": 127,
	"./de-ch.js": 127,
	"./de.js": 128,
	"./dv": 129,
	"./dv.js": 129,
	"./el": 130,
	"./el.js": 130,
	"./en-au": 131,
	"./en-au.js": 131,
	"./en-ca": 132,
	"./en-ca.js": 132,
	"./en-gb": 133,
	"./en-gb.js": 133,
	"./en-ie": 134,
	"./en-ie.js": 134,
	"./en-nz": 135,
	"./en-nz.js": 135,
	"./eo": 136,
	"./eo.js": 136,
	"./es": 138,
	"./es-do": 137,
	"./es-do.js": 137,
	"./es.js": 138,
	"./et": 139,
	"./et.js": 139,
	"./eu": 140,
	"./eu.js": 140,
	"./fa": 141,
	"./fa.js": 141,
	"./fi": 142,
	"./fi.js": 142,
	"./fo": 143,
	"./fo.js": 143,
	"./fr": 146,
	"./fr-ca": 144,
	"./fr-ca.js": 144,
	"./fr-ch": 145,
	"./fr-ch.js": 145,
	"./fr.js": 146,
	"./fy": 147,
	"./fy.js": 147,
	"./gd": 148,
	"./gd.js": 148,
	"./gl": 149,
	"./gl.js": 149,
	"./gom-latn": 150,
	"./gom-latn.js": 150,
	"./he": 151,
	"./he.js": 151,
	"./hi": 152,
	"./hi.js": 152,
	"./hr": 153,
	"./hr.js": 153,
	"./hu": 154,
	"./hu.js": 154,
	"./hy-am": 155,
	"./hy-am.js": 155,
	"./id": 156,
	"./id.js": 156,
	"./is": 157,
	"./is.js": 157,
	"./it": 158,
	"./it.js": 158,
	"./ja": 159,
	"./ja.js": 159,
	"./jv": 160,
	"./jv.js": 160,
	"./ka": 161,
	"./ka.js": 161,
	"./kk": 162,
	"./kk.js": 162,
	"./km": 163,
	"./km.js": 163,
	"./kn": 164,
	"./kn.js": 164,
	"./ko": 165,
	"./ko.js": 165,
	"./ky": 166,
	"./ky.js": 166,
	"./lb": 167,
	"./lb.js": 167,
	"./lo": 168,
	"./lo.js": 168,
	"./lt": 169,
	"./lt.js": 169,
	"./lv": 170,
	"./lv.js": 170,
	"./me": 171,
	"./me.js": 171,
	"./mi": 172,
	"./mi.js": 172,
	"./mk": 173,
	"./mk.js": 173,
	"./ml": 174,
	"./ml.js": 174,
	"./mr": 175,
	"./mr.js": 175,
	"./ms": 177,
	"./ms-my": 176,
	"./ms-my.js": 176,
	"./ms.js": 177,
	"./my": 178,
	"./my.js": 178,
	"./nb": 179,
	"./nb.js": 179,
	"./ne": 180,
	"./ne.js": 180,
	"./nl": 182,
	"./nl-be": 181,
	"./nl-be.js": 181,
	"./nl.js": 182,
	"./nn": 183,
	"./nn.js": 183,
	"./pa-in": 184,
	"./pa-in.js": 184,
	"./pl": 185,
	"./pl.js": 185,
	"./pt": 187,
	"./pt-br": 186,
	"./pt-br.js": 186,
	"./pt.js": 187,
	"./ro": 188,
	"./ro.js": 188,
	"./ru": 189,
	"./ru.js": 189,
	"./sd": 190,
	"./sd.js": 190,
	"./se": 191,
	"./se.js": 191,
	"./si": 192,
	"./si.js": 192,
	"./sk": 193,
	"./sk.js": 193,
	"./sl": 194,
	"./sl.js": 194,
	"./sq": 195,
	"./sq.js": 195,
	"./sr": 197,
	"./sr-cyrl": 196,
	"./sr-cyrl.js": 196,
	"./sr.js": 197,
	"./ss": 198,
	"./ss.js": 198,
	"./sv": 199,
	"./sv.js": 199,
	"./sw": 200,
	"./sw.js": 200,
	"./ta": 201,
	"./ta.js": 201,
	"./te": 202,
	"./te.js": 202,
	"./tet": 203,
	"./tet.js": 203,
	"./th": 204,
	"./th.js": 204,
	"./tl-ph": 205,
	"./tl-ph.js": 205,
	"./tlh": 206,
	"./tlh.js": 206,
	"./tr": 207,
	"./tr.js": 207,
	"./tzl": 208,
	"./tzl.js": 208,
	"./tzm": 210,
	"./tzm-latn": 209,
	"./tzm-latn.js": 209,
	"./tzm.js": 210,
	"./uk": 211,
	"./uk.js": 211,
	"./ur": 212,
	"./ur.js": 212,
	"./uz": 214,
	"./uz-latn": 213,
	"./uz-latn.js": 213,
	"./uz.js": 214,
	"./vi": 215,
	"./vi.js": 215,
	"./x-pseudo": 216,
	"./x-pseudo.js": 216,
	"./yo": 217,
	"./yo.js": 217,
	"./zh-cn": 218,
	"./zh-cn.js": 218,
	"./zh-hk": 219,
	"./zh-hk.js": 219,
	"./zh-tw": 220,
	"./zh-tw.js": 220
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 367;


/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"sidebar-nav-fixed\" style=\"position: fixed; left: 0px;\">\n          <div class=\"well\">\n            <ul class=\"nav \">\n              <li class=\"nav-header\">Sidebar</li>\n              <li class=\"active\"><a href=\"#\">Link</a>\n              </li>\n\n            </ul>\n          </div>\n          <!--/.well -->\n        </div>\n        <!--/sidebar-nav-fixed -->\n      </div>\n      <!--/span-->\n      <div class=\"col-md-6\">\n        <div class=\"centered text-center\">\n          <h1>\n            Recruiting Card Game\n          </h1>\n          <app-result></app-result>\n        </div>\n\n      </div>\n      <!--/span-->\n      <div class=\"col-md-3\">\n        <div class=\"sidebar-nav-fixed\" style=\"position: fixed; right: 0px;\">\n          <app-rules></app-rules>\n          <!--/.well -->\n        </div>\n        <!--/sidebar-nav-fixed -->\n      </div>\n      <!--/span-->\n    </div>\n    <!--/row-->\n\n    <footer>\n      <app-console-log class='footer'></app-console-log>\n      <app-questions class='footer'></app-questions>\n    </footer>\n  </div>\n</div>\n<!--/.fluid-container-->"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "\n<!--<p>console</p>\n<div>\n  <footer class=\"navbar-fixed-bottom\">\n  <div *ngFor='let log of logs'>\n    <p>{{log}}</p>\n  </div>\n  </footer>\n</div>  -->\n\n<footer class=\"navbar-fixed-bottom\" style=\"bottom: 30px; height: 50px; overflow-y: auto;\">\n  <div class=\"text-center\">\n    <div class=\"row\" style=\"\n          padding-bottom: 10px;\n          padding-top: 10px;\n          background-color: yellow;\n          min-height: 35px;\">\n      <div *ngFor='let log of logs'>\n    <p>{{log.question}}    {{log.answer}}</p>\n  </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<footer class=\"navbar-fixed-bottom\">\n  <div class=\"text-center\">\n    <div class=\"row\" style=\"\n          padding-bottom: 10px;\n          padding-top: 10px;\n          background-color: lightblue;\">\n      <select #firstQuestion class=\"selectpicker\" data-style=\"btn-primary\">\n      <option *ngFor='let option of howManyDropDown' value=\"{{option.value}}\">{{option.q}}</option>\n      </select>\n      <select #secondQuestion>\n      <option *ngFor='let cardOrSum of cardsOrSumDropDown' value='{{cardOrSum.value}}' [attr.selectedShape]='cardOrSum.selectedShape'>{{cardOrSum.q}}</option>\n  </select>\n      <select #thirdQuestion>\n    <option  *ngFor='let areOrQues of areOrQuestion' value={{areOrQues.value}} hello=\"hello\">{{areOrQues.q}}</option>\n  </select>\n      <select #forthQuestion>\n    <option  *ngFor='let operat of operation' value='{{operat.value}}' >{{operat.q}}</option>\n  </select>\n      <select #fifthQuestion>\n    <option *ngFor='let cd of card' value='{{cd.value}}'>{{cd.q}}</option>\n  </select>\n      <button (click)='askQuestion(firstQuestion, secondQuestion, thirdQuestion, forthQuestion, fifthQuestion)'>Ask</button>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<div class=\"centered text-center\">\n  <div style=\"width: 100px; display: inline-block;\">\n    <div class=\"card addPadding\" style=\"width: 100px; display: block\">\n      <img class=\"card-img-top\" src=\"../../assets/image002.jpg\" alt=\"Card image cap\" style=\"width: 100px;\">\n      <div class=\"card-block\">\n        <select #shape1>\n      <option *ngFor='let shapeOp of shapes' value='{{shapeOp.value}}' [attr.selectedShape]='shapeOp.selectedShape'>{{shapeOp.q}}</option>\n    </select>\n        <select #number1 style=\"width: 90px;\">\n      <option *ngFor=\"let numberOp of cardOptions\" value='{{numberOp.value}}'>{{numberOp.q}}</option>\n    </select>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 100px; display: inline-block;\">\n    <div class=\"card addPadding\" style=\"width: 100px; display: block\">\n      <img class=\"card-img-top\" src=\"../../assets/image002.jpg\" alt=\"Card image cap\" style=\"width: 100px;\">\n      <div class=\"card-block\">\n        <select #shape2>\n      <option *ngFor='let shapeOp of shapes' value='{{shapeOp.value}}' [attr.selectedShape]='shapeOp.selectedShape'>{{shapeOp.q}}</option>\n    </select>\n        <select #number2 style=\"width: 90px;\">\n      <option *ngFor=\"let numberOp of cardOptions\" value='{{numberOp.value}}'>{{numberOp.q}}</option>\n    </select>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 100px; display: inline-block;\">\n    <div class=\"card addPadding\" style=\"width: 100px; display: block\">\n      <img class=\"card-img-top\" src=\"../../assets/image002.jpg\" alt=\"Card image cap\" style=\"width: 100px;\">\n      <div class=\"card-block\">\n        <select #shape3>\n      <option *ngFor='let shapeOp of shapes' value='{{shapeOp.value}}' [attr.selectedShape]='shapeOp.selectedShape'>{{shapeOp.q}}</option>\n    </select>\n        <select #number3 style=\"width: 90px;\">\n      <option *ngFor=\"let numberOp of cardOptions\" value='{{numberOp.value}}'>{{numberOp.q}}</option>\n    </select>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 100px; display: inline-block;\">\n    <div class=\"card addPadding\" style=\"width: 100px; display: block\">\n      <img class=\"card-img-top\" src=\"../../assets/image002.jpg\" alt=\"Card image cap\" style=\"width: 100px;\">\n      <div class=\"card-block\">\n        <select #shape4>\n      <option *ngFor='let shapeOp of shapes' value='{{shapeOp.value}}' [attr.selectedShape]='shapeOp.selectedShape'>{{shapeOp.q}}</option>\n    </select>\n        <select #number4 style=\"width: 90px;\">\n      <option *ngFor=\"let numberOp of cardOptions\" value='{{numberOp.value}}'>{{numberOp.q}}</option>\n    </select>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 100px; display: inline-block;\">\n    <div class=\"card addPadding\" style=\"width: 100px; display: block\">\n      <img class=\"card-img-top\" src=\"../../assets/image002.jpg\" alt=\"Card image cap\" style=\"width: 100px;\">\n      <div class=\"card-block\">\n        <select #shape5>\n      <option *ngFor='let shapeOp of shapes' value='{{shapeOp.value}}' [attr.selectedShape]='shapeOp.selectedShape'>{{shapeOp.q}}</option>\n    </select>\n        <select #number5 style=\"width: 90px;\">\n      <option *ngFor=\"let numberOp of cardOptions\" value='{{numberOp.value}}'>{{numberOp.q}}</option>\n    </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"centered text-center\">\n    <button (click)='guess(shape1.selectedOptions[0].getAttribute(\"selectedshape\"), number1.selectedOptions[0].value, shape2.selectedOptions[0].getAttribute(\"selectedshape\"), number2.selectedOptions[0].value, shape3.selectedOptions[0].getAttribute(\"selectedshape\"), number3.selectedOptions[0].value, shape4.selectedOptions[0].getAttribute(\"selectedshape\"), number4.selectedOptions[0].value, shape5.selectedOptions[0].getAttribute(\"selectedshape\"), number5.selectedOptions[0].value)'>Guess</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <ul class=\"nav \">\n    <li class=\"nav-header\">Sidebar</li>\n    <li class=\"active\"><a href=\"#\">Link</a>\n    </li>\n\n  </ul>\n</div>\n<!--/.well -->"

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Card; });
/* unused harmony export CardNumbers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Color; });
var Card = (function () {
    function Card() {
        this.number = CardNumbers.Ace;
        this.shape = Shapes.Spades;
        this.color = Color.Red;
    }
    return Card;
}());

var CardNumbers;
(function (CardNumbers) {
    CardNumbers[CardNumbers["Ace"] = 1] = "Ace";
    CardNumbers[CardNumbers["Jack"] = 11] = "Jack";
    CardNumbers[CardNumbers["Queen"] = 12] = "Queen";
    CardNumbers[CardNumbers["King"] = 13] = "King";
})(CardNumbers || (CardNumbers = {}));
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Clubs"] = 1] = "Clubs";
    Shapes[Shapes["Hearts"] = 2] = "Hearts";
    Shapes[Shapes["Diamonds"] = 3] = "Diamonds";
    Shapes[Shapes["Spades"] = 4] = "Spades";
})(Shapes || (Shapes = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return howManyOrWhatQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cardsOrSumQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areOrQuestionMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return operations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
var howManyOrWhatQuestions = [
    { 'value': 0, 'q': '' },
    { 'value': 1, 'q': 'How many' },
    { 'value': 2, 'q': 'What is the' }
];
var cardsOrSumQuestions = [
    { 'value': 0, 'q': '' },
    { 'value': 1, 'q': 'Clubs', 'selectedShape': 1 },
    { 'value': 1, 'q': 'Diamonds', 'selectedShape': 2 },
    { 'value': 1, 'q': 'Hearts', 'selectedShape': 3 },
    { 'value': 1, 'q': 'Spades', 'selectedShape': 4 },
    { 'value': 2, 'q': 'Cards' },
    { 'value': 4, 'q': 'Red Cards' },
    { 'value': 5, 'q': 'Black Cards' },
    { 'value': 6, 'q': 'Face Cards' },
    { 'value': 7, 'q': 'Even Value Cards' },
    { 'value': 8, 'q': 'Odd Value Cards' },
    { 'value': 3, 'q': 'Product' },
    { 'value': 3, 'q': 'Sum' }
];
var areOrQuestionMark = [
    { 'value': 0, 'q': '' },
    { 'value': 1, 'q': '?' },
    { 'value': 2, 'q': 'are' },
    { 'value': 3, 'q': 'of the cards?' }
];
var operations = [
    { 'value': 0, 'q': '' },
    { 'value': 1, 'q': '>=' },
    { 'value': 2, 'q': '>' },
    { 'value': 3, 'q': '=' },
    { 'value': 4, 'q': '<' },
    { 'value': 5, 'q': '<=' }
];
var cards = [
    { 'value': 0, 'q': '' },
    { 'value': 1, 'q': 'A' },
    { 'value': 2, 'q': '2' },
    { 'value': 3, 'q': '3' },
    { 'value': 4, 'q': '4' },
    { 'value': 5, 'q': '5' },
    { 'value': 6, 'q': '6' },
    { 'value': 7, 'q': '7' },
    { 'value': 8, 'q': '8' },
    { 'value': 9, 'q': '9' },
    { 'value': 10, 'q': '10' },
    { 'value': 11, 'q': 'Jack' },
    { 'value': 12, 'q': 'Queen' },
    { 'value': 13, 'q': 'King' }
];
//# sourceMappingURL=mock-questions.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondQuestionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThirdQuestionPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondQuestionPipe = (function () {
    function SecondQuestionPipe() {
    }
    SecondQuestionPipe.prototype.transform = function (ele, firstQuestionValue) {
        if (firstQuestionValue === void 0) { firstQuestionValue = '1'; }
        if (typeof ele === 'undefined') {
            // console.log('ele: ' + ele);
            return ele;
        }
        switch (firstQuestionValue) {
            case '1':
                // console.log('SecondQuestionPipe case 1');
                return ele.filter(function (item) {
                    return (item.value === 1 || item.value === 4 || item.value === 2 || item.value === 0);
                });
            case '2':
                // console.log('SecondQuestionPipe case 2');
                return ele.filter(function (item) { return item.value === 3 || item.value === 0; });
            default:
                // console.log('default');
                return ele;
        }
    };
    return SecondQuestionPipe;
}());
SecondQuestionPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
        name: 'secondQuestionFilter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SecondQuestionPipe);

var ThirdQuestionPipe = (function () {
    function ThirdQuestionPipe() {
    }
    ThirdQuestionPipe.prototype.transform = function (ele, secondQuestionValue) {
        if (secondQuestionValue === void 0) { secondQuestionValue = '1'; }
        if (typeof ele === 'undefined') {
            console.log('ele: ' + ele);
            return ele;
        }
        switch (secondQuestionValue) {
            case '1':
            case '4':
                // console.log('ThirdQuestionPipe case 1 OR 4');
                return ele.filter(function (item) {
                    return (item.value === 1 || item.value === 2 || item.value === 0);
                });
            case '2':
                // console.log('ThirdQuestionPipe case 2');
                return ele.filter(function (item) { return item.value === 2 || item.value === 0; });
            case '3':
                // console.log('ThirdQuestionPipe case 3');
                return ele.filter(function (item) { return item.value === 3 || item.value === 0; });
            default:
                // console.log('default');
                return ele;
        }
    };
    return ThirdQuestionPipe;
}());
ThirdQuestionPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
        name: 'thirdQuestionFilter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ThirdQuestionPipe);

//# sourceMappingURL=questionsPipes.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_cards__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompareService = (function () {
    function CompareService(cardsService, logService) {
        var _this = this;
        this.cardsService = cardsService;
        this.logService = logService;
        this.cards = this.cardsService.getCards().then(function (x) { return _this.cards = x; });
    }
    CompareService.prototype.ask = function (q1, q2, q3, q4, q5) {
        // console.log('Compare Service, Ask!');
        switch (q1.selectedOptions[0].value) {
            case '1':
                this.runHowMany(q2, q3, q4, q5);
                break;
            case '2':
                this.runWhatIsThe(q2);
                break;
            default:
                break;
        }
    };
    CompareService.prototype.runHowMany = function (q2, q3, q4, q5) {
        // console.log('Compare Service, running how many');
        switch (q3.selectedOptions[0].innerText) {
            case '?':
                this.howManyThreeQuestions(q2);
                break;
            case 'are':
                this.howManyFiveQuestions(q2, q4, q5);
                break;
            default:
                break;
        }
    };
    CompareService.prototype.howManyFiveQuestions = function (q2, q4, q5) {
        // console.log('Compare Service, running how many 5 Q\'s');
        var filteredValu;
        switch (q2.selectedOptions[0].value) {
            case '1':
                // shapes
                filteredValu = this.cards.filter(function (card) { return card.shape === q2.selectedOptions[0].innerText; }).map(function (x) { return x.number; });
                this.operation(filteredValu, q4, q5);
                break;
            case '2':
                // cards
                filteredValu = this.cards.map(function (x) { return x.number; });
                this.operation(filteredValu, q4, q5);
                break;
            default:
                break;
        }
    };
    CompareService.prototype.operation = function (filteredValue, q4, q5) {
        // console.log('Compare Service, running operation');
        var result;
        switch (q4.selectedOptions[0].innerText) {
            case '>=':
                result = filteredValue.filter(function (x) { return x >= q5.selectedOptions[0].value; }).length;
                break;
            case '>':
                result = filteredValue.filter(function (x) { return x > q5.selectedOptions[0].value; }).length;
                break;
            case '=':
                result = filteredValue.filter(function (x) { return x === parseInt(q5.selectedOptions[0].value); }).length;
                break;
            case '<':
                result = filteredValue.filter(function (x) { return x < q5.selectedOptions[0].value; }).length;
                break;
            case '<=':
                result = filteredValue.filter(function (x) { return x <= q5.selectedOptions[0].value; }).length;
                break;
            default:
                break;
        }
        this.logService.addAnswer(result);
    };
    CompareService.prototype.howManyThreeQuestions = function (q2) {
        // console.log('Compare Service, running how many three Q\'s');
        var result;
        switch (q2.selectedOptions[0].value) {
            case '1':
                // shapes
                result = this.cards.map(function (card) { return __WEBPACK_IMPORTED_MODULE_1__objects_cards__["a" /* Shapes */][card.shape]; }).filter(function (shape) { return shape === parseInt(q2.selectedOptions[0].getAttribute('selectedShape')); }).length;
                break;
            case '4':
            case '5':
                // color
                result = this.cards.map(function (card) { return card.color; }).filter(function (color) { return color === (q2.selectedOptions[0].innerText.split(" ")[0]); }).length;
                break;
            case '6':
                // Face Cards
                result = this.cards.map(function (card) { return card.number; }).filter(function (number) { return number >= 11; }).length;
                break;
            case '7':
                // even cards
                result = this.cards.map(function (card) { return card.number; }).filter(function (number) { return number % 2 === 0; }).length;
                break;
            case '8':
                // odd cards
                result = this.cards.map(function (card) { return card.number; }).filter(function (number) { return number % 2 !== 0; }).length;
                break;
            default:
                break;
        }
        this.logService.addAnswer(result);
    };
    CompareService.prototype.runWhatIsThe = function (q2) {
        // console.log('Compare Service, Running What is the');
        switch (q2.selectedOptions[0].innerText) {
            case 'Sum':
                this.sum();
                break;
            case 'Product':
                this.product();
                break;
            default:
                break;
        }
    };
    CompareService.prototype.sum = function () {
        var result = this.cards.map(function (card) { return card.number; }).reduce(function (f, l) { return f + l; });
        this.logService.addAnswer(result);
    };
    CompareService.prototype.product = function () {
        var result = this.cards.map(function (card) { return card.number; }).reduce(function (f, l) { return f * l; });
        this.logService.addAnswer(result);
    };
    return CompareService;
}());
CompareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__log_service__["a" /* LogService */]) === "function" && _b || Object])
], CompareService);

var _a, _b;
//# sourceMappingURL=compare.service.js.map

/***/ })

},[439]);
//# sourceMappingURL=main.bundle.js.map