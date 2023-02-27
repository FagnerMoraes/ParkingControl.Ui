import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'parking-spot' },
  {
    path: 'parking-spot',
    loadChildren: () => import('./parking-spots/parking-spots.module').then(m => m.ParkingSpotsModule)

  },
  {
    path: 'parking-fee',
    loadChildren: () => import('./parking-fees/parking-fees.module').then(m => m.ParkingFeesModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
