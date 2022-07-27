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
export class TopTenSongsService {

  constructor(private http: HttpClient) { }
  getTopTenSongs(): Observable<any>{
    return this.http.get(BASE_URL+"tTenS",httpOptions);
  }
}
