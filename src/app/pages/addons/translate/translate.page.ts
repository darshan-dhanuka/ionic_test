
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: 'translate.page.html',
  styleUrls: ['translate.page.scss']
})
export class TranslatePage {
  public segmentTab = 'translation';
  public title: string;
  public title_2: string;
  public description: string;
  public name: string;
  public language: string;
  constructor( private _translate: TranslateService) {

  }

  ionViewDidEnter(): void {
    console.log('challa?')
    this._initTranslate()
  }

  _initialiseTranslation(): void {
    this._translate.get('TITLE').subscribe((res: string) => {
      console.log(res);
      this.title = res;
    });
    this._translate.get('description').subscribe((res: string) => {
      console.log(res);
      this.description = res;
    });
    this._translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
      console.log(res);
      this.title_2 = res;
    });
    this._translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      console.log(res);
      this.name = res;
    });

  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  _translateLanguage(): void {
    console.log('language', this.language)
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');

    if (this._translate.getBrowserLang() !== undefined) {
      this.language = this._translate.getBrowserLang();
      console.log('browser language is', this._translate.getBrowserLang());
    } else {
      // Set your language here
      this.language = 'en';
    }

    this._translateLanguage();
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
