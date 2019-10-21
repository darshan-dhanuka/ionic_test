/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { UtilService } from '../../../services/util/util.service';
import { AuthenticationService1 } from '../../../authentication.service';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';
  private form: any;
  constructor(private platform: Platform, public loadingController: LoadingController,
    public alertController:AlertController,
    private splashScreen: SplashScreen,private menuCtrl: MenuController,public auth: AuthenticationService1) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }
}
