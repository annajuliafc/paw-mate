import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './not-found.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotFoundModule } from './not-found.module';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [
        NotFoundModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: NotFoundComponent },
        ]),
      ],
    });

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
