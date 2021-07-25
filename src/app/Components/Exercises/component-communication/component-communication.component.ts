import { Component } from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css'],
})
export class ComponentCommunicationComponent  {

  constructor() { }
  value:number=0


  onSentVal(value:any){
    this.value=value
  }

}
