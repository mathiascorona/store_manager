import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'clients',
        loadComponent: () => import('./modules/clients/clients.component').then(m => m.ClientsComponent),
    }
];
