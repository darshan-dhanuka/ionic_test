
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
  selector: 'app-card7',
  templateUrl: './card7.page.html',
  styleUrls: ['./card7.page.scss'],
})
export class Card7Page implements OnInit {
  public dataLists;
public activeIndex;

  constructor(public gridServ:GridServiceService) {
    this.dataLists = this.gridServ.medicalList;
    this.activeIndex = 0;
    console.log('dataLists',this.dataLists,this.activeIndex)
   }

  ngOnInit() {
  }

  activeRow(index){
    console.log('index',index)
    this.activeIndex = index;
  }

}
