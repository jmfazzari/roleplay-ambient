import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
