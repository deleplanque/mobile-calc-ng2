import { Component } from '@angular/core';
import {CalculatorService} from './services/calculator.service'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[CalculatorService]
})
export class AppComponent { }
