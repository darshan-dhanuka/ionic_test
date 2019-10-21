/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface HomeTab {
  title: string
};

export interface NotificationsCard {
  image: string,
  title: string,
  time: number
}

export interface Notification {
  all: Array<NotificationsCard>,
  deals: Array<NotificationsCard>,
  orders: Array<NotificationsCard>,
  others: Array<NotificationsCard>
}

export interface Product {
  name: string;
  image: Array<string>;
  size: string;
  color: string;
  cost_price: number;
  discount: number;
  offer: boolean;
  stock: number;
  description: string;
  currency: string;
  bought: number;
  shipping: number;
  rating: number;
  rating_count: number;
  store_rate: number;
  store_rating: number;
  store_rating_count: number;
  sold_by: string;
  specs: string;
  reviews: Array<Review>;
  store_reviews: Array<Review>;
  sizing: {
    small: number;
    okay: number;
    large: number;
  },
  buyer_guarantee: string;
  sponsored: Array<Product>;
}
export interface Review {
  image: string;
  name: string;
  comment: string;
  rating: number;
  images: Array<string>;
}
export interface Cart {
  product: Product;
  quantity: number;
}

export interface User {
  fname: string;
  lname: string;
  email: string;
  address: Array<Address>;
  billing: Array<any>;
  uid: string;
  did: string;
  aid: string;
}

export interface Address {
  first_name: string;
  last_name: string;
  address_line_1: string;
  address_line_2: string;
  country: string;
  state: string;
  city: string;
  zipcode: number;
  phone_number: number;
}

