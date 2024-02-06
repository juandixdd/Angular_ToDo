import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/landing/login/login.component';
import { RegisterComponent } from './views/landing/register/register.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
];
