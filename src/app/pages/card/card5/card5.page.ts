
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.page.html',
  styleUrls: ['./card5.page.scss'],
})
export class Card5Page implements OnInit {
  image: any
  public data: any


  constructor(public modalCtrl:ModalController) { 

    
  }

  ngOnInit() {
    this.image = '../../../../assets/cards/sliderobot.jpg';
    this.data = [
      {
        name: 'Robot 2.0',
        specification: 'Drama, Action',
        imageUrl:'assets/cards/sliderobot.jpg',
        row1: [
          {
            'date': '24 Sep 2019',
            'time': '19:30',
            'duration': '1h 40min',
          }
        ],
        row2: [
          {
            'salon': '03',
            'row': 'D',
            'seat': '11,12'
          }
        ]
      }
    ]
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
