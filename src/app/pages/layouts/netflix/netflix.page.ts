/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
})
export class NetflixPage implements OnInit {
  public netflixSeriesData = {
    banner: {
      image: 'assets/netflix/wonder.jpg',
      title: 'Wonder Woman'
    },
    upcoming: {
      image: 'assets/netflix/into-the-wild.jpg',
      title: 'Into the wild',
      date: 'March 29'
    },
    trays_before: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      }
    ],
    trays_after: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' }
        ]
      },
    ]
  };
  public netflixMoviesData = {
    banner: {
      image: 'assets/netflix/exorcist.jpg',
      title: 'The Exorcist'
    },
    upcoming: {
      image: 'assets/netflix/got.jpg',
      title: 'Game of Thrones',
      date: 'July 29'
    },
    trays_before: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' }
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
        ]
      }
    ],
    trays_after: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' }
        ]
      },
    ]
  };
  public segmentTab = 'series';
  constructor(private route: Router) {

  }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
