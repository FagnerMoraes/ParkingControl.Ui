import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingSpotDetailsComponent } from './components/parking-spot-details/parking-spot-details.component';
import { ParkingSpotFormComponent } from './containers/parking-spot-form/parking-spot-form.component';
import { ParkingSpotsComponent } from './containers/parking-spots/parking-spots.component';

const routes: Routes = [
  {path: '', component: ParkingSpotsComponent},
  {path: 'new', component: ParkingSpotFormComponent},
  {path: 'detail/:licensePlate', component: ParkingSpotDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpotsRoutingModule { }
