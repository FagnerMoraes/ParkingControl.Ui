import { ParkingFeeService } from './parking-fee.service';
import { TestBed } from '@angular/core/testing';


describe('ParkingFeeService', () => {
  let service: ParkingFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
