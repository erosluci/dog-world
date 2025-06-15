import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DogCollectionPageComponent } from './components/dog-collection-page/dog-collection-page.component';
import { SingleDogPageComponent } from './components/single-dog-page/single-dog-page.component';
import { RandomDogFactPageComponent } from './components/random-dog-fact-page/random-dog-fact-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'main', component: DogCollectionPageComponent, canActivate: [authGuard] },
    { path: 'single', component: SingleDogPageComponent, canActivate: [authGuard] },
    { path: 'facts', component: RandomDogFactPageComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
