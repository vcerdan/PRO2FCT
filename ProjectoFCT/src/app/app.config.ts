import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter }       from '@angular/router';
import { provideHttpClient }   from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { routes }      from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Sólo inicializamos Ionic sin animaciones
    importProvidersFrom(IonicModule.forRoot({ animated: false })),

    // Cliente HTTP
    provideHttpClient(),

    // Routing básico
    provideRouter(routes)
  ]
};
