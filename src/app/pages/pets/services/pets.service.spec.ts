import { TestBed } from '@angular/core/testing';
import { PetsService } from './pets.service';
import { Pet } from '../Pet';

describe('PetsService', () => {
  let service: PetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsService],
    });
    service = TestBed.inject(PetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return success message on petRegister', (done: DoneFn) => {
    const newPet: Pet = {
      tutorId: 1,
      tutorName: 'Test',
      petId: 1,
      name: 'New Pet',
      birthDate: new Date(),
      breed: 'Breed',
      color: 'white',
      weight: '2',
      vaccines: [],
    };

    service.petRegister(newPet, 1).subscribe((result: string) => {
      expect(result).toEqual('Pet cadastrado com sucesso!');
      done();
    });
  });

  it('should return false on duplicateNameVerify', (done: DoneFn) => {
    service
      .duplicateNameVerify('Existing Pet', 1)
      .subscribe((result: boolean) => {
        expect(result).toBeFalse();
        done();
      });
  });
});
