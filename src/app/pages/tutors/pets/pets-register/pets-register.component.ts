import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { VaccinesService } from '../vaccines/vaccines.service';
import { Vaccine, VaccineColumns } from '../vaccines/Vaccine';

@Component({
  selector: 'app-pets-register',
  templateUrl: './pets-register.component.html',
  styleUrls: ['./pets-register.component.scss']
})
export class PetsRegisterComponent implements OnInit {
  petForm!: FormGroup;
  
  displayedColumns: string[] = VaccineColumns.map((col) => col.key);
  columnsSchema: any = VaccineColumns;
  vaccines = new MatTableDataSource<Vaccine>();
  valid: any = {};

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private vaccinesService: VaccinesService
  ) {}

  ngOnInit() {
    this.petFormInit();
    this.vaccines.data = this.vaccinesService.getVaccines();
  }

  petFormInit() {
    this.petForm = this.formBuilder.group({
      petId: [''],
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      breed: ['', [Validators.required]],
      color: ['', [Validators.required]],
      weight: ['', [Validators.required]],
    });
  }

  petResgiterSubmit() {
    if (this.petForm.invalid) {
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
      this._snackBar.open('Pet Cadastrado com sucesso', 'X', {
        duration: 3000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      console.log(this.petForm);
    }
  }

  editRow(row: Vaccine) {
    if (row.id === 0) {
      this.vaccinesService.addVaccine(row).subscribe((newVaccine: Vaccine) => {
        row.id = newVaccine.id;
        row.isEdit = false;
      });
    } else {
      this.vaccinesService
        .updateVaccine(row)
        .subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: Vaccine = {
      id: 0,
      type: '',
      date: '',
      isEdit: true,
    };
    this.vaccines.data = [newRow, ...this.vaccines.data];
  }

  removeRow(id: number) {
    this.vaccinesService.deleteVaccine(id).subscribe(() => {
      this.vaccines.data = this.vaccines.data.filter(
        (u: Vaccine) => u.id !== id
      );
    });
  }

  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }
}
