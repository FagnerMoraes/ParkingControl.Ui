import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotListComponent } from './parking-spot-list.component';

describe('ParkingSpotListComponent', () => {
  let component: ParkingSpotListComponent;
  let fixture: ComponentFixture<ParkingSpotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
