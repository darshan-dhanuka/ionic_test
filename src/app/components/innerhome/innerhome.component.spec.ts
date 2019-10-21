import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerhomePage } from './innerhome.page';

describe('InnerhomePage', () => {
  let component: InnerhomePage;
  let fixture: ComponentFixture<InnerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
