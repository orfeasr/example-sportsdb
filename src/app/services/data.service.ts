import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllSports(): Observable < any > {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`;
    return this.http.get<any>(url);
  }
}

