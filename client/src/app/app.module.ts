import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {AboutComponent} from './components/about/about.component';
import {HeaderComponent} from './components/header/header.component';
import {HistoryComponent} from './components/history/history.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from '../translate';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CalculatorService} from './services/calculator.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule , routing, HttpModule, FormsModule,DataTableModule,SharedModule, GMapModule],
  declarations: [ AppComponent, CalculatorComponent, AboutComponent, HeaderComponent, HistoryComponent,TranslatePipe],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders, TRANSLATION_PROVIDERS, TranslateService,CalculatorService
  ]
})
export class AppModule { }
