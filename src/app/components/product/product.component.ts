import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { WooCommerceService } from 'src/app/services/woocommerce/woo-commerce.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Input() slider: IonSlides;
  @Output() notify: EventEmitter<Number> = new EventEmitter<Number>();

  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;

  reviews: any;

  constructor(
    public alertController: AlertController,
    private socialSharing: SocialSharing,
    public woocommerceService: WooCommerceService,
  ) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    const pid = this.product.id;
    this.woocommerceService.getProductReviews(pid).then(reviews => {
      this.reviews = reviews;
    });
  }

  goToReviews() {
    this.notify.emit(2);
  }

  toogle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    this.slider.lockSwipes(true);
  }

  gainback() {
    this.slider.lockSwipes(false);
  }

  like() {
    console.log('like');
    this.liked = !this.liked;
  }

  shareViaInstagram(img) {
    // Check if sharing via email is supported
    this.socialSharing
      .canShareVia('instagram')
      .then(() => {
        // Sharing via email is possible
        this.socialSharing
          .shareViaInstagram(
            'Hey ! Look at the new dress I just bought from Shoppr app. Find more such apps at ',
            'www/' + img
          )
          .then(() => {
            // Success!
          })
          .catch(() => {
            // Error!
            this.createAlert(
              'Error sharing product via Instagram. Please check if you have Instagram app on the device'
            );
          });
      })
      .catch(() => {
        // Sharing via email is not possible
        this.createAlert(
          'Could not find Instagram app on the device. Please install Instagram and try again.'
        );
      });
  }

  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'App not found',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  shareCommon(img) {
    console.log(img);
    this.socialSharing
      .share(
        'Hey ! Look at the new dress I just bought from Shoppr app. Find more such apps at ',
        'Enappd store - Shoppr app',
        'www/' + img,
        'enappd.com'
      )
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }
  array(i) {
    const l = [];
    for (let j = 0; j < i; j++) { l.push(1); }
    return l;
  }

}
