import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CalculatorComponent } from './components/calculator/calculator.component';
import {AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'about', component: AboutComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

