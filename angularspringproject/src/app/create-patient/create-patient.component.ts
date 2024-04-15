import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

  patient: Patient;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: PatientService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.userService.save(this.patient).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/patients']);
  }
}
