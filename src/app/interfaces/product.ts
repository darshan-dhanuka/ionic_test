/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


export interface GridProduct {
    name: string,
    image: Array<string>,
    size: string,
    color: string,
    cost_price: number,
    discount: number,
    offer: boolean,
    stock: number,
    description: string,
    currency: string,
    bought: number,
    shipping: number,
    rating: number,
    rating_count: number,
    store_rate: number,
    store_rating: number,
    store_rating_count: number,
    sold_by: string,
    specs: string,
    reviews: Array<any>,
    store_reviews: Array<any>,
    sizing: {
      small: number,
      okay: number,
      large: number
    },
    buyer_guarantee: string,
    sponsored: Array<any>
  }