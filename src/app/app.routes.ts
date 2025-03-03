import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'products/hair',
        loadComponent: () => import('./pages/products/hair/hair.component').then(m => m.HairComponent)
    },
    {
        path: 'products/body',
        loadComponent: () => import('./pages/products/body/body.component').then(m => m.BodyComponent)
    },
    {
        path: 'products/face',
        loadComponent: () => import('./pages/products/face/face.component').then(m => m.FaceComponent)
    },
    {
        path: 'products/kits',
        loadComponent: () => import('./pages/products/kits/kits.component').then(m => m.KitsComponent)
    },
    {
        path: 'products/about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
];
