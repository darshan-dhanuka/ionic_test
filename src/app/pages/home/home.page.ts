import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public blogPosts: Observable<any>;

   sidemenu = 1;
  showChildren = '';
  public gridImages;
  public leaderboardName;
  public leaderboardData;
  public toolbarImage;
 
  slideOpts ;
    constructor(private wp_service: WordpressService, public util: UtilService) {
      this.slideOpts = {
        effect: 'cube',
      };
      this.toolbarImage=[
        
          { title: 'headimg', image: 'assets/imgs/head.png' }
        
      ]
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
        { name: 'Chipstack' ,size:'5'},
        ]

      this.leaderboardData = [
        { rank: '1', player: 'Harsh Gupta', Chipstack:'82458', table:'6' },
        { rank: '2', player: 'Vinod Khuyt', Chipstack:'62485',table:'5' },
        { rank: '3', player: 'Ambika Gupta', Chipstack:'52453', table:'2' },
        { rank: '4', player: 'Niytyak Sharma', Chipstack:'42457', table:'7' },
        { rank: '5', player: 'Yash Sinha', Chipstack:'32488', table:'1' },
        { rank: '6', player: 'Gaurav Nayaal', Chipstack:'22458', table:'3' },
        { rank: '8', player: 'Rohit Khanna', Chipstack:'9458', table:'4' },
        { rank: '9', player: 'Piyush Kumar', Chipstack:'8458', table:'3' },
        { rank: '10', player: 'Aashish Bhatiya', Chipstack:'7458', table:'3' },
        
        
      ]


     }
    
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
  
