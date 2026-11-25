import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard')
            .then(m => m.Dashboard)
      }
    ]
  }
];
