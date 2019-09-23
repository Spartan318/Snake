(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <body>\n    <canvas id='container' class='myCanvas' height=\"635\" width=\"1345\"></canvas>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helperClasses/Node */ "./src/helperClasses/Node.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.deathBool = false;
        this.direction = '';
        this.then = 0;
        this.interval = 100;
        this.score = 0;
        this.multiplier = 1;
        this.multiplierTimer = Date.now();
        this.pause = false;
        this.canGoOppositeDirection = true;
        this.gameLoop = function () {
            if (!_this.pause) {
                _this.now = Date.now();
                if ((_this.now - _this.then) > _this.interval) {
                    _this.move();
                    _this.then = _this.now - ((_this.now - _this.then) % _this.interval);
                    _this.directionFailsafe = true;
                }
                _this.ctx.fillStyle = 'red';
                _this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
                _this.draw();
            }
            _this.animCancelID = requestAnimationFrame(function () { return _this.gameLoop(); });
        };
        this.move = function () {
            if (_this.direction === 'left') {
                _this.moveLeader(_this.leader.x - 1, _this.leader.y);
            }
            else if (_this.direction === 'right') {
                _this.moveLeader(_this.leader.x + 1, _this.leader.y);
            }
            else if (_this.direction === 'up') {
                _this.moveLeader(_this.leader.x, _this.leader.y - 1);
            }
            else if (_this.direction === 'down') {
                _this.moveLeader(_this.leader.x, _this.leader.y + 1);
            }
        };
        this.moveLeader = function (x, y) {
            if (x > _this.grid.length - 1 || x < 0
                || y > _this.grid[0].length - 1 || y < 0) {
                _this.death();
                return;
            }
            _this.checkForCrash(x, y);
            _this.resetGrid();
            _this.checkEat();
            _this.moveSnake();
            _this.leader.x = x;
            _this.leader.y = y;
            _this.setSnake();
        };
        this.checkForCrash = function (x, y) {
            var curr = _this.leader;
            var crash = false;
            while (!(curr == null)) {
                if (x === curr.x && y === curr.y)
                    crash = true;
                curr = curr.next;
            }
            if (crash)
                _this.death();
        };
        this.death = function () {
            //Potential try again code:
            // this.deathBool = true;
            // if(window.confirm("You have died! Your score was: " + this.score + " Would you like to play again?")){
            // 	// this.resetGame();
            // }
            window.cancelAnimationFrame(_this.animCancelID);
            alert("You have died! Game Over! Your score was: " + _this.score);
            window.cancelAnimationFrame(_this.animCancelID);
            _this.pause = true;
        };
        this.keyboardInput = function (event) {
            if (event.keyCode === 32) {
                _this.pause = !_this.pause;
            }
            else if (_this.canGoOppositeDirection) {
                if (event.keyCode === 37) {
                    _this.direction = 'left';
                }
                else if (event.keyCode === 39) {
                    _this.direction = 'right';
                }
                else if (event.keyCode === 38) {
                    _this.direction = 'up';
                }
                else if (event.keyCode === 40) {
                    _this.direction = 'down';
                }
            }
            else {
                if (_this.directionFailsafe) {
                    if (event.keyCode === 37 && !(_this.direction === 'right')) {
                        _this.direction = 'left';
                    }
                    else if (event.keyCode === 39 && !(_this.direction === 'left')) {
                        _this.direction = 'right';
                    }
                    else if (event.keyCode === 38 && !(_this.direction === 'down')) {
                        _this.direction = 'up';
                    }
                    else if (event.keyCode === 40 && !(_this.direction === 'up')) {
                        _this.direction = 'down';
                    }
                }
                _this.directionFailsafe = false;
            }
        };
        this.draw = function () {
            _this.paintItBlue();
            for (var i = 0; i < _this.grid.length; i++) {
                for (var b = 0; b < _this.grid[i].length; b++) {
                    if (_this.grid[i][b] === 1) {
                        _this.ctx.fillStyle = 'yellow';
                        _this.ctx.fillRect(i * 30 + 100, b * 30 + 80, 27, 27);
                    }
                    else if (_this.grid[i][b] === 0) {
                        _this.ctx.fillStyle = 'blue';
                        _this.ctx.fillRect(i * 30 + 100, b * 30 + 80, 30, 30);
                    }
                    else if (_this.grid[i][b] === 3) {
                        _this.ctx.fillStyle = 'red';
                        _this.ctx.fillRect(i * 30 + 100, b * 30 + 80, 27, 27);
                    }
                }
            }
            _this.ctx.font = "20px Times New Roman";
            _this.ctx.fillStyle = "white";
            _this.ctx.fillText("Score: " + _this.score, 10, 30);
            _this.ctx.fillText("Multiplier: " + _this.multiplier + "x", 10, 60);
        };
        this.paintItBlue = function () {
            for (var i = 0; i < _this.grid.length; i++) {
                for (var b = 0; b < _this.grid[i].length; b++) {
                    _this.ctx.fillStyle = 'blue';
                    _this.ctx.fillRect(i * 30 + 100, b * 30 + 80, 30, 30);
                }
            }
        };
        this.moveSnake = function () {
            if (_this.leader.next == null)
                return;
            //Sets curr to the node after the leader
            var curr = _this.leader.next;
            //Sets prevData to leaders data
            var prevData = [_this.leader.x, _this.leader.y];
            //While there is another node
            while (!(curr.next == null)) {
                //stores current nodes data temporarily
                var temp = [curr.x, curr.y];
                //changes current nodes data
                curr.data = prevData;
                //stores current nodes data permanently
                prevData = temp;
                //iterates loop
                curr = curr.next;
            }
            curr.data = prevData;
        };
        this.setSnake = function () {
            var curr = _this.leader;
            while (!(curr == null)) {
                _this.grid[curr.x][curr.y] = 1;
                curr = curr.next;
            }
        };
        this.checkEat = function () {
            var curr = _this.leader;
            var foodNotEaten = true;
            while ((!(curr == null)) && foodNotEaten) {
                if (curr.x === _this.food[0] && curr.y === _this.food[1])
                    foodNotEaten = false;
                curr = curr.next;
            }
            if (!foodNotEaten)
                _this.eatFood(3);
            else {
                _this.grid[_this.food[0]][_this.food[1]] = 3;
            }
        };
        this.eatFood = function (followers) {
            _this.score += 3 * _this.multiplier;
            if (Date.now() - _this.multiplierTimer < 3000) {
                _this.multiplier++;
            }
            else {
                _this.multiplier = 1;
            }
            _this.multiplierTimer = Date.now();
            _this.resetFood();
            for (var i = 0; i < followers; i++) {
                var curr = _this.leader;
                var prev = null;
                while (!(curr.next == null)) {
                    prev = curr;
                    curr = curr.next;
                }
                if (prev == null) {
                    _this.firstMeal();
                    return;
                }
                _this.checkNearBounds();
                //if snake is going to the left
                if (prev.x - 1 === curr.x) {
                    curr.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([curr.x + 1, curr.y]);
                }
                else if (prev.x + 1 === curr.x) {
                    curr.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([curr.x - 1, curr.y]);
                }
                else if (prev.y - 1 === curr.y) {
                    curr.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([curr.x, curr.y + 1]);
                }
                else if (prev.y + 1 === curr.y) {
                    curr.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([curr.x, curr.y - 1]);
                }
            }
        };
        this.firstMeal = function () {
            if (_this.direction === 'left') {
                _this.leader.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([_this.leader.x + 1, _this.leader.y]);
            }
            else if (_this.direction === 'right') {
                _this.leader.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([_this.leader.x - 1, _this.leader.y]);
            }
            else if (_this.direction === 'up') {
                _this.leader.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([_this.leader.x, _this.leader.y - 1]);
            }
            else if (_this.direction === 'down') {
                _this.leader.next = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([_this.leader.x, _this.leader.y + 1]);
            }
            _this.canGoOppositeDirection = false;
            _this.eatFood(2);
        };
        this.checkNearBounds = function () {
            //Check if the snake is near the bound and if it is,
            //add to the end of snake in a different way.
        };
        this.resetGrid = function () {
            for (var i = 0; i < _this.grid.length; i++) {
                for (var b = 0; b < _this.grid[i].length; b++) {
                    _this.grid[i][b] = 0;
                }
            }
        };
        this.resetFood = function () {
            if (!(_this.food == undefined)) {
                _this.grid[_this.food[0]][_this.food[1]] = 0;
            }
            _this.food = [Math.floor(Math.random() * (_this.grid.length)),
                Math.floor(Math.random() * (_this.grid[0].length))];
            while ((_this.food[0] === _this.leader.x && _this.food[1] === _this.leader.y) || _this.foodInSnake()) {
                _this.food = [Math.floor(Math.random() * (_this.grid.length)),
                    Math.floor(Math.random() * (_this.grid[0].length))];
            }
            //Need to implement what if food spawns in snake?
            console.log("This is the grid:" + _this.grid);
            console.log("this is food:" + _this.food);
            _this.grid[_this.food[0]][_this.food[1]] = 3;
        };
        this.foodInSnake = function () {
            var curr = _this.leader;
            var foodInSnake = false;
            while (!(curr == null) && !foodInSnake) {
                if (_this.food[0] === curr.x && _this.food[1] === curr.y) {
                    foodInSnake = true;
                }
                curr = curr.next;
            }
            return foodInSnake;
        };
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this.canvas = document.getElementById('container');
        document.addEventListener('keydown', this.keyboardInput);
        this.ctx = this.canvas.getContext("2d");
        //each square is 30 or 27
        //want it to be responsive
        var gridHeight = Math.floor(window.innerHeight / 27) - 8;
        var gridWidth = Math.floor(window.innerWidth / 27) - 11;
        this.grid = new Array(gridWidth);
        for (var i = 0; i < gridWidth; i++) {
            var temp = new Array(gridHeight);
            this.grid[i] = temp;
            for (var b = 0; b < gridHeight; b++) {
                this.grid[i][b] = 0;
            }
        }
        this.leader = new _helperClasses_Node__WEBPACK_IMPORTED_MODULE_1__["Node"]([Math.floor(Math.random() * (this.grid.length)),
            Math.floor(Math.random() * (this.grid[0].length))]);
        this.resetFood();
        this.grid[this.leader.x][this.leader.y] = 1;
        this.gameLoop();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helperClasses/Node.ts":
/*!***********************************!*\
  !*** ./src/helperClasses/Node.ts ***!
  \***********************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
var Node = /** @class */ (function () {
    function Node(coordinates) {
        this.data = coordinates;
        this.next = null;
    }
    Object.defineProperty(Node.prototype, "x", {
        get: function () {
            return this.data[0];
        },
        set: function (newX) {
            this.data[0] = newX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "y", {
        get: function () {
            return this.data[1];
        },
        set: function (newY) {
            this.data[1] = newY;
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/devin/Documents/personalProjects/Snake.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map