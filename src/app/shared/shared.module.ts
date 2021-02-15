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
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { JoinUsComponent } from '../join-us/join-us.component';


import {MatTooltipModule} from '@angular/material/tooltip';






const modules = [CommonModule, LayoutModule, MatToolbarModule, MatMenuModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule,MatExpansionModule, MatChipsModule,MatDividerModule,MatTooltipModule, LayoutModule]
// LandingPageComponent,TeamComponent,
const components = [LandingPageComponent,TeamComponent,AboutComponent,ContactComponent,ToolbarComponent,JoinUsComponent]


@NgModule({
  declarations: [...components, ],
  exports: [...components],
  imports: [
    ...modules
  ]
})
export class SharedModule {}
