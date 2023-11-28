import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { DashboardModule } from './dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TutorRegisterComponent } from '../tutors/tutor-register/tutor-register.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockDashboardService: DashboardService;
  let mockAlertService: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        DashboardModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'test', component: TutorRegisterComponent },
        ]),
      ],
      providers: [{ provide: AlertService, useValue: mockAlertService }],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    mockDashboardService = TestBed.inject(DashboardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
