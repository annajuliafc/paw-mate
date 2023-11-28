import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { TutorDetailsComponent } from './tutor-details.component';
import { TutorsService } from '../services/tutors.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Tutor } from '../Tutor';
import { TutorsModule } from '../tutors.module';

describe('TutorDetailsComponent', () => {
  let component: TutorDetailsComponent;
  let fixture: ComponentFixture<TutorDetailsComponent>;
  let mockTutorsService: TutorsService;
  let mockActivatedRoute: any;
  let mockAlertService: AlertService;
  let mockRouter: Router;

  beforeEach(() => {
    mockAlertService = jasmine.createSpyObj('AlertService', [
      'openBackendErrorAlert',
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      paramMap: of({
        get: (params: string) => {
          if (params === 'tutorId') return '1';
          if (params === 'petId') return '2';
          return null;
        },
      }),
    };
    TestBed.configureTestingModule({
      declarations: [TutorDetailsComponent],
      imports: [TutorsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AlertService, useValue: mockAlertService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(TutorDetailsComponent);
    component = fixture.componentInstance;
    mockTutorsService = TestBed.inject(TutorsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tutor details on initialization', fakeAsync(() => {
    const mockTutorData: Tutor = {
      tutorId: 1,
      name: 'John',
      nickName: 'Johnny',
      birthDate: new Date(),
      pets: [],
    };

    spyOn(mockTutorsService, 'tutorSearch').and.returnValue(of(mockTutorData));

    fixture.detectChanges();
    tick();

    expect(component.tutor).toEqual(mockTutorData);
  }));

  it('should handle error on fetching tutor details', () => {
    spyOn(mockTutorsService, 'tutorSearch').and.returnValue(throwError('Error test'));
    fixture.detectChanges();
    expect(mockAlertService.openBackendErrorAlert).toHaveBeenCalledTimes(1);
  });

  it('should navigate to pet registration on registerPet()', () => {
    component.tutorId = 1;
    component.registerPet();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['pets/register', 1]);
  });
});
