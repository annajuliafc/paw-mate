import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { VaccineRegisterDialogComponent } from './vaccine-register-dialog.component';
import { PetVaccines } from 'src/app/shared/utils/PetVaccines';
import { PetsModule } from '../../pets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VaccineRegisterDialogComponent', () => {
  let component: VaccineRegisterDialogComponent;
  let fixture: ComponentFixture<VaccineRegisterDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<
    MatDialogRef<VaccineRegisterDialogComponent>
  >;

  beforeEach(() => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [VaccineRegisterDialogComponent],
      imports: [PetsModule, BrowserAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: dialogRefSpy }],
    }).compileComponents();

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<VaccineRegisterDialogComponent>
    >;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when onNoClick is called', () => {
    component.onNoClick();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should initialize the vaccinesList', () => {
    expect(component.vaccinesList).toEqual(PetVaccines);
  });
});
