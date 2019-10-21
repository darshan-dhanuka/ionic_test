/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@agm/core/services/google-maps-types';

declare const google: any;
declare namespace google.maps.places {
  export interface PlaceResult { geometry }
}

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.page.html',
  styleUrls: ['./google-autocomplete.page.scss'],
})
export class GoogleAutocompletePage implements OnInit {
  public zoom: number;
  public lat: any;
  public lng: any;
  public query;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.zoom = 12;
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
        console.log('this.lat', this.lat, this.lng)
      });
    }
  }

  searchPlaces(event?) {
    this.mapsAPILoader.load().then(() => {
      const nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
      console.log('nativeHomeInputBox', nativeHomeInputBox);
      const autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log('place Location', place)
          this.query = place['formatted_address'];
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
}
