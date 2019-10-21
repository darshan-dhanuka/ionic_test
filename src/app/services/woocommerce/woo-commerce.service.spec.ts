import { TestBed } from '@angular/core/testing';

import { WooCommerceService } from './woo-commerce.service';

describe('WooCommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WooCommerceService = TestBed.get(WooCommerceService);
    expect(service).toBeTruthy();
  });
});
