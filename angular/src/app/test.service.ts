import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  test(){
    const headers = new HttpHeaders().set('content-type', 'application/json')

    return this.http.get('http://localhost:3000', {headers}).subscribe((res) => {
      console.log(res);
    })
  }
}
