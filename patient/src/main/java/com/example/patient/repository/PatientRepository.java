package com.example.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.patient.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

}