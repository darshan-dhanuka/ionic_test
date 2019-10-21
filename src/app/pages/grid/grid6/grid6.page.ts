/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { GridServiceService } from 'src/app/services/grid/grid-service.service';

@Component({
  selector: 'app-grid6',
  templateUrl: './grid6.page.html',
  styleUrls: ['./grid6.page.scss'],
})
export class Grid6Page implements OnInit {
public medicines;
  constructor(public gridServ:GridServiceService) { 
    this.medicines = this.gridServ.medicines
  }

  ngOnInit() {
  }

}
