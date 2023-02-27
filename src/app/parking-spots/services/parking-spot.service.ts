import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ParkingSpotRequest } from '../models/parking-spot-request';
import { ParkingSpotResponse } from './../models/parking-spot-response';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  private controller = "ParkingSpot";
  private readonly API = `${environment.apiUrl}/${this.controller}` ;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ParkingSpotResponse[]>(this.API)
    .pipe(
      first()
    );
  }




  save(record: Partial<ParkingSpotRequest>){
    return  this.httpClient.post<ParkingSpotResponse>(`${this.API}/iniciar-estadia`,record).pipe(first());
  }

  finish(licensePlate: string){
    return this.httpClient.put(`${this.API}/${licensePlate}`,licensePlate)
  }
}
