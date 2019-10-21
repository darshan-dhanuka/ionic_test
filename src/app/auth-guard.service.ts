import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService1 } from './authentication.service'

@Injectable()
/*export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService1, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}*/
export class AuthGuardService  {
  constructor(private auth: AuthenticationService1, private router: Router) {}

  
}