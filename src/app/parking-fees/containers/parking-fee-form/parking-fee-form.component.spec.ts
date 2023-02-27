import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFeeFormComponent } from './parking-fee-form.component';

describe('ParkingFeeFormComponent', () => {
  let component: ParkingFeeFormComponent;
  let fixture: ComponentFixture<ParkingFeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingFeeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingFeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
