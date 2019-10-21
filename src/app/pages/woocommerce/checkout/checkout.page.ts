/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { FunctionService } from 'src/app/services/woocommerce/function.service';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';
import { DataserviceService } from 'src/app/services/woocommerce/dataservice.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'
import {Location} from '@angular/common'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  addNewPayment = true;
  paymentGateways: any;
  address: any = {};
  line_items: any = [];
  payment_method: string;
  payment_method_title: string;
  user: any;
  spinner: boolean = false;
  paymentSelected: boolean = false;
  placingOrder: boolean = false;
  constructor(
    private menuCtrl: MenuController,
    private nav: NavController,
    private fun: FunctionService,
    private alertController: AlertController,
    private woocommerceService: WooCommerceService,
    public dataService: DataserviceService,
    private storage: Storage,
    private activeRoute: ActivatedRoute,
    private route:Router,
    private location:Location
  ) {
    this.woocommerceService.getPaymentGateways().then(data => {
      console.log(data);
      this.paymentGateways = data;
    });
   }

  ngOnInit() {
    this.dataService.cart.forEach(item => {
      let obj = {};
      obj['product_id'] = item['product_id'];
      obj['quantity'] = item['quantity'];
      this.line_items.push(obj);
    });
    console.log(this.line_items);
  }
  
  ionViewDidEnter() {
    this.address = this.dataService.orders[0].shipping_address;
    
  }
  addPayment() {
    this.addNewPayment = !this.addNewPayment;
  }

  chooseGateway(paymentType) {
    this.paymentSelected = true;
    this.payment_method = paymentType.id;
    this.payment_method_title = paymentType.title;
    this.done();
  }

  changeAddress() {
    this.nav.navigateForward('/NewAddress/$0');
  }

  done() {
    this.placingOrder = true;
    let orderObj = {};
    orderObj['payment_method'] = this.payment_method;
    orderObj['payment_method_title'] = this.payment_method_title;
    orderObj['customer_id'] = this.dataService.current_user.id;
    orderObj['billing'] = this.address;
    orderObj['shipping'] = this.address;
    orderObj['line_items'] = this.line_items;
    this.woocommerceService.createOrder(orderObj).then(data => {
      this.placingOrder = false;
      console.log(data);
      this.storage.clear();
      Swal.fire('Awesome','Your order is placed successfully', 'success');
      this.route.navigate(['woocommerce-products']);
    });
  }

  async back() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to cancel entering your payment info?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'mycolor',
          handler: blah => {
            this.location.back();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'mycolor',
          handler: () => {}
        }
      ]
    });

    await alert.present();
  }

}
