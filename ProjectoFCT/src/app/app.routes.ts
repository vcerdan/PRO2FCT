import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  { path: 'reservas',
    loadComponent: () =>
      import('./pages/reservas/reservas.component').then(m => m.ReservasComponent)
  },
  { path: 'contratos',
    loadComponent: () =>
      import('./pages/contratos/contratos.component').then(m => m.ContratosComponent)
  },
  { path: 'amigos',
    loadComponent: () =>
      import('./pages/amigos/amigos.component').then(m => m.AmigosComponent)
  },
  { path: '**', redirectTo: 'home' }
];
