import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Global HTTP error:', error);

      // Example: handle 401 Unauthorized globally
      if (error.status === 401) {
        alert('Session expired. Please login again.');
        // Optionally redirect to login page
      }

      // Handle other status codes
      if (error.status === 500) {
        alert('Server error. Please try later.');
      }

      return throwError(() => error);
    })
  );
}
