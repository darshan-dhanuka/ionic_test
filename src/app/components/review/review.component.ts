import { Component, OnInit, Input } from '@angular/core';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  inputs: ["product"]
})
export class ReviewComponent implements OnInit {
  @Input() product: any;
  reviews: any;

  constructor(
    public woocommerceService: WooCommerceService,
  ) {
  }

  ngOnInit() { }

  getReviews() {
    let pid = this.product.id;
    this.woocommerceService.getProductReviews(pid).then(reviews => {
      this.reviews = reviews;
    });
  }
  array(i) {
    let l = [];
    for (let j = 0; j < i; j++) { l.push(1); }
    return l;
  }

}
