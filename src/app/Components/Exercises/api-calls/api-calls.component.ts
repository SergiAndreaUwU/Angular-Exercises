import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/Api/book.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
})
export class ApiCallsComponent implements OnInit, OnDestroy {
  apiCall!: Subscription;

  constructor(private apiCall$: BookService, private promise_apiCall: BookService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.apiCall) {
      this.apiCall.unsubscribe();
      console.log('unsubscribed!');
    } else {
      console.log('move along, nothing to unsubscribe here');
    }
  }

  //observables
  public observable_getBooks(): void {
    this.apiCall = this.apiCall$.observable_getBooks().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.error(`something went wrong: ${e}`);
      },
      complete: () => {},
    });
  }

  public observable_insertBook(): void {}

  //promises
  public promise_getBooks(){
    this.promise_apiCall.promise_getBooks()
  }
}
