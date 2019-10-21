/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { UtilService } from '../../../services/util/util.service';
import { AuthenticationService } from '../../../services/firestore/firebase-authentication.service';
import { AuthenticationService1 } from '../../../authentication.service';
import { IfStmt } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 public email:string;
 public password:string;
 private form: any;
 errorcode: any;
  constructor(private platform: Platform, public loadingController: LoadingController,
    public alertController: AlertController,
    private splashScreen: SplashScreen, public util: UtilService, private menuCtrl: MenuController, private authServ: AuthenticationService,public auth: AuthenticationService1) {
      this.email = '';
      this.password = '';
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  signin() {
    if (this.util.validateEmail(this.email) && this.password !== '') {
   /* this.util.openLoader();
    this.auth.login(this.email, this.password).subscribe(
      result => {
        //console.log(result['name']);
        this.errorcode = result['errorcode'];
        console.log(this.errorcode);
        if(this.errorcode == 0)
        {
          //success
          this.authServ.login_auth(this.email);
          this.util.navigate('home', true);
          userData => {
            this.util.navigate('home', false);
            this.email = '';
            this.password = '';
          }
    
        }
        else 
        {
          //failure
         
          this.util.presentToast('Invalid Credentials!', true, 'bottom', 2100);
          this.util.closeLoading();
        }
      },
      err => {
		  
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }
        //this.util.presentToast('Invalid Credentials!', true, 'bottom', 2100);
      }
    )*/

    /*this.auth.login(this.email, this.password).then(
      userData => {
        this.util.navigate('home', false);
        this.email = '';
        this.password = '';
      }
    ).catch(err => {
      if (err) {
        this.util.presentToast(`${err}`, true, 'bottom', 2100);
      }

    }).then(el => this.util.closeLoading());*/

     this.util.openLoader();
      this.authServ.login(this.email, this.password).then(
        userData => {
          this.util.navigate('home', false);
          this.email = '';
          this.password = '';
        }
      ).catch(err => {
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }

      }).then(el => this.util.closeLoading());
      
    } else {
      this.util.presentToast('Please enter email and password', true, 'bottom', 2100);
    }
  }

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Email',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name1',
          type: 'email',
          placeholder: 'Enter your email',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            const value = this.util.validateEmail(res.name1);
            this.authServ.forgotPassoword(res.name1);
            return value;
          }
        }
      ]
    });
    await alert.present();
  }

  facebookLogin($event) {
    if ($event === 'browser') {
      this.authServ.fbLogin().then(
        succes => {
          console.log('success in fb login', succes);
          this.authServ.createSocialLoginUser(succes.user);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in fb login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      );
    } else {
      this.authServ.loginWithFacebook($event).then(
        succes => {
          console.log('success in fb login', succes);
          this.authServ.createSocialLoginUser(succes);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in fb login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      )
    }
  }
  twitterLogin($event) {
    if ($event.isBrowser) {
      this.authServ.twitterLogin().then(
        succes => {
          console.log('success in twitter login', succes);
          this.authServ.createSocialLoginUser(succes.user);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in twitter login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      );
    } else {
      this.authServ.loginWithTwitter($event.token, $event.secret).then(
        succes => {
          console.log('success in twitter login', succes);
          this.authServ.createSocialLoginUser(succes);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in twitter login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      )
    }
  }

  googleLogin($event) {
    if ($event.isBrowser) {
      this.authServ.googleLogin().then(
        succes => {
          console.log('success in google login', succes);
          this.authServ.createSocialLoginUser(succes.user);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in google login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      );
    } else {
      this.authServ.loginWithGoogle($event.idToken, $event.accessToken).then(
        succes => {
          console.log('success in google login', succes);
          this.authServ.createSocialLoginUser(succes);
          this.util.navigate('home', false);
        }
      ).catch(
        err => {
          console.log(err, 'error in google login');
          this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
        }
      )
    }
  }
}
