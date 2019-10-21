/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../../services/wordpress/wordpress.service';
import { Observable } from 'rxjs';
import { UtilService } from '../../../services/util/util.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  public blogPosts: Observable<any>;
  constructor(private wp_service: WordpressService, public util: UtilService) { }

  ngOnInit() {
    this.util.openLoader();
    // Initiate the API call to fetch all blogs. Show spinner in meantime
    this.getBlogData();
  }

  getBlogData() {
    // Call our service function which returns an Observable
    this.wp_service.getBlogs().subscribe(result => {
      this.blogPosts = result;
      this.getImages();
    });
  }

  getImages() {
    this.wp_service.getMedia().subscribe((data: Array<any>) => {
      this.blogPosts.forEach(element => {
        const media = data.filter(item => {
          return item.id === element.featured_media
        })
        element.imageData = media[0];
      });
      console.log(this.blogPosts)
      this.util.closeLoading()
    })
  }

}
