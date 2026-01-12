import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { ProductResolver } from './shared/resolvers/product.resolver';
import { AuthGuard } from './shared/authgaurd/auth-gaurd';
export const routes: Routes = [
    {
     path:'',
     redirectTo:"login",
     pathMatch:'full'
    },
    {
        path:"login",
        loadComponent:()=>import("./features/login/login").then(m=>m.Login),
        data: { title: 'Login', info: 'Login' },
    },
    {
        path:"product",
        loadComponent:()=>import("./features/product/product").then(m=>m.Product),
        data: { title: 'Product', info: 'Product' },
        resolve:{ loaded: ProductResolver },
        canActivate:[AuthGuard]
    }
];
