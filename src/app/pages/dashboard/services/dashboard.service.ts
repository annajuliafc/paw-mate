import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { petsMockData, tutorsMockData } from './dashboardDataMock';
import { Tutor } from '../../tutors/Tutor';
import { Pet } from '../../pets/Pet';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor() {}

  getTutorsData(): Observable<Tutor[]> {
    return new Observable((observer) => {
      observer.next(tutorsMockData);
      // Pra testar erro emita esse error
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }

  getPetsData(): Observable<Pet[]> {
    return new Observable((observer) => {
      observer.next(petsMockData);
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }
}
