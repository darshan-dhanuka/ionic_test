/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/




import { Component, OnInit } from '@angular/core';
import { MouseEvent, MapsAPILoader } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, MenuController, AlertController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DriverStatusService } from '../../../services/taxi/driver-status.service';

@Component({
  selector: 'app-home',
  templateUrl: 'uber-map-flow.page.html',
  styleUrls: ['uber-map-flow.page.scss'],
})
export class UberMapFlowPage implements OnInit {
  public zoom: number = 12;
  public lat: number = 26.8549;
  public lng: number = 75.8243;
  public markerUrl = '../../../assets/map/markerPin.png';
  public driveStatus: boolean = false;
  public origin: any;
  public destination: any;
  public userCard: boolean = false;
  public renderOpts = {
    suppressMarkers: true,
  };
  public directionOptions = {
    origin: {
      icon: '../../../assets/map/Google-Car.png',
    },
    destination: {
      icon: '../../../assets/map/distinationsMaker.png',
      opacity: 0.8,
    },
  };


  public style = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dadada'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#c9c9c9'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    }
  ]


  constructor(
    private router: Router, public modalController: ModalController,
    private geolocation: Geolocation, private menuCtrl: MenuController,
    public alertController: AlertController,
    private activeRouter:ActivatedRoute,
    public driverService:DriverStatusService
  ) {
    console.log(driverService.driverStatus)
    this.driveStatus = driverService.driverStatus;
    this.userCard = driverService.userCard;
    this.menuCtrl.enable(true);
    // this.geoLocations();
    console.log('construct')
  }

  ngOnInit() {
    this.getDirection();
    console.log('ngonit')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.activeRouter.params.subscribe((data) => {
      console.log(data)
      if(data){
         this.userCard = data.userCard ? data.userCard : this.driverService.userCard ;
      }
    })
  }

  mapReady(a, event) {
    if (event) {
      console.log('event if')
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event, '$event.coords.lat', $event.coords.lat, '$event.coords.lng', $event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  driverStatusChange(event,val) {
    console.log('status', this.driveStatus,event,event.target.value,val)
    this.driverService.driverStatus = this.driveStatus;

      if (this.driveStatus) {
        console.log('true')
        setTimeout(() => {
          this.presentAlertConfirm();
        }, 2000)
  
      } else{
        this.driverService.userCard = false;
        this.userCard = false;
      }

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Request!',
      message: 'You have a new Pickup request',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['customerRequest'])
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.driverService.userCard = true;
            this.userCard = true;
          }
        }
      ]
    });

    await alert.present();
  }


  getDirection() {
    console.log('directions');
    this.origin = { lat: 26.857114, lng: 75.8127086 }
    this.destination = { lat: 0.5 + 26.857114, lng: 0.5 + 75.8127086 }
    console.log('origin', this.origin, this.destination)
  }

  requestAccept() {
    this.router.navigate(['customer-detail']);
  }

   async requestIgnore() {
      this.router.navigate(['customerRequest']);
    }

  public getcurrentLocations() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('resp', resp)
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('data', data);
    });
  }

}
