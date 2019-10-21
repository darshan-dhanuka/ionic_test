/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { RouterModule , Routes,Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fullname: string;
  mobileno: string;
  email: string;

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  gotoMain() {

    console.log('fullname: ' + this.fullname);
    console.log('mobileno: ' + this.mobileno);
    console.log('email: ' + this.email);
    this.router.navigate(['/']);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
