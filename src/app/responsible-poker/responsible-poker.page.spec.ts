import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblePokerPage } from './responsible-poker.page';

describe('ResponsiblePokerPage', () => {
  let component: ResponsiblePokerPage;
  let fixture: ComponentFixture<ResponsiblePokerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiblePokerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiblePokerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
