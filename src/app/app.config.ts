import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { loginReducer } from './store/reducers/login.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productReducer} from './store/reducers/product.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ProductEffect } from './store/effects/product.effect';
import { authInterceptor } from './shared/interceptor/authorization-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideRouter(routes),
      // provideEffects([ProductEffect]),
    //  importProvidersFrom(EffectsModule.forRoot([ProductEffect])),
    provideStore({login:loginReducer,product:productReducer}),
     provideEffects([ProductEffect]), // ✅ this is correct
    provideHttpClient(),
     provideStoreDevtools({ maxAge: 25 }) ,
    // provideZonelessChangeDetection(),
    //  HttpClientModule,
    //  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      provideHttpClient(withInterceptors([authInterceptor])),
          provideHttpClient(),
    
      
  ]
};


