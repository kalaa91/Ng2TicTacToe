webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, gameManagerService) {
        this.navCtrl = navCtrl;
        this.gameManagerService = gameManagerService;
        this.startWith = 'x';
        this.gameType = 3;
    }
    HomePage.prototype.startGame = function (event) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */], { startWith: this.startWith, gameType: this.gameType });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      TicTacToe Game\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Select X or O\n  <br>\n  <ion-grid radio-group [(ngModel)]="startWith">\n    <ion-row>\n      <ion-col col-3>\n        <ion-label>\n          <img src="../../assets/x.png">\n          <br>\n          Computer\n        </ion-label>\n        <ion-radio  value="x"></ion-radio>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>\n          <img src="../../assets/o.png">\n          <br>\n          You\n        </ion-label>\n        <ion-radio value="o"></ion-radio>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n  <br>\n  <br>\n  Select Game Type \n  <br>\n  <ion-grid radio-group [(ngModel)]="gameType">\n      <ion-row>\n        <ion-col col-3>\n          <ion-label>\n           3\n          </ion-label>\n          <ion-radio  value="3"></ion-radio>\n        </ion-col>\n        <ion-col col-3>\n          <ion-label>\n            4\n          </ion-label>\n          <ion-radio value="4"></ion-radio>\n        </ion-col>\n        <ion-col col-3>\n            <ion-label>\n              5\n            </ion-label>\n            <ion-radio value="5"></ion-radio>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  <button ion-button (click)="startGame($event)">Start Game</button>\n  \n</ion-content>'/*ion-inline-end:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__["a" /* GameManagerService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__["a" /* GameManagerService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_playerType_decorator__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePage = (function () {
    function GamePage(navCtrl, navParams, gameManagerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameManagerService = gameManagerService;
        this.playMatrix = [];
        this.cellToBeUpdated = null;
        var startWith = navParams.get('startWith');
        this.gameType = navParams.get('gameType');
        this.gameManagerService.computer = 'x';
        this.gameManagerService.player = 'o';
        this.gameManagerService.gameType = this.gameType;
        this.playMatrix = this.gameManagerService.getGameOriginalPlayMatrix();
        if (startWith == 'x') {
            this.startTurn = true;
            this.makeComputerPlay();
        }
        else {
            this.startTurn = false;
        }
    }
    GamePage.prototype.onGameReportArrayUpdated = function (obj) {
        for (var i = 0; i < obj.gameReportArr.length; i++) {
            if (obj.gameReportArr[i]) {
                this.playMatrix[i] = obj.gameReportArr[i];
            }
        }
    };
    GamePage.prototype.makeComputerPlay = function () {
        var gameResult = this.gameManagerService.calculateBestMove(this.playMatrix, this.gameManagerService.computer);
        this.cellToBeUpdated = { cellIndex: gameResult.index, gamePlayed: 'x' };
    };
    GamePage.prototype.onPlayerPlayed = function (obj) {
        this.makeComputerPlay();
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\pages\game\game.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            TicTacToe Game\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <game-board [gameWidth]="gameType" [isXTurn]="startTurn" [updateGameBoard]="cellToBeUpdated" (onGameReportArrayUpdated)="onGameReportArrayUpdated($event)" (onPlayerPlayedEvent)="onPlayerPlayed($event)"></game-board>\n\n</ion-content>'/*ion-inline-end:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\pages\game\game.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__["a" /* GameManagerService */]]
    }),
    __WEBPACK_IMPORTED_MODULE_2__providers_playerType_decorator__["a" /* PlayerTypeAware */],
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_gamerManager_service__["a" /* GameManagerService */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayerTypeAware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerType_enum__ = __webpack_require__(195);

function PlayerTypeAware(constructor) {
    constructor.prototype.PlayerType = __WEBPACK_IMPORTED_MODULE_0__playerType_enum__["a" /* PlayerType */];
}
//# sourceMappingURL=playerType.decorator.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerType; });
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["Empty"] = 0] = "Empty";
    PlayerType[PlayerType["O"] = 1] = "O";
    PlayerType[PlayerType["X"] = 2] = "X";
})(PlayerType || (PlayerType = {}));
//# sourceMappingURL=playerType.enum.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameManagerService = (function () {
    function GameManagerService() {
        this.playMatrix = [];
    }
    GameManagerService.prototype.getGameOriginalPlayMatrix = function () {
        if (this.gameType == 5) {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        }
        else if (this.gameType == 4) {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        }
        else {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }
        return this.playMatrix;
    };
    //check if there is a current win in the board
    GameManagerService.prototype.checkWinSituation = function (inputArr, moveType) {
        var matrix = this.listToMatrix(inputArr, this.gameType);
        var matrixLength = matrix.length;
        //check all rows
        //check all columns
        for (var i = 0; i < matrixLength; i++) {
            var rowResult = this.getRow(matrix, i);
            if (this.checkWinningArray(rowResult, moveType)) {
                return true;
            }
            var colResult = this.getCol(matrix, i);
            if (this.checkWinningArray(colResult, moveType)) {
                return true;
            }
        }
        //check left diagonal
        var leftDiag = this.getLeftDiag(matrix);
        if (this.checkWinningArray(leftDiag, moveType)) {
            return true;
        }
        //check right diagonal
        var rightDiag = this.getRightDiag(matrix);
        if (this.checkWinningArray(rightDiag, moveType)) {
            return true;
        }
        return false;
    };
    GameManagerService.prototype.listToMatrix = function (list, elementsPerSubArray) {
        var matrix = [], i, k;
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
            matrix[k].push(list[i]);
        }
        return matrix;
    };
    //check if a row or column all have the same move type i.e. wining array
    GameManagerService.prototype.checkWinningArray = function (rowOrCol, moveType) {
        var result = rowOrCol.filter(function (cellValue) { return cellValue == moveType; });
        if (result.length == rowOrCol.length) {
            return true;
        }
        else {
            return false;
        }
    };
    //get column by number from two dimensional array
    GameManagerService.prototype.getCol = function (matrix, col) {
        var column = [];
        for (var i = 0; i < matrix.length; i++) {
            column.push(matrix[i][col]);
        }
        return column;
    };
    //get row by number from two dimensional array
    GameManagerService.prototype.getRow = function (matrix, row) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[row][i]);
        }
        return result;
    };
    //get left Diagonal part [0,0]..[1,1]..[2,2] from two dimensional array
    GameManagerService.prototype.getLeftDiag = function (matrix) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[i][i]);
        }
        return result;
    };
    //get right Diagonal part [0,2]..[1,1]..[2,0] from two dimensional array
    GameManagerService.prototype.getRightDiag = function (matrix) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[i][matrix.length - i - 1]);
        }
        return result;
    };
    GameManagerService.prototype.calculateBestMove = function (playMatrix, currentPlayer) {
        //implementing minimax algorithm
        //check for terminal states
        //get available play cells
        //recurse through the matrix and empty cells to calculate the highest and lowest score according to who is playing
        //get available playing cells
        var availablePlayingCells = this.getMatrixEmptyCells(playMatrix);
        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (this.checkWinSituation(playMatrix, this.player)) {
            return { outcome: -10 };
        }
        else if (this.checkWinSituation(playMatrix, this.computer)) {
            return { outcome: 10 };
        }
        else if (availablePlayingCells.length === 0) {
            return { outcome: 0 };
        }
        // an array to collect all Minimax possible plays
        var minimaxPlaysCollection = this.getMiniMaxPossibleMoves(availablePlayingCells, playMatrix, currentPlayer);
        // assing play with highest score to computer and lowest to opponent
        var bestPlay = null;
        if (currentPlayer === this.computer) {
            var bestOutCome = -10000;
            for (var i = 0; i < minimaxPlaysCollection.length; i++) {
                if (minimaxPlaysCollection[i].outcome > bestOutCome) {
                    bestOutCome = minimaxPlaysCollection[i].outcome;
                    bestPlay = i;
                }
            }
        }
        else {
            var bestOutCome_1 = 10000;
            for (var i_1 = 0; i_1 < minimaxPlaysCollection.length; i_1++) {
                if (minimaxPlaysCollection[i_1].outcome < bestOutCome_1) {
                    bestOutCome_1 = minimaxPlaysCollection[i_1].outcome;
                    bestPlay = i_1;
                }
            }
        }
        // return the chosen move (object) from the array to the higher depth
        return minimaxPlaysCollection[bestPlay];
    };
    GameManagerService.prototype.getMiniMaxPossibleMoves = function (freeCells, playMatrix, currentPlayer) {
        var possibleMoves = [];
        for (var i = 0; i < freeCells.length; i++) {
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
            //for each free cell , calculate cell outcome and index
            var play = { index: null, outcome: null };
            play.index = playMatrix[freeCells[i]];
            // set cell to current player
            playMatrix[freeCells[i]] = currentPlayer;
            //if collect the score resulted from calling minimax on the opponent of the current player
            if (currentPlayer == this.computer) {
                var result = this.calculateBestMove(playMatrix, this.player);
                play.outcome = result.outcome;
            }
            else {
                var result = this.calculateBestMove(playMatrix, this.computer);
                play.outcome = result.outcome;
            }
            //clear cell
            playMatrix[freeCells[i]] = play.index;
            // push the object to the array
            possibleMoves.push(play);
        }
        return possibleMoves;
    };
    GameManagerService.prototype.getMatrixEmptyCells = function (matrix) {
        return matrix.filter(function (s) { return s != "o" && s != "x"; });
    };
    return GameManagerService;
}());
GameManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameManagerService);

