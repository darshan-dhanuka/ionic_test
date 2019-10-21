/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.page.html',
  styleUrls: ['./bar-code.page.scss'],
})
export class BarCodePage implements OnInit {
  public encodedData: any;
  public scannedData: {};
  public barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {
    // these options can be used with scan() function
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

  }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  encodedText() {
    console.log(this.encodedData);
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData).then((encodedData) => {
      console.log(encodedData);
      // this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });

  }


}
