import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CalculatorComponent } from './components/calculator/calculator.component';
import {AboutComponent } from './components/about/about.component';
import {HistoryComponent } from './components/history/history.component';

const appRoutes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'about', component: AboutComponent},
  { path: 'history', component: HistoryComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

