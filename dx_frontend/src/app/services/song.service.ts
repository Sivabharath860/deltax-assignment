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
export class SongService {

  constructor(private http: HttpClient) { }
  addSong(formData: FormData): Observable<any>{
    return this.http.post(BASE_URL+"addS",formData);
  }
  checkSong(value: string): Observable<any>{
    return this.http.post(BASE_URL+"checkS",{value});
  }
  // checkArtistByName(name: string): Observable<any>{
  //   return this.http.post(BASE_URL+"checkA",{name},httpOptions);
  // }
}
