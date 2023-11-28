import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { PetsService } from '../services/pets.service';
import { Vaccine } from '../vaccines/Vaccine';
import { VaccinesComponent } from '../vaccines/vaccines.component';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.scss'],
})
export class PetRegisterComponent implements OnInit {
  tutorId!: number;
  petForm!: FormGroup;

  checkName: boolean = false;
  duplicateName: boolean = false;
  registerNewPet: boolean = false;

  @ViewChild(VaccinesComponent) vaccinesComponent!: VaccinesComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public _router: Router,
    public alertService: AlertService,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.tutorId = Number(params.get('tutorId'));
    });
    this.petFormInit();
  }

  petFormInit() {
    this.petForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      birthDate: [''],
      breed: [''],
      color: [''],
      weight: [''],
      vaccines: [],
    });
  }

  vaccinesAdd(event: Vaccine[]) {
    this.petForm.get('vaccines')?.patchValue(event);
  }

  registerAnotherPet() {
    this.registerNewPet = true;
    this.petResgiterSubmit();
  }

  petResgiterSubmit() {
    if (this.petForm.invalid) {
      this.alertService.openRegisterWarningAlert();
    } else if (
      this.vaccinesComponent.addVaccines &&
      !this.petForm.get('vaccines')?.value
    ) {
      this.alertService.openAlert(
        'Vaccina invalida, verifique os dados e tente novamente',
        'X',
        'warning'
      );
      this.registerNewPet = false;
    } else {
      this.petsService.petRegister(this.petForm.value, this.tutorId).subscribe({
        next: (response) => {
          this.alertService.openRegisterSuccessAlert();
          if (!this.registerNewPet) {
            this._router.navigate([`tutors`, this.tutorId]);
          } else {
            this.petForm.reset();
            this.vaccinesComponent.resetVaccines();
            this.registerNewPet = false;
          }
        },
        error: (error) => {
          this.alertService.openBackendErrorAlert();
          this.registerNewPet = false;
        },
      });
    }
  }

  checkDuplicateName() {
    if (this.petForm.get('name')?.valid) {
      this.checkName = true;
      this.petsService
        .duplicateNameVerify(this.petForm.get('name')?.value, this.tutorId)
        .subscribe({
          next: (response) => {
            if (response) {
              this.duplicateName = true;
            }
          },
          error: (error) => {
            this.alertService.openBackendErrorAlert();
            this.checkName = false;
          },
          complete: () => {
            this.checkName = false;
          },
        });
    }
  }
}
