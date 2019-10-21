/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util/util.service';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admob',
  templateUrl: './admob.page.html',
  styleUrls: ['./admob.page.scss'],
})
export class AdmobPage implements OnInit {

  constructor(public alertController: AlertController,
    private util: UtilService,
    private admob: AdMobPro,
    private platform: Platform) {
  }
  ngOnInit() {

  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Ad dismissed',
      subHeader: data.adType,
      message: 'You dismissed the ' + data.adType + ' ad from ' + data.adNetwork,
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewDidEnter() {
    this.admob.onAdDismiss()
      .subscribe((data) => {
        console.log('User dismissed ad', data);
        this.presentAlert(data)
      });
  }

  banner() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.banner;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.banner;
    }
    this.admob.createBanner({
      adId: adId,
      isTesting: true // remove in production 
    })
      .then(() => {
        this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  hideBanner() {
    this.admob.hideBanner();
  }

  interstitial() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.interstitial;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.interstitial;
    }
    this.admob.prepareInterstitial({
      adId: adId,
      isTesting: true // remove in production 
    })
      .then(() => {
        this.admob.showInterstitial();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  reward() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.reward;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.reward;
    }
    this.admob.prepareRewardVideoAd({
      adId: adId,
      isTesting: true // remove in production 
    })
      .then(() => {
        this.admob.showRewardVideoAd();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  interstitialVideo() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.util.adMobId.android.interstitialVideo;
    } else if (this.platform.is('ios')) {
      adId = this.util.adMobId.ios.interstitialVideo;
    }
    this.admob.prepareInterstitial({
      adId: adId,
      isTesting: true // remove in production 
    })
      .then(() => {
        this.admob.showInterstitial();
      })
      .catch((err) => {
        console.log(err)
      });
  }

}
