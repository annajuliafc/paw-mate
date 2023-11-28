import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor() {}

  petRegister(pet: Pet, tutorId: number): Observable<string> {
    return new Observable((observer) => {
      observer.next('Pet cadastrado com sucesso!');
      // Pra testar erro emita esse error
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }

  duplicateNameVerify(petName: string, tutorId: number): Observable<boolean> {
    return new Observable((observer) => {
      observer.next(false);
      // observer.error('Ocorreu um erro');
      observer.complete();
    });
  }
}
