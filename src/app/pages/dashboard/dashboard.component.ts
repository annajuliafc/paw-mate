import { AlertService } from 'src/app/core/services/alert.service';
import { DashboardService } from './services/dashboard.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tutor } from './../tutors/Tutor';
import { Pet } from '../pets/Pet';
import { forkJoin, map } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  tutorsTableDisplayedColumns: string[] = [
    'tutorId',
    'name',
    'nickName',
    'birthDate',
    'actions',
  ];
  tutors: MatTableDataSource<Tutor> = new MatTableDataSource<Tutor>();
  tutorsUnfilteredData!: Tutor[];
  @ViewChild('tutorsPaginator') tutorsPaginator!: MatPaginator;

  petsTableDisplayedColumns: string[] = [
    'tutorId',
    'tutorName',
    'petId',
    'name',
    'birthDate',
    'breed',
    'color',
    'weight',
    'actions',
  ];
  pets: MatTableDataSource<Pet> = new MatTableDataSource<Pet>();
  petsUnfilteredData!: Pet[];
  @ViewChild('petsPaginator') petsPaginator!: MatPaginator;

  sources = [
    this.dashboardService.getTutorsData(),
    this.dashboardService.getPetsData(),
  ];

  constructor(
    private dashboardService: DashboardService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.dataSearch();
  }

  ngAfterViewInit() {
    this.tutors.paginator = this.tutorsPaginator;
    this.pets.paginator = this.petsPaginator;
  }

  dataSearch() {
    forkJoin(this.sources)
      .pipe(
        map(([tutors, pets]) => ({
          tutors,
          pets,
        }))
      )
      .subscribe({
        next: (response) => {
          this.tutors = new MatTableDataSource(response.tutors as Tutor[]);
          this.pets = new MatTableDataSource(response.pets as Pet[]);
          this.tutorsUnfilteredData = response.tutors as Tutor[];
          this.petsUnfilteredData = response.pets as Pet[];
          this.tutors.paginator = this.tutorsPaginator;
          this.pets.paginator = this.petsPaginator;
        },
        error: (error) => {
          this.alertService.openBackendErrorAlert();
        },
      });
  }

  tutorsTableFilter(event: Event) {
    this.tutors.data = this.tutorsUnfilteredData;
    var filterValue = (event.target as HTMLInputElement).value.trim();

    this.tutors.filterPredicate = (data) => {
      return (
        data.name.toLowerCase().includes(filterValue) ||
        data.nickName.toLowerCase().includes(filterValue) ||
        data.tutorId.toString().includes(filterValue)
      );
    };
    this.tutors.filter = filterValue;

    this.tutors.data = this.tutors.filteredData;

    if (this.tutors.paginator) {
      this.tutors.paginator.firstPage();
    }
  }

  petsTableFilter(event: Event) {
    this.pets.data = this.petsUnfilteredData;
    var filterValue = (event.target as HTMLInputElement).value.trim();

    this.pets.filterPredicate = (data) => {
      return (
        data.name.toLowerCase().includes(filterValue) ||
        data.petId.toString().includes(filterValue)
      );
    };

    this.pets.filter = filterValue;

    this.pets.data = this.pets.filteredData;

    if (this.pets.paginator) {
      this.pets.paginator.firstPage();
    }
  }
}
