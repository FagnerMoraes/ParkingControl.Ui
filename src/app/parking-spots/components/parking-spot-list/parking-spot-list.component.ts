import { ParkingSpotRequest } from './../../models/parking-spot-request';
import { ParkingSpotResponse } from '../../models/parking-spot-response';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parking-spot-list',
  templateUrl: './parking-spot-list.component.html',
  styleUrls: ['./parking-spot-list.component.scss']
})
export class ParkingSpotListComponent implements OnInit {

  @Input() parkingSpots: ParkingSpotResponse[] = [];
  @Output() finish  =  new EventEmitter(false);

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
