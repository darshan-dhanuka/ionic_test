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
  selector: 'app-grid4',
  templateUrl: './grid4.page.html',
  styleUrls: ['./grid4.page.scss'],
})
export class Grid4Page implements OnInit {

  public lists: Array<any>;
  showToolbar: boolean;
  shownGroup = null;

  constructor(public gridServ: GridServiceService) {
    this.lists = this.gridServ.accordianLists;
  }

  ngOnInit() {
    this.toggleGroup(0)
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };


}
