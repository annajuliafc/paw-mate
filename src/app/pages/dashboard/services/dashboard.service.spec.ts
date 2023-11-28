import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { petsMockData, tutorsMockData } from './dashboardDataMock';
import { take } from 'rxjs/operators';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tutors data', (done) => {
    service
      .getTutorsData()
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toEqual(tutorsMockData);
        done();
      });
  });

  it('should get pets data', (done) => {
    service
      .getPetsData()
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toEqual(petsMockData);
        done();
      });
  });

  it('should get pets data fail', (done) => {
    service
      .getPetsData()
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toEqual(petsMockData);
        done();
      },(error) => {
        expect(error).toThrow(new Error('Ocorreu um erro'));
        done();
      }
      );
  });

  it('should get tutors data fail', (done) => {
    service
      .getTutorsData()
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toEqual(tutorsMockData);
        done();
      },(error) => {
        expect(error).toThrow(new Error('Ocorreu um erro'));
        done();
      }
      );
  });
});
