import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private _toasts = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this._toasts.asObservable();

  show(message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) {
    const toast: Toast = { message, type };
    this._toasts.next([...this._toasts.getValue(), toast]);

    // setTimeout(() => {
    //   this._toasts.next(this._toasts.getValue().filter(t => t !== toast));
    // }, duration);
  }

}
