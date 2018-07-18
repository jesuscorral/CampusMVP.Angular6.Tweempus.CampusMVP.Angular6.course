import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardRoutingModule { }