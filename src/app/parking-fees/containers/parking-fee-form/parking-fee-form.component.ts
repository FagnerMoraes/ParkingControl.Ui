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

  public getErrorMessage(licensePlate: string){
    const field = this.form.get(licensePlate);

    if(field?.hasError('required')){
      return 'Campo obrigatorio';
    }

    if(field?.hasError('pattern')){
      return 'O Campo só pode possuir letras e numeros';
    }
    if(field?.hasError('minlength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho minimo precisa ser de ${requiredLength} caracteres`;
    }
    if(field?.hasError('maxlength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo precisa ser de ${requiredLength} caracteres`;
    }
    return 'Campo inválido';
  }

}
