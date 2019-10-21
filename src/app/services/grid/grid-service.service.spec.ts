/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { TestBed } from '@angular/core/testing';

import { GridServiceService } from './grid-service.service';

describe('GridServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridServiceService = TestBed.get(GridServiceService);
    expect(service).toBeTruthy();
  });
});
