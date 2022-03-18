import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'http://localhost:8080/api/getAll';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) {}
 
  // getAllPosts(page: Number, pageSize: Number): Observable<any> {
  //   const curr =url+'?pageSize='+pageSize+'&page='+page;

  //   return this.http.get(curr);
  // }

  getAllPosts(): Observable<any> {
      
      return this.http.get(url);
    }

}