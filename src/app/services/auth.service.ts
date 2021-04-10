import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(data: any): Observable<any>{
    // console.log('I am server');
    return this.http.post<any>(`${baseUrl}v1/usermodule/login/`, data);
    }
}
