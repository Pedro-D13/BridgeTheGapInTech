import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';


const modules = [CommonModule,LayoutModule]

const components = []


@NgModule({
  declarations: [components],
  exports:[...components],
  imports: [
    ...modules
  ]
})
export class SharedModule { }
