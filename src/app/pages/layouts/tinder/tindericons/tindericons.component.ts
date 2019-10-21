/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, NavParams, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tindericons',
  templateUrl: './tindericons.component.html',
  styleUrls: ['./tindericons.component.scss']
})
export class TindericonsComponent implements OnInit {
  data: any;
  slideOpts = {
    effect: 'flip'
  };
  @Input() value: any;
  show: boolean;
  isIos: boolean;
  constructor(public modalCtrl: ModalController, public navParams: NavParams, public route: Router,public platform:Platform) {
    this.data = this.navParams.get('value')
    console.log(this.data)
    this.show = false
    this.isIos = this.platform.is('ios');

  }

  ngOnInit() {
  }
  closeModal(id: any) {
    this.modalCtrl.dismiss();
    if (id === 'star' || 'refresh' && id !== 'flash') {
      console.log('id_done', id)
      this.route.navigate(['tinderplus'])
    }
  }
  showcustomButton(index: any) {
    console.log(index)
    if (index === 1) {
      this.show = true
      console.log(this.show)
    } else if (index === 0 || 2) {
      this.show = false
      console.log(this.show)
    }
  }
}
