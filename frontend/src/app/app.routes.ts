import { Routes } from '@angular/router';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    {path: "", component: WelcomePage},
    {path: "login", component: LoginPage}
];
