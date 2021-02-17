import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  user: string = 'someuser';
  login;
  password;
  constructor() {}
  selLog(login, password) {
    this.login = login;
    this.password = password;
  }
  getLog(): Observable<boolean> {
    if (this.login == 'admin' && this.password == 'admin') {
      return of(true);
    } else {
      return of(false);
    }
  }
}
