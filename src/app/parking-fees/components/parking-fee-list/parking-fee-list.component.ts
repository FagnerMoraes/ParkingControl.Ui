import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParkingFeeRequest } from '../../models/parking-fee-request';

import { ParkingFeeResponse } from './../../models/parking-fee-response';

@Component({
  selector: 'app-parking-fee-list',
  templateUrl: './parking-fee-list.component.html',
  styleUrls: ['./parking-fee-list.component.scss']
})
export class ParkingFeeListComponent implements OnInit {

  @Input() parkingFees: ParkingFeeResponse[] = [];
  @Output() edit = new EventEmitter(false);


  readonly displayedColumns: string[] =[
    'initialValidityDate',
    'finalValidityDate',
    'fullHourPrice',
    'aditionalHourPrice',
    'actions'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(updateParkingFeeResquest: ParkingFeeRequest) {
      const parkingFeeEdited = updateParkingFeeResquest;
      //parkingFeeEdited.initialValidityDate = new Date(updateParkingFeeResquest.initialValidityDate.concat("00:00")).toString();
      console.log(updateParkingFeeResquest);
      console.log(parkingFeeEdited);

    this.edit.emit(updateParkingFeeResquest);
  }

}
