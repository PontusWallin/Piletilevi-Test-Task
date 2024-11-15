import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home-page/home-page.component')
        .then(m => m.HomePageComponent)
  },
  {
    path: 'back-office',
    loadComponent: () =>
      import('./back-office-page/back-office-page.component')
        .then(m => m.BackOfficePageComponent)
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports-page/reports-page.component')
        .then(m => m.ReportsPageComponent)
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./help-page/help-page.component')
        .then(m => m.HelpPageComponent)
  },
  {
    path: 'discounts',
    loadComponent: () =>
      import('./discounts-page/discounts-page.component')
        .then(m => m.DiscountsPageComponent)
  },
];
