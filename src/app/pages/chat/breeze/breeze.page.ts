/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, IonContent, Events } from '@ionic/angular';

@Component({
  selector: 'app-breeze',
  templateUrl: './breeze.page.html',
  styleUrls: ['./breeze.page.scss'],
})
export class BreezePage implements OnInit {
  @ViewChild('content', { static: true }) content: IonContent;
  User: string = 'Me';
  toUser: string = 'driver';
  inp_text: any;
  iconColor: any;
  userDetails: any;
  GalleryListToggle: boolean = false;
  SearchToggle: boolean = false;
  ShareToggle: boolean = false;
  gallery: Array<any>;
  shareList: Array<any>;
  progressbarValue: number;
  progressbarBuffer: string = '1';
  imageMove: any;
  loader: Boolean = false;

  msgList: Array<{
    userId: any,
    userName: any,
    userAvatar: any,
    time?: any,
    message?: any,
    image?: any;
  }>
  constructor() {

    this.userDetails = { firstName: 'Bill', lastName: 'Kenny', image: '../../../../assets/chat/chat/boy.png', status: 'Online' }
    this.gallery = ['../../../../assets/chat/chat/gallery6.jpeg', '../../../../assets/chat/chat/gallery2.jpeg', '../../../../assets/chat/chat/gallery4.jpeg', '../../../../assets/chat/chat/gallery5.jpeg', '../../../../assets/chat/chat/gallery3.jpeg', '../../../../assets/chat/chat/gallery1.jpeg', '../../../../assets/chat/chat/gallery3.jpeg', '../../../../assets/chat/chat/gallery6.jpeg', '../../../../assets/chat/chat/gallery3.jpeg', '../../../../assets/chat/chat/gallery1.jpeg', '../../../../assets/chat/chat/gallery5.jpeg', '../../../../assets/chat/chat/gallery4.jpeg', '../../../../assets/chat/chat/gallery2.jpeg', '../../../../assets/chat/chat/gallery3.jpeg', '../../../../assets/chat/chat/gallery6.jpeg', '../../../../assets/chat/images/sg2.jpg']
    this.msgList = [
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/driver.jpeg',
        time: '10:26 AM',
        message: 'hii !!',
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/user.jpeg',
        message: 'you in office ?',
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/driver.jpeg',
        message: 'plz share the images ?',
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/user.jpeg',
        time: '11:40 AM',
        message: 'Sure !',
      }
    ];
    this.shareList = [
      {image: '../../../../assets/chat/avatars/1.png', name:'Alexa'},
      {image: '../../../../assets/chat/avatars/2.png', name:'Hayden'},
      {image: '../../../../assets/chat/avatars/3.png', name:'Cosmo'},
      {image: '../../../../assets/chat/avatars/4.png', name:'Carl'},
      {image: '../../../../assets/chat/avatars/5.png', name:'Maggie'},
      {image: '../../../../assets/chat/avatars/6.png', name:'Thomas'}
    ]
  }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }
  sendMsg(chipText?) {
    if (this.inp_text && this.inp_text.trim() !== '') {
      this.inp_text = this.inp_text ? this.inp_text : chipText
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        message: this.inp_text,
      });
      
      this.inp_text = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
      this.inp_text = '';
      this.loader = true;
      setTimeout(() => {
        this.senderSends()
      }, 2000)
    }
  }
  senderSends(){
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: 'assets/user.jpeg',
      time: '12:01 pm',
      message: 'Sorry, I don\'t know the answer to that. Please ask something else'
    })
    this.loader = false;
    setTimeout(() => {
      this.scrollToBottom();
    }, 10)
  }

  cameraOpen() {
    this.GalleryListToggle = !this.GalleryListToggle;
  }
  searchOpen(){
    this.SearchToggle = !this.SearchToggle;
  }
  shareOpen(){
    this.ShareToggle = !this.ShareToggle;
  }
  galleryImage(i) {
    this.imageMove = i
    setTimeout(() => {
      this.GalleryListToggle = false;
      this.iconColor = false;
    }, 300)

    setTimeout(
      this.Load()
      , 3000)
    console.log('i', i)
    console.log('this.gallery[i]', this.gallery[i])

    const msg = {
      userId: this.User,
      userName: this.User,
      userAvatar: 'assets/driver.jpeg',
      time: '12:01 pm',
      image: this.gallery[i],
    }
    this.msgList.push(msg)
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)

    setTimeout(() => { this.imageMove = undefined; this.gallery.splice(i, 1) }, 1000);
  }

  Load(): any {
    this.progressbarValue = 10;
    setTimeout(() => {
      this.progressbarValue = 20;
    }, 1);
    setTimeout(() => {
      this.progressbarValue = 30;
    }, 1000);
    setTimeout(() => {
      this.progressbarValue = 40;
    }, 2000);
    setTimeout(() => {
      this.progressbarValue = 50;
    }, 3000);
    setTimeout(() => {
      this.progressbarValue = 60;
    }, 4000);
    setTimeout(() => {
      this.progressbarValue = 70;
    }, 5000);
    setTimeout(() => {
      this.progressbarValue = 80;
    }, 6000);
    setTimeout(() => {
      this.progressbarValue = 100;
    }, 10000);
  }

  something($event: any) {
    $event.preventDefault()
    console.log($event)
  }
}
