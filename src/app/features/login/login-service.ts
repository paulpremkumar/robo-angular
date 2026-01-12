import { inject, Injectable, runInInjectionContext, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient){
    
  }
  loginUser(param:any){
   //  const http = inject(HttpClient);
 return this.http.post('https://dummyjson.com/auth/login', param);

    // const signalResponse = toSignal(response$, { initialValue: {} });
    // this.loginSignal.set(signalResponse());

//  return runInInjectionContext(this['ɵinj'], () => {
//       const response$ = this.http.post('https://dummyjson.com/auth/login', param);
//       return toSignal(response$, { initialValue: {} });
//     });
    
  }
  
}
