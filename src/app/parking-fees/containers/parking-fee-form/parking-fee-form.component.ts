import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParkingFeeService } from '../../services/parking-fee.service';


@Component({
  selector: 'app-parking-fee-form',
  templateUrl: './parking-fee-form.component.html',
  styleUrls: ['./parking-fee-form.component.scss']
})
export class ParkingFeeFormComponent implements OnInit {

  form = this.formBuilder.group({
    initialValidityDate: ['',Validators.required],
    finalValidityDate: ['',Validators.required],
    fullHourPrice: [0, Validators.required],
    aditionalHourPrice: [0, Validators.required]
  }
  );

  constructor(private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private service: ParkingFeeService) { }

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
    this.snackBar.open('Sucesso ao salvar taxa','',{
      duration:5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    this.onCancel();
  }
  private onError(){
    this.snackBar.open('Erro ao tentar salvar','',{
      duration:5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  public getErrorMessageFullHourPrice(fullHourPrice: string){
    const field = this.form.get(fullHourPrice);
    if(field?.hasError('required')){
      return 'Campo obrigatorio';
    }

    return 'Campo inválido';
  }

  public getErrorMessageAdtionalHourPrice(aditionalHourPrice: string){
    const field = this.form.get(aditionalHourPrice);
    if(field?.hasError('required')){
      return 'Campo obrigatorio';
    }

    return 'Campo inválido';

  }

  public getErrorMessageinitialValidityDate(initialValidityDate: string){
    const field = this.form.get(initialValidityDate);

    if(field?.hasError('required')){
      return 'Campo obrigatorio';
    }

    return 'Campo inválido';
  }

  public getErrorMessagefinalValidityDate(finalValidityDate: string){
    const field = this.form.get(finalValidityDate);

    if(field?.hasError('required')){
      return 'Campo obrigatorio';
    }

    return 'Campo inválido';
  }

}
