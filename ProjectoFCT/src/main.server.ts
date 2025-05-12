import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // si existe

export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withFetch()),
      provideClientHydration(),
      provideRouter(routes) // solo si tienes rutas definidas
    ]
  });
}
