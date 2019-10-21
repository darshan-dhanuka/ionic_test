

/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { ViewVideoPage } from '../view-video/view-video.page';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  public gridImages: Array<any>;
  constructor(public modalCtrl: ModalController, private menuCtrl: MenuController) {

    this.gridImages = [
      { title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
      { title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/LPhqL4DqzBg?autoplay=1' },
      { title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
      { title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
      { title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/th-RoJBP0Vs' },
      { title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/zewyvQEqsS4' },
      { title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/LPhqL4DqzBg' },
      { title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
      { title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
      { title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/th-RoJBP0Vs' }
    ];
  };
  ngOnInit() {

  }

  async viewVideo(videoUrl) {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: videoUrl },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}
