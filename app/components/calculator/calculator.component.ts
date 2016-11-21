import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent {
    keys = document.querySelectorAll('#calculator span');
    operators = ['+', '-', 'x', '÷'];
    decimalAdded:boolean = false;
    resMathFunc:number;

    constructor() {

    }
    
 }