//# sourceMappingURL=gamerManager.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_game__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_board_cell_board_cell__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_game_board_game_board__ = __webpack_require__(267);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_8__components_board_cell_board_cell__["a" /* BoardCellComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_game_board_game_board__["a" /* GameBoardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_8__components_board_cell_board_cell__["a" /* BoardCellComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_game_board_game_board__["a" /* GameBoardComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_playerType_decorator__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardCellComponent = (function () {
    function BoardCellComponent() {
        this.isXTurn = false;
        this.playerType = __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__["a" /* PlayerType */].Empty;
        this.isCellAvailable = true;
        this.onCellOccupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPlayerPlayed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(BoardCellComponent.prototype, "updateCell", {
        set: function (updateCell) {
            if (updateCell && updateCell.cellIndex == this.cellIndex) {
                if (updateCell.gamePlayed == 'o') {
                    this.playerType = __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__["a" /* PlayerType */].O;
                }
                else {
                    this.playerType = __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__["a" /* PlayerType */].X;
                }
                this.isCellAvailable = false;
                this.onCellOccupied.emit({ cellNumber: this.cellIndex, playerType: this.playerType, isCellAvailable: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    BoardCellComponent.prototype.setXO = function (event) {
        if (this.isCellAvailable) {
            if (this.isXTurn) {
                this.playerType = __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__["a" /* PlayerType */].X;
            }
            else {
                this.playerType = __WEBPACK_IMPORTED_MODULE_1__providers_playerType_enum__["a" /* PlayerType */].O;
            }
            this.isCellAvailable = false;
            this.onCellOccupied.emit({ cellNumber: this.cellIndex, playerType: this.playerType, isCellAvailable: false });
            this.onPlayerPlayed.emit(true);
        }
    };
    BoardCellComponent.prototype.ngOnChanges = function (changes) {
    };
    return BoardCellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], BoardCellComponent.prototype, "cellIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], BoardCellComponent.prototype, "isXTurn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BoardCellComponent.prototype, "updateCell", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], BoardCellComponent.prototype, "onCellOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], BoardCellComponent.prototype, "onPlayerPlayed", void 0);
BoardCellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'board-cell',template:/*ion-inline-start:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\components\board-cell\board-cell.html"*/'<div [ngSwitch]="playerType" (click)="setXO()"  >\n\n    <div *ngSwitchCase="PlayerType.Empty">\n\n    </div>\n\n    <div *ngSwitchCase="PlayerType.O" >\n\n        <img src="../../assets/o.png">\n\n    </div>\n\n    <div *ngSwitchCase="PlayerType.X">\n\n        <img src="../../assets/x.png">\n\n    </div>\n\n</div>'/*ion-inline-end:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\components\board-cell\board-cell.html"*/
    }),
    __WEBPACK_IMPORTED_MODULE_2__providers_playerType_decorator__["a" /* PlayerTypeAware */],
    __metadata("design:paramtypes", [])
], BoardCellComponent);

//# sourceMappingURL=board-cell.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameBoardComponent = (function () {
    function GameBoardComponent() {
        this.lastPlayerIsX = this.isXTurn;
        this.gameReportArr = [];
        this.onGameReportArrayUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPlayerPlayedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.cellToBeUpdated = null;
    }
    Object.defineProperty(GameBoardComponent.prototype, "updateGameBoard", {
        set: function (updateCell) {
            this.cellToBeUpdated = updateCell;
            if (this.cellToBeUpdated) {
                this.isXTurn = !this.isXTurn;
            }
        },
        enumerable: true,
        configurable: true
    });
    GameBoardComponent.prototype.setXO = function (obj) {
        this.isXTurn = !this.isXTurn;
    };
    GameBoardComponent.prototype.onCellOccupied = function (obj) {
        if (obj) {
            if (obj.playerType == 0) {
                this.gameReportArr[obj.cellNumber] = obj.cellNumber;
            }
            else if (obj.playerType == 1) {
                this.gameReportArr[obj.cellNumber] = 'o';
            }
            else {
                this.gameReportArr[obj.cellNumber] = 'x';
            }
            this.onGameReportArrayUpdated.emit({ gameReportArr: this.gameReportArr });
        }
    };
    GameBoardComponent.prototype.onPlayerPlayed = function (obj) {
        this.onPlayerPlayedEvent.emit(true);
    };
    return GameBoardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "gameWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "isXTurn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "onGameReportArrayUpdated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "onPlayerPlayedEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GameBoardComponent.prototype, "updateGameBoard", null);
GameBoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'game-board',template:/*ion-inline-start:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\components\game-board\game-board.html"*/'<div [ngSwitch]="gameWidth">\n\n    <div *ngSwitchCase="3">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="0" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="1" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="2" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="3" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="4" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="5" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="6" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="7" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <board-cell [cellIndex]="8" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div *ngSwitchCase="4">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="0" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="1" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="2" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="3" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="4" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="5" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="6" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="7" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="8" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="9" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="10" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="11" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="12" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="13" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="14" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <board-cell [cellIndex]="15" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div *ngSwitchCase="5">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="0" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="1" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="2" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="3" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="4" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="5" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="6" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="7" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="8" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="9" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="10" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="11" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="12" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="13" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="14" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="15" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="16" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="17" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="18" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="19" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="20" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="21" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="22" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="23" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <board-cell [cellIndex]="24" [isXTurn]="isXTurn" [updateCell]="cellToBeUpdated" (click)="setXO()" (onCellOccupied)="onCellOccupied($event)" (onPlayerPlayed)="onPlayerPlayed($event)"></board-cell>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-grid>\n\n    </div>\n\n</div>'/*ion-inline-end:"D:\WorkSpace\MindValleyTasks\Ng2TicTacToe\src\components\game-board\game-board.html"*/
    }),
    __metadata("design:paramtypes", [])
], GameBoardComponent);

//# sourceMappingURL=game-board.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map