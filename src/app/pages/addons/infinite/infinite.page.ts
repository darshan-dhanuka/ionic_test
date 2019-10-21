/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../../../services/util/util.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  initialData = [
    {
        'title': 'Mark Twain',
        'author':'Enappd'
    },
    {
        'title': 'John Hopkins',
        'author':'Fat Cat'
    },
    {
        'title': 'Dude Mister',
        'author':'Enappd'
    },
    {
        'title': 'Alice Cooper',
        'author':'Cute Cat'
    },
    {
        'title': 'Sashi Tharoor',
        'author':'Enappd'
    },
    {
        'title': 'Mohandas',
        'author':'Fat Cat'
    },
    {
        'title': 'Premchand',
        'author':'Enappd'
    },
    {
        'title': 'Ramdhari',
        'author':'Cute Cat'
    },
    {
        'title': 'Hermoine Granger',
        'author':'Fat Cat'
    },
    {
        'title': 'Harry Potter',
        'author':'Enappd'
    },
    {
        'title': 'Mindy Magon',
        'author':'Cute Cat'
    },
    {
        'title': 'Jack London',
        'author':'Enappd'
    },
    {
        'title': 'Mumbai',
        'author':'Fat Cat'
    },
    {
        'title': 'Himalaya',
        'author':'Enappd'
    },
    {
        'title': 'Divakar',
        'author':'Cute Cat'
    }
]
  loadedData=[];
  constructor(private util: UtilService) {
    
  }
  ngOnInit() {
    this.resetList();
  }
  loadData(event) {
    this.util.infiniteData().subscribe((data:Array<any>) => {
      data.forEach(element => {
        this.loadedData.unshift(element)
      });
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.loadedData.length > 30) {
        this.util.presentToast('No more data available', true, 'bottom', 1500);
        event.target.disabled = true;
      }
    })
  }
  resetList(){
    this.loadedData = Object.assign([], this.initialData);
    this.infiniteScroll.disabled = false;
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
