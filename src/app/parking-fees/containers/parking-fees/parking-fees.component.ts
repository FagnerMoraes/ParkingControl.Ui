import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ParkingFeeResponse } from './../../models/parking-fee-response';
import { ParkingFeeService } from './../../services/parking-fee.service';

@Component({
  selector: 'app-parking-fees',
  templateUrl: './parking-fees.component.html',
  styleUrls: ['./parking-fees.component.scss']
})
export class ParkingFeesComponent implements OnInit {

  parkingFees$: Observable<ParkingFeeResponse[]>;

  constructor(
    private parkingFeeService: ParkingFeeService,
    private router: Router,
    private route: ActivatedRoute) {
      this.parkingFees$ = this.parkingFeeService.list();
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
