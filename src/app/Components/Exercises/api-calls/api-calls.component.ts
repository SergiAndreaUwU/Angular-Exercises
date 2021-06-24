import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Api/book.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
})
export class ApiCallsComponent implements OnInit {

  constructor(private apiCall$:BookService) { }

  ngOnInit(): void {
  }

  public getBooks():void {
    console.log("executed")

   this.apiCall$.getBooks().subscribe((data)=>{
    console.log("data",data)

   })
 }

 public callApi(){
  this.getBooks()
 }

}
