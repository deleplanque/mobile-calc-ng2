import { Component} from '@angular/core';
import {CalculatorService} from '../../services/calculator.service'
import {History} from '../../domain/History';

@Component({
    moduleId: module.id,
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent {
    hist: History[];
    result: any;
    value: any;
    decimal: boolean;
    answer: number;
    total: Array<number>;
    clear: boolean;
    previous_operator: any;
    visibleAdditionButtons: boolean;
    history: string;
    input: any;
    typeOfFunction: any;
    inputFsl: any;
    expresForDB: any;

    constructor(private calculatorService: CalculatorService) {
        this.result = " ";
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
        this.visibleAdditionButtons = false;
        this.history = "";
        this.inputFsl = false;
    }

    addToCalculation(value: any) {
        if(this.clear == true) {
            this.result = 0;
            this.clear = false;
        }
        if(value == '.') {
                if(this.decimal == true) {
                return false;
            }
            this.decimal = true;

        }
        this.result += value;
        this.history += value + '';
        this.inputFsl = false;

    }

    calculate(operator: any) {
        if (operator.length >= 1){
            if (this.inputFsl == true){
                return  false;
            }
            this.inputFsl = true;
        }
        this.history += operator;
        this.total.push(this.result);
        this.result = ' ';

        if(this.total.length == 2) {
            
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);

            if(this.previous_operator == '+') {
                var total = a + b;
            } else if(this.previous_operator == '-') {
                var total = a - b;
            } else if(this.previous_operator == '*') {
                var total = a * b;
            } else {
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
    }

    getTotal() {
        
        var a = Number(this.total[0]);
        var b = Number(this.result);
        if(this.previous_operator == '+') {
            var total = a + b;
        } else if(this.previous_operator == '-') {
            var total = a - b;
        } else if(this.previous_operator == '*') {
            var total = a * b;
        } else {
            var total = a / b;
        }
        if(isNaN(total)) {
            return false;
        }
        this.result = total;
        this.history += " = " + this.result;
        this.total = [];
        this.clear = true;
        this.inputFsl = false; 
        this.saveHist();
        this.history = this.result
    }

    saveHist(){
        event.preventDefault();
        var newHistory = {
            expression: this.history
        }
        this.calculatorService.addHistory(newHistory)
            .subscribe(task => {
            });
    }

    removeLast(){
        this.input = document.querySelector('.mini-screen').innerHTML;
        var removeResult = this.input.substring(0, this.input.length - 1);
        this.result = removeResult;
        this.history = this.result;
        console.log(this.history)
        this.inputFsl = false;
    }
    onClickClear(){
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.history = '';
    }
    visible(){
        if (this.visibleAdditionButtons == true){
             this.visibleAdditionButtons = false;
        }
        else if (this.visibleAdditionButtons == false){
            this.visibleAdditionButtons = true;
        }
    }
    onClickMathFunction(typeOfFunction: string){
        this.input = document.querySelector('.mini-screen').innerHTML;
        console.log(this.input);

        if (typeOfFunction == 'sin'){
            this.result = Math.sin(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'cos'){
            this.result = Math.cos(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'tan'){
            this.result = Math.tan(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'log'){
            this.result = Math.log(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == '√'){
            this.result = Math.sqrt(this.input);
            this.history = this.result;
        }
        else if (typeOfFunction == 'exp'){
            this.result = Math.exp(this.input);
            this.history = this.result;
        }
        else {
            this.history = 'Not a function!';
        }

    }

	}

    
