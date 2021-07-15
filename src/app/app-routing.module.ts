import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactExercise } from './Components/ReactExercise/ReactExercise.component';
import {PageNotFound404} from "./Shared/PageNotFound404.component";
import { StructuralDirectivesComponent } from './Components/Exercises/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Components/Exercises/attribute-directives/attribute-directives.component';
import { ApiCallsComponent } from './Components/Exercises/api-calls/api-calls.component';
import {ComponentCommunicationComponent} from "./Components/Exercises/component-communication/component-communication.component"


const routes: Routes = [
{path:"ReactExercise", component:ReactExercise},
{path:"StructuralDirectives", component:StructuralDirectivesComponent},
{path:"AttributeDirectives", component:AttributeDirectivesComponent},
{path:"ApiCalls",component:ApiCallsComponent},
{path:'ComponentCommunication',component:ComponentCommunicationComponent},
{path:"**", component:PageNotFound404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
