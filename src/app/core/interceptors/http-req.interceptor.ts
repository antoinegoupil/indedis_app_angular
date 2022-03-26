import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string | null = sessionStorage.getItem('Token');

    // ajoute le token au header

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    // type de req (Content-type)
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req);
  }
}
