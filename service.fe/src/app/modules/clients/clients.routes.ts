import { Routes } from '@angular/router';
import { AddClientsComponent } from './add-clients/add-clients.component';

export const clientRoutes: Routes = [
    {
        path: 'clients/add-clients',
        loadComponent: () => import('./add-clients/add-clients.component').then(m => AddClientsComponent)
    }
];
