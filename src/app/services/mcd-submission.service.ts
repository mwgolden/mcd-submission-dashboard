import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McdSubmissionService {

  constructor(private http: HttpClient) { }

  loadFileDetails(fileType:string): Observable<any> {
    console.log(`http://localhost:3000/${fileType}`)
    return this.http.get(`http://localhost:3000/${fileType}`)
  }
}
