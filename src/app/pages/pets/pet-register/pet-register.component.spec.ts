import { PetRegisterComponent } from './pet-register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsModule } from '../pets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('PetRegisterComponent', () => {
  let component: PetRegisterComponent;
  let fixture: ComponentFixture<PetRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetRegisterComponent],
      imports: [
        PetsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'test', component: PetRegisterComponent },
        ]),
      ],
    });

    fixture = TestBed.createComponent(PetRegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
