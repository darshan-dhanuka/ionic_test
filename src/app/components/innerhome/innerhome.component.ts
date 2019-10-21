import { Component, OnInit, Input } from '@angular/core';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';

@Component({
  selector: 'app-innerhome',
  templateUrl: './innerhome.component.html',
  styleUrls: ['./innerhome.component.scss'],
})
export class InnerhomeComponent implements OnInit {
  @Input() recieved_data: any;
  productData = [];
  constructor(
    private woocommerceService: WooCommerceService,
  ) { }

  getRelatedProducts() {
    let pids = this.recieved_data;
    pids.forEach(pid => {
      this.woocommerceService.getProduct(pid).then(productData => {
        this.productData.push(productData);
      });
    });
  }

  ngOnInit() {
    this.getRelatedProducts();
  }

  open(data) {
    console.log('data',data)
    let productId = data.id;
    // this.nav.navigateForward(`/productdetail/${productId}`);
  }

}
