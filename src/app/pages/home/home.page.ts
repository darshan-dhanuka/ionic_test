import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


   sidemenu = 1;
  showChildren = '';
  public gridImages;
  public leaderboardName;
  public leaderboardData;
 
  slideOpts ;
    constructor() {
      this.slideOpts = {
        effect: 'cube',
      };
    
      this.gridImages = [
        { title: '', image: 'assets/sliders/slide1.jpg' },
        { title: '', image: 'assets/sliders/slide2.jpg' },
        { title: '', image: 'assets/sliders/slide3.jpg' },
        { title: 'B I K R A M', image: 'assets/products/bikram.jpg' },
        { title: 'J I V A M U K T I', image: 'assets/products/jivamukti.jpg' },
        { title: 'P O W E R', image: 'assets/products/power.jpg' },
        { title: 'S I V A N A N D A', image: 'assets/products/sivananda.jpg' },
        { title: 'Y I N', image: 'assets/products/yin.jpg' },
        
      ]

      this.leaderboardName = [
        { name: 'Rank',size:'2' },
        { name: 'Player' ,size:'5' },
        { name: 'Score' ,size:'5'},
      ]

      this.leaderboardData = [
        { rank: '1', player: 'Harsh Gupta', score:'82458' },
        { rank: '2', player: 'Vinod Khuyt', score:'62485' },
        { rank: '3', player: 'Ambika Gupta', score:'52453' },
        { rank: '4', player: 'Niytyak Sharma', score:'42457' },
        { rank: '5', player: 'Yash Sinha', score:'32488' },
        { rank: '6', player: 'Gaurav Nayaal', score:'22458' },
        { rank: '7', player: 'Farhan Qureishi', score:'12454' },
        { rank: '8', player: 'Rohit Khanna', score:'9458' },
        { rank: '9', player: 'Piyush Kumar', score:'8458' },
        { rank: '10', player: 'Aashish Bhatiya', score:'7458' },
        
        
      ]


     }
    
    ngOnInit() {}
  
  }
  
