import { ParkingFeeRequest } from './../models/parking-fee-request';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParkingFeeResponse } from '../models/parking-fee-response';

@Injectable({
  providedIn: 'root'
})
export class ParkingFeeService {

  private controller = "ParkingFee";
  private readonly API = `${environment.apiUrl}/${this.controller}` ;

  constructor(private httpClient: HttpClient) { }

list(){
  return this.httpClient.get<ParkingFeeResponse[]>(this.API)
  .pipe(
    first()
  );
}
GetById(id:string){
  console.log(id);
  return this.httpClient.get<ParkingFeeRequest>(`${this.API}/${id}`);
}

save(record: Partial<ParkingFeeRequest>){
  return  this.httpClient.post<ParkingFeeResponse>(this.API,record).pipe(first());
}

}
