import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'react-exercise',
  templateUrl: './ReactExercise.component.html',
})
export class ReactExercise implements OnInit, OnChanges {

  valueTest:number;
  style:string;
  color:string="black";
  constructor() {
    this.valueTest=0;
    this.style=`color:${this.color}`
   }

  ngOnInit(): void {
  }

  ngOnChanges():void{

  }



  public increase():void{
    this.valueTest=this.valueTest+1
    if(this.valueTest>=5){
      console.log("executed")
      this.style="color:orange"

    }
    if(this.valueTest>=10){
      console.log("executed")
      this.style="color:red"

    }
  }

}
