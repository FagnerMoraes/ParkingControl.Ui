import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParkingSpotService } from '../../services/parking-spot.service';

@Component({
  selector: 'app-parking-spot-form',
  templateUrl: './parking-spot-form.component.html',
  styleUrls: ['./parking-spot-form.component.scss']
})
export class ParkingSpotFormComponent implements OnInit {

  form = this.formBuilder.group({
    licensePlate: ['']
  }
  );

  constructor(private formBuilder: NonNullableFormBuilder,
              private snackBar: MatSnackBar,
              private location: Location,
              private service: ParkingSpotService) {
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe( result => this.onSuccess() ,
    error => this.onError() );
  }
  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Sucesso ao estacionar','',{duration:2000});
    this.onCancel();
  }
  private onError(){
    this.snackBar.open('Erro ao tentar salvar','',{duration:2000});
  }

}
