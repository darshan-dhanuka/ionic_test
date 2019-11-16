import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStructrePage } from './league-structre.page';

describe('LeagueStructrePage', () => {
  let component: LeagueStructrePage;
  let fixture: ComponentFixture<LeagueStructrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueStructrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStructrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
