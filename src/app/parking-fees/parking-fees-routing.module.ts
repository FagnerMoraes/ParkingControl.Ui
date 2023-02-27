import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingFeeFormComponent } from './containers/parking-fee-form/parking-fee-form.component';
import { ParkingFeesComponent } from './containers/parking-fees/parking-fees.component';

const routes: Routes = [
  {path: '', component: ParkingFeesComponent},
  {path: 'new', component: ParkingFeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingFeesRoutingModule { }
