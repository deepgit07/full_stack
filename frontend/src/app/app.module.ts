import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateRatingComponent } from './update-rating/update-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { InfyMovieService } from './infy-movie.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    UpdateRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InfyMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
