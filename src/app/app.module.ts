import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopComponent } from './Components/top/top.component';
import { MiddleComponent } from './Components/middle/middle.component';
import { BottomComponent } from './Components/bottom/bottom.component';
import { StructuralDirectivesComponent } from './Components/Exercises/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Components/Exercises/attribute-directives/attribute-directives.component';
import { ApiCallsComponent } from './Components/Exercises/api-calls/api-calls.component';
import { ComponentCommunicationComponent } from './Components/Exercises/component-communication/component-communication.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    ApiCallsComponent,
    ComponentCommunicationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
