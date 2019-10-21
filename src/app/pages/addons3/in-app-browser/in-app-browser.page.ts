import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {
  options : InAppBrowserOptions = {
    location : 'yes',// Or 'no' 
    hidden : 'no', // Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',// Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', // Android only 
    closebuttoncaption : 'Close', // iOS only
    disallowoverscroll : 'no', // iOS only 
    toolbar : 'yes', // iOS only 
    enableViewportScale : 'no', // iOS only 
    allowInlineMediaPlayback : 'no',//  iOS only 
    presentationstyle : 'pagesheet',// iOS only 
    fullscreen : 'yes', // Windows only    
};
  public blankUrls = [

    {
      title: 'Tinder Clone starter app',
      imageUrl: '../../assets/addons3/tinder280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Grocery Shopping Full App',
      imageUrl: '../../assets/addons3/store2Door280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Nearbuy clone starter app',
      imageUrl: '../../assets/addons3/nearBy280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Premium Chat themes starter app',
      imageUrl: '../../assets/addons3/chatterfree-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Yoga | Gym | Fitness app starter',
      imageUrl: '../../assets/addons3/yogaAppBanner280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Ticket Booking app starter',
      imageUrl: '../../assets/addons3/evento-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: '../../assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: '../../assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Driver app starter',
      imageUrl: '../../assets/addons3/ionDriver-300x300.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'E-commerce app starter ',
      imageUrl: '../../assets/addons3/shoppr280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi / Cab Booking app starter ',
      imageUrl: '../../assets/addons3/ioncab-banner-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Real estate app starter',
      imageUrl: '../../assets/addons3/roofon-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Short Viral news app starter',
      imageUrl: '../../assets/addons3/60words-280x280.jpg',
      titleUrl: 'http://enappd.com/',
    },
    {
      title: 'Gym | Fitness | Yoga app starter',
      imageUrl: '../../assets/addons3/fitculture-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Grocery shopping & delivery app starter',
      imageUrl: '../../assets/addons3/store2door-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Buzzfeed style app / viral news app starter',
      imageUrl: '../../assets/addons3/viralfeed280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Doctor search /appointment app starter',
      imageUrl: '../../assets/addons3/medix-banner-square280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Netflix style video streaming app starter',
      imageUrl: '../../assets/addons3/teleflix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Spotify style/Music streaming app starte',
      imageUrl: '../../assets/addons3/audrix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Hotel booking app starter',
      imageUrl: '../../assets/addons3/stayinn-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Online video course app starter',
      imageUrl: '../../assets/addons3/vidzee-banner-square-fb-280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Food delivery / search app starter',
      imageUrl: '../../assets/addons3/foodie280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Tinder Clone starter app',
      imageUrl: '../../assets/addons3/tinder-portfolio280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Full Quiz app starter with Front-end and Backend',
      imageUrl: '../../assets/addons3/quizr-banner-square-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
  ]
  public systemUrls = [
    
    {
      title: 'Ticket Booking app starter',
      imageUrl: '../../assets/addons3/evento-280x280.jpg',
      titleUrl: 'http://enappd.com',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: '../../assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: '../../assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Driver app starter',
      imageUrl: '../../assets/addons3/ionDriver-300x300.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'E-commerce app starter ',
      imageUrl: '../../assets/addons3/shoppr280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi / Cab Booking app starter ',
      imageUrl: '../../assets/addons3/ioncab-banner-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Real estate app starter',
      imageUrl: '../../assets/addons3/roofon-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Short Viral news app starter',
      imageUrl: '../../assets/addons3/60words-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Gym | Fitness | Yoga app starter',
      imageUrl: '../../assets/addons3/fitculture-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Grocery shopping & delivery app starter',
      imageUrl: '../../assets/addons3/store2door-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Buzzfeed style app / viral news app starter',
      imageUrl: '../../assets/addons3/viralfeed280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Doctor search /appointment app starter',
      imageUrl: '../../assets/addons3/medix-banner-square280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Netflix style video streaming app starter',
      imageUrl: '../../assets/addons3/teleflix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Spotify style/Music streaming app starte',
      imageUrl: '../../assets/addons3/audrix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Hotel booking app starter',
      imageUrl: '../../assets/addons3/stayinn-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Online video course app starter',
      imageUrl: '../../assets/addons3/vidzee-banner-square-fb-280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Food delivery / search app starter',
      imageUrl: '../../assets/addons3/foodie280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Tinder Clone starter app',
      imageUrl: '../../assets/addons3/tinder-portfolio280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Full Quiz app starter with Front-end and Backend',
      imageUrl: '../../assets/addons3/quizr-banner-square-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
  ]
  
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openBlankUrl(url) {
    this.iab.create(url,'_blank', this.options);

    // browser.on('loadstop').subscribe(event => {
    //   browser.executeScript({
    //     code: "\
    //   var message = 'This is a post load message in in-app browser';\
    //   alert(message);"
    //   });
    // });
  }
  openSystemUrl(url) {
    this.iab.create(url,'_system', this.options);
    // const browser = this.iab.create(url)
    // browser.show();
  }


}
