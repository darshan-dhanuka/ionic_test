import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WooCommerceService {
  url: string = "https://swift-footed-config.000webhostapp.com";
  consumerKey: string = "ck_bc98995c28477bc2fce7bb5eb49e7cc839c71801";
  consumerSecret: string = "cs_66c7d6d45ae47e8a490f6fe8540298e1c77fd060";

  constructor(private http: HttpClient) { }

  getProducts() {
    return `${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
      }&consumer_secret=${this.consumerSecret}`;
  }

  getTags() {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/products/tags?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getProduct(pid) {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }

  getProductReviews(pid) {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v2/products/${pid}/reviews?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }

  updateUser(user, address) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let data = {
      first_name: user.first_name,
      last_name: user.last_name,
      billing: address,
      shipping: address
    };

    let covertedData = this.JSON_to_URLEncoded(data);

    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers/${user.id}/?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          covertedData,
          { headers }
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }

  JSON_to_URLEncoded(element, key?, list?) {
    let new_list = list || [];
    if (typeof element === "object") {
      for (let idx of Object.keys(element)) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + "[" + idx + "]" : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + "=" + encodeURIComponent(element));
    }
    return new_list.join("&");
  }

  createOrder(obj) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let order = this.JSON_to_URLEncoded(obj);

    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/orders/?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          order,
          { headers }
        )
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getPastOrders(customerId) {
    return new Promise(resolve => {
      this.http
        .get(
          `${
          this.url
          }/wp-json/wc/v3/orders?customer=${customerId}&consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(`${this.url}/wp-json/wp/v2/posts`).subscribe(res => {
        resolve(res);
      });
    });
  }

  getPostsTags() {
    return new Promise(resolve => {
      this.http.get(`${this.url}/wp-json/wp/v2/categories`).subscribe(res => {
        resolve(res);
      });
    });
  }

  getPostsData(pid) {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wp/v2/posts?categories=${pid}&consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(postsData => {
          resolve(postsData);
        });
    });
  }

  getAttributes() {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/products/attributes?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getAttributeTerms(attrId) {
    return new Promise(resolve => {
      this.http
        .get(
          `${
          this.url
          }/wp-json/wc/v3/products/attributes/${attrId}/terms?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  filterProducts(attr, attrTerm) {
    return new Promise(resolve => {
      this.http
        .get(
          `${
          this.url
          }/wp-json/wc/v3/products?attribute=${attr}&attribute_term=${attrTerm}&consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getPaymentGateways() {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/payment_gateways?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  changePassword(uid, pass) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const changedPass = `password=${pass}`;
    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers/${uid}/?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          changedPass,
          { headers }
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }


}
