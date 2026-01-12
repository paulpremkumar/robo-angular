// import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// @Injectable({ providedIn: 'root' })
// export class AuthInterceptor implements HttpInterceptor {
//    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
//     const token=localStorage.getItem("token");
//     console.log(token,"token")
//     if(token){
//      console.log(token,"token")
//      let authReques= req.clone({
//           setHeaders: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//       })
//        return next.handle(authReques);
//     }
//     return next.handle(req);
//    }
// }


import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('token') || '';
  console.log(token,"token");
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  return next(authReq);
}

