/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UtilService } from '../../../services/util/util.service';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.page.html',
  styleUrls: ['./social-share.page.scss'],
})
export class SocialSharePage implements OnInit {
  public showToolbar: boolean;
  public shownGroup = null;
  public socialShare: Array<any>;

  constructor(private socialSharing: SocialSharing,
    private util: UtilService) {
    this.socialShare = [
      {
        'heading': 'WhatsApp',
        'headerImage': '../../assets/addons3/whatsapp-icon-280x280.png',
        shareData: [
          { 'title': 'Share text', text: 'Ionic 4 Full App', clickEvent: 'shareText', shareType: 'shareViaWhatsApp' },
          { 'title': 'Share Image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'shareImage', shareType: 'shareViaWhatsApp' },
          { 'title': 'Share text with Image', share: 'Ionic 4 Full App', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'sharewithWhatsApp' }
        ]
      },
      {
        'heading': 'Facebook',
        'headerImage': '../../assets/addons3/facebook1-280x280.png',
        shareData: [
          { 'title': 'Share text with URL', share: 'Ionic 4 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', shareType: 'shareViaFacebook', clickEvent: 'shareTextWithUrl' },
          { 'title': 'Share external image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'shareImage', shareType: 'shareViaFacebook' },
          { 'title': 'Share asset image', image: 'assets/addons3/twitter.png', clickEvent: 'shareImage', shareType: 'shareViaFacebook' },
        ]
      },
      {
        'heading': 'Twitter',
        'headerImage': '../../assets/addons3/twitter.png',
        shareData: [
          { 'title': 'Share text with URL', share: 'Ionic 4 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', shareType: 'shareViaTwitter', clickEvent: 'shareTextWithUrl' },
          { 'title': 'Share Image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'shareImage', shareType: 'shareViaTwitter' },
          { 'title': 'Share text with URL and Image', share: 'Ionic 4 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'sharewithTwitter' }
        ]
      },
      {
        'heading': 'Instagram',
        'headerImage': '../../assets/addons3/Instagram-circle.png',
        shareData: [
          { 'title': 'Share text with Image', share: 'Ionic 4 Full App', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'sharewithInstagram' }
        ]
      },
      {
        'heading': 'Email',
        'headerImage': '../../assets/addons3/mail.png',
        shareData: [
          { 'title': 'Check if email sharing is available', share: null, image: null, clickEvent: 'canShareViaEmail' },
          { 'title': 'Share with email', share: { body: 'This is body content for email', subject: 'Email subject', to: ['recipient@example.org'] }, image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'shareViaEmail' }
        ]
      }
    ]
  }



  ngOnInit() {
    this.toggleGroup(0)
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };


  async shareText(shareData) {
    this.socialSharing[`${shareData.shareType}`](shareData.text, null, null)
      .then((res) => console.log('res', res))
      .catch((e) => console.log('error', e))
  }

  async shareImage(shareData) {
    this.socialSharing[`${shareData.shareType}`](null, shareData.image, null)
      .then((res) => console.log('res', res))
      .catch((e) => console.log('error', e))
  }


  async shareTextWithUrl(shareData) {
    this.socialSharing[`${shareData.shareType}`](shareData.text, null, shareData.imag)
      .then((res) => console.log('res', res))
      .catch((e) => console.log('error', e))
  }

  async sharewithWhatsApp(shareData: any) {
    this.socialSharing.shareViaWhatsApp(shareData.text, shareData.image, shareData.url).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e)
    });
  }

  async sharewithFaceBook(shareData: any) {
    this.socialSharing.shareViaFacebook(shareData.text, shareData.image, shareData.url).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e)
    });
  }

  async sharewithTwitter(shareData: any) {
    this.socialSharing.shareViaTwitter(shareData.text, shareData.image, shareData.url).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e)
    });
  }

  async sharewithInstagram(shareData: any) {
    this.socialSharing.shareViaInstagram(shareData.text, shareData.image).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e)
    });
  }

  async canShareViaEmail(shareData: any) {
    this.socialSharing.canShareViaEmail().then((res) => {
      // Success
      this.util.presentToast('Email sharing possible', true, 'bottom', 1500)
    }).catch((e) => {
      // Error!
      this.util.presentToast('Email sharing not possible', true, 'bottom', 1500)
    });
  }

  async shareViaEmail(shareData: any) {
    this.socialSharing.shareViaEmail(shareData.share.body, shareData.share.subject, shareData.share.to).then((res) => {
      // Success
      console.log('res', res);
    }).catch((e) => {
      // Error!
      console.log(e)
    });
  }

}
