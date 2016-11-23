"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.result = " ";
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
        this.visibleAdditionButtons = false;
        this.history = "";
    }
    CalculatorComponent.prototype.addToCalculation = function (value) {
        if (this.clear == true) {
            this.result = 0;
            this.clear = false;
        }
        if (value == '.') {
            if (this.decimal == true) {
                return false;
            }
            this.decimal = true;
        }
        this.result += value + "";
        this.history += value;
    };
    CalculatorComponent.prototype.calculate = function (operator) {
        this.history += operator;
        this.total.push(this.result);
        this.result = ' ';
        if (this.total.length == 2) {
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);
            if (this.previous_operator == '+') {
                var total = a + b;
            }
            else if (this.previous_operator == '-') {
                var total = a - b;
            }
            else if (this.previous_operator == '*') {
                var total = a * b;
            }
            else {
                var total = a / b;
            }
            var answer = total;
            this.total = [];
            this.total.push(answer);
            this.result = total;
            this.clear = true;
        }
        else {
            this.clear = false;
        }
        this.decimal = false;
        this.previous_operator = operator;
    };
    CalculatorComponent.prototype.getTotal = function () {
        var a = Number(this.total[0]);
        var b = Number(this.result);
        if (this.previous_operator == '+') {
            var total = a + b;
        }
        else if (this.previous_operator == '-') {
            var total = a - b;
        }
        else if (this.previous_operator == '*') {
            var total = a * b;
        }
        else {
            var total = a / b;
        }
        if (isNaN(total)) {
            return false;
        }
        this.result = total;
        this.history = this.result;
        this.total = [];
        this.clear = true;
    };
    CalculatorComponent.prototype.onClickClear = function () {
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.history = '';
    };
    CalculatorComponent.prototype.visible = function () {
        if (this.visibleAdditionButtons == true) {
            this.visibleAdditionButtons = false;
        }
        else if (this.visibleAdditionButtons == false) {
            this.visibleAdditionButtons = true;
        }
    };
    CalculatorComponent.prototype.onClickMathFunction = function (typeOfFunction) {
        this.input = document.querySelector('.mini-screen').innerHTML;
        console.log(this.input);
        if (typeOfFunction == 'sin') {
            this.result = Math.sin(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'cos') {
            this.result = Math.cos(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'tan') {
            this.result = Math.tan(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'log') {
            this.result = Math.log(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == '√') {
            this.result = Math.sqrt(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'exp') {
            this.result = Math.exp(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == '|x|') {
            this.result = Math.abs(this.input);
            this.history = this.result;
        }
        else {
            this.history = 'Not a function!';
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'calculator',
            templateUrl: 'calculator.component.html',
            styleUrls: ['calculator.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map