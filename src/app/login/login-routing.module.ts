import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }