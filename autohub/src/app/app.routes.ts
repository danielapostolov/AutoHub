import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //user routing(not logged in)
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },


    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
