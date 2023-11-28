import { AlertService } from 'src/app/core/services/alert.service';
import { TutorsService } from './../services/tutors.service';
import { Component, OnInit } from '@angular/core';
import { Tutor } from '../Tutor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.scss'],
})
export class TutorDetailsComponent implements OnInit {
  tutorId!: number;
  petId!: number;

  tutor!: Tutor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorsService: TutorsService,
    private alertService: AlertService,
    public _router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.tutorId = Number(params.get('tutorId'));
      this.petId = Number(params.get('petId'));
    });
    this.getTutor();
  }

  getTutor() {
    this.tutorsService.tutorSearch(this.tutorId).subscribe({
      next: (response) => {
        this.tutor = response;
      },
      error: (error) => {
        this.alertService.openBackendErrorAlert();
      },
    });
  }

  registerPet() {
    this._router.navigate([`pets/register`, this.tutorId]);
  }
}
