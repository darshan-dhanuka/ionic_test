import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-delivery',
  templateUrl: './check-delivery.component.html',
  styleUrls: ['./check-delivery.component.scss'],
})
export class CheckDeliveryComponent implements OnInit {

  public cashDeliveryToggle: boolean;
  public freeShippingToggle: boolean;
  public deliveryDaysToggle: boolean;

  constructor() {
    this.cashDeliveryToggle = false;
    this.freeShippingToggle = false;
    this.deliveryDaysToggle = false;
  }

  ngOnInit() { }

  addAddress(item) {

    if (item === 'cashDelivery') {
      this.cashDeliveryToggle = true;
      this.freeShippingToggle = false;
      this.deliveryDaysToggle = false;
    }
    if (item === 'freeShipping') {
      this.cashDeliveryToggle = false;
      this.freeShippingToggle = true;
      this.deliveryDaysToggle = false;
    }
    if (item === 'deliveryDays') {
      this.cashDeliveryToggle = false;
      this.freeShippingToggle = false;
      this.deliveryDaysToggle = true;
    }
  }

}
