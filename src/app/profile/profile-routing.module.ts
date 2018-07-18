import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';

const profileRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ]
})
export class ProfileRoutingModule { }