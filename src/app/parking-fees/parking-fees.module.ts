import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ParkingFeeListComponent } from './components/parking-fee-list/parking-fee-list.component';
import { ParkingFeeFormComponent } from './containers/parking-fee-form/parking-fee-form.component';
import { ParkingFeesComponent } from './containers/parking-fees/parking-fees.component';
import { ParkingFeesRoutingModule } from './parking-fees-routing.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';



@NgModule({
  declarations: [
    ParkingFeeListComponent,
    ParkingFeesComponent,
    ParkingFeeFormComponent
  ],
  imports: [
    CommonModule,
    ParkingFeesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class ParkingFeesModule { }
