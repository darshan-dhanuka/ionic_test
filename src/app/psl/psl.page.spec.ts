import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PslPage } from './psl.page';

describe('PslPage', () => {
  let component: PslPage;
  let fixture: ComponentFixture<PslPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PslPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
