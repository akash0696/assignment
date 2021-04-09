import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://demo.credy.in/api/v1/usermodule/login/';
  constructor(private http: HttpClient) {}


}
