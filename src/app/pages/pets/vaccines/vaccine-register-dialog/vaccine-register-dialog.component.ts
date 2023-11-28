import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PetVaccines } from 'src/app/shared/utils/PetVaccines';
import { Vaccine } from '../Vaccine';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateFormat } from 'src/app/shared/utils/DateFormat';

@Component({
  selector: 'app-vaccine-register-dialog',
  templateUrl: './vaccine-register-dialog.component.html',
  styleUrls: ['./vaccine-register-dialog.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat.data },
  ],
})
export class VaccineRegisterDialogComponent implements OnInit {

  vaccinesList: string[] = PetVaccines;
  
  vaccine: Vaccine = {
    type: '',
    dateOfVacination: null,
  };

  constructor(public dialogRef: MatDialogRef<VaccineRegisterDialogComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
