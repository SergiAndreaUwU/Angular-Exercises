import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'react-exercise',
  templateUrl: './ReactExercise.component.html',
})
export class ReactExercise implements OnInit, OnChanges {
  constructor() {
    this.valueTest = 0;
    this.style = `color:${this.color}`;
  }

  valueTest: number;
  style: string;
  color: string = 'black';

  ngOnInit(): void {}

  ngOnChanges(): void {}

  public increase(): void {
    this.valueTest = this.valueTest + 1;
    if (this.valueTest >= 5) {
      this.style = 'color:orange';
    }
    if (this.valueTest >= 10) {
      this.style = 'color:red';
    }
  }
}
