import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { States } from 'src/app/shared/utils/States';

// CPF/CNPJ Validators
import { cpf } from 'cpf-cnpj-validator';

// Custom date format
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class TutorRegisterComponent implements OnInit {
  tutorForm!: FormGroup;
  states: any[] = States.statesList;

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.tutorFormInit();
  }

  tutorFormInit() {
    this.tutorForm = this.formBuilder.group({
      tutorId: [''],
      name: ['', [Validators.required, Validators.minLength(4)]],
      surname: [''],
      document: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  formatCpf() {
    console.log(this.tutorForm.get('document')?.errors);
    if (this.tutorForm.controls['document'].valid) {
      let formattedCpf: string;
      formattedCpf = cpf.format(this.tutorForm.controls['document'].value);
      this.tutorForm.controls['document'].setValue(formattedCpf);
    }
  }

  tutorResgiterSubmit() {
    if (this.tutorForm.invalid) {
      this._snackBar.open(
        'Verifique os dados inseridos e tente novamente!',
        'X',
        {
          duration: 3000,
          panelClass: ['warning-snackbar'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        }
      );
    } else {
      this._snackBar.open('Tutor Cadastrado com sucesso', 'X', {
        duration: 3000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      console.log(this.tutorForm);
    }
  }
}
