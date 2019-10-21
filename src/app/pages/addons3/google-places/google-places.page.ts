/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { GoogleMapsService } from 'src/app/services/google-maps/google-maps.service';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { } from '@agm/core/services/google-maps-types';
import { MapDirectionPage } from '../../addons3/map-direction/map-direction.page';
import { MapsAPILoader } from '@agm/core';
import { } from '@agm/core/services/google-maps-types';

declare const google: any;
declare namespace google.maps.places {
    export interface PlaceResult { geometry }
}

@Component({
    selector: 'app-google-places',
    templateUrl: './google-places.page.html',
    styleUrls: ['./google-places.page.scss'],
})
export class GooglePlacesPage implements OnInit {
    @ViewChild('search', { static: true }) public searchElementRef: ElementRef;
    public google;
    public zoom: number;
    public lat: any;
    public lng: any;
    public autocompleteService: any;
    public placesService: any;
    public openedWindow;
    public mapStyles: Array<any>;
    public markers: Array<any>;
    public displayMarkers: Array<any>;
    public mapOptions: any;
    isKM: any = 500;
    isType: any = '';
    public map;
    public query;
    public filtertag;
    customAlertOptions: any = {
        header: 'Filter',
    };
    constructor(
        public navCtrl: NavController,
        public mapServ: GoogleMapsService,
        public platform: Platform,
        public geolocation: Geolocation,
        public modalCtrl: ModalController,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
        this.markers = [];
        this.displayMarkers = [];
    }

    ionViewDidLoad() {

    }

    mapReady(event) {
        this.map = event

        this.mapStyles = this.mapServ.style;
        this.geolocation.getCurrentPosition().then((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            if (position) {
                this.nearByPlaces()
            } else {
                this.lat = 40.7128002;
                this.lng = -74.0060002;
                this.nearByPlaces();
            }
        })
            .catch((err) => {
                this.lat = 40.7128002;
                this.lng = -74.0060002;
                setTimeout(() => {
                    this.nearByPlaces()
                }, 200)

            })
    }


    nearByPlaces() {
        const latLng = new google.maps.LatLng(this.lat, this.lng);
        const service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch({
            location: latLng,
            radius: 500, // 500 Meter
            center: new google.maps.LatLng(this.lat, this.lng),
            types: [this.isType]
        }, (results, status) => {
            console.log(results);
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    this.markers.push(
                        {
                            id: i,
                            lng: results[i].geometry.location.lng(),
                            lat: results[i].geometry.location.lat(),
                            name: results[i].name,
                            iconUrl: {
                                url: results[i].icon,
                                scaledSize: { height: 27, width: 27 }
                            },
                            rating: results[i].rating,
                            types: results[i].types,
                            photos: results[i].photos && this.getPhotos(results[i].photos),
                            vicinity: results[i].vicinity,
                            total_ratings: results[i].user_ratings_total,
                            opening_hours: results[i].opening_hours
                        }
                    );
                    this.displayMarkers = Object.assign([], this.markers);
                }
            }

        });
    }

    getPhotos(data) {
        let photos = [];
        data.forEach(element => {
            photos.push(element.getUrl())
        });
        console.log(photos);
        return photos;
    }

    // callback(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         for (let i = 0; i < results.length; i++) {
    //             this.markers.push(
    //                 {
    //                     id: i, 
    //                     lng: results[i].geometry.location.lng(), 
    //                     lat: results[i].geometry.location.lat(), 
    //                     name: results[i].name, 
    //                     iconUrl: { url: results[i].icon, 
    //                     scaledSize: { height: 27, width: 27 } }, 
    //                     rating: results[i].rating, 
    //                     types: results[i].types,
    //                     photos: results[i].photos
    //                 }
    //             )
    //         }
    //     }
    // }

    async getDirection(dir) {
        const direction = { origin: { lat: this.lat, lng: this.lng }, destination: { lat: dir.lat, lng: dir.lng } };
        const modal = await this.modalCtrl.create({
            component: MapDirectionPage,
            componentProps: direction
        })
        return await modal.present();
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
                    setTimeout(() => {
                        this.nearByPlaces()
                    }, 200)
                });
            });
        });
    }
    alertFilter() {
        document.getElementById('filterSelect').click();
    }
    headTagValue(filtername) {
        if (filtername !== "all") {
            let filtered = this.markers.filter(item => {
                return item.types.indexOf(filtername) !== -1;
            });
            this.displayMarkers = Object.assign([], filtered)
            console.log(filtered)
        } else {
            this.displayMarkers = Object.assign([], this.markers);
        }

    }

}
