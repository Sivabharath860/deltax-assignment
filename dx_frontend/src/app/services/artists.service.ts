import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { } 
  getAllArtists(): Observable<any>{
    return this.http.get(BASE_URL+"allArtists",httpOptions);
  }
  checkArtistByName(name: string): Observable<any>{
    return this.http.post(BASE_URL+"checkA",{name},httpOptions);
  }
  addArtist(name: string,dob: string,bio:string): Observable<any>{
    return this.http.post(BASE_URL+"addArtist",{name,dob,bio},httpOptions);
  }
  addArtistToSong(artistId:string,songId:string):Observable<any>{
    return this.http.post(BASE_URL+"addcomb",{songId,artistId},httpOptions);
  }
}
