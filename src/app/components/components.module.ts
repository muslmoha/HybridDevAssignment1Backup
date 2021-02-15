import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationalComponent } from './national/national.component';
import { ProvincialComponent } from './provincial/provincial.component';



@NgModule({
  declarations: [NationalComponent, ProvincialComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NationalComponent,
    ProvincialComponent
  ]
})
export class ComponentsModule { }
