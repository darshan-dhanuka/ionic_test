/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.page.html',
  styleUrls: ['./blocks.page.scss'],
})
export class BlocksPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = '';
  User: string = 'Me';
  toUser: string = 'HealthBot';
  start_typing: any;
  loader: boolean;

  constructor(public activRoute: ActivatedRoute) {
    this.activRoute.params.subscribe((params) => {
      console.log(params)
      this.paramData = params
      this.userName = params.name
    });
    this.msgList = [
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        time: '12:00',
        message: 'Hello, have you seen this great chat UI',
        id: 0, read: true, delivered: true, sent: true, sender: 1,
      },
      {
        userId: 'Me',
        userName: 'Me',
        time: '12:03',
        message: 'Yeah, I see this. This looks great. ',
        id: 1, read: true, delivered: true, sent: false, sender: 0,
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        time: '12:05',
        message: '... and this is absolutely free, anyone can use',
        id: 3, read: true, delivered: true, sent: true, sender: 1,
      },
      {
        userId: 'Me',
        userName: 'Me',
        time: '12:06',
        message: 'wow ! that\'s great. Love to see more of such chat themes',
        id: 4, read: true, delivered: true, sent: false, sender: 0,
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        time: '12:07',
        message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
        id: 5, read: true, delivered: true, sent: true, sender: 1,
      }
    ];
  }

  ngOnInit() {
  }


  closeTime(itemSliding) {
    console.log('closeTime');
    itemSliding.close();
  }

  prepareMsg(image?) {
    // send the msg so it animates
    if (this.user_input !== '' || image) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        image: image ? '../../../../assets/chat/images/user-blocks.jpg' : null,
      })

      this.user_input = '';
      this.scrollDown()

      this.start_typing = false;
      setTimeout(() => {
        this.senderSends(image)
      }, 500);

    }
  }
  prepareMsgcVideo(video) {
    if (this.user_input !== '' || video) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        video: '../../../../assets/chat/chat/video.mp4',
      })
      this.user_input = '';
      this.scrollDown()

      this.start_typing = false;
      this.loader = true;
      setTimeout(() => {
        this.msgList.push({
          userId: this.User,
          userName: this.User,
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.loader = false;
        this.scrollDown()
        if (video) {
          this.scrollDown()
        }
      }, 2000)
      this.scrollDown()
    }
  }

  prepareMsgMap(map) {
    if (this.user_input !== '' || map) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        map: { lat: 52.678418, lng: 7.809007 },
      })
      this.user_input = '';
      setTimeout(() => {
        this.scrollDown()
      }, 100)

      this.start_typing = false;
      this.loader = true;
      setTimeout(() => {
        this.msgList.push({
          userId: this.User,
          userName: this.User,
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.loader = false;
        this.scrollDown()
        if (map) {
          setTimeout(() => {
            this.scrollDown()
          }, 100)
        }
      }, 2000)
      this.scrollDown()
    }
  }



  senderSends(image) {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        image: image ? '../../../../assets/chat/images/sender-blocks.jpg' : null,

      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 200);
  }

  userTyping(event: any) {
    console.log(event);
    this.scrollDown()
  }
  something($event: any) {
    $event.preventDefault()
    console.log($event)
  }
}
