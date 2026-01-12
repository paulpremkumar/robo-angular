import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//import { selectIsAuthenticated } from '../store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
  let token=  localStorage.getItem("token");
  if(!token){
    this.router.navigate(['/login']);
     return of(false);
  }else{
     return of(true);
  }
   
  }
}
