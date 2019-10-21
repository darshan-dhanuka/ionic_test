/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentPage } from './content.page';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';


@NgModule({
  imports: [
    IonicModule,
    ContentLoaderModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContentPage }])
  ],
  declarations: [ContentPage]
})
export class ContentPageModule { }
