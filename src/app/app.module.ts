import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Mat from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Mat.MatExpansionModule,
    Mat.MatButtonModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
