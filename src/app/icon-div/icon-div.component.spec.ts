import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDivComponent } from './icon-div.component';

describe('IconDivComponent', () => {
  let component: IconDivComponent;
  let fixture: ComponentFixture<IconDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
