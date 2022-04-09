import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpclient: HttpClient) { }

  getdetails() {
    return this.httpclient.get('http://localhost:3000/posts')

  }
  adddetails(data: any) {

    return this.httpclient.post('http://localhost:3000/posts', data)


  }

}
