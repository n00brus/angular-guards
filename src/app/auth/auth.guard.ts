import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationServiceService } from '../services/authentication-service.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authentication: AuthenticationServiceService) {}
  canActivate(): Observable<boolean> {
    return this.authentication.getLog().pipe(
      map((answer) => {
        return answer;
      })
    );
  }
}
