import { AuthenticationService } from './../core/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private authService: AuthenticationService) { }
    login() {
      this.authService.login('1');
    }
 }
