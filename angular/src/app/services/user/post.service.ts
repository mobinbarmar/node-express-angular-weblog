import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post(body: any){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.http.post<any>('http://localhost:3000/user/', body, { headers }).subscribe((message) => {
      alert(message.message)
    })
  }
}
