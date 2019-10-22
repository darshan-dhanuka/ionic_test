
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { CardServicesService } from 'src/app/services/card/card-services.service';
import {DomSanitizer} from '@angular/platform-browser';
import { MenuController} from '@ionic/angular';
import { AuthenticationService1 } from '../../../authentication.service';
@Component({
  selector: 'app-largecard',
  templateUrl: './largecard.page.html',
  styleUrls: ['./largecard.page.scss'],
})
export class LargecardPage implements OnInit {
  public gridImages:Array<any>;
  public playVideo: number;
  public videoLimit: any;
  public errorcode: any;
  constructor(public sanitizer: DomSanitizer, private menuCtrl: MenuController,public auth: AuthenticationService1) {
    this.videoLimit = '';
   // alert('in');
   /* this.auth.get_videos(this.videoLimit).subscribe(
      result => {
        //console.log(result['name']);
        this.errorcode = result['errorcode'];
        //console.log(this.errorcode);
        if(this.errorcode == 0)
        {
          //success
          this.gridImages = result['data'];
          //console.log(this.gridImages);
    
        }
        else 
        {
         
        }
      },
      err => {
		  
      }
    )*/

    this.gridImages = [
      { id:1, title: 'Poker Sports League', image: 'assets/video/elon.jpg', length: '1:49',author: 'Sweta', views: '951K', date:'2 years ago',avatar:'assets/video/av-musk.jpg', video: true ,source:'https://mindsportsleague.muvi.com/embed/8133e78c6e05e9f9839f5d50a2018eee'},
      { id:2,title: 'Mind Sports League', image: 'assets/video/marvel.jpg',length: '6:49',author: 'Marvel', views: '951K', date:'6 months ago',avatar:'assets/video/av-marvel.jpg', video: true, source:'https://mindsportsleague.muvi.com/embed/8133e78c6e05e9f9839f5d50a2018eee'  },
      { id:3,title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg',length: '12:00',author: 'Movee', views: '951K', date:'1 months ago',avatar:'assets/video/av-trailer.jpg', video: true, source:'https://mindsportsleague.muvi.com/embed/ab29970851195a31de0f43356a63f626' },
      { id:4,title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg',length: '3:49',author: 'TrailersWD', views: '951K', date:'1 months ago',avatar:'assets/video/av-wick.jpg', video: true, source:'https://mindsportsleague.muvi.com/embed/54674af3000c13e3bec06e924dd2d683'  },
      { id:5,title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg',length: '5:49',author: 'ArmyHX', views: '951K', date:'12 months ago',avatar:'assets/video/av-black.jpg', video: true , source:'https://www.youtube.com/embed/th-RoJBP0Vs'},
      { id:6,title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49',author: 'Kazifoo', views: '951K', date:'2 months ago',avatar:'assets/video/av-musk.jpg', video: true, source:'https://www.youtube.com/embed/zewyvQEqsS4' },
      { id:7,title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg',length: '6:49',author: 'Marvel', views: '951K', date:'6 months ago',avatar:'assets/video/av-marvel.jpg', video: true , source:'https://www.youtube.com/embed/LPhqL4DqzBg' },
      { id:8,title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg',length: '12:00',author: 'Movee', views: '951K', date:'1 months ago',avatar:'assets/video/av-trailer.jpg', video: true, source:'https://www.youtube.com/embed/-2hWKvq35RM' },
      { id:9,title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg',length: '3:49',author: 'TrailersWD', views: '951K', date:'1 months ago',avatar:'assets/video/av-wick.jpg', video: true , source:'https://www.youtube.com/embed/rPCzao7H6n8' },
      { id:10,title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg',length: '5:49',author: 'ArmyHX', views: '951K', date:'12 months ago',avatar:'assets/video/av-black.jpg', video: true, source:'https://www.youtube.com/embed/th-RoJBP0Vs' }
    ];


  }

  public play(id){
    this.playVideo = id;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
