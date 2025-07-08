import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Signup } from './component/signup/signup';

export const routes: Routes = [
    {path: "login", component : Login},
    {path: "signup", component : Signup},
];
