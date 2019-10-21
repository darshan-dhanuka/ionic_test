/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  adMobId = {
    android :{
      banner: 'ca-app-pub-3940256099942544/6300978111', // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/1033173712', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/8691691433', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/5224354917' // replace with your adMob ID
    },
    ios :{
      banner: 'ca-app-pub-3940256099942544/2934735716',  // replace with your adMob ID
      interstitial: 'ca-app-pub-3940256099942544/4411468910', // replace with your adMob ID
      interstitialVideo: 'ca-app-pub-3940256099942544/5135589807', // replace with your adMob ID
      reward: 'ca-app-pub-3940256099942544/1712485313' // replace with your adMob ID
    }
  }
  userid: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient, public loadingController: LoadingController, private fireAuth: AngularFireAuth, private router: Router, private toastController: ToastController, private nav: NavController, public alertController: AlertController) {
    this.getUserId();
  }

  getUserId() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.userid.next(user.uid);
      }
    });
  }

  navigate(link, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }


  removeConform(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to remove this item',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {

              resolve('cancel');
            }
          }, {
            text: 'Okay',
            handler: (ok) => {

              resolve('ok');
            }
          }
        ]
      });

      alert.present();
    });
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  getLocalUrl(_imagePath): Promise<{ url: string, nativeUrl: string }> {
    return new Promise((resolve, reject) => {
      const name = _imagePath.split('/');
      this.makeFileIntoBlob(_imagePath, name[name.length - 1]).then((image) => {
        resolve({ url: window.URL.createObjectURL(image), nativeUrl: _imagePath });
      }).catch(
        _ => {
          reject();

        }
      );
    });
  }
  makeFileIntoBlob(_imagePath, fileName) {
    return new Promise((resolve, reject) => {
      window['resolveLocalFileSystemURL'](_imagePath, (fileEntry) => {
        fileEntry['file']((resFile) => {
          const reader = new FileReader();
          reader.onload = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };
          reader.onloadend = (evt: any) => {
            const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };

          reader.onerror = (e) => {

            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        }, (err) => {

          reject({ message: 'File does not exists.' });
        });
      }, (err) => {
      });
    });
  }

  // Sample API response for content loading
  getApiResponse(){
    const my_url = 'http://www.mocky.io/v2/5c9215a73200005d006bccee?mocky-delay=5000ms'
    return this.http.get(my_url);
  }
  // Sample API response for Infinite scrolling
  infiniteData(){
    const my_url = 'http://www.mocky.io/v2/5c9448a0310000a45b55487c?mocky-delay=5000ms'
    return this.http.get(my_url);
  }
}
