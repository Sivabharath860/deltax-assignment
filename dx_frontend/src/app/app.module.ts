import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './_modal/modal.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TopTenSongsComponent } from './components/top-ten-songs/top-ten-songs.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopTenArtistsComponent } from './components/top-ten-artists/top-ten-artists.component';
import { AddSongComponent } from './components/add-song/add-song.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopTenSongsComponent,
    MainPageComponent,
    TopTenArtistsComponent,
    AddSongComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    ModalModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
