/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { NgModule } from '@angular/core';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Stripe } from '@ionic-native/stripe/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationService } from './services/firestore/firebase-authentication.service';
import { UserDataService } from './services/data-services/user-data.service';
import { IonicSwingModule } from 'ionic-swing';
import { FirestoreService } from './services/firestore/firestore.service';
import { FAQDataService } from './services/data-services/faq-data.service';
import { StorageService } from './services/firestore/filestorage.service';
import { WordpressService } from './services/wordpress/wordpress.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Card5Page } from './pages/card/card5/card5.page';
import { ViewVideoPage } from './pages/video-playlists/view-video/view-video.page';
import { Device } from '@ionic-native/device/ngx';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { AgmDirectionModule } from 'agm-direction';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilService } from './services/util/util.service';
import { CardServicesService } from './services/card/card-services.service';
import { GridServiceService } from './services/grid/grid-service.service';
import { DriverStatusService } from './services/taxi/driver-status.service';
import { DataService } from './services/tinder/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthenticationService1 } from './authentication.service';
import { DataService1 } from './data.service';
import { AuthGuardService } from './auth-guard.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { GoogleMapsService } from './services/google-maps/google-maps.service';
import { ConnectivityService } from './services/network/connectivity.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { MapDirectionPage } from './pages/addons3/map-direction/map-direction.page';
import { Crop } from '@ionic-native/crop/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { WooCommerceService } from './services/woocommerce/woo-commerce.service';
import { FunctionService } from './services/woocommerce/function.service';
import { DataserviceService } from './services/woocommerce/dataservice.service';
import { IonicStorageModule } from '@ionic/storage';
import { OrderinfoPage } from './pages/woocommerce/orderinfo/orderinfo.page';
import { PayPal } from '@ionic-native/paypal/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, Card5Page, ViewVideoPage, MapDirectionPage, OrderinfoPage],
  entryComponents: [Card5Page, ViewVideoPage, MapDirectionPage, OrderinfoPage],
  imports: [BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP_Xy-1QSclKYAvxSmAZO2BuFAWWAlOZQ',
      libraries: ['places']
    }),
    AgmDirectionModule,
    AppRoutingModule,
    IonicSwingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMapsAPIWrapper,
    Geolocation,
    Stripe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserDataService,
    FAQDataService,
    GoogleMapsAPIWrapper,
    AuthenticationService,
    AuthenticationService1,
    DataService1,
    AuthGuardService,
    FirestoreService,
    StorageService,
    Device,
    Crop,
    Base64,
    AdMobPro,
    WordpressService,
    UtilService,
    CardServicesService,
    GridServiceService,
    DriverStatusService,
    DataService,
    Camera,
    ApplePay,
    Facebook,
    TwitterConnect,
    GooglePlus,
    SocialSharing,
    InAppBrowser,
    Network,
    PayPal,
    GoogleMapsService,
    ConnectivityService,
    BarcodeScanner,
    WooCommerceService,
    FunctionService,
    DataserviceService,
    { provide: FirestoreSettingsToken, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
