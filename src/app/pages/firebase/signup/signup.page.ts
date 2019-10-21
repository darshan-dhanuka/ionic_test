/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util/util.service';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/firestore/firebase-authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  password = '';

  constructor(public util:UtilService, private menuCtrl: MenuController, private authServ: AuthenticationService) { 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  signup(){
    if(this.first_name !== '' && this.last_name !== '' && this.email !== '' && this.password !== '' && this.util.validateEmail(this.email)){
      this.authServ.createAccount(this.email, this.password).then(
        userData => {
          this.util.presentToast('Thanks for Signup', true, 'bottom', 2100);
         
          this.util.navigate('',false);
        }
      ).catch(err => {
        if (err){
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }       
      });
    } else {
      this.util.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
    }
  }

}
