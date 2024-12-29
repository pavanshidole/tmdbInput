import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviescardComponent } from './shared/components/moviescard/moviescard.component';
import { MovieComponent } from './shared/components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviescardComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
