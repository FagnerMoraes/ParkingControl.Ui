import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'parking-spot' },
  {
    path: 'parking-spot',
    loadChildren: () => import('./parking-spots/parking-spots.module').then(m => m.ParkingSpotsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
