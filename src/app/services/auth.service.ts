import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  loginUser(data: any): Observable<any>{
    // console.log('I am server');
    return this.http.post<any>(`${baseUrl}v1/usermodule/login/`, data)
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.data.token);
    }));
    }
    public isLoggedIn(): boolean{
      // return localStorage.getItem('access_token') !== null;
      const token = localStorage.getItem('access_token');
      if (token == null)   {
          this.router.navigate(['/login']);
          return false;
      }
      return true;
    }

    public logout(): void{
      localStorage.removeItem('access_token');
    }
}
