/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GridServiceService } from 'src/app/services/grid/grid-service.service';

@Component({
  selector: 'app-slider5',
  templateUrl: './slider5.component.html',
  styleUrls: ['./slider5.component.scss'],
})
export class Slider5Component implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public medicalList:Array<any>;
  public numbers;
  slideOpts = {
    effect: 'cube',
    zoom:false
  };
  constructor(
    public gridServ:GridServiceService
    ) { 
    this.numbers = Array(6).fill('1'); 
    console.log('array', this.numbers);
    this.medicalList = this.gridServ.medicalList_3
  }

  ngOnInit() {
  }

  favorites(index){
    this.medicalList[index].checked = !this.medicalList[index].checked;
  }


}
