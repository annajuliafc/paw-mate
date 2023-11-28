import { Injectable } from '@angular/core';
import { Tutor } from '../Tutor';
import { Observable } from 'rxjs';
import { tutorDetailsMockData } from '../TutorDetailsMock';

@Injectable({
  providedIn: 'root',
})
export class TutorsService {
  constructor() {}

  tutorSearch(tutorId: number): Observable<Tutor> {
    return new Observable(observer => {
      observer.next(tutorDetailsMockData);
      // Pra testar erro emita esse error
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }

  tutorRegister(tutor: Tutor): Observable<Tutor> {
    return new Observable(observer => {
      observer.next(tutorDetailsMockData);
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }

  duplicateNameVerify(tutorName: string): Observable<boolean> {
    return new Observable(observer => {
      observer.next(false);
      // Pra testar erro emita esse error
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }
}
