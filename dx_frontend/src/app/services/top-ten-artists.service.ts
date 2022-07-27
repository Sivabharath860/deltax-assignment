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
export class TopTenArtistsService {

  constructor(private http: HttpClient) { }
  getTopTenArtists(): Observable<any>{
    return this.http.get(BASE_URL+"tTenA",httpOptions);
  }
}
