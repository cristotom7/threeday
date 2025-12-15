import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
=======
import { routes } from './app.routes';
>>>>>>> 85f96380dc05ed69e1b2e66e31ab758713e45ad0

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes),
  provideHttpClient()
=======
    provideRouter(routes)
>>>>>>> 85f96380dc05ed69e1b2e66e31ab758713e45ad0
  ]
};
