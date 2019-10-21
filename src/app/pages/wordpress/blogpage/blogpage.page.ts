/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../../services/wordpress/wordpress.service';
import { UtilService } from '../../../services/util/util.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.page.html',
  styleUrls: ['./blogpage.page.scss'],
})
export class BlogpagePage implements OnInit {
  blogDetail = null;
  image_url = null;
  constructor(private activatedRoute: ActivatedRoute, 
    private wp_service: WordpressService,
    public util: UtilService) { }

  ngOnInit() {
    this.util.openLoader();
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.wp_service.getBlogDetail(id).subscribe(result => {
      this.blogDetail = result;
      this.getImage(this.blogDetail);
      this.getTags();
      this.getAuthor();
    });
  }

  getImage(data) {
    this.wp_service.getImage(data.featured_media).subscribe(data => {
      this.blogDetail.imageData = data;
      this.image_url = this.blogDetail.imageData.source_url;
    })
  }

  getTags(){
    this.wp_service.getTags().subscribe((data: Array<any>) => {
      this.blogDetail.tagsData = data.filter(item =>{
        return this.blogDetail.tags.includes(item.id)
      });
      console.log(this.blogDetail)
    })
  }

  getAuthor(){
    this.wp_service.getUser(this.blogDetail.author).subscribe(data => {
      console.log(data)
      this.blogDetail.authorData = data;
      this.util.closeLoading()
    })
  }

}
