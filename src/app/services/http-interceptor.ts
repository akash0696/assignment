import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class WpHttpInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let idToken = localStorage.getItem('access_token');

      if (idToken != null) {
          const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Token ' + idToken)
          });
          return next.handle(authRequest);
        }
        else {
          return next.handle(req);
        }
    }
}