export interface Orders {
  product: Product;
  order_date: Date;
  id: string;
  amount: number;
  delivery_date: Date;
  status: string;
  billing_address: Address;
  shipping_address: Address;
  tax: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public modalCtrl: ModalController) { }




  details = [{
    userDetails: 'A BITS and IIT Delhi allumni established web and mobile development product and service providing company located at jaipur and bangalore.',
    image: '../../../assets/tinder/chat1.jpg',
    ovalContents: [{
      icon: 'settings',
      text: 'SETTINGS',
    },
    {
      // icon: 'camera',
      cameraText: 'ADD MEDIA',
      camera: 'camera'
    },
    {
      icon: 'create',
      text: 'EDIT INFO',
    }],
    slides: [{
      icon: 'flame',
      head: 'get tinder gold',
      subhead: 'See who Likes You and more!',
      color: 'warning'
    }, {
      icon: 'flash',
      head: 'get matches faster',
      subhead: 'Boost your profile once a month!',
      color: 'tertiary'
    }, {
      icon: 'star',
      head: 'stand out with super likes',
      subhead: 'your\'re 3x more likely to get a match!',
      color: 'success'
    }, {
      icon: 'pin',
      head: 'swipe around the world',
      subhead: 'Passport to anywhere with tinder plus!',
      color: 'primary'
    }, {
      icon: 'key',
      head: 'control your profile',
      subhead: 'limit what others see with tinder plus',
      color: 'warning'
    }, {
      icon: 'heart',
      head: 'increase your chances',
      subhead: 'Get unlimited Likes with tinder Plus!',
      color: 'secondary'
    }
    ]
  }
  ]

  tabs: Array<HomeTab> = [
    { title: 'contact' },
    { title: 'flame' },
    { title: 'chatbubbles' },
  ];

  footer_icons: any = [
    { title: 'refresh', color: 'medium', mode: 'md' },
    { title: 'close', color: 'danger', mode: 'md' },
    { title: 'star', color: 'primary', mode: 'md' },
    { title: 'heart', color: 'secondary', mode: 'md' },
    { title: 'flash', color: 'warning', mode: 'ios' }];
  card = [
    {
      name: 'Kate Winslet',
      symbol: 'San Francisco',
      image: '../../../assets/tinder/chat1.jpg',
      age: '24',
      distance: 'less than a mile away',
      quote: 'Life is unfair',
      occupation: 'artist',

      slides: [
        { slideImage: '../../../assets/tinder/chat1.jpg' },
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    },
    {
      name: 'Jennifer Lawrence',
      symbol: 'Havard Russia',
      image: '../../../assets/tinder/chat2.jpg',
      age: '26',
      distance: 'less than half a mile away',
      quote: 'Life is unfair',
      occupation: 'Singer',

      slides: [
        { slideImage: '../../../assets/tinder/chat2.jpg' },
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    },
    {
      name: 'Jennifer Aniston',
      symbol: 'Cambridge calcutta',
      image: '../../../assets/tinder/chat3.jpg',
      age: '21',
      distance: 'less than one mile away',
      quote: 'Every thing is possible',
      occupation: 'Painter',

      slides: [
        { slideImage: '../../../assets/tinder/chat3.jpg' }
        , { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    },
    {
      name: 'Nicole ',
      symbol: 'Kawana Meghalya',
      image: '../../../assets/tinder/chat4.jpg',
      age: '19',
      distance: '3 mile away',
      quote: 'Life is unfair',
      occupation: 'Carpenter',

      slides: [
        { slideImage: '../../../assets/tinder/chat4.jpg' },
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    },
    {
      name: 'Kendrick',
      symbol: 'SentPaul',
      image: '../../../assets/tinder/chat5.jpg',
      age: '24',
      distance: 'less than a mile away',
      quote: 'Life is unfair',
      occupation: 'Actor',

      slides: [
        { slideImage: '../../../assets/tinder/chat5.jpg' },
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    },
    {
      name: 'Anna Faris',
      symbol: 'IIIME',
      image: '../../../assets/tinder/chat7.jpg',
      age: '26',
      distance: 'less than 3 mile away',
      quote: 'Life is unfair',
      occupation: 'Software Engineer',

      slides: [
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat7.jpg' },
        { slideImage: '../../../assets/tinder/chat4.jpg' }
      ]
    }
  ];
  notifications_tab: Array<HomeTab> = [{ title: 'All' },
  { title: 'Deals' },
  { title: 'Your Orders' },
  { title: 'Other' }];

  rewards_tab: Array<HomeTab> = [{ title: 'Dashboard' },
  { title: 'Redeem' },
  { title: 'Information' }];

  gold = [{
    id: 'refresh',
    mainheader: 'Get Tinder Gold',
    icon: 'heart',
    header: 'See who Likes you',
    subHeader: 'Match with them instantly',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price untill you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tspppimg continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo',
      head: 'most popular'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }]

  refresh = [{
    id: 'refresh',
    mainheader: 'Get Tinder Plus',
    icon: 'refresh',
    header: 'Unlimited Rewinds',
    subHeader: 'Go back and swipe again!',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price untill you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tspppimg continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }]

  star = [{
    id: 'star',
    mainheader: 'Get Tinder Plus',
    header: 'Unlimited Likes',
    subHeader: '11:52:45',
    image: '../../../assets/tinder/chat4.jpg',
    subheader1: 'Swipe right as much as you want',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price untill you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tspppimg continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo',
      head: 'most popular'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }]

  flash = [{
    id: 'flash',
    boost: '0.1x',
    view: 'VIEWS',
    header: 'Out of Boosts!',
    subHeader: 'Be the top profile in  your area for 30 minutes to get more matches.',
    button: 'boost me',
    button1: 'get tinder plus',
    button2: '(2 free Boost every month)',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price untill you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tspppimg continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '10',
      text: 'Boosts',
      amount: '$165.6/ea'
    }, {
      month: '6',
      text: 'Boosts',
      amount: '$225.6/ea',
      head: 'save 25%'

    }, {
      month: '1',
      text: 'Boosts',
      amount: '$330.6/ea'
    }],
    column2: [{
      icon: 'flash',
      view: 'VIEWS',
      header: 'get 2 free Boost every month',
      subHeader: 'skip the line & get more matches!',
      button: 'continue',
      colomn: [{
        month: '12',
        text: 'months',
        amount: '$166.6/mo'
      }, {
        month: '6',
        text: 'months',
        amount: '$225.6/mo',
        head: 'MOST POPULAR'

      }, {
        month: '1',
        text: 'months',
        amount: '$330.6/mo'
      }],
    }]
  }]
menuDropdown =[{
  name:'Default'
},{
  name:'Nearby'
},{
  name:'Unopened'
}]

  tinderPlus = [{
    image: '../../../assets/tinder/puzzle.png',
    head: 'Unlimited right swipes',
    subHead: 'Swipes as much as you like.',
    head1: 'unlimited likes',
    subHead1: 'Give me the ability to like as manu people as i want',
    toggle: true
  }, {
    image: '../../../assets/tinder/flash1.png',
    head: 'skip the line',
    subHead: 'Be the top profile in your area for 30 minutes to get more matches.',
    head1: 'tinder boost',
    subHead1: 'Give me one free boost every month',
    toggle: true
  }, {
    image: '../../../assets/tinder/flash2.png',
    head: 'control who you see',
    subHead: 'it\'s simple now to choose the type of people you want to see on Tinder.',
    head1: 'balanced recommendations',
    subHead1: 'See the most relevent people to you(default setting)',
    heade2: 'recently active',
    subHead2: 'See the most recently active people first',
    toggle: false
  }, {
    image: '../../../assets/tinder/flash3.png',
    head: 'control who see you',
    subHead: 'Only be shown to certain types of people on tinder.',
    head1: 'Standard',
    subHead1: 'Only be shown to certain types of people for individual recommendations.',
    heade2: 'only people i\'ve liked',
    subHead2: 'only people i\'ve right swiped will see me.',
    toggle: false
  }, {
    image: '../../../assets/tinder/protection.png',
    head: 'control your profile',
    subHead: 'make parts of your profile information invisible to other people.',
    head1: 'dont show my age',
    heade2: 'Make my distance invisible',
    toggle: true
  }, {
    image: '../../../assets/tinder/route.png',
    head: 'passport to any location',
    subHead: 'Match with people all around the world.Paris,Los Angles, Sydney. Go!',
    head1: 'Location',
    head1right: 'My current location',
  }, {
    image: '../../../assets/tinder/rewind.png',
    head: 'rewind your last swipe',
    subHead: 'Accidently swiped on someone? rewind and swipe again.',
    head1: 'Rewind last swipe',
    subHead1: 'Give me the ability torewind my last swipe',
    toggle: true
  }, {
    image: '../../../assets/tinder/hide.png',
    head: 'hide ads',
    subHead: 'Enjoy a completely ad free experience.',
    head1: 'hide advertisement',
    toggle: true
  }];
  images = [{ image: '../../../assets/tinder/chat1.jpg' }, { image: '../../../assets/tinder/chat2.jpg' }, { image: '../../../assets/tinder/chat3.jpg' }, { image: '../../../assets/tinder/chat4.jpg' }, { icon: 'add' }, { icon: 'add' }, { icon: 'add' }, { icon: 'add' }, { icon: 'add' }];  

  editInfo = [
    {
      headItem: 'Smart photos',
      toggleHeader: true,
      headItemSubhead: 'Smart photos continuosly tests all your profile photos to find the best one.'
    },
    {
      head: 'About User',
      toggle: false,
      input: 'Mechanical Engineer'
    }, {
      head: 'Job title',
      toggle: false,
      input: 'Mechanical Engineer'
    }, {
      head: 'company',
      toggle: false,
      input: 'GAIL India PVt Ltd.'
    }, {
      head: 'School',
      toggle: false,
      input: 'Shree acharya Vidya niketan'
    }, {
      head: 'snapchat',
      toggle: false,
      subhead: 'Connect bitmoji'
    }, {
      head: 'Show my instagram photos',
      toggle: false,
      subhead: 'Connect Instagram',
      subhead1: 'control how you share your Spotify Anthem on feed in Settings.',
      subhead2: 'control how you share your top Spotify Artists on feed in Settings.'
    }, {
      head: 'I Am',
      toggle: false,
      input: 'Man'
    }, {
      head: 'control your Profile',
      toggle: true,
      subhead1: 'dont show my age',
      subhead2: 'Make my distance invisible',

    },
  ];
  shareFeed = [{
    head: 'Share My Feed',
    toggle: 'true',
    para: 'Sharing your social content will greatly increase your chances of receiving messages',
    para2: 'Shared content'
  }, {
    head: 'Photos',
    toggle: 'true'
  }, {
    head: 'Spotify Anthem',
    toggle: 'true'
  }, {
    head: 'top Spotify Artist',
    toggle: 'true'
  }, {
    head: 'Bio',
    toggle: 'true'
  }, {
    head: 'School',
    toggle: 'true'
  }, {
    head: 'work',
    toggle: 'true'
  }];
  videoAutoplay = [{
    para: 'Playing videos use more datathan displaying photos,so choose when videos autoplay here.',
    para2: 'autoplay videos'
  },
  {
    head: 'On Wifi and Mobile data.',
  }, {
    head: 'On Wifi only',
  }, {
    head: 'Never autoplay Videos',
  }];
  emailVerification = [{
    para: 'Control the emails you want to get - all of them, just the important stuff or the bare minimum.you can always unsubscribe from the bottom of email.',
  },
  {
    email: 'Enappd@Enappd.com.',
    toggle: false,
    emailDesc:'Email not verified.Tap below to request a verification email.'
  }, {
    head: 'New Matches',
    toggle: true

  }, {
    head: 'New Messages',
    toggle: true

  }, {
    head: 'Promotions',
    toggle: true,
    des: 'I want to receive newa,updates and offers from Dating.'
  }]
  pushNotifications = [{
    head: 'New Matches',
    para: 'You just got a new match',
    toggle: true
  }, {
    head: 'Messages',
    para: 'Someone sent you a new message',
    toggle: true
  }, {
    head: 'Messages Likes',
    para: 'someone liked your message',
    toggle: true
  }, {
    head: 'super Likes',
    para: 'You have been super liked! swipe to found out by whom.',
    toggle: true
  }, {
    head: 'Top Picks',
    para: 'Your daily top Picks are ready!',
    toggle: true
  }]
  deleteAccount = [{
    color: '#FFCA28',
    image: '../../../assets/tinder/setting.png',
    head: 'something  ',
    head1: 'is broken'
  }, {
    color: '#AED581',
    image: '../../../assets/tinder/brush.png',
    head: 'i want a  ', head1: 'fresh start'
  }, {
    color: '#4FC3F7',
    image: '../../../assets/tinder/dislike.png',
    head: 'i don\'t like  ', head1: 'dating'
  }, {
    color: '#EC407A',
    image: '../../../assets/tinder/heart.png',
    head: 'i met  ', head1: 'someone'
  }, {
    color: '#9E9E9E',
    image: '../../../assets/tinder/cup.png',
    head: 'i need a  ', head1: 'break from'
  }, {
    color: '#E91E63',
    image: '../../../assets/tinder/edit.png',
    head: 'other '
  }];
report = [{
  image:'../../../assets/tinder/warning.png',
  head:'Report User',
  desc:'Is this person bothering you?Tell us what they did.',
  items:[{
    icon:'camera',
    detail:'Inappropriate Photos',
    color:'#5E35B1'
  },{
    icon:'american-football',
    detail:'Feels like Spam',
    color:'orange'
  },{
    icon:'paw',
    detail:'Other',
    color:'#43A047'
  }]
}];



  async openModal(comp, props,cssClass?) {
    const modal = await this.modalCtrl.create({
      component: comp,
      componentProps: { value: props },
      cssClass: cssClass
    });
    return modal.present();
  }
}
