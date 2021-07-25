import { Component, OnInit } from '@angular/core';
import { IButtonLink } from '../../Models/IButtonLink';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  buttons:Array<IButtonLink>=[
    {text:"React-like Exercise",url:"ReactExercise"},
    {text:"Structure directives",url:"StructuralDirectives"},
    {text:"Attribute Directives",url:"AttributeDirectives"},
    {text:"API Calls",url:"ApiCalls"},
    {text:"Component Communication",url:"ComponentCommunication"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
