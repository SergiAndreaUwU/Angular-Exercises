import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BookService } from 'src/app/Api/book.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
})
export class ApiCallsComponent implements OnInit, OnDestroy {
  apiCall!: Subscription

  constructor(private apiCall$:BookService) {
   }

  ngOnInit(): void {

  }

  ngOnDestroy():void{
    
    if(this.apiCall){
      this.apiCall.unsubscribe()
      console.log("unsubscribed!")
    }else{
      console.log("move along, nothing to unsubscribe here")
    }
  }

  public getBooks():void {
    
    this.apiCall=this.apiCall$.getBooks().subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(e)=>{console.error(`something went wrong: ${e}`)},
      complete:()=>{},
    })

 }


}
