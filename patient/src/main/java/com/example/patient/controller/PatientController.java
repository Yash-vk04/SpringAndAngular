package com.example.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.patient.exception.ResourceNotFoundException;
import com.example.patient.entity.Patient;
import com.example.patient.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	// get all patients
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}		
	
	// create patient rest api
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}
	
}
