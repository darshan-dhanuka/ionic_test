
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
  selector: 'app-grid5',
  templateUrl: './grid5.page.html',
  styleUrls: ['./grid5.page.scss'],
})
export class Grid5Page implements OnInit {
public buzz;
public buzz1
  constructor(public gridServ:GridServiceService) { 
    this.buzz = this.gridServ.buzz;
    this.buzz1 = this.gridServ.buzz1
  }

  ngOnInit() {
  }

}
