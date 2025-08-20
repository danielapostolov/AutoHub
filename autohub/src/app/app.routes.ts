import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './shared/error/error.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { CarsComponent } from './features/car/cars/cars.component';
import { CarCreateComponent } from './features/car/car-create/car-create.component';
import { CarDetailsComponent } from './features/car/car-details/car-details.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './features/user/profile/profile.component';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';
import { ProfileEditComponent } from './features/user/profile-edit/profile-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //user routing(not logged in)
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //Theme(car) routing
    {
        path: "cars", children: [

            { path: "", component: CarsComponent },
            { path: ":carId", component: CarDetailsComponent, pathMatch: 'full' },


        ]
    },

    { path: 'home/:carId', redirectTo: 'cars/:carId', pathMatch: 'full' },
    { path: 'car-create', component: CarCreateComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile-edit', component: ProfileEditComponent, canActivate: [AuthGuard] },

    { path: 'error', component: ErrorMsgComponent },

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
