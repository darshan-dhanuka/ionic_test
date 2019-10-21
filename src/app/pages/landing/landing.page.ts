import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonSlides } from '@ionic/angular';
import { NavController} from 'ionic-angular';
import { GridServiceService } from 'src/app/services/grid/grid-service.service';
import { CardServicesService } from 'src/app/services/card/card-services.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  sidemenu = 1;
  showChildren = '';
  public gridImages;
 
  slideOpts ;
    constructor() {
      this.slideOpts = {
        effect: 'cube',
      };
    
      this.gridImages = [
        { title: 'V I N Y A S A', image: 'assets/products/vinyasa.jpg' },
        { title: 'A S H T A N G A', image: 'assets/products/ashtanga.jpg' },
        { title: 'I Y E N G A R', image: 'assets/products/gallery7.jpg' },
        { title: 'B I K R A M', image: 'assets/products/bikram.jpg' },
        { title: 'J I V A M U K T I', image: 'assets/products/jivamukti.jpg' },
        { title: 'P O W E R', image: 'assets/products/power.jpg' },
        { title: 'S I V A N A N D A', image: 'assets/products/sivananda.jpg' },
        { title: 'Y I N', image: 'assets/products/yin.jpg' },
        
      ]
     }
    
    ngOnInit() {}
  
  }
  
