import { PetRegisterComponent } from './../../pages/pets/pet-register/pet-register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'test', component: PetRegisterComponent },
          { path: 'dashboard', component: DashboardComponent },
        ]),
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the PawMate icon', () => {
    const iconElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(iconElement.getAttribute('alt')).toBe('PawMate Icon');
  });

  it('should display the "Cadastrar tutor" button on the dashboard route', () => {
    spyOnProperty(router, 'url', 'get').and.returnValue('/dashboard');

    const registerButton = fixture.debugElement.query(By.css('button'));
    expect(registerButton).toBeTrue;
  });

  it('should not display the "Cadastrar tutor" button on routes other than dashboard', () => {
    spyOnProperty(router, 'url', 'get').and.returnValue('/test');

    const registerButton = fixture.debugElement.query(By.css('button'));
    expect(registerButton).toBeNull();
  });
});
