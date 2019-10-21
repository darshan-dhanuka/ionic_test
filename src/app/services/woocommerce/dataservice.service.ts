import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  current_user_details: any;
  current_user: any;
  item_tab: Array<HomeTab> = [
    { title: 'Overview' },
    { title: 'Related' },
    { title: 'Product Reviews' }
  ];
  cart: any;
  constructor() { 
    this.current_user = {
      id:5
    }
    
  }


  card: NotificationsCard = {
    image: 'assets/images/products/1.jpg',
    title: 'Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago',
    time: 9
  };

  notifications: Notification = {
    all: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    deals: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    orders: [],
    others: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ]
  };

  trending = [
    'jacket',
    'drone',
    'shoes for men',
    'car accessories',
    'blazer for men',
    'watches men',
    'sports shoes for men',
    'earphone bluetooth',
    'jackets for men',
    'memory card'
  ];

  tabs: Array<HomeTab> = [
    { title: 'Popular' },
    { title: 'Recently Viewed' },
    { title: 'Fashion' },
    { title: 'Tops' },
    { title: 'Shoes' },
    { title: 'Automotive' },
    { title: 'Bottoms' },
    { title: 'Watches' },
    { title: 'Wallets & Bags' },
    { title: 'Accessories' },
    { title: 'Gadgets' },
    { title: 'Hobbies' },
    { title: 'Phone Upgrades' },
    { title: 'Home Decor' }
  ];


  products_1: Array<Product> = [
    {
      name: 'Bianca Top',
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/1.jpg',
        'assets/images/products/1_1.jpg',
        'assets/images/products/1_2.jpg'
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: '$',
      bought: 1200,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/1.jpg',
            'assets/images/products/1_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/1_2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/1.jpg']
        }
      ],
      store_reviews: [
        {
          image: 'assets/images/products/1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/1.jpg',
            'assets/images/products/1_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/1_2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/1.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Scarpetta Dress',
      cost_price: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/2.jpg',
        'assets/images/products/2_1.jpg',
        'assets/images/products/2_2.jpg'
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: '$',
      bought: 400,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/2.jpg']
        }
      ],
      store_reviews: [
        {
          image: 'assets/images/products/2_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/2.jpg',
            'assets/images/products/2_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/2.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/2.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Misty Dress',
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/3.jpg',
        'assets/images/products/3_1.jpg',
        'assets/images/products/3_2.jpg'
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: '$',
      bought: 365,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/3.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/3.jpg']
        }
      ],
      store_reviews: [
        {
          image: 'assets/images/products/3_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/3.jpg',
            'assets/images/products/3_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/3.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/3.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Blanch Dress',
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/4.jpg',
        'assets/images/products/4_1.jpg',
        'assets/images/products/4_2.jpg'
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: '$',
      bought: 1200,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/4.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/4.jpg']
        }
      ],
      store_reviews: [
        {
          image: 'assets/images/products/4_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/4.jpg',
            'assets/images/products/4_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/4.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/4.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    },
    {
      name: 'Scarlett Dress',
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: 'sample data',
      image: [
        'assets/images/products/5.jpg',
        'assets/images/products/5_1.jpg',
        'assets/images/products/5_2.jpg'
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: '$',
      bought: 234,
      size: 'M',
      color: 'Black',
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: 'seller',
      specs: 'this is a sample product',
      reviews: [
        {
          image: 'assets/images/products/5.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/5.jpg']
        }
      ],
      store_reviews: [
        {
          image: 'assets/images/products/5_1.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: [
            'assets/images/products/5.jpg',
            'assets/images/products/5_1.jpg'
          ]
        },
        {
          image: 'assets/images/products/5.jpg',
          name: 'sample',
          comment:
            'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol',
          rating: 5,
          images: ['assets/images/products/5.jpg']
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        'Return all products within 30 days of delivery if they are not up to your satisfaction',
      sponsored: []
    }
  ];


  orders: Array<Orders> = [
    {
      product: this.products_1[0],
      amount: 123,
      billing_address: {
        address_line_1: 'ghar',
        address_line_2: 'ghar',
        city: 'jaipur',
        last_name: 'bond',
        phone_number: 1125532553,
        zipcode: 12345,
        country: 'India',
        first_name: 'James',
        state: 'Rajasthan'
      },
      shipping_address: {
        address_line_1: 'ghar',
        address_line_2: 'ghar',
        city: 'jaipur',
        last_name: 'bond',
        phone_number: 1125532553,
        zipcode: 12345,
        country: 'India',
        first_name: 'James',
        state: 'Rajasthan'
      },
      delivery_date: new Date(),
      id: 'B102013526',
      order_date: new Date(),
      status: 'Delivered',
      tax: 40
    },
    {
      product:this.products_1[0],
      amount: 123,
      billing_address: {
        address_line_1: 'ghar',
        address_line_2: 'ghar',
        city: 'jaipur',
        last_name: 'bond',
        phone_number: 1125532553,
        zipcode: 12345,
        country: 'India',
        first_name: 'James',
        state: 'Rajasthan'
      },
      shipping_address: {
        address_line_1: 'ghar',
        address_line_2: 'ghar',
        city: 'jaipur',
        last_name: 'bond',
        phone_number: 1125532553,
        zipcode: 12345,
        country: 'India',
        first_name: 'James',
        state: 'Rajasthan'
      },
      delivery_date: new Date(),
      id: 'B102013526',
      order_date: new Date(),
      status: 'Delivered',
      tax: 40
    }
  ];

  
}


export interface HomeTab {
  title: string;
}

export interface NotificationsCard {
  image: string;
  title: string;
  time: number;
}

export interface Notification {
  all: Array<NotificationsCard>;
  deals: Array<NotificationsCard>;
  orders: Array<NotificationsCard>;
  others: Array<NotificationsCard>;
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
  };
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
