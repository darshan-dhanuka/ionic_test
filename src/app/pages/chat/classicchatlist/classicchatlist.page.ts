/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classicchatlist',
  templateUrl: './classicchatlist.page.html',
  styleUrls: ['./classicchatlist.page.scss'],
})
export class ClassicchatlistPage implements OnInit {

  segmentTab: any;
  chatData: any
  click: any;
  title: boolean;
  constructor(public route: Router) {
    this.title = true
    this.chatData = [{
      'name': 'Jovenica Alba',
      'image': '../../../../assets/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '12:17',
      'call':'(3) January 09/27/2019',
      'video':'videocam'
    }, {
      'name': 'Oliver',
      'image': ' ../../../../assets/chat/chat/chat2.jpg',
      'description': 'Rahim: thanks!',
      'time': '12:17',
      'call':'(3) January 09/26/2019',
      'video':'videocam'
    }, {
      'name': 'George',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': 'Kajor P: share your contact please!',
      'count': '2',
      'time': 'Yesterday',
      'call':'(1) January 09/26/2018',
      'video':'videocam'
    }, {
      'name': 'Harry',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Sunday',
      'call':'(5) February 08/20/2018',
      'video':'videocam'
    }, {
      'name': 'Jack',
      'image': ' ../../../../assets/chat/chat/chat5.jpg',
      'description': 'Yes! that\'s right call him right now.',
      'past': '09/27/2015',
      'call':'(4) February 28/20/2018',
      'phone':'call'
    }, {
      'name': 'Jacob',
      'image': ' ../../../../assets/chat/chat/chat6.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '1',
      'past': '09/27/2015',
      'call':'(4) February 28/20/2015',
      'phone':'call'
    }, {
      'name': 'Noah',
      'image': ' ../../../../assets/chat/chat/chat7.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/27/2015',
      'call':'(3) February 28/20/2016',
      'phone':'call'
    }, {
      'name': 'Charlie',
      'image': ' ../../../../assets/chat/chat/chat8.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '6',
      'past': '09/27/2015',
      'call':'(3) December 28/20/2017',
      'phone':'call'
    }, {
      'name': 'Logan',
      'image': ' ../../../../assets/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/27/2015',
      'call':'09/27/2015',
      'phone':'call'
    }, {
      'name': 'Harrison',
      'image': ' ../../../../assets/chat/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'past': '09/27/2015',
      'call':'09/27/2015',
      'video':'videocam'
    }, {
      'name': 'Sebastian',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'past': '09/17/2016',
      'call':'(3) December 28/20/2017',
      'video':'videocam'
    }, {
      'name': 'Zachary',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/07/2017',
      'call':'09/27/2015',
      'video':'videocam'
    }, {
      'name': 'Elijah',
      'image': ' ../../../../assets/chat/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/09/2018',
      'call':'09/27/2015',
      'phone':'call'
    }
    ]
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.title= true
    this.route.navigate(['classic', chat]);
  }
  toggleSearchTitl() {
  this.title = !this.title
  }
}
