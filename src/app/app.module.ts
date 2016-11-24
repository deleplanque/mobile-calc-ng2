import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {AboutComponent} from './components/about/about.component';
import {HeaderComponent} from './components/header/header.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from '../translate';


@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent, CalculatorComponent, AboutComponent, HeaderComponent,TranslatePipe],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders, TRANSLATION_PROVIDERS, TranslateService
  ]
})
export class AppModule { }
