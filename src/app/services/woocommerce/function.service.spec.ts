import { TestBed } from '@angular/core/testing';

import { FunctionService } from './function.service';

describe('FunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionService = TestBed.get(FunctionService);
    expect(service).toBeTruthy();
  });
});
