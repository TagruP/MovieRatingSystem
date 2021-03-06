import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {username: '', password: ''};
  error = false;

  constructor(private auth: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.auth.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });

    if(this.auth.authenticated)
      this.error = false;
    else
      this.error = true;

    return false;
  }

}
