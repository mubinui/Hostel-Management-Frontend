import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHostelsComponent } from './update-hostels.component';

describe('UpdateHostelsComponent', () => {
  let component: UpdateHostelsComponent;
  let fixture: ComponentFixture<UpdateHostelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHostelsComponent]
    });
    fixture = TestBed.createComponent(UpdateHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
