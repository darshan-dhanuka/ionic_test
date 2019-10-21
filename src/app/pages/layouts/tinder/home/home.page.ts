/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MenuController, IonSlides, IonContent } from '@ionic/angular';
import { DataService, HomeTab, Product } from '../../../../services/tinder/data.service';
import { Device } from '@ionic-native/device/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { SwingCardDirective, SwingStackDirective, Direction, ThrowEvent, DragEvent, StackConfig, Stack, } from 'ionic-swing';
import { TindericonsComponent } from '../tindericons/tindericons.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  @ViewChild('Slides', { static: true }) slides: IonSlides;
  @ViewChild('swingStack', { static: true, read: SwingStackDirective }) swingStack: SwingStackDirective;
  @ViewChildren('swingCards', { read: SwingCardDirective }) swingCards: QueryList<SwingCardDirective>;
  slideOpts = {
    effect: 'flip',
    direction: 'horizontal',
    autoplay: {
      delay: 2000,
    }
  };
  segment = '';
  index = 0;
  data: Array<HomeTab> = [];

  segmentButton: any = 'flame';
  userDetail: { userDetails: string; }[];
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  slidesImg: { image: string; }[];
  footerIcon: HomeTab[];
  subSegmentButton: any;
  modalData: any;
  modalstarData: any;
  modalFlashData: any;
  modalRefreshData: any;
  showButton: boolean;
  modalGold: any;
  hasUserData: any
  conversation = [
    { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: '../../../../assets/chat/images/sg2.jpg' },
    { text: 'Right, it totally blew my mind', sender: 1, image: '../../../../assets/chat/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'And it is free ?', sender: 0, image: '../../../../assets/chat/images/sg2.jpg' },
    { text: 'Yes, totally free', sender: 1, image: '../../../../assets/chat/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'Wow, that\'s so cool', sender: 0, image: '../../../../assets/chat/images/sg2.jpg' },
    { text: 'Hats off to the developers', sender: 1, image: '../../../../assets/chat/images/sg1.jpg', read: false, delivered: true, sent: true },
    { text: 'Oh yes, this is gooood stuff', sender: 0, image: '../../../../assets/chat/images/sg2.jpg' },
    { text: 'Check out their other designs ', sender: 1, image: '../../../../assets/chat/images/sg1.jpg', read: false, delivered: false, sent: true }
  ]
  phone_model = 'iPhone';
  input = '';
  like: boolean;
  disLike: boolean;
  superLike: boolean;
  nope: boolean;
  clicked: any;
  constructor(private activatedRoute: ActivatedRoute, private menuCtrl: MenuController, public dataService: DataService, public route: Router, private platform: Platform,
    public alertController: AlertController, private device: Device, ) {
    this.data = dataService.tabs;
    this.userDetail = dataService.details
    this.cards = dataService.card
    this.footerIcon = dataService.footer_icons
    this.modalstarData = dataService.star
    this.modalFlashData = dataService.flash
    this.modalRefreshData = dataService.refresh
    this.modalGold = dataService.gold
    this.showButton = true
    this.like = false
    this.disLike = false
    this.superLike = false
    this.clicked = true
    this.hasUserData = false

    this.stackConfig = {
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },

      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    }
    setTimeout(() => {
      this.hasUserData = true
    }, 2000);
  }

  clikedIconIs(icon) {
    console.log(icon)
    if (icon === 'refresh') {
      this.dataService.openModal(TindericonsComponent, this.modalRefreshData);
      console.log('true')
    } else if (icon === 'close') {
      this.disLike = true
      setTimeout(() => {
        this.disLike = false
        this.cards.pop()
        console.log('deleted')
      }, 200);
    } else if (icon === 'star') {
      this.superLike = true
      setTimeout(() => {
        this.superLike = false
        this.cards.pop()
        console.log('deleted')
      }, 200);
    } else if (icon === 'heart') {
      this.like = true
      setTimeout(() => {
        this.like = false
        this.cards.pop()
        console.log('deleted')
      }, 200);
    } else if (icon === 'star') {
      this.dataService.openModal(TindericonsComponent, this.modalstarData, 'modalBackground');
    } else if (icon === 'flash') {
      this.dataService.openModal(TindericonsComponent, this.modalFlashData, 'modalBackground');
    } else if (icon === 'star') {
      this.dataService.openModal(TindericonsComponent, this.modalstarData, 'modalBackground');
    }
  }



  updateImage(i) {
    console.log('imageIndex', i)
  }
  onItemMove(element, x, y, r) {
    const color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    // if (x < 0) {
    //   color = '#FF' + hexCode + hexCode;
    // } else {
    //   color = '#' + hexCode + 'FF' + hexCode;
    // }

    // element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  voteUp(like: boolean) {
    const removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.name;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.name;
    }
  }

  addNewCards(count: number) {
    // this.cards.push(this.recentCard);
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }



  segmentChanged(event: any) {
    console.log(event.detail.value)
    this.segmentButton = event.detail.value;
    if (this.segmentButton === 'flame') {
      setTimeout(() => {
        console.log(this.swingStack);
        console.log(this.swingCards);
        this.swingStack.dragmove.subscribe((event: DragEvent) => {
          if (event.offset > 5 || event.throwDirection === 'Symbol(RIGHT)') {
            this.like = true;
            this.disLike = false
            this.superLike = false

          } else if (event.offset < -5 || event.throwDirection === 'Symbol(LEFT)') {
            this.like = false
            this.disLike = true
            this.superLike = false
          } else if (event.offset > 0 || event.throwDirection === 'Symbol(UP)') {
            this.like = false
            this.disLike = false
            this.superLike = true
          }
          console.log(event)
        });
        this.swingStack.dragend.subscribe((event: DragEvent) => {
          this.like = false;
          this.disLike = false;
          this.superLike = false;
          console.log('endddddd', event)
        });
      }, 1000)
    }

  }
  openandHideDetail(userData) {
    // this.clicked = ! this.clicked
    this.route.navigate(['profiledetails', { userData: JSON.stringify(userData) }])

  }


  async change() {
    await this.slides.getActiveIndex().then(data => this.index = data);
    console.log(this.index)
    // this.segment = this.data[this.index].title;
    // this.drag();
    if (this.index === 0) {
      this.showButton = true
    } else if (this.index !== 0) {
      this.showButton = false
    }
  }
  // showPErception(item) {
  //   console.log(item)

  //   this.clikedIconIs('',item)
  //   // this.cards.push(item)
  // }



  segmentButtonClicked(event: any) {
    this.subSegmentButton = event.detail.value
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }





  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }






  send() {
    if (this.input !== '') {
      this.conversation.push({ text: this.input, sender: 1, image: '../../../../assets/images/sg1.jpg' });
      this.input = '';
      setTimeout(() => {
        this.content.scrollToBottom(50)
      }, 200)
    }
  }
  something($event: any) {
    $event.preventDefault()
    console.log($event)
  }
  // scrollToBottom() {
  //   let content = document.getElementById("chat-container");
  //   let parent = document.getElementById("chat-parent");
  //   let scrollOptions = {
  //     left: 0,
  //     top: content.offsetHeight
  //   }

  //   parent.scrollTo(scrollOptions)
  // }
  // drag() {
  //   let distanceToScroll = 0;
  //   for (let index in this.data) {
  //     if (parseInt(index) < this.index) {
  //       distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24
  //     }
  //   }
  //   document.getElementById('dag').scrollLeft = distanceToScroll;
  // }

  // preventDefault(e) {
  //   e.preventDefault();
  // }
  // async presentAlert() {
  //   if (this.device.platform = 'iOS') {
  //     switch (this.platform.height()) {
  //       case 812:
  //         this.phone_model = 'iPhone X';
  //         break;
  //       case 736:
  //         this.phone_model = 'iPhone 6/7/8 Plus';
  //         break;
  //       case 667:
  //         this.phone_model = 'iPhone 6/7/8';
  //         break;
  //     }
  //   }
  // }
  // ionViewDidEnter() {
  //   this.menuCtrl.enable(false, 'end');
  //   this.menuCtrl.enable(true, 'start');

  //   setTimeout(() => {
  //     this.content.scrollToBottom(100)
  //   }, 10)
  // setTimeout(() => {
  //   this.content.presentAlert();
  // }, 100)


  // }
  // update(i) {
  //   this.slides.slideTo(i);
  // }
  // seg(event) {
  //   console.log(event.detail.value)
  //   this.segment = event.detail.value;
  // }
}



