import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(public httpClient: HttpClient) { }
  getAllstudents(n:any)
  {
console.log('inside service'+n);
    return  this.httpClient.get('http://localhost:8080/allstudents/'+n);
    
  }
}
