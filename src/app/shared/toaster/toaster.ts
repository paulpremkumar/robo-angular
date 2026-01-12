import { Component } from '@angular/core';
import { ToasterService, Toast } from './toaster-service';
import { AsyncPipe, CommonModule, NgForOf } from '@angular/common';
@Component({
  selector: 'app-toaster',
  imports: [CommonModule, NgForOf, AsyncPipe],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
  standalone:true
})
export class Toaster {
toasts$ :any;

  constructor(private toastService: ToasterService) {
    this.toasts$ = this.toastService.toasts$;
  }

  toastClass(type: string) {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'info': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  }

}
