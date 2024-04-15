import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientUrl: string;

  constructor(private httpClient: HttpClient) {
    this.patientUrl = "http://localhost:8080/patients";
   }

  public findAll(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(this.patientUrl);
  }

  public save(patient: Patient){
    return this.httpClient.post<Patient>(this.patientUrl, patient);
  }
}
