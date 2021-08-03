import { Component } from '@angular/core';
// @ts-ignore
import { fruitFactory } from '../../../Shared/globalScripts';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  listOfFruits: any = [];
  generatorOfFruits = fruitFactory();
  errorMessage: string = '';

  //unfinished
  handleClick() {
    this.addFruitToTheList();

    if (this.checkIfMaxReached()) {
      this.setErrors();
    }
  }

  checkIfMaxReached(): boolean{

    return true
  }

  setErrors(){
    
  }

  addFruitToTheList() {
    if (this.listOfFruits.length <= 10) {
      const newFruit = this.generatorOfFruits();
      this.listOfFruits.push(newFruit);
    }
  }
}
