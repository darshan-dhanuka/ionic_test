/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverStatusService {
 public driverStatus: boolean;
 userCard:boolean;
  constructor() { 
    this.driverStatus = false;
    this.userCard = false;
  }
}
