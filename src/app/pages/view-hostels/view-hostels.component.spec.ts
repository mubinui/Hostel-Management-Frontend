import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostelsComponent } from './view-hostels.component';

describe('ViewHostelsComponent', () => {
  let component: ViewHostelsComponent;
  let fixture: ComponentFixture<ViewHostelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHostelsComponent]
    });
    fixture = TestBed.createComponent(ViewHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
