import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';

@NgModule({
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
