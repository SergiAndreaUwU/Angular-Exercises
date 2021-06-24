import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable, pipe } from 'rxjs';
import {tap,catchError,map} from "rxjs/operators"
import { IBook } from '../Interfaces/Ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL:string="https://reqres.in/api"
  constructor(private http: HttpClient) { }


  public getBooks(){
    // return this.http.get<IBook>(`${URL}/?page=2`)
    const MAX=3
    const MIN=1
    // return this.http.get(`${this.URL}/users?page=${Math.random() * (MAX - MIN) + MIN}`)
    
    // const page1=this.http.get(`${this.URL}/users?page=1`)
    // const users=page1.next()
    // const page2=this.http.get(`${this.URL}/users?page=2`)


    return this.http.get(`${this.URL}/users?page=1`) 



  }
}
