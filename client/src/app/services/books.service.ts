import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = environment.baseURL;
  
  constructor(private http:HttpClient) { }

  getBook(){
    return this.http.get(`${this.baseUrl}listbook`)
  }

  getBookById(id:number){
    return this.http.get(`${this.baseUrl}bookid/${id}`)
  }
  deletebyId(id:number){
    return this.http.delete(`${this.baseUrl}deletebook/${id}`)
  }
}
