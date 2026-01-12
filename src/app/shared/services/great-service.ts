import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreatService {
  getMessageByName(name:string){
    return `Welcome ${name}`;
  }
}
