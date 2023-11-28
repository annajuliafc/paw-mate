import { TestBed } from '@angular/core/testing';
import { TutorsService } from './tutors.service';
import { Tutor } from '../Tutor';
import { tutorDetailsMockData } from '../TutorDetailsMock';

describe('TutorsService', () => {
  let service: TutorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorsService],
    });
    service = TestBed.inject(TutorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tutor details on tutorSearch', (done: DoneFn) => {
    service.tutorSearch(1).subscribe((tutor: Tutor) => {
      expect(tutor).toEqual(tutorDetailsMockData);
      done();
    });
  });

  it('should return tutor details on tutorRegister', (done: DoneFn) => {
    const newTutor: Tutor = {
      tutorId: 2,
      name: 'New Tutor',
      nickName: 'New Nickname',
      birthDate: new Date(),
      pets: []
    };

    service.tutorRegister(newTutor).subscribe((result: Tutor) => {
      expect(result).toEqual(tutorDetailsMockData);
      done();
    });
  });

  it('should return false on duplicateNameVerify', (done: DoneFn) => {
    service
      .duplicateNameVerify('Existing Tutor')
      .subscribe((result: boolean) => {
        expect(result).toBe(false);
        done();
      });
  });
});
