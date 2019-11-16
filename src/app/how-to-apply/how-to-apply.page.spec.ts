import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToApplyPage } from './how-to-apply.page';

describe('HowToApplyPage', () => {
  let component: HowToApplyPage;
  let fixture: ComponentFixture<HowToApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToApplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
