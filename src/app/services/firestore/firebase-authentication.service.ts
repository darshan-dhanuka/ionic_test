/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserDataService } from '../data-services/user-data.service';
import { User } from 'firebase';
import { resolve } from 'url';
import { UtilService } from '../util/util.service';
import * as firebase from 'firebase';

export class AuthInfo {
    constructor(public $uid:string) {}

    isLoggedIn() {
        return !!this.$uid;
    }
}

@Injectable()
export class AuthenticationService {
    static UNKNOWN_USER = new AuthInfo(null);
    public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthenticationService.UNKNOWN_USER);

    constructor(private fireAuth: AngularFireAuth, private userDataServ: UserDataService,private util:UtilService) {
        
        this.fireAuth.authState.pipe(
            take(1)
        ).subscribe(user => {
            if (user) {
                this.authInfo$.next(new AuthInfo(user.uid));
            }
        });
    }
    public forgotPassoword(email:string) {
        this.fireAuth.auth.sendPasswordResetEmail(email).then(()=> {
           this.util.presentToast('Email Sent',true ,'bottom',2100)
        }).catch(err => this.util.presentToast(`${err}`,true,'bottom',2100));

    }

    public createAccount(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    if (res.user) {
                        this.authInfo$.next(new AuthInfo(res.user.uid));
                        this.userDataServ.create({
                            email: email,
                            id: res.user.uid,
                            username: res.user.displayName
                          });
                        resolve(res.user);
                    }
                })
                .catch(err => {
                    
                    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                    reject(`creation failed ${err}`)
                });
        });
    }

    public login(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    if (res.user) {
                        console.log(res.user);
                        this.authInfo$.next(new AuthInfo(res.user.uid));
                        resolve(res.user);
                    }
                })
                .catch(err => {
                    
                    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
                    reject(`login failed ${err}`)
                });
        });
    }
    public login_auth(user_id: string) {
        this.authInfo$.next(new AuthInfo(user_id));
       // return this.fireAuth.auth.signOut();
    }
    public logout(): Promise<void> {
        this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
        return this.fireAuth.auth.signOut();
    }
    public checkAuth() {
        return new Promise((resolve) => {
            this.fireAuth.auth.onAuthStateChanged(user => {
                resolve(user);
             })    
        })
    }
    public loginWithFacebook(accessToken) {
        const credential = firebase.auth.FacebookAuthProvider
            .credential(accessToken);
        return this.fireAuth.auth.signInWithCredential(credential)
    }
    public fbLogin(): Promise<any> {
        return this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    }
    public loginWithTwitter(accessToken, accessSecret) {
        const credential = firebase.auth.TwitterAuthProvider
            .credential(accessToken, accessSecret);
        return this.fireAuth.auth.signInWithCredential(credential)
    }
    public twitterLogin(): Promise<any> {
        return this.fireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    }
    public loginWithGoogle(accessToken, accessSecret) {
        const credential = accessSecret ? firebase.auth.GoogleAuthProvider
            .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
        return this.fireAuth.auth.signInWithCredential(credential)
    }
    public googleLogin(): Promise<any> {
        return this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    public createSocialLoginUser(user): Promise<any>{
        this.authInfo$.next(new AuthInfo(user.uid));
        return this.userDataServ.create({
            email: user.email,
            id: user.uid,
            username: user.displayName
            });
    }
}
