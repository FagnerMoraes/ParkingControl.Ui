import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParkingSpotService } from '../../services/parking-spot.service';

@Component({
  selector: 'app-parking-spot-form',
  templateUrl: './parking-spot-form.component.html',
  styleUrls: ['./parking-spot-form.component.scss']
})
export class ParkingSpotFormComponent implements OnInit {

  form = this.formBuilder.group({
    licensePlate: ['',[ Validators.required,
                        Validators.minLength(7),
                        Validators.maxLength(8),
                        Validators.pattern('[a-zA-Z0-9]*')]]
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
    this.snackBar.open('Sucesso ao estacionar','',{
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
