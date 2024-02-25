import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './searchresult/searchresult.component';
import { YoutubeService } from './youtubeservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomComponent } from './hom/hom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultComponent,
    NavbarComponent,
    AboutusComponent,
    HomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

