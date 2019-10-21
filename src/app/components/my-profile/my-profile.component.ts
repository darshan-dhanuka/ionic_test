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
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public names;
  public email;
  public phoneNumber;
  public gender;

  constructor() {
    this.names ='John Doe';
    this.email ='John@enappd.com';
    this.phoneNumber='+91 9878745214';
    this.gender ='Male'
   }

  ngOnInit() {}

}
