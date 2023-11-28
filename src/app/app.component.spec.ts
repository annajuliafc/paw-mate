import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PetRegisterComponent } from './pages/pets/pet-register/pet-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'register', component: PetRegisterComponent },
          { path: 'dashboard', component: DashboardComponent },
        ]),
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'paw-mate'`, () => {
    expect(component.title).toEqual('paw-mate');
  });
});
