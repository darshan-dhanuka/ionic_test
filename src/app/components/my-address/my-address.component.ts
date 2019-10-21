/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {
public address;
  constructor() {
   this.address= [
      {name:'John Deo', flat:'D Block', locality:'Jaipur', nickName:'office' },
      {name:'Aditya Gour', flat:'D Block Malviya Nagar', locality:'Jaipur', nickName:'Home' }]
   }

  ngOnInit() {}

}
