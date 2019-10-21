/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-woocommerce-products',
  templateUrl: './woocommerce-products.page.html',
  styleUrls: ['./woocommerce-products.page.scss'],
})
export class WoocommerceProductsPage implements OnInit {
  public getProducts;
  constructor(
    public woocommerceService: WooCommerceService,
    private http: HttpClient,
    private route: Router) {


    this.getProducts = []
    console.log('Woocomerce')
    const products = this.woocommerceService.getProducts();
    console.log('getProduct');
    this.http.get(products).subscribe((res: any) => {
      console.log('data', res)
      this.getProducts = res;
    })

  }

  ngOnInit() {
  }
  goToProducts( product) {
    console.log('product',product)
    this.route.navigate(['product-details', { id: product.id}]);

  }
}
