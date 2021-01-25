import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

const modules = [CommonModule]

const components = []


@NgModule({
  declarations: [components],
  exports:[...components],
  imports: [
    ...modules
  ]
})
export class SharedModule { }
