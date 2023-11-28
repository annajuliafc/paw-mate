import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TutorsModule } from '../tutors.module';
import { TutorRegisterComponent } from './tutor-register.component';

describe('TutorRegisterComponent', () => {
  let component: TutorRegisterComponent;
  let fixture: ComponentFixture<TutorRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorRegisterComponent],
      imports: [
        TutorsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'test', component: TutorRegisterComponent },
        ]),
      ],
    });

    fixture = TestBed.createComponent(TutorRegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
