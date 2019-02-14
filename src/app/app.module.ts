import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FFImgOverlayModule } from 'ff-img-overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FFImgOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
