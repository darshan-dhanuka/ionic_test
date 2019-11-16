import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-psl',
  templateUrl: './psl.page.html',
  styleUrls: ['./psl.page.scss'],
})
export class PslPage implements OnInit {
  public pslImage;
 
  constructor(private iab : InAppBrowser) {

    this.pslImage=[
        
      { title: 'headimg', image: 'assets/imgs/head.png' }
    
  ]

   }
   OpenUrl()
   {
   const browser = this.iab.create('https://www.pokersportsleague.com/');
   browser.show()
   }
  ngOnInit() {
  }

}
