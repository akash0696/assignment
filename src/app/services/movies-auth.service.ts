import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesAuthService {

  constructor(private http: HttpClient) { }

  getMovies(){
    // console.log('I am server');
    return this.http.get<any>(`${baseUrl}v1/maya/movies/`);
    }
}
