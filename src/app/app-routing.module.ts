/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsService } from './guards/guards.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'walkthrough', loadChildren: './pages/walkthrough/slides.module#SlidesPageModule'},
  { path: 'home1', loadChildren: './pages/firebase/firebase-home/home.module#HomePageModule' , canActivate: [GuardsService] },
  { path: 'signup', loadChildren: './pages/firebase/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/firebase/login/login.module#LoginPageModule' },
  { path: 'image-upload', loadChildren: './pages/firebase/image-upload/image-upload.module#ImageUploadPageModule' },
  { path: 'insta-tabs', loadChildren: './pages/layouts/insta-tabs/tabs.module#TabsPageModule' },
  { path: 'instaprofile', loadChildren: './pages/layouts/instaprofile/instaprofile.module#InstaprofilePageModule' },
  { path: 'uber-map-flow', loadChildren: './pages/layouts/uber-map-flow/uber-map-flow.module#UberMapFlowModule' },
  { path: 'elegance', loadChildren: './pages/chat/elegance/elegance.module#ElegancePageModule' },
  { path: 'pastry', loadChildren: './pages/chat/pastry/pastry.module#PastryPageModule' },
  { path: 'artboard', loadChildren: './pages/chat/artboard/artboard.module#ArtboardPageModule' },
  { path: 'whatsapp', loadChildren: './pages/layouts/whatsapp/whatsapp.module#WhatsAppPageModule' },
  { path: 'rose-list', loadChildren: './pages/chat/rose-list/rose-list.module#RoseListPageModule' },
  { path: 'fluid', loadChildren: './pages/chat/fluid/fluid.module#FluidPageModule' },
  { path: 'business', loadChildren: './pages/chat/business/business.module#BusinessPageModule' },
  { path: 'bubble', loadChildren: './pages/chat/bubble/bubble.module#BubblePageModule' },
  { path: 'rose', loadChildren: './pages/chat/rose/rose.module#RosePageModule' },
  { path: 'blocks', loadChildren: './pages/chat/blocks/blocks.module#BlocksPageModule' },
  { path: 'breeze', loadChildren: './pages/chat/breeze/breeze.module#BreezePageModule' },
  { path: 'classic', loadChildren: './pages/chat/classic/classic.module#ClassicPageModule' },
  { path: 'minimal', loadChildren: './pages/chat/minimal/minimal.module#MinimalPageModule' },
  { path: 'starbucks', loadChildren: './pages/chat/starbucks/starbucks.module#StarbucksPageModule' },
  { path: 'tinder-cards', loadChildren: './pages/layouts/tinder/home/home.module#HomePageModule' },
  { path: 'shop-grid', loadChildren: './pages/grid/grid1/grid1.module#Grid1PageModule' },
  { path: 'square-grid', loadChildren: './pages/grid/grid2/grid2.module#Grid2PageModule' },
  { path: 'full-grid', loadChildren: './pages/grid/grid3/grid3.module#Grid3PageModule' },
  { path: 'expandable-list', loadChildren: './pages/grid/grid4/grid4.module#Grid4PageModule' },
  { path: 'masonry-grid', loadChildren: './pages/grid/grid5/grid5.module#Grid5PageModule' },
  { path: 'grid-x3', loadChildren: './pages/grid/grid6/grid6.module#Grid6PageModule' },
  { path: 'grid-x2', loadChildren: './pages/grid/grid7/grid7.module#Grid7PageModule' },
  { path: 'register-1', loadChildren: './pages/loginSignups/register-1/register.module#RegisterPageModule' },
  { path: 'card-slider', loadChildren: './pages/card/card1/card1.module#Card1PageModule' },
  { path: 'product-card', loadChildren: './pages/card/card2/card2.module#Card2PageModule' },
  { path: 'large-card', loadChildren: './pages/card/card3/card3.module#Card3PageModule' },
  { path: 'event-card', loadChildren: './pages/card/card4/card4.module#Card4PageModule' },
  { path: 'movie-ticket', loadChildren: './pages/card/card5/card5.module#Card5PageModule' },
  { path: 'sliders', loadChildren: './pages/card/card6/card6.module#Card6PageModule' },
  { path: 'filtering-list', loadChildren: './pages/card/card7/card7.module#Card7PageModule' },
  { path: 'slider1', loadChildren: './pages/slider/slider1/slider1.module#Slider1PageModule' },
  { path: 'card8', loadChildren: './pages/card/card8/card8.module#Card8PageModule' },
  { path: 'login-1', loadChildren: './pages/loginSignups/login-1/login.module#LoginPageModule' },
  { path: 'login-2', loadChildren: './pages/loginSignups/login-2/login.module#LoginPageModule' },
  { path: 'login-3', loadChildren: './pages/loginSignups/login-3/login.module#LoginPageModule' },
  { path: 'youtube-home-playlist', loadChildren: './pages/video-playlists/grid/grid.module#GridPageModule' },
  { path: 'grid-youtube-playlist', loadChildren: './pages/video-playlists/playlist/playlist.module#PlaylistPageModule' },
  { path: 'video-large-card', loadChildren: './pages/video-playlists/largecard/largecard.module#LargecardPageModule' },
  { path: 'view-video', loadChildren: './pages/video-playlists/view-video/view-video.module#ViewVideoPageModule' },
  { path: 'profile1', loadChildren: './pages/profile/profile1/profile1.module#Profile1PageModule' },
  { path: 'netflix', loadChildren: './pages/layouts/netflix/netflix.module#NetflixPageModule' },
  { path: 'translate', loadChildren: './pages/addons/translate/translate.module#TranslatePageModule' },
  { path: 'customfonts', loadChildren: './pages/addons/customfonts/customfonts.module#CustomfontsPageModule' },
  { path: 'blogs', loadChildren: './pages/wordpress/blogs/blogs.module#BlogsPageModule' },
  { path: 'blogpage', loadChildren: './pages/wordpress/blogpage/blogpage.module#BlogpagePageModule' },
  { path: 'blogs/:id', loadChildren: './pages/wordpress/blogpage/blogpage.module#BlogpagePageModule' },
  { path: 'content-loader', loadChildren: './pages/addons/contentLoader/content.module#ContentPageModule' },
  { path: 'content-loader2', loadChildren: './pages/addons/content-loader2/content-loader2.module#ContentLoader2PageModule' },
  { path: 'settings', loadChildren: './pages/addons/settings/settings.module#SettingsPageModule' },
  { path: 'datetimepickers', loadChildren: './pages/addons/datetimepickers/datetimepickers.module#DatetimepickersPageModule' },
  { path: 'reorder', loadChildren: './pages/addons/reorder/reorder.module#ReorderPageModule' },
  { path: 'refresh', loadChildren: './pages/addons/refresh/refresh.module#RefreshPageModule' },
  { path: 'infinite', loadChildren: './pages/addons/infinite/infinite.module#InfinitePageModule' },
  { path: 'sweet-alert', loadChildren: './pages/addons3/sweet-alert/sweet-alert.module#SweetAlertPageModule' },
  { path: 'google-places', loadChildren: './pages/addons3/google-places/google-places.module#GooglePlacesPageModule' },
  { path: 'social-share', loadChildren: './pages/addons3/social-share/social-share.module#SocialSharePageModule' },
  { path: 'in-app-browser', loadChildren: './pages/addons3/in-app-browser/in-app-browser.module#InAppBrowserPageModule' },
  { path: 'bar-code', loadChildren: './pages/addons3/bar-code/bar-code.module#BarCodePageModule' },
  { path: 'google-autocomplete', loadChildren: './pages/addons3/google-autocomplete/google-autocomplete.module#GoogleAutocompletePageModule' },
  { path: 'map-direction', loadChildren: './pages/addons3/map-direction/map-direction.module#MapDirectionPageModule' },
  { path: 'phaser', loadChildren: './pages/phaser/phaser.module#PhaserPageModule' },
  { path: 'admob', loadChildren: './pages/addons/admob/admob.module#AdmobPageModule' },
  { path: 'cropper', loadChildren: './pages/addons/cropper/cropper.module#CropperPageModule' },
  { path: 'woocommerce-products', loadChildren: './pages/woocommerce/woocommerce-products/woocommerce-products.module#WoocommerceProductsPageModule' },
  { path: 'product-details', loadChildren: './pages/woocommerce/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'cart', loadChildren: './pages/woocommerce/cart/cart.module#CartPageModule' },
  { path: 'orders', loadChildren: './pages/woocommerce/orders/orders.module#OrdersPageModule' },
  { path: 'orderinfo', loadChildren: './pages/woocommerce/orderinfo/orderinfo.module#OrderinfoPageModule' },
  { path: 'checkout', loadChildren: './pages/woocommerce/checkout/checkout.module#CheckoutPageModule' },
  { path: 'stripepayment', loadChildren: './pages/paymentGateways/stripepayment/stripepayment.module#StripepaymentPageModule' },
  { path: 'paypalpayment', loadChildren: './pages/paymentGateways/paypalpayment/paypalpayment.module#PaypalpaymentPageModule' },
  { path: 'applepay', loadChildren: './pages/paymentGateways/applepay/applepay.module#ApplepayPageModule' },
  { path: 'stripe-web', loadChildren: './pages/paymentGateways/stripe-web/stripe-web.module#StripeWebPageModule' },
  { path: 'paypal-web', loadChildren: './pages/paymentGateways/paypal-web/paypal-web.module#PaypalWebPageModule' },
  

  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'learn', loadChildren: './pages/learn/learn.module#LearnPageModule' },











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
