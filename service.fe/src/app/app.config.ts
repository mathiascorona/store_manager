import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { clientRoutes } from './modules/clients/clients.routes';
import { appRoutes } from './app.routes';

const routes = [
  ...appRoutes,
  ...clientRoutes
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
