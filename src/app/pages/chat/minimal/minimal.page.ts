/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.page.html',
  styleUrls: ['./minimal.page.scss'],
})
export class MinimalPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent

  data: Array<any> = [];

  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = '';
  User: string = 'Me';
  toUser: string = 'HealthBot';
  start_typing: any;
  loader: boolean;
 
  constructor(public activRoute: ActivatedRoute) {
    this.data = [{
      'text': 'Thursday 31 January 2019',
    }]
     this.activRoute.params.subscribe((params) => {
      console.log(params)
      this.paramData = params
      this.userName = params.name
    
    this.msgList = [
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        time: '12:00',
        message: 'Hello, have you seen this great chat UI',
        id: 0,
        status:TextTrackCue
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/chat/chat/chat3.jpg',
        time: '12:03',
        message: 'Yeah, I see this. This looks great. ',
        id: 1,
        status: true
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        time: '12:05',
        message: '... and this is absolutely free, anyone can use',
        id: 3,
        status: false
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        time: '12:06',
        message: 'wow ! that\'s great. Love to see more of such chat themes',
        id: 4,
        status: true
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        time: '12:07',
        message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
        id: 5,
        status: false
      }
    ];    
  });
  }

  ngOnInit() {
  }
  
  sendMsg() {
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        status: true

      })
      this.user_input = '';
      this.scrollDown()
      setTimeout(() => {
        this.senderSends()
      }, 500);
    }
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        status: true

      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 50);
  }
  something($event: any) {
    $event.preventDefault()
    console.log($event)
  }
  userTyping(event: any) {
    console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown()
  }
}
