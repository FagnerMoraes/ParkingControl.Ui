import { Component, Input, OnInit } from '@angular/core';

import { ParkingFeeResponse } from './../../models/parking-fee-response';

@Component({
  selector: 'app-parking-fee-list',
  templateUrl: './parking-fee-list.component.html',
  styleUrls: ['./parking-fee-list.component.scss']
})
export class ParkingFeeListComponent implements OnInit {

  @Input() parkingFees: ParkingFeeResponse[] = [];

  readonly displayedColumns: string[] =[
    'initialValidityDate',
    'finalValidityDate',
    'fullHourPrice',
    'aditionalHourPrice'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.parkingFees)
  }

}
