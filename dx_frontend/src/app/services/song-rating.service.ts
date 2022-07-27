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
export class SongRatingService {

  constructor(private http: HttpClient) { }
  getSongsRatedByUser(userId: string): Observable<any>{
    return this.http.post(BASE_URL+"getSRated",{userId},httpOptions);
  }
  
  rateSong(songId: string, userId: string, rating: string): Observable<any>{
    return this.http.post(BASE_URL+"addrating",{songId,userId,rating},httpOptions);
  }
}
