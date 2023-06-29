import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then( m => m.HomePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'bluetooth',
        loadComponent: () => import('../views/bluetooth/bluetooth.page').then( m => m.BluetoothPage)
      },
      {
        path: 'statistic',
        loadComponent: () => import('../views/statistic/statistic.page').then( m => m.StatisticPage)
      },
      {
        path: 'apropos',
        loadComponent: () => import('../views/apropos/apropos.page').then( m => m.AproposPage)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];