import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsPage } from './teams.page';

describe('TeamsPage', () => {
  let component: TeamsPage;
  let fixture: ComponentFixture<TeamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
