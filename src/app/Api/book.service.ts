import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, pipe } from 'rxjs';
import {tap,catchError,map} from "rxjs/operators"
import { IBook } from '../Models/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL:string="http://localhost:4000/api/books"
  constructor(private http: HttpClient) { }


  public getBooks():Observable<IBook>{
    return this.http.get<IBook>(this.URL) 
  }

  public insertBook(book: IBook):Observable<IBook>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: ''
        
      })
      
    };

    return this.http.post<IBook>(this.URL,book,httpOptions)
  }
}
