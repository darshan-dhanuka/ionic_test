/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TindericonsComponent } from './tindericons.component';

describe('TindericonsComponent', () => {
  let component: TindericonsComponent;
  let fixture: ComponentFixture<TindericonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindericonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindericonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
