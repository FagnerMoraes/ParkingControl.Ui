import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotFormComponent } from './parking-spot-form.component';

describe('ParkingSpotFormComponent', () => {
  let component: ParkingSpotFormComponent;
  let fixture: ComponentFixture<ParkingSpotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
