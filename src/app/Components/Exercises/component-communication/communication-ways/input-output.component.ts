import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
    using input and output
    <input type="text" #input/>
    <button (click)="handleClick(input.value)" >Send value</button>
  `,
  styleUrls: ['../component-communication.component.css'],
})
export class InputOutputComponent implements OnInit {
  constructor() {}

  @Output() sendVal: EventEmitter<number>= new EventEmitter<number>()

  ngOnInit(): void {}

  handleClick(value:any){
    this.sendVal.emit(value)
  }
}
