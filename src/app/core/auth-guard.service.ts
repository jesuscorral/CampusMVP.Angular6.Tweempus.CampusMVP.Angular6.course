import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  canActivate() {
    if(this.authService.token != null) {
      return true;
    }
    
    this.router.navigate(['login']);
    return false;
  }
}
