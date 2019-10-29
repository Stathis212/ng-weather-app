import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const apiKey = 'e9fc171ebf8d729025d63a594c267f92';
      const paramsWithApiKey = request.params.append('appid', apiKey);
      request = request.clone({
        params: paramsWithApiKey
      });

      return next.handle(request);
  }
}
