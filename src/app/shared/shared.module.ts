import {
  LayoutModule
} from '@angular/cdk/layout';
import {
  CommonModule
} from "@angular/common";
import {
  NgModule
} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {
  MatMenuModule
} from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import { AboutComponent } from "src/app/about/about.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { LandingPageComponent } from "src/app/landing-page/landing-page.component";
import { TeamComponent } from 'src/app/team/team.component';
import { ToolbarComponent } from "src/app/toolbar/toolbar.component";





const modules = [CommonModule, LayoutModule, MatToolbarModule, MatMenuModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule,MatChipsModule]
// LandingPageComponent,TeamComponent,
const components = [LandingPageComponent,TeamComponent,AboutComponent,ContactComponent,ToolbarComponent ]


@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    ...modules
  ]
})
export class SharedModule {}
