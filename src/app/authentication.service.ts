import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { DataService1 } from "./data.service";
/*
export interface UserDetails {
  id: number
  name: string
  email: string
  password: string
  exp: number
  iat: number
  state: number
  city: number
  phone: number
  uname: string
  address: string
  dob: string
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  name: string
  email: string
  password: string
  confirm_password: string
  state: number
  city: number
  phone: string
  uname: string
  address: string
  dob: string
  terms: boolean
  referral_code: string				   
}*/

@Injectable()
export class AuthenticationService1 {
  private token: string;
  public user_email: string;

  constructor(private http: HttpClient, private router: Router) {}

  /*private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  // set email id 
  private saveUser_email(user_email: string): void {
    localStorage.setItem('user_email', user_email);
    this.user_email = user_email;
    //console.log("saveemail====" + this.user_email);
  }

  private getUser_email(): string {
    //console.log("getUser_email====" + this.user_email);
    if (!this.user_email) {
      this.user_email = localStorage.getItem('user_email')
    }
    //console.log("getUser_email====" + this.user_email);;
    return this.user_email
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    //console.log(token);
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    //console.log(user);
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
    
  }

  

  public register1(user: TokenPayload): Observable<any> {
      //console.log(user);
      return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/register`, user, {
        headers: {'Content-Type': 'application/json'}
      })
  }

  public login(user: TokenPayload): Observable<any> {
    this.saveUser_email(user.email);
    const base = this.http.post(
        `http://localhost/psl_laravel_git/psl_backend/public/api/login`, 
        {   email: user.email, password: user.password}, 
        {
            headers: {'Content-Type': 'application/json'}
        }
    )
    //console.log(user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public showUserDetails(): Observable<any> 
  {
    this.user_email = this.getUser_email();
    //console.log("showin ====" +this.user_email);
    if(this.user_email)
    {
      return this.http.post(
        `http://localhost/psl_laravel_git/psl_backend/public/api/user_details`, 
        {   email: this.user_email}, 
        {
            headers: {'Content-Type': 'application/json'}
        }
      );
    }
    

  }


  public profile(): Observable<any> {
    return this.http.get(`http://localhost/psl_laravel_git/psl_backend/public/api/profile`, {
        headers: {Authorization: `Bearer ${this.getToken()}`}
    })
  }

  public logout(): void {
    this.token = '';
    this.user_email = '';
    //console.log("logout_email====" + this.user_email);
    window.localStorage.removeItem('usertoken')
    window.localStorage.removeItem('user_email')
    //this.router.navigateByUrl('/');
    this.data.changeMessage('');
    //window.location.reload();
    window.location.href = '/home';
  }

  public getStates(): Observable<any> {
    // console.log(user)
   
     return this.http.get('http://localhost/psl_laravel_git/psl_backend/public/api/state',  {
       headers: {'Content-Type': 'application/json'}
     }).pipe(
      catchError(this.handleError)
    );
 }

 public getCities(stateId: number): Observable<any> {
 
   //console.log("statedid====="+stateId)
   return this.http.get('http://localhost/psl_laravel_git/psl_backend/public/api/city/'+stateId,
    { headers: {'Content-Type': 'application/json'}
   }).pipe(
    catchError(this.handleError)
  );
}
 public fp(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/forgetpw`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}
 public otpfunc(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/verify_otp`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}
 public rpfunc(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/reset_password`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}

public change_password(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/change_password_user`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}

 public sociallogin(user): Observable<any> {

  //console.log("socialemail====="+user.email);
  // return this.http.post('http://localhost/psl_laravel_git/psl_backend/public/api/social/',
  //  { headers: {'Content-Type': 'application/json'}
  // }).pipe(
  //  catchError(this.handleError)
  //);
  this.saveUser_email(user.email);
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/social`, user, {
        headers: {'Content-Type': 'application/json'}
      });
}

public sendotp(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/send_otp`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}
public up_register(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/psl_register`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}
*/
public login(email: string, password: string): Observable<any> {
  return this.http.post(`http://psl_laravel_git/psl_backend/public/api/login-psl`, 
  {   email: email, password:password}, 
   {
    headers: {'Content-Type': 'application/json'}
  });
}

public get_videos(f): Observable<any> {
  return this.http.post(`http://localhost/psl_laravel_git/psl_backend/public/api/get_videos`, f, {
    headers: {'Content-Type': 'application/json'}
  });
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened. Please try again later.');
}

}
