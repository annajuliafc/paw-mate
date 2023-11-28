import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/core/services/alert.service';
import { TutorsService } from '../services/tutors.service';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.scss'],
})
export class TutorRegisterComponent implements OnInit {
  tutorForm!: FormGroup;
  checkName: boolean = false;
  duplicateName: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public _router: Router,
    public alertService: AlertService,
    private tutorsService: TutorsService
  ) {}

  ngOnInit() {
    this.tutorFormInit();
  }

  tutorFormInit() {
    this.tutorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      nickName: [''],
      birthDate: [''],
    });
  }

  tutorResgiterSubmit() {
    if (this.tutorForm.invalid) {
      this.alertService.openRegisterWarningAlert();
    } else {
      this.tutorsService.tutorRegister(this.tutorForm.value).subscribe({
        next: (response) => {
          this.alertService.openRegisterSuccessAlert();
          this.openPetRegisterDialog(response.tutorId); 
        },
        error: (error) => {
          this.alertService.openBackendErrorAlert();
        }
      });
    }
  }

  checkDuplicateName() {
    if (this.tutorForm.get('name')?.valid) {
      this.checkName = true;
      this.tutorsService
      .duplicateNameVerify(this.tutorForm.get('name')?.value).subscribe({
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

  openPetRegisterDialog(tutorId: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        title: `Gostaria de cadastrar um pet pro tutor?`,
        message: ``,
        buttonConfirmText: 'Sim',
        buttonCancelText: 'Não',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._router.navigate([`pets/register`, tutorId]);
      } else {
        this._router.navigate([`tutors`, tutorId]);
      }
    });
  }
}
