import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "src/app/shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastPageComponent } from './podcast-page/podcast-page.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
