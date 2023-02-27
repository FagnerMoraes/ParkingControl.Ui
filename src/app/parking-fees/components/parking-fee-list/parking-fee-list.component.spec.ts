import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFeeListComponent } from './parking-fee-list.component';

describe('ParkingFeeListComponent', () => {
  let component: ParkingFeeListComponent;
  let fixture: ComponentFixture<ParkingFeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingFeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingFeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
