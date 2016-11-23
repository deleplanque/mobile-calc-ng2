"use strict";
var router_1 = require('@angular/router');
var calculator_component_1 = require('./components/calculator/calculator.component');
var about_component_1 = require('./components/about/about.component');
var appRoutes = [
    { path: '', component: calculator_component_1.CalculatorComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map