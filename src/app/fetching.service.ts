import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(){

  }
  getList(){
    return fetch('../assets/Product.json');
  }
  


}
