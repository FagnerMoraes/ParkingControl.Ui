import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ParkingSpotsRoutingModule } from './parking-spots-routing.module';
import { ParkingSpotsComponent } from './containers/parking-spots/parking-spots.component';
import { ParkingSpotFormComponent } from './containers/parking-spot-form/parking-spot-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ParkingSpotListComponent } from './components/parking-spot-list/parking-spot-list.component';





@NgModule({
  declarations: [
    ParkingSpotsComponent,
    ParkingSpotFormComponent,
    ParkingSpotListComponent
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
