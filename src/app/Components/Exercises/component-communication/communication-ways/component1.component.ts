import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      {{message}}
    </p>
    <p>{{value}}</p> 
  `,
  styles: [
  ]
})
export class Component1Component implements OnInit,OnChanges {

  constructor() { }
  
  @Input() value:any=0;
  message:string=""

  ngOnInit():void{
    this.message="el valor inicial es:"
  }

  ngOnChanges(): void {
    this.message="el valor pasado fue"
  }

}
