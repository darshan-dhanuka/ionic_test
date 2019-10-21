import { Injectable } from '@angular/core';
import { DataService } from '../tinder/data.service';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { Subject, BehaviorSubject } from 'rxjs';
import { DataserviceService } from './dataservice.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(
    public dataService: DataserviceService,
    private router: Router,
    private toastController: ToastController,
    private nav: NavController,
    public alertController: AlertController,
    private storage: Storage
  ) { }




  public cartItems = new BehaviorSubject(0);

  updateBehaviourValue() {
    let items = 0;
    this.storage
      .forEach(data => {
        items += 1;
      })
      .then(() => {
        this.cartItems.next(items);
      });
  }

  updateCartBadge() {
    let currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems + 1);
  }

  array(i) {
    let l = [];
    for (let j = 0; j < i; j++) { l.push(1) };
    return l;
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkout() {
    if (this.dataService.current_user.address.length === 0) {
      this.nav.navigateForward("/NewAddress/$1");
    } else {
      this.nav.navigateForward("/Checkout");
    }
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
  date(date) {
    let monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  update(product) {
    // this.dataService.current_product = product;
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
            handler: cancel => {
              resolve('cancel');
            }
          },
          {
            text: 'Okay',
            handler: ok => {
              resolve('ok');
            }
          }
        ]
      });

      alert.present();
    });
  }

  calculate(price, discount) {
    price = price - (price * discount) / 100;
    return price.toFixed(2);
  }
}
