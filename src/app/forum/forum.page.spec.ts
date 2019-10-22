import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPage } from './forum.page';

describe('ForumPage', () => {
  let component: ForumPage;
  let fixture: ComponentFixture<ForumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
