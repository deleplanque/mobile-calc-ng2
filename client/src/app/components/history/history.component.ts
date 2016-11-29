import { Component } from '@angular/core';
import {CalculatorService} from '../../services/calculator.service'
import {History} from '../../domain/History';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'history',
    templateUrl: 'history.component.html',
    styleUrls:['history.component.css']
})
export class HistoryComponent {
    private history: History[];

    constructor(private calculatorService: CalculatorService){
        this.calculatorService.getHistories()
            .subscribe(history => {
                this.history = history;
                console.log(this.history)
            });
    }

    
}