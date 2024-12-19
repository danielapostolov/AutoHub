import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { CarsComponent } from './features/car/cars/cars.component';
import { CarCreateComponent } from './features/car/car-create/car-create.component';
import { CarDetailsComponent } from './features/car/car-details/car-details.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';

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
            { path: ":carId", component: CarDetailsComponent },


        ]
    },

    { path: 'home/:carId', redirectTo: 'cars/:carId', pathMatch: 'full' },
    { path: 'car-create', component: CarCreateComponent, canActivate:[AuthGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactComponent },

    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
