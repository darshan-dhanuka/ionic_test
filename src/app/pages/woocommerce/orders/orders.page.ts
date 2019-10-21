/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { FunctionService } from 'src/app/services/woocommerce/function.service';
import { DataserviceService } from 'src/app/services/woocommerce/dataservice.service';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';
import { OrderinfoPage } from '../orderinfo/orderinfo.page';
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any;
  cartItems: number = 0;
  constructor(
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private storage: Storage,
    private woocommerceService: WooCommerceService,
    public fun: FunctionService,
    public dataService: DataserviceService,
    private route:Router
  ) {
    this.storage.forEach(item => {
      this.cartItems += 1;
    });
    this.woocommerceService.getPastOrders(dataService.current_user.id).then(data => {
      this.orders = data;
    });
   }

  ngOnInit() {
  }

  async open(order: any) {
    let modal = await this.modalController.create({
      component: OrderinfoPage,
      componentProps: { value: order }
    });
    return await modal.present();
  }
  cartPage(){
    this.route.navigate(['cart'])
  }

}
