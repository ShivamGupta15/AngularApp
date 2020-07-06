import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartphonesService {

  constructor() { }


  callSmartPhone(){
    return [ {"id": 1, "name": "Nokia", "price": 10000},
    {"id": 2, "name": "Apple", "price": 70000}];
  }
}
