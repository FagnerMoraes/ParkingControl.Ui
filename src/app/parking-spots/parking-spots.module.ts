import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ParkingSpotDetailsComponent } from './components/parking-spot-details/parking-spot-details.component';
import { ParkingSpotListComponent } from './components/parking-spot-list/parking-spot-list.component';
import { ParkingSpotFormComponent } from './containers/parking-spot-form/parking-spot-form.component';
import { ParkingSpotsComponent } from './containers/parking-spots/parking-spots.component';
import { ParkingSpotsRoutingModule } from './parking-spots-routing.module';


@NgModule({
  declarations: [
    ParkingSpotsComponent,
    ParkingSpotFormComponent,
    ParkingSpotListComponent,
    ParkingSpotDetailsComponent
  ],
  imports: [
    CommonModule,
    ParkingSpotsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class ParkingSpotsModule { }
