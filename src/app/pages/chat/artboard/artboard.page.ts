/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.page.html',
  styleUrls: ['./artboard.page.scss'],
})
export class ArtboardPage implements OnInit {
  public chatSegmentType;
  public chatData:Array<any>;
  constructor() { }

  ngOnInit() {
    this.chatSegmentType = 'person';
    this.chatData = [{
      'name': 'Zachary Murphy',
      'image': '../../../../assets/chat/chat/boy.png',
      'description': 'Terneuzen', 
      'status':'online',
      'count': '2',
      'time':'2 min ago'
    
    }, {
      'name': 'Virginia Hansen',
      'image': ' ../../../../assets/chat/chat/man.png',
      'description': 'spijkernisse', 
      'status':'offline',
      'badge':'4',
      'sendTime':'18:34',
      'group': true
      
    }, {
      'name': 'Billy Boyd',
      'image': ' ../../../../assets/chat/chat/woman.png',
      'description': 'Sittard-Geleen', 
      'status':'offline',
      'count': '2',
      'sendTime':'18:30',
      'broadcast': true
 
    }, {
      'name': 'Tiffany Hayes',
      'image': ' ../../../../assets/chat/chat/boy2.png',
      'description': 'Veenendaal',
       'status':'online',
       'badge':'6',
      'sendTime':'17:55'
    }, {
      'name': 'Jeese Jensen',
      'image': ' ../../../../assets/chat/chat/man1.png',
      'description': ' Purmerend', 
      'status':'offline',
      'sendTime':'17:55'
    }, {
      'name': 'Jacob',
      'image': ' ../../../../assets/chat/chat/boy1.png',
      'description': 'Greensboro', 
      'status':'offline',
      'count': '1',
      'sendTime':'17:50'
    }, {
      'name': 'Noah',
      'image': ' ../../../../assets/chat/chat/boy.png',
      'description': 'Greensboro', 
      'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Charlie',
      'image': ' ../../../../assets/chat/chat/woman.png',
      'description': 'Greensboro',
       'status':'online',
      'count': '6',
      'badge':'8',
      'sendTime':'17:40'
    }, {
      'name': 'Logan',
      'image': ' ../../../../assets/chat/chat/man.png',
      'description': 'Greensboro', 
      'status':'offline',
      'badge':'8',
      'sendTime':'17:40'
    }, {
      'name': 'Harrison',
      'image': ' ../../../../assets/chat/chat/boy2.png',
      'description': 'Greensboro',
       'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Sebastian',
      'image': ' ../../../../assets/chat/chat/boy1.png',
      'description': 'Greensboro', 
      'status':'online',
      'sendTime':'17:40'
    }, {
      'name': 'Zachary',
      'image': ' ../../../../assets/chat/chat/man.png',
      'description': 'Greensboro', 
      'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Elijah',
      'image': ' ../../../../assets/chat/chat/boy.png',
      'description': 'Greensboro',
      'status':'offline',
      'badge':'8',
      'sendTime':'17:40'
    }
    ];
  };

}
