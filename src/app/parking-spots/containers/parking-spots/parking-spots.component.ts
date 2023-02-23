import { ParkingSpotRequest } from './../../models/parking-spot-request';
import { ParkingSpotService } from '../../services/parking-spot.service';
import { ParkingSpotResponse } from '../../models/parking-spot-response';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parking-spots',
  templateUrl: './parking-spots.component.html',
  styleUrls: ['./parking-spots.component.scss']
})
export class ParkingSpotsComponent implements OnInit {

  parkingSpots$: Observable<ParkingSpotResponse[]>;

  constructor(
    private parkingSpotService: ParkingSpotService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
    this.parkingSpots$ = this.parkingSpotService.list();
   }

  ngOnInit(): void {
  }
  refresh(){
    this.parkingSpots$ = this.parkingSpotService.list()
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onFinish(parkingSpot: ParkingSpotRequest){
    this.parkingSpotService.finish(parkingSpot.licensePlate).subscribe(() =>{
      this.snackBar.open('Estadia Finalizada','',{duration:5000,
      verticalPosition: 'top',
    horizontalPosition: 'center'
  });
  this.refresh();
    })
  }

}
