import { Routes } from '@angular/router';
import { MainPage } from './main/main.page';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPage
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'password',
    loadComponent: () => import('./pages/password/password.page').then( m => m.PasswordPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'diary',
    loadComponent: () => import('./pages/diary/diary.page').then( m => m.DiaryPage)
  },
];
