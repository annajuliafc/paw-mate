import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VaccineRegisterDialogComponent } from './vaccine-register-dialog/vaccine-register-dialog.component';
import { Vaccine } from './Vaccine';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss'],
})
export class VaccinesComponent implements OnInit {
  @Output() vaccineSubmit = new EventEmitter<Vaccine[]>();
  
  addVaccines: boolean = false;

  displayedColumns: string[] = ['dateOfVacination', 'type'];
  vaccines: MatTableDataSource<Vaccine> = new MatTableDataSource<Vaccine>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.vaccines.paginator = this.paginator;
    this.vaccines.sort = this.sort;
  }

  resetVaccines() {
    this.vaccines.data = [];
    this.vaccines.paginator = this.paginator;
    this.vaccines.sort = this.sort;
    this.addVaccines = false;
  }

  openVaccineRegisterDialog() {
    const dialogRef = this.dialog.open(VaccineRegisterDialogComponent);

    dialogRef.afterClosed().subscribe((vaccine: Vaccine) => {
      if (vaccine) {
        this.vaccines = new MatTableDataSource([...this.vaccines.data, vaccine]);
        this.vaccines.paginator = this.paginator;
        this.vaccines.sort = this.sort;
        this.vaccineSubmit.emit(this.vaccines.data);
      }
    });
  }
}
