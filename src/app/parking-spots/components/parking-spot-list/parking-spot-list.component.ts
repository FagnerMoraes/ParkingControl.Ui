import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ParkingSpotResponse } from '../../models/parking-spot-response';
import { ParkingSpotRequest } from './../../models/parking-spot-request';

@Component({
  selector: 'app-parking-spot-list',
  templateUrl: './parking-spot-list.component.html',
  styleUrls: ['./parking-spot-list.component.scss']
})
export class ParkingSpotListComponent implements OnInit {

  @Input() parkingSpots: ParkingSpotResponse[] = [];
  @Output() finish  =  new EventEmitter(false);
  @Output() detail = new EventEmitter(false);

  readonly displayedColumns: string[] = ['licensePlate',
  'carEntryDate',
  'carEntryTime',
  'carLeaveDate',
  'carLeaveTime',
  'parkingSpotStatus',
  'priceOfParking',
  'timeOfParking',
  'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onFinish(parkingsSpot: ParkingSpotRequest){
    this.finish.emit(parkingsSpot);
  }

}
