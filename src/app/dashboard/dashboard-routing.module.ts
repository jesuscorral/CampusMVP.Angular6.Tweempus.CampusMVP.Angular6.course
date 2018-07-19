import { AuthGuardService } from './../core/auth-guard.service';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuardService] //Comprueba si el usuario está autenticado
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardRoutingModule { }