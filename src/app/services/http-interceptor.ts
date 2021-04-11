// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, throwError } from "rxjs";
// import { catchError, finalize, retry } from "rxjs/operators";
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })

// export class WpHttpInterceptor implements HttpInterceptor{
//   constructor(private auth: AuthService){}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Inside Interceptor');
//     let tokenData = this.auth.isLoggedIn();
//     req =req.clone({
//       setHeaders: {
//         Authorization:`Bearer ${tokenData?.accessToken}`,
//       }
//     });
//     return next.handle(req).pipe(
//       retry(1),
//       catchError(this.handleError),
//       finalize(() => {
//         console.log(
//           'Log every Http call',
//           `URL - ${req.url} , METHOD - ${req.method}`
//         );
//       })
//     );
//   }
//   private handleError(error: HttpErrorResponse){
//     console.log('Logging error..',error);
//     return throwError('an error occured');
//   }
// }


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
          // const cloned = req.clone({
          //   headers: req.headers.set('Authorization',
          //       'Token ' + idToken)
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
