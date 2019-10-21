/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridServiceService } from 'src/app/services/grid/grid-service.service';
import { CardServicesService } from 'src/app/services/card/card-services.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.page.html',
  styleUrls: ['./slider1.page.scss'],
})
export class Slider1Page implements OnInit {

  @ViewChild('slideWithNav', { static: true }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: true }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: true }) slideWithNav3: IonSlides;
  public medicalList:Array<any>;
  public cardData;
  slideOptsOne  = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  slideOpts = {
    effect: 'cube',
  };
  slideOpts1= {
    effect: 'cube'
  };
  slideOpts2= {
    effect: 'fade'
  };
  SlidesImages;
  constructor(public gridServ:GridServiceService,
    public cardServ:CardServicesService) {
    this.medicalList = this.gridServ.medicalList;
    // this.cardData = this.cardServ.cardData.data;


    this.SlidesImages = ['http://lorempixel.com/600/600/nature/1','http://lorempixel.com/600/600/nature/2','http://lorempixel.com/600/600/nature/3','http://lorempixel.com/600/600/nature/4','http://lorempixel.com/600/600/nature/5']
   }

  ngOnInit() {
  }

}
