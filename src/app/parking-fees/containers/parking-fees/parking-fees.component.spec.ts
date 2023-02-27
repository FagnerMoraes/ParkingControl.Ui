import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFeesComponent } from './parking-fees.component';

describe('ParkingFeesComponent', () => {
  let component: ParkingFeesComponent;
  let fixture: ComponentFixture<ParkingFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
