import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Books } from '../interceptors/books';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  baseUrl = environment.baseURL;
  constructor(private http:HttpClient) { }

  getPub(id:number){
    return this.http.get(`${this.baseUrl}getpub/${id}`)
  }
}
