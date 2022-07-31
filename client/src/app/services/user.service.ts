import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from '../interceptors/author';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseURL;
  constructor(private http:HttpClient) { }

  adduser(info: Author){
    return this.http.post(`${this.baseUrl}addauth`, info);
  }

  getUser(id:number){
    return this.http.get(`${this.baseUrl}getauth/${id}`);
  }

  delete(data:any){
    return this.http.delete(`${this.baseUrl}deleteauth`, data);
  }

}
