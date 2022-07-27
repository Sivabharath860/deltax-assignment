import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './components/add-song/add-song.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopTenArtistsComponent } from './components/top-ten-artists/top-ten-artists.component';
import { TopTenSongsComponent } from './components/top-ten-songs/top-ten-songs.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent, outlet: 'lg'},
  { path:'tTenS', component: TopTenSongsComponent},
  { path:'tTenA', component: TopTenArtistsComponent},
  { path:'addS', component: AddSongComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
