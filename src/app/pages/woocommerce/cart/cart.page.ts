import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/app/services/woocommerce/function.service';
import { ModalController, NavController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';
import { DataserviceService } from 'src/app/services/woocommerce/dataservice.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  customAlertOptions: any = {
    header: 'Select Quantity',
    translucent: true
  };
  qty = [];
  baseProducts: any = [];
  code = '';
  show = true;
  // data: Array<Cart> = [];
  cartData: any = [];
  sum: number = 0;
  userId: any;

  constructor(
    private menuCtrl: MenuController,
    public fun: FunctionService,
    private modalController: ModalController,
    private nav: NavController,
    public alertController: AlertController,
    private storage: Storage,
    private route: Router,
    private woocommerceService: WooCommerceService,
    public dataService: DataserviceService,

  ) {
    for (let i = 1; i <= 5; i++) { this.qty.push(i) };
  }

  ngOnInit() {
    this.storage
      .forEach((value, key) => {
        let obj = {};
        let parsedData = JSON.parse(value);
        this.cartData.push(parsedData);
        obj['product_id'] = parsedData.id;
        obj['price'] = parseInt(parsedData.price);
        obj['quantity'] = 1;
        this.baseProducts.push(obj);
      })
      .then(() => {
        console.log(this.baseProducts);
        this.dataService.cart = this.baseProducts;
      });
  }

  calculatePrice() {
    this.sum = 0;
    let temp = 0;
    this.baseProducts.forEach(product => {
      temp = product.price * product.quantity;
      this.sum += temp;
    });
    return this.sum;
  }

  checkout() {
    this.route.navigate(['checkout'])
  }

  browse() {
    this.route.navigate(['woocommerce-products']);
  }

}
