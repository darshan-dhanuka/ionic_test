/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';
import { FunctionService } from 'src/app/services/woocommerce/function.service';
import { DataserviceService } from 'src/app/services/woocommerce/dataservice.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @ViewChild('Slides', { static: true }) slides: IonSlides;
  @ViewChild('Content', { static: true }) content: IonContent;
  @ViewChild('slider', { static: true }) slider: IonSlides;
  index = 0;
  segment = '';
  data: Array<any> = [];
  cartItems: number = 0;
  product: any;
  

  constructor(
    private activedRoute: ActivatedRoute,
    private woocommerceService: WooCommerceService,
    private toast: ToastController,
    public fun: FunctionService,
    public dataService: DataserviceService,
    private storage: Storage,
    private route:Router
  ) {
    console.log('Cannot find module.')
    // let productId = this.activedRoute.snapshot.paramMap.get('pid');
     this.activedRoute.params.subscribe((params) => {
      console.log('params',params)
     this.woocommerceService.getProduct(params.id).then(proData => {
        this.product = proData;
        console.log('product',this.product)
      });
    })
    
    this.data = this.dataService.item_tab;
    this.segment = this.data[0].title;
    this.fun.updateBehaviourValue();
  }

  ngOnInit() {
    this.fun.cartItems.subscribe(val => {
      this.cartItems = val;
    });
  }
  async change() {
    await this.slides.getActiveIndex().then(d => (this.index = d));
    this.segment = this.data[this.index].title;
    this.drag();
  }

  onReviewClick(index) {
    this.segment = this.data[index].title;
    this.index = index;
    this.slides.slideTo(index);
    this.content.scrollToTop();
    this.drag();
  }

  goToCart() {
    this.storage.get(`product_${this.product.id}`).then(async data => {
      if (data) {
        const toast = await this.toast.create({
          message: 'Item already in Cart',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toast.create({
          message: 'Added to Cart',
          duration: 2000
        });
        toast.present();
        this.storage
          .set(`product_${this.product.id}`, JSON.stringify(this.product))
          .then(() => {
            this.fun.updateCartBadge();
          });
      }
    });
  }

  update(i) {
    this.slides.slideTo(i);
  }

  drag() {
    let distanceToScroll = 0;
    for (let index in this.data) {
      if (parseInt(index) < this.index) {
        distanceToScroll =
          distanceToScroll +
          document.getElementById('seg_' + index).offsetWidth +
          24;
      }
    }
    document.getElementById('dag').scrollLeft = distanceToScroll;
  }

  seg(event) {
    this.segment = event.detail.value;
  }
  cartPage(){
    this.route.navigate(['cart'])
  }
  

 

}
