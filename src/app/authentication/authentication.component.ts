import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  Login;
  Password;
  constructor(private authentication: AuthenticationServiceService) {}

  ngOnInit(): void {}
  authorise(ev) {
    if (this.Login && this.Password) {
      this.authentication.selLog(this.Login.trim(), this.Password.trim());
    }
  }
}
