/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component } from '@angular/core';

import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/firestore/firebase-authentication.service';
import { UtilService } from './services/util/util.service';
import { Router } from '@angular/router';
import { Card5Page } from './pages/card/card5/card5.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app-component.scss']
})
export class AppComponent {
  sidemenu = 1;
  showChildren = '';
  public sidemenuLayout1 = [
    {
      title: 'Home',
      icon: 'home',
      active: true
    },
    {
      title: 'My Account', url: '/profile1', icon: 'person',
    },
    {
      title: 'Subscription',
      icon: 'time'
    },
   
    {
      title: 'Invite',
      icon: 'gift'
    },
    {
      title: 'Settings',
      icon: 'settings'
    },
    {
      title: 'Logout',
      icon: 'log-out',
      url: '/logout'
    },
  ];
  public beginner = [
    {
      title: 'Home', url: '/home', icon: 'home',
      
    },
    {
      title: 'About Us', url: '/about', icon: 'albums',
      
    },
    { 
      title: "FAQ's", url: '/faq', icon: 'bulb',
      
    },
    {
      title: 'News ', url: '/news', icon: 'list-box',
      
    },
    {
      title: 'Blogs ', url: '/blogs', icon: 'logo-wordpress',
      
    },
    {
      title: 'Forum ', url: null, icon: 'chatboxes',
      
    },
    {
      title: 'Responsible Poker', url: '/home', icon: 'eye',
      
    },
    {
      title: 'Subscribe', url: '/paypal-web', icon: 'cash',
      
    },
    
    {
      title: 'My Account', url: '/profile1', icon: 'contact',
      
    },
    
    {
      title: 'Watch', url: '/video-large-card', icon: 'film',
      
    },
  
    
    /*
    {
      title: 'Firebase', url: null, icon: 'flame',
      children: [{ title: 'Data Operations', url: '/home', icon: 'nuclear' },
      { title: 'Storage', url: '/image-upload', icon: 'analytics' },
      { title: 'Login / Signup', url: '/logout', icon: 'log-in' }]
    },
    {
      title: 'Layouts', url: null, icon: 'apps',
      children: [
        { title: 'Instagram', url: '/insta-tabs', icon: 'logo-instagram', color: 'pink' },
        { title: 'Uber Map Flow', url: '/uber-map-flow', icon: 'map', color: 'black' },
        { title: 'Whatsapp', url: '/whatsapp', icon: 'logo-whatsapp' },
        { title: 'Profile', url: '/profile1', icon: 'person' }
      ]
    },
    {
      title: 'Login & Signups', url: null, icon: 'log-in',
      children: [
        { title: 'Layout 1', url: '/register-1', icon: 'partly-sunny' },
        { title: 'Layout 2', url: '/login-1', icon: 'flame' },
        { title: 'Layout 3', url: '/login-2', icon: 'star' },
        { title: 'Layout 4', url: '/login-3', icon: 'moon' }]
    },
    */
    {
      title: 'Profile', url: null, icon: 'list-box', module: 'sidemenu',
      children: [
        /*{ title: 'Overlay', url: '/home', icon: 'partly-sunny' },
        { title: 'Small Grid', url: '/home', icon: 'more' },
        { title: 'Full screen', url: '/home', icon: 'logo-model-s' },
        { title: 'Small Grid 2', url: '/home', icon: 'apps' },*/
        { title: 'Profile', url: '/home', icon: 'star' },]
        /* { title: 'Circular ', url: '/home', icon: 'aperture' }]*/
    },
    /*
    {
      title: 'Chat Lists', url: null, icon: 'chatboxes',
      children: [{ title: 'Elegance', url: '/elegance', icon: 'bulb' },
      { title: 'Pastry', url: '/pastry', icon: 'pizza' },
      { title: 'Artboard', url: '/artboard', icon: 'brush' },
      { title: 'Rose', url: '/rose-list', icon: 'rose' }]
    },
    {
      title: 'Chat Screens', url: null, icon: 'chatbubbles',
      children: [{ title: 'Fluid', url: '/fluid', icon: 'water' },
      { title: 'Business', url: '/business', icon: 'briefcase' },
      { title: 'Bubble', url: '/bubble', icon: 'radio-button-off' },
      { title: 'Rose', url: '/rose', icon: 'rose' },
      { title: 'Blocks', url: '/blocks', icon: 'square' },
      { title: 'Breeze', url: '/breeze', icon: 'sunny' },
      { title: 'Minimal', url: '/minimal', icon: 'remove' },
      { title: 'Starbucks', url: '/starbucks', icon: 'star' }]
    },
    {
      title: 'Video Playlist', url: null, icon: 'film',
      children: [
        { title: 'Youtube Home', url: '/youtube-home-playlist', icon: 'apps' },
        { title: 'Youtube Playlist', url: '/grid-youtube-playlist', icon: 'logo-youtube', color: 'gray' },
        { title: 'Large Cards', url: '/video-large-card', icon: 'logo-youtube' },
      ]
    },
    {
      title: 'Grid Layouts', url: null, icon: 'list',
      children: [
        { title: 'Shop Grid', url: '/shop-grid', icon: 'grid' },
        { title: 'Square Grid', url: '/square-grid', icon: 'image' },
        { title: 'Full Grid', url: '/full-grid', icon: 'easel' },
        { title: 'Masonry Grid', url: '/masonry-grid', icon: 'photos' },
        { title: 'Card Grid X3', url: '/grid-x3', icon: 'grid' },
        { title: 'Product Grid X2', url: '/grid-x2', icon: 'grid' }
      ]
    },
    {
      title: 'List and Sliders', url: null, icon: 'albums',
      children: [
        { title: 'Card Slider', url: '/card-slider', icon: 'photos' },
        { title: 'Product Cards', url: '/product-card', icon: 'menu' },
        { title: 'Large Cards', url: '/large-card', icon: 'albums' },
        { title: 'Expandable List', url: '/expandable-list', icon: 'filing' },
        { title: 'Event Cards', url: '/event-card', icon: 'bonfire' },
        { title: 'Movie Ticket', url: '/movie-ticket', icon: 'film' },
        { title: 'Sliders', url: '/sliders', icon: 'phone-landscape' },
        { title: 'Filtering List', url: '/filtering-list', icon: 'funnel' }
      ]
    },

  ];
  public startup = [
    {
      title: 'Wordpress', url: null, icon: 'logo-wordpress',
      children: [
        { title: 'Blogs', url: '/blogs', icon: 'list' },
        { title: 'Single Blog', url: '/blogpage', icon: 'document', disabled: true },
      ]
    },
    {
      title: 'Layouts 2', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Addons', url: null, icon: 'cog',
      children: [
        { title: 'Globalization', url: '/translate', icon: 'school' },
        { title: 'List reordering', url: '/reorder', icon: 'menu' },
        { title: 'Pull to refresh', url: '/refresh', icon: 'refresh' },
        { title: 'Infinite Scroll', url: '/infinite', icon: 'infinite' },
        { title: 'Custom Fonts', url: '/customfonts', icon: 'school' },
        { title: 'Content Loader', url: '/content-loader', icon: 'refresh-circle' },
        { title: 'Content Loader 2', url: '/content-loader2', icon: 'logo-ionic' },
        { title: 'Date Time Pickers', url: '/datetimepickers', icon: 'calendar' },
        { title: 'Settings', url: '/settings', icon: 'cog' }]
    },

  ];


  public pro = [

    {
      title: 'Addons Pro', url: null, icon: 'chatboxes',
      children: [
        { title: 'AdMob', url: '/admob', icon: 'tv', device: true },
        { title: 'Barcode Scanner', url: '/bar-code', icon: 'barcode', device: true },
        { title: 'Image Cropper', url: '/cropper', icon: 'aperture', device: true },
        { title: 'Google Autocomplete ', url: '/google-autocomplete', icon: 'code' },
        { title: 'Google Places', url: '/google-places', icon: 'globe' },
        { title: 'Social Sharing', url: '/social-share', icon: 'share', device: true },
        { title: 'Sweet Alerts', url: '/sweet-alert', icon: 'alert' },
        { title: 'In-app browser', url: '/in-app-browser', icon: 'logo-chrome' },
        { title: 'Social login', url: '/logout', icon: 'logo-google' }]
    },
    { title: 'Phaser Game', url: '/phaser', icon: 'logo-game-controller-b' },
    {
      title: 'Woocommerce', url: null, icon: 'logo-wordpress',
      children: [
        { title: 'Products', url: '/woocommerce-products', icon: 'filing' },
        { title: 'Product detail', url: '/product-details', icon: 'gift' },
        { title: 'My Orders', url: '/orders', icon: 'pricetags' },
        { title: 'Cart', url: '/cart', icon: 'cart' }]
    },
    {
      title: 'Payment Gateways', url: null, icon: 'card',
      children: [
        { title: 'Stripe', url: '/stripepayment', icon: 'filing', device: true },
        { title: 'Paypal', url: '/paypalpayment', icon: 'gift', device: true },
        { title: 'Apple Pay', url: '/applepay', icon: 'logo-apple', apple: true },
        { title: 'Stripe PWA', url: '/stripe-web', icon: 'filing' },
        { title: 'Paypal PWA', url: '/paypal-web', icon: 'gift' }
      ]
    }
    */
  ];

  constructor(
    private authService: AuthenticationService,
    private util: UtilService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    public modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    private iab: InAppBrowser,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }
  logout() {
    console.log('logout item');
    this.authService.logout().then(() => {
      this.util.navigate('login', false);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
  showSidemenu(index) {
    this.sidemenu = index + 1;
  }

  expandMenu(title) {
    if (this.showChildren === title) {
      this.showChildren = '';
    } else {
      this.showChildren = title;
    }
    console.log(this.showChildren)
  }


  async redirectPage(pageUrl, disabled) {
    if (disabled) {
      return
    }
    if (pageUrl === '/movie-ticket') {
      const modal = await this.modalCtrl.create({
        component: Card5Page
      })
      return modal.present()
    } else if (pageUrl === '/logout') {
      this.logout();
    } else if (pageUrl === '/product-details') {
      this.route.navigate([pageUrl, { id: 65 }]);
    } else {
      this.route.navigate([pageUrl])
    }
  }

  async proRedirect(pageUrl) {
    console.log(pageUrl);
    this.route.navigate([pageUrl])
    this.menuCtrl.toggle();
  }

}
