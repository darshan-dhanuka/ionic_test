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
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
 public selectSegment;
public userDetails;

  constructor() {
    this.userDetails = { profileUrl: 'assets/profile/user.jpeg', name: 'John Doe', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
    this.selectSegment = 'profile';
   }

  ngOnInit() {
  }

  editProfile(){
    this.selectSegment = 'profile';
  }

}
